import '@xylabs/vitest-extended'

import {
  describe, expect, it,
} from 'vitest'

import { getDefaultLogger } from '../getDefaultLogger.ts'

describe('getDefaultLogger', () => {
  it('provides a default logger', () => {
    const logger = getDefaultLogger()
    expect(logger).toBeObject()
  })
})
