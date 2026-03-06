import {
  describe, expect, it,
} from 'vitest'

import { hexToBigInt } from '../hexToBigInt.ts'
import type { Hex } from '../hex/index.ts'

describe('hexToBigInt', () => {
  it('converts hex string to bigint', () => {
    expect(hexToBigInt('0a' as Hex)).toBe(10n)
  })

  it('converts zero hex to 0n', () => {
    expect(hexToBigInt('00' as Hex)).toBe(0n)
  })

  it('converts large hex value', () => {
    expect(hexToBigInt('ff' as Hex)).toBe(255n)
  })

  it('converts multi-byte hex', () => {
    expect(hexToBigInt('deadbeef' as Hex)).toBe(0xDEADBEEFn)
  })
})
