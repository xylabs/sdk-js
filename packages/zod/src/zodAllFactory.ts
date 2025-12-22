import type z from 'zod'

import { zodAsFactory } from './zodAsFactory.ts'
import { zodIsFactory } from './zodIsFactory.ts'
import { zodToFactory } from './zodToFactory.ts'

/** @alpha */
export type AllZodFactories<TType extends z.ZodTypeAny, TName extends string> = {
  [K in `is${TName}`]: ReturnType<typeof zodIsFactory<TType>>
} & {
  [K in `as${TName}`]: ReturnType<typeof zodAsFactory<TType>>
} & {
  [K in `to${TName}`]: ReturnType<typeof zodToFactory<TType>>
}

/** @alpha */
export function zodAllFactory<TType extends z.ZodTypeAny, TName extends string>(zod: TType, name: TName) {
  return {
    [`is${name}`]: zodIsFactory<TType>(zod),
    [`as${name}`]: zodAsFactory<TType>(zod, `as${name}`),
    [`to${name}`]: zodToFactory<TType>(zod, `to${name}`),
  }
}
