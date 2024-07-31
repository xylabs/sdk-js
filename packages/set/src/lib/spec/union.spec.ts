import { union } from '../union.ts'

const cases = [
  // Union is commutative
  [new Set([1, 2]), new Set([3, 4]), new Set([1, 2, 3, 4])],
  [new Set([3, 4]), new Set([1, 2]), new Set([1, 2, 3, 4])],
  // Union of identical sets yields same set
  [new Set([1, 2, 3]), new Set([1, 2, 3]), new Set([1, 2, 3])],
]

describe('union', () => {
  test.each(cases)('calculates the union of the two sets', (a, b, expected) => {
    expect(union(a, b)).toEqual(expected)
  })
})
