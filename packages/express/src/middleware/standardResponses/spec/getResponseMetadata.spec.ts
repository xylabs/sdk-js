import type { Response } from 'express'
import {
  describe, expect, it,
} from 'vitest'

import { getResponseMetadata } from '../getResponseMetadata.ts'

describe('getResponseMetadata', () => {
  it('should return empty meta when no locals.meta exists', () => {
    const mockRes = { locals: {} } as Response
    const result = getResponseMetadata(mockRes)
    expect(result).toEqual({})
  })

  it('should return existing meta properties', () => {
    const mockRes = { locals: { meta: { custom: 'value' } } } as unknown as Response
    const result = getResponseMetadata(mockRes)
    expect(result.custom).toBe('value')
  })

  it('should compute duration when profile with startTime exists', () => {
    const startTime = Date.now() - 100
    const mockRes = { locals: { meta: { profile: { startTime } } } } as unknown as Response

    const result = getResponseMetadata(mockRes)
    const profile = result.profile as { duration: number; endTime: number; startTime: number }

    expect(profile).toBeDefined()
    expect(profile.startTime).toBe(startTime)
    expect(profile.endTime).toBeGreaterThanOrEqual(startTime)
    expect(profile.duration).toBeGreaterThanOrEqual(0)
    expect(profile.duration).toBe(profile.endTime - profile.startTime)
  })

  it('should not modify profile when startTime is not set', () => {
    const mockRes = { locals: { meta: { profile: {} } } } as unknown as Response

    const result = getResponseMetadata(mockRes)

    expect(result.profile).toEqual({})
  })

  it('should not modify meta when profile is not set', () => {
    const mockRes = { locals: { meta: { other: 'data' } } } as unknown as Response

    const result = getResponseMetadata(mockRes)

    expect(result.other).toBe('data')
    expect(result.profile).toBeUndefined()
  })
})
