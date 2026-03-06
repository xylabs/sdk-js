import '@xylabs/vitest-extended'

import {
  describe, expect, it,
} from 'vitest'

import { logFormatLocalDev } from '../logFormatLocalDev.ts'

describe('logFormatLocalDev', () => {
  it('provides a logger format', () => {
    expect(logFormatLocalDev).toBeObject()
  })

  it('formats log info with timestamp and level', () => {
    const info = {
      level: 'info',
      message: 'test message',
      timestamp: '2024-01-01T00:00:00.000Z',
      [Symbol.for('level')]: 'info',
    }
    const result = logFormatLocalDev.transform(info)
    expect(result).toBeDefined()
  })
})
