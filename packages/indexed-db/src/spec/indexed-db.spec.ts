// @vitest-environment jsdom

// eslint-disable-next-line import-x/no-internal-modules
import 'fake-indexeddb/auto'

import {
  describe, expect, it,
} from 'vitest'

import { buildStandardIndexName, IndexSeparator } from '../IndexDescription.ts'
import { IndexedDbKeyValueStore } from '../IndexedDbKeyValueStore.ts'
import { createStoreDuringUpgrade } from '../createStoreDuringUpgrade.ts'
import { checkStoreNeedsUpgrade } from '../checkStoreNeedsUpgrade.ts'
import { getExistingIndexes } from '../getExistingIndexes.ts'
import { withDb } from '../withDb.ts'
import { withDbByVersion } from '../withDbByVersion.ts'
import { withStore } from '../withStore.ts'
import { withReadOnlyStore } from '../withReadOnlyStore.ts'
import { withReadWriteStore } from '../withReadWriteStore.ts'

describe('IndexDescription', () => {
  describe('buildStandardIndexName', () => {
    it('builds a unique index name with UX prefix', () => {
      const name = buildStandardIndexName({ key: { _hash: 1 }, unique: true })
      expect(name).toBe('UX__hash')
    })

    it('builds a non-unique index name with IX prefix', () => {
      const name = buildStandardIndexName({ key: { _hash: 1 }, unique: false })
      expect(name).toBe('IX__hash')
    })

    it('builds a non-unique index name when unique is undefined', () => {
      const name = buildStandardIndexName({ key: { _hash: 1 } })
      expect(name).toBe('IX__hash')
    })

    it('joins multiple keys with the separator', () => {
      const name = buildStandardIndexName({ key: { _hash: 1, _timestamp: -1 }, unique: true })
      expect(name).toBe(`UX__hash${IndexSeparator}_timestamp`)
    })
  })

  describe('IndexSeparator', () => {
    it('is a dash', () => {
      expect(IndexSeparator).toBe('-')
    })
  })
})

describe('withDb', () => {
  it('opens a database and runs the callback', async () => {
    const result = await withDb('test-withDb', (db) => {
      expect(db).toBeDefined()
      return 'success'
    })
    expect(result).toBe('success')
  })

  it('supports expectedIndexes to create stores', async () => {
    const dbName = 'test-withDb-indexes'
    const indexes = { myStore: [{ key: { name: 1 }, unique: true }] }
    const version = await withDb(dbName, db => db.version, indexes)
    expect(typeof version).toBe('number')
    expect(version).toBeGreaterThanOrEqual(1)
  })

  it('works with lock = false', async () => {
    const result = await withDb('test-withDb-nolock', (db) => {
      return db.version
    }, undefined, undefined, false)
    expect(typeof result).toBe('number')
  })
})

describe('withDbByVersion', () => {
  it('opens a database at default version', async () => {
    const result = await withDbByVersion('test-withDbByVersion', (db) => {
      expect(db).toBeDefined()
      return db.version
    })
    expect(typeof result).toBe('number')
  })

  it('opens a database with specific version and expected indexes', async () => {
    const dbName = 'test-withDbByVersion-v2'
    const indexes = { store1: [{ key: { field: 1 }, unique: false }] }
    const result = await withDbByVersion(dbName, (db) => {
      return db.objectStoreNames.contains('store1')
    }, 1, indexes)
    expect(result).toBe(true)
  })

  it('works with lock = false', async () => {
    const result = await withDbByVersion('test-withDbByVersion-nolock', (db) => {
      return db.version
    }, undefined, undefined, undefined, false)
    expect(typeof result).toBe('number')
  })
})

