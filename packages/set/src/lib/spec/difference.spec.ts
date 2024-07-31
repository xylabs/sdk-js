import { difference } from '../difference.ts'

const cases = [
  // Difference is non-commutative
  [new Set([1, 2, 3]), new Set([2, 3, 4]), new Set([1])],
  [new Set([2, 3, 4]), new Set([1, 2, 3]), new Set([4])],
  // Difference of identical sets yields empty set
  [new Set([1, 2, 3]), new Set([1, 2, 3]), new Set([])],
]

describe('difference', () => {
  test.each(cases)('calculates the difference of the two sets', (a, b, expected) => {
    expect(difference(a, b)).toEqual(expected)
  })
})
