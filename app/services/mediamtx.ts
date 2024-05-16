import env from '#start/env'
import fs from 'node:fs/promises'
import yaml from 'yaml'
import { existsSync, createReadStream } from 'node:fs'
import { execa } from 'execa'
import pm2 from 'pm2'
import type { ApplicationService } from '@adonisjs/core/types'
import type { LoggerService } from '@adonisjs/core/types'
import type { Logger } from '@adonisjs/logger'
import type { NATService } from '#services/nat'
import type { ICEService } from '#services/ice'
import type { ProcessDescription, Proc } from 'pm2'
import type { Readable } from 'node:stream'

/**
 * A class for managing the MediaMTX service process
 */
export class MediaMTXService {
  readonly #binaryPath: string
  readonly #configPath: string
  readonly #app: ApplicationService
  readonly #stdOutLogPath: string
  readonly #stdErrLogPath: string
  #stdOutStream?: Readable
  #stdErrStream?: Readable
  #logger?: Logger

  constructor(app: ApplicationService) {
    this.#app = app
    this.#binaryPath = env.get('MEDIA_MTX_PATH')!
    this.#configPath = env.get('MEDIA_MTX_CONFIG_PATH')!
    this.#stdOutLogPath = this.#app.tmpPath('mediamtx.stdout.log')
    this.#stdErrLogPath = this.#app.tmpPath('mediamtx.stderr.log')
  }

