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

  it('handles single scalar values', () => {
    expect(flatten('x', 'y')).toEqual(['x', 'y'])
  })

  it('handles first undefined, second array', () => {
    expect(flatten(undefined, ['a', 'b'])).toEqual(['a', 'b'])
  })

  it('filters out null and undefined from arrays', () => {
    expect(flatten([1, null, 2], [undefined, 3])).toEqual([1, 2, 3])
  })
})
