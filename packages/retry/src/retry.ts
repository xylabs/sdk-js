import { delay } from '@xylabs/delay'
import { Promisable } from '@xylabs/promise'

export interface RetryConfig {
  backoff?: number
  interval?: number
  retries?: number
}

export interface RetryConfigWithComplete<T = unknown> extends RetryConfig {
  complete?: (result?: T) => boolean
}

export const retry = async <T = unknown>(func: () => Promisable<T | undefined>, config?: RetryConfigWithComplete<T>): Promise<T | undefined> => {
  const { complete = (value: T | undefined) => value !== undefined, retries = 0, interval = 100, backoff = 2 } = config ?? {}
  const result = await func()
  if (complete(result)) {
    return result
  }
  if (retries <= 0) {
    return undefined
  }
  await delay(interval)
  return retry(func, { backoff, complete, interval: interval * backoff, retries: retries - 1 })
}
