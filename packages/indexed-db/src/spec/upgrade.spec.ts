// @vitest-environment jsdom

// eslint-disable-next-line import-x/no-internal-modules
import 'fake-indexeddb/auto'

import {
  describe, expect, test,
} from 'vitest'

import { withDb } from '../withDb.ts'

describe('indexed-db upgrade', () => {
  test('checking happy path', async () => {
    await withDb('test', (db) => {
      return db
    })
    const currentVersionBefore = await withDb('test', db => db.version, { store1: [{ key: { _hash: 1 }, unique: true }] }, console)
    console.log('currentVersionBefore', currentVersionBefore)
    const currentVersionAfter = await withDb('test', db => db.version, {
      store1: [
        { key: { _hash: 1 }, unique: true },
        { key: { _dataHash: 1 }, unique: true }],
    }, console)
    console.log('currentVersionAfter', currentVersionAfter)
    expect(currentVersionAfter).toBe(currentVersionBefore + 1)
  })
})
