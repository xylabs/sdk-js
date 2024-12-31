import type { EmptyObject } from '@xylabs/object'
import type { DBSchema, IDBPDatabase } from 'idb'
import { openDB } from 'idb'

export async function withDb<DBTypes extends DBSchema | unknown = unknown, R = EmptyObject>(
  dbName: string,
  callback: (db: IDBPDatabase<DBTypes>) => Promise<R> | R,
): Promise<R> {
  const db = await openDB<DBTypes>(dbName)
  try {
    return await callback(db)
  } finally {
    db.close()
  }
}
