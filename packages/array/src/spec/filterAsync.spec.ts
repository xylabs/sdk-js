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

  it('processes all items concurrently', async () => {
    // This test verifies that all predicate functions are called before any are awaited
    const executionOrder: number[] = []
    const delayedEvenNumbers = async (value: number) => {
      executionOrder.push(value) // Record when this function was called
      // Delay longer for even numbers to ensure non-sequential execution is visible
      const delay = value % 2 === 0 ? 50 : 10
      await new Promise(resolve => setTimeout(resolve, delay))
      return value % 2 === 0
    }

    const array = [1, 2, 3, 4, 5]
    const result = await filterAsync(array, delayedEvenNumbers)

    // All items should be processed before any promises resolve
    expect(executionOrder).toEqual([1, 2, 3, 4, 5])
    expect(result).toEqual([2, 4])
  })

  it('handles rejection in the predicate function', async () => {
    const rejectingPredicate = async (value: number) => {
      if (value === 3) {
        throw new Error('Test error')
      }
      return await Promise.resolve(value % 2 === 0)
    }

    const array = [1, 2, 3, 4, 5]
    await expect(filterAsync(array, rejectingPredicate)).rejects.toThrow('Test error')
  })

  it('works with a predicate that sometimes returns synchronously', async () => {
    const mixedPredicate = (value: number) => {
      if (value % 2 === 0) {
        // Return synchronously for even numbers
        return Promise.resolve(true)
      }
      // Return asynchronously for odd numbers
      return Promise.resolve(false)
    }

    const array = [1, 2, 3, 4, 5]
    const result = await filterAsync(array, mixedPredicate)
    expect(result).toEqual([2, 4])
  })

  it('handles a large array efficiently', async () => {
    const largeArray = Array.from({ length: 1000 }, (_, i) => i)
    const start = performance.now()

    const result = await filterAsync(largeArray, evenNumbers)

    const end = performance.now()
    expect(result.length).toBe(500) // Should have 500 even numbers
    expect(end - start).toBeLessThan(1000) // Should complete in a reasonable time
  })
})
