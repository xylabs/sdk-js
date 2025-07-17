import { assertEx } from '@xylabs/assert'
import type { JsonObject } from '@xylabs/object'
import { Mutex } from 'async-mutex'
import Cookies from 'js-cookie'
import md5 from 'spark-md5'

import type { UserEvent } from './Api/index.ts'
import { PixelApi } from './Api/index.ts'
import type { ExIds } from './ExIds.ts'
import { getSystemInfo } from './getSystemInfo.ts'
import { Referrer } from './Referrer.ts'
import { UniqueUserId } from './UniqueUserId.ts'
import { UtmFields } from './UtmFields.ts'

const emailHashLocalStorageName = 'xy_email_hash'

export class XyPixel {
  static api = new PixelApi()

  private static _instance?: XyPixel
  private static utmFieldsObj: UtmFields

  cid = new UniqueUserId().id
  email?: string
  email_hash?: string | null
  exids?: ExIds
  pixelId?: string

  queue: UserEvent[] = []

  private queueMutex = new Mutex()

  private constructor(pixelId: string) {
    this.pixelId = pixelId
    this.email_hash = localStorage.getItem(emailHashLocalStorageName)
  }

  static get instance(): XyPixel {
    return assertEx(this._instance, () => 'XyPixel uninitialized')
  }

  static init(pixelId: string) {
    this._instance = new XyPixel(pixelId)
    return this._instance
  }

  static selectApi(api: PixelApi) {
    this.api = api
  }

  private static utmFields = () => {
    if (XyPixel.utmFieldsObj === undefined) {
      XyPixel.utmFieldsObj = new UtmFields()
    }
    return XyPixel.utmFieldsObj
  }

  identify(email?: string) {
    this.email = email
    this.email_hash = (email !== undefined && email.length > 0) ? md5.hash(email, true) : undefined
    if (this.email_hash !== undefined) {
      localStorage.setItem(emailHashLocalStorageName, this.email_hash)
    }
  }

  async send<T extends JsonObject>(event: string, fields?: T, eventId?: string) {
    this.updateFbId()
    const utm = XyPixel.utmFields().update()
    const referrer = new Referrer()
    this.queue.push({
      cid: this.cid,
      create_time: Date.now(),
      email_hash: this.email_hash ?? undefined,
      event,
      event_id: eventId,
      exids: this.exids,
      fields,
      host: document.location.host,
      pathname: document.location.pathname,
      pixel: this.pixelId,
      referrer: referrer.toJson(),
      system: getSystemInfo(),
      utm,
    })
    await this.tryFlushQueue()
  }

  private async tryFlushQueue() {
    await this.queueMutex.runExclusive(async () => {
      if (this.queue.length === 0) return
      const api = XyPixel.api
      if (api !== undefined) {
        const events = this.queue
        this.queue = []
        try {
          await api.trackEvents(events)
        } catch (ex) {
          if (events !== undefined) {
            // put it back since it failed
            this.queue = [...this.queue, ...events]
          }
          // eslint-disable-next-line no-console
          console.error(ex)
        }
      }
    })
  }

  private updateFbId() {
    this.exids = {
      fbc: Cookies.get('_fbc'),
      fbp: Cookies.get('_fbp'),
      ga: Cookies.get('_ga'),
      gclid: Cookies.get('_gcl_aw'),
      rdt_uid: Cookies.get('rdt_uid'),
      scid: Cookies.get('_scid'),
      tt_sessionId: sessionStorage.getItem('tt_sessionId') ?? undefined,
    }
  }
}
