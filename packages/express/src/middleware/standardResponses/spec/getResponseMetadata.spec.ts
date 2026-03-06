import {
  describe, expect, it, vi,
} from 'vitest'

import type { Response } from 'express'

import { getResponseMetadata } from '../getResponseMetadata.ts'

describe('getResponseMetadata', () => {
  it('should return empty meta when no locals.meta exists', () => {
    const mockRes = { locals: {} } as Response
    const result = getResponseMetadata(mockRes)
    expect(result).toEqual({})
  })

  it('should return existing meta properties', () => {
    const mockRes = { locals: { meta: { custom: 'value' } } } as any
    const result = getResponseMetadata(mockRes)
    expect(result.custom).toBe('value')
  })

  it('should compute duration when profile with startTime exists', () => {
    const startTime = Date.now() - 100
    const mockRes = {
      locals: {
        meta: {
          profile: { startTime },
        },
      },
    } as any

    const result = getResponseMetadata(mockRes)

    expect(result.profile).toBeDefined()
    expect(result.profile.startTime).toBe(startTime)
    expect(result.profile.endTime).toBeGreaterThanOrEqual(startTime)
    expect(result.profile.duration).toBeGreaterThanOrEqual(0)
    expect(result.profile.duration).toBe(result.profile.endTime - result.profile.startTime)
  })

  it('should not modify profile when startTime is not set', () => {
    const mockRes = {
      locals: {
        meta: {
          profile: {},
        },
      },
    } as any

    const result = getResponseMetadata(mockRes)

    expect(result.profile).toEqual({})
  })

  it('should not modify meta when profile is not set', () => {
    const mockRes = {
      locals: {
        meta: { other: 'data' },
      },
    } as any

    const result = getResponseMetadata(mockRes)

    expect(result.other).toBe('data')
    expect(result.profile).toBeUndefined()
  })
})
