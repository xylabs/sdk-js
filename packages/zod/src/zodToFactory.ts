import { isDefined } from '@xylabs/typeof'
import type * as z from 'zod'

import type { ZodFactoryConfig } from './Config.ts'
import { zodAsFactory } from './zodAsFactory.ts'

/**
 * Creates a function that converts a value to the zod schema type, delegating to `zodAsFactory` internally.
 * Provides overloads for optional assertion: without assert config returns undefined on failure, with assert config throws on failure.
 * @param zod - The zod schema to validate against
 * @param name - A name used in error messages for identification
 * @returns A function that validates and converts a value to the schema type
 */
export function zodToFactory<TZod>(zod: z.ZodType<TZod>, name: string) {
  const as = zodAsFactory<TZod>(zod, name)
  function toFunc<T>(value: T): (T & TZod) | undefined
  function toFunc<T>(value: T, assert: ZodFactoryConfig): (T & TZod)
  function toFunc<T>(value: T, assert?: ZodFactoryConfig): (T & TZod) | undefined {
    if (isDefined(assert)) {
      return as(value, assert)
    }
    return as(value)
  }
  return toFunc
}
