import { exists } from '@xylabs/exists'

/**
 * Maps each element using the predicate and returns the first non-nullish result.
 * @param x - The input array
 * @param predicate - Transform function applied to each element
 * @returns The first non-nullish transformed value, or undefined
 */
export const findAs = <In, Out>(x: In[], predicate: (a: In) => Out) => {
  return x.map(predicate).find(exists)
}

/**
 * Maps each element using the predicate and returns the last non-nullish result.
 * @param x - The input array
 * @param predicate - Transform function applied to each element
 * @returns The last non-nullish transformed value, or undefined
 */
export const findLastAs = <In, Out>(x: In[], predicate: (a: In) => Out) => {
  return x.map(predicate).findLast(exists)
}
