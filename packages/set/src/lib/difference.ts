export const difference = <TKey>(a: Set<TKey>, b: Set<TKey>): Set<TKey> => {
  return new Set([...a].filter(x => !b.has(x)))
}
