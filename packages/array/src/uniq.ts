/**
 * Returns a new array with duplicate values removed.
 * @param arr - The input array
 * @returns A deduplicated array
 */
export const uniq = <T>(arr: T[]): T[] => {
  return [...new Set(arr)]
}

/**
 * Returns a new array with duplicates removed, using a key function for comparison.
 * @param arr - The input array
 * @param iteratee - Function that returns the key to compare by
 * @returns A deduplicated array keeping the first occurrence of each key
 */
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
