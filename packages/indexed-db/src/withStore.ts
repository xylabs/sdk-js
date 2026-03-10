import type { Logger } from '@xylabs/logger'
import type { EmptyObject } from '@xylabs/object'
import type {
  IDBPDatabase, IDBPObjectStore, IDBPTransaction, StoreNames,
} from 'idb'

import type { ObjectStore } from './ObjectStore.ts'

/**
 * Opens a transaction on the specified store with the given mode and passes the store to the callback.
 * If the store does not exist, the callback receives null.
 * @param db The IndexedDB database instance
 * @param storeName The name of the object store to open
 * @param callback Function to execute with the store (or null if it doesn't exist)
 * @param mode The transaction mode ('readonly' or 'readwrite')
 * @param logger Optional logger for diagnostics
 * @returns The result of the callback
 */
export async function withStore<T extends EmptyObject = EmptyObject, R = T, M extends 'readonly' | 'readwrite' = 'readonly'>(
  db: IDBPDatabase<ObjectStore<T>>,
  storeName: StoreNames<ObjectStore<T>>,
  callback: (store: IDBPObjectStore<ObjectStore<T>,
    [StoreNames<ObjectStore<T>>], StoreNames<ObjectStore<T>>, M> | null) => Promise<R> | R,
  mode: M,
  logger?: Logger,
): Promise<R> {
  logger?.log('withStore', storeName, mode)
  let transaction: IDBPTransaction<ObjectStore<T>, [StoreNames<ObjectStore<T>>], M> | undefined = undefined
  logger?.log('withStore:transaction')
  let store = null
  try {
    transaction = db.transaction(storeName, mode)
    // we do this in a try/catch because the store might not exist
    store = transaction.objectStore(storeName)
  } catch (ex) {
    logger?.log('withStore:catch', ex)
  }
  try {
    return await callback(store)
  } finally {
    logger?.log('withStore:finally')
    await transaction?.done
  }
}
