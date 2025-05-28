import { type Promisable } from '@xylabs/promise'

import type { ForgetConfig } from './ForgetConfig.ts'
import { ForgetPromiseNode } from './ForgetPromiseNode.ts'

// used to explicitly launch an async function (or Promise) with awaiting it
export const forgetNode = <T>(promise: Promisable<T>, config?: ForgetConfig<T>) => {
  ForgetPromiseNode.forget<T>(promise, config)
}
