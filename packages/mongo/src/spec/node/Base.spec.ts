import type { Document, UpdateFilter } from 'mongodb'
import {
  afterEach, beforeEach, describe, expect, it, vi,
} from 'vitest'

import { BaseMongoSdk } from '../../Base.ts'
import type { BaseMongoSdkConfig } from '../../Config.ts'
import { MongoClientWrapper } from '../../Wrapper.ts'

describe('BaseMongoSdk', () => {
  const baseConfig: BaseMongoSdkConfig = {
    collection: 'test',
    dbDomain: 'test.test.com',
    dbName: 'default',
    dbPassword: 'password',
    dbUserName: 'username',
  }

  it('constructs with config', () => {
    const sdk = new BaseMongoSdk(baseConfig)
    expect(sdk).toBeDefined()
    expect(sdk.config).toBe(baseConfig)
  })

  describe('uri', () => {
    it('uses dbConnectionString when provided', () => {
      const config: BaseMongoSdkConfig = {
        ...baseConfig,
        dbConnectionString: 'mongodb://localhost:27017/test',
      }
      const sdk = new BaseMongoSdk(config)
      expect(sdk.uri).toBe('mongodb://localhost:27017/test')
    })

    it('constructs URI from parts when no dbConnectionString', () => {
      const sdk = new BaseMongoSdk(baseConfig)
      expect(sdk.uri).toContain('mongodb+srv://')
      expect(sdk.uri).toContain('username')
      expect(sdk.uri).toContain('password')
      expect(sdk.uri).toContain('test.test.com')
      expect(sdk.uri).toContain('default')
    })
  })

  describe('CRUD operations', () => {
    const mockCollection = {
      deleteMany: vi.fn().mockResolvedValue({ deletedCount: 1 }),
      deleteOne: vi.fn().mockResolvedValue({ deletedCount: 1 }),
      find: vi.fn().mockReturnValue({ toArray: vi.fn() }),
      findOne: vi.fn().mockResolvedValue({ _id: '1', name: 'test' }),
      insertMany: vi.fn().mockResolvedValue({ insertedCount: 2 }),
      insertOne: vi.fn().mockResolvedValue({ insertedId: '1' }),
      replaceOne: vi.fn().mockResolvedValue({ modifiedCount: 1 }),
      updateOne: vi.fn().mockResolvedValue({ modifiedCount: 1 }),
    }

    const mockDb = { collection: vi.fn().mockReturnValue(mockCollection) }

    const mockClient = { db: vi.fn().mockReturnValue(mockDb) }

    const mockWrapper = {
      connect: vi.fn().mockResolvedValue(mockClient),
      // eslint-disable-next-line unicorn/no-useless-undefined
      disconnect: vi.fn().mockResolvedValue(undefined),
    }

    beforeEach(() => {
      vi.spyOn(MongoClientWrapper, 'get').mockReturnValue(mockWrapper as unknown as MongoClientWrapper)
      vi.clearAllMocks()
      vi.spyOn(MongoClientWrapper, 'get').mockReturnValue(mockWrapper as unknown as MongoClientWrapper)
    })

    afterEach(() => {
      vi.restoreAllMocks()
    })

    const sdk = new BaseMongoSdk(baseConfig)

    it('findOne delegates to collection', async () => {
      const result = await sdk.findOne({ name: 'test' })
      expect(mockCollection.findOne).toHaveBeenCalledWith({ name: 'test' })
      expect(result).toEqual({ _id: '1', name: 'test' })
    })

    it('find delegates to collection', async () => {
      await sdk.find({ name: 'test' })
      expect(mockCollection.find).toHaveBeenCalledWith({ name: 'test' })
    })

    it('insertOne delegates to collection', async () => {
      const item = { name: 'new' } as Document
      await sdk.insertOne(item)
      expect(mockCollection.insertOne).toHaveBeenCalledWith(item, undefined)
    })

    it('insertMany delegates to collection', async () => {
      const items = [{ name: 'a' }, { name: 'b' }] as Document[]
      await sdk.insertMany(items)
      expect(mockCollection.insertMany).toHaveBeenCalledWith(items, undefined)
    })

    it('deleteOne delegates to collection', async () => {
      await sdk.deleteOne({ name: 'test' })
      expect(mockCollection.deleteOne).toHaveBeenCalledWith({ name: 'test' })
    })

    it('deleteMany delegates to collection', async () => {
      await sdk.deleteMany({ name: 'test' })
      expect(mockCollection.deleteMany).toHaveBeenCalledWith({ name: 'test' })
    })

    it('updateOne delegates to collection with upsert false', async () => {
      await sdk.updateOne({ name: 'test' }, { $set: { value: 1 } } as unknown as UpdateFilter<Document>)
      expect(mockCollection.updateOne).toHaveBeenCalledWith(
        { name: 'test' },
        { $set: { value: 1 } },
        { upsert: false },
      )
    })

    it('upsertOne delegates to collection with upsert true', async () => {
      await sdk.upsertOne({ name: 'test' }, { $set: { value: 1 } } as unknown as UpdateFilter<Document>)
      expect(mockCollection.updateOne).toHaveBeenCalledWith(
        { name: 'test' },
        { $set: { value: 1 } },
        { upsert: true },
      )
    })

    it('replaceOne delegates to collection', async () => {
      const item = { name: 'replaced' } as Document
      await sdk.replaceOne({ name: 'test' }, item)
      expect(mockCollection.replaceOne).toHaveBeenCalledWith({ name: 'test' }, item, undefined)
    })

    it('useMongo connects and disconnects', async () => {
      const result = await sdk.useMongo((client) => {
        expect(client).toBe(mockClient)
        return 'result'
      })
      expect(result).toBe('result')
      expect(mockWrapper.connect).toHaveBeenCalled()
      expect(mockWrapper.disconnect).toHaveBeenCalled()
    })

    it('useMongo disconnects even on error', async () => {
      await expect(sdk.useMongo(() => {
        throw new Error('test error')
      })).rejects.toThrow('test error')
      expect(mockWrapper.disconnect).toHaveBeenCalled()
    })

    it('useMongo throws when connection fails', async () => {
      mockWrapper.connect.mockResolvedValueOnce(null)
      await expect(sdk.useMongo(() => 'result')).rejects.toThrow('Connection failed')
    })
  })
})
