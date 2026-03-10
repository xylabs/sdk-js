import { type Promisable } from '@xylabs/promise'

import type { ForgetNodeConfig } from './ForgetNodeConfig.ts'
import { ForgetPromiseNode } from './ForgetPromiseNode.ts'

/**
 * Node.js variant of forget that can optionally terminate the process on exceptions or timeouts.
 * @param promise - The promise or promisable value to forget.
 * @param config - Optional Node.js-specific configuration including process termination options.
 */
export const forgetNode = <T>(promise: Promisable<T>, config?: ForgetNodeConfig<T>) => {
  ForgetPromiseNode.forget<T>(promise, config)
}
