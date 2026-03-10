import type { Promisable } from '@xylabs/promise'

/**
 * A readonly storage device.
 */
export interface ReadonlyKeyValueStore<TValue, TKey = string> {
  /**
   * Returns a promise that resolves to the value for the given key.
   * @param key The key to get the value for.
   */
  get(key: TKey): Promisable<TValue | undefined>
  /**
   * The keys an array of keys.
   */
  keys?(): Promisable<TKey[]>
}

/**
 * A read/write storage device.
 */
export interface KeyValueStore<TValue, TKey = string> extends ReadonlyKeyValueStore<TValue, TKey> {
  /** Removes all entries from the store. */
  clear?(): Promisable<void>
  /**
   * Deletes the entry with the given key.
   * @param key The key of the entry to delete
   */
  delete(key: TKey): Promisable<void>
  /**
   * Sets a value for the given key, creating or updating the entry.
   * @param key The key to set
   * @param value The value to store
   */
  set(key: TKey, value: TValue): Promisable<void>
}
