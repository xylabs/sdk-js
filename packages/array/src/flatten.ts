import { exists } from '@xylabs/exists'

export const flatten = <T>(a?: T | ConcatArray<T>, b?: T | ConcatArray<T>): T[] => {
  return ([] as (T | undefined)[]).concat(a).concat(b).filter(exists)
}
