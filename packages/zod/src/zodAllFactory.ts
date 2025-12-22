import type * as z from 'zod'

import { zodAsFactory } from './zodAsFactory.ts'
import { zodIsFactory } from './zodIsFactory.ts'
import { zodToFactory } from './zodToFactory.ts'

/** @alpha */
export type AllZodFactories<TType, TName extends string> = {
  [K in `is${TName}`]: ReturnType<typeof zodIsFactory<TType>>
} & {
  [K in `as${TName}`]: ReturnType<typeof zodAsFactory<TType>>
} & {
  [K in `to${TName}`]: ReturnType<typeof zodToFactory<TType>>
}

/** @alpha */
export function zodAllFactory<T, TName extends string>(zod: z.ZodType<T>, name: TName) {
  return {
    [`is${name}`]: zodIsFactory<T>(zod),
    [`as${name}`]: zodAsFactory<T>(zod, `as${name}`),
    [`to${name}`]: zodToFactory<T>(zod, `to${name}`),
  }
}
