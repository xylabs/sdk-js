import { isDefined } from '@xylabs/typeof'
import type z from 'zod'

import type { ZodFactoryConfig } from './Config.ts'
import { zodAsFactory } from './zodAsFactory.ts'

export function zodToFactory<TZod extends z.ZodTypeAny>(zod: TZod, name: string) {
  const as = zodAsFactory<TZod>(zod, name)
  function toFunc<T>(value: T): (T & z.output<TZod>) | undefined
  function toFunc<T>(value: T, assert: ZodFactoryConfig): (T & z.output<TZod>)
  function toFunc<T>(value: T, assert?: ZodFactoryConfig): (T & z.output<TZod>) | undefined {
    if (isDefined(assert)) {
      return as(value, assert)
    }
    return as(value)
  }
  return toFunc
}
