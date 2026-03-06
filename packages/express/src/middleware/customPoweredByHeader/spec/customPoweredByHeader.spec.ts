import {
  describe, expect, it, vi,
} from 'vitest'

import {
  customPoweredByHeader, disableExpressDefaultPoweredByHeader, enableExpressDefaultPoweredByHeader,
} from '../customPoweredByHeader.ts'

describe('customPoweredByHeader', () => {
  const createMockApp = () => ({
    enable: vi.fn(),
    disable: vi.fn(),
  })

  describe('enableExpressDefaultPoweredByHeader', () => {
    it('should call app.enable with x-powered-by', () => {
      const app = createMockApp()
      enableExpressDefaultPoweredByHeader(app as any)
      expect(app.enable).toHaveBeenCalledWith('x-powered-by')
    })
  })

  describe('disableExpressDefaultPoweredByHeader', () => {
    it('should call app.disable with x-powered-by', () => {
      const app = createMockApp()
      disableExpressDefaultPoweredByHeader(app as any)
      expect(app.disable).toHaveBeenCalledWith('x-powered-by')
    })
  })

  describe('customPoweredByHeader middleware', () => {
    it('should set X-Powered-By header to XYO and call next', () => {
      const req = {} as any
      const res = { setHeader: vi.fn() } as any
      const next = vi.fn()

      customPoweredByHeader(req, res, next)

      expect(res.setHeader).toHaveBeenCalledWith('X-Powered-By', 'XYO')
      expect(next).toHaveBeenCalled()
    })

    it('should call setHeader before calling next', () => {
      const callOrder: string[] = []
      const req = {} as any
      const res = {
        setHeader: vi.fn(() => callOrder.push('setHeader')),
      } as any
      const next = vi.fn(() => callOrder.push('next'))

      customPoweredByHeader(req, res, next)

      expect(callOrder).toEqual(['setHeader', 'next'])
    })

    it('should call next exactly once', () => {
      const req = {} as any
      const res = { setHeader: vi.fn() } as any
      const next = vi.fn()

      customPoweredByHeader(req, res, next)

      expect(next).toHaveBeenCalledTimes(1)
    })
  })
})
