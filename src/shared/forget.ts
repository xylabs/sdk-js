import { delay } from './delay'

interface ForgetTimeoutConfig {
  delay: number
  cancel: () => void
}

//used to explicitly launch an async funtion (or Promise) with awaiting it
export const forget = (promise: Promise<unknown>, timeout?: ForgetTimeoutConfig) => {
  let completed = false

  const promiseWrapper = async () => {
    await promise
      .then(() => {
        completed = true
      })
      .catch(() => {
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
