/// <reference types="node" />

import type { Promisable } from '@xylabs/promise'

import { defaultForgetNodeConfig, type ForgetNodeConfig } from './ForgetNodeConfig.ts'
import { ForgetPromise } from './ForgetPromise.ts'

export const getStackTrace = () => {
  try {
    throw new Error('Getting stack trace')
  } catch (ex) {
    const error = ex as Error
    return error.stack
  }
}

export class ForgetPromiseNode extends ForgetPromise {
  static override exceptionHandler(error: Error, config: ForgetNodeConfig) {
    // default | global | provided priorities for config (not deep merge)
    super.exceptionHandler(error, config)
    console.warn(getStackTrace())
    if (config?.terminateOnException === true) {
      console.log('Attempting to terminate process...')
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

  static override timeoutHandler(time: number, config: ForgetNodeConfig) {
    super.timeoutHandler(time, config)
    console.warn(getStackTrace())
    if (config?.terminateOnTimeout === true) {
      console.log('Attempting to terminate process...')
      // eslint-disable-next-line unicorn/no-process-exit
      process.exit(2)
    }
  }
}
