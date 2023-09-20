import { difference } from '../difference'

const cases = [
  // Difference is commutative
  [new Set([1, 2, 3]), new Set([2, 3, 4]), new Set([1])],
  [new Set([2, 3, 4]), new Set([1, 2, 3]), new Set([4])],
  // No difference yields empty set
  [new Set([1, 2, 3]), new Set([1, 2, 3]), new Set([])],
]

describe('difference', () => {
  test.each(cases)('calculates the difference of the two sets', (a, b, expected) => {
    expect(difference(a, b)).toEqual(expected)
  })
})
