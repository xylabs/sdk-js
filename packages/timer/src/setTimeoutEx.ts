import { assertEx } from '@xylabs/assert'

interface TimeoutInfo {
  delay: number
  // eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
  func: Function
  id: string
}

let timeouts: TimeoutInfo[] = []
let currentTimeout: NodeJS.Timeout | undefined
let interval = -1

const reset = () => {
  interval = -1
  clearTimeout(currentTimeout)
  currentTimeout = undefined
  timeouts = []
}

const update = (newTimeouts = timeouts, delayPassed = 0) => {
  // if no more timeouts, set back to initial state
  if (newTimeouts.length <= 0) {
    reset()
  } else {
    const newInterval = Math.min(...newTimeouts.map(timeout => timeout.delay))

    if (newInterval === interval && currentTimeout !== undefined) {
      // since nothing changed, just return
      return
    } else {
      clearTimeout(currentTimeout)
      timeouts = newTimeouts.map(timeout => ({
        delay: timeout.delay - delayPassed, func: timeout.func, id: timeout.id,
      }))
      // restart timeout since it needs to be different
      interval = newInterval
      currentTimeout = setTimeout(timerFunc, interval)
    }
  }
}

const timerFunc = () => {
  const notFiring = timeouts.filter(timeout => timeout.delay > interval)
  const firing = timeouts.filter(timeout => timeout.delay <= interval)

  // call this after getting notFiring and firing since set will change in this call
  update(notFiring, interval)

  // trigger the ones that need to be triggered
  for (const timeout of firing) {
    timeout.func()
  }
}

// eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
export const setTimeoutEx = (func: Function, delay: number) => {
  assertEx(delay >= 0, () => 'delay must be >= 0')
  const id = `${Date.now()}|${Math.random() * 9_999_999_999}`
  timeouts.push({
    delay, func, id,
  })
  update()
  return id
}

export const clearTimeoutEx = (id: string) => {
  timeouts = timeouts.filter(timeout => timeout.id !== id)
  update(timeouts)
}
