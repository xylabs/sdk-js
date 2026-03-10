/**
 * Returns a new set containing only elements present in both `a` and `b`.
 * @param a - The first set
 * @param b - The second set
 * @returns A new set representing the intersection of `a` and `b`
 */
export const intersection = <TKey>(a: Set<TKey>, b: Set<TKey>): Set<TKey> => {
  return new Set([...a].filter(x => b.has(x)))
}
