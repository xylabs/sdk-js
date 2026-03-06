import {
  describe, expect, it,
} from 'vitest'

import { BigNumber, BN } from '../index.ts'

describe('BigNumber', () => {
  it('creates from number', () => {
    const bn = new BigNumber(42)
    expect(bn.toNumber()).toBe(42)
  })

  it('creates from string', () => {
    const bn = new BigNumber('100')
    expect(bn.toNumber()).toBe(100)
  })

  it('creates from hex string', () => {
    const bn = new BigNumber('ff', 16)
    expect(bn.toNumber()).toBe(255)
  })

  it('creates from zero', () => {
    const bn = new BigNumber(0)
    expect(bn.toNumber()).toBe(0)
    expect(bn.isZero()).toBe(true)
  })

  it('performs addition', () => {
    const a = new BigNumber(10)
    const b = new BigNumber(20)
    expect(a.add(b).toNumber()).toBe(30)
  })

  it('performs subtraction', () => {
    const a = new BigNumber(20)
    const b = new BigNumber(7)
    expect(a.sub(b).toNumber()).toBe(13)
  })

  it('performs multiplication', () => {
    const a = new BigNumber(6)
    const b = new BigNumber(7)
    expect(a.mul(b).toNumber()).toBe(42)
  })

  it('performs division', () => {
    const a = new BigNumber(42)
    const b = new BigNumber(6)
    expect(a.div(b).toNumber()).toBe(7)
  })

  it('performs modulo', () => {
    const a = new BigNumber(10)
    const b = new BigNumber(3)
    expect(a.mod(b).toNumber()).toBe(1)
  })

  it('handles negative numbers', () => {
    const a = new BigNumber(-5)
    expect(a.isNeg()).toBe(true)
    expect(a.toNumber()).toBe(-5)
  })

  it('handles large numbers', () => {
    const a = new BigNumber('ffffffffffffffff', 16)
    expect(a.toString(16)).toBe('ffffffffffffffff')
  })

  it('compares values', () => {
    const a = new BigNumber(10)
    const b = new BigNumber(20)
    expect(a.lt(b)).toBe(true)
    expect(b.gt(a)).toBe(true)
    expect(a.eq(new BigNumber(10))).toBe(true)
  })

  it('converts to string', () => {
    const bn = new BigNumber(255)
    expect(bn.toString(10)).toBe('255')
    expect(bn.toString(16)).toBe('ff')
  })

  it('clones value', () => {
    const a = new BigNumber(42)
    const b = a.clone()
    expect(b.toNumber()).toBe(42)
    expect(a.eq(b)).toBe(true)
  })

  it('BN is the same as BigNumber', () => {
    expect(BN).toBe(BigNumber)
  })
})
