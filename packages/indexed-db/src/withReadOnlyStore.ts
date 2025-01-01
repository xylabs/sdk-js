import type { Logger } from '@xylabs/logger'
import type { EmptyObject } from '@xylabs/object'
import type {
  IDBPDatabase, IDBPObjectStore, StoreNames,
} from 'idb'

import type { ObjectStore } from './ObjectStore.ts'
import { withStore } from './withStore.ts'

export async function withReadOnlyStore<T extends EmptyObject = EmptyObject, R = T>(
  db: IDBPDatabase<ObjectStore<T>>,
  storeName: StoreNames<ObjectStore<T>>,
  callback: (store: IDBPObjectStore<ObjectStore<T>, [StoreNames<ObjectStore<T>>], StoreNames<ObjectStore<T>>, 'readonly'> | null) => Promise<R> | R,
  logger?: Logger,
): Promise<R> {
  return await withStore(db, storeName, callback, 'readonly', logger)
}
