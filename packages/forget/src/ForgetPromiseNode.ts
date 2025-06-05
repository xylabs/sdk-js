/// <reference types="node" />

import type { Promisable } from '@xylabs/promise'

import { defaultForgetNodeConfig, type ForgetNodeConfig } from './ForgetNodeConfig.ts'
import { ForgetPromise } from './ForgetPromise.ts'

export class ForgetPromiseNode extends ForgetPromise {
  static override exceptionHandler(error: Error, config: ForgetNodeConfig, externalStackTrace?: string) {
    // default | global | provided priorities for config (not deep merge)
    super.exceptionHandler(error, config, externalStackTrace)
    if (config?.terminateOnException === true) {
      this.logger.error(`Attempting to terminate process [${config?.name ?? 'unknown'}]...`)
      // eslint-disable-next-line unicorn/no-process-exit
      process.exit(1)
    }
  }

  static override forget<T>(promise: Promisable<T>, config?: ForgetNodeConfig<T>) {
    const resolvedConfig = {
      ...defaultForgetNodeConfig, ...globalThis.xy?.forget?.config, ...config,
    }
    super.forget(promise, resolvedConfig)
  }

  static override timeoutHandler(time: number, config: ForgetNodeConfig, externalStackTrace?: string) {
    super.timeoutHandler(time, config, externalStackTrace)
    if (config?.terminateOnTimeout === true) {
      this.logger.error(`Attempting to terminate process [${config?.name ?? 'unknown'}]...`)
      // eslint-disable-next-line unicorn/no-process-exit
      process.exit(2)
    }
  }
}
