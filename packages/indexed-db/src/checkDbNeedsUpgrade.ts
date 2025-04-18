import type { Logger } from '@xylabs/logger'

import { checkStoreNeedsUpgrade } from './checkStoreNeedsUpgrade.ts'
import { type IndexDescription } from './IndexDescription.ts'
import type { ObjectStore } from './ObjectStore.ts'
import { withDbByVersion } from './withDbByVersion.ts'

export async function checkDbNeedsUpgrade(dbName: string, stores: Record<string, IndexDescription[]>, logger?: Logger) {
  logger?.log('checkDbNeedsUpgrade', dbName, stores)
  return await withDbByVersion<ObjectStore, number>(dbName, async (db) => {
    for (const [storeName, indexes] of Object.entries(stores)) {
      if (await checkStoreNeedsUpgrade(db, storeName, indexes, logger)) {
        return db.version + 1
      }
    }
    return db.version
  }, undefined, stores, logger)
}
