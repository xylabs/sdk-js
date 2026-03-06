import {
  describe, expect, it,
} from 'vitest'

import { hexFrom } from '../hex/index.ts'

describe('hexFrom', () => {
  it('converts a string', () => {
    expect(hexFrom('deadbeef')).toBe('deadbeef')
  })

  it('converts a string with 0x prefix', () => {
    expect(hexFrom('0xdeadbeef')).toBe('deadbeef')
  })

  it('converts a bigint', () => {
    expect(hexFrom(255n)).toBe('ff')
    expect(hexFrom(0n)).toBe('00')
  })

  it('converts a number', () => {
    expect(hexFrom(255)).toBe('ff')
    expect(hexFrom(0)).toBe('00')
    expect(hexFrom(16)).toBe('10')
  })

  it('converts an ArrayBuffer', () => {
    const buf = new Uint8Array([0xca, 0xfe]).buffer
    expect(hexFrom(buf)).toBe('cafe')
  })

  it('throws for unsupported types', () => {
    // Use type assertion to bypass TypeScript and test runtime error path
    expect(() => hexFrom(true as unknown as string)).toThrow('Invalid type: boolean')
    expect(() => hexFrom(undefined as unknown as string)).toThrow('Invalid type: undefined')
  })

  it('respects config for all types', () => {
    expect(hexFrom('a', { prefix: true })).toBe('0x0a')
    expect(hexFrom(10n, { prefix: true })).toBe('0x0a')
    expect(hexFrom(10, { prefix: true })).toBe('0x0a')
    expect(hexFrom(new Uint8Array([10]).buffer, { prefix: true })).toBe('0x0a')
  })

  it('respects bitLength config', () => {
    expect(hexFrom('a', { bitLength: 32 })).toBe('0000000a')
    expect(hexFrom(10n, { bitLength: 32 })).toBe('0000000a')
    expect(hexFrom(10, { bitLength: 32 })).toBe('0000000a')
  })
})
