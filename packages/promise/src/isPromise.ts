import type { TypedValue } from '@xylabs/typeof'

export interface PromiseType {
  then: () => unknown
}

export type AnyNonPromise = Exclude<TypedValue, PromiseType>

export const isPromise = (value: unknown): value is Promise<unknown> => {
  if (typeof value === 'object' && !Array.isArray(value)) {
    return typeof (value as PromiseType).then === 'function'
  }
  return false
}

// type test
/*
const x = Promise.resolve()

const f = (x: AnyNonPromise) => {
  return x
}

f(x)
*/
