import type { EmptyObject } from './EmptyObject.ts'
import type { JsonObject } from './JsonObject.ts'

export type OmitByPredicate<T extends EmptyObject = Record<string, unknown>> = (value: T[keyof T], key: keyof T) => boolean

const omitByArray = <T>(
  obj: T[],
  predicate: OmitByPredicate,
  maxDepth: number,
): T[] => {
  return obj.map((value) => {
    return (value !== null && typeof value === 'object') ? omitBy(value, predicate, maxDepth) : value
  }) as T[]
}

const omitByObject = <T extends EmptyObject>(
  obj: T,
  predicate: OmitByPredicate,
  maxDepth: number,
): Partial<T> => {
  const result: JsonObject = {}

  for (const key in obj) {
    if (Object.hasOwn(obj, key)) {
      const value = obj[key]
      if (!predicate(value, key)) {
        result[key] = ((value !== null && typeof value === 'object') ? omitBy(value, predicate, maxDepth - 1) : value) as JsonObject
      }
    }
  }

  return result as T
}

export const omitBy = <T extends EmptyObject>(
  obj: T,
  predicate: OmitByPredicate,
  maxDepth = 1,
): Partial<T> => {
  if (maxDepth <= 0) {
    return obj
  }

  return Array.isArray(obj) ? omitByArray(obj, predicate, maxDepth - 1) as T : omitByObject(obj, predicate, maxDepth - 1) as T
}
