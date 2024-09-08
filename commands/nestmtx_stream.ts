/**
 * This script starts an audio/video stream to the MediaMTX server
 * The script outputs 2 video streams:
 * - 1 encoded with the H.264 codec without b-frames
 * - 1 encoded with the H.264 codec with b-frames
 * and 2 audio streams:
 * - 1 encoded with the AAC codec
 * - 1 encoded with the Opus codec
 * It also is able to switch between 4 possible video sources:
 * - Source 1: an MJPEG stream which has no audio which emits a frame every 100ms used as stream to show while initializing other streams
 * - Source 2: an MJPEG stream which has no audio which emits a frame every 100ms used as stream to show when the desired path has no associated camera
 * - Source 3: an MJPEG stream which has no audio which emits a frame every 100ms used as stream to show when the camera associated with the desired path is disabled
 * - Source 4: Either
 *  * a remote RTSPS stream over UDP hosted on Google Nests' Cloud. Video is encoded with the H.264 codec and audio is encoded with the AAC codec
 *  * a stream of RTP packets over UDP which are generated by requesting a stream from Google's Nest camera over WebRTC. Video is encoded with the H.264 codec and audio is encoded with the Opus codec
 */
import { io } from 'socket.io-client'
import { execa } from 'execa'
import { BaseCommand, args } from '@adonisjs/core/ace'
import { DateTime } from 'luxon'
import { getRtspStreamCharacteristics } from '#utilities/rtsp'
import { getHostnameFromRtspUrl } from '#utilities/url'
import env from '#start/env'
import Camera from '#models/camera'

import type { CommandOptions } from '@adonisjs/core/types/ace'
import type { ExecaChildProcess } from 'execa'
import type { smartdevicemanagement_v1 } from 'googleapis'
import type { RtspStreamCharacteristics } from '#utilities/rtsp'
import type { Socket as StreamPrivateApiClient } from 'socket.io-client'

export default class NestmtxStream extends BaseCommand {
  static commandName = 'nestmtx:stream'
  static description = 'Start a stream to the MediaMTX server'

  static options: CommandOptions = {
    startApp: true,
  }

  @args.string({ description: 'The path to start the stream for' })
  declare path: string

  @args.string({
    description:
      'The port on which the nestmtx streamer private API is awaiting for connections on',
  })
  declare port: string

  #api?: StreamPrivateApiClient
  #streamer?: ExecaChildProcess

  #cameraMissingPort?: number
  #cameraDisabledPort?: number
  #cameraConnectingPort?: number

