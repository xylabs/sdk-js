import type { Request, Response } from 'express'
import {
  describe, expect, it, vi,
} from 'vitest'

vi.mock('../../../Logger/getDefaultLogger.ts', () => ({
  getDefaultLogger: () => ({
    error: vi.fn(),
    log: vi.fn(),
  }),
}))

import {
  DefaultJsonBodyParserOptions,
  DefaultJsonBodyParserOptionsLimit,
  DefaultJsonBodyParserOptionsTypes,
  getJsonBodyParser,
  getJsonBodyParserOptions,
  jsonBodyParser,
} from '../jsonBodyParser.ts'

describe('jsonBodyParser', () => {
  describe('DefaultJsonBodyParserOptionsLimit', () => {
    it('should be 100kb', () => {
      expect(DefaultJsonBodyParserOptionsLimit).toBe('100kb')
    })
  })

  describe('DefaultJsonBodyParserOptionsTypes', () => {
    it('should include application/json and text/json', () => {
      expect(DefaultJsonBodyParserOptionsTypes).toContain('application/json')
      expect(DefaultJsonBodyParserOptionsTypes).toContain('text/json')
      expect(DefaultJsonBodyParserOptionsTypes).toHaveLength(2)
    })
  })

  describe('DefaultJsonBodyParserOptions', () => {
    it('should have the default limit and type', () => {
      expect(DefaultJsonBodyParserOptions.limit).toBe('100kb')
      expect(DefaultJsonBodyParserOptions.type).toEqual(['application/json', 'text/json'])
    })
  })

  describe('getJsonBodyParserOptions', () => {
    it('should return defaults when no options provided', () => {
      expect(getJsonBodyParserOptions()).toEqual(DefaultJsonBodyParserOptions)
    })

    it('should return defaults when undefined passed', () => {
      expect(getJsonBodyParserOptions()).toEqual(DefaultJsonBodyParserOptions)
    })

    it('should merge provided options with defaults', () => {
      const result = getJsonBodyParserOptions({ limit: '1mb' })
      expect(result.limit).toBe('1mb')
      expect(result.type).toEqual(DefaultJsonBodyParserOptionsTypes)
    })

    it('should allow overriding type', () => {
      const result = getJsonBodyParserOptions({ type: 'application/vnd.api+json' })
      expect(result.type).toBe('application/vnd.api+json')
      expect(result.limit).toBe(DefaultJsonBodyParserOptionsLimit)
    })
  })

  describe('getJsonBodyParser', () => {
    it('should return a middleware function', () => {
      const parser = getJsonBodyParser()
      expect(typeof parser).toBe('function')
    })

    it('should return a middleware function with custom options', () => {
      const parser = getJsonBodyParser({ limit: '1mb' })
      expect(typeof parser).toBe('function')
    })

    it('should call next when parsing succeeds on empty body', () => {
      const parser = getJsonBodyParser()
      const mockReq = {
        headers: {}, on: vi.fn(), removeListener: vi.fn(),
      } as unknown as Request
      const mockRes = { on: vi.fn() } as unknown as Response
      const mockNext = vi.fn()

      // bodyParser.json will call next since there is no content-type header
      parser(mockReq, mockRes, mockNext)
      expect(mockNext).toHaveBeenCalled()
    })

    it('should accept custom options and return working middleware', () => {
      const parser = getJsonBodyParser({ limit: '50kb', type: 'application/json' })
      const mockReq = {
        headers: {}, on: vi.fn(), removeListener: vi.fn(),
      } as unknown as Request
      const mockRes = { on: vi.fn() } as unknown as Response
      const mockNext = vi.fn()

      parser(mockReq, mockRes, mockNext)
      expect(mockNext).toHaveBeenCalled()
    })
  })

  describe('jsonBodyParser', () => {
    it('should be a middleware function', () => {
      expect(typeof jsonBodyParser).toBe('function')
    })

    it('should call next when invoked with a request without json content-type', () => {
      const mockReq = {
        headers: {}, on: vi.fn(), removeListener: vi.fn(),
      } as unknown as Request
      const mockRes = { on: vi.fn() } as unknown as Response
      const mockNext = vi.fn()

      jsonBodyParser(mockReq, mockRes, mockNext)
      expect(mockNext).toHaveBeenCalled()
    })
  })
})
