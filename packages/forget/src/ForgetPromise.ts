import { delay } from '@xylabs/delay'
import { isPromise, type Promisable } from '@xylabs/promise'
import { isNumber } from '@xylabs/typeof'

import { defaultForgetConfig, type ForgetConfig } from './ForgetConfig.ts'

export const ForgetPromise = {
  get active() {
    return this.activeForgets > 0
  },

  activeForgets: 0,
  exceptedForgets: 0,

  exceptionHandler: (error: Error, _config: ForgetConfig) => {
    console.error(`forget promise handler excepted: ${error.message}`, error)
  },

  timeoutHandler: (time: number, _config: ForgetConfig) => {
    console.error(`forget promise timeout out after ${time}ms [Cancelling]`)
  },

  async awaitInactive(interval = 100, timeout?: number) {
    let timeoutRemaining = timeout
    while (this.active) {
      await delay(interval)
      if (timeoutRemaining !== undefined) {
        timeoutRemaining -= interval
        if (timeoutRemaining <= 0) {
          return this.activeForgets
        }
      }
    }
    return 0
  },

  /**
   * Used to explicitly launch an async function (or Promise) with awaiting it
   * @param promise The promise to forget
   * @param config Configuration of forget settings
   */
  forget<T>(promise: Promisable<T>, config?: ForgetConfig<T>) {
    // default | global | provided priorities for config (not deep merge)
    const resolvedConfig = {
      ...defaultForgetConfig, ...globalThis.xy?.forget?.config, ...config,
    }
    if (isPromise(promise)) {
      try {
        let completed = false
        this.activeForgets++

        const promiseWrapper = async () => {
          await promise
            .then((result: T) => {
              this.activeForgets--
              completed = true
              resolvedConfig?.onComplete?.([result, undefined])
            })
            .catch((error) => {
              this.activeForgets--
              completed = true
              resolvedConfig?.onComplete?.([undefined, error])
            })
        }

        const promises = [promiseWrapper()]

        // if there is a timeout, add it to the race
        const timeout = resolvedConfig.timeout ?? defaultForgetConfig.timeout
        if (isNumber(timeout)) {
          const timeoutFunc = async () => {
            await delay(timeout)
            if (!completed) {
              resolvedConfig.onCancel?.()
              this.timeoutHandler(timeout, resolvedConfig)
            }
          }
          promises.push(timeoutFunc())
        }

        const all = Promise.race(promises)

        all
          .then(() => {
            return
          })
          .catch(() => {
            return
          })
      } catch (ex) {
        this.exceptedForgets += 1
        resolvedConfig?.onException?.(ex as Error)
        this.exceptionHandler(ex as Error, resolvedConfig)
      }
    } else {
      return (promise as () => void)()
    }
  },
}
