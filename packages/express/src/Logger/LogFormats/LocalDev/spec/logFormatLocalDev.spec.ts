import '@xylabs/vitest-extended'

import {
  describe, expect, it,
} from 'vitest'

import { logFormatLocalDev } from '../logFormatLocalDev.ts'

describe('logFormatLocalDev', () => {
  it('provides a logger format', () => {
    expect(logFormatLocalDev).toBeObject()
  })
})
