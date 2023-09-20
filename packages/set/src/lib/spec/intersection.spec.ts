import { intersection } from '../intersection'

const cases = [
  // Difference is commutative
  [new Set([1, 2, 3]), new Set([2, 3, 4]), new Set([2, 3])],
  [new Set([2, 3, 4]), new Set([1, 2, 3]), new Set([2, 3])],
  // No difference yields empty set
  [new Set([1, 2, 3]), new Set([1, 2, 3]), new Set([1, 2, 3])],
]

describe('intersection', () => {
  test.each(cases)('calculates the intersection of the two sets', (a, b, expected) => {
    expect(intersection(a, b)).toEqual(expected)
  })
})
