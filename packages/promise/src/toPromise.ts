import type { Promisable } from './types.ts'

export function toPromise<T>(value: Promisable<T>): Promise<T> {
  return value instanceof Promise ? value : Promise.resolve(value)
}
