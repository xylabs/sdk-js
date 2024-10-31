import {
  describe, expect, it,
} from 'vitest'

import { exists } from '../index.ts'

const filterableValues = [undefined, null]
const nonfilterableValue = {}

describe('exists', () => {
  describe.each(filterableValues)('with all %p', (value) => {
    it('filters all', () => {
      const input = [value, value]
      const actual = input.filter(exists)
      expect(actual.length).toBe(0)
    })
  })
  describe.each(filterableValues)('with mixed %p', (value) => {
    it('filters some', () => {
      const input = [value, nonfilterableValue, value, nonfilterableValue]
      const actual = input.filter(exists)
      expect(actual.length).toBe(2)
    })
  })
  describe.each(filterableValues)('with no %p', () => {
    it('filters none', () => {
      const input = [nonfilterableValue, nonfilterableValue]
      const actual = input.filter(exists)
      expect(actual.length).toBe(input.length)
    })
  })
  it('does not filter zero', () => {
    const input = [0, 1]
    const actual = input.filter(exists)
    expect(actual).toEqual(input)
  })
  it('does not filter false', () => {
    const input = [true, false]
    const actual = input.filter(exists)
    expect(actual).toEqual(input)
  })
})
