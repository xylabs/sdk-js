import { exists } from '@xylabs/exists'

export const filterAs = <In, Out>(x: In[], predicate: (a: In) => Out) => {
  return x.map(predicate).filter(exists)
}
