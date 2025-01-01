import type { Logger } from '@xylabs/logger'
import type {
  DBSchema,
  IDBPDatabase, IDBPObjectStore, IndexNames, StoreNames,
} from 'idb'

import {
  buildStandardIndexName,
  type IndexDescription,
} from './IndexDescription.ts'

export function createStoreDuringUpgrade<DBTypes extends DBSchema | unknown = unknown>(
  db: IDBPDatabase<DBTypes>,
  storeName: StoreNames<DBTypes>,
  indexes: IndexDescription[],
  logger?: Logger,
) {
  logger?.log(`Creating store ${storeName}`)
  // Create the store
  let store: IDBPObjectStore<DBTypes, ArrayLike<StoreNames<DBTypes>>, StoreNames<DBTypes>, 'versionchange'> | undefined
  try {
    store = db.createObjectStore(storeName, {
    // If it isn't explicitly set, create a value by auto incrementing.
      autoIncrement: true,
    })
  } catch {}
  logger?.log(`Creating store: created ${storeName}`)
  // Name the store
  store.name = storeName
  // Create an index on the hash
  for (const {
    key, multiEntry, unique,
  } of indexes) {
    logger?.log(`Creating store: index ${key}`)
    const indexKeys = Object.keys(key)
    const keys = indexKeys.length === 1 ? indexKeys[0] : indexKeys
    const indexName = buildStandardIndexName({ key, unique }) as IndexNames<DBTypes, StoreNames<DBTypes>>
    console.log('createIndex', indexName, keys, { multiEntry, unique })
    store.createIndex(indexName, keys, { multiEntry, unique })
  }
}
