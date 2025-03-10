import {
  describe, expect, it,
} from 'vitest'

import { flatten } from '../flatten.ts'

describe('flatten', () => {
  const testCases: [unknown | unknown[], unknown | unknown[], unknown | unknown[]][] = [
    [['a'], ['b', 'c'], ['a', 'b', 'c']],
    ['a', ['b', 'c'], ['a', 'b', 'c']],
    [['a', 'b'], undefined, ['a', 'b']],
    [undefined, undefined, []],
    [['a'], [1, 2], ['a', 1, 2]],
  ]
  it.each(testCases)('flattens inputs', (a, b, expected) => {
    expect(flatten(a, b)).toEqual(expected)
  })
})
