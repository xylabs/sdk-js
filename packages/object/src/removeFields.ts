import type { EmptyObject } from './EmptyObject.ts'

/**
 * Returns a shallow copy of the object with the specified fields removed.
 * @param obj - The source object.
 * @param fields - An array of keys to remove.
 * @returns A new object without the specified fields.
 */
export const removeFields = <T extends EmptyObject, K extends keyof T>(obj: T, fields: K[]): Omit<T, K> => {
  const clone = { ...obj }
  for (const field of fields) {
    delete clone[field]
  }
  return clone
}