describe('withStore / withReadOnlyStore / withReadWriteStore', () => {
  it('withReadWriteStore allows writing to a store', async () => {
    const dbName = 'test-store-rw'
    const storeName = 'items'
    const indexes = { [storeName]: [{ key: { id: 1 }, unique: true }] }

    await withDb(dbName, async (db) => {
      await withReadWriteStore(db as never, storeName as never, async (store) => {
        if (store) {
          await store.add({ id: 'abc', value: 42 } as never)
        }
      })
    }, indexes)
  })

  it('withReadOnlyStore reads from a store', async () => {
    const dbName = 'test-store-ro'
    const storeName = 'items'
    const indexes = { [storeName]: [{ key: { id: 1 }, unique: true }] }

    // First write
    await withDb(dbName, async (db) => {
      await withReadWriteStore(db as never, storeName as never, async (store) => {
        if (store) {
          await store.add({ id: 'key1', value: 100 } as never)
        }
      })
    }, indexes)

    // Then read
    await withDb(dbName, async (db) => {
      await withReadOnlyStore(db as never, storeName as never, async (store) => {
        expect(store).not.toBeNull()
      })
    }, indexes)
  })

  it('withStore handles non-existent store gracefully', async () => {
    const dbName = 'test-store-missing'
    await withDb(dbName, async (db) => {
      const result = await withStore(db as never, 'nonexistent' as never, (store) => {
        return store
      }, 'readonly')
      expect(result).toBeNull()
    })
  })
})

describe('getExistingIndexes', () => {
  it('returns null for a non-existent store', async () => {
    const dbName = 'test-getExistingIndexes-missing'
    await withDb(dbName, async (db) => {
      const indexes = await getExistingIndexes(db as never, 'nonexistent' as never)
      expect(indexes).toBeNull()
    })
  })

  it('returns indexes for an existing store', async () => {
    const dbName = 'test-getExistingIndexes-exists'
    const storeName = 'myStore'
    const expectedIndexes = { [storeName]: [{ key: { field1: 1 as const }, unique: true }] }

    await withDb(dbName, async (db) => {
      const indexes = await getExistingIndexes(db as never, storeName as never)
      expect(indexes).not.toBeNull()
      expect(Array.isArray(indexes)).toBe(true)
      if (indexes) {
        expect(indexes.length).toBeGreaterThanOrEqual(1)
        const idx = indexes.find(i => Object.keys(i.key).includes('field1'))
        expect(idx).toBeDefined()
        expect(idx?.unique).toBe(true)
      }
    }, expectedIndexes)
  })

  it('accepts a db name string instead of a db object', async () => {
    const dbName = 'test-getExistingIndexes-string'
    const storeName = 'myStore'
    const expectedIndexes = { [storeName]: [{ key: { field1: 1 as const }, unique: false }] }

    // Create the store first
    await withDb(dbName, async () => {}, expectedIndexes)

    // Then query by name
    const indexes = await getExistingIndexes(dbName as never, storeName as never)
    expect(indexes).not.toBeNull()
  })
})

describe('checkStoreNeedsUpgrade', () => {
  it('returns true when store does not exist', async () => {
    const dbName = 'test-checkStore-nostore'
    await withDb(dbName, async (db) => {
      const result = await checkStoreNeedsUpgrade(db as never, 'nonexistent', [{ key: { id: 1 }, unique: true }])
      expect(result).toBe(true)
    })
  })

  it('returns false when all indexes exist', async () => {
    const dbName = 'test-checkStore-allexist'
    const storeName = 'store1'
    const indexes = [{ key: { id: 1 as const }, unique: true }]
    const expectedIndexes = { [storeName]: indexes }

    await withDb(dbName, async (db) => {
      const result = await checkStoreNeedsUpgrade(db as never, storeName, indexes)
      expect(result).toBe(false)
    }, expectedIndexes)
  })

  it('returns true when a new index is needed', async () => {
    const dbName = 'test-checkStore-newindex'
    const storeName = 'store1'
    const existingIndexes = [{ key: { id: 1 as const }, unique: true }]
    const expectedIndexes = { [storeName]: existingIndexes }

    await withDb(dbName, async (db) => {
      const newIndexes = [
        { key: { id: 1 as const }, unique: true },
        { key: { name: 1 as const }, unique: false },
      ]
      const result = await checkStoreNeedsUpgrade(db as never, storeName, newIndexes)
      expect(result).toBe(true)
    }, expectedIndexes)
  })
})

