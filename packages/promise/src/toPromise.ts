import type { Promisable } from './types.ts'

/**
 * Wraps a value in a Promise if it is not already one.
 * @param value - A value that may or may not be a Promise.
 * @returns A Promise resolving to the value.
 */
export function toPromise<T>(value: Promisable<T>): Promise<T> {
  return value instanceof Promise ? value : Promise.resolve(value)
}
