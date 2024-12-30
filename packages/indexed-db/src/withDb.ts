import type { EmptyObject } from '@xylabs/object'
import type { DBSchema, IDBPDatabase } from 'idb'
import { openDB } from 'idb'

export async function withDb<T extends DBSchema = DBSchema, R = EmptyObject>(
  dbName: string,
  callback: (db: IDBPDatabase<T>) => Promise<R> | R,
): Promise<R> {
  const db = await openDB<T>(dbName)
  try {
    return await callback(db)
  } finally {
    db.close()
  }
}
