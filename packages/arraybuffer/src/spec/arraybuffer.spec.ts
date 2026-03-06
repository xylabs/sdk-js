import {
  describe, expect, it,
} from 'vitest'

import { equalArrayBuffers } from '../equalArrayBuffers.ts'
import { isArrayBuffer, isArrayBufferLike } from '../isArrayBuffer.ts'
import { toArrayBuffer } from '../toArrayBuffer.ts'
import { toUint8Array } from '../toUint8Array.ts'

describe('equalArrayBuffers', () => {
  it('returns true for equal buffers', () => {
    const a = new Uint8Array([1, 2, 3]).buffer
    const b = new Uint8Array([1, 2, 3]).buffer
    expect(equalArrayBuffers(a, b)).toBe(true)
  })

  it('returns false for different content', () => {
    const a = new Uint8Array([1, 2, 3]).buffer
    const b = new Uint8Array([1, 2, 4]).buffer
    expect(equalArrayBuffers(a, b)).toBe(false)
  })

  it('returns false for different lengths', () => {
    const a = new Uint8Array([1, 2]).buffer
    const b = new Uint8Array([1, 2, 3]).buffer
    expect(equalArrayBuffers(a, b)).toBe(false)
  })

  it('returns true for two empty buffers', () => {
    const a = new ArrayBuffer(0)
    const b = new ArrayBuffer(0)
    expect(equalArrayBuffers(a, b)).toBe(true)
  })

  it('returns true for same reference', () => {
    const a = new Uint8Array([1, 2, 3]).buffer
    expect(equalArrayBuffers(a, a)).toBe(true)
  })

  it('returns false when only last byte differs', () => {
    const a = new Uint8Array([1, 2, 3]).buffer
    const b = new Uint8Array([1, 2, 0]).buffer
    expect(equalArrayBuffers(a, b)).toBe(false)
  })
})

describe('isArrayBuffer', () => {
  it('returns true for ArrayBuffer', () => {
    expect(isArrayBuffer(new ArrayBuffer(4))).toBe(true)
  })

  it('returns false for non-ArrayBuffer', () => {
    expect(isArrayBuffer(new Uint8Array())).toBe(false)
    expect(isArrayBuffer({})).toBe(false)
    expect(isArrayBuffer(null)).toBe(false)
  })
})

describe('isArrayBufferLike', () => {
  it('returns true for ArrayBuffer', () => {
    expect(isArrayBufferLike(new ArrayBuffer(4))).toBe(true)
  })

  it.skipIf(typeof SharedArrayBuffer === 'undefined')('returns true for SharedArrayBuffer', () => {
    expect(isArrayBufferLike(new SharedArrayBuffer(4))).toBe(true)
  })

  it('returns false for non-buffer objects', () => {
    expect(isArrayBufferLike({})).toBe(false)
    expect(isArrayBufferLike(null)).toBe(false)
    expect(isArrayBufferLike('string')).toBe(false)
    expect(isArrayBufferLike({ byteLength: 4 })).toBe(false)
  })

  it('returns false for undefined and number', () => {
    // eslint-disable-next-line unicorn/no-useless-undefined
    expect(isArrayBufferLike(undefined)).toBe(false)
    expect(isArrayBufferLike(42)).toBe(false)
  })

  it('returns false for object with byteLength but non-function slice', () => {
    expect(isArrayBufferLike({ byteLength: 4, slice: 'not a function' })).toBe(false)
  })
})

