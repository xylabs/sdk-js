import type { TypedValue } from '@xylabs/typeof'

import type { PromiseEx } from './PromiseEx.ts'

export type Promisable<T, V = never> = PromiseEx<T, V> | Promise<T> | T
export type PromisableArray<T, V = never> = Promisable<T[], V>
export type OptionalPromisable<T, V = never> = Promisable<T | undefined, V>
export type OptionalPromisableArray<T, V = never> = PromisableArray<T | undefined, V>
export type NullablePromisable<T, V = never> = Promisable<T | null, V>
export type NullablePromisableArray<T, V = never> = PromisableArray<T | null, V>

/** @description Used to document promises that are being used as Mutexes */
export type AsyncMutex<T> = Promise<T>

export interface PromiseType {
  then: () => unknown
}

export type AnyNonPromise = Exclude<TypedValue, PromiseType>
