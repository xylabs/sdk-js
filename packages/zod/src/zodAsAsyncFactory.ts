import type { AssertConfig } from '@xylabs/error'
import { assertError } from '@xylabs/error'
import type z from 'zod'

import type { ZodFactoryConfig } from './Config.ts'

export function zodAsAsyncFactory<T>(zod: z.ZodType<T>, name: string) {
  function asFunc(value: unknown): Promise<T | undefined>
  function asFunc(value: unknown, assert: ZodFactoryConfig): Promise<T>
  async function asFunc(value: unknown, assert?: ZodFactoryConfig): Promise<T | undefined> {
    const result = await zod.safeParseAsync(value)
    if (result.success) {
      return result.data
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
