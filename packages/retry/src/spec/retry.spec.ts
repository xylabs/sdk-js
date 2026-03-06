import {
  describe, expect, it,
} from 'vitest'

import { retry } from '../retry.ts'

describe('retry', () => {
  it('returns result on first success', async () => {
    const result = await retry(() => 42)
    expect(result).toBe(42)
  })

  it('returns undefined when function returns undefined with no retries', async () => {
    const result = await retry(() => {})
    expect(result).toBeUndefined()
  })

  it('retries until success', async () => {
    let attempts = 0
    const result = await retry(() => {
      attempts++
      return attempts >= 3 ? 'success' : undefined
    }, { retries: 5, interval: 10 })
    expect(result).toBe('success')
    expect(attempts).toBe(3)
  })

  it('returns undefined when retries exhausted', async () => {
    let attempts = 0
    const result = await retry(() => {
      attempts++
    }, { retries: 2, interval: 10 })
    expect(result).toBeUndefined()
    expect(attempts).toBe(3)
  })

  it('supports custom complete predicate', async () => {
    const result = await retry(() => 0, {
      retries: 0,
      complete: val => val === 0,
    })
    expect(result).toBe(0)
  })
})
