import type { EmptyObject } from '@xylabs/object'
import type { KeyValueStore } from '@xylabs/storage'
import type {
  IDBPDatabase, StoreNames, StoreValue,
} from 'idb'

import type { ObjectStore } from './ObjectStore.ts'
import { withDb } from './withDb.ts'

/**
 * An IndexedDB key/value store.
 */
export class IndexedDbKeyValueStore<T extends EmptyObject> implements KeyValueStore<T, string> {
  constructor(readonly dbName: string, readonly storeName: StoreNames<ObjectStore<T>>) {}

  async clear?(): Promise<void> {
    return await this.withDb((db) => {
      return db.clear(this.storeName)
    })
  }

  async delete(key: string): Promise<void> {
    return await this.withDb((db) => {
      return db.delete(this.storeName, key)
    })
  }

  async get(key: string): Promise<T | undefined> {
    return await this.withDb((db) => {
      return db.get(this.storeName, key) ?? undefined
    })
  }

  async keys?(): Promise<string[]> {
    return await this.withDb((db) => {
      return db.getAllKeys(this.storeName)
    })
  }

  async set(key: string, value: StoreValue<ObjectStore<T>, StoreNames<ObjectStore<T>>>): Promise<void> {
    return await this.withDb((db) => {
      return db.put(this.storeName, value, key)
    })
  }

  async withDb<R = T>(
    callback: (db: IDBPDatabase<ObjectStore<T>>) =>
      Promise<R> | R,
  ) {
    return await withDb<T, R>(this.dbName, (db) => {
      return callback(db)
    })
  }
}
