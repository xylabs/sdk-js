/**
 * @vitest-environment jsdom
 */

import {
  beforeEach, describe, expect, it, vi,
} from 'vitest'

import { PixelApi } from '../Api/Api.ts'
import { XyPixel } from '../Pixel.ts'
import { XyUserEventHandler } from '../XyUserEventHandler.ts'

vi.mock('axios', () => ({
  default: { post: vi.fn(() => Promise.resolve({ data: { success: true } })) },
}))

describe('XyUserEventHandler', () => {
  let handler: XyUserEventHandler
  let mockApi: { trackEvents: ReturnType<typeof vi.fn> }

  beforeEach(() => {
    localStorage.clear()
    sessionStorage.clear()
    // @ts-expect-error accessing private static for test reset
    XyPixel._instance = undefined
    mockApi = { trackEvents: vi.fn(() => Promise.resolve()) }
    XyPixel.api = mockApi as unknown as PixelApi
    XyPixel.init('test-pixel')
    handler = new XyUserEventHandler()
  })

  it('sends FunnelStarted event', async () => {
    await handler.funnelStarted({ name: 'test-funnel' })
    expect(mockApi.trackEvents).toHaveBeenCalledTimes(1)
    const events = mockApi.trackEvents.mock.calls[0][0]
    expect(events[0].event).toBe('FunnelStarted')
  })

  it('sends Purchase event', async () => {
    await handler.purchase({ id: 'purchase-1', price: 9.99 })
    expect(mockApi.trackEvents).toHaveBeenCalledTimes(1)
    const events = mockApi.trackEvents.mock.calls[0][0]
    expect(events[0].event).toBe('Purchase')
  })

  it('sends TestStarted event', async () => {
    await handler.testStarted({ name: 'ab-test' })
    expect(mockApi.trackEvents).toHaveBeenCalledTimes(1)
    const events = mockApi.trackEvents.mock.calls[0][0]
    expect(events[0].event).toBe('TestStarted')
  })

  it('sends ViewPage event for userClick', async () => {
    await handler.userClick({ elementName: 'btn', elementType: 'button' })
    expect(mockApi.trackEvents).toHaveBeenCalledTimes(1)
    const events = mockApi.trackEvents.mock.calls[0][0]
    expect(events[0].event).toBe('ViewPage')
  })

  it('sends ViewContent event', async () => {
    await handler.viewContent({ name: 'article', path: '/blog/post-1' })
    expect(mockApi.trackEvents).toHaveBeenCalledTimes(1)
    const events = mockApi.trackEvents.mock.calls[0][0]
    expect(events[0].event).toBe('ViewContent')
  })
})
