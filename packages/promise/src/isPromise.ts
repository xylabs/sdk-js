import { TypedValue } from './Typed'

export interface PromiseType {
  // eslint-disable-next-line @typescript-eslint/ban-types
  then: () => unknown
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type AnyNonPromise<T = unknown> = Exclude<TypedValue, Promise<T>>

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