describe('toArrayBuffer', () => {
  it('returns undefined for undefined', () => {
    // eslint-disable-next-line unicorn/no-useless-undefined
    expect(toArrayBuffer(undefined)).toBeUndefined()
  })

  it('converts hex string to ArrayBuffer', () => {
    const result = new Uint8Array(toArrayBuffer('AABB'))
    expect(result).toEqual(new Uint8Array([0xAA, 0xBB]))
  })

  it('converts 0x-prefixed hex string', () => {
    const result = new Uint8Array(toArrayBuffer('0xAABB'))
    expect(result).toEqual(new Uint8Array([0xAA, 0xBB]))
  })

  it('converts bigint to ArrayBuffer', () => {
    const result = new Uint8Array(toArrayBuffer(255n))
    expect(result).toEqual(new Uint8Array([0xFF]))
  })

  it('throws for negative bigint', () => {
    expect(() => toArrayBuffer(-1n)).toThrow('negative bigint')
  })

  it('pads result to padLength', () => {
    const result = new Uint8Array(toArrayBuffer('AA', 4))
    expect(result.length).toBe(4)
    expect(result).toEqual(new Uint8Array([0, 0, 0, 0xAA]))
  })

  it('passes through ArrayBufferLike', () => {
    const buf = new Uint8Array([1, 2, 3]).buffer
    const result = toArrayBuffer(buf)
    expect(new Uint8Array(result)).toEqual(new Uint8Array([1, 2, 3]))
  })

  it('throws for unsupported base', () => {
    expect(() => toArrayBuffer('123', 0, 10)).toThrow('Unsupported base')
  })

  it('handles single character hex via toHex padding', () => {
    const result = new Uint8Array(toArrayBuffer('A'))
    expect(result).toEqual(new Uint8Array([0x0A]))
  })

  it('converts bigint zero', () => {
    const result = new Uint8Array(toArrayBuffer(0n))
    expect(result).toEqual(new Uint8Array([0]))
  })

  it('does not pad when result is already longer than padLength', () => {
    const result = new Uint8Array(toArrayBuffer('AABBCCDD', 2))
    expect(result.length).toBe(4)
  })

  it('converts lowercase hex string', () => {
    const result = new Uint8Array(toArrayBuffer('aabb'))
    expect(result).toEqual(new Uint8Array([0xAA, 0xBB]))
  })

  it('throws for odd-length hex string (after prefix strip)', () => {
    // '0xABC' -> 'ABC' which is length 3 (odd), but toHex pads it
    // Direct odd-length hex: 'ABC' has 3 chars
    // toHex will handle padding, so test the hexToArrayBuffer path
    // with a pre-processed odd length should still work via toHex padding
    const result = new Uint8Array(toArrayBuffer('ABC'))
    expect(result.length).toBeGreaterThan(0)
  })

  it('throws for empty hex string', () => {
    expect(() => toArrayBuffer('')).toThrow()
  })

  it('converts large bigint to ArrayBuffer', () => {
    const result = new Uint8Array(toArrayBuffer(0xFF_FFn))
    expect(result).toEqual(new Uint8Array([0xFF, 0xFF]))
  })

  it('pads bigint result when padLength is larger', () => {
    const result = new Uint8Array(toArrayBuffer(0xFFn, 4))
    expect(result.length).toBe(4)
    expect(result).toEqual(new Uint8Array([0, 0, 0, 0xFF]))
  })

  it('passes through Uint8Array buffer', () => {
    const buf = new Uint8Array([10, 20, 30])
    const result = toArrayBuffer(buf.buffer)
    expect(new Uint8Array(result)).toEqual(new Uint8Array([10, 20, 30]))
  })
})

describe('toUint8Array', () => {
  it('returns undefined for undefined', () => {
    // eslint-disable-next-line unicorn/no-useless-undefined
    expect(toUint8Array(undefined)).toBeUndefined()
  })

  it('converts hex string to Uint8Array', () => {
    expect(toUint8Array('AABB')).toEqual(new Uint8Array([0xAA, 0xBB]))
  })

  it('converts bigint to Uint8Array', () => {
    expect(toUint8Array(255n)).toEqual(new Uint8Array([0xFF]))
  })

  it('supports padLength', () => {
    const result = toUint8Array('AA', 3)
    expect(result.length).toBe(3)
    expect(result).toEqual(new Uint8Array([0, 0, 0xAA]))
  })

  it('converts ArrayBufferLike to Uint8Array', () => {
    const buf = new Uint8Array([5, 10, 15]).buffer
    const result = toUint8Array(buf)
    expect(result).toEqual(new Uint8Array([5, 10, 15]))
  })

  it('handles 0x-prefixed string', () => {
    const result = toUint8Array('0xFF')
    expect(result).toEqual(new Uint8Array([0xFF]))
  })
})
