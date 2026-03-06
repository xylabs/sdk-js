import {
  describe, expect, it,
} from 'vitest'

import { Crypto, cryptoPolyfill } from '../index.ts'

describe('crypto', () => {
  it('Crypto module is available', () => {
    expect(Crypto).toBeDefined()
  })

  it('cryptoPolyfill is a function', () => {
    expect(typeof cryptoPolyfill).toBe('function')
    expect(cryptoPolyfill()).toBeUndefined()
  })
})
