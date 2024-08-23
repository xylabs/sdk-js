/* eslint-disable import-x/no-internal-modules */

/* eslint-disable require-await */
/* eslint-disable @typescript-eslint/no-explicit-any */

// eslint-disable import-x/no-internal-modules
import test from 'ava'

import {
  Pool, spawn, Worker,
} from '../src/index'
import type { QueuedTask } from '../src/master/pool'
import { PoolEventType } from '../src/master/pool'

const workerPath = './workers/hello-world'
const HELLO_WORLD = 'Hello World'

test.serial('thread pool basics work and events are emitted', async (t) => {
  const events: Pool.Event[] = []
  let spawnCalled = 0
  let taskFnCalled = 0

  const spawnHelloWorld = () => {
    spawnCalled++
    return spawn<() => string>(new Worker(workerPath))
  }
  const pool = Pool(spawnHelloWorld, 3)
  pool.events().subscribe(event => events.push(event))

  // Just to make sure all worker threads are initialized before starting to queue
  // This is only necessary for testing to make sure that this is the first event recorded
  await new Promise((resolve, reject) => {
    pool
      .events()
      .filter(event => event.type === PoolEventType.initialized)
      .subscribe(resolve, reject)
  })

  await pool.queue(async (helloWorld) => {
    taskFnCalled++
    const result = await helloWorld()
    t.is(result, HELLO_WORLD)
    return result
  })

  await pool.terminate()
  t.is(spawnCalled, 3)
  t.is(taskFnCalled, 1)

  t.deepEqual(events, [
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

test.serial('pool.completed() works', async (t) => {
  const returned: any[] = []

  const spawnHelloWorld = () => spawn(new Worker(workerPath))
  const pool = Pool(spawnHelloWorld, 2)

  for (let i = 0; i < 3; i++) {
    pool.queue(async (helloWorld) => {
      returned.push(await helloWorld())
    })
  }

  await pool.completed()

  t.deepEqual(returned, [HELLO_WORLD, HELLO_WORLD, HELLO_WORLD])
})

test.serial('pool.completed() proxies errors', async (t) => {
  const spawnHelloWorld = () => spawn(new Worker(workerPath))
  const pool = Pool(spawnHelloWorld, 2)

  pool.queue(async () => {
    throw new Error('Ooopsie')
  })

  const error = await t.throwsAsync(() => pool.completed())
  t.is(error.message, 'Ooopsie')
})

test.serial('pool.completed(true) works', async (t) => {
  const spawnHelloWorld = () => spawn(new Worker(workerPath))
  const pool = Pool(spawnHelloWorld, 2)

  await pool.completed(true)
  t.pass()
})

test.serial('pool.settled() does not reject on task failure', async (t) => {
  const returned: any[] = []

  const spawnHelloWorld = () => spawn(new Worker(workerPath))
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
  t.is(errors.length, 2)
  t.deepEqual(errors.map(error => error.message).sort(), ['Test error one', 'Test error two'])
})

test.serial('pool.settled(true) works', async (t) => {
  const spawnHelloWorld = () => spawn(new Worker(workerPath))
  const pool = Pool(spawnHelloWorld, 2)

  await pool.settled(true)
  t.pass()
})

test.serial('task.cancel() works', async (t) => {
  const events: Pool.Event[] = []
  const spawnHelloWorld = () => spawn(new Worker(workerPath))
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
  t.is(executionCount, 2)

  const cancellationEvents = events.filter(event => event.type === 'taskCanceled')
  t.deepEqual(cancellationEvents, [
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
