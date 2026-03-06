/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  describe, expect, it, vi,
} from 'vitest'

import { deserialize, registerSerializer, serialize } from '../common.ts'
import { ObservablePromise } from '../observable-promise.ts'
import { Subject } from '../observable.ts'
import { createPromiseWithResolver } from '../promise.ts'
import {
  DefaultSerializer, extendSerializer,
} from '../serializers.ts'
import {
  $errors, $events, $terminate, $transferable, $worker,
} from '../symbols.ts'
import { isTransferDescriptor, Transfer } from '../transferable.ts'
import { MasterMessageType, WorkerMessageType } from '../types/messages.ts'

describe('symbols', () => {
  it('exports unique symbols', () => {
    expect(typeof $errors).toBe('symbol')
    expect(typeof $events).toBe('symbol')
    expect(typeof $terminate).toBe('symbol')
    expect(typeof $transferable).toBe('symbol')
    expect(typeof $worker).toBe('symbol')
  })

  it('symbols have descriptive descriptions', () => {
    expect($errors.description).toBe('thread.errors')
    expect($events.description).toBe('thread.events')
    expect($terminate.description).toBe('thread.terminate')
    expect($transferable.description).toBe('thread.transferable')
    expect($worker.description).toBe('thread.worker')
  })

  it('each symbol is unique', () => {
    const symbols = [$errors, $events, $terminate, $transferable, $worker]
    const unique = new Set(symbols)
    expect(unique.size).toBe(symbols.length)
  })
})

describe('serializers', () => {
  describe('DefaultSerializer', () => {
    it('serializes and deserializes primitive values', () => {
      expect(DefaultSerializer.serialize('hello')).toBe('hello')
      expect(DefaultSerializer.serialize(42)).toBe(42)
      expect(DefaultSerializer.serialize(true)).toBe(true)
      expect(DefaultSerializer.serialize(null)).toBe(null)
    })

    it('deserializes primitive values as-is', () => {
      expect(DefaultSerializer.deserialize('hello')).toBe('hello')
      expect(DefaultSerializer.deserialize(42)).toBe(42)
      expect(DefaultSerializer.deserialize(true)).toBe(true)
      expect(DefaultSerializer.deserialize(null)).toBe(null)
    })

    it('serializes Error into SerializedError format', () => {
      const error = new Error('test error')
      error.name = 'TestError'
      const serialized = DefaultSerializer.serialize(error) as any

      expect(serialized.__error_marker).toBe('$$error')
      expect(serialized.message).toBe('test error')
      expect(serialized.name).toBe('TestError')
      expect(typeof serialized.stack).toBe('string')
    })

    it('deserializes SerializedError back into Error', () => {
      const serializedError = {
        __error_marker: '$$error' as const,
        message: 'deserialized error',
        name: 'CustomError',
        stack: 'stack trace here',
      }
      const error = DefaultSerializer.deserialize(serializedError as any)

      expect(error).toBeInstanceOf(Error)
      expect(error.message).toBe('deserialized error')
      expect(error.name).toBe('CustomError')
      expect(error.stack).toBe('stack trace here')
    })

    it('passes non-error objects through unchanged', () => {
      const obj = { key: 'value', num: 123 }
      expect(DefaultSerializer.serialize(obj)).toEqual(obj)
      expect(DefaultSerializer.deserialize(obj as any)).toEqual(obj)
    })

    it('does not treat objects without __error_marker as errors', () => {
      const notAnError = { message: 'not an error', name: 'NotError' }
      const result = DefaultSerializer.deserialize(notAnError as any)
      expect(result).not.toBeInstanceOf(Error)
      expect(result).toEqual(notAnError)
    })
  })

  describe('extendSerializer', () => {
    it('creates a serializer that delegates to the implementation', () => {
      const extended = extendSerializer(DefaultSerializer, {
        deserialize(message: any, fallback: any) {
          if (typeof message === 'string' && message.startsWith('custom:')) {
            return { custom: message.slice(7) }
          }
          return fallback(message)
        },
        serialize(input: any, fallback: any) {
          if (input && typeof input === 'object' && 'custom' in input) {
            return `custom:${input.custom}`
          }
          return fallback(input)
        },
      })

      expect(extended.serialize({ custom: 'data' })).toBe('custom:data')
      expect(extended.deserialize('custom:data' as any)).toEqual({ custom: 'data' })
    })

    it('falls back to base serializer for unhandled types', () => {
      const extended = extendSerializer(DefaultSerializer, {
        deserialize(_message: any, fallback: any) {
          return fallback(_message)
        },
        serialize(input: any, fallback: any) {
          return fallback(input)
        },
      })

      expect(extended.serialize(42)).toBe(42)
      expect(extended.deserialize(42 as any)).toBe(42)
    })
  })
})

