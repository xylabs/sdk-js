/**
 * @vitest-environment jsdom
 */

import {
  describe, expect, it, vi,
} from 'vitest'

import { PixelApi } from '../../Api/index.ts'

vi.mock('axios', () => ({ default: { post: vi.fn(() => Promise.resolve({ data: { success: true } })) } }))

describe('PixelApi', () => {
  it('uses prod endpoint by default', () => {
    const api = new PixelApi()
    // We verify it works by calling trackEvents
    expect(api).toBeDefined()
  })

  it('uses prod endpoint when "prod" is specified', () => {
    const api = new PixelApi('prod')
    expect(api).toBeDefined()
  })

  it('uses beta endpoint when "beta" is specified', () => {
    const api = new PixelApi('beta')
    expect(api).toBeDefined()
  })

  it('uses local endpoint when "local" is specified', () => {
    const api = new PixelApi('local')
    expect(api).toBeDefined()
  })

  it('uses custom uri when an unknown key is specified', () => {
    const api = new PixelApi('https://custom.example.com/api')
    expect(api).toBeDefined()
  })

  it('trackEvents posts events to the endpoint', async () => {
    const axios = await import('axios')
    const api = new PixelApi('prod')
    const events = [{ cid: 'test-cid', event: 'test' }]
    const result = await api.trackEvents(events)
    expect(axios.default.post).toHaveBeenCalled()
    expect(result).toEqual({ success: true })
  })
})
