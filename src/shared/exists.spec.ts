import { exists } from './exists'

const filterableValues = [undefined, null]
const nonfilterableValue = {}

describe('exists', () => {
  describe.each(filterableValues)('with all %p', (value) => {
    it('filters all', async () => {
      const input = [value, value]
      const actual = input.filter(exists)
      expect(actual.length).toBe(0)
    })
  })
  describe.each(filterableValues)('with mixed %p', (value) => {
    it('filters some', async () => {
      const input = [value, nonfilterableValue, value, nonfilterableValue]
      const actual = input.filter(exists)
      expect(actual.length).toBe(2)
    })
  })
  describe.each(filterableValues)('with no %p', (value) => {
    it('filters none', async () => {
      const input = [nonfilterableValue, nonfilterableValue]
      const actual = input.filter(exists)
      expect(actual.length).toBe(input.length)
    })
  })
})
