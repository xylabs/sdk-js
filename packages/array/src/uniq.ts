export const uniq = <T>(arr: T[]): T[] => {
  return [...new Set(arr)]
}

export const uniqBy = <T, I>(arr: T[], iteratee: (item: T) => I): T[] => {
  const seen = new Set()
  return arr.filter((item) => {
    const key = iteratee(item)
    if (!seen.has(key)) {
      seen.add(key)
      return true
    }
    return false
  })
}
