import { type Promisable } from '@xylabs/promise'

import type { ForgetNodeConfig } from './ForgetNodeConfig.ts'
import { ForgetPromiseNode } from './ForgetPromiseNode.ts'

// used to explicitly launch an async function (or Promise) with awaiting it
export const forgetNode = <T>(promise: Promisable<T>, config?: ForgetNodeConfig<T>) => {
  ForgetPromiseNode.forget<T>(promise, config)
}
