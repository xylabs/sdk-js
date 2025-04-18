import type { Logger } from '@xylabs/logger'
import type { EmptyObject } from '@xylabs/object'
import type { IDBPDatabase, StoreNames } from 'idb'

import {
  type IndexDescription,
  type IndexDirection,
} from './IndexDescription.ts'
import type { ObjectStore } from './ObjectStore.ts'
import { withDbByVersion } from './withDbByVersion.ts'
import { withReadOnlyStore } from './withReadOnlyStore.ts'

async function getExistingIndexesInternal<T extends EmptyObject = EmptyObject>(
  db: IDBPDatabase<ObjectStore<T>>,
  storeName: StoreNames<ObjectStore<T>>,
  logger?: Logger,
): Promise<IndexDescription[] | null> {
  logger?.log('getExistingIndexesInternal', storeName)
  return await withReadOnlyStore(db, storeName, (store) => {
    return store
      ? [...store.indexNames].map((indexName) => {
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
            key,
            unique: index.unique,
            multiEntry: index.multiEntry,
          }
          return desc
        })
      : null
  }, logger)
}

export async function getExistingIndexes<T extends EmptyObject = EmptyObject>(
  db: IDBPDatabase<ObjectStore<T>> | string,
  storeName: StoreNames<ObjectStore<T>>,
  logger?: Logger,
): Promise<IndexDescription[] | null> {
  logger?.log('getExistingIndexes', storeName)
  if (typeof db === 'string') {
    return await withDbByVersion<ObjectStore<T>, IndexDescription[] | null>(db, async (db) => {
      return await getExistingIndexesInternal(db, storeName, logger)
    })
  }
  return await getExistingIndexesInternal(db, storeName, logger)
}
