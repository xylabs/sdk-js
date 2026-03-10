import { isDefined } from '@xylabs/typeof'
import type * as z from 'zod'

import type { ZodFactoryConfig } from './Config.ts'
import { zodAsAsyncFactory } from './zodAsAsyncFactory.ts'

/**
 * Creates an async function that converts a value to the zod schema type, delegating to `zodAsAsyncFactory` internally.
 * Provides overloads for optional assertion: without assert config resolves to undefined on failure, with assert config throws on failure.
 * @param zod - The zod schema to validate against
 * @param name - A name used in error messages for identification
 * @returns An async function that validates and converts a value to the schema type
 */
export function zodToAsyncFactory<TZod>(zod: z.ZodType<TZod>, name: string) {
  const as = zodAsAsyncFactory<TZod>(zod, name)
  function toFunc<T>(value: T): Promise<(T & TZod) | undefined>
  function toFunc<T>(value: T, assert: ZodFactoryConfig): Promise<(T & TZod)>
  async function toFunc<T>(value: T, assert?: ZodFactoryConfig): Promise<(T & TZod) | undefined> {
    if (isDefined(assert)) {
      return await as(value, assert)
    }
    return await as(value)
  }
  return toFunc
}
