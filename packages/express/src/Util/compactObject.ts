export const compactObject = <T extends Record<string, unknown>>(obj: T) => {
  const result: Record<string, unknown> = {}
  for (const key in obj) {
    if (obj[key] !== undefined && obj[key] !== null) {
      result[key] = obj[key]
    }
  }
  return result as T
}