describe('common (registerSerializer, serialize, deserialize)', () => {
  it('serialize and deserialize use the global registered serializer', () => {
    expect(serialize('test')).toBe('test')
    expect(deserialize('test')).toBe('test')
  })

  it('serialize handles Error objects', () => {
    const error = new Error('common error')
    const serialized = serialize(error) as any
    expect(serialized.__error_marker).toBe('$$error')
    expect(serialized.message).toBe('common error')
  })

  it('deserialize handles serialized errors', () => {
    const serialized = serialize(new Error('round trip'))
    const result = deserialize(serialized)
    expect(result).toBeInstanceOf(Error)
    expect(result.message).toBe('round trip')
  })

  it('registerSerializer extends the global serializer', () => {
    const marker = `__test_marker_${Date.now()}`

    registerSerializer({
      deserialize(message: any, fallback: any) {
        if (typeof message === 'object' && message !== null && message[marker]) {
          return { decoded: message.value }
        }
        return fallback(message)
      },
      serialize(input: any, fallback: any) {
        if (input && typeof input === 'object' && 'encode' in input) {
          return { [marker]: true, value: input.encode } as any
        }
        return fallback(input)
      },
    })

    const serialized = serialize({ encode: 'hello' }) as any
    expect(serialized[marker]).toBe(true)
    expect(serialized.value).toBe('hello')

    const deserialized = deserialize(serialized)
    expect(deserialized).toEqual({ decoded: 'hello' })
  })
})

describe('transferable', () => {
  describe('Transfer', () => {
    it('wraps a transferable with explicit transferables list', () => {
      const buffer = new ArrayBuffer(8)
      const consoleSpy = vi.spyOn(console, 'log').mockImplementation(() => {})

      const descriptor = Transfer({ data: buffer }, [buffer])

      expect(descriptor[$transferable]).toBe(true)
      expect(descriptor.send).toEqual({ data: buffer })
      expect(descriptor.transferables).toEqual([buffer])

      consoleSpy.mockRestore()
    })

    it('wraps a single transferable without explicit list', () => {
      const buffer = new ArrayBuffer(8)
      const consoleSpy = vi.spyOn(console, 'log').mockImplementation(() => {})

      const descriptor = Transfer(buffer)

      expect(descriptor[$transferable]).toBe(true)
      expect(descriptor.send).toBe(buffer)
      expect(descriptor.transferables).toEqual([buffer])

      consoleSpy.mockRestore()
    })

    it('throws for non-transferable without explicit list', () => {
      const consoleSpy = vi.spyOn(console, 'log').mockImplementation(() => {})

      expect(() => Transfer(null as any)).toThrow('Not transferable')
      expect(() => Transfer(42 as any)).toThrow('Not transferable')
      expect(() => Transfer('string' as any)).toThrow('Not transferable')

      consoleSpy.mockRestore()
    })
  })

  describe('isTransferDescriptor', () => {
    it('returns true for transfer descriptors', () => {
      const consoleSpy = vi.spyOn(console, 'log').mockImplementation(() => {})
      const descriptor = Transfer(new ArrayBuffer(8))
      consoleSpy.mockRestore()

      expect(isTransferDescriptor(descriptor)).toBe(true)
    })

    it('returns false for plain objects', () => {
      expect(isTransferDescriptor({})).toBeFalsy()
      expect(isTransferDescriptor({ send: 'data' })).toBeFalsy()
    })

    it('returns false for non-objects', () => {
      expect(isTransferDescriptor(null)).toBeFalsy()
      expect(isTransferDescriptor(undefined)).toBeFalsy()
      expect(isTransferDescriptor(42)).toBeFalsy()
      expect(isTransferDescriptor('string')).toBeFalsy()
    })
  })
})

describe('promise', () => {
  describe('createPromiseWithResolver', () => {
    it('returns a tuple of [Promise, resolver]', () => {
      const [promise, resolver] = createPromiseWithResolver<string>()
      expect(promise).toBeInstanceOf(Promise)
      expect(typeof resolver).toBe('function')
    })

    it('resolves the promise when resolver is called', async () => {
      const [promise, resolver] = createPromiseWithResolver<number>()
      resolver(42)
      const result = await promise
      expect(result).toBe(42)
    })

    it('resolves even if resolver is called before promise is awaited', async () => {
      const [promise, resolver] = createPromiseWithResolver<string>()
      resolver('early')
      const result = await promise
      expect(result).toBe('early')
    })

    it('handles object values', async () => {
      const [promise, resolver] = createPromiseWithResolver<{ key: string }>()
      const value = { key: 'test' }
      resolver(value)
      expect(await promise).toEqual(value)
    })
  })
})

