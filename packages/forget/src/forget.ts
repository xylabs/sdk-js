import { delay } from '@xylabs/delay'

export interface ForgetTimeoutConfig {
  cancel: () => void
  delay: number
}

export class ForgetPromise {
  static activeForgets = 0

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

  //used to explicitly launch an async function (or Promise) with awaiting it
  static forget(promise: Promise<unknown>, timeout?: ForgetTimeoutConfig) {
    let completed = false
    this.activeForgets++

    const promiseWrapper = async () => {
      await promise
        .then(() => {
          this.activeForgets--
          completed = true
        })
        .catch(() => {
          this.activeForgets--
          completed = true
        })
    }

    const promises = [promiseWrapper()]

    //if there is a timeout, add it to the race
    if (timeout) {
      const timeoutFunc = async () => {
        await delay(timeout.delay)
        if (!completed) {
          console.log(`forget promise timeout out after ${timeout.delay}ms [Cancelling]`)
          timeout.cancel?.()
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
  }
}

//used to explicitly launch an async function (or Promise) with awaiting it
export const forget = (promise: Promise<unknown>, timeout?: ForgetTimeoutConfig) => {
  ForgetPromise.forget(promise, timeout)
}
