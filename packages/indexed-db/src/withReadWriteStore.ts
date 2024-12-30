import type { EmptyObject } from '@xylabs/object'
import type {
  IDBPDatabase, IDBPObjectStore, StoreNames,
} from 'idb'

import type { ObjectStore } from './ObjectStore.ts'

export async function withReadWriteStore<T extends EmptyObject = EmptyObject, R = T>(
  db: IDBPDatabase<ObjectStore<T>>,
  storeName: StoreNames<ObjectStore<T>>,
  callback: (store: IDBPObjectStore<ObjectStore<T>, [StoreNames<ObjectStore<T>>], StoreNames<ObjectStore<T>>, string>) => Promise<R> | R,
): Promise<R> {
  const transaction = db.transaction(storeName, 'readwrite')
  const store = transaction.objectStore(storeName)
  try {
    return await callback(store)
  } finally {
    await transaction.done
  }
}
