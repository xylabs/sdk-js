import { exists } from '@xylabs/exists'

/**
 * Concatenates two values or arrays into a single flat array, filtering out nullish entries.
 * @param a - First value or array
 * @param b - Second value or array
 * @returns A flat array of non-nullish elements
 */
export const flatten = <T>(a?: T | ConcatArray<T>, b?: T | ConcatArray<T>): T[] => {
  // eslint-disable-next-line unicorn/prefer-spread
  return ([] as (T | undefined)[]).concat(a).concat(b).filter(exists)
}
