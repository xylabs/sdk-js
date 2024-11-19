import '@xylabs/vitest-extended'

import {
  describe, expect, it,
} from 'vitest'

import { logFormatStructured } from '../logFormatStructured.ts'

describe('logFormatStructured', () => {
  it('provides a logger format', () => {
    expect(logFormatStructured).toBeObject()
  })
})
