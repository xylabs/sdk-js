import type { TypedValue } from '@xylabs/typeof'

import type { PromiseEx } from './PromiseEx.ts'

/** A value that may be a Promise, PromiseEx, or a plain synchronous value. */
export type Promisable<T, V = never> = PromiseEx<T, V> | Promise<T> | T

/** A Promisable that resolves to an array. */
export type PromisableArray<T, V = never> = Promisable<T[], V>

/** A Promisable that may resolve to undefined. */
export type OptionalPromisable<T, V = never> = Promisable<T | undefined, V>

/** A Promisable array where elements may be undefined. */
export type OptionalPromisableArray<T, V = never> = PromisableArray<T | undefined, V>

/** A Promisable that may resolve to null. */
export type NullablePromisable<T, V = never> = Promisable<T | null, V>

/** A Promisable array where elements may be null. */
export type NullablePromisableArray<T, V = never> = PromisableArray<T | null, V>

/** @description Used to document promises that are being used as Mutexes */
export type AsyncMutex<T> = Promise<T>

/** An interface representing any thenable (promise-like) object. */
export interface PromiseType {
  then: () => unknown
}

/** Any non-promise typed value, excluding thenables. */
export type AnyNonPromise = Exclude<TypedValue, PromiseType>
