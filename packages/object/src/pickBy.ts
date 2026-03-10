import { assertEx } from '@xylabs/assert'

import type { EmptyObject } from './EmptyObject.ts'
import type { JsonObject } from './JsonObject.ts'
import type { DeepPickStartsWith } from './PickStartsWith.ts'

/** A predicate function used to determine which properties to pick from an object. */
export type PickByPredicate<T extends EmptyObject = Record<string, unknown>> = (value: T[keyof T], key: keyof T) => boolean

const pickByArray = <T>(
  obj: T[],
  predicate: PickByPredicate,
  maxDepth: number,
): T[] => {
  return obj.map((value) => {
    return (value !== null && typeof value === 'object') ? pickBy(value, predicate, maxDepth) : value
  }) as T[]
}

const pickByObject = <T extends EmptyObject>(
  obj: T,
  predicate: PickByPredicate,
  maxDepth: number,
): Partial<T> => {
  const result: JsonObject = {}

  for (const key in obj) {
    if (Object.hasOwn(obj, key)) {
      const value = obj[key]
      if (predicate(value, key)) {
        result[key] = ((value !== null && typeof value === 'object') ? pickBy(value, predicate, maxDepth - 1) : value) as JsonObject
      }
    }
  }

  return result as T
}

/**
 * Creates a new object containing only the properties that satisfy the predicate, with optional recursive depth.
 * @param obj - The source object to pick properties from.
 * @param predicate - A function that returns true for properties to include.
 * @param maxDepth - Maximum recursion depth for nested objects.
 * @returns A partial copy of the object with only matching properties.
 */
export const pickBy = <T extends EmptyObject>(
  obj: T,
  predicate: PickByPredicate,
  maxDepth = 1,
): Partial<T> => {
  if (maxDepth <= 0) {
    return obj
  }

  return Array.isArray(obj) ? pickByArray(obj, predicate, maxDepth - 1) as T : pickByObject(obj, predicate, maxDepth - 1) as T
}

const pickByPrefixPredicate = (prefix: string) => (_: unknown, key: string) => {
  assertEx(typeof key === 'string', () => `Invalid key type [${key}, ${typeof key}]`)
  return key.startsWith(prefix)
}

/**
 * Picks all properties whose keys start with the given prefix, recursively through nested objects.
 * @param payload - The source object.
 * @param prefix - The string prefix to match keys against.
 * @param maxDepth - Maximum recursion depth.
 * @returns A new object containing only properties with matching prefixed keys.
 */
export const pickByPrefix = <T extends EmptyObject, P extends string>(payload: T, prefix: P, maxDepth = 100): DeepPickStartsWith<T, P> => {
  return pickBy(payload, pickByPrefixPredicate(prefix), maxDepth) as unknown as DeepPickStartsWith<T, P>
}
