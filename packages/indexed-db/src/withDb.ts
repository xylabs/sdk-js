import type { Logger } from '@xylabs/logger'
import type { EmptyObject } from '@xylabs/object'
import type {
  DBSchema, IDBPDatabase, StoreNames,
} from 'idb'
import { openDB } from 'idb'

import { checkDbNeedsUpgrade } from './checkDbNeedsUpgrade.ts'
import { createStoreDuringUpgrade } from './createStoreDuringUpgrade.ts'
import { buildStandardIndexName, type IndexDescription } from './IndexDescription.ts'

export async function withDb<DBTypes extends DBSchema | unknown = unknown, R = EmptyObject>(
  dbName: string,
  callback: (db: IDBPDatabase<DBTypes>) => Promise<R> | R,
  expectedIndexes?: Record<string, IndexDescription[]>,
  logger?: Logger,
): Promise<R> {
  const versionToOpen = expectedIndexes === undefined ? undefined : await checkDbNeedsUpgrade(dbName, expectedIndexes, logger)
  const db = await openDB<DBTypes>(dbName, versionToOpen, {
    blocked(currentVersion, blockedVersion, event) {
      logger?.warn(`IndexedDb: Blocked from upgrading from ${currentVersion} to ${blockedVersion}`, event)
    },
    blocking(currentVersion, blockedVersion, event) {
      logger?.warn(`IndexedDb: Blocking upgrade from ${currentVersion} to ${blockedVersion}`, event)
    },
    terminated() {
      logger?.log('IndexedDb: Terminated')
    },
    upgrade(db, oldVersion, newVersion, transaction) {
      /* if (oldVersion !== newVersion) {
        logger?.log(`IndexedDb: Upgrading from ${oldVersion} to ${newVersion}`)
        const objectStores = transaction.objectStoreNames
        for (const name of objectStores) {
          try {
            db.deleteObjectStore(name)
          } catch {
            console.log(`IndexedDb: Failed to delete existing object store ${name}`)
          }
        }
      } */
      if (expectedIndexes) {
        for (const [storeName, indexes] of Object.entries(expectedIndexes)) {
          if (db.objectStoreNames.contains(storeName as StoreNames<DBTypes>)) {
            continue
          }
          const indexesToCreate = indexes.map(idx => ({
            ...idx,
            name: buildStandardIndexName(idx),
            // eslint-disable-next-line unicorn/no-array-reduce
          })).reduce((acc, idx) => acc.set(idx.name, idx), new Map<string, IndexDescription>()).values()
          createStoreDuringUpgrade(db, storeName as StoreNames<DBTypes>, [...indexesToCreate], logger)
        }
      }
    },
  })
  try {
    return await callback(db)
  } finally {
    db.close()
  }
}
