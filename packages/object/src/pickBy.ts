import { assertEx } from '@xylabs/assert'

import type { EmptyObject } from './EmptyObject.ts'
import type { JsonObject } from './JsonObject.ts'
import type { DeepPickStartsWith } from './PickStartsWith.ts'

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

export const pickByPrefix = <T extends EmptyObject, P extends string>(payload: T, prefix: P, maxDepth = 100): DeepPickStartsWith<T, P> => {
  return pickBy(payload, pickByPrefixPredicate(prefix), maxDepth) as unknown as DeepPickStartsWith<T, P>
}
