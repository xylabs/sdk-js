import type { Logger } from '@xylabs/logger'
import type { EmptyObject } from '@xylabs/object'
import { Mutex } from 'async-mutex'
import type { DBSchema, IDBPDatabase } from 'idb'

import { checkDbNeedsUpgrade } from './checkDbNeedsUpgrade.ts'
import { type IndexDescription } from './IndexDescription.ts'
import { withDbByVersion } from './withDbByVersion.ts'

const dbMutexes: Record<string, Mutex> = {}

/**
 * Opens an IndexedDB database, automatically upgrading if needed, and passes it to the callback.
 * Uses a mutex to serialize access to the same database by default.
 * @param dbName The name of the database to open
 * @param callback Function to execute with the opened database
 * @param expectedIndexes Optional map of store names to their expected indexes (triggers upgrade check)
 * @param logger Optional logger for diagnostics
 * @param lock Whether to use a mutex to serialize access (defaults to true)
 * @returns The result of the callback
 */
export async function withDb<DBTypes extends DBSchema | unknown = unknown, R = EmptyObject>(
  dbName: string,
  callback: (db: IDBPDatabase<DBTypes>) => Promise<R> | R,
  expectedIndexes?: Record<string, IndexDescription[]>,
  logger?: Logger,
  lock = true,
): Promise<R> {
  dbMutexes[dbName] = dbMutexes[dbName] ?? new Mutex()
  const handler = async () => {
    const versionToOpen = expectedIndexes === undefined ? undefined : await checkDbNeedsUpgrade(dbName, expectedIndexes, logger)
    return await withDbByVersion<DBTypes, R>(dbName, async (db) => {
      return await callback(db)
    }, versionToOpen, expectedIndexes, logger, lock)
  }
  return lock ? await dbMutexes[dbName].runExclusive(handler) : await handler()
}
