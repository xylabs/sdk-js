import { Buffer } from 'node:buffer'

import {
  describe, expect, it,
} from 'vitest'

import { Buffer as NodeEntryBuffer, bufferPolyfill as nodeEntryPolyfill } from '../../index-node.ts'
import { bufferPolyfill } from '../bufferPolyfill.ts'

describe('buffer (node)', () => {
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

describe('buffer (node entry)', () => {
  it('Buffer is available from node entry', () => {
    expect(NodeEntryBuffer).toBeDefined()
  })

  it('bufferPolyfill is available from node entry', () => {
    expect(typeof nodeEntryPolyfill).toBe('function')
  })
})
