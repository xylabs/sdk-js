export type OmitByPredicate<T extends object> = (value: T[keyof T], key: keyof T) => boolean

export const omitBy = <T extends object>(
  obj: T,
  predicate: OmitByPredicate<T>,
): Partial<T> => {
  const result: Partial<T> = {}

  for (const key in obj) {
    if (Object.hasOwn(obj, key)) {
      const value = obj[key]
      if (!predicate(value, key)) {
        result[key] = value
      }
    }
  }

  return result
}
