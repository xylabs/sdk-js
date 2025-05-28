/// <reference types="node" />

import type { Promisable } from '@xylabs/promise'

import { defaultForgetNodeConfig, type ForgetNodeConfig } from './ForgetNodeConfig.ts'
import { ForgetPromise } from './ForgetPromise.ts'

export const ForgetPromiseNode = {
  ...ForgetPromise,
  exceptionHandler: (error: Error, config: ForgetNodeConfig) => {
    // default | global | provided priorities for config (not deep merge)
    ForgetPromise.exceptionHandler(error, config)

    if (config?.terminateOnException === true) {
      // eslint-disable-next-line unicorn/no-process-exit
      process.exit(1)
    }
  },
  timeoutHandler: (time: number, config: ForgetNodeConfig) => {
    ForgetPromise.timeoutHandler(time, config)
    if (config?.terminateOnTimeout === true) {
      // eslint-disable-next-line unicorn/no-process-exit
      process.exit(2)
    }
  },

  /**
     * Used to explicitly launch an async function (or Promise) with awaiting it
     * @param promise The promise to forget
     * @param config Configuration of forget settings
     */
  forget<T>(promise: Promisable<T>, config?: ForgetNodeConfig<T>) {
    const resolvedConfig = {
      ...defaultForgetNodeConfig, ...globalThis.xy?.forget?.config, ...config,
    }
    ForgetPromise.forget<T>(promise, resolvedConfig)
  },
}
