import { type Promisable } from '@xylabs/promise'

import type { ForgetConfig } from './ForgetConfig.ts'
import { ForgetPromise } from './ForgetPromise.ts'

// used to explicitly launch an async function (or Promise) with awaiting it
export const forget = <T>(promise: Promisable<T>, config?: ForgetConfig<T>) => {
  ForgetPromise.forget<T>(promise, config)
}
