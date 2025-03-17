import { type EmptyObject, toJsonObject } from '@xylabs/object'

import type { FunnelStartedFields } from './FunnelStartedFields.ts'
import { XyPixel } from './Pixel.ts'
import type { PurchaseFields } from './PurchaseFields.ts'
import type { TestStartedFields } from './TestStartedFields.ts'
import type { UserClickFields } from './UserClickFields.ts'
import { UserEventHandler } from './UserEventHandler.ts'
import type { ViewContentFields } from './ViewContentFields.ts'

export class XyUserEventHandler<T extends EmptyObject = EmptyObject> extends UserEventHandler<T> {
  constructor() {
    super()
  }

  async funnelStarted(fields: T | FunnelStartedFields) {
    return await XyPixel.instance.send('FunnelStarted', toJsonObject(fields, [], 10))
  }

  async purchase(fields: T | PurchaseFields) {
    return await XyPixel.instance.send('Purchase', toJsonObject(fields, [], 10))
  }

  async testStarted(fields: T | TestStartedFields) {
    return await XyPixel.instance.send('TestStarted', toJsonObject(fields, [], 10))
  }

  async userClick(fields: T | UserClickFields) {
    return await XyPixel.instance.send('ViewPage', toJsonObject(fields, [], 10))
  }

  async viewContent(fields: T | ViewContentFields) {
    return await XyPixel.instance.send('ViewContent', toJsonObject(fields, [], 10))
  }
}
