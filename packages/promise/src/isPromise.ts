import { TypedValue } from './Typed'

export interface PromiseType {
  // eslint-disable-next-line @typescript-eslint/ban-types
  then: () => unknown
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type AnyNonPromise = Exclude<TypedValue, Promise<unknown>>

export const isPromise = (value: unknown): value is Promise<unknown> => {
  if (typeof value === 'object' && !Array.isArray(value)) {
    return typeof (value as PromiseType).then === 'function'
  }
  return false
}
