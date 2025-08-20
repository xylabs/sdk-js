import {
  describe, expect, it,
} from 'vitest'

import { isArrayBuffer } from '../isArrayBuffer.ts'

const Undefined = undefined

describe('isArrayBuffer', () => {
  it('correctly identifies ArrayBuffer objects', () => {
    expect(isArrayBuffer(new ArrayBuffer(10))).toBe(true)

    expect(isArrayBuffer(new Uint8Array())).toBe(false)
    expect(isArrayBuffer({})).toBe(false)
    expect(isArrayBuffer(null)).toBe(false)
    expect(isArrayBuffer(Undefined)).toBe(false)
  })
})
