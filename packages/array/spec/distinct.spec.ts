import { distinct } from '../src/distinct'

describe('distinct', () => {
  const testCases: [unknown[], unknown[]][] = [
    [
      [1, 2, 3, 3, 2, 1],
      [1, 2, 3],
    ],
    [
      ['a', 'b', 'c', 'c', 'b', 'a'],
      ['a', 'b', 'c'],
    ],
  ]
  it.each(testCases)('removes duplicates', (input, expected) => {
    expect(input.filter(distinct)).toEqual(expected)
  })
})
