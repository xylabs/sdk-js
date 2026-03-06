import {
  describe, expect, it, vi,
} from 'vitest'

import { ifDefined } from '../ifDefined.ts'

describe('ifDefined', () => {
  it('calls func and returns value for defined non-null values', () => {
    const fn = vi.fn()
    expect(ifDefined('hello', fn)).toBe('hello')
    expect(fn).toHaveBeenCalledWith('hello')
  })

  it('calls func for zero (defined value)', () => {
    const fn = vi.fn()
    expect(ifDefined(0, fn)).toBe(0)
    expect(fn).toHaveBeenCalledWith(0)
  })

  it('calls func for false (defined value)', () => {
    const fn = vi.fn()
    expect(ifDefined(false, fn)).toBe(false)
    expect(fn).toHaveBeenCalledWith(false)
  })

  it('does not call func for undefined', () => {
    const fn = vi.fn()
    expect(ifDefined(undefined, fn)).toBeUndefined()
    expect(fn).not.toHaveBeenCalled()
  })

  it('calls func for null (typeOf returns "object" for null)', () => {
    const fn = vi.fn()
    expect(ifDefined(null, fn)).toBe(null)
    expect(fn).toHaveBeenCalledWith(null)
  })
})
