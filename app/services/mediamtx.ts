import env from '#start/env'
import fs from 'node:fs/promises'
import yaml from 'yaml'
import { mediamtxClientFactory } from '#clients/mediamtx'
import { logger as main } from '#services/logger'
import type { PM3 } from '#services/pm3'
import type { ApplicationService } from '@adonisjs/core/types'
import type { LoggerService } from '@adonisjs/core/types'
import type { NATService } from '#services/nat'
import type { ICEService } from '#services/ice'
import type { MediaMTXClient } from '#clients/mediamtx'
import type winston from 'winston'

interface MediaMTXApiPathSource {
  type?:
    | 'hlsSource'
    | 'redirect'
    | 'rpiCameraSource'
    | 'rtmpConn'
    | 'rtmpSource'
    | 'rtspSession'
    | 'rtspSource'
    | 'rtspsSession'
    | 'srtConn'
    | 'srtSource'
    | 'udpSource'
    | 'webRTCSession'
    | 'webRTCSource'
  id?: string
}

interface MediaMTXApiPathReader {
  type?: 'hlsMuxer' | 'rtmpConn' | 'rtspSession' | 'rtspsSession' | 'srtConn' | 'webRTCSession'
  id?: string
}

interface MediaMTXApiPath {
  name?: string
  confName?: string
  source?: MediaMTXApiPathSource
  ready?: boolean
  readyTime?: string | null
  tracks?: string[]
  bytesReceived?: number // int64
  bytesSent?: number // int64
  readers?: MediaMTXApiPathReader[]
}

export interface MediaMtxPath {
  path: string
  src: string
  ready: boolean
  uptime: string | null
  tracks: number
  dataRx: number
  dataTx: number
  consumers: number
}

/**
 * A class for managing the MediaMTX service process
 */
export class MediaMTXService {
  readonly #binaryPath: string
  readonly #configPath: string
  readonly #app: ApplicationService
  readonly #paths: Map<string, MediaMtxPath> = new Map()
  readonly #logger: winston.Logger
  #apiClient?: MediaMTXClient
  #cronAbortController?: AbortController

  constructor(app: ApplicationService) {
    this.#logger = main.child({ service: 'mediamtx' })
    this.#app = app
    this.#binaryPath = env.get('MEDIA_MTX_PATH')!
    this.#configPath = env.get('MEDIA_MTX_CONFIG_PATH')!
  }

