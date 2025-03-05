import {
  describe, expect, it,
} from 'vitest'

import { fromFixedPoint } from '../fromFixedPoint.ts'

describe('fromFixedPoint', () => {
  it('should convert a fixed-point bigint back to its base value', () => {
    expect(fromFixedPoint(100_000_000n, 6)).toBe(100n)
  })

  it('should handle zero correctly', () => {
    expect(fromFixedPoint(0n, 6)).toBe(0n)
  })

  it('should handle large values correctly', () => {
    expect(fromFixedPoint(987_654_321_123_456_789n, 9)).toBe(987_654_321n)
  })

  it('should handle small values correctly', () => {
    expect(fromFixedPoint(1_234_567n, 6)).toBe(1n)
  })

  it('should handle cases where division results in truncation', () => {
    expect(fromFixedPoint(1_234_567n, 9)).toBe(0n)
  })

  it('should correctly process negative values', () => {
    expect(fromFixedPoint(-1_230_000n, 6)).toBe(-1n)
  })

  it('should throw an error for non-integer places', () => {
    expect(() => fromFixedPoint(1_000_000n, 2.5)).toThrow('places (2.5) must be an Integer')
  })
})
