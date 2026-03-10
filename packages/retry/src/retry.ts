import { delay } from '@xylabs/delay'
import type { Promisable } from '@xylabs/promise'

/** Configuration for retry behavior. */
export interface RetryConfig {
  /** Multiplier applied to the interval after each retry. Defaults to 2. */
  backoff?: number
  /** Initial delay in milliseconds between retries. Defaults to 100. */
  interval?: number
  /** Maximum number of retry attempts. Defaults to 0 (no retries). */
  retries?: number
}

/** Retry configuration extended with a custom completion check. */
export interface RetryConfigWithComplete<T = unknown> extends RetryConfig {
  /** Determines whether the result is considered complete. Defaults to checking for a defined value. */
  complete?: (result?: T) => boolean
}

/**
 * Retries an async function with exponential backoff until it completes or retries are exhausted.
 * @param func - The function to retry.
 * @param config - Optional retry configuration including backoff, interval, retries, and completion check.
 * @returns The result of the function, or undefined if all retries were exhausted.
 */
export const retry = async <T = unknown>(func: () => Promisable<T | undefined>, config?: RetryConfigWithComplete<T>): Promise<T | undefined> => {
  const {
    complete = (value: T | undefined) => value !== undefined, retries = 0, interval = 100, backoff = 2,
  } = config ?? {}
  const result = await func()
  if (complete(result)) {
    return result
  }
  if (retries <= 0) {
    return undefined
  }
  await delay(interval)
  return retry(func, {
    backoff, complete, interval: interval * backoff, retries: retries - 1,
  })
}
