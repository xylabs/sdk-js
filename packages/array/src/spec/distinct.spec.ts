import '@xylabs/vitest-extended'

import {
  describe, expect, it,
} from 'vitest'

import { distinct } from '../distinct.ts'

describe('distinct', () => {
  describe('basic scenarios', () => {
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

  describe('edge cases', () => {
    it('handles empty arrays', () => {
      expect([].filter(distinct)).toEqual([])
    })

    it('handles arrays with a single element', () => {
      expect([5].filter(distinct)).toEqual([5])
    })

    it('preserves order of first occurrence', () => {
      expect([3, 1, 2, 3, 2, 1].filter(distinct)).toEqual([3, 1, 2])
    })
  })

  describe('special values', () => {
    it('handles null and undefined', () => {
      expect([null, undefined, null, undefined].filter(distinct)).toEqual([null, undefined])
    })

    it('handles mixed types', () => {
      expect([1, '1', true, 1, '1', true].filter(distinct)).toEqual([1, '1', true])
    })

    it('handles NaN values', () => {
      const result = [Number.NaN, Number.NaN, 1, 2].filter(distinct)
      expect(result.length).toBe(3)
      expect(Number.isNaN(result[0])).toBeTrue()
      expect(result.slice(1)).toEqual([1, 2])
    })
  })

  describe('objects and references', () => {
    it('distinguishes objects by reference', () => {
      const obj1 = { id: 1 }
      const obj2 = { id: 2 }
      const obj3 = { id: 1 } // Same content as obj1, different reference

      expect([obj1, obj2, obj1, obj3].filter(distinct)).toEqual([obj1, obj2, obj3])
    })

    it('works with complex nested objects', () => {
      const obj1 = { user: { name: 'Alice', id: 1 } }
      const obj2 = { user: { name: 'Bob', id: 2 } }

      expect([obj1, obj2, obj1].filter(distinct)).toEqual([obj1, obj2])
    })
  })
})
