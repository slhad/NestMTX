import Credential from '#models/credential'
import Camera from '#models/camera'
import { CronJob } from '#services/cron'
import dot from 'dot-object'
import crypto from 'node:crypto'

import type { smartdevicemanagement_v1 } from 'googleapis'

const makeChecksum = (data: string) => {
  const hash = crypto.createHash('sha256')
  hash.update(data)
  return hash.digest('hex')
}

export default class SyncCloudCamerasJob extends CronJob {
  get crontab() {
    return '0 * * * *'
  }

  async run() {
    const authenticatedCredentials = await Credential.query().whereNotNull('tokens')
    for (const credential of authenticatedCredentials) {
      const sdm = await credential.getSDMClient()
      const cameras: Map<string, smartdevicemanagement_v1.Schema$GoogleHomeEnterpriseSdmV1Device> =
        new Map()
      try {
        const {
          data: { devices },
        } = await sdm.enterprises.devices.list({
          parent: ['enterprises', credential.dacProjectId].join('/'),
        })
        devices?.forEach((device) => {
          if (device && 'string' === typeof device.name) {
            const key = device.name
            const deviceTraits =
              'object' === typeof device.traits && null !== device.traits
                ? Object.keys(device.traits).map((t) => t.split('.').pop())
                : []
            const hasCameraTraits = deviceTraits.some((t) => t?.startsWith('Camera'))
            if (hasCameraTraits) {
              cameras.set(key, device)
            }
          }
        })
      } catch {
        // noop
      }
      const cams = [...cameras].map(([_key, value]) => value)
      for (const device of cams) {
        if ('string' === typeof device.name) {
          let camera = await Camera.query()
            .where('credential_id', credential.id)
            .where('uid', device.name)
            .first()
          if (!camera) {
            camera = new Camera()
            camera.credentialId = credential.id
            camera.uid = device.name
            camera.checksum = makeChecksum(device.name)
            camera.mtxPath = null
            camera.isEnabled = false
          }
          camera.room = this.#getDeviceRoomName(device)
          camera.name = this.#getDeviceName(device)
          camera.info = 'object' === typeof device && null !== device ? device : null
          try {
            await camera.save()
          } catch {
            // noop
          }
        }
      }
      const existing = await Camera.query().where('credential_id', credential.id)
      const toRemove = existing.filter((camera) => {
        !cameras.has(camera.uid)
      })
      for (const camera of toRemove) {
        await camera.delete()
      }
    }
  }

  #getDeviceRoomName(device: smartdevicemanagement_v1.Schema$GoogleHomeEnterpriseSdmV1Device) {
    let ret: string = 'Unknown'
    if (device.parentRelations) {
      for (const relation of device.parentRelations) {
        if ('string' === typeof relation.displayName) {
          ret = relation.displayName
          return ret.trim()
        }
      }
    }
    return ret.trim()
  }

  #getDeviceName(device: smartdevicemanagement_v1.Schema$GoogleHomeEnterpriseSdmV1Device) {
    const room = this.#getDeviceRoomName(device)
    let deviceType: string = 'Camera'
    switch (device.type) {
      case 'sdm.devices.types.DISPLAY':
        deviceType = 'Display'
        break

      case 'sdm.devices.types.DOORBELL':
        deviceType = 'Doorbell'
        break
    }
    const fallback = `${room} ${deviceType}`
    return this.#getDeviceTrait(device, 'sdm.devices.traits.Info.customName', fallback)
  }

  #getDeviceTrait(
    device: smartdevicemanagement_v1.Schema$GoogleHomeEnterpriseSdmV1Device,
    key: string,
    fallback: string = 'Unknown'
  ) {
    const dotified =
      'object' === typeof device.traits && null !== device.traits ? dot.dot(device.traits) : {}
    return dotified[key] || fallback
  }
}