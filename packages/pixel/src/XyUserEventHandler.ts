import { type EmptyObject, toSafeJsonObject } from '@xylabs/object'

import type { FunnelStartedFields } from './FunnelStartedFields.ts'
import { XyPixel } from './Pixel.ts'
import type { PurchaseFields } from './PurchaseFields.ts'
import type { TestStartedFields } from './TestStartedFields.ts'
import type { UserClickFields } from './UserClickFields.ts'
import { UserEventHandler } from './UserEventHandler.ts'
import type { ViewContentFields } from './ViewContentFields.ts'

/** Concrete event handler that sends tracking events through the XyPixel singleton. */
export class XyUserEventHandler<T extends EmptyObject = EmptyObject> extends UserEventHandler<T> {
  constructor() {
    super()
  }

  /** Sends a funnel-started event via the pixel API. */
  async funnelStarted(fields: T | FunnelStartedFields) {
    return await XyPixel.instance.send('FunnelStarted', toSafeJsonObject(fields, [], 10))
  }

  /** Sends a purchase event via the pixel API. */
  async purchase(fields: T | PurchaseFields) {
    return await XyPixel.instance.send('Purchase', toSafeJsonObject(fields, [], 10))
  }

  /** Sends a test-started event via the pixel API. */
  async testStarted(fields: T | TestStartedFields) {
    return await XyPixel.instance.send('TestStarted', toSafeJsonObject(fields, [], 10))
  }

  /** Sends a user click event via the pixel API. */
  async userClick(fields: T | UserClickFields) {
    return await XyPixel.instance.send('ViewPage', toSafeJsonObject(fields, [], 10))
  }

  /** Sends a view-content event via the pixel API. */
  async viewContent(fields: T | ViewContentFields) {
    return await XyPixel.instance.send('ViewContent', toSafeJsonObject(fields, [], 10))
  }
}
