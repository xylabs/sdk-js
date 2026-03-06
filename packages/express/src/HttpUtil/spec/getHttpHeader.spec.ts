import {
  describe, expect, it,
} from 'vitest'

import { getHttpHeader } from '../getHttpHeader.ts'

describe('getHttpHeader', () => {
  it('should return the header value when it is a string', () => {
    const req = { headers: { 'content-type': 'application/json' } } as any
    expect(getHttpHeader('content-type', req)).toBe('application/json')
  })

  it('should return the first value when header is an array', () => {
    const req = { headers: { 'x-custom': ['first', 'second'] } } as any
    expect(getHttpHeader('x-custom', req)).toBe('first')
  })

  it('should return undefined when header does not exist', () => {
    const req = { headers: {} } as any
    expect(getHttpHeader('x-missing', req)).toBeUndefined()
  })

  it('should return undefined when header value is undefined', () => {
    const req = { headers: { 'x-undef': undefined } } as any
    expect(getHttpHeader('x-undef', req)).toBeUndefined()
  })

  it('should return the first value from an array with one element', () => {
    const req = { headers: { 'x-single': ['only'] } } as any
    expect(getHttpHeader('x-single', req)).toBe('only')
  })

  it('should return undefined for empty array header', () => {
    const req = { headers: { 'x-empty': [] } } as any
    expect(getHttpHeader('x-empty', req)).toBeUndefined()
  })

  it('should be case-sensitive on header name lookup', () => {
    const req = { headers: { 'x-custom': 'value' } } as any
    expect(getHttpHeader('X-Custom', req)).toBeUndefined()
    expect(getHttpHeader('x-custom', req)).toBe('value')
  })
})
