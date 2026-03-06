import {
  describe, expect, it, vi,
} from 'vitest'

import type { Response } from 'express'

import {
  clearRawResponseFormat,
  isRawResponseFormatSet,
  setRawResponseFormat,
  standardResponses,
} from '../standardResponses.ts'

describe('standardResponses', () => {
  describe('setRawResponseFormat', () => {
    it('should set rawResponse to true on res.locals', () => {
      const mockRes = { locals: {} } as Response
      setRawResponseFormat(mockRes)
      expect(mockRes.locals.rawResponse).toBe(true)
    })
  })

  describe('clearRawResponseFormat', () => {
    it('should set rawResponse to false on res.locals', () => {
      const mockRes = { locals: { rawResponse: true } } as any
      clearRawResponseFormat(mockRes)
      expect(mockRes.locals.rawResponse).toBe(false)
    })
  })

  describe('isRawResponseFormatSet', () => {
    it('should return true when rawResponse is true', () => {
      const mockRes = { locals: { rawResponse: true } } as any
      expect(isRawResponseFormatSet(mockRes)).toBe(true)
    })

    it('should return false when rawResponse is false', () => {
      const mockRes = { locals: { rawResponse: false } } as any
      expect(isRawResponseFormatSet(mockRes)).toBe(false)
    })

    it('should return false when rawResponse is undefined', () => {
      const mockRes = { locals: {} } as Response
      expect(isRawResponseFormatSet(mockRes)).toBe(false)
    })

    it('should return false when rawResponse is null', () => {
      const mockRes = { locals: { rawResponse: null } } as any
      expect(isRawResponseFormatSet(mockRes)).toBe(false)
    })
  })

  describe('setRawResponseFormat followed by clearRawResponseFormat', () => {
    it('should toggle rawResponse from true to false', () => {
      const mockRes = { locals: {} } as Response
      setRawResponseFormat(mockRes)
      expect(isRawResponseFormatSet(mockRes)).toBe(true)
      clearRawResponseFormat(mockRes)
      expect(isRawResponseFormatSet(mockRes)).toBe(false)
    })
  })

  describe('standardResponses middleware export', () => {
    it('should be a function (express middleware)', () => {
      expect(typeof standardResponses).toBe('function')
    })
  })
})
