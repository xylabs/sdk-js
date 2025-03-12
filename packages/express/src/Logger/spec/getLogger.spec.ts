/* eslint-disable @typescript-eslint/no-explicit-any */
import { mockDeep } from 'vitest-mock-extended'
globalThis.console = mockDeep<Console>()
import '@xylabs/vitest-extended'

import {
  describe, expect, it,
} from 'vitest'
import type { Logger } from 'winston'

import { getLogger } from '../getLogger.ts'

type LoggerKey = keyof Logger
const loggerKeys: LoggerKey[] = ['error', 'warn', 'log', 'info', 'debug']

describe('getLogger', () => {
  describe('verbosity', () => {
    it.each(loggerKeys)('logs log with %s verbosity', (verbosity: LoggerKey) => {
      const logger = getLogger('all')
      const logMethod = (logger as any)[verbosity]
      expect(logMethod).toBeFunction()
      logMethod(`${String(verbosity)} log from unit test`)
    })
  })
})
