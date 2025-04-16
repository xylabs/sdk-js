import { assertEx } from '@xylabs/assert'
import { delay } from '@xylabs/delay'
import { forget } from '@xylabs/forget'
import { Mutex } from 'async-mutex'
import type { MongoClientOptions } from 'mongodb'
import { MongoClient } from 'mongodb'

export class MongoClientWrapper {
  static readonly clients = new Map<string, MongoClientWrapper>()

  private checkFrequency = 100
  private client: MongoClient
  private closeDelay
  private connected = false
  private connectionMutex = new Mutex()
  private connections = 0
  private delayCount = 0
  private delayedCloseMutex = new Mutex()

  private uri: string

  constructor(uri: string, maxPoolSize?: number, closeDelay?: number) {
    this.uri = uri
    this.client = new MongoClient(uri, { maxPoolSize } as MongoClientOptions)
    this.closeDelay = closeDelay ?? 10 * 1000 /* 10 seconds default */
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
    return await this.connectionMutex.runExclusive<MongoClient>(async () => {
      if (this.connections === 0 && !this.connected) {
        await this.client.connect()
        this.connected = true
      }
      this.connections += 1
      return this.client
    })
  }

  async disconnect() {
    return await this.connectionMutex.runExclusive(() => {
      assertEx(this.connections > 0, () => 'Unexpected disconnect')
      this.connections -= 1
      if (this.connections === 0) {
        forget(this.initiateClose())
      }
      return this.connections
    })
  }

  async initiateClose() {
    const alreadyStarted = await this.delayedCloseMutex.runExclusive(() => {
      const alreadyStarted = !!this.delayCount
      this.delayCount = Math.floor(this.closeDelay / this.checkFrequency)
      return alreadyStarted
    })
    if (!alreadyStarted) {
      while (this.delayCount > 0) {
        await this.delayedCloseMutex.runExclusive(async () => {
          if (this.connections > 0 || !this.connected) {
            // cancel close
            this.delayCount = 0
          } else if (this.delayCount === 1) {
            // out of delay, close it
            await this.close()
            this.delayCount = 0
          } else {
            this.delayCount -= 1
          }
          await delay(this.checkFrequency)
        })
      }
    }
  }

  private async close() {
    return await this.connectionMutex.runExclusive(async () => {
      assertEx(this.connected, () => 'Unexpected close')
      this.connected = false
      await this.client.close(true)
      MongoClientWrapper.clients.delete(this.uri)
    })
  }
}
