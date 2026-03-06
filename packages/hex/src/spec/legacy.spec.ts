import {
  describe, expect, it,
} from 'vitest'

import { toHexLegacy } from '../hex/index.ts'

describe('toHexLegacy', () => {
  it('converts an ArrayBuffer to hex string', () => {
    const buf = new Uint8Array([0xde, 0xad, 0xbe, 0xef]).buffer
    expect(toHexLegacy(buf)).toBe('deadbeef')
  })

  it('handles empty ArrayBuffer', () => {
    const buf = new ArrayBuffer(0)
    expect(toHexLegacy(buf)).toBe('')
  })

  it('pads single-digit hex values with leading zero', () => {
    const buf = new Uint8Array([0x0a, 0x0b]).buffer
    expect(toHexLegacy(buf)).toBe('0a0b')
  })

  it('handles all zeros', () => {
    const buf = new Uint8Array([0x00, 0x00, 0x00]).buffer
    expect(toHexLegacy(buf)).toBe('000000')
  })

  it('handles max byte values', () => {
    const buf = new Uint8Array([0xff, 0xff]).buffer
    expect(toHexLegacy(buf)).toBe('ffff')
  })
})