  async boot(logger: LoggerService, nat: NATService, ice: ICEService) {
    this.#logger = logger.child({ service: 'mediamtx' })
    await new Promise<void>((resolve, reject) => {
      pm2.connect(false, (err: Error) => {
        if (err) {
          return reject(err)
        } else {
          return resolve()
        }
      })
    })
    await Promise.all([this.#makeFifo(this.#stdOutLogPath), this.#makeFifo(this.#stdErrLogPath)])
    this.#stdOutStream = createReadStream(this.#stdOutLogPath)
    this.#stdErrStream = createReadStream(this.#stdErrLogPath)
    this.#stdOutStream.on('data', (chunk) => {
      if (this.#logger) {
        chunk
          .toString()
          .split('\n')
          .filter((l: string) => l.trim().length > 0)
          .forEach((l: string) => this.#logger!.info(l))
      }
    })
    this.#stdErrStream.on('data', (chunk) => {
      if (this.#logger) {
        chunk
          .toString()
          .split('\n')
          .filter((l: string) => l.trim().length > 0)
          .forEach((l: string) => this.#logger!.error(l))
      }
    })
    this.#stdOutStream.on('error', (err) => {
      if (this.#logger) {
        this.#logger.error(err)
      }
    })
    this.#stdErrStream.on('error', (err) => {
      if (this.#logger) {
        this.#logger.error(err)
      }
    })
    const mediaMtxConfigRaw = await fs.readFile(this.#configPath, 'utf-8')
    const mediaMtxConfig = yaml.parse(mediaMtxConfigRaw)
    if (true === env.get('MEDIA_MTX_HLS_USE_DISK', false)) {
      try {
        await fs.mkdir(this.#app.tmpPath('hls'))
      } catch {}
    }
    const baseRunOnCommand = ['node', this.#app.makePath('ace.js'), 'mediamtx:on:event']
    const updated: any = {
      ...mediaMtxConfig,
      metrics: false,
      metricsEncryption: false,
      pprof: false,
      pprofEncryption: false,
      playbackEncryption: false,
      runOnConnectRestart: false,
      /**
       * Update the authInternalUsers configuration
       */
      authInternalUsers: [
        {
          user: 'any',
          pass: null,
          ips: [],
          permissions: [
            { action: 'read', path: null },
            { action: 'playback', path: null },
          ],
        },
        {
          user: 'any',
          pass: null,
          ips: ['127.0.0.1', '::1'],
          permissions: [
            { action: 'read', path: null },
            { action: 'playback', path: null },
            { action: 'publish', path: null },
            { action: 'api' },
          ],
        },
      ],
      /**
       * Update the API configuration
       */
      api: true,
      apiAddress: `${env.get('HOST')}:${env.get('MEDIA_MTX_RTSP_API_PORT', 9997)}`,
      apiTrustedProxies: ['127.0.0.1', '::1', ...nat.lanIps],
      apiEncryption: false,
      /**
       * Update the Playback configuration
       */
      playback: env.get('MEDIA_MTX_PLAYBACK_ENABLED', true) ? true : false,
      playbackAddress: `${env.get('HOST')}:${env.get('MEDIA_MTX_RTSP_PLAYBACK_PORT', 9996)}`,
      playbackTrustedProxies: ['127.0.0.1', '::1', ...nat.lanIps],
      /**
       * Update the RTSP configuration
       */
      rtsp: true === env.get('MEDIA_MTX_RTSP_ENABLED', true) ? true : false,
      encryption: 'no',
      protocols: ['tcp', 'udp'],
      rtspAddress: `${env.get('HOST')}:${env.get('MEDIA_MTX_RTSP_TCP_PORT', 8554)}`,
      rtpAddress: `${env.get('HOST')}:${env.get('MEDIA_MTX_RTSP_UDP_RTP_PORT', 8000)}`,
      rtcpAddress: `${env.get('HOST')}:${env.get('MEDIA_MTX_RTSP_UDP_RTCP_PORT', 8001)}`,
      /**
       * Update the RTMP configuration
       */
      rtmp: true === env.get('MEDIA_MTX_RTMP_ENABLED', false) ? true : false,
      rtmpAddress: `${env.get('HOST')}:${env.get('MEDIA_MTX_RTMP_PORT', 1935)}`,
      /**
       * Update the HLS configuration
       */
      hls: true === env.get('MEDIA_MTX_HLS_ENABLED', false) ? true : false,
      hlsEncryption: false,
      hlsAddress: `${env.get('HOST')}:${env.get('MEDIA_MTX_HLS_PORT', 8888)}`,
      hlsTrustedProxies: ['127.0.0.1', '::1', ...nat.lanIps],
      hlsAlwaysRemux: false,
      hlsVariant: 'mpegts',
      hlsSegmentCount: 7,
      hlsSegmentDuration: '1s',
      hlsPartDuration: '200ms',
      hlsSegmentMaxSize: '50M',
      hlsDirectory:
        true === env.get('MEDIA_MTX_HLS_USE_DISK', false) ? this.#app.tmpPath('hls') : '',
      /**
       * Update the WebRTC configuration
       */
      webrtc: true === env.get('MEDIA_MTX_WEB_RTC_ENABLED', false) ? true : false,
      webrtcAddress: `${env.get('HOST')}:${env.get('MEDIA_MTX_WEB_RTC_PORT', 8889)}`,
      webrtcEncryption: false,
      webrtcTrustedProxies: ['127.0.0.1', '::1', ...nat.lanIps],
      webrtcLocalUDPAddress: `${env.get('HOST')}:${env.get('MEDIA_MTX_WEB_RTC_UDP_PORT', 8189)}`,
      webrtcAdditionalHosts: ['127.0.0.1', '::1', ...nat.lanIps, nat.publicIp],
      webrtcICEServers2: ice.asMediaMtxIceServers,
      webrtcIPsFromInterfaces: true,
      /**
       * Update the SRT configuration
       */
      srt: true === env.get('MEDIA_MTX_SRT_ENABLED', false) ? true : false,
      srtAddress: `${env.get('HOST')}:${env.get('MEDIA_MTX_SRT_PORT', 8890)}`,
      /**
       * Update the path defaults configuration
       */
      pathDefaults: {
        // runOnInit: [...baseRunOnCommand, 'init'].join(' '),
        // runOnInitRestart: false,
        runOnDemand: [...baseRunOnCommand, 'demand'].join(' '),
        runOnDemandRestart: false,
        runOnUnDemand: [...baseRunOnCommand, 'unDemand'].join(' '),
        runOnReady: [...baseRunOnCommand, 'ready'].join(' '),
        runOnReadyRestart: false,
        runOnNotReady: [...baseRunOnCommand, 'notReady'].join(' '),
        runOnRead: [...baseRunOnCommand, 'read'].join(' '),
        runOnReadRestart: false,
        runOnUnread: [...baseRunOnCommand, 'unread'].join(' '),
        runOnRecordSegmentCreate: [...baseRunOnCommand, 'recordSegmentCreate'].join(' '),
        runOnRecordSegmentComplete: [...baseRunOnCommand, 'recordSegmentComplete'].join(' '),
      },
      /**
       * Update the path configuration
       */
      paths: {
        all_others: null,
      },
    }
    const updatedConfigPath = this.#app.tmpPath('nestmtx.yml')
    await fs.writeFile(
      updatedConfigPath,
      yaml.stringify(updated, {
        falseStr: 'false',
        trueStr: 'true',
        nullStr: '',
        strict: false,
        toStringDefaults: {
          defaultKeyType: 'PLAIN',
          defaultStringType: 'QUOTE_SINGLE',
        },
      })
    )
    const list: ProcessDescription[] = await new Promise<ProcessDescription[]>(
      (resolve, reject) => {
        pm2.list((err, processDescriptionList) => {
          if (err) {
            return reject(err)
          } else {
            return resolve(processDescriptionList)
          }
        })
      }
    )
    if (list.length > 0) {
      const hasExisting = list.some((process) => process.name === 'mediamtx')
      if (hasExisting) {
        logger.info('Stopping existing MediaMTX service')
        await new Promise<void>((resolve, reject) => {
          pm2.delete('mediamtx', (err) => {
            if (err) {
              return reject(err)
            } else {
              return resolve()
            }
          })
        })
        logger.info('Stopped existing MediaMTX service')
      }
    }
    this.#logger!.info('Starting MediaMTX service')
    await new Promise<Proc>((resolve, reject) => {
      pm2.start(
        {
          name: 'mediamtx',
          script: this.#binaryPath,
          args: [updatedConfigPath],
          autorestart: true,
          max_restarts: 5,
          cwd: this.#app.tmpPath(),
          output: this.#stdOutLogPath,
          error: this.#stdErrLogPath,
          pid: this.#app.tmpPath('mediamtx.pid'),
          time: false,
          interpreter: 'none',
        },
        (err, proc: Proc) => {
          if (err) {
            return reject(err)
          } else {
            return resolve(proc)
          }
        }
      )
    })
    this.#logger!.info('Started MediaMTX service')
  }

  async #makeFifo(path: string) {
    if (existsSync(path)) {
      await fs.unlink(path)
    }
    await execa('mkfifo', [path])
  }
}
