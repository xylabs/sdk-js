import type { AssertConfig } from '@xylabs/error'
import { assertError } from '@xylabs/error'
import type z from 'zod'

import type { ZodFactoryConfig } from './Config.ts'

export function zodAsAsyncFactory<TZod>(zod: z.ZodType<TZod>, name: string) {
  function asFunc<T>(value: T): Promise<(T & TZod) | undefined>
  function asFunc<T>(value: T, assert: ZodFactoryConfig): Promise<(T & TZod)>
  async function asFunc<T>(value: T, assert?: ZodFactoryConfig): Promise<(T & TZod) | undefined> {
    const result = await zod.safeParseAsync(value)
    if (result.success) {
      return value as (T & TZod)
    }
    if (assert !== undefined) {
      let assertConfig: AssertConfig
      switch (typeof assert) {
        case 'string': {
          assertConfig = `[${name}][${value}] ${assert}`
          break
        }
        case 'object': {
          assertConfig = `[${name}][${assert.name}][${value}] ${result.error.message}`
          break
        }
        case 'boolean': {
          assertConfig = `[${name}][${value}] ${result.error.message}`
          break
        }
        case 'function': {
          assertConfig = assert(value, result.error.message)
          break
        }
        default: {
          assertConfig = true
        }
      }
      return assertError(value, assertConfig, result.error.message)
    }
  }

  return asFunc
}
