import type { EmptyObject } from '@xylabs/object'
import type { IDBPDatabase } from 'idb'
import { openDB } from 'idb'

import type { ObjectStore } from './ObjectStore.ts'

export async function withDb<T extends EmptyObject = EmptyObject, R = T>(
  dbName: string,
  callback: (db: IDBPDatabase<ObjectStore<T>>) => Promise<R> | R,
): Promise<R> {
  const db = await openDB<ObjectStore<T>>(dbName)
  try {
    return await callback(db)
  } finally {
    db.close()
  }
}
