/**
 * Returns a new set containing elements in `a` that are not in `b`.
 * @param a - The source set
 * @param b - The set of elements to exclude
 * @returns A new set representing the difference of `a` and `b`
 */
export const difference = <TKey>(a: Set<TKey>, b: Set<TKey>): Set<TKey> => {
  return new Set([...a].filter(x => !b.has(x)))
}
