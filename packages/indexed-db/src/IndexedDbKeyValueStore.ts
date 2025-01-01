import type { KeyValueStore } from '@xylabs/storage'
import type {
  DBSchema,
  IDBPDatabase, StoreKey, StoreNames, StoreValue,
} from 'idb'

import { withDb } from './withDb.ts'

/**
 * An IndexedDB key/value store.
 */
export class IndexedDbKeyValueStore<T extends DBSchema, S extends StoreNames<T>> implements KeyValueStore<StoreValue<T, S>, StoreKey<T, S>> {
  constructor(readonly dbName: string, readonly storeName: S) {}

  async clear?(): Promise<void> {
    return await this.withDb((db) => {
      return db.clear(this.storeName)
    })
  }

  async delete(key: StoreKey<T, S>): Promise<void> {
    return await this.withDb((db) => {
      return db.delete(this.storeName, key)
    })
  }

  async get(key: StoreKey<T, S>) {
    return await this.withDb((db) => {
      return db.get(this.storeName, key) ?? undefined
    })
  }

  async keys?(): Promise<StoreKey<T, S>[]> {
    return await this.withDb((db) => {
      return db.getAllKeys(this.storeName)
    })
  }

  async set(key: StoreKey<T, S>, value: StoreValue<T, S>): Promise<StoreKey<T, S>> {
    return await this.withDb((db) => {
      return db.put(this.storeName, value, key)
    })
  }

  async withDb<R = StoreValue<T, S>>(
    callback: (db: IDBPDatabase<T>) =>
      Promise<R> | R,
  ) {
    return await withDb<T, R>(this.dbName, (db) => {
      return callback(db)
    })
  }
}
