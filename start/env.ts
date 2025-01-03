/*
|--------------------------------------------------------------------------
| Environment variables service
|--------------------------------------------------------------------------
|
| The `Env.create` method creates an instance of the Env service. The
| service validates the environment variables and also cast values
| to JavaScript data types.
|
*/

import { Env } from '@adonisjs/core/env'

export default await Env.create(new URL('../', import.meta.url), {
  HOME: Env.schema.string(),
  NODE_ENV: Env.schema.enum(['development', 'production', 'test'] as const),
  PORT: Env.schema.number(),
  APP_KEY: Env.schema.string(),
  HOST: Env.schema.string({ format: 'host' }),
  LOG_LEVEL: Env.schema.enum.optional([
    'emerg',
    'alert',
    'crit',
    'error',
    'warning',
    'notice',
    'info',
    'debug',
  ]),
  PINO_PORT: Env.schema.number.optional(),
  NO_SUCH_CAMERA_PORT: Env.schema.number.optional(),
  CAMERA_DISABLED_PORT: Env.schema.number.optional(),
  CONNECTING_PORT: Env.schema.number.optional(),
  INTERNAL_API_PORT: Env.schema.number.optional(),
  /**
   * Database Configuration
   */
  DB_CONNECTION: Env.schema.enum.optional(['sqlite', 'mysql', 'pg', 'mssql'] as const),
  DB_HOST: Env.schema.string.optional({ format: 'host' }),
  DB_PORT: Env.schema.number.optional(),
  DB_USER: Env.schema.string.optional(),
  DB_PASSWORD: Env.schema.string.optional(),
  DB_NAME: Env.schema.string.optional(),
  DB_SECURE: Env.schema.boolean.optional(),
  /**
   * MQTT Client Configuration
   */
  MQTT_PROTOCOL: Env.schema.enum.optional([
    'wss',
    'ws',
    'mqtt',
    'mqtts',
    'tcp',
    'ssl',
    'wx',
    'wxs',
    'ali',
    'alis',
  ] as const),
  MQTT_HOST: Env.schema.string.optional({ format: 'host' }),
  MQTT_PORT: Env.schema.number.optional(),
  MQTT_USER: Env.schema.string.optional(),
  MQTT_PASS: Env.schema.string.optional(),
  /**
   * Twilio Configuration
   */
  TWILIO_ACCOUNT_SID: Env.schema.string.optional(),
  TWILIO_API_KEY_SID: Env.schema.string.optional(),
  TWILIO_API_KEY_SECRET: Env.schema.string.optional(),
  /**
   * Network Address Translation Configuration
   */
  IP_PUBLIC_RESOLVED: Env.schema.string.optional(),
  IP_RESOLVERS_ENABLED: Env.schema.string.optional(),
  IP_LAN_RESOLVED: Env.schema.string.optional(),
  /**
   * ICE Configuration
   */
  ICE_USE_TWILIO: Env.schema.boolean.optional(),
  /**
   * MediaMTX Configuration
   */
  MEDIA_MTX_PATH: Env.schema.string(),
  MEDIA_MTX_CONFIG_PATH: Env.schema.string(),
  MEDIA_MTX_API_PORT: Env.schema.number.optional(),
  MEDIA_MTX_PLAYBACK_ENABLED: Env.schema.boolean.optional(),
  MEDIA_MTX_RTSP_PLAYBACK_PORT: Env.schema.number.optional(),
  MEDIA_MTX_RTSP_ENABLED: Env.schema.boolean.optional(),
  MEDIA_MTX_RTMP_ENABLED: Env.schema.boolean.optional(),
  MEDIA_MTX_HLS_ENABLED: Env.schema.boolean.optional(),
  MEDIA_MTX_HLS_USE_DISK: Env.schema.boolean.optional(),
  MEDIA_MTX_WEB_RTC_ENABLED: Env.schema.boolean.optional(),
  MEDIA_MTX_SRT_ENABLED: Env.schema.boolean.optional(),
  MEDIA_MTX_RTSP_TCP_PORT: Env.schema.number.optional(),
  MEDIA_MTX_RTSP_UDP_RTP_PORT: Env.schema.number.optional(),
  MEDIA_MTX_RTSP_UDP_RTCP_PORT: Env.schema.number.optional(),
  MEDIA_MTX_RTMP_PORT: Env.schema.number.optional(),
  MEDIA_MTX_HLS_PORT: Env.schema.number.optional(),
  MEDIA_MTX_WEB_RTC_PORT: Env.schema.number.optional(),
  MEDIA_MTX_WEB_RTC_UDP_PORT: Env.schema.number.optional(),
  MEDIA_MTX_SRT_PORT: Env.schema.number.optional(),
  /**
   * GStreamer Configuration
   */
  GSTREAMER_BIN: Env.schema.string.optional(),
  GSTREAMER_DEBUG_LEVEL: Env.schema.enum.optional([
    '0',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '9',
  ] as const),
  /**
   * FFmpeg Configuration
   */
  FFMPEG_BIN: Env.schema.string.optional(),
  FFMPEG_HW_ACCELERATOR: Env.schema.string.optional(),
  FFMPEG_HW_ACCELERATOR_DEVICE: Env.schema.string.optional(),
  FFMPEG_DEBUG_LEVEL: Env.schema.enum.optional([
    'quiet',
    'panic',
    'fatal',
    'error',
    'warning',
    'info',
    'verbose',
    'debug',
    'trace',
  ] as const),
  /**
   * WebRTC Configuration
   */
  WEBRTC_RTP_MIN_PORT: Env.schema.number.optional(),
  WEBRTC_RTP_MAX_PORT: Env.schema.number.optional(),
  /**
   * HTTPS Configuration
   */
  HTTPS_PORT: Env.schema.number(),
  HTTPS_CERT_PATH: Env.schema.string.optional(),
  HTTPS_KEY_PATH: Env.schema.string.optional(),
  /**
   * NestMTX Configuration
   */
  NESTMTX_RTSP_TCP_PORT: Env.schema.number.optional(),
  NESTMTX_RTSP_UDP_RTP_PORT: Env.schema.number.optional(),
  NESTMTX_RTSP_UDP_RTCP_PORT: Env.schema.number.optional(),
  NESTMTX_RTMP_PORT: Env.schema.number.optional(),
  NESTMTX_HLS_PORT: Env.schema.number.optional(),
  NESTMTX_WEB_RTC_PORT: Env.schema.number.optional(),
  NESTMTX_WEB_RTC_UDP_PORT: Env.schema.number.optional(),
  NESTMTX_SRT_PORT: Env.schema.number.optional(),
  /**
   * Dropcam Configuration
   */
  DROPCAM_EXCLUDED_DATACENTERS: Env.schema.string.optional(),
  DROPCAM_EXCLUDED_PHONETICS: Env.schema.string.optional(),
  DROPCAM_EXCLUDED_DATACENTER_ZONES: Env.schema.string.optional(),
  DROPCAM_EXCLUDED_HOSTNAMES: Env.schema.string.optional(),
  DROPCAM_MAX_CASCADES: Env.schema.number.optional(),
})
