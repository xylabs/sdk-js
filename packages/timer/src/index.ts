interface TimeoutInfo {
  delay: number
  func: () => void
  id: string
}

let timeouts: TimeoutInfo[] = []

const timerFunc = () => {
  if (timeouts.length > 0) {
    setTimeout(timerFunc, 100)
  }
  const firing = timeouts.filter((timeout) => timeout.delay <= 100)
  for (const timeout of firing) {
    timeout.func()
  }
  const notFiring = timeouts.filter((timeout) => timeout.delay > 100)
  timeouts = notFiring.map((timeout) => ({ delay: timeout.delay - 100, func: timeout.func, id: timeout.id }))
}

export const setTimeoutEx = (func: () => void, delay: number) => {
  if (timeouts.length === 0) {
    setTimeout(timerFunc, 100)
  }
  const id = `${Date.now()}|${Math.random() * 9_999_999_999}`
  timeouts.push({ delay, func, id })
  return id
}

export const clearTimeoutEx = (id: string) => {
  timeouts = timeouts.filter((timeout) => timeout.id !== id)
}
