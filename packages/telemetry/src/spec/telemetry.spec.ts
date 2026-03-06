/* eslint-disable require-await */
import {
  describe, expect, it,
} from 'vitest'

import { span, spanAsync } from '../span.ts'

describe('span', () => {
  it('executes function and returns result', () => {
    const result = span('test-span', () => 42)
    expect(result).toBe(42)
  })

  it('propagates errors', () => {
    expect(() => span('test-span', () => {
      throw new Error('test error')
    })).toThrow('test error')
  })
})

describe('spanAsync', () => {
  it('executes async function and returns result', async () => {
    const result = await spanAsync('test-span', async () => 42)
    expect(result).toBe(42)
  })

  it('propagates async errors', async () => {
    await expect(spanAsync('test-span', async () => {
      throw new Error('async error')
    })).rejects.toThrow('async error')
  })
})
