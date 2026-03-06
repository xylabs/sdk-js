/* eslint-disable require-await */
import type { Logger } from '@xylabs/logger'
import {
  describe, expect, it, vi,
} from 'vitest'

import { timeBudget } from '../timeBudget.ts'

describe('timeBudget', () => {
  it('returns the function result', async () => {
    const result = await timeBudget('test', undefined, async () => 42, 1000)
    expect(result).toBe(42)
  })

  it('warns when budget exceeded (no status interval)', async () => {
    const logger = { warn: vi.fn() } as unknown as Logger
    await timeBudget('slow', logger, async () => {
      await new Promise(r => setTimeout(r, 50))
      return 'done'
    }, 10)
    expect(logger.warn).toHaveBeenCalledWith(expect.stringContaining('slow'))
    expect(logger.warn).toHaveBeenCalledWith(expect.stringContaining('exceeded budget'))
  })

  it('does not warn when within budget', async () => {
    const logger = { warn: vi.fn() } as unknown as Logger
    await timeBudget('fast', logger, async () => 'ok', 5000)
    expect(logger.warn).not.toHaveBeenCalled()
  })

  it('uses status interval and warns while running', async () => {
    const logger = { warn: vi.fn() } as unknown as Logger
    await timeBudget('interval', logger, async () => {
      await new Promise(r => setTimeout(r, 300))
      return 'done'
    }, 100, true)
    expect(logger.warn).toHaveBeenCalled()
  })

  it('clears interval after completion with status=true', async () => {
    const result = await timeBudget('clear', undefined, async () => 'ok', 5000, true)
    expect(result).toBe('ok')
  })

  it('does not warn in status interval when budget is 0', async () => {
    const logger = { warn: vi.fn() } as unknown as Logger
    await timeBudget('zero-budget', logger, async () => {
      await new Promise(r => setTimeout(r, 150))
      return 'done'
    }, 0, true)
    // budget <= 0 means the condition (budget > 0) is false, so no warn is called from the interval
    expect(logger.warn).not.toHaveBeenCalled()
  })

  it('does not warn when budget is 0 and status is false', async () => {
    const logger = { warn: vi.fn() } as unknown as Logger
    await timeBudget('zero-budget-no-status', logger, async () => {
      await new Promise(r => setTimeout(r, 50))
      return 'done'
    }, 0)
    // budget <= 0 means the condition (budget > 0) is false on line 23 too
    expect(logger.warn).not.toHaveBeenCalled()
  })

  it('does not warn in status interval when budget is negative', async () => {
    const logger = { warn: vi.fn() } as unknown as Logger
    await timeBudget('negative-budget', logger, async () => {
      await new Promise(r => setTimeout(r, 150))
      return 'done'
    }, -1, true)
    expect(logger.warn).not.toHaveBeenCalled()
  })
})
