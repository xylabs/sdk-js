import { exists } from '@xylabs/exists'

/**
 * Maps each element using the predicate and filters out nullish results.
 * @param x - The input array
 * @param predicate - Transform function applied to each element
 * @returns Array of non-nullish transformed values
 */
export const filterAs = <In, Out>(x: In[], predicate: (a: In) => Out) => {
  return x.map(predicate).filter(exists)
}
