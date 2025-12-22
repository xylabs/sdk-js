import { isDefined } from '@xylabs/typeof'
import type z from 'zod'

import type { ZodFactoryConfig } from './Config.ts'
import { zodAsFactory } from './zodAsFactory.ts'

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
