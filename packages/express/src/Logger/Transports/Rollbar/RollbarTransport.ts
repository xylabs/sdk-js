import type Rollbar from 'rollbar'
import type { TransportStreamOptions } from 'winston-transport'
import Transport from 'winston-transport'

import { logFormatRollbar } from '../../LogFormats/index.ts'

export class RollbarTransport extends Transport {
  constructor(
    opts: TransportStreamOptions,
    protected readonly rollbar?: Rollbar,
  ) {
    super({
      ...opts, format: logFormatRollbar, level: 'error',
    })
  }

  override log(info: { message?: string }, next: () => void) {
    this.rollbar?.error(info?.message)
    this.emit('logged', info?.message)
    next()
  }
}