  get paths() {
    return [...this.#paths].map(([, path]) => path)
  }

  getPaths() {
    return [...this.#paths].map(([, path]) => path)
  }

  async boot(_logger: LoggerService, nat: NATService, ice: ICEService, pm3: PM3) {
    pm3.on('stdout:mediamtx', (data) => {
      this.#logFromMediaMtx(data)
    })
    pm3.on('stderr:mediamtx', (data) => {
      this.#logFromMediaMtx(data, 'error')
    })
    pm3.on('error:mediamtx', (data) => {
      this.#logFromMediaMtx(data, 'error')
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
      readTimeout: '60s',
      writeQueueSize: 1024,
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
      apiAddress: `${env.get('HOST')}:${env.get('MEDIA_MTX_API_PORT', 9997)}`,
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
      rtsp: true,
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
      webrtcHandshakeTimeout: '10s',
      webrtcTrackGatherTimeout: '60s',
      /**
       * Update the SRT configuration
       */
      // srt: true === env.get('MEDIA_MTX_SRT_ENABLED', false) ? true : false,
      srt: true,
      srtAddress: `${env.get('HOST')}:${env.get('MEDIA_MTX_SRT_PORT', 8890)}`,
      /**
       * Update the path defaults configuration
       */
      pathDefaults: {
        // runOnInit: [...baseRunOnCommand, 'init'].join(' '),
        // runOnInitRestart: false,
        runOnDemand: [...baseRunOnCommand, 'demand'].join(' '),
        runOnDemandStartTimeout: '60s',
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
    const hasExisting = pm3.processes.some((process) => process.name === 'mediamtx')
    if (hasExisting) {
      this.#logger.info('Stopping & Removing existing MediaMTX service')
      await pm3.remove('mediamtx')
      this.#logger.info('Stopped & Removed existing MediaMTX service')
    }
    this.#logger!.info('Starting MediaMTX service')
    pm3.add(
      'mediamtx',
      {
        file: this.#binaryPath,
        arguments: [updatedConfigPath],
        restart: true,
        maxRestarts: Number.POSITIVE_INFINITY,
      },
      true
    )
    this.#logger!.info('Started MediaMTX service')
    const apiHostName = env.get('HOST') === '0.0.0.0' ? '127.0.0.1' : env.get('HOST')
    const apiServerUrl = `http://${apiHostName}:${env.get('MEDIA_MTX_API_PORT', 9997)}`
    this.#apiClient = await mediamtxClientFactory(apiServerUrl)
  }

  async cron() {
    if (!this.#apiClient) {
      return
    }
    if (this.#cronAbortController) {
      this.#cronAbortController.abort()
    }
    this.#cronAbortController = new AbortController()
    try {
      const all = await this.#getAllActiveMediaMtxPaths(this.#cronAbortController.signal)
      const names = all.map((p) => p.name)
      const toRemove = Array.from(this.#paths.keys()).filter((name) => !names.includes(name))
      toRemove.forEach((name) => {
        this.#paths.delete(name)
      })
      all.forEach((path) => {
        const p: MediaMtxPath = {
          path: path.name || '',
          src: path.source ? path.source.type || '' : '',
          ready: path.ready || false,
          uptime: path.readyTime || null,
          tracks: path.tracks ? path.tracks.length : 0,
          dataRx: path.bytesReceived || 0,
          dataTx: path.bytesSent || 0,
          consumers: path.readers ? path.readers.length : 0,
        }
        this.#paths.set(p.path, p)
      })
    } catch (error) {
      if (this.#logger) {
        this.#logger.error(error)
      }
      this.#paths.forEach((_, p) => {
        this.#paths.delete(p)
      })
    }
  }

  async #getAllActiveMediaMtxPaths(signal?: AbortSignal) {
    let page = 0
    let itemsPerPage = 100
    let pageCount = 1
    let ret: Array<MediaMTXApiPath> = []
    if (!this.#apiClient) {
      return ret
    }
    while (page < pageCount) {
      if (signal && signal.aborted) {
        break
      }
      try {
        const { data } = await this.#apiClient.pathsList(
          {
            page,
            itemsPerPage,
          },
          {
            signal,
          }
        )
        pageCount = data.pageCount || 0
        if (Array.isArray(data.items)) {
          data.items.forEach((item) => {
            ret.push(item)
          })
        }
      } catch {
        break
      }
    }
    return ret
  }

  #logFromMediaMtx(line: string, fallback: string = 'info') {
    const pattern =
      /^\d+\/\d+\/\d+\s+\d+:\d+:\d+\s+((DEB|INF|WAR|ERR))\s+(\[[a-zA-Z0-9]+\]\s*)?(.*)$/gm
    const matches = [...line.matchAll(pattern)]
    matches.forEach((match) => {
      const mediaMtxLevel = match[1] ? match[1].trim() : undefined
      const mediaMtxService = match[3]
        ? match[3].trim().replace('[', '').replace(']', '').trim()
        : undefined
      const mediaMtxMessage = match[4] ? match[4].trim() : undefined
      let level: string = fallback
      switch (mediaMtxLevel) {
        case 'DEB':
          level = 'debug'
          break

        case 'INF':
          level = 'info'
          break

        case 'WAR':
          level = 'warning'
          break

        case 'ERR':
          level = 'error'
          break
      }
      const logger = this.#logger.child({ subservice: mediaMtxService })
      logger.log(level, mediaMtxMessage)
    })
  }
}
