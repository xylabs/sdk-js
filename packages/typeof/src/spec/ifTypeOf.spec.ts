import {
  describe, expect, it,
} from 'vitest'

import { ifTypeOf } from '../ifTypeOf.ts'

describe('ifTypeOf', () => {
  it('calls trueFunc when type matches', () => {
    expect(ifTypeOf<string, number>('string', 'hello', v => v.length)).toBe(5)
  })

  it('returns undefined when type does not match', () => {
    expect(ifTypeOf<string, number>('string', 42, v => v.length)).toBeUndefined()
  })

  it('calls isFunc when provided and type matches', () => {
    expect(ifTypeOf<number, string>('number', 5, v => `${v}`, v => v > 3)).toBe('5')
  })

  it('returns undefined when isFunc returns false', () => {
    expect(ifTypeOf<number, string>('number', 2, v => `${v}`, v => v > 3)).toBeUndefined()
  })

  it('works with array type', () => {
    expect(ifTypeOf<number[], number>('array', [1, 2, 3], v => v.length)).toBe(3)
  })
})
