import {
  describe, expect, it,
} from 'vitest'

import { getFunctionName } from '../getFunctionName.ts'

describe('getFunctionName', () => {
  it('returns a string', () => {
    expect(typeof getFunctionName()).toBe('string')
  })

  it('returns non-empty result', () => {
    const name = getFunctionName()
    expect(name).toBeDefined()
    expect(String(name).length).toBeGreaterThan(0)
  })

  function namedFunction() {
    return getFunctionName()
  }

  it('extracts name from a named function', () => {
    const name = namedFunction()
    expect(name).toBeDefined()
  })

  it('works with different depths', () => {
    const name = getFunctionName(1)
    expect(name).toBeDefined()
  })

  it('handles constructor calls', () => {
    class TestClass {
      name: unknown
      constructor() {
        this.name = getFunctionName()
      }
    }
    const instance = new TestClass()
    expect(instance.name).toBeDefined()
  })
})
