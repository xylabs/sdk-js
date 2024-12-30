import type { EmptyObject } from '@xylabs/object'
import type { IDBPDatabase, StoreNames } from 'idb'

import {
  type IndexDescription,
  type IndexDirection,
} from './IndexDescription.ts'
import type { ObjectStore } from './ObjectStore.ts'
import { withReadOnlyStore } from './withReadOnlyStore.ts'

export async function getExistingIndexes<T extends EmptyObject = EmptyObject>(
  db: IDBPDatabase<ObjectStore<T>>,
  storeName: StoreNames<ObjectStore<T>>,
): Promise<IndexDescription[]> {
  return await withReadOnlyStore(db, storeName, (store) => {
    return [...store.indexNames].map((indexName) => {
      const index = store.index(indexName)
      const key: Record<string, IndexDirection> = {}
      if (Array.isArray(index.keyPath)) {
        for (const keyPath of index.keyPath) {
          key[keyPath] = 1
        }
      } else {
        key[index.keyPath] = 1
      }
      const desc: IndexDescription = {
        name: indexName as string,
        key,
        unique: index.unique,
        multiEntry: index.multiEntry,
      }
      return desc
    })
  })
}
