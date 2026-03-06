import {
  describe, expect, it,
} from 'vitest'

import { toAddress } from '../address/index.ts'
import { toHex } from '../hex/index.ts'

describe('toHex', () => {
  it('converts a string without prefix by default', () => {
    expect(toHex('ff')).toBe('ff')
  })

  it('converts a string with prefix when configured', () => {
    expect(toHex('ff', { prefix: true })).toBe('0xff')
  })

  it('converts a number', () => {
    expect(toHex(255)).toBe('ff')
  })

  it('converts a bigint', () => {
    expect(toHex(255n)).toBe('ff')
  })

  it('converts an ArrayBuffer', () => {
    const buf = new Uint8Array([0xde, 0xad]).buffer
    expect(toHex(buf)).toBe('dead')
  })

  it('defaults prefix to false', () => {
    const result = toHex('ab')
    expect(result.startsWith('0x')).toBe(false)
  })

  it('passes config through to hexFrom', () => {
    expect(toHex('a', { bitLength: 16 })).toBe('000a')
  })
})

describe('toAddress', () => {
  it('converts a number to an address with default bitLength 160', () => {
    const result = toAddress(10)
    expect(result).toBe('000000000000000000000000000000000000000a')
    expect(result.length).toBe(40) // 160 bits = 40 nibbles
  })

  it('converts a string to an address', () => {
    const result = toAddress('deadbeefdeadbeefdeadbeefdeadbeefdeadbeef')
    expect(result).toBe('deadbeefdeadbeefdeadbeefdeadbeefdeadbeef')
  })

  it('does not add prefix by default', () => {
    const result = toAddress(10)
    expect(result.startsWith('0x')).toBe(false)
  })

  it('respects prefix config', () => {
    const result = toAddress(10, { prefix: true })
    expect(result.startsWith('0x')).toBe(true)
  })
})
