import { exists } from '@xylabs/exists'
import type { Logger } from '@xylabs/logger'
import type { IDBPDatabase } from 'idb'

import { getExistingIndexes } from './getExistingIndexes.ts'
import { buildStandardIndexName, type IndexDescription } from './IndexDescription.ts'
import type { ObjectStore } from './ObjectStore.ts'
import { withDb } from './withDb.ts'

export async function checkStoreNeedsUpgrade(db: IDBPDatabase<ObjectStore<object>>, storeName: string, indexes: IndexDescription[], logger?: Logger) {
  logger?.log('checkStoreNeedsUpgrade', storeName, indexes)
  const existingIndexes = await getExistingIndexes(db, storeName, logger)
  if (existingIndexes === null) {
    // the store does not exist, so we need to trigger upgrade (no existing indexes)
    return true
  }
  const existingIndexNames = new Set(existingIndexes.map(({ key, unique }) => buildStandardIndexName({ key, unique })).filter(exists))
  for (const { key, unique } of indexes) {
    const indexName = buildStandardIndexName({ key, unique })
    if (!existingIndexNames.has(indexName)) {
      return true
    }
  }
  return false
}

export async function checkDbNeedsUpgrade(dbName: string, stores: Record<string, IndexDescription[]>, logger?: Logger) {
  logger?.log('checkDbNeedsUpgrade', dbName, stores)
  return await withDb<ObjectStore, number>(dbName, async (db) => {
    for (const [storeName, indexes] of Object.entries(stores)) {
      if (await checkStoreNeedsUpgrade(db, storeName, indexes, logger)) {
        return db.version + 1
      }
    }
    return db.version
  })
}
