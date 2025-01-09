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
  clear?(): Promisable<void>
  delete(key: TKey): Promisable<void>
  set(key: TKey, value: TValue): Promisable<TValue | void>
}
