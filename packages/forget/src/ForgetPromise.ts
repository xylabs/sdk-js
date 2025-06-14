import { delay } from '@xylabs/delay'
import type { Logger } from '@xylabs/logger'
import type { Promisable, PromiseEx } from '@xylabs/promise'
import { isPromise } from '@xylabs/promise'
import { isNumber } from '@xylabs/typeof'

import { defaultForgetConfig, type ForgetConfig } from './ForgetConfig.ts'

type PromisableFunction<T> = () => Promisable<T>

// eslint-disable-next-line unicorn/no-static-only-class
export class ForgetPromise {
  static activeForgets = 0
  static exceptedForgets = 0
  static logger: Logger = console

  static get active() {
    return this.activeForgets > 0
  }

  static async awaitInactive(interval = 100, timeout?: number) {
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
  }

  static exceptionHandler(error: Error, { name }: ForgetConfig, externalStackTrace?: string) {
    this.logger.error(`forget promise handler excepted [${name}]: ${error.message}`, error)
    if (externalStackTrace !== undefined) {
      this.logger.warn(`External Stack trace [${name}]:`, externalStackTrace)
    }
  }

  /**
   * Used to explicitly launch an async function (or Promise) with awaiting it
   * @param promise The promise to forget
   * @param config Configuration of forget settings
   */
  static forget<T>(promise: Promise<T> | PromiseEx<T> | PromisableFunction<T> | T, config?: ForgetConfig<T>) {
    const externalStackTrace = (new Error('Stack')).stack

    // default | global | provided priorities for config (not deep merge)
    const resolvedConfig = {
      ...defaultForgetConfig, ...globalThis.xy?.forget?.config, ...config,
    }
    const resolvedPromise = typeof promise === 'function' ? (promise as PromisableFunction<T>)() : promise
    if (isPromise(resolvedPromise)) {
      try {
        let completed = false
        this.activeForgets++

        const promiseWrapper = async () => {
          await resolvedPromise
            .then((result: T) => {
              this.activeForgets--
              completed = true
              resolvedConfig?.onComplete?.([result, undefined])
            })
            .catch((error) => {
              this.activeForgets--
              completed = true
              this.logger.error(`forgotten promise excepted [${config?.name ?? 'unknown'}]: ${error.message}`, error)
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
              this.timeoutHandler(timeout, resolvedConfig, externalStackTrace)
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
        this.exceptionHandler(ex as Error, resolvedConfig, externalStackTrace)
      }
    } else {
      // we do nothing here since if it was a non-promise, it already got invoked.
      return
    }
  }

  static timeoutHandler(time: number, { name = 'unknown' }: ForgetConfig, externalStackTrace?: string) {
    this.logger.error(`forget promise timeout out after ${time}ms [Cancelling] [${name}]`)
    if (externalStackTrace !== undefined) {
      this.logger.warn(`External Stack trace [${name}]:`, externalStackTrace)
    }
  }
}
