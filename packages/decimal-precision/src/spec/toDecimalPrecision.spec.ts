import {
  describe, expect, it,
} from 'vitest'

import { toDecimalPrecision } from '../toDecimalPrecision.ts'

describe('toDecimalPrecision', () => {
  it('should return a string representation of a number with specified precision', () => {
    expect(toDecimalPrecision(1.234_567_89, 3)).toBe('1.23')
    expect(toDecimalPrecision(1234.567_89, 5)).toBe('1234.6')
  })

  it('should handle rounding correctly', () => {
    expect(toDecimalPrecision(1.999_99, 2)).toBe('2')
    expect(toDecimalPrecision(9.876_543_21, 3)).toBe('9.88')
  })

  it('should round to the closest number at the midpoint', () => {
    expect(toDecimalPrecision(1.2351, 3)).toBe('1.24')
    expect(toDecimalPrecision(1.235, 3)).toBe('1.24')
    expect(toDecimalPrecision(1.2349, 3)).toBe('1.23')
  })

  it('should remove insignificant digits', () => {
    expect(toDecimalPrecision(1.000_000_000_000_000_000_000_1, 3)).toBe('1')
  })

  it('should handle whole numbers correctly', () => {
    expect(toDecimalPrecision(100, 5)).toBe('100')
  })

  it('should handle small numbers correctly', () => {
    expect(toDecimalPrecision(0.000_123_456_789, 4)).toBe('0.0001235')
  })

  it('should handle big and small numbers correctly', () => {
    expect(toDecimalPrecision(0.000_123_456, 4)).toBe('0.0001235')
  })

  it('should handle negative numbers correctly', () => {
    expect(toDecimalPrecision(-1.234_567_89, 4)).toBe('-1.235')
  })

  it('should handle zero correctly', () => {
    expect(toDecimalPrecision(0, 5)).toBe('0')
  })

  it('should handle edge cases with very small numbers', () => {
    expect(toDecimalPrecision(1e-10, 2)).toBe('0.0000000001')
  })
})
