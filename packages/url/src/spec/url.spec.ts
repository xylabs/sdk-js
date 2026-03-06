import {
  describe, expect, it,
} from 'vitest'

import { isLocalhost, URL as BrowserURL } from '../index-browser.ts'
import { URL as NeutralURL } from '../index-neutral.ts'
import { URL as NodeURL } from '../index-node.ts'

describe('url (node)', () => {
  it('URL is available from node entry', () => {
    expect(NodeURL).toBeDefined()
  })

  it('URL can parse a url', () => {
    const url = new NodeURL('https://example.com/path?q=1')
    expect(url.hostname).toBe('example.com')
    expect(url.pathname).toBe('/path')
    expect(url.searchParams.get('q')).toBe('1')
  })

  it('re-exports isLocalhost', () => {
    expect(typeof isLocalhost).toBe('function')
    expect(isLocalhost('localhost')).toBe(true)
  })
})

describe('url (browser)', () => {
  it('URL is available from browser entry', () => {
    expect(BrowserURL).toBeDefined()
  })

  it('URL can construct and parse', () => {
    const url = new BrowserURL('https://test.com/foo')
    expect(url.hostname).toBe('test.com')
  })
})

describe('url (neutral)', () => {
  it('URL is available from neutral entry', () => {
    expect(NeutralURL).toBeDefined()
  })

  it('URL can construct and parse', () => {
    const url = new NeutralURL('https://neutral.com/bar')
    expect(url.hostname).toBe('neutral.com')
  })
})
