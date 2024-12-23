import { exists } from '@xylabs/exists'

export const findAs = <In, Out>(x: In[], predicate: (a: In) => Out) => {
  return x.map(predicate).find(exists)
}

export const findLastAs = <In, Out>(x: In[], predicate: (a: In) => Out) => {
  return x.map(predicate).findLast(exists)
}
