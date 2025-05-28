import type { MongoClientOptions } from 'mongodb'
import { MongoClient } from 'mongodb'

export class MongoClientWrapper {
  static readonly clients = new Map<string, MongoClientWrapper>()

  private client: MongoClient

  constructor(uri: string, maxPoolSize?: number, closeDelay?: number) {
    const options: MongoClientOptions = { maxPoolSize, maxIdleTimeMS: closeDelay }
    this.client = new MongoClient(uri, options)
  }

  static get(uri: string, poolSize?: number, closeDelay?: number) {
    let client = this.clients.get(uri)
    if (!client) {
      client = new MongoClientWrapper(uri, poolSize, closeDelay)
      this.clients.set(uri, client)
    }
    return client
  }

  async connect() {
    return await Promise.resolve(this.client)
  }

  async disconnect() {
    return await Promise.resolve(0)
  }

  async initiateClose() {
    await Promise.resolve()
  }
}
