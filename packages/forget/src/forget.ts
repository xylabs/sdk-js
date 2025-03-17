import { delay } from '@xylabs/delay'
import { isPromise, type Promisable } from '@xylabs/promise'

export interface ForgetTimeoutConfig {
  cancel: () => void
  delay: number
}

export const ForgetPromise = {
  get active() {
    return this.activeForgets > 0
  },

  activeForgets: 0,

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
  forget<T>(promise: Promisable<T>, onComplete?: (result: [T | undefined, Error | undefined]) => void, config?: ForgetTimeoutConfig) {
    if (isPromise(promise)) {
      let completed = false
      this.activeForgets++

      const promiseWrapper = async () => {
        await promise
          .then((result: T) => {
            this.activeForgets--
            completed = true
            onComplete?.([result, undefined])
          })
          .catch((error) => {
            this.activeForgets--
            completed = true
            onComplete?.([undefined, error])
          })
      }

      const promises = [promiseWrapper()]

      // if there is a timeout, add it to the race
      if (config) {
        const timeoutFunc = async () => {
          await delay(config.delay)
          if (!completed) {
            console.log(`forget promise timeout out after ${config.delay}ms [Cancelling]`)
            config.cancel?.()
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
    } else {
      return (promise as () => void)()
    }
  },
}

// used to explicitly launch an async function (or Promise) with awaiting it
export const forget = <T>(promise: Promisable<T>, onComplete?: (result: [T | undefined, Error | undefined]) => void, timeout?: ForgetTimeoutConfig) => {
  ForgetPromise.forget<T>(promise, onComplete, timeout)
}