  get #cameraMissingMjpegStream() {
    return `http://127.0.0.1:${this.#cameraMissingPort}`
  }

  get #cameraDisabledMjpegStream() {
    return `http://127.0.0.1:${this.#cameraDisabledPort}`
  }

  get #cameraConnectingMjpegStream() {
    return `http://127.0.0.1:${this.#cameraConnectingPort}`
  }

  get #destination() {
    return `srt://127.0.0.1:${env.get('MEDIA_MTX_SRT_PORT', 8890)}/?streamid=publish:${this.path}&pkt_size=1316`
  }

  async run() {
    process.once('SIGINT', this.#gracefulExit.bind(this))
    this.logger.info(`NestMTX Streamer for "${this.path}"`)
    const privateApiServerUrl = `http://127.0.0.1:${this.port}`
    this.logger.info(`Searching for Private API Server`)
    await new Promise<void>((resolve) => {
      this.#api = io(privateApiServerUrl, {
        autoConnect: false,
        reconnection: false,
        timeout: 1000,
      })
      this.#api.once('error', () => {
        this.logger.error(`Private API Server not found`)
        process.exit(1)
      })
      this.#api.once('connect', () => {
        this.logger.info(`Private API Server connected`)
      })
      this.#api.once('disconnect', () => {
        this.logger.error(`Private API Server disconnected`)
        process.exit(1)
      })
      this.#api.once(
        'ports',
        (ports: { cameraMissing: number; cameraDisabled: number; cameraConnecting: number }) => {
          this.#cameraMissingPort = ports.cameraMissing
          this.#cameraDisabledPort = ports.cameraDisabled
          this.#cameraConnectingPort = ports.cameraConnecting
          this.logger.info(`Ports configured`)
          resolve()
        }
      )
      this.#api.connect()
    })
    this.logger.info(`Searching for Camera`)
    const camera = await Camera.findBy({ mtx_path: this.path })
    if (!camera) {
      this.logger.info(`Camera not found`)
      this.#launchStatic(this.#cameraMissingMjpegStream)
    } else if (
      !camera.isEnabled ||
      !camera.protocols ||
      (!camera.protocols.includes('WEB_RTC') && !camera.protocols.includes('RTSP'))
    ) {
      this.logger.info(`Camera disabled`)
      this.#launchStatic(this.#cameraDisabledMjpegStream)
    } else {
      await camera.load('credential')
      const service: smartdevicemanagement_v1.Smartdevicemanagement =
        await camera.credential.getSDMClient()
      try {
        if (camera.protocols.includes('WEB_RTC')) {
          this.#launchStatic(this.#cameraConnectingMjpegStream)
        } else if (camera.protocols.includes('RTSP')) {
          await this.#rtspStart(service, camera)
        }
      } catch (err) {
        this.logger.error(err.message)
        process.exit(1)
      }
    }
  }

  #launchStatic(src: string) {
    const ffmpegBinary = env.get('FFMPEG_BIN', 'ffmpeg')
    const ffmpegArgs = [
      '-loglevel',
      'warning',
      '-fflags',
      '+discardcorrupt', // Ignore corrupted frames
      '-re', // Read input at native frame rate
      '-i',
      `"${src}"`, // Input MJPEG stream with quotes
      '-f',
      'lavfi', // Use FFmpeg's signal generator for AAC audio
      '-i',
      'sine=frequency=1000:sample_rate=48000:duration=3600', // Generate a 1kHz sine wave for AAC audio
      '-f',
      'lavfi', // Use FFmpeg's signal generator for Opus audio
      '-i',
      'sine=frequency=1000:sample_rate=48000:duration=3600', // Generate a 1kHz sine wave for Opus audio

      // Single H.264 Video Stream (without B-frames)
      '-c:v',
      'libx264',
      '-tune',
      'zerolatency', // Tune for low latency
      '-x264opts',
      'bframes=0', // No B-frames
      '-preset',
      'ultrafast', // Ultrafast preset
      '-b:v',
      '1000k', // Set video bitrate

      // Set pixel format to avoid deprecated warning
      '-pix_fmt',
      'yuv420p',

      // AAC Audio Stream
      '-c:a:0',
      'aac',
      '-b:a:0',
      '128k', // Audio bitrate for AAC

      // Opus Audio Stream
      '-c:a:1',
      'libopus',
      '-b:a:1',
      '128k', // Audio bitrate for Opus

      '-map',
      '0:v', // Map the video input to the H.264 video stream
      '-map',
      '1:a', // Map the AAC audio to the first audio track
      '-map',
      '2:a', // Map the Opus audio to the second audio track

      '-f',
      'mpegts', // Set the format to MPEG-TS
      `"${this.#destination}"`, // SRT destination with quotes
    ]

    this.#streamer = execa(ffmpegBinary, ffmpegArgs, {
      stdio: 'pipe',
      reject: false,
      shell: true,
    })
    this.#streamer.stdout!.on('data', (data) => {
      this.logger.info(data.toString())
    })
    this.#streamer.stderr!.on('data', (data) => {
      this.logger.warning(data.toString())
    })
    this.#streamer.on('exit', async (code) => {
      if (code === 255) {
        return
      }
      if (code === 8) {
        const result = await this.#streamer
        this.logger.error(`${result!.escapedCommand} failed with code ${result!.exitCode}`)
      } else {
        this.logger.info(`FFMpeg exited with code ${code}`)
      }
      process.exit(code ? code : 0)
    })
  }

  async #rtspStart(service: smartdevicemanagement_v1.Smartdevicemanagement, camera: Camera) {
    const ffmpegBinary = env.get('FFMPEG_BIN', 'ffmpeg')
    const {
      data: { results },
    } = await service.enterprises.devices.executeCommand({
      name: camera.uid,
      requestBody: {
        command: 'sdm.devices.commands.CameraLiveStream.GenerateRtspStream',
      },
    })
    if (!results!.streamUrls || !results!.streamUrls.rtspUrl) {
      throw new Error('RTSP Stream URL not found')
    }
    if (!results!.streamExtensionToken) {
      throw new Error('No stream extension token found')
    }

    camera.streamExtensionToken = results!.streamExtensionToken
    camera.expiresAt = DateTime.utc().plus({ minutes: 5 })
    if (results!.expiresAt) {
      const expiresAt = DateTime.fromISO(results!.expiresAt)
      if (expiresAt.isValid) {
        camera.expiresAt = expiresAt
      }
    }
    await camera.save()
    const rtspSrc = results!.streamUrls.rtspUrl
    this.logger.info(`Getting RTSP stream characteristics for "${getHostnameFromRtspUrl(rtspSrc)}"`)
    const characteristics: RtspStreamCharacteristics = await getRtspStreamCharacteristics(rtspSrc)
    const videoBitrate = characteristics.video.bitrate || 1000
    const frameRate = characteristics.video.frameRate || '30/1'

    const ffmpegArgs: string[] = [
      '-loglevel',
      'warning', // Suppress most log messages, only show warnings
      '-fflags',
      '+discardcorrupt', // Ignore corrupted frames
      '-re', // Read input at native frame rate
      '-i',
      `"${rtspSrc}"`, // Input RTSP stream with quotes

      // Single H.264 Video Stream (without B-frames)
      '-c:v',
      'libx264',
      '-tune',
      'zerolatency', // Tune for low latency
      '-x264opts',
      'bframes=0', // No B-frames
      '-preset',
      'ultrafast', // Ultrafast preset
      `-b:v`,
      `${videoBitrate}k`, // Set video bitrate dynamically
      '-r',
      `${frameRate.split('/')[0]}`, // Set frame rate dynamically

      // Set pixel format to avoid deprecated warning
      '-pix_fmt',
      'yuv420p',

      // AAC Audio Stream
      '-c:a:0',
      'aac',
      '-b:a:0',
      '128k', // Audio bitrate for AAC

      // Opus Audio Stream
      '-c:a:1',
      'libopus',
      '-b:a:1',
      '128k', // Audio bitrate for Opus

      // Mapping inputs and outputs
      '-map',
      '0:v', // Map the video input to the H.264 video stream
      '-map',
      '0:a', // Map the original AAC audio to the first audio track
      '-map',
      '0:a', // Map the original audio again for Opus encoding

      '-f',
      'mpegts', // Set the format to MPEG-TS
      `"${this.#destination}"`, // SRT destination with quotes
    ]

    this.logger.info(`Starting FFMpeg with RTSP stream`)
    this.#streamer = execa(ffmpegBinary, ffmpegArgs, {
      stdio: 'pipe',
      reject: false,
      shell: true,
    })

    this.#streamer.stdout!.on('data', (data) => {
      this.logger.info(data.toString())
    })

    this.#streamer.stderr!.on('data', (data) => {
      this.logger.warning(data.toString())
    })

    this.#streamer.on('exit', async (code) => {
      if (code === 255) {
        return
      }
      if (code === 8) {
        const result = await this.#streamer
        this.logger.error(`${result!.escapedCommand} failed with code ${result!.exitCode}`)
      } else {
        this.logger.info(`FFMpeg exited with code ${code}`)
      }
      process.exit(code ? code : 0)
    })
  }

  #gracefulExit() {
    if (this.#streamer) {
      this.#streamer.kill('SIGKILL')
    }
    process.exit(0)
  }
}