import { flatten } from '../flatten'

describe('flatten', () => {
  const testCases: [string[], string[], string[]][] = [[['a'], ['b', 'c'], ['a', 'b', 'c']]]
  it.each(testCases)('flattens inputs', (a, b, expected) => {
    expect(flatten(a, b)).toEqual(expected)
  })
})
