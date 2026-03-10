import { assertEx } from '@xylabs/assert'
import type {
  BulkWriteOptions,
  Collection,
  DeleteResult,
  Document,
  Filter,
  FindCursor,
  InsertOneOptions,
  MongoClient,
  OptionalUnlessRequiredId,
  ReplaceOptions,
  UpdateFilter,
  WithId,
} from 'mongodb'

import type { BaseMongoSdkConfig } from './Config.js'
import { MongoClientWrapper } from './Wrapper.js'

/** Provides a typed wrapper around common MongoDB collection operations. */
export class BaseMongoSdk<T extends Document> {
  /** The MongoDB SDK configuration for this instance. */
  config: BaseMongoSdkConfig

  constructor(config: BaseMongoSdkConfig) {
    this.config = config
  }

  /** Returns the MongoDB connection URI, either from the config or constructed from individual credential fields. */
  get uri() {
    return (
      this.config.dbConnectionString
      ?? `mongodb+srv://${this.config.dbUserName}:${this.config.dbPassword}@${this.config.dbDomain}.mongodb.net/${this.config.dbName}?retryWrites=true&w=majority`
    )
  }

  /**
   * Deletes all documents matching the filter.
   * @param filter - The query filter to match documents for deletion
   */
  async deleteMany(filter: Filter<T>) {
    return await this.useCollection<DeleteResult>(async (collection: Collection<T>) => {
      return await collection.deleteMany(filter)
    })
  }

  /**
   * Deletes the first document matching the filter.
   * @param filter - The query filter to match a document for deletion
   */
  async deleteOne(filter: Filter<T>) {
    return await this.useCollection<DeleteResult>(async (collection: Collection<T>) => {
      return await collection.deleteOne(filter)
    })
  }

  /**
   * Finds all documents matching the filter and returns a cursor.
   * @param filter - The query filter
   */
  async find(filter: Filter<T>) {
    return await this.useCollection<FindCursor<WithId<T>>>((collection: Collection<T>) => {
      return collection.find(filter)
    })
  }

  /**
   * Finds a single document matching the filter.
   * @param filter - The query filter
   * @returns The matched document, or `null` if not found
   */
  async findOne(filter: Filter<T>) {
    return await this.useCollection<WithId<T> | null>(async (collection: Collection<T>) => {
      return await collection.findOne(filter)
    })
  }

  /**
   * Inserts multiple documents into the collection.
   * @param items - The documents to insert
   * @param options - Optional bulk write options
   */
  async insertMany(items: OptionalUnlessRequiredId<T>[], options?: BulkWriteOptions) {
    return await this.useCollection(async (collection: Collection<T>) => {
      return await collection.insertMany(items, options)
    })
  }

  /**
   * Inserts a single document into the collection.
   * @param item - The document to insert
   * @param options - Optional insert options
   */
  async insertOne(item: OptionalUnlessRequiredId<T>, options?: InsertOneOptions) {
    return await this.useCollection(async (collection: Collection<T>) => {
      return await collection.insertOne(item, options)
    })
  }

  /**
   * Replaces a single document matching the filter.
   * @param filter - The query filter to match the document
   * @param item - The replacement document
   * @param options - Optional replace options
   */
  async replaceOne(filter: Filter<T>, item: OptionalUnlessRequiredId<T>, options?: ReplaceOptions) {
    return await this.useCollection(async (collection: Collection<T>) => {
      return await collection.replaceOne(filter, item, options)
    })
  }

  /**
   * Updates a single document matching the filter without upserting.
   * @param filter - The query filter to match the document
   * @param fields - The update operations to apply
   */
  async updateOne(filter: Filter<T>, fields: UpdateFilter<T>) {
    return await this.useCollection(async (collection: Collection<T>) => {
      return await collection.updateOne(filter, fields, { upsert: false })
    })
  }

  /**
   * Updates a single document matching the filter, inserting it if it does not exist.
   * @param filter - The query filter to match the document
   * @param fields - The update operations to apply
   */
  async upsertOne(filter: Filter<T>, fields: UpdateFilter<T>) {
    return await this.useCollection(async (collection: Collection<T>) => {
      return await collection.updateOne(filter, fields, { upsert: true })
    })
  }

  /**
   * Executes a callback with access to the configured MongoDB collection.
   * @param func - A callback receiving the typed collection
   * @returns The result of the callback
   */
  async useCollection<R>(func: (collection: Collection<T>) => Promise<R> | R) {
    return await this.useMongo<R>(async (client: MongoClient) => {
      return await func(client.db(this.config.dbName).collection<T>(this.config.collection))
    })
  }

  /**
   * Executes a callback with a connected MongoClient, handling connection and disconnection.
   * @param func - A callback receiving the connected MongoClient
   * @returns The result of the callback
   */
  async useMongo<R>(func: (client: MongoClient) => Promise<R> | R) {
    const wrapper = MongoClientWrapper.get(this.uri, this.config.maxPoolSize, this.config.closeDelay)
    const connection = await wrapper.connect()
    assertEx(connection, () => 'Connection failed')
    try {
      return await func(connection)
    } finally {
      await wrapper.disconnect()
    }
  }
}
