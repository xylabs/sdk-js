import type { EmptyObject } from '@xylabs/object'

export interface ObjectStore<T extends EmptyObject = EmptyObject> {
  [s: string]: T
}