describe('Subject (observable)', () => {
  it('notifies subscribers of next values', () => {
    const subject = new Subject<number>()
    const values: number[] = []

    subject.subscribe({ next: value => values.push(value) })
    subject.next(1)
    subject.next(2)
    subject.next(3)

    expect(values).toEqual([1, 2, 3])
  })

  it('supports multiple subscribers', () => {
    const subject = new Subject<string>()
    const values1: string[] = []
    const values2: string[] = []

    subject.subscribe({ next: v => values1.push(v) })
    subject.subscribe({ next: v => values2.push(v) })
    subject.next('hello')

    expect(values1).toEqual(['hello'])
    expect(values2).toEqual(['hello'])
  })

  it('notifies subscribers of errors', () => {
    const subject = new Subject<number>()
    const errors: Error[] = []

    subject.subscribe({
      error: err => errors.push(err),
      next: () => {},
    })
    const error = new Error('test error')
    subject.error(error)

    expect(errors).toEqual([error])
  })

  it('notifies subscribers of completion', () => {
    const subject = new Subject<number>()
    let completed = false

    subject.subscribe({
      complete: () => { completed = true },
      next: () => {},
    })
    subject.complete()

    expect(completed).toBe(true)
  })

  it('unsubscribe removes observer', () => {
    const subject = new Subject<number>()
    const values: number[] = []

    const subscription = subject.subscribe({ next: v => values.push(v) })
    subject.next(1)
    subscription.unsubscribe()
    subject.next(2)

    expect(values).toEqual([1])
  })
})

