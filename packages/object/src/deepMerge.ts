type AnyObject = Record<string | number | symbol, unknown>

type MergeTypes<A, B> = {
  [K in keyof A | keyof B]:
  K extends keyof B
    ? B[K]
    : K extends keyof A
      ? A[K]
      : never;
}

type MergeAll<T extends object[], R = {}> =
  T extends [infer First extends object, ...infer Rest extends object[]]
    ? MergeAll<Rest, MergeTypes<R, First>>
    : R

function merge<T extends AnyObject>(target: AnyObject, source?: AnyObject): T {
  if (!source || typeof source !== 'object') return target as T

  for (const key of Reflect.ownKeys(source)) {
    const value = source[key]
    if (
      value !== null
      && typeof value === 'object'
      && !Array.isArray(value)
    ) {
      // Recursively merge nested objects
      if (!target[key] || typeof target[key] !== 'object') {
        target[key] = {}
      }
      merge(target[key] as AnyObject, value as AnyObject)
    } else {
      // Overwrite with non-object values
      target[key] = value
    }
  }

  return target as T
}

export function deepMerge<T extends AnyObject[]>(...objects: T): MergeAll<T> {
  const result = {} as MergeAll<T>
  for (const obj of objects) {
    merge(result, obj)
  }
  return result
}
