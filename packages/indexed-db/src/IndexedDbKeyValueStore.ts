import type { KeyValueStore } from '@xylabs/storage'
import type { DBSchema, IDBPDatabase } from 'idb'

import type { ObjectStore } from './ObjectStore.ts'
import { withDb } from './withDb.ts'

/**
 * The schema for the IndexedDB key/value store.
 */
export interface IndexedDbKeyValueStoreSchemaV1<T> extends DBSchema {
  bios: {
    key: string
    value: T
  }
}

/**
 * An IndexedDB key/value store.
 */
export class IndexedDbKeyValueStore<T> implements KeyValueStore<T, string> {
  static readonly CurrentSchemaVersion = 1

  constructor(readonly dbName: string) {}

  /**
   * The name of the store.
   */
  get storeName() {
    return 'bios' as const
  }

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

  async set(key: string, value: T): Promise<void> {
    return await this.withDb((db) => {
      return db.put(this.storeName, value, key)
    })
  }

  async withDb<R = IndexedDbKeyValueStoreSchemaV1<T>>(
    callback: (db: IDBPDatabase<ObjectStore<IndexedDbKeyValueStoreSchemaV1<T>>>) =>
      Promise<R> | R,
  ) {
    return await withDb<IndexedDbKeyValueStoreSchemaV1<T>, R>(this.dbName, (db) => {
      return callback(db)
    })
  }
}
