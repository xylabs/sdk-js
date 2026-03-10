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
  /** The name of the IndexedDB database. */
  readonly dbName: string
  /** The name of the object store within the database. */
  readonly storeName: S

  constructor(dbName: string, storeName: S) {
    this.dbName = dbName
    this.storeName = storeName
  }

  /** Removes all entries from the store. */
  async clear?(): Promise<void> {
    return await this.withDb((db) => {
      return db.clear(this.storeName)
    })
  }

  /**
   * Deletes the entry with the given key.
   * @param key The key of the entry to delete
   */
  async delete(key: StoreKey<T, S>): Promise<void> {
    return await this.withDb((db) => {
      return db.delete(this.storeName, key)
    })
  }

  /**
   * Retrieves the value associated with the given key.
   * @param key The key to look up
   * @returns The value, or undefined if not found
   */
  async get(key: StoreKey<T, S>) {
    return await this.withDb((db) => {
      /* v8 ignore start */
      return db.get(this.storeName, key) ?? undefined
      /* v8 ignore stop */
    })
  }

  /** Returns all keys in the store. */
  async keys?(): Promise<StoreKey<T, S>[]> {
    return await this.withDb((db) => {
      return db.getAllKeys(this.storeName)
    })
  }

  /**
   * Sets a value for the given key, creating or updating the entry.
   * @param key The key to set
   * @param value The value to store
   */
  async set(key: StoreKey<T, S>, value: StoreValue<T, S>): Promise<void> {
    return await this.withDb(async (db) => {
      await db.put(this.storeName, value, key)
    })
  }

  /**
   * Opens the underlying IndexedDB database and passes it to the callback.
   * @param callback Function to execute with the database
   * @returns The result of the callback
   */
  async withDb<R = StoreValue<T, S>>(
    callback: (db: IDBPDatabase<T>) =>
      Promise<R> | R,
  ) {
    return await withDb<T, R>(this.dbName, (db) => {
      return callback(db)
    })
  }
}
