import type { Logger } from '@xylabs/logger'
import type { EmptyObject } from '@xylabs/object'
import type {
  IDBPDatabase, IDBPObjectStore, IDBPTransaction, StoreNames,
} from 'idb'

import type { ObjectStore } from './ObjectStore.ts'

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
