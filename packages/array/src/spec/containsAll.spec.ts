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
})
