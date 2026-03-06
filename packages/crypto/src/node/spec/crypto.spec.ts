import {
  describe, expect, it,
} from 'vitest'

import { Crypto } from '../Crypto.ts'
import { cryptoPolyfill } from '../cryptoPolyfill.ts'

describe('crypto', () => {
  it('Crypto module is available', () => {
    expect(Crypto).toBeDefined()
  })

  it('cryptoPolyfill is a function', () => {
    expect(typeof cryptoPolyfill).toBe('function')
    expect(cryptoPolyfill()).toBeUndefined()
  })
})
