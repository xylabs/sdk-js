/**
 * @vitest-environment jsdom
 */

import {
  beforeEach, describe, expect, it, vi,
} from 'vitest'

describe('getSystemInfo', () => {
  beforeEach(() => {
    vi.resetModules()
  })

  it('returns parsed browser info from user agent', async () => {
    const { getSystemInfo } = await import('../../getSystemInfo.ts')
    const info = getSystemInfo()
    expect(info).toBeDefined()
    // Bowser should parse something from the jsdom user agent
    if (info) {
      expect(info).toHaveProperty('browser')
      expect(info).toHaveProperty('os')
      expect(info).toHaveProperty('engine')
    }
  })

  it('caches the result on subsequent calls', async () => {
    const { getSystemInfo } = await import('../../getSystemInfo.ts')
    const first = getSystemInfo()
    const second = getSystemInfo()
    expect(first).toBe(second) // same reference
  })

  it('handles error in Bowser gracefully', async () => {
    // Force navigator.userAgent to something that might cause issues
    const consoleSpy = vi.spyOn(console, 'log').mockImplementation(() => {})
    vi.stubGlobal('navigator', { userAgent: '' })

    const { getSystemInfo } = await import('../../getSystemInfo.ts')
    const info = getSystemInfo()
    // Should either return undefined or a result, but not throw
    expect(() => getSystemInfo()).not.toThrow()
    consoleSpy.mockRestore()
    // If it failed, info would be undefined
    expect(info === undefined || typeof info === 'object').toBe(true)
  })
})
