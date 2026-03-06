import {
  describe, expect, it,
} from 'vitest'

import { Crypto } from '../Crypto.ts'
import { cryptoPolyfill } from '../cryptoPolyfill.ts'

describe('crypto (node)', () => {
  it('Crypto is the node crypto module', () => {
    expect(Crypto).toBeDefined()
    expect(Crypto.randomUUID).toBeDefined()
  })

  it('Crypto.getRandomValues works', () => {
    const arr = new Uint8Array(16)
    Crypto.getRandomValues(arr)
    expect(arr.some(v => v !== 0)).toBe(true)
  })

  it('Crypto.randomUUID returns a valid UUID', () => {
    const uuid = Crypto.randomUUID()
    expect(uuid).toMatch(/^[\da-f]{8}-[\da-f]{4}-[\da-f]{4}-[\da-f]{4}-[\da-f]{12}$/)
  })

  it('cryptoPolyfill runs without error', () => {
    expect(cryptoPolyfill()).toBeUndefined()
  })
})
