import type { OpenAPIV3 } from 'openapi-types'
const definition: OpenAPIV3.Document = {
  openapi: '3.0.0',
  info: {
    version: '1.9.0',
    title: 'MediaMTX API',
    description: 'API of MediaMTX, a server and proxy that supports various protocols.',
    license: { name: 'MIT', url: 'https://opensource.org/licenses/MIT' },
  },
  servers: [{ url: 'http://localhost:9997' }],
  security: [],
  components: {
    schemas: {
      Error: { type: 'object', properties: { error: { type: 'string' } } },
      AuthInternalUser: {
        type: 'object',
        properties: {
          user: { type: 'string' },
          pass: { type: 'string' },
          ips: { type: 'array', items: { type: 'string' } },
          permissions: {
            type: 'array',
            items: { $ref: '#/components/schemas/AuthInternalUserPermission' },
          },
        },
      },
      AuthInternalUserPermission: {
        type: 'object',
        properties: { action: { type: 'string' }, path: { type: 'string' } },
      },
      GlobalConf: {
        type: 'object',
        properties: {
          logLevel: { type: 'string' },
          logDestinations: { type: 'array', items: { type: 'string' } },
          logFile: { type: 'string' },
          readTimeout: { type: 'string' },
          writeTimeout: { type: 'string' },
          writeQueueSize: { type: 'integer' },
          udpMaxPayloadSize: { type: 'integer' },
          runOnConnect: { type: 'string' },
          runOnConnectRestart: { type: 'boolean' },
          runOnDisconnect: { type: 'string' },
          authMethod: { type: 'string' },
          authInternalUsers: {
            type: 'array',
            items: { $ref: '#/components/schemas/AuthInternalUser' },
          },
          authHTTPAddress: { type: 'string' },
          authHTTPExclude: {
            type: 'array',
            items: { $ref: '#/components/schemas/AuthInternalUserPermission' },
          },
          authJWTJWKS: { type: 'string' },
          authJWTClaimKey: { type: 'string' },
          api: { type: 'boolean' },
          apiAddress: { type: 'string' },
          apiEncryption: { type: 'boolean' },
          apiServerKey: { type: 'string' },
          apiServerCert: { type: 'string' },
          apiAllowOrigin: { type: 'string' },
          apiTrustedProxies: { type: 'array', items: { type: 'string' } },
          metrics: { type: 'boolean' },
          metricsAddress: { type: 'string' },
          metricsEncryption: { type: 'boolean' },
          metricsServerKey: { type: 'string' },
          metricsServerCert: { type: 'string' },
          metricsAllowOrigin: { type: 'string' },
          metricsTrustedProxies: { type: 'array', items: { type: 'string' } },
          pprof: { type: 'boolean' },
          pprofAddress: { type: 'string' },
          pprofEncryption: { type: 'boolean' },
          pprofServerKey: { type: 'string' },
          pprofServerCert: { type: 'string' },
          pprofAllowOrigin: { type: 'string' },
          pprofTrustedProxies: { type: 'array', items: { type: 'string' } },
          playback: { type: 'boolean' },
          playbackAddress: { type: 'string' },
          playbackEncryption: { type: 'boolean' },
          playbackServerKey: { type: 'string' },
          playbackServerCert: { type: 'string' },
          playbackAllowOrigin: { type: 'string' },
          playbackTrustedProxies: { type: 'array', items: { type: 'string' } },
          rtsp: { type: 'boolean' },
          protocols: { type: 'array', items: { type: 'string' } },
          encryption: { type: 'string' },
          rtspAddress: { type: 'string' },
          rtspsAddress: { type: 'string' },
          rtpAddress: { type: 'string' },
          rtcpAddress: { type: 'string' },
          multicastIPRange: { type: 'string' },
          multicastRTPPort: { type: 'integer' },
          multicastRTCPPort: { type: 'integer' },
          serverKey: { type: 'string' },
          serverCert: { type: 'string' },
          rtspAuthMethods: { type: 'array', items: { type: 'string' } },
          rtmp: { type: 'boolean' },
          rtmpAddress: { type: 'string' },
          rtmpEncryption: { type: 'string' },
          rtmpsAddress: { type: 'string' },
          rtmpServerKey: { type: 'string' },
          rtmpServerCert: { type: 'string' },
          hls: { type: 'boolean' },
          hlsAddress: { type: 'string' },
          hlsEncryption: { type: 'boolean' },
          hlsServerKey: { type: 'string' },
          hlsServerCert: { type: 'string' },
          hlsAllowOrigin: { type: 'string' },
          hlsTrustedProxies: { type: 'array', items: { type: 'string' } },
          hlsAlwaysRemux: { type: 'boolean' },
          hlsVariant: { type: 'string' },
          hlsSegmentCount: { type: 'integer' },
          hlsSegmentDuration: { type: 'string' },
          hlsPartDuration: { type: 'string' },
          hlsSegmentMaxSize: { type: 'string' },
          hlsDirectory: { type: 'string' },
          hlsMuxerCloseAfter: { type: 'string' },
          webrtc: { type: 'boolean' },
          webrtcAddress: { type: 'string' },
          webrtcEncryption: { type: 'boolean' },
          webrtcServerKey: { type: 'string' },
          webrtcServerCert: { type: 'string' },
          webrtcAllowOrigin: { type: 'string' },
          webrtcTrustedProxies: { type: 'array', items: { type: 'string' } },
          webrtcLocalUDPAddress: { type: 'string' },
          webrtcLocalTCPAddress: { type: 'string' },
          webrtcIPsFromInterfaces: { type: 'boolean' },
          webrtcIPsFromInterfacesList: { type: 'array', items: { type: 'string' } },
          webrtcAdditionalHosts: { type: 'array', items: { type: 'string' } },
          webrtcICEServers2: {
            type: 'array',
            items: {
              type: 'object',
              properties: {
                url: { type: 'string' },
                username: { type: 'string' },
                password: { type: 'string' },
                clientOnly: { type: 'boolean' },
              },
            },
          },
          webrtcHandshakeTimeout: { type: 'string' },
          webrtcTrackGatherTimeout: { type: 'string' },
          srt: { type: 'boolean' },
          srtAddress: { type: 'string' },
        },
      },
      PathConf: {
        type: 'object',
        properties: {
          name: { type: 'string' },
          source: { type: 'string' },
          sourceFingerprint: { type: 'string' },
          sourceOnDemand: { type: 'boolean' },
          sourceOnDemandStartTimeout: { type: 'string' },
          sourceOnDemandCloseAfter: { type: 'string' },
          maxReaders: { type: 'integer' },
          srtReadPassphrase: { type: 'string' },
          fallback: { type: 'string' },
          record: { type: 'boolean' },
          recordPath: { type: 'string' },
          recordFormat: { type: 'string' },
          recordPartDuration: { type: 'string' },
          recordSegmentDuration: { type: 'string' },
          recordDeleteAfter: { type: 'string' },
          overridePublisher: { type: 'boolean' },
          srtPublishPassphrase: { type: 'string' },
          rtspTransport: { type: 'string' },
          rtspAnyPort: { type: 'boolean' },
          rtspRangeType: { type: 'string' },
          rtspRangeStart: { type: 'string' },
          sourceRedirect: { type: 'string' },
          rpiCameraCamID: { type: 'integer' },
          rpiCameraWidth: { type: 'integer' },
          rpiCameraHeight: { type: 'integer' },
          rpiCameraHFlip: { type: 'boolean' },
          rpiCameraVFlip: { type: 'boolean' },
          rpiCameraBrightness: { type: 'number' },
          rpiCameraContrast: { type: 'number' },
          rpiCameraSaturation: { type: 'number' },
          rpiCameraSharpness: { type: 'number' },
          rpiCameraExposure: { type: 'string' },
          rpiCameraAWB: { type: 'string' },
          rpiCameraAWBGains: { type: 'array', minItems: 2, maxItems: 2, items: { type: 'number' } },
          rpiCameraDenoise: { type: 'string' },
          rpiCameraShutter: { type: 'integer' },
          rpiCameraMetering: { type: 'string' },
          rpiCameraGain: { type: 'number' },
          rpiCameraEV: { type: 'number' },
          rpiCameraROI: { type: 'string' },
          rpiCameraHDR: { type: 'boolean' },
          rpiCameraTuningFile: { type: 'string' },
          rpiCameraMode: { type: 'string' },
          rpiCameraFPS: { type: 'number' },
          rpiCameraAfMode: { type: 'string' },
          rpiCameraAfRange: { type: 'string' },
          rpiCameraAfSpeed: { type: 'string' },
          rpiCameraLensPosition: { type: 'number' },
          rpiCameraAfWindow: { type: 'string' },
          rpiCameraFlickerPeriod: { type: 'integer' },
          rpiCameraTextOverlayEnable: { type: 'boolean' },
          rpiCameraTextOverlay: { type: 'string' },
          rpiCameraCodec: { type: 'string' },
          rpiCameraIDRPeriod: { type: 'integer' },
          rpiCameraBitrate: { type: 'integer' },
          rpiCameraProfile: { type: 'string' },
          rpiCameraLevel: { type: 'string' },
          runOnInit: { type: 'string' },
          runOnInitRestart: { type: 'boolean' },
          runOnDemand: { type: 'string' },
          runOnDemandRestart: { type: 'boolean' },
          runOnDemandStartTimeout: { type: 'string' },
          runOnDemandCloseAfter: { type: 'string' },
          runOnUnDemand: { type: 'string' },
          runOnReady: { type: 'string' },
          runOnReadyRestart: { type: 'boolean' },
          runOnNotReady: { type: 'string' },
          runOnRead: { type: 'string' },
          runOnReadRestart: { type: 'boolean' },
          runOnUnread: { type: 'string' },
          runOnRecordSegmentCreate: { type: 'string' },
          runOnRecordSegmentComplete: { type: 'string' },
        },
      },
      PathConfList: {
        type: 'object',
        properties: {
          pageCount: { type: 'integer' },
          itemCount: { type: 'integer' },
          items: { type: 'array', items: { $ref: '#/components/schemas/PathConf' } },
        },
      },
      Path: {
        type: 'object',
        properties: {
          name: { type: 'string' },
          confName: { type: 'string' },
          source: { $ref: '#/components/schemas/PathSource', nullable: true },
          ready: { type: 'boolean' },
          readyTime: { type: 'string', nullable: true },
          tracks: { type: 'array', items: { type: 'string' } },
          bytesReceived: { type: 'integer', format: 'int64' },
          bytesSent: { type: 'integer', format: 'int64' },
          readers: { type: 'array', items: { $ref: '#/components/schemas/PathReader' } },
        },
      },
      PathList: {
        type: 'object',
        properties: {
          pageCount: { type: 'integer' },
          itemCount: { type: 'integer' },
          items: { type: 'array', items: { $ref: '#/components/schemas/Path' } },
        },
      },
      PathSource: {
        type: 'object',
        properties: {
          type: {
            type: 'string',
            enum: [
              'hlsSource',
              'redirect',
              'rpiCameraSource',
              'rtmpConn',
              'rtmpSource',
              'rtspSession',
              'rtspSource',
              'rtspsSession',
              'srtConn',
              'srtSource',
              'udpSource',
              'webRTCSession',
              'webRTCSource',
            ],
          },
          id: { type: 'string' },
        },
      },
      PathReader: {
        type: 'object',
        properties: {
          type: {
            type: 'string',
            enum: [
              'hlsMuxer',
              'rtmpConn',
              'rtspSession',
              'rtspsSession',
              'srtConn',
              'webRTCSession',
            ],
          },
          id: { type: 'string' },
        },
      },
      HLSMuxer: {
        type: 'object',
        properties: {
          path: { type: 'string' },
          created: { type: 'string' },
          lastRequest: { type: 'string' },
          bytesSent: { type: 'integer', format: 'int64' },
        },
      },
      HLSMuxerList: {
        type: 'object',
        properties: {
          pageCount: { type: 'integer' },
          itemCount: { type: 'integer' },
          items: { type: 'array', items: { $ref: '#/components/schemas/HLSMuxer' } },
        },
      },
      Recording: {
        type: 'object',
        properties: {
          name: { type: 'string' },
          segments: { type: 'array', items: { $ref: '#/components/schemas/RecordingSegment' } },
        },
      },
      RecordingList: {
        type: 'object',
        properties: {
          pageCount: { type: 'integer' },
          itemCount: { type: 'integer' },
          items: { type: 'array', items: { $ref: '#/components/schemas/Recording' } },
        },
      },
      RecordingSegment: { type: 'object', properties: { start: { type: 'string' } } },
      RTMPConn: {
        type: 'object',
        properties: {
          id: { type: 'string' },
          created: { type: 'string' },
          remoteAddr: { type: 'string' },
          state: { type: 'string', enum: ['idle', 'read', 'publish'] },
          path: { type: 'string' },
          query: { type: 'string' },
          bytesReceived: { type: 'integer', format: 'int64' },
          bytesSent: { type: 'integer', format: 'int64' },
        },
      },
      RTMPConnList: {
        type: 'object',
        properties: {
          pageCount: { type: 'integer' },
          itemCount: { type: 'integer' },
          items: { type: 'array', items: { $ref: '#/components/schemas/RTMPConn' } },
        },
      },
      RTSPConn: {
        type: 'object',
        properties: {
          id: { type: 'string' },
          created: { type: 'string' },
          remoteAddr: { type: 'string' },
          bytesReceived: { type: 'integer', format: 'int64' },
          bytesSent: { type: 'integer', format: 'int64' },
        },
      },
      RTSPConnList: {
        type: 'object',
        properties: {
          pageCount: { type: 'integer' },
          itemCount: { type: 'integer' },
          items: { type: 'array', items: { $ref: '#/components/schemas/RTSPConn' } },
        },
      },
      RTSPSession: {
        type: 'object',
        properties: {
          id: { type: 'string' },
          created: { type: 'string' },
          remoteAddr: { type: 'string' },
          state: { type: 'string', enum: ['idle', 'read', 'publish'] },
          path: { type: 'string' },
          query: { type: 'string' },
          transport: { type: 'string', nullable: true },
          bytesReceived: { type: 'integer', format: 'int64' },
          bytesSent: { type: 'integer', format: 'int64' },
        },
      },
      RTSPSessionList: {
        type: 'object',
        properties: {
          pageCount: { type: 'integer' },
          itemCount: { type: 'integer' },
          items: { type: 'array', items: { $ref: '#/components/schemas/RTSPSession' } },
        },
      },
      SRTConn: {
        type: 'object',
        properties: {
          id: { type: 'string' },
          created: { type: 'string' },
          remoteAddr: { type: 'string' },
          state: { type: 'string', enum: ['idle', 'read', 'publish'] },
          path: { type: 'string' },
          query: { type: 'string' },
          packetsSent: {
            type: 'integer',
            format: 'int64',
            description: 'The total number of sent DATA packets, including retransmitted packets',
          },
          packetsReceived: {
            type: 'integer',
            format: 'int64',
            description:
              'The total number of received DATA packets, including retransmitted packets',
          },
          packetsReceivedBelated: { type: 'integer', format: 'int64' },
          packetsSentUnique: {
            type: 'integer',
            format: 'int64',
            description: 'The total number of unique DATA packets sent by the SRT sender',
          },
          packetsReceivedUnique: {
            type: 'integer',
            format: 'int64',
            description:
              'The total number of unique original, retransmitted or recovered by the packet filter DATA packets received in time, decrypted without errors and, as a result, scheduled for delivery to the upstream application by the SRT receiver.',
          },
          packetsSendLoss: {
            type: 'integer',
            format: 'int64',
            description:
              'The total number of data packets considered or reported as lost at the sender side. Does not correspond to the packets detected as lost at the receiver side.',
          },
          packetsReceivedLoss: {
            type: 'integer',
            format: 'int64',
            description:
              'The total number of SRT DATA packets detected as presently missing (either reordered or lost) at the receiver side',
          },
          packetsRetrans: {
            type: 'integer',
            format: 'int64',
            description: 'The total number of retransmitted packets sent by the SRT sender',
          },
          packetsReceivedRetrans: {
            type: 'integer',
            format: 'int64',
            description:
              'The total number of retransmitted packets registered at the receiver side',
          },
          packetsSentACK: {
            type: 'integer',
            format: 'int64',
            description: 'The total number of sent ACK (Acknowledgement) control packets',
          },
          packetsReceivedACK: {
            type: 'integer',
            format: 'int64',
            description: 'The total number of received ACK (Acknowledgement) control packets',
          },
          packetsSentNAK: {
            type: 'integer',
            format: 'int64',
            description: 'The total number of sent NAK (Negative Acknowledgement) control packets',
          },
          packetsReceivedNAK: {
            type: 'integer',
            format: 'int64',
            description:
              'The total number of received NAK (Negative Acknowledgement) control packets',
          },
          packetsSentKM: {
            type: 'integer',
            format: 'int64',
            description: 'The total number of sent KM (Key Material) control packets',
          },
          packetsReceivedKM: {
            type: 'integer',
            format: 'int64',
            description: 'The total number of received KM (Key Material) control packets',
          },
          usSndDuration: {
            type: 'integer',
            format: 'int64',
            description:
              'The total accumulated time in microseconds, during which the SRT sender has some data to transmit, including packets that have been sent, but not yet acknowledged',
          },
          packetsSendDrop: {
            type: 'integer',
            format: 'int64',
            description:
              'The total number of dropped by the SRT sender DATA packets that have no chance to be delivered in time',
          },
          packetsReceivedDrop: {
            type: 'integer',
            format: 'int64',
            description:
              'The total number of dropped by the SRT receiver and, as a result, not delivered to the upstream application DATA packets',
          },
          packetsReceivedUndecrypt: {
            type: 'integer',
            format: 'int64',
            description:
              'The total number of packets that failed to be decrypted at the receiver side',
          },
          bytesSent: {
            type: 'integer',
            format: 'int64',
            description:
              'Same as packetsSent, but expressed in bytes, including payload and all the headers (IP, TCP, SRT)',
          },
          bytesReceived: {
            type: 'integer',
            format: 'int64',
            description:
              'Same as packetsReceived, but expressed in bytes, including payload and all the headers (IP, TCP, SRT)',
          },
          bytesReceivedBelated: { type: 'integer', format: 'int64' },
          bytesSentUnique: {
            type: 'integer',
            format: 'int64',
            description:
              'Same as packetsSentUnique, but expressed in bytes, including payload and all the headers (IP, TCP, SRT)',
          },
          bytesReceivedUnique: {
            type: 'integer',
            format: 'int64',
            description:
              'Same as packetsReceivedUnique, but expressed in bytes, including payload and all the headers (IP, TCP, SRT)',
          },
          bytesReceivedLoss: {
            type: 'integer',
            format: 'int64',
            description:
              "Same as packetsReceivedLoss, but expressed in bytes, including payload and all the headers (IP, TCP, SRT), bytes for the presently missing (either reordered or lost) packets' payloads are estimated based on the average packet size",
          },
          bytesRetrans: {
            type: 'integer',
            format: 'int64',
            description:
              'Same as packetsRetrans, but expressed in bytes, including payload and all the headers (IP, TCP, SRT)',
          },
          bytesReceivedRetrans: {
            type: 'integer',
            format: 'int64',
            description:
              'Same as packetsReceivedRetrans, but expressed in bytes, including payload and all the headers (IP, TCP, SRT)',
          },
          bytesSendDrop: {
            type: 'integer',
            format: 'int64',
            description:
              'Same as packetsSendDrop, but expressed in bytes, including payload and all the headers (IP, TCP, SRT)',
          },
          bytesReceivedDrop: {
            type: 'integer',
            format: 'int64',
            description:
              'Same as packetsReceivedDrop, but expressed in bytes, including payload and all the headers (IP, TCP, SRT)',
          },
          bytesReceivedUndecrypt: {
            type: 'integer',
            format: 'int64',
            description:
              'Same as packetsReceivedUndecrypt, but expressed in bytes, including payload and all the headers (IP, TCP, SRT)',
          },
          usPacketsSendPeriod: {
            type: 'number',
            format: 'float64',
            description:
              'Current minimum time interval between which consecutive packets are sent, in microseconds',
          },
          packetsFlowWindow: {
            type: 'integer',
            format: 'int64',
            description: 'The maximum number of packets that can be "in flight"',
          },
          packetsFlightSize: {
            type: 'integer',
            format: 'int64',
            description: 'The number of packets in flight',
          },
          msRTT: {
            type: 'number',
            format: 'float64',
            description:
              "Smoothed round-trip time (SRTT), an exponentially-weighted moving average (EWMA) of an endpoint's RTT samples, in milliseconds",
          },
          mbpsSendRate: {
            type: 'number',
            format: 'float64',
            description: 'Current transmission bandwidth, in Mbps',
          },
          mbpsReceiveRate: {
            type: 'number',
            format: 'float64',
            description: 'Current receiving bandwidth, in Mbps',
          },
          mbpsLinkCapacity: {
            type: 'number',
            format: 'float64',
            description: 'Estimated capacity of the network link, in Mbps',
          },
          bytesAvailSendBuf: {
            type: 'integer',
            format: 'int64',
            description: "The available space in the sender's buffer, in bytes",
          },
          bytesAvailReceiveBuf: {
            type: 'integer',
            format: 'int64',
            description: "The available space in the receiver's buffer, in bytes",
          },
          mbpsMaxBW: {
            type: 'number',
            format: 'float64',
            description: 'Transmission bandwidth limit, in Mbps',
          },
          byteMSS: {
            type: 'integer',
            format: 'int64',
            description: 'Maximum Segment Size (MSS), in bytes',
          },
          packetsSendBuf: {
            type: 'integer',
            format: 'int64',
            description:
              "The number of packets in the sender's buffer that are already scheduled for sending or even possibly sent, but not yet acknowledged",
          },
          bytesSendBuf: {
            type: 'integer',
            format: 'int64',
            description:
              'Instantaneous (current) value of packetsSndBuf, but expressed in bytes, including payload and all headers (IP, TCP, SRT)',
          },
          msSendBuf: {
            type: 'integer',
            format: 'int64',
            description:
              "The timespan (msec) of packets in the sender's buffer (unacknowledged packets)",
          },
          msSendTsbPdDelay: {
            type: 'integer',
            format: 'int64',
            description: 'Timestamp-based Packet Delivery Delay value of the peer',
          },
          packetsReceiveBuf: {
            type: 'integer',
            format: 'int64',
            description: "The number of acknowledged packets in receiver's buffer",
          },
          bytesReceiveBuf: {
            type: 'integer',
            format: 'int64',
            description:
              'Instantaneous (current) value of packetsRcvBuf, expressed in bytes, including payload and all headers (IP, TCP, SRT)',
          },
          msReceiveBuf: {
            type: 'integer',
            format: 'int64',
            description: "The timespan (msec) of acknowledged packets in the receiver's buffer",
          },
          msReceiveTsbPdDelay: {
            type: 'integer',
            format: 'int64',
            description:
              'Timestamp-based Packet Delivery Delay value set on the socket via SRTO_RCVLATENCY or SRTO_LATENCY',
          },
          packetsReorderTolerance: {
            type: 'integer',
            format: 'int64',
            description: 'Instant value of the packet reorder tolerance',
          },
          packetsReceivedAvgBelatedTime: {
            type: 'integer',
            format: 'int64',
            description:
              'Accumulated difference between the current time and the time-to-play of a packet that is received late',
          },
          packetsSendLossRate: {
            type: 'number',
            format: 'float64',
            description: 'Percentage of resent data vs. sent data',
          },
          packetsReceivedLossRate: {
            type: 'number',
            format: 'float64',
            description: 'Percentage of retransmitted data vs. received data',
          },
        },
      },
      SRTConnList: {
        type: 'object',
        properties: {
          pageCount: { type: 'integer' },
          itemCount: { type: 'integer' },
          items: { type: 'array', items: { $ref: '#/components/schemas/SRTConn' } },
        },
      },
      WebRTCSession: {
        type: 'object',
        properties: {
          id: { type: 'string' },
          created: { type: 'string' },
          remoteAddr: { type: 'string' },
          peerConnectionEstablished: { type: 'boolean' },
          localCandidate: { type: 'string' },
          remoteCandidate: { type: 'string' },
          state: { type: 'string', enum: ['read', 'publish'] },
          path: { type: 'string' },
          query: { type: 'string' },
          bytesReceived: { type: 'integer', format: 'int64' },
          bytesSent: { type: 'integer', format: 'int64' },
        },
      },
      WebRTCSessionList: {
        type: 'object',
        properties: {
          pageCount: { type: 'integer' },
          itemCount: { type: 'integer' },
          items: { type: 'array', items: { $ref: '#/components/schemas/WebRTCSession' } },
        },
      },
    },
  },
  paths: {
    '/v3/config/global/get': {
      get: {
        operationId: 'configGlobalGet',
        tags: ['Configuration'],
        summary: 'returns the global configuration.',
        description: '',
        responses: {
          '200': {
            description: 'the request was successful.',
            content: {
              'application/json': { schema: { $ref: '#/components/schemas/GlobalConf' } },
            },
          },
          '400': {
            description: 'invalid request.',
            content: { 'application/json': { schema: { $ref: '#/components/schemas/Error' } } },
          },
          '500': {
            description: 'server error.',
            content: { 'application/json': { schema: { $ref: '#/components/schemas/Error' } } },
          },
        },
      },
    },
    '/v3/config/global/patch': {
      patch: {
        operationId: 'configGlobalSet',
        tags: ['Configuration'],
        summary: 'patches the global configuration.',
        description: 'all fields are optional.',
        requestBody: {
          required: true,
          content: { 'application/json': { schema: { $ref: '#/components/schemas/GlobalConf' } } },
        },
        responses: {
          '200': { description: 'the request was successful.' },
          '400': {
            description: 'invalid request.',
            content: { 'application/json': { schema: { $ref: '#/components/schemas/Error' } } },
          },
          '500': {
            description: 'server error.',
            content: { 'application/json': { schema: { $ref: '#/components/schemas/Error' } } },
          },
        },
      },
    },
    '/v3/config/pathdefaults/get': {
      get: {
        operationId: 'configPathDefaultsGet',
        tags: ['Configuration'],
        summary: 'returns the default path configuration.',
        description: '',
        responses: {
          '200': {
            description: 'the request was successful.',
            content: { 'application/json': { schema: { $ref: '#/components/schemas/PathConf' } } },
          },
          '400': {
            description: 'invalid request.',
            content: { 'application/json': { schema: { $ref: '#/components/schemas/Error' } } },
          },
          '500': {
            description: 'server error.',
            content: { 'application/json': { schema: { $ref: '#/components/schemas/Error' } } },
          },
        },
      },
    },
    '/v3/config/pathdefaults/patch': {
      patch: {
        operationId: 'configPathDefaultsPatch',
        tags: ['Configuration'],
        summary: 'patches the default path configuration.',
        description: 'all fields are optional.',
        requestBody: {
          required: true,
          content: { 'application/json': { schema: { $ref: '#/components/schemas/PathConf' } } },
        },
        responses: {
          '200': { description: 'the request was successful.' },
          '400': {
            description: 'invalid request.',
            content: { 'application/json': { schema: { $ref: '#/components/schemas/Error' } } },
          },
          '500': {
            description: 'server error.',
            content: { 'application/json': { schema: { $ref: '#/components/schemas/Error' } } },
          },
        },
      },
    },
    '/v3/config/paths/list': {
      get: {
        operationId: 'configPathsList',
        tags: ['Configuration'],
        summary: 'returns all path configurations.',
        description: '',
        parameters: [
          {
            name: 'page',
            in: 'query',
            description: 'page number.',
            schema: { type: 'integer', default: 0 },
          },
          {
            name: 'itemsPerPage',
            in: 'query',
            description: 'items per page.',
            schema: { type: 'integer', default: 100 },
          },
        ],
        responses: {
          '200': {
            description: 'the request was successful.',
            content: {
              'application/json': { schema: { $ref: '#/components/schemas/PathConfList' } },
            },
          },
          '400': {
            description: 'invalid request.',
            content: { 'application/json': { schema: { $ref: '#/components/schemas/Error' } } },
          },
          '500': {
            description: 'server error.',
            content: { 'application/json': { schema: { $ref: '#/components/schemas/Error' } } },
          },
        },
      },
    },
    '/v3/config/paths/get/{name}': {
      get: {
        operationId: 'configPathsGet',
        tags: ['Configuration'],
        summary: 'returns a path configuration.',
        description: '',
        parameters: [
          {
            name: 'name',
            in: 'path',
            required: true,
            description: 'the name of the path.',
            schema: { type: 'string' },
          },
        ],
        responses: {
          '200': {
            description: 'the request was successful.',
            content: { 'application/json': { schema: { $ref: '#/components/schemas/PathConf' } } },
          },
          '400': {
            description: 'invalid request.',
            content: { 'application/json': { schema: { $ref: '#/components/schemas/Error' } } },
          },
          '404': {
            description: 'path not found.',
            content: { 'application/json': { schema: { $ref: '#/components/schemas/Error' } } },
          },
          '500': {
            description: 'server error.',
            content: { 'application/json': { schema: { $ref: '#/components/schemas/Error' } } },
          },
        },
      },
    },
    '/v3/config/paths/add/{name}': {
      post: {
        operationId: 'configPathsAdd',
        tags: ['Configuration'],
        summary: 'adds a path configuration.',
        description: 'all fields are optional.',
        parameters: [
          {
            name: 'name',
            in: 'path',
            required: true,
            description: 'the name of the path.',
            schema: { type: 'string' },
          },
        ],
        requestBody: {
          required: true,
          content: { 'application/json': { schema: { $ref: '#/components/schemas/PathConf' } } },
        },
        responses: {
          '200': { description: 'the request was successful.' },
          '400': {
            description: 'invalid request.',
            content: { 'application/json': { schema: { $ref: '#/components/schemas/Error' } } },
          },
          '500': {
            description: 'server error.',
            content: { 'application/json': { schema: { $ref: '#/components/schemas/Error' } } },
          },
        },
      },
    },
    '/v3/config/paths/patch/{name}': {
      patch: {
        operationId: 'configPathsPatch',
        tags: ['Configuration'],
        summary: 'patches a path configuration.',
        description: 'all fields are optional.',
        parameters: [
          {
            name: 'name',
            in: 'path',
            required: true,
            description: 'the name of the path.',
            schema: { type: 'string' },
          },
        ],
        requestBody: {
          required: true,
          content: { 'application/json': { schema: { $ref: '#/components/schemas/PathConf' } } },
        },
        responses: {
          '200': { description: 'the request was successful.' },
          '400': {
            description: 'invalid request.',
            content: { 'application/json': { schema: { $ref: '#/components/schemas/Error' } } },
          },
          '404': {
            description: 'path not found.',
            content: { 'application/json': { schema: { $ref: '#/components/schemas/Error' } } },
          },
          '500': {
            description: 'server error.',
            content: { 'application/json': { schema: { $ref: '#/components/schemas/Error' } } },
          },
        },
      },
    },
    '/v3/config/paths/replace/{name}': {
      post: {
        operationId: 'configPathsReplace',
        tags: ['Configuration'],
        summary: 'replaces all values of a path configuration.',
        description: 'all fields are optional.',
        parameters: [
          {
            name: 'name',
            in: 'path',
            required: true,
            description: 'the name of the path.',
            schema: { type: 'string' },
          },
        ],
        requestBody: {
          required: true,
          content: { 'application/json': { schema: { $ref: '#/components/schemas/PathConf' } } },
        },
        responses: {
          '200': { description: 'the request was successful.' },
          '400': {
            description: 'invalid request.',
            content: { 'application/json': { schema: { $ref: '#/components/schemas/Error' } } },
          },
          '404': {
            description: 'path not found.',
            content: { 'application/json': { schema: { $ref: '#/components/schemas/Error' } } },
          },
          '500': {
            description: 'server error.',
            content: { 'application/json': { schema: { $ref: '#/components/schemas/Error' } } },
          },
        },
      },
    },
    '/v3/config/paths/delete/{name}': {
      delete: {
        operationId: 'configPathsDelete',
        tags: ['Configuration'],
        summary: 'removes a path configuration.',
        description: '',
        parameters: [
          {
            name: 'name',
            in: 'path',
            required: true,
            description: 'the name of the path.',
            schema: { type: 'string' },
          },
        ],
        responses: {
          '200': { description: 'the request was successful.' },
          '400': {
            description: 'invalid request.',
            content: { 'application/json': { schema: { $ref: '#/components/schemas/Error' } } },
          },
          '404': {
            description: 'path not found.',
            content: { 'application/json': { schema: { $ref: '#/components/schemas/Error' } } },
          },
          '500': {
            description: 'server error.',
            content: { 'application/json': { schema: { $ref: '#/components/schemas/Error' } } },
          },
        },
      },
    },
    '/v3/hlsmuxers/list': {
      get: {
        operationId: 'hlsMuxersList',
        tags: ['HLS'],
        summary: 'returns all HLS muxers.',
        description: '',
        parameters: [
          {
            name: 'page',
            in: 'query',
            description: 'page number.',
            schema: { type: 'integer', default: 0 },
          },
          {
            name: 'itemsPerPage',
            in: 'query',
            description: 'items per page.',
            schema: { type: 'integer', default: 100 },
          },
        ],
        responses: {
          '200': {
            description: 'the request was successful.',
            content: {
              'application/json': { schema: { $ref: '#/components/schemas/HLSMuxerList' } },
            },
          },
          '400': {
            description: 'invalid request.',
            content: { 'application/json': { schema: { $ref: '#/components/schemas/Error' } } },
          },
          '500': {
            description: 'server error.',
            content: { 'application/json': { schema: { $ref: '#/components/schemas/Error' } } },
          },
        },
      },
    },
    '/v3/hlsmuxers/get/{name}': {
      get: {
        operationId: 'hlsMuxersGet',
        tags: ['HLS'],
        summary: 'returns a HLS muxer.',
        description: '',
        parameters: [
          {
            name: 'name',
            in: 'path',
            required: true,
            description: 'name of the muxer.',
            schema: { type: 'string' },
          },
        ],
        responses: {
          '200': {
            description: 'the request was successful.',
            content: { 'application/json': { schema: { $ref: '#/components/schemas/HLSMuxer' } } },
          },
          '400': {
            description: 'invalid request.',
            content: { 'application/json': { schema: { $ref: '#/components/schemas/Error' } } },
          },
          '404': {
            description: 'muxer not found.',
            content: { 'application/json': { schema: { $ref: '#/components/schemas/Error' } } },
          },
          '500': {
            description: 'server error.',
            content: { 'application/json': { schema: { $ref: '#/components/schemas/Error' } } },
          },
        },
      },
    },
    '/v3/paths/list': {
      get: {
        operationId: 'pathsList',
        tags: ['Paths'],
        summary: 'returns all paths.',
        description: '',
        parameters: [
          {
            name: 'page',
            in: 'query',
            description: 'page number.',
            schema: { type: 'integer', default: 0 },
          },
          {
            name: 'itemsPerPage',
            in: 'query',
            description: 'items per page.',
            schema: { type: 'integer', default: 100 },
          },
        ],
        responses: {
          '200': {
            description: 'the request was successful.',
            content: { 'application/json': { schema: { $ref: '#/components/schemas/PathList' } } },
          },
          '400': {
            description: 'invalid request.',
            content: { 'application/json': { schema: { $ref: '#/components/schemas/Error' } } },
          },
          '500': {
            description: 'server error.',
            content: { 'application/json': { schema: { $ref: '#/components/schemas/Error' } } },
          },
        },
      },
    },
    '/v3/paths/get/{name}': {
      get: {
        operationId: 'pathsGet',
        tags: ['Paths'],
        summary: 'returns a path.',
        description: '',
        parameters: [
          {
            name: 'name',
            in: 'path',
            required: true,
            description: 'name of the path.',
            schema: { type: 'string' },
          },
        ],
        responses: {
          '200': {
            description: 'the request was successful.',
            content: { 'application/json': { schema: { $ref: '#/components/schemas/Path' } } },
          },
          '400': {
            description: 'invalid request.',
            content: { 'application/json': { schema: { $ref: '#/components/schemas/Error' } } },
          },
          '404': {
            description: 'path not found.',
            content: { 'application/json': { schema: { $ref: '#/components/schemas/Error' } } },
          },
          '500': {
            description: 'server error.',
            content: { 'application/json': { schema: { $ref: '#/components/schemas/Error' } } },
          },
        },
      },
    },
    '/v3/rtspconns/list': {
      get: {
        operationId: 'rtspConnsList',
        tags: ['RTSP'],
        summary: 'returns all RTSP connections.',
        description: '',
        parameters: [
          {
            name: 'page',
            in: 'query',
            description: 'page number.',
            schema: { type: 'integer', default: 0 },
          },
          {
            name: 'itemsPerPage',
            in: 'query',
            description: 'items per page.',
            schema: { type: 'integer', default: 100 },
          },
        ],
        responses: {
          '200': {
            description: 'the request was successful.',
            content: {
              'application/json': { schema: { $ref: '#/components/schemas/RTSPConnList' } },
            },
          },
          '400': {
            description: 'invalid request.',
            content: { 'application/json': { schema: { $ref: '#/components/schemas/Error' } } },
          },
          '500': {
            description: 'server error.',
            content: { 'application/json': { schema: { $ref: '#/components/schemas/Error' } } },
          },
        },
      },
    },
    '/v3/rtspconns/get/{id}': {
      get: {
        operationId: 'rtspConnsGet',
        tags: ['RTSP'],
        summary: 'returns a RTSP connection.',
        description: '',
        parameters: [
          {
            name: 'id',
            in: 'path',
            required: true,
            description: 'ID of the connection.',
            schema: { type: 'string' },
          },
        ],
        responses: {
          '200': {
            description: 'the request was successful.',
            content: { 'application/json': { schema: { $ref: '#/components/schemas/RTSPConn' } } },
          },
          '400': {
            description: 'invalid request.',
            content: { 'application/json': { schema: { $ref: '#/components/schemas/Error' } } },
          },
          '404': {
            description: 'connection not found.',
            content: { 'application/json': { schema: { $ref: '#/components/schemas/Error' } } },
          },
          '500': {
            description: 'server error.',
            content: { 'application/json': { schema: { $ref: '#/components/schemas/Error' } } },
          },
        },
      },
    },
    '/v3/rtspsessions/list': {
      get: {
        operationId: 'rtspSessionsList',
        tags: ['RTSP'],
        summary: 'returns all RTSP sessions.',
        description: '',
        parameters: [
          {
            name: 'page',
            in: 'query',
            description: 'page number.',
            schema: { type: 'integer', default: 0 },
          },
          {
            name: 'itemsPerPage',
            in: 'query',
            description: 'items per page.',
            schema: { type: 'integer', default: 100 },
          },
        ],
        responses: {
          '200': {
            description: 'the request was successful.',
            content: {
              'application/json': { schema: { $ref: '#/components/schemas/RTSPSessionList' } },
            },
          },
          '400': {
            description: 'invalid request.',
            content: { 'application/json': { schema: { $ref: '#/components/schemas/Error' } } },
          },
          '500': {
            description: 'server error.',
            content: { 'application/json': { schema: { $ref: '#/components/schemas/Error' } } },
          },
        },
      },
    },
    '/v3/rtspsessions/get/{id}': {
      get: {
        operationId: 'rtspSessionsGet',
        tags: ['RTSP'],
        summary: 'returns a RTSP session.',
        description: '',
        parameters: [
          {
            name: 'id',
            in: 'path',
            required: true,
            description: 'ID of the connection.',
            schema: { type: 'string' },
          },
        ],
        responses: {
          '200': {
            description: 'the request was successful.',
            content: {
              'application/json': { schema: { $ref: '#/components/schemas/RTSPSession' } },
            },
          },
          '400': {
            description: 'invalid request.',
            content: { 'application/json': { schema: { $ref: '#/components/schemas/Error' } } },
          },
          '404': {
            description: 'session not found.',
            content: { 'application/json': { schema: { $ref: '#/components/schemas/Error' } } },
          },
          '500': {
            description: 'server error.',
            content: { 'application/json': { schema: { $ref: '#/components/schemas/Error' } } },
          },
        },
      },
    },
    '/v3/rtspsessions/kick/{id}': {
      post: {
        operationId: 'rtspSessionsKick',
        tags: ['RTSP'],
        summary: 'kicks out a RTSP session from the server.',
        description: '',
        parameters: [
          {
            name: 'id',
            in: 'path',
            required: true,
            description: 'ID of the session.',
            schema: { type: 'string' },
          },
        ],
        responses: {
          '200': { description: 'the request was successful.' },
          '400': {
            description: 'invalid request.',
            content: { 'application/json': { schema: { $ref: '#/components/schemas/Error' } } },
          },
          '404': {
            description: 'session not found.',
            content: { 'application/json': { schema: { $ref: '#/components/schemas/Error' } } },
          },
          '500': {
            description: 'server error.',
            content: { 'application/json': { schema: { $ref: '#/components/schemas/Error' } } },
          },
        },
      },
    },
    '/v3/rtspsconns/list': {
      get: {
        operationId: 'rtspsConnsList',
        tags: ['RTSP'],
        summary: 'returns all RTSPS connections.',
        description: '',
        parameters: [
          {
            name: 'page',
            in: 'query',
            description: 'page number.',
            schema: { type: 'integer', default: 0 },
          },
          {
            name: 'itemsPerPage',
            in: 'query',
            description: 'items per page.',
            schema: { type: 'integer', default: 100 },
          },
        ],
        responses: {
          '200': {
            description: 'the request was successful.',
            content: {
              'application/json': { schema: { $ref: '#/components/schemas/RTSPConnList' } },
            },
          },
          '400': {
            description: 'invalid request.',
            content: { 'application/json': { schema: { $ref: '#/components/schemas/Error' } } },
          },
          '500': {
            description: 'server error.',
            content: { 'application/json': { schema: { $ref: '#/components/schemas/Error' } } },
          },
        },
      },
    },
    '/v3/rtspsconns/get/{id}': {
      get: {
        operationId: 'rtspsConnsGet',
        tags: ['RTSP'],
        summary: 'returns a RTSPS connection.',
        description: '',
        parameters: [
          {
            name: 'id',
            in: 'path',
            required: true,
            description: 'ID of the connection.',
            schema: { type: 'string' },
          },
        ],
        responses: {
          '200': {
            description: 'the request was successful.',
            content: { 'application/json': { schema: { $ref: '#/components/schemas/RTSPConn' } } },
          },
          '400': {
            description: 'invalid request.',
            content: { 'application/json': { schema: { $ref: '#/components/schemas/Error' } } },
          },
          '404': {
            description: 'connection not found.',
            content: { 'application/json': { schema: { $ref: '#/components/schemas/Error' } } },
          },
          '500': {
            description: 'server error.',
            content: { 'application/json': { schema: { $ref: '#/components/schemas/Error' } } },
          },
        },
      },
    },
    '/v3/rtspssessions/list': {
      get: {
        operationId: 'rtspsSessionsList',
        tags: ['RTSP'],
        summary: 'returns all RTSPS sessions.',
        description: '',
        parameters: [
          {
            name: 'page',
            in: 'query',
            description: 'page number.',
            schema: { type: 'integer', default: 0 },
          },
          {
            name: 'itemsPerPage',
            in: 'query',
            description: 'items per page.',
            schema: { type: 'integer', default: 100 },
          },
        ],
        responses: {
          '200': {
            description: 'the request was successful.',
            content: {
              'application/json': { schema: { $ref: '#/components/schemas/RTSPSessionList' } },
            },
          },
          '400': {
            description: 'invalid request.',
            content: { 'application/json': { schema: { $ref: '#/components/schemas/Error' } } },
          },
          '500': {
            description: 'server error.',
            content: { 'application/json': { schema: { $ref: '#/components/schemas/Error' } } },
          },
        },
      },
    },
    '/v3/rtspssessions/get/{id}': {
      get: {
        operationId: 'rtspsSessionsGet',
        tags: ['RTSP'],
        summary: 'returns a RTSPS session.',
        description: '',
        parameters: [
          {
            name: 'id',
            in: 'path',
            required: true,
            description: 'ID of the connection.',
            schema: { type: 'string' },
          },
        ],
        responses: {
          '200': {
            description: 'the request was successful.',
            content: {
              'application/json': { schema: { $ref: '#/components/schemas/RTSPSession' } },
            },
          },
          '400': {
            description: 'invalid request.',
            content: { 'application/json': { schema: { $ref: '#/components/schemas/Error' } } },
          },
          '404': {
            description: 'session not found.',
            content: { 'application/json': { schema: { $ref: '#/components/schemas/Error' } } },
          },
          '500': {
            description: 'server error.',
            content: { 'application/json': { schema: { $ref: '#/components/schemas/Error' } } },
          },
        },
      },
    },
    '/v3/rtspssessions/kick/{id}': {
      post: {
        operationId: 'rtspsSessionsKick',
        tags: ['RTSP'],
        summary: 'kicks out a RTSPS session from the server.',
        description: '',
        parameters: [
          {
            name: 'id',
            in: 'path',
            required: true,
            description: 'ID of the session.',
            schema: { type: 'string' },
          },
        ],
        responses: {
          '200': { description: 'the request was successful.' },
          '400': {
            description: 'invalid request.',
            content: { 'application/json': { schema: { $ref: '#/components/schemas/Error' } } },
          },
          '404': {
            description: 'session not found.',
            content: { 'application/json': { schema: { $ref: '#/components/schemas/Error' } } },
          },
          '500': {
            description: 'server error.',
            content: { 'application/json': { schema: { $ref: '#/components/schemas/Error' } } },
          },
        },
      },
    },
    '/v3/rtmpconns/list': {
      get: {
        operationId: 'rtmpConnsList',
        tags: ['RTMP'],
        summary: 'returns all RTMP connections.',
        description: '',
        parameters: [
          {
            name: 'page',
            in: 'query',
            description: 'page number.',
            schema: { type: 'integer', default: 0 },
          },
          {
            name: 'itemsPerPage',
            in: 'query',
            description: 'items per page.',
            schema: { type: 'integer', default: 100 },
          },
        ],
        responses: {
          '200': {
            description: 'the request was successful.',
            content: {
              'application/json': { schema: { $ref: '#/components/schemas/RTMPConnList' } },
            },
          },
          '400': {
            description: 'invalid request.',
            content: { 'application/json': { schema: { $ref: '#/components/schemas/Error' } } },
          },
          '500': {
            description: 'server error.',
            content: { 'application/json': { schema: { $ref: '#/components/schemas/Error' } } },
          },
        },
      },
    },
    '/v3/rtmpconns/get/{id}': {
      get: {
        operationId: 'rtmpConnectionsGet',
        tags: ['RTMP'],
        summary: 'returns a RTMP connection.',
        description: '',
        parameters: [
          {
            name: 'id',
            in: 'path',
            required: true,
            description: 'ID of the connection.',
            schema: { type: 'string' },
          },
        ],
        responses: {
          '200': {
            description: 'the request was successful.',
            content: { 'application/json': { schema: { $ref: '#/components/schemas/RTMPConn' } } },
          },
          '400': {
            description: 'invalid request.',
            content: { 'application/json': { schema: { $ref: '#/components/schemas/Error' } } },
          },
          '404': {
            description: 'connection not found.',
            content: { 'application/json': { schema: { $ref: '#/components/schemas/Error' } } },
          },
          '500': {
            description: 'server error.',
            content: { 'application/json': { schema: { $ref: '#/components/schemas/Error' } } },
          },
        },
      },
    },
    '/v3/rtmpconns/kick/{id}': {
      post: {
        operationId: 'rtmpConnsKick',
        tags: ['RTMP'],
        summary: 'kicks out a RTMP connection from the server.',
        description: '',
        parameters: [
          {
            name: 'id',
            in: 'path',
            required: true,
            description: 'ID of the connection.',
            schema: { type: 'string' },
          },
        ],
        responses: {
          '200': { description: 'the request was successful.' },
          '400': {
            description: 'invalid request.',
            content: { 'application/json': { schema: { $ref: '#/components/schemas/Error' } } },
          },
          '404': {
            description: 'connection not found.',
            content: { 'application/json': { schema: { $ref: '#/components/schemas/Error' } } },
          },
          '500': {
            description: 'server error.',
            content: { 'application/json': { schema: { $ref: '#/components/schemas/Error' } } },
          },
        },
      },
    },
    '/v3/rtmpsconns/list': {
      get: {
        operationId: 'rtmpsConnsList',
        tags: ['RTMP'],
        summary: 'returns all RTMPS connections.',
        description: '',
        parameters: [
          {
            name: 'page',
            in: 'query',
            description: 'page number.',
            schema: { type: 'integer', default: 0 },
          },
          {
            name: 'itemsPerPage',
            in: 'query',
            description: 'items per page.',
            schema: { type: 'integer', default: 100 },
          },
        ],
        responses: {
          '200': {
            description: 'the request was successful.',
            content: {
              'application/json': { schema: { $ref: '#/components/schemas/RTMPConnList' } },
            },
          },
          '400': {
            description: 'invalid request.',
            content: { 'application/json': { schema: { $ref: '#/components/schemas/Error' } } },
          },
          '500': {
            description: 'server error.',
            content: { 'application/json': { schema: { $ref: '#/components/schemas/Error' } } },
          },
        },
      },
    },
    '/v3/rtmpsconns/get/{id}': {
      get: {
        operationId: 'rtmpsConnectionsGet',
        tags: ['RTMP'],
        summary: 'returns a RTMPS connection.',
        description: '',
        parameters: [
          {
            name: 'id',
            in: 'path',
            required: true,
            description: 'ID of the connection.',
            schema: { type: 'string' },
          },
        ],
        responses: {
          '200': {
            description: 'the request was successful.',
            content: { 'application/json': { schema: { $ref: '#/components/schemas/RTMPConn' } } },
          },
          '400': {
            description: 'invalid request.',
            content: { 'application/json': { schema: { $ref: '#/components/schemas/Error' } } },
          },
          '404': {
            description: 'connection not found.',
            content: { 'application/json': { schema: { $ref: '#/components/schemas/Error' } } },
          },
          '500': {
            description: 'server error.',
            content: { 'application/json': { schema: { $ref: '#/components/schemas/Error' } } },
          },
        },
      },
    },
    '/v3/rtmpsconns/kick/{id}': {
      post: {
        operationId: 'rtmpsConnsKick',
        tags: ['RTMP'],
        summary: 'kicks out a RTMPS connection from the server.',
        description: '',
        parameters: [
          {
            name: 'id',
            in: 'path',
            required: true,
            description: 'ID of the connection.',
            schema: { type: 'string' },
          },
        ],
        responses: {
          '200': { description: 'the request was successful.' },
          '400': {
            description: 'invalid request.',
            content: { 'application/json': { schema: { $ref: '#/components/schemas/Error' } } },
          },
          '404': {
            description: 'connection not found.',
            content: { 'application/json': { schema: { $ref: '#/components/schemas/Error' } } },
          },
          '500': {
            description: 'server error.',
            content: { 'application/json': { schema: { $ref: '#/components/schemas/Error' } } },
          },
        },
      },
    },
    '/v3/srtconns/list': {
      get: {
        operationId: 'srtConnsList',
        tags: ['SRT'],
        summary: 'returns all SRT connections.',
        description: '',
        parameters: [
          {
            name: 'page',
            in: 'query',
            description: 'page number.',
            schema: { type: 'integer', default: 0 },
          },
          {
            name: 'itemsPerPage',
            in: 'query',
            description: 'items per page.',
            schema: { type: 'integer', default: 100 },
          },
        ],
        responses: {
          '200': {
            description: 'the request was successful.',
            content: {
              'application/json': { schema: { $ref: '#/components/schemas/SRTConnList' } },
            },
          },
          '400': {
            description: 'invalid request.',
            content: { 'application/json': { schema: { $ref: '#/components/schemas/Error' } } },
          },
          '500': {
            description: 'server error.',
            content: { 'application/json': { schema: { $ref: '#/components/schemas/Error' } } },
          },
        },
      },
    },
    '/v3/srtconns/get/{id}': {
      get: {
        operationId: 'srtConnsGet',
        tags: ['SRT'],
        summary: 'returns a SRT connection.',
        description: '',
        parameters: [
          {
            name: 'id',
            in: 'path',
            required: true,
            description: 'ID of the connection.',
            schema: { type: 'string' },
          },
        ],
        responses: {
          '200': {
            description: 'the request was successful.',
            content: { 'application/json': { schema: { $ref: '#/components/schemas/SRTConn' } } },
          },
          '400': {
            description: 'invalid request.',
            content: { 'application/json': { schema: { $ref: '#/components/schemas/Error' } } },
          },
          '404': {
            description: 'connection not found.',
            content: { 'application/json': { schema: { $ref: '#/components/schemas/Error' } } },
          },
          '500': {
            description: 'server error.',
            content: { 'application/json': { schema: { $ref: '#/components/schemas/Error' } } },
          },
        },
      },
    },
    '/v3/srtconns/kick/{id}': {
      post: {
        operationId: 'srtConnsKick',
        tags: ['SRT'],
        summary: 'kicks out a SRT connection from the server.',
        description: '',
        parameters: [
          {
            name: 'id',
            in: 'path',
            required: true,
            description: 'ID of the connection.',
            schema: { type: 'string' },
          },
        ],
        responses: {
          '200': { description: 'the request was successful.' },
          '400': {
            description: 'invalid request.',
            content: { 'application/json': { schema: { $ref: '#/components/schemas/Error' } } },
          },
          '404': {
            description: 'connection not found.',
            content: { 'application/json': { schema: { $ref: '#/components/schemas/Error' } } },
          },
          '500': {
            description: 'server error.',
            content: { 'application/json': { schema: { $ref: '#/components/schemas/Error' } } },
          },
        },
      },
    },
    '/v3/webrtcsessions/list': {
      get: {
        operationId: 'webrtcSessionsList',
        tags: ['WebRTC'],
        summary: 'returns all WebRTC sessions.',
        description: '',
        parameters: [
          {
            name: 'page',
            in: 'query',
            description: 'page number.',
            schema: { type: 'integer', default: 0 },
          },
          {
            name: 'itemsPerPage',
            in: 'query',
            description: 'items per page.',
            schema: { type: 'integer', default: 100 },
          },
        ],
        responses: {
          '200': {
            description: 'the request was successful.',
            content: {
              'application/json': { schema: { $ref: '#/components/schemas/WebRTCSessionList' } },
            },
          },
          '400': {
            description: 'invalid request.',
            content: { 'application/json': { schema: { $ref: '#/components/schemas/Error' } } },
          },
          '500': {
            description: 'server error.',
            content: { 'application/json': { schema: { $ref: '#/components/schemas/Error' } } },
          },
        },
      },
    },
    '/v3/webrtcsessions/get/{id}': {
      get: {
        operationId: 'webrtcSessionsGet',
        tags: ['WebRTC'],
        summary: 'returns a WebRTC session.',
        description: '',
        parameters: [
          {
            name: 'id',
            in: 'path',
            required: true,
            description: 'ID of the session.',
            schema: { type: 'string' },
          },
        ],
        responses: {
          '200': {
            description: 'the request was successful.',
            content: {
              'application/json': { schema: { $ref: '#/components/schemas/WebRTCSession' } },
            },
          },
          '400': {
            description: 'invalid request.',
            content: { 'application/json': { schema: { $ref: '#/components/schemas/Error' } } },
          },
          '404': {
            description: 'session not found.',
            content: { 'application/json': { schema: { $ref: '#/components/schemas/Error' } } },
          },
          '500': {
            description: 'server error.',
            content: { 'application/json': { schema: { $ref: '#/components/schemas/Error' } } },
          },
        },
      },
    },
    '/v3/webrtcsessions/kick/{id}': {
      post: {
        operationId: 'webrtcSessionsKick',
        tags: ['WebRTC'],
        summary: 'kicks out a WebRTC session from the server.',
        description: '',
        parameters: [
          {
            name: 'id',
            in: 'path',
            required: true,
            description: 'ID of the session.',
            schema: { type: 'string' },
          },
        ],
        responses: {
          '200': { description: 'the request was successful.' },
          '400': {
            description: 'invalid request.',
            content: { 'application/json': { schema: { $ref: '#/components/schemas/Error' } } },
          },
          '404': {
            description: 'session not found.',
            content: { 'application/json': { schema: { $ref: '#/components/schemas/Error' } } },
          },
          '500': {
            description: 'server error.',
            content: { 'application/json': { schema: { $ref: '#/components/schemas/Error' } } },
          },
        },
      },
    },
    '/v3/recordings/list': {
      get: {
        operationId: 'recordingsList',
        tags: ['Recordings'],
        summary: 'returns all recordings.',
        description: '',
        parameters: [
          {
            name: 'page',
            in: 'query',
            description: 'page number.',
            schema: { type: 'integer', default: 0 },
          },
          {
            name: 'itemsPerPage',
            in: 'query',
            description: 'items per page.',
            schema: { type: 'integer', default: 100 },
          },
        ],
        responses: {
          '200': {
            description: 'the request was successful.',
            content: {
              'application/json': { schema: { $ref: '#/components/schemas/RecordingList' } },
            },
          },
          '400': {
            description: 'invalid request.',
            content: { 'application/json': { schema: { $ref: '#/components/schemas/Error' } } },
          },
          '500': {
            description: 'server error.',
            content: { 'application/json': { schema: { $ref: '#/components/schemas/Error' } } },
          },
        },
      },
    },
    '/v3/recordings/get/{name}': {
      get: {
        operationId: 'recordingsGet',
        tags: ['Recordings'],
        summary: 'returns recordings for a path.',
        description: '',
        parameters: [
          {
            name: 'name',
            in: 'path',
            required: true,
            description: 'name of the path.',
            schema: { type: 'string' },
          },
        ],
        responses: {
          '200': {
            description: 'the request was successful.',
            content: { 'application/json': { schema: { $ref: '#/components/schemas/Recording' } } },
          },
          '400': {
            description: 'invalid request.',
            content: { 'application/json': { schema: { $ref: '#/components/schemas/Error' } } },
          },
          '404': {
            description: 'path not found.',
            content: { 'application/json': { schema: { $ref: '#/components/schemas/Error' } } },
          },
          '500': {
            description: 'server error.',
            content: { 'application/json': { schema: { $ref: '#/components/schemas/Error' } } },
          },
        },
      },
    },
    '/v3/recordings/deletesegment': {
      delete: {
        operationId: 'recordingsDeleteSegment',
        tags: ['Recordings'],
        summary: 'deletes a recording segment.',
        description: '',
        parameters: [
          {
            name: 'path',
            in: 'query',
            required: true,
            description: 'path.',
            schema: { type: 'string' },
          },
          {
            name: 'start',
            in: 'query',
            required: true,
            description: 'starting date of the segment.',
            schema: { type: 'string' },
          },
        ],
        responses: {
          '200': { description: 'the request was successful.' },
          '400': {
            description: 'invalid request.',
            content: { 'application/json': { schema: { $ref: '#/components/schemas/Error' } } },
          },
          '404': {
            description: 'connection not found.',
            content: { 'application/json': { schema: { $ref: '#/components/schemas/Error' } } },
          },
          '500': {
            description: 'server error.',
            content: { 'application/json': { schema: { $ref: '#/components/schemas/Error' } } },
          },
        },
      },
    },
  },
}
export default definition
