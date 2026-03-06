import {
  describe, expect, it,
} from 'vitest'

import '../index.ts'

describe('vitest-extended matchers', () => {
  it('toBeTrue works', () => {
    expect(true).toBeTrue()
  })

  it('toBeFalse works', () => {
    expect(false).toBeFalse()
  })

  it('toBeArray works', () => {
    expect([1, 2]).toBeArray()
  })

  it('toBeString works', () => {
    expect('hello').toBeString()
  })

  it('toBeNumber works', () => {
    expect(42).toBeNumber()
  })

  it('toBeObject works', () => {
    expect({}).toBeObject()
  })

  it('toBeEmpty works', () => {
    expect([]).toBeEmpty()
    expect('').toBeEmpty()
    expect({}).toBeEmpty()
  })
})
