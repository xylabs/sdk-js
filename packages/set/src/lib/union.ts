/**
 * Returns a new set containing all elements from both `a` and `b`.
 * @param a - The first set
 * @param b - The second set
 * @returns A new set representing the union of `a` and `b`
 */
export const union = <TKey>(a: Set<TKey>, b: Set<TKey>): Set<TKey> => {
  return new Set([...a, ...b])
}
