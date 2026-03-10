import { type Promisable } from '@xylabs/promise'

import type { ForgetConfig } from './ForgetConfig.ts'
import { ForgetPromise } from './ForgetPromise.ts'

/**
 * Explicitly launches an async function or promise without awaiting it (fire-and-forget).
 * @param promise - The promise or promisable value to forget.
 * @param config - Optional configuration for timeout, error handling, and completion callbacks.
 */
export const forget = <T>(promise: Promisable<T>, config?: ForgetConfig<T>) => {
  ForgetPromise.forget<T>(promise, config)
}
