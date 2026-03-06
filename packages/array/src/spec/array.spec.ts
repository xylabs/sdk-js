import {
  describe, expect, it,
} from 'vitest'

import { filterAs } from '../filterAs.ts'
import { findAs, findLastAs } from '../findAs.ts'
import { uniq, uniqBy } from '../uniq.ts'

describe('filterAs', () => {
  it('maps and filters out undefined/null', () => {
    const result = filterAs([1, 2, 3, 4], v => (v % 2 === 0 ? `even:${v}` : undefined))
    expect(result).toEqual(['even:2', 'even:4'])
  })

  it('returns empty array when no matches', () => {
    expect(filterAs([1, 3, 5], () => {})).toEqual([])
  })

  it('handles empty array', () => {
    expect(filterAs([], v => v)).toEqual([])
  })

  it('filters out null values', () => {
    const result = filterAs([1, 2, 3], v => (v === 2 ? null : `val:${v}`))
    expect(result).toEqual(['val:1', 'val:3'])
  })

  it('keeps all when all match', () => {
    const result = filterAs([1, 2, 3], v => v * 10)
    expect(result).toEqual([10, 20, 30])
  })
})

describe('findAs', () => {
  it('finds first matching mapped value', () => {
    const result = findAs([1, 2, 3], v => (v > 1 ? `found:${v}` : undefined))
    expect(result).toBe('found:2')
  })

  it('returns undefined when no match', () => {
    expect(findAs([1, 2, 3], () => {})).toBeUndefined()
  })

  it('handles empty array', () => {
    expect(findAs([], v => v)).toBeUndefined()
  })

  it('filters out null values from mapping', () => {
    const result = findAs([1, 2, 3], v => (v === 1 ? null : `found:${v}`))
    expect(result).toBe('found:2')
  })
})

describe('findLastAs', () => {
  it('finds last matching mapped value', () => {
    const result = findLastAs([1, 2, 3], v => (v > 1 ? `found:${v}` : undefined))
    expect(result).toBe('found:3')
  })

  it('returns undefined when no match', () => {
    expect(findLastAs([1, 2, 3], () => {})).toBeUndefined()
  })

  it('handles empty array', () => {
    expect(findLastAs([], v => v)).toBeUndefined()
  })

  it('returns last non-nullish mapped value', () => {
    const result = findLastAs([1, 2, 3, 4], v => (v % 2 === 0 ? `even:${v}` : undefined))
    expect(result).toBe('even:4')
  })
})

describe('uniq', () => {
  it('removes duplicates', () => {
    expect(uniq([1, 2, 2, 3, 3, 3])).toEqual([1, 2, 3])
  })

  it('handles empty array', () => {
    expect(uniq([])).toEqual([])
  })

  it('handles single element', () => {
    expect(uniq([1])).toEqual([1])
  })

  it('handles strings', () => {
    expect(uniq(['a', 'b', 'a', 'c'])).toEqual(['a', 'b', 'c'])
  })

  it('preserves order of first occurrence', () => {
    expect(uniq([3, 1, 2, 1, 3])).toEqual([3, 1, 2])
  })
})

describe('uniqBy', () => {
  it('removes duplicates by iteratee', () => {
    const items = [{ id: 1, name: 'a' }, { id: 2, name: 'b' }, { id: 1, name: 'c' }]
    expect(uniqBy(items, i => i.id)).toEqual([{ id: 1, name: 'a' }, { id: 2, name: 'b' }])
  })

  it('keeps first occurrence', () => {
    expect(uniqBy(['aa', 'ab', 'ba', 'bb'], s => s[0])).toEqual(['aa', 'ba'])
  })

  it('handles empty array', () => {
    expect(uniqBy([], (x: unknown) => x)).toEqual([])
  })

  it('handles all unique items', () => {
    expect(uniqBy([1, 2, 3], x => x)).toEqual([1, 2, 3])
  })

  it('handles all duplicate items', () => {
    expect(uniqBy([1, 1, 1], x => x)).toEqual([1])
  })
})
