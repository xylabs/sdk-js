/* eslint-disable import-x/no-internal-modules */

/* eslint-disable @typescript-eslint/no-explicit-any */

import { builtinModules } from 'node:module'

import type { Observable } from 'observable-fns'
import { expect, test } from 'vitest'

import {
  Thread, Worker, spawn
} from '@xylabs/threads/master'


test('can spawn and terminate a thread', async () => {
  // We also test here that running spawn() without type parameters works
  const helloWorld = await spawn(new Worker('./workers/hello-world.mjs', { _baseURL: __dirname }))

  expect(await helloWorld()).toBe('Hello World')
  await Thread.terminate(helloWorld)

  expect(true).toBe(true) // Equivalent to t.pass() in Vitest
})

test('can call a function thread more than once', async () => {
  const increment = await spawn<() => number>(new Worker('./workers/increment.mjs', { _baseURL: __dirname }))

  expect(await increment()).toBe(1)
  expect(await increment()).toBe(2)
  expect(await increment()).toBe(3)

  await Thread.terminate(increment)
})

test('can subscribe to an observable returned by a thread call', async () => {
  const countToFive = await spawn<() => Observable<number>>(new Worker('./workers/count-to-five.mjs', { _baseURL: __dirname }))
  const encounteredValues: any[] = []

  const observable = countToFive()
  observable.subscribe((value: unknown) => encounteredValues.push(value))
  await observable

  expect(encounteredValues).toEqual([1, 2, 3, 4, 5])
  await Thread.terminate(countToFive)
})

test('can spawn a module thread', async () => {
  const counter: any = await spawn<any>(new Worker('./workers/counter.mjs', { _baseURL: __dirname }))

  expect(await counter.getCount()).toBe(0)

  await Promise.all([counter.increment(), counter.increment()])
  expect(await counter.getCount()).toBe(2)

  await counter.decrement()
  expect(await counter.getCount()).toBe(1)

  await Thread.terminate(counter)
})

test('thread job errors are handled', async () => {
  const fail = await spawn<() => Promise<never>>(new Worker('./workers/faulty-function.mjs', { _baseURL: __dirname }))

  await expect(fail()).rejects.toThrow('I am supposed to fail.')

  await Thread.terminate(fail)
})

test('thread transfer errors are handled', async () => {
  if (builtinModules.includes('worker_threads')) {
    // Test is applicable only for native worker_threads
    const helloWorld = await spawn(new Worker('./workers/hello-world.mjs', { _baseURL: __dirname }))
    const badTransferObj = { fn: () => {} }

    await expect(helloWorld(badTransferObj)).rejects.toThrow()

    await Thread.terminate(helloWorld)
  } else {
    expect(true).toBe(true) // Equivalent to t.pass() in Vitest
  }
})

/* test('catches top-level thread errors', async () => {
  await expect(spawn(new Worker('./workers/top-level-throw.ts'))).rejects.toThrow()
}) */

test.todo('can subscribe to thread events')
