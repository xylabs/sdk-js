import '@xylabs/vitest-extended'

import {
  describe, expect, it,
} from 'vitest'

import { containsAll } from '../containsAll.ts'

describe('containsAll', () => {
  describe('when the source array contains all the target elements', () => {
    const testCases: [unknown[], unknown[]][] = [
      [
        [1, 2, 3, 4, 5, 6],
        [1, 2, 3],
      ],
      [
        ['f', 'e', 'd', 'c', 'b', 'a'],
        ['a', 'b', 'c'],
      ],
    ]
    it.each(testCases)('returns true', (source, target) => {
      expect(containsAll(source, target)).toBeTrue()
    })
  })
  describe('when the source array does not contain all the target elements', () => {
    const testCases: [unknown[], unknown[]][] = [
      [
        [1, 2, 3, 4, 5, 6],
        [5, 6, 7],
      ],
      [
        ['f', 'e', 'd', 'c', 'b', 'a'],
        ['d', 'e', 'f', 'g'],
      ],
    ]
    it.each(testCases)('returns false', (source, target) => {
      expect(containsAll(source, target)).toBeFalse()
    })
  })

  // Edge cases with empty arrays
  describe('when working with empty arrays', () => {
    const testCases: [unknown[], unknown[], boolean][] = [
      [[], [], true], // Empty source, empty target should be true
      [[1, 2, 3], [], true], // Non-empty source, empty target should be true
      [[], [1, 2, 3], false], // Empty source, non-empty target should be false
    ]
    it.each(testCases)('handles the case correctly', (source, target, expected) => {
      expect(containsAll(source, target)).toBe(expected)
    })
  })

  // Cases with duplicate elements
  describe('when arrays contain duplicate elements', () => {
    const testCases: [unknown[], unknown[]][] = [
      [[1, 2, 2, 3, 3, 3], [2, 3]], // Duplicates in source
      [[1, 2, 3], [2, 2, 3, 3]], // Duplicates in target (should still work if source has at least one of each)
    ]
    it.each(testCases)('returns true when all unique elements are pxresent', (source, target) => {
      expect(containsAll(source, target)).toBeTrue()
    })
  })

  // Objects and reference types
  describe('when arrays contain objects', () => {
    const obj1 = { id: 1 }
    const obj2 = { id: 2 }
    const obj3 = { id: 3 }

    it('checks object references correctly', () => {
      // Same objects (by reference)
      expect(containsAll([obj1, obj2, obj3], [obj1, obj2])).toBeTrue()

      // Different objects with same content
      expect(containsAll([obj1, obj2, obj3], [{ id: 1 }, { id: 2 }])).toBeFalse()
    })
  })

  // Special values
  describe('when arrays contain special values', () => {
    it('handles null and undefined correctly', () => {
      expect(containsAll([null, undefined, 1, 2], [null, undefined])).toBeTrue()
      expect(containsAll([1, 2, 3], [undefined])).toBeFalse()
    })

    it('handles NaN correctly', () => {
      // Note: This depends on how containsAll is implemented
      // NaN !== NaN in JavaScript, so this might fail depending on implementation
      expect(containsAll([Number.NaN, 1, 2], [Number.NaN])).toBeTrue()
    })
  })
})
