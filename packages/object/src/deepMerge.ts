import type { AnyObject } from './AnyObject.ts'

/**
 * Deeply merges two types into a new type.
 */
type DeepMerge<A, B> = {
  [K in keyof A | keyof B]:
  K extends keyof B
    ? K extends keyof A
      ? A[K] extends object
        ? B[K] extends object
          ? DeepMerge<A[K], B[K]>
          : B[K]
        : B[K]
      : B[K]
    : K extends keyof A
      ? A[K]
      : never;
}

/**
 * Merges multiple types into a new type.
 */
type MergeAll<T extends object[], R = {}> =
  T extends [infer First extends object, ...infer Rest extends object[]]
    ? MergeAll<Rest, DeepMerge<R, First>>
    : R

/**
 * Options for merging objects in the deep merge function.
 */
type MergeOptions = {
  /**
   * Strategy for merging arrays.
   * - 'overwrite': Overwrites the array with the last object's value.
   * - 'concat': Concatenates arrays from all objects.
   * @default 'overwrite'
   */
  arrayStrategy?: 'overwrite' | 'concat'
  /**
   * Mutate the first object in the list instead of creating a new one.
   * @default false
   */
  mutate?: boolean
}

function merge<T extends AnyObject>(target: AnyObject, source?: AnyObject, options?: MergeOptions): T {
  if (!source || typeof source !== 'object') return target as T

  for (const key of Reflect.ownKeys(source)) {
    // Skip unsafe keys to prevent prototype pollution
    if (key === '__proto__' || key === 'constructor' || key === 'prototype') continue

    const value = source[key]
    if (Array.isArray(value)) {
      target[key]
      // If the value is an array, handle it based on the configured array strategy
        = options?.arrayStrategy === 'concat' && Array.isArray(target[key])
          ? [...target[key], ...value]
          : value
    } else if (value !== null && typeof value === 'object') {
      // Recursively merge nested objects
      if (!target[key] || typeof target[key] !== 'object') {
        target[key] = {}
      }
      merge(target[key] as AnyObject, value as AnyObject, options)
    } else {
      // Overwrite with non-object values
      target[key] = value
    }
  }

  return target as T
}

/**
 * Creates a deep merge function with the specified options.
 * @param options Options for merging.
 * @returns A deep merge function configured for the specified options.
 */
export function createDeepMerge(options: MergeOptions) {
  return function deepMerge<T extends AnyObject[]>(...objects: T): MergeAll<T> {
    const result = (options.mutate ? objects[0] ?? {} : {}) as MergeAll<T>
    for (const obj of objects) {
      merge(result, obj, options)
    }
    return result
  }
}

/**
 * Deeply merges multiple objects into a new object.
 * @param objects Multiple objects to merge deeply.
 * The function merges properties from all objects into a new object.
 * If a property exists in multiple objects, the last object's value will be used.
 * If a property is an object, it will be merged recursively.
 * If a property is an array, it will be overwritten by the last object's value.
 * If a property is a primitive value, it will be overwritten by the last object's value.
 * If a property is undefined or null in the source, it will be skipped.
 * If a property is a symbol, it will be merged as well.
 * @returns A new object with the merged properties.
 */
export const deepMerge = createDeepMerge({ arrayStrategy: 'overwrite', mutate: false })
