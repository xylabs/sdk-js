import type { MongoClientOptions } from 'mongodb'
import { MongoClient } from 'mongodb'

/** Manages a shared pool of MongoClient instances, reusing connections by URI. */
export class MongoClientWrapper {
  /** Global cache of wrapper instances keyed by connection URI. */
  static readonly clients = new Map<string, MongoClientWrapper>()

  private client: MongoClient

  constructor(uri: string, maxPoolSize?: number, closeDelay?: number) {
    const options: MongoClientOptions = { maxPoolSize, maxIdleTimeMS: closeDelay }
    this.client = new MongoClient(uri, options)
  }

  /**
   * Gets or creates a cached MongoClientWrapper for the given URI.
   * @param uri - The MongoDB connection URI
   * @param poolSize - Maximum connection pool size
   * @param closeDelay - Delay in milliseconds before closing idle connections
   * @returns A cached or newly created wrapper instance
   */
  static get(uri: string, poolSize?: number, closeDelay?: number) {
    let client = this.clients.get(uri)
    if (!client) {
      client = new MongoClientWrapper(uri, poolSize, closeDelay)
      this.clients.set(uri, client)
    }
    return client
  }

  /** Connects to MongoDB and returns the underlying MongoClient. */
  async connect() {
    return await Promise.resolve(this.client)
  }

  /** Disconnects from MongoDB. */
  async disconnect() {
    return await Promise.resolve(0)
  }

  /** Initiates a graceful close of the connection. */
  async initiateClose() {
    await Promise.resolve()
  }
}
