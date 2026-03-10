import type { Logger } from '@xylabs/logger'
import type { EmptyObject } from '@xylabs/object'
import type {
  IDBPDatabase, IDBPObjectStore, StoreNames,
} from 'idb'

import type { ObjectStore } from './ObjectStore.ts'
import { withStore } from './withStore.ts'

/**
 * Opens a read-write transaction on the specified store and passes it to the callback.
 * @param db The IndexedDB database instance
 * @param storeName The name of the object store to open
 * @param callback Function to execute with the read-write store
 * @param logger Optional logger for diagnostics
 * @returns The result of the callback
 */
export async function withReadWriteStore<T extends EmptyObject = EmptyObject, R = T>(
  db: IDBPDatabase<ObjectStore<T>>,
  storeName: StoreNames<ObjectStore<T>>,
  callback: (store: IDBPObjectStore<ObjectStore<T>, [StoreNames<ObjectStore<T>>], StoreNames<ObjectStore<T>>, 'readwrite'> | null) => Promise<R> | R,
  logger?: Logger,
): Promise<R> {
  return await withStore(db, storeName, callback, 'readwrite', logger)
}
