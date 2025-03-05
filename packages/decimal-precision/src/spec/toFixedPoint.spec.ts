import {
  describe, expect, it,
} from 'vitest'

import { toFixedPoint } from '../toFixedPoint.ts'

describe('toFixedPoint', () => {
  it('should convert an integer bigint to fixed point', () => {
    expect(toFixedPoint(100n, 6)).toBe(100_000_000n)
  })

  it('should convert an integer string to fixed point', () => {
    expect(toFixedPoint('100', 6)).toBe(100_000_000n)
  })

  it('should convert a decimal string to fixed point', () => {
    expect(toFixedPoint('1.23', 6)).toBe(1_230_000n)
  })

  it('should handle cases with more decimal places than specified', () => {
    expect(toFixedPoint('1.23456789', 6)).toBe(1_234_567n)
  })

  it('should handle cases with fewer decimal places than specified', () => {
    expect(toFixedPoint('1.2', 6)).toBe(1_200_000n)
  })

  it('should handle zero correctly', () => {
    expect(toFixedPoint('0', 6)).toBe(0n)
    expect(toFixedPoint('0.0', 6)).toBe(0n)
  })

  it('should throw an error for non-integer places', () => {
    expect(() => toFixedPoint('1.23', 2.5)).toThrow('places (2.5) must be an Integer')
  })

  it('should throw an error for malformed decimal strings', () => {
    expect(() => toFixedPoint('1.2.3', 6)).toThrow('Too many decimals in value')
  })

  it('should correctly pad shorter decimal strings', () => {
    expect(toFixedPoint('1.1', 4)).toBe(11_000n)
  })

  it('should correctly handle large values', () => {
    expect(toFixedPoint('987654321.123456789', 9)).toBe(987_654_321_123_456_789n)
  })

  it('should correctly handle negative values', () => {
    expect(toFixedPoint('-1.23', 6)).toBe(-1_230_000n)
  })
})
