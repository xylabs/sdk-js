import {
  describe, expect, it,
} from 'vitest'

import { clearTimeoutEx, setTimeoutEx } from '../index.ts'

describe('setTimeoutEx', () => {
  it('returns a string id', () => {
    const id = setTimeoutEx(() => {}, 1000)
    expect(typeof id).toBe('string')
    clearTimeoutEx(id)
  })

  it('executes callback after delay', async () => {
    let called = false
    setTimeoutEx(() => { called = true }, 50)
    await new Promise(resolve => setTimeout(resolve, 100))
    expect(called).toBe(true)
  })

  it('can be cancelled', async () => {
    let called = false
    const id = setTimeoutEx(() => { called = true }, 50)
    clearTimeoutEx(id)
    await new Promise(resolve => setTimeout(resolve, 100))
    expect(called).toBe(false)
  })

  it('throws for negative delay', () => {
    expect(() => setTimeoutEx(() => {}, -1)).toThrow('delay must be >= 0')
  })

  it('handles multiple timeouts with same interval', async () => {
    let count = 0
    setTimeoutEx(() => { count++ }, 50)
    // Adding another with the same delay should hit the "nothing changed" path
    setTimeoutEx(() => { count++ }, 50)
    await new Promise(resolve => setTimeout(resolve, 100))
    expect(count).toBe(2)
  })

  it('handles multiple timeouts with different intervals', async () => {
    const order: number[] = []
    setTimeoutEx(() => { order.push(1) }, 30)
    setTimeoutEx(() => { order.push(2) }, 80)
    await new Promise(resolve => setTimeout(resolve, 150))
    expect(order).toEqual([1, 2])
  })

  it('returns early when interval unchanged and currentTimeout exists', async () => {
    // First timeout sets interval to 50 and starts currentTimeout
    let count = 0
    const id1 = setTimeoutEx(() => { count++ }, 50)
    // Second timeout with a longer delay should not change the minimum interval (still 50)
    // This hits line 30: newInterval === interval && currentTimeout !== undefined => return
    const id2 = setTimeoutEx(() => { count++ }, 100)
    // Wait for all to fire
    await new Promise(resolve => setTimeout(resolve, 200))
    expect(count).toBe(2)
    clearTimeoutEx(id1)
    clearTimeoutEx(id2)
  })
})
