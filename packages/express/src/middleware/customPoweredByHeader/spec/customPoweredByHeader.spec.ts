import type {
  Express, Request, Response,
} from 'express'
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
      enableExpressDefaultPoweredByHeader(app as unknown as Express)
      expect(app.enable).toHaveBeenCalledWith('x-powered-by')
    })
  })

  describe('disableExpressDefaultPoweredByHeader', () => {
    it('should call app.disable with x-powered-by', () => {
      const app = createMockApp()
      disableExpressDefaultPoweredByHeader(app as unknown as Express)
      expect(app.disable).toHaveBeenCalledWith('x-powered-by')
    })
  })

  describe('customPoweredByHeader middleware', () => {
    it('should set X-Powered-By header to XYO and call next', () => {
      const req = {} as Request
      const setHeader = vi.fn()
      const res = { setHeader } as unknown as Response
      const next = vi.fn()

      customPoweredByHeader(req, res, next)

      expect(setHeader).toHaveBeenCalledWith('X-Powered-By', 'XYO')
      expect(next).toHaveBeenCalled()
    })

    it('should call setHeader before calling next', () => {
      const callOrder: string[] = []
      const req = {} as Request
      const res = { setHeader: vi.fn(() => callOrder.push('setHeader')) } as unknown as Response
      const next = vi.fn(() => callOrder.push('next'))

      customPoweredByHeader(req, res, next)

      expect(callOrder).toEqual(['setHeader', 'next'])
    })

    it('should call next exactly once', () => {
      const req = {} as Request
      const res = { setHeader: vi.fn() } as unknown as Response
      const next = vi.fn()

      customPoweredByHeader(req, res, next)

      expect(next).toHaveBeenCalledTimes(1)
    })
  })
})
