import {
  describe, expect, it, vi,
} from 'vitest'

import { BaseEmitter } from '../BaseEmitter.ts'

type TestEventData = {
  click: { x: number; y: number }
  message: { text: string }
}

class TestEmitter extends BaseEmitter<Record<string, never>, TestEventData> {
  constructor() {
    super({})
  }
}

describe('BaseEmitter', () => {
  it('constructs without error', () => {
    const emitter = new TestEmitter()
    expect(emitter).toBeDefined()
  })

  it('eventData field exists', () => {
    const emitter = new TestEmitter()
    expect(emitter.eventData).toBeDefined()
  })

  describe('on / emit', () => {
    it('emits and receives an event', async () => {
      const emitter = new TestEmitter()
      const listener = vi.fn()
      emitter.on('click', listener)
      await emitter.emit('click', { x: 10, y: 20 })
      expect(listener).toHaveBeenCalledWith({ x: 10, y: 20 })
    })

    it('supports multiple listeners for the same event', async () => {
      const emitter = new TestEmitter()
      const listener1 = vi.fn()
      const listener2 = vi.fn()
      emitter.on('click', listener1)
      emitter.on('click', listener2)
      await emitter.emit('click', { x: 1, y: 2 })
      expect(listener1).toHaveBeenCalledOnce()
      expect(listener2).toHaveBeenCalledOnce()
    })

    it('supports subscribing to multiple event names at once', async () => {
      const emitter = new TestEmitter()
      const listener = vi.fn()
      emitter.on(['click', 'message'], listener as unknown as (args: TestEventData[keyof TestEventData]) => void)
      await emitter.emit('click', { x: 0, y: 0 })
      await emitter.emit('message', { text: 'hi' })
      expect(listener).toHaveBeenCalledTimes(2)
    })
  })

  describe('off', () => {
    it('off can be called without error', () => {
      const emitter = new TestEmitter()
      const listener = vi.fn()
      emitter.on('click', listener)
      expect(() => emitter.off('click', listener)).not.toThrow()
    })

    it('off with array of event names does not throw', () => {
      const emitter = new TestEmitter()
      const listener = vi.fn()
      emitter.on('click', listener)
      expect(() => emitter.off(['click'] as unknown as keyof TestEventData, listener)).not.toThrow()
    })
  })

  describe('once', () => {
    it('fires listener on first emit', async () => {
      const emitter = new TestEmitter()
      const listener = vi.fn()
      emitter.once('click', listener)
      await emitter.emit('click', { x: 1, y: 1 })
      expect(listener).toHaveBeenCalledTimes(1)
      expect(listener).toHaveBeenCalledWith({ x: 1, y: 1 })
    })

    it('once returns a function', () => {
      const emitter = new TestEmitter()
      const unsub = emitter.once('click', () => {})
      expect(typeof unsub).toBe('function')
    })
  })

  describe('onAny / offAny', () => {
    it('fires for any event', async () => {
      const emitter = new TestEmitter()
      const anyListener = vi.fn()
      emitter.onAny(anyListener)
      await emitter.emit('click', { x: 5, y: 5 })
      await emitter.emit('message', { text: 'hello' })
      expect(anyListener).toHaveBeenCalledTimes(2)
      expect(anyListener).toHaveBeenCalledWith('click', { x: 5, y: 5 })
      expect(anyListener).toHaveBeenCalledWith('message', { text: 'hello' })
    })

    it('stops firing after offAny', async () => {
      const emitter = new TestEmitter()
      const anyListener = vi.fn()
      emitter.onAny(anyListener)
      await emitter.emit('click', { x: 1, y: 1 })
      expect(anyListener).toHaveBeenCalledTimes(1)
      emitter.offAny(anyListener)
      await emitter.emit('click', { x: 2, y: 2 })
      expect(anyListener).toHaveBeenCalledTimes(1)
    })

    it('onAny returns an unsubscribe function', async () => {
      const emitter = new TestEmitter()
      const anyListener = vi.fn()
      const unsub = emitter.onAny(anyListener)
      unsub()
      await emitter.emit('click', { x: 0, y: 0 })
      expect(anyListener).not.toHaveBeenCalled()
    })
  })

  describe('emitSerial', () => {
    it('calls listeners serially', async () => {
      const emitter = new TestEmitter()
      const order: number[] = []
      emitter.on('click', async () => {
        await new Promise(resolve => setTimeout(resolve, 30))
        order.push(1)
      })
      emitter.on('click', () => {
        order.push(2)
      })
      await emitter.emitSerial('click', { x: 0, y: 0 })
      expect(order).toEqual([1, 2])
    })
  })

  describe('clearListeners', () => {
    it('clears listeners for a specific event', async () => {
      const emitter = new TestEmitter()
      const listener = vi.fn()
      emitter.on('click', listener)
      emitter.clearListeners('click')
      await emitter.emit('click', { x: 0, y: 0 })
      expect(listener).not.toHaveBeenCalled()
    })

    it('clears listeners for multiple events', async () => {
      const emitter = new TestEmitter()
      const l1 = vi.fn()
      const l2 = vi.fn()
      emitter.on('click', l1)
      emitter.on('message', l2)
      emitter.clearListeners(['click', 'message'])
      await emitter.emit('click', { x: 0, y: 0 })
      await emitter.emit('message', { text: '' })
      expect(l1).not.toHaveBeenCalled()
      expect(l2).not.toHaveBeenCalled()
    })

    it('returns the emitter for chaining', () => {
      const emitter = new TestEmitter()
      const result = emitter.clearListeners('click')
      expect(result).toBe(emitter)
    })
  })

  describe('listenerCount', () => {
    it('returns the number of listeners for an event', () => {
      const emitter = new TestEmitter()
      emitter.on('click', () => {})
      emitter.on('click', () => {})
      expect(emitter.listenerCount('click')).toBe(2)
    })

    it('includes anyListeners in the count', () => {
      const emitter = new TestEmitter()
      emitter.on('click', () => {})
      emitter.onAny(() => {})
      expect(emitter.listenerCount('click')).toBe(2)
    })

    it('returns 0 for events with no listeners', () => {
      const emitter = new TestEmitter()
      expect(emitter.listenerCount('click')).toBe(0)
    })
  })
})
