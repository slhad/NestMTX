import { ApiServiceModule } from '#services/api'
import type {
  CreateCommandContext,
  ReadCommandContext,
  UpdateCommandContext,
  DeleteCommandContext,
} from '#services/api'
import Camera from '#models/camera'
import Joi from 'joi'
import I18NException from '#exceptions/i18n'
import db from '@adonisjs/lucid/services/db'

export default class CamerasModule implements ApiServiceModule {
  get schemas() {
    return {}
  }

  get description() {
    return 'Manage Camera Feeds'
  }

  async list(context: CreateCommandContext) {
    const { search, page, itemsPerPage, sortBy } = context.payload
    const query = db.from(Camera.table)
    if (search) {
      query.where((builder) => {
        builder.where('room', 'like', `%${search}%`)
        builder.orWhere('name', 'like', `%${search}%`)
      })
    }
    if (sortBy) {
      // @todo: implement sorting
      // query.orderBy(sortBy)
    }
    let pageAsInt = Number.parseInt(page)
    let itemsPerPageAsInt = Number.parseInt(itemsPerPage)
    if (!Number.isNaN(pageAsInt) && !Number.isNaN(itemsPerPageAsInt)) {
      pageAsInt = Math.max(1, pageAsInt)
      itemsPerPageAsInt = Math.max(1, itemsPerPageAsInt)
    }
    const results = await query.paginate(pageAsInt, itemsPerPageAsInt)
    const items = await Promise.all(
      results.all().map(async (item) => {
        const camera = Camera.$createFromAdapterResult(item)!
        await Camera.decrypt(camera)
        return camera
      })
    )
    const ret = {
      ...context.payload,
      page: pageAsInt,
      itemsPerPage: itemsPerPageAsInt,
      total: results.total,
      items,
    }
    return ret
  }

  get $descriptionOfList() {
    return 'Search for and list Cameras'
  }
}