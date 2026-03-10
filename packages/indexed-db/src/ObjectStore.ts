/* v8 ignore start */
import type { EmptyObject } from '@xylabs/object'

/** Generic IndexedDB schema type that maps store names to their value types. */
export interface ObjectStore<T extends EmptyObject = EmptyObject> {
  [s: string]: T
}
/* v8 ignore stop */
