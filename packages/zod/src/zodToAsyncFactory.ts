import { isDefined } from '@xylabs/typeof'
import type z from 'zod'

import type { ZodFactoryConfig } from './Config.ts'
import { zodAsAsyncFactory } from './zodAsAsyncFactory.ts'

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
