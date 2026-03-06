import {
  describe, expect, it,
} from 'vitest'

import { isLocalhost, URL } from '../index-node.ts'

describe('url (node)', () => {
  it('URL is available', () => {
    expect(URL).toBeDefined()
  })

  it('URL can parse a url', () => {
    const url = new URL('https://example.com/path?q=1')
    expect(url.hostname).toBe('example.com')
    expect(url.pathname).toBe('/path')
    expect(url.searchParams.get('q')).toBe('1')
  })

  it('re-exports isLocalhost', () => {
    expect(typeof isLocalhost).toBe('function')
    expect(isLocalhost('localhost')).toBe(true)
  })
})
