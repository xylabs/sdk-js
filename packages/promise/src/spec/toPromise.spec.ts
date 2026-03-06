import {
  describe, expect, it,
} from 'vitest'

import { toPromise } from '../toPromise.ts'

describe('toPromise', () => {
  it('wraps a plain value in a resolved promise', async () => {
    expect(await toPromise(42)).toBe(42)
  })

  it('wraps a string value in a resolved promise', async () => {
    expect(await toPromise('hello')).toBe('hello')
  })

  it('returns the same promise if given a promise', async () => {
    const p = Promise.resolve('existing')
    const result = toPromise(p)
    expect(result).toBe(p)
    expect(await result).toBe('existing')
  })
})
