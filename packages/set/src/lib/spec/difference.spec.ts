import { difference } from '../difference'

const cases = [[new Set([1, 2, 3]), new Set([2, 3, 4]), new Set([1])]]

describe('difference', () => {
  test.each(cases)('calculates the difference', (a, b, expected) => {
    expect(difference(a, b)).toEqual(expected)
  })
})
