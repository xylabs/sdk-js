import { exists } from './exists'

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
})
