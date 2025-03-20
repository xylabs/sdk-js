/* eslint-disable import-x/no-internal-modules */

/* eslint-disable require-await */
/* eslint-disable @typescript-eslint/no-explicit-any */

// eslint-disable import-x/no-internal-modules
import { expect, test } from 'vitest'

import type { FunctionThread } from '@xylabs/threads/master'
import {
  Pool, spawn, Worker,
} from '@xylabs/threads/master'
import type { PoolEvent, QueuedTask } from '../../threads/dist/types/master/pool-node.ts'
import { PoolEventType } from '../../threads/dist/types/master/pool-node.ts'

const workerPath = './workers/hello-world.mjs'
const HELLO_WORLD = 'Hello World'

test('thread pool basics work and events are emitted', async () => {
  const events: Pool.Event[] = []
  let spawnCalled = 0
  let taskFnCalled = 0

  const spawnHelloWorld = () => {
    spawnCalled++
    return spawn<() => string>(new Worker(workerPath, {_baseURL: __dirname}))
  }

  const pool = Pool(spawnHelloWorld, 3)
  pool.events().subscribe(event => events.push(event))

  // Ensure all worker threads are initialized before starting to queue tasks
  await new Promise<PoolEvent<FunctionThread<[], string>>>((resolve, reject) => {
    pool
      .events()
      .filter(event => event.type === Pool.EventType.initialized)
      .subscribe(resolve, reject)
  })

  await pool.queue(async (helloWorld) => {
    taskFnCalled++
    const result = await helloWorld()
    expect(result).toBe(HELLO_WORLD)
    return result
  })

  await pool.terminate()

  expect(spawnCalled).toBe(3)
  expect(taskFnCalled).toBe(1)

  expect(events).toEqual([
    {
      size: 3,
      type: Pool.EventType.initialized,
    },
    {
      taskID: 1,
      type: Pool.EventType.taskQueued,
    },
    {
      taskID: 1,
      type: Pool.EventType.taskStart,
      workerID: 1,
    },
    {
      returnValue: HELLO_WORLD,
      taskID: 1,
      type: Pool.EventType.taskCompleted,
      workerID: 1,
    },
    { type: Pool.EventType.taskQueueDrained },
    {
      remainingQueue: [],
      type: Pool.EventType.terminated,
    },
  ])
})

test('pool.completed() works', async () => {
  const returned: any[] = []

  const spawnHelloWorld = () => spawn(new Worker(workerPath, {_baseURL: __dirname}))
  const pool = Pool(spawnHelloWorld, 2)

  for (let i = 0; i < 3; i++) {
    pool.queue(async (helloWorld) => {
      returned.push(await helloWorld())
    })
  }

  await pool.completed()

  expect(returned).toEqual([HELLO_WORLD, HELLO_WORLD, HELLO_WORLD])
})

test('pool.completed() proxies errors', async () => {
  const spawnHelloWorld = () => spawn(new Worker(workerPath, {_baseURL: __dirname}))
  const pool = Pool(spawnHelloWorld, 2)

  pool.queue(async () => {
    throw new Error('Ooopsie')
  })

  await expect(pool.completed()).rejects.toThrow('Ooopsie')
})

test('pool.completed(true) works', async () => {
  const spawnHelloWorld = () => spawn(new Worker(workerPath, {_baseURL: __dirname}))
  const pool = Pool(spawnHelloWorld, 2)

  await pool.completed(true)

  expect(true).toBe(true) // Equivalent to t.pass() in Vitest
})

test('pool.settled() does not reject on task failure', async () => {
  const returned: any[] = []

  const spawnHelloWorld = () => spawn(new Worker(workerPath, {_baseURL: __dirname}))
  const pool = Pool(spawnHelloWorld, 2)

  pool.queue(async (helloWorld) => {
    returned.push(await helloWorld())
  })
  pool.queue(async () => {
    throw new Error('Test error one')
  })
  pool.queue(async () => {
    throw new Error('Test error two')
  })

  const errors = await pool.settled()

  expect(errors.length).toBe(2)
  expect(errors.map(error => error.message).sort()).toEqual(['Test error one', 'Test error two'])
})

test('pool.settled(true) works', async () => {
  const spawnHelloWorld = () => spawn(new Worker(workerPath, {_baseURL: __dirname}))
  const pool = Pool(spawnHelloWorld, 2)

  await pool.settled(true)

  expect(true).toBe(true) // Equivalent to t.pass() in Vitest
})

test('task.cancel() works', async () => {
  const events: Pool.Event[] = []
  const spawnHelloWorld = () => spawn(new Worker(workerPath, {_baseURL: __dirname}))
  const pool = Pool(spawnHelloWorld, 1)

  pool.events().subscribe(event => events.push(event))

  let executionCount = 0
  const tasks: QueuedTask<any, any>[] = []

  for (let i = 0; i < 4; i++) {
    const task = pool.queue((helloWorld) => {
      executionCount++
      return helloWorld()
    })
    tasks.push(task)
  }

  tasks[2].cancel()
  tasks[3].cancel()

  await pool.completed()
  expect(executionCount).toBe(2)

  const cancellationEvents = events.filter(event => event.type === PoolEventType.taskCanceled)
  expect(cancellationEvents).toEqual([
    {
      taskID: 3,
      type: PoolEventType.taskCanceled,
    },
    {
      taskID: 4,
      type: PoolEventType.taskCanceled,
    },
  ])
})
