import type { AssertConfig } from '@xylabs/error'
import { assertError } from '@xylabs/error'
import type z from 'zod'

import type { ZodFactoryConfig } from './Config.ts'

export function zodAsFactory<TZod>(zod: z.ZodType<TZod>, name: string) {
  function asFunc<T>(value: T): (T & TZod) | undefined
  function asFunc<T>(value: T, assert: ZodFactoryConfig): (T & TZod)
  function asFunc<T>(value: T, assert?: ZodFactoryConfig): (T & TZod) | undefined {
    const result = zod.safeParse(value)
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
