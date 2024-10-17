import {
  describe, expect, test,
} from 'vitest'

import { isArrayBuffer } from './isArrayBuffer.ts'

describe('isArrayBuffer', () => {
  test('actual ArrayBuffer', () => {
    expect(isArrayBuffer(new ArrayBuffer(0))).toBe(true)
  })
  test('UInt8Array.buffer', () => {
    expect(isArrayBuffer(new Uint8Array(0).buffer)).toBe(true)
  })
})