describe('ObservablePromise', () => {
  it('resolves like a promise on completion', async () => {
    const op = new ObservablePromise<number>((observer) => {
      observer.next(42)
      observer.complete()
    })

    const result = await op
    expect(result).toBe(42)
  })

  it('rejects like a promise on error', async () => {
    const op = new ObservablePromise<number>((observer) => {
      observer.error(new Error('fail'))
    })

    await expect(op).rejects.toThrow('fail')
  })

  it('emits values like an observable when subscribed before init', async () => {
    const values: number[] = []
    const op = new ObservablePromise<number>((observer) => {
      setTimeout(() => {
        observer.next(1)
        observer.next(2)
        observer.next(3)
        observer.complete()
      }, 10)
    })

    op.subscribe({ next: v => values.push(v) })
    await op
    expect(values).toEqual([1, 2, 3])
  })

  it('resolves with the first emitted value', async () => {
    const op = new ObservablePromise<string>((observer) => {
      observer.next('first')
      observer.next('second')
      observer.complete()
    })

    const result = await op
    expect(result).toBe('first')
  })

  it('supports .then chaining', async () => {
    const op = new ObservablePromise<number>((observer) => {
      observer.next(10)
      observer.complete()
    })

    const result = await op.then(v => v * 2)
    expect(result).toBe(20)
  })

  it('supports .catch for error handling', async () => {
    const op = new ObservablePromise<number>((observer) => {
      observer.error(new Error('caught'))
    })

    const result = await op.catch(err => err.message)
    expect(result).toBe('caught')
  })

  it('supports .finally', async () => {
    let finallyCalled = false
    const op = new ObservablePromise<number>((observer) => {
      observer.next(1)
      observer.complete()
    })

    await op.finally(() => { finallyCalled = true })
    expect(finallyCalled).toBe(true)
  })

  it('has Symbol.toStringTag', () => {
    const op = new ObservablePromise<number>((observer) => {
      observer.complete()
    })
    expect(op[Symbol.toStringTag]).toBe('[object ObservablePromise]')
  })

  it('handles .finally on error path', async () => {
    let finallyCalled = false
    const op = new ObservablePromise<number>((observer) => {
      observer.error(new Error('finally-error'))
    })

    await op.catch(() => {}).finally(() => { finallyCalled = true })
    expect(finallyCalled).toBe(true)
  })

  it('handles init throwing synchronously', async () => {
    const op = new ObservablePromise<number>(() => {
      throw new Error('init-sync-throw')
    })

    await expect(op).rejects.toThrow('init-sync-throw')
  })

  it('then handles already-rejected state with custom handler', async () => {
    const op = new ObservablePromise<number>((observer) => {
      observer.error(new Error('already-rejected'))
    })

    // Wait a tick so the state settles to rejected
    await new Promise(r => setTimeout(r, 10))

    const result = await op.then(undefined, (err) => `handled: ${err.message}`)
    expect(result).toBe('handled: already-rejected')
  })

  it('handles deferred fulfillment callback throwing', async () => {
    const op = new ObservablePromise<number>((observer) => {
      setTimeout(() => {
        observer.next(1)
        observer.complete()
      }, 10)
    })

    // When onFulfilled throws, onRejected should be called via rejectionCallback
    const result = await op.then(
      () => { throw new Error('deferred-throw') },
      (err) => `caught: ${err.message}`,
    )
    expect(result).toBe('caught: deferred-throw')
  })

  it('finally handler runs on error path', async () => {
    let finallyCalled = false
    const op = new ObservablePromise<number>((observer) => {
      setTimeout(() => observer.error(new Error('err')), 10)
    })

    // Subscribe to trigger init
    op.subscribe({ error: () => {}, next: () => {} })
    await op.catch(() => 'recovered').finally(() => { finallyCalled = true })
    expect(finallyCalled).toBe(true)
  })

  it('fail function throws when no onRejected handler and promise rejects (line 25)', async () => {
    const op = new ObservablePromise<number>((observer) => {
      setTimeout(() => observer.error(new Error('unhandled-rejection')), 10)
    })

    // Calling .then() without an onRejected causes `fail` to be used as default,
    // which throws the error, hitting line 25 and then line 129 (reject(anotherError))
    await expect(op.then(v => v)).rejects.toThrow('unhandled-rejection')
  })

  it('reject(anotherError) when onRejected itself throws (line 129)', async () => {
    const op = new ObservablePromise<number>((observer) => {
      setTimeout(() => observer.error(new Error('original-error')), 10)
    })

    const result = op.then(
      v => v,
      () => { throw new Error('onRejected-threw') },
    )

    await expect(result).rejects.toThrow('onRejected-threw')
  })

  it('finally handler runs on rejected promise without catch (line 166)', async () => {
    let finallyCalled = false
    const op = new ObservablePromise<number>((observer) => {
      setTimeout(() => observer.error(new Error('reject-for-finally')), 10)
    })

    // .finally() on a rejected promise: the rejection path calls () => handler() (line 166)
    // The handler swallows the error and the promise resolves with undefined
    const result = await op.finally(() => { finallyCalled = true })
    expect(result).toBeUndefined()
    expect(finallyCalled).toBe(true)
  })

  describe('ObservablePromise.from', () => {
    it('creates from a native promise', async () => {
      const op = ObservablePromise.from(Promise.resolve(42))
      const result = await op
      expect(result).toBe(42)
    })

    it('creates from a rejecting promise', async () => {
      const op = ObservablePromise.from(Promise.reject(new Error('rejected')))
      await expect(op).rejects.toThrow('rejected')
    })
  })
})

describe('message types', () => {
  it('MasterMessageType enum values', () => {
    expect(MasterMessageType.cancel).toBe('cancel')
    expect(MasterMessageType.run).toBe('run')
  })

  it('WorkerMessageType enum values', () => {
    expect(WorkerMessageType.error).toBe('error')
    expect(WorkerMessageType.init).toBe('init')
    expect(WorkerMessageType.result).toBe('result')
    expect(WorkerMessageType.running).toBe('running')
    expect(WorkerMessageType.uncaughtError).toBe('uncaughtError')
  })

  it('can construct valid message shapes', () => {
    const cancelMsg = {
      type: MasterMessageType.cancel,
      uid: 1,
    }
    expect(cancelMsg.type).toBe('cancel')

    const runMsg = {
      type: MasterMessageType.run,
      uid: 2,
      method: 'doWork',
      args: [1, 'two'],
    }
    expect(runMsg.type).toBe('run')
    expect(runMsg.args).toEqual([1, 'two'])

    const initMsg = {
      type: WorkerMessageType.init,
      exposed: { type: 'module' as const, methods: ['a', 'b'] },
    }
    expect(initMsg.exposed.methods).toEqual(['a', 'b'])

    const resultMsg = {
      type: WorkerMessageType.result,
      uid: 3,
      complete: true as const,
      payload: { data: 'result' },
    }
    expect(resultMsg.complete).toBe(true)
  })
})
