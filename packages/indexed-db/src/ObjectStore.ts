/* v8 ignore start */
import type { EmptyObject } from '@xylabs/object'

export interface ObjectStore<T extends EmptyObject = EmptyObject> {
  [s: string]: T
}
/* v8 ignore stop */
