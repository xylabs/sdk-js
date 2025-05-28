/* eslint-disable @typescript-eslint/no-explicit-any */
// mongoClientWrapper.memory.test.ts
import { mkdirSync, writeFileSync } from 'node:fs'
import inspector from 'node:inspector'
import path from 'node:path'

import {
  afterEach, beforeEach, describe, expect, it,
} from 'vitest'

import { MongoClientWrapper } from '../Wrapper.ts'

function randomIntBetween(min: number, max: number): number {
  const low = Math.ceil(min)
  const high = Math.floor(max)
  return Math.floor(Math.random() * (high - low + 1)) + low
}
let session: inspector.Session | null = null
let profileType: 'sampling' | 'snapshot' = 'sampling'
let chunks: string[] = []

/**
 * Starts a heap profiler session.
 * @param type 'sampling' or 'snapshot'
 * @param outPath Output directory (default: './heap-profiles')
 */
export async function startHeapProfile(
  type: 'sampling' | 'snapshot' = 'sampling',
  outPath: string = './heap-profiles',
): Promise<void> {
  profileType = type
  session = new inspector.Session()
  session.connect()
  mkdirSync(outPath, { recursive: true })

  await post('HeapProfiler.enable')

  if (type === 'sampling') {
    await post('HeapProfiler.startSampling')
  } else if (type === 'snapshot') {
    chunks = []
    session.on('HeapProfiler.addHeapSnapshotChunk', msg => chunks.push(msg.params.chunk))
  }
}

/**
 * Stops the heap profiler and writes the output to file.
 * @param fileName Optional output filename
 * @param outPath Output directory (default: './heap-profiles')
 * @returns Full path to the heap profile file
 */
export async function stopHeapProfile(
  fileName?: string,
  outPath: string = './heap-profiles',
): Promise<string> {
  if (!session) throw new Error('No active profiling session. Call startHeapProfile() first.')

  const timestamp = Date.now()
  const outFile = path.join(outPath, fileName ?? `heap-${profileType}-${timestamp}.heapprofile`)

  if (profileType === 'sampling') {
    const result = await post<{ profile: any }>('HeapProfiler.stopSampling')
    writeFileSync(outFile, JSON.stringify(result.profile))
  } else {
    await post('HeapProfiler.takeHeapSnapshot')
    writeFileSync(outFile, chunks.join(''))
  }

  await post('HeapProfiler.disable')
  session.disconnect()
  session = null

  return outFile
}

function post<T = void>(method: string, params: object = {}): Promise<T> {
  return new Promise((resolve, reject) => {
    session!.post(method, params, (err, result) => {
      if (err) reject(err)
      else resolve(result as T)
    })
  })
}

describe.skip('MongoClientWrapper memory profiling', () => {
  const TEST_MONGO_URI = process.env.MONGO_CONNECTION_STRING
  beforeEach(() => {
    // Reset static map before each test run
    ;(MongoClientWrapper as any).clients.clear()
  })

  afterEach(async () => {
    // Disconnect all clients after each test
    for (const client of (MongoClientWrapper as any).clients.values()) {
      await client.disconnect()
    }
    ;(MongoClientWrapper as any).clients.clear()
    globalThis.gc?.() // Only works if Node is run with --expose-gc
  })

  it('should not leak MongoClientWrapper instances after many connect/disconnect cycles', async () => {
    expect(TEST_MONGO_URI).toBeDefined()
    const uri = `${TEST_MONGO_URI}`
    const cycleCount = 200_000
    await startHeapProfile('sampling')
    await Promise.all(
      Array.from({ length: cycleCount }).map(async () => {
        // await new Promise(r => setTimeout(r, randomIntBetween(1000, 3000)))
        const wrapper = MongoClientWrapper.get(uri, 100, 1)
        const client = await wrapper.connect()
        expect(client).toBeDefined()
        await wrapper.disconnect()
      }),
    )

    // Trigger GC if available
    globalThis.gc?.()

    // Wait to allow async cleanup to complete
    await new Promise(r => setTimeout(r, 20_000))

    const filePath = await stopHeapProfile()
    console.log('Heap profile written to:', filePath)

    // Check how many entries remain
    const clientMap = (MongoClientWrapper as any).clients as Map<string, any>
    const remaining = [...clientMap.keys()]

    console.log('Remaining keys in clients map:', remaining)

    // Assert map doesn't grow without bound
    expect(remaining.length).toBeLessThanOrEqual(5) // Allow a few survivors from timing edge cases
  }, 240_000)
})
