import {
  describe, expect, it,
} from 'vitest'

import { bitsToNibbles, nibblesToBits } from '../hex/index.ts'

describe('bitsToNibbles', () => {
  it('converts multiples of 4 correctly', () => {
    expect(bitsToNibbles(4)).toBe(1)
    expect(bitsToNibbles(8)).toBe(2)
    expect(bitsToNibbles(16)).toBe(4)
    expect(bitsToNibbles(256)).toBe(64)
  })

  it('throws for non-multiples of 4', () => {
    expect(() => bitsToNibbles(1)).toThrow('Bits for nibbles must multiple of 4')
    expect(() => bitsToNibbles(3)).toThrow('Bits for nibbles must multiple of 4')
    expect(() => bitsToNibbles(5)).toThrow('Bits for nibbles must multiple of 4')
    expect(() => bitsToNibbles(7)).toThrow('Bits for nibbles must multiple of 4')
  })
})

describe('nibblesToBits', () => {
  it('converts nibbles to bits', () => {
    expect(nibblesToBits(1)).toBe(4)
    expect(nibblesToBits(2)).toBe(8)
    expect(nibblesToBits(4)).toBe(16)
    expect(nibblesToBits(64)).toBe(256)
  })

  it('handles zero', () => {
    expect(nibblesToBits(0)).toBe(0)
  })
})
