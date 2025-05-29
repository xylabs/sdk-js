type AnyObject = Record<string | number | symbol, unknown>

function merge<T extends AnyObject>(target: AnyObject, source?: AnyObject): T {
  if (!source || typeof source !== 'object') return target as T

  for (const [key, value] of Object.entries(source)) {
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

export function deepMerge<T extends AnyObject[]>(...objects: T): T[number] {
  const result = {} as T[number]
  for (const obj of objects) {
    merge(result, obj)
  }
  return result
}
