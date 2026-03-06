import {
  describe, expect, it,
} from 'vitest'

import { NoOpLogFunction } from '../NoOpLogFunction.ts'

describe('NoOpLogFunction', () => {
  it('is a function', () => {
    expect(typeof NoOpLogFunction).toBe('function')
  })

  it('returns undefined', () => {
    expect(NoOpLogFunction()).toBeUndefined()
  })

  it('accepts any number of arguments', () => {
    expect(() => NoOpLogFunction('a', 1, {}, [], null)).not.toThrow()
  })
})
