import type { EmptyObject } from '@xylabs/object'
import type { IDBPDatabase } from 'idb'
import { openDB } from 'idb'

import type { ObjectStore } from './ObjectStore.ts'

export async function withDb<T extends EmptyObject = EmptyObject>(dbName: string, callback: (db: IDBPDatabase<ObjectStore<T>>) => Promise<T> | T): Promise<T> {
  const db = await openDB<ObjectStore<T>>(dbName)
  try {
    return await callback(db)
  } finally {
    db.close()
  }
}