describe('createStoreDuringUpgrade', () => {
  it('is called during withDbByVersion upgrade and creates stores with indexes', async () => {
    const dbName = 'test-createStore-upgrade'
    const storeName = 'newStore'
    const indexes = [
      { key: { hash: 1 as const }, unique: true },
      { key: { timestamp: 1 as const }, unique: false },
    ]

    const result = await withDbByVersion(dbName, (db) => {
      return db.objectStoreNames.contains(storeName)
    }, 1, { [storeName]: indexes })

    expect(result).toBe(true)
  })

  it('creates compound indexes with multiple keys', async () => {
    const dbName = 'test-createStore-compound'
    const storeName = 'compoundStore'
    const indexes = [
      { key: { field1: 1 as const, field2: 1 as const }, unique: true },
    ]

    const result = await withDbByVersion(dbName, (db) => {
      return db.objectStoreNames.contains(storeName)
    }, 1, { [storeName]: indexes })

    expect(result).toBe(true)
  })

  it('creates indexes with multiEntry option', async () => {
    const dbName = 'test-createStore-multi'
    const storeName = 'multiStore'
    const indexes = [
      { key: { tags: 1 as const }, unique: false, multiEntry: true },
    ]

    const result = await withDbByVersion(dbName, (db) => {
      return db.objectStoreNames.contains(storeName)
    }, 1, { [storeName]: indexes })

    expect(result).toBe(true)
  })
})

describe('checkDbNeedsUpgrade (via withDb)', () => {
  it('increments version when new stores are needed', async () => {
    const dbName = 'test-checkDb-increment'

    // Open at default version
    const v1 = await withDb(dbName, db => db.version)

    // Open with expected stores
    const v2 = await withDb(dbName, db => db.version, {
      newStore: [{ key: { id: 1 }, unique: true }],
    })

    expect(v2).toBe(v1 + 1)
  })

  it('does not increment version when stores already exist', async () => {
    const dbName = 'test-checkDb-no-increment'
    const indexes = { existingStore: [{ key: { id: 1 }, unique: true }] }

    const v1 = await withDb(dbName, db => db.version, indexes)
    const v2 = await withDb(dbName, db => db.version, indexes)

    expect(v2).toBe(v1)
  })
})

describe('IndexedDbKeyValueStore', () => {
  it('constructs with dbName and storeName', () => {
    const store = new IndexedDbKeyValueStore('test-kvstore', 'myStore' as never)
    expect(store.dbName).toBe('test-kvstore')
    expect(store.storeName).toBe('myStore')
  })

  it('set and get a value', async () => {
    const dbName = 'test-kvstore-setget'
    const storeName = 'items'
    const indexes = { [storeName]: [{ key: { id: 1 }, unique: true }] }

    // Create the store first
    await withDb(dbName, async () => {}, indexes)

    const store = new IndexedDbKeyValueStore(dbName, storeName as never)
    await store.set('key1' as never, { id: 'key1', value: 42 } as never)
    const result = await store.get('key1' as never)
    expect(result).toBeDefined()
  })

  it('delete removes a value', async () => {
    const dbName = 'test-kvstore-delete'
    const storeName = 'items'
    const indexes = { [storeName]: [{ key: { id: 1 }, unique: true }] }

    await withDb(dbName, async () => {}, indexes)

    const store = new IndexedDbKeyValueStore(dbName, storeName as never)
    await store.set('key1' as never, { id: 'key1', value: 1 } as never)
    await store.delete('key1' as never)
    const result = await store.get('key1' as never)
    expect(result).toBeUndefined()
  })

  it('clear removes all values', async () => {
    const dbName = 'test-kvstore-clear'
    const storeName = 'items'
    const indexes = { [storeName]: [{ key: { id: 1 }, unique: true }] }

    await withDb(dbName, async () => {}, indexes)

    const store = new IndexedDbKeyValueStore(dbName, storeName as never)
    await store.set('key1' as never, { id: 'key1', value: 1 } as never)
    await store.clear?.()
    const result = await store.get('key1' as never)
    expect(result).toBeUndefined()
  })

  it('keys returns all keys', async () => {
    const dbName = 'test-kvstore-keys'
    const storeName = 'items'
    const indexes = { [storeName]: [{ key: { id: 1 }, unique: true }] }

    await withDb(dbName, async () => {}, indexes)

    const store = new IndexedDbKeyValueStore(dbName, storeName as never)
    await store.set('key1' as never, { id: 'key1', value: 1 } as never)
    await store.set('key2' as never, { id: 'key2', value: 2 } as never)
    const keys = await store.keys?.()
    expect(keys).toBeDefined()
    expect(keys?.length).toBe(2)
  })
})
