import { exists } from '@xylabs/exists'

export const flatten = <T>(a?: T | ConcatArray<T>, b?: T | ConcatArray<T>): T[] => {
  // eslint-disable-next-line unicorn/prefer-spread
  return ([] as (T | undefined)[]).concat(a).concat(b).filter(exists)
}
