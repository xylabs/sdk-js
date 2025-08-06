import type Rollbar from 'rollbar'
import type { TransportStreamOptions } from 'winston-transport'
import Transport from 'winston-transport'

import { logFormatRollbar } from '../../LogFormats/index.ts'

export class RollbarTransport extends Transport {
  protected readonly rollbar?: Rollbar
  constructor(
    opts: TransportStreamOptions,
    rollbar?: Rollbar,
  ) {
    super({
      ...opts, format: logFormatRollbar, level: 'error',
    })
    this.rollbar = rollbar
  }

  override log(info: { message?: string }, next: () => void) {
    this.rollbar?.error(info?.message)
    this.emit('logged', info?.message)
    next()
  }
}
