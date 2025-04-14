import {
  describe, expect, it,
} from 'vitest'

import { filterAsync } from '../filterAsync.ts'

describe('filterAsync', () => {
  const evenNumbers = async (value: number) => await Promise.resolve(value % 2 === 0) // Keep even numbers
  it('filters an array based on an asynchronous predicate', async () => {
    const array = [1, 2, 3, 4, 5]
    const result = await filterAsync(array, evenNumbers)
    expect(result).toEqual([2, 4])
  })

  it('returns an empty array if no elements match the predicate', async () => {
    const array = [1, 3, 5]
    const result = await filterAsync(array, evenNumbers)
    expect(result).toEqual([])
  })

  it('returns the original array if all elements match the predicate', async () => {
    const array = [2, 4, 6]
    const result = await filterAsync(array, evenNumbers)
    expect(result).toEqual([2, 4, 6])
  })

  it('handles an empty array', async () => {
    const array: number[] = []
    const result = await filterAsync(array, evenNumbers)
    expect(result).toEqual([])
  })

  it('handles predicates that depend on the index', async () => {
    const array = [10, 20, 30, 40, 50]
    const evenIndices = async (_value: number, index: number) =>
      await Promise.resolve(index % 2 === 0) // Keep elements at even indices
    const result = await filterAsync(array, evenIndices)
    expect(result).toEqual([10, 30, 50])
  })

  it('handles predicates that depend on the entire array', async () => {
    const array = [1, 2, 3, 4, 5]
    const greaterThanMin = async (value: number, _index: number, arr: number[]) =>
      await Promise.resolve(value > Math.min(...arr)) // Keep elements greater than the smallest element
    const result = await filterAsync(array, greaterThanMin)
    expect(result).toEqual([2, 3, 4, 5])
  })
})
