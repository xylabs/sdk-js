import {
  describe, expect, it,
} from 'vitest'

import { Buffer, bufferPolyfill } from '../index.ts'

describe('buffer', () => {
  it('Buffer is available', () => {
    expect(Buffer).toBeDefined()
  })

  it('Buffer.from works', () => {
    const buf = Buffer.from('hello')
    expect(buf.toString()).toBe('hello')
  })

  it('Buffer.alloc works', () => {
    const buf = Buffer.alloc(4)
    expect(buf.length).toBe(4)
  })

  it('bufferPolyfill is a function', () => {
    expect(typeof bufferPolyfill).toBe('function')
    expect(bufferPolyfill()).toBeUndefined()
  })
})
