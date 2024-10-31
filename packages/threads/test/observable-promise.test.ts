/* eslint-disable import-x/no-internal-modules */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { Observable } from 'observable-fns'
import { expect, test } from 'vitest'

import { ObservablePromise } from '../src/observable-promise'

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))

test('can create an observable promise', async () => {
  expect.assertions(1)

  await new ObservablePromise((observer) => {
    expect(true).toBe(true)
    observer.complete()
  })
})

test('init function is only called once', async () => {
  let initCallCount = 0

  const async = new ObservablePromise((observer) => {
    initCallCount++
    setTimeout(() => observer.complete(), 10)
  })

  await Promise.all([
    async.then(() => expect(true).toBe(true)),
    async.then(() => expect(true).toBe(true)),
    async.then(() => expect(true).toBe(true)),
  ])

  expect(initCallCount).toBe(1)
})

test('can proxy a promise fulfillment', async () => {
  expect.assertions(2) // Ensure two assertions are made

  const async = new ObservablePromise((observer) => {
    setTimeout(() => {
      observer.next(123)

      // Ignore all values after the first one
      observer.next(456)
      observer.complete()
    }, 1)
  })

  const promise1 = async.then(
    value => expect(value).toBe(123),
    () => expect.fail('Promise was rejected unexpectedly'),
  )

  await delay(10)

  const promise2 = async.then(
    value => expect(value).toBe(123),
    () => expect.fail('Promise was rejected unexpectedly'),
  )

  await Promise.all([promise1, promise2])
})

test('can proxy a promise rejection', async () => {
  let handlerCallCount = 0

  const async = new ObservablePromise((observer) => {
    setTimeout(() => observer.error(new Error('I am supposed to be rejected.')), 1)
  })

  const promise1 = async.then(
    () => expect.fail('Promise should not become fulfilled'),
    () => handlerCallCount++,
  )

  await delay(10)

  const promise2 = async.then(
    () => expect.fail('Promise should not become fulfilled'),
    () => handlerCallCount++,
  )

  await Promise.all([promise1.catch(() => true), promise2.catch(() => true)])
  expect(handlerCallCount).toBe(2)
})

test('can proxy a promise rejection caused by a sync throw', async () => {
  let handlerCallCount = 0

  const async = new ObservablePromise(() => {
    throw new Error('I am supposed to be rejected.')
  })

  const promise1 = async.then(
    () => expect.fail('Promise should not become fulfilled'),
    () => handlerCallCount++,
  )

  await delay(10)

  const promise2 = async.then(
    () => expect.fail('Promise should not become fulfilled'),
    () => handlerCallCount++,
  )

  await Promise.all([promise1.catch(() => true), promise2.catch(() => true)])
  expect(handlerCallCount).toBe(2)
})

test('can subscribe to values and completion', async () => {
  const capturedValues: any[] = []
  let capturedCompletions = 0

  const async = new ObservablePromise((observer) => {
    setTimeout(() => observer.next(1), 10)
    setTimeout(() => observer.next(2), 20)
    setTimeout(() => observer.complete(), 30)
  })

  for (let index = 0; index < 2; index++) {
    async.subscribe(
      value => capturedValues.push(value),
      () => {},
      () => capturedCompletions++,
    )
  }

  await async.finally()
  await delay(1)

  expect(capturedValues).toEqual([1, 1, 2, 2])
  expect(capturedCompletions).toBe(2)
})

test('can subscribe to errors', async () => {
  const capturedErrorMessages: string[] = []
  const capturedValues: any[] = []
  let capturedCompletions = 0

  const async = new ObservablePromise((observer) => {
    setTimeout(() => observer.next(1), 10)
    setTimeout(() => observer.error(new Error('Fails as expected.')), 20)
    setTimeout(() => observer.next(2), 30) // This won't be called due to error
    setTimeout(() => observer.complete(), 40) // This also won't be called
  })

  for (let index = 0; index < 2; index++) {
    async.subscribe(
      value => capturedValues.push(value),
      error => capturedErrorMessages.push(error.message),
      () => capturedCompletions++,
    )
  }

  await async.finally()
  await delay(35) // Wait to ensure the error and all async events are captured

  expect(capturedValues).toEqual([1, 1])
  expect(capturedErrorMessages).toEqual(['Fails as expected.', 'Fails as expected.'])
  expect(capturedCompletions).toBe(0)
})

test('from(Observable) works', async () => {
  const capturedErrorMessages: string[] = []
  const capturedValues: any[] = []
  let capturedCompletions = 0

  const async = ObservablePromise.from(
    new Observable((observer) => {
      setTimeout(() => observer.next(1), 10)
      setTimeout(() => observer.error(new Error('Fails as expected.')), 20)
      setTimeout(() => observer.next(2), 30) // This won't be called due to error
      setTimeout(() => observer.complete(), 40) // This also won't be called
    }),
  )

  for (let index = 0; index < 2; index++) {
    async.subscribe(
      value => capturedValues.push(value),
      error => capturedErrorMessages.push(error.message),
      () => capturedCompletions++,
    )
  }

  await async.finally()
  await delay(35) // Allow time for error and async processing

  expect(capturedValues).toEqual([1, 1])
  expect(capturedErrorMessages).toEqual(['Fails as expected.', 'Fails as expected.'])
  expect(capturedCompletions).toBe(0)
})

test('from(Promise) works', async () => {
  const resolved = ObservablePromise.from(
    new Promise((resolve) => {
      setTimeout(() => resolve('Works'), 10)
    }),
  )

  await expect(resolved).resolves.toBe('Works')

  const rejected = ObservablePromise.from(Promise.reject(new Error('Fails')))
  await expect(rejected).rejects.toThrow('Fails')
})
