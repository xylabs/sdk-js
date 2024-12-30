import type { Logger } from '@xylabs/logger'
import type { EmptyObject } from '@xylabs/object'
import type {
  IDBPDatabase, IndexNames, StoreNames,
} from 'idb'

import {
  buildStandardIndexName,
  type IndexDescription,
} from './IndexDescription.ts'
import type { ObjectStore } from './ObjectStore.ts'

export function createStore<T extends EmptyObject = EmptyObject>(
  db: IDBPDatabase<ObjectStore<T>>,
  storeName: StoreNames<ObjectStore<T>>,
  indexes: IndexDescription[],
  logger?: Logger,
) {
  logger?.log(`Creating store ${storeName}`)
  // Create the store
  const store = db.createObjectStore(storeName, {
    // If it isn't explicitly set, create a value by auto incrementing.
    autoIncrement: true,
  })
  // Name the store
  store.name = storeName
  // Create an index on the hash
  for (const {
    key, multiEntry, unique,
  } of indexes) {
    const indexKeys = Object.keys(key)
    const keys = indexKeys.length === 1 ? indexKeys[0] : indexKeys
    const indexName = buildStandardIndexName({ key, unique }) as IndexNames<ObjectStore<T>, StoreNames<ObjectStore<T>>>
    console.log('createIndex', indexName, keys, { multiEntry, unique })
    store.createIndex(indexName, keys, { multiEntry, unique })
  }
}
