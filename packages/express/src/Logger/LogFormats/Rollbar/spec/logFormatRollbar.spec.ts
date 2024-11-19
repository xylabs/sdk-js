import '@xylabs/vitest-extended'

import {
  describe, expect, it,
} from 'vitest'

import { logFormatRollbar } from '../logFormatRollbar.ts'

describe('logFormatRollbar', () => {
  it('provides a logger format', () => {
    expect(logFormatRollbar).toBeObject()
  })
})
