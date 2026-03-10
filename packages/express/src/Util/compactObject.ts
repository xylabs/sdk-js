/**
 * Returns a shallow copy of the object with all null and undefined values removed.
 * @param obj The object to compact.
 * @returns A new object with only defined, non-null properties.
 */
export const compactObject = <T extends Record<string, unknown>>(obj: T) => {
  const result: Record<string, unknown> = {}
  for (const key in obj) {
    if (obj[key] !== undefined && obj[key] !== null) {
      result[key] = obj[key]
    }
  }
  return result as T
}
