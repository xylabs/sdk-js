import {
  describe, expect, it,
} from 'vitest'

import { isBrowser, isNode, isWebworker } from '../index.ts'

describe('platform', () => {
  it('isNode returns true in node environment', () => {
    expect(isNode()).toBe(true)
  })

  it('isBrowser returns false in node environment', () => {
    expect(isBrowser()).toBe(false)
  })

  it('isWebworker returns false in node environment', () => {
    expect(isWebworker()).toBe(false)
  })
})
