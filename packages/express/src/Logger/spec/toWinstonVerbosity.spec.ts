import '@xylabs/vitest-extended'

import {
  describe, expect, it,
} from 'vitest'

import type { LoggerVerbosity } from '../LoggerVerbosity.ts'
import { toWinstonVerbosity } from '../toWinstonVerbosity.ts'

const loggerKeys: LoggerVerbosity[] = ['error', 'warn', 'info', 'debug', 'all']

describe('toWinstonVerbosity', () => {
  it.each(loggerKeys)('provides a default logger', (verbosity) => {
    const actual = toWinstonVerbosity(verbosity)
    expect(actual).toBeString()
  })
})
