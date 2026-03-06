import {
  afterEach, describe, expect, it,
} from 'vitest'

import { Buffer as BrowserEntryBuffer, bufferPolyfill as browserEntryPolyfill } from '../../index-browser.ts'
import { bufferPolyfill } from '../bufferPolyfill.ts'

describe('browser bufferPolyfill', () => {
  const originalBuffer = globalThis.Buffer

  afterEach(() => {
    globalThis.Buffer = originalBuffer
  })

  it('sets globalThis.Buffer when undefined', () => {
    // @ts-expect-error - intentionally setting to undefined for testing
    globalThis.Buffer = undefined
    bufferPolyfill()
    expect(globalThis.Buffer).toBeDefined()
  })

  it('does not overwrite existing globalThis.Buffer', () => {
    const before = globalThis.Buffer
    bufferPolyfill()
    expect(globalThis.Buffer).toBe(before)
  })
})

describe('buffer (browser entry)', () => {
  it('Buffer is available from browser entry', () => {
    expect(BrowserEntryBuffer).toBeDefined()
  })

  it('bufferPolyfill is available from browser entry', () => {
    expect(typeof browserEntryPolyfill).toBe('function')
  })
})
