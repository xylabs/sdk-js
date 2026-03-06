import {
  describe, expect, it, vi,
} from 'vitest'

import { ApiClient } from '../ApiClient.ts'
import type { ApiConfig } from '../ApiConfig.ts'
import { ApiEndpoint } from '../ApiEndpoint.ts'
import { ApiStage } from '../ApiStage.ts'
import { getApiStage } from '../getApiStage.ts'

class TestApiClient extends ApiClient {
  endPoint() {
    return `https://api.example.com/${this.stage}`
  }

  getStage() { return this.stage }
  getToken() { return this.token }
}

describe('ApiConfig', () => {
  it('can be constructed with required and optional fields', () => {
    const config: ApiConfig = {
      apiDomain: 'https://api.example.com',
      apiKey: 'test-key',
      jwtToken: 'jwt-token',
      userid: 'user-1',
    }
    expect(config.apiDomain).toBe('https://api.example.com')
    expect(config.apiKey).toBe('test-key')
    expect(config.jwtToken).toBe('jwt-token')
    expect(config.userid).toBe('user-1')
  })

  it('only requires apiDomain', () => {
    const config: ApiConfig = { apiDomain: 'https://api.example.com' }
    expect(config.apiDomain).toBe('https://api.example.com')
    expect(config.apiKey).toBeUndefined()
    expect(config.jwtToken).toBeUndefined()
    expect(config.userid).toBeUndefined()
  })

  it('can be used with only apiDomain and apiKey', () => {
    const config: ApiConfig = { apiDomain: 'https://api.example.com', apiKey: 'key-123' }
    expect(config.apiDomain).toBe('https://api.example.com')
    expect(config.apiKey).toBe('key-123')
    expect(config.jwtToken).toBeUndefined()
  })

  it('can be used with only apiDomain and userid', () => {
    const config: ApiConfig = { apiDomain: 'https://api.example.com', userid: 'user-42' }
    expect(config.userid).toBe('user-42')
    expect(config.apiKey).toBeUndefined()
  })
})

describe('ApiClient', () => {
  it('defaults to Prod stage', () => {
    const client = new TestApiClient()
    expect(client.getStage()).toBe(ApiStage.Prod)
  })

  it('accepts custom stage and token', () => {
    const client = new TestApiClient('my-token', ApiStage.Beta)
    expect(client.getStage()).toBe(ApiStage.Beta)
    expect(client.getToken()).toBe('my-token')
  })

  it('returns endpoint', () => {
    const client = new TestApiClient(null, ApiStage.Local)
    expect(client.endPoint()).toBe('https://api.example.com/local')
  })

  it('accepts null token', () => {
    const client = new TestApiClient(null)
    expect(client.getToken()).toBeNull()
    expect(client.getStage()).toBe(ApiStage.Prod)
  })

  it('accepts undefined token and defaults stage', () => {
    const client = new TestApiClient(undefined, undefined)
    expect(client.getToken()).toBeUndefined()
    expect(client.getStage()).toBe(ApiStage.Prod)
  })

  it('uses Local stage when specified', () => {
    const client = new TestApiClient('token', ApiStage.Local)
    expect(client.getStage()).toBe(ApiStage.Local)
    expect(client.endPoint()).toBe('https://api.example.com/local')
  })
})

describe('ApiStage', () => {
  it('has expected values', () => {
    expect(ApiStage.Local).toBe('local')
    expect(ApiStage.Beta).toBe('beta')
    expect(ApiStage.Prod).toBe('prod')
  })

  it('has exactly three stages', () => {
    const values = Object.values(ApiStage)
    expect(values).toHaveLength(3)
    expect(values).toContain('local')
    expect(values).toContain('beta')
    expect(values).toContain('prod')
  })
})

describe('ApiEndpoint', () => {
  it('constructs and has undefined value initially', () => {
    const endpoint = new ApiEndpoint({ apiDomain: 'https://api.example.com' }, 'test')
    expect(endpoint.value).toBeUndefined()
  })

  it('fetch calls axios.get and sets value on 200', async () => {
    const axios = await import('axios')
    const getSpy = vi.spyOn(axios.default, 'get').mockResolvedValue({ status: 200, data: { result: 'ok' } })
    const endpoint = new ApiEndpoint<{ result: string }>({ apiDomain: 'https://api.example.com' }, 'items')
    const result = await endpoint.fetch()
    expect(result).toEqual({ result: 'ok' })
    expect(endpoint.value).toEqual({ result: 'ok' })
    expect(getSpy).toHaveBeenCalledWith('https://api.example.com/items', { headers: undefined })
    getSpy.mockRestore()
  })

  it('fetch throws on non-200 status', async () => {
    const axios = await import('axios')
    const getSpy = vi.spyOn(axios.default, 'get').mockResolvedValue({ status: 404, data: null })
    const endpoint = new ApiEndpoint({ apiDomain: 'https://api.example.com' }, 'missing')
    await expect(endpoint.fetch()).rejects.toThrow('Unexpected Status Code')
    getSpy.mockRestore()
  })

  it('fetch sends Authorization header when jwtToken is set', async () => {
    const axios = await import('axios')
    const getSpy = vi.spyOn(axios.default, 'get').mockResolvedValue({ status: 200, data: 'data' })
    const endpoint = new ApiEndpoint({ apiDomain: 'https://api.example.com', jwtToken: 'Bearer xyz' }, 'secure')
    await endpoint.fetch()
    expect(getSpy).toHaveBeenCalledWith('https://api.example.com/secure', { headers: { Authorization: 'Bearer xyz' } })
    getSpy.mockRestore()
  })

  it('get returns cached value if already fetched', async () => {
    const axios = await import('axios')
    const getSpy = vi.spyOn(axios.default, 'get').mockResolvedValue({ status: 200, data: 'cached-data' })
    const endpoint = new ApiEndpoint<string>({ apiDomain: 'https://api.example.com' }, 'cache')
    await endpoint.fetch()
    getSpy.mockClear()
    const result = await endpoint.get()
    expect(result).toBe('cached-data')
    expect(getSpy).not.toHaveBeenCalled()
    getSpy.mockRestore()
  })

  it('get fetches when no cached value exists', async () => {
    const axios = await import('axios')
    const getSpy = vi.spyOn(axios.default, 'get').mockResolvedValue({ status: 200, data: 'fresh-data' })
    const endpoint = new ApiEndpoint<string>({ apiDomain: 'https://api.example.com' }, 'fresh')
    const result = await endpoint.get()
    expect(result).toBe('fresh-data')
    expect(getSpy).toHaveBeenCalledTimes(1)
    getSpy.mockRestore()
  })

  it('insert calls axios.post and sets value on 200', async () => {
    const axios = await import('axios')
    const postSpy = vi.spyOn(axios.default, 'post').mockResolvedValue({ status: 200, data: { id: 1, name: 'created' } })
    const endpoint = new ApiEndpoint<{ id: number; name: string }>({ apiDomain: 'https://api.example.com' }, 'items')
    const result = await endpoint.insert({ id: 0, name: 'new' })
    expect(result).toEqual({ id: 1, name: 'created' })
    expect(endpoint.value).toEqual({ id: 1, name: 'created' })
    expect(postSpy).toHaveBeenCalledWith('https://api.example.com/items', { id: 0, name: 'new' }, { headers: undefined })
    postSpy.mockRestore()
  })

  it('insert throws on non-200 status', async () => {
    const axios = await import('axios')
    const postSpy = vi.spyOn(axios.default, 'post').mockResolvedValue({ status: 500, data: null })
    const endpoint = new ApiEndpoint({ apiDomain: 'https://api.example.com' }, 'fail')
    await expect(endpoint.insert('data')).rejects.toThrow('Unexpected Status Code')
    postSpy.mockRestore()
  })

  it('insert sends Authorization header when jwtToken is set', async () => {
    const axios = await import('axios')
    const postSpy = vi.spyOn(axios.default, 'post').mockResolvedValue({ status: 200, data: 'ok' })
    const endpoint = new ApiEndpoint({ apiDomain: 'https://api.example.com', jwtToken: 'Bearer abc' }, 'auth')
    await endpoint.insert('payload')
    expect(postSpy).toHaveBeenCalledWith('https://api.example.com/auth', 'payload', { headers: { Authorization: 'Bearer abc' } })
    postSpy.mockRestore()
  })
})

describe('getApiStage', () => {
  it('returns Local for localhost', () => {
    expect(getApiStage('localhost')).toBe(ApiStage.Local)
    expect(getApiStage('localhost:3000')).toBe(ApiStage.Local)
  })

  it('returns Beta for beta subdomain', () => {
    expect(getApiStage('beta.example.com')).toBe(ApiStage.Beta)
  })

  it('returns Prod for other hostnames', () => {
    expect(getApiStage('example.com')).toBe(ApiStage.Prod)
    expect(getApiStage('app.example.com')).toBe(ApiStage.Prod)
  })

  it('returns Prod for www subdomain', () => {
    expect(getApiStage('www.example.com')).toBe(ApiStage.Prod)
  })

  it('returns Beta for beta. prefix regardless of rest', () => {
    expect(getApiStage('beta.api.example.com')).toBe(ApiStage.Beta)
  })

  it('returns Local for localhost with path-like suffix', () => {
    expect(getApiStage('localhost:8080')).toBe(ApiStage.Local)
  })

  it('returns Prod for empty string', () => {
    expect(getApiStage('')).toBe(ApiStage.Prod)
  })
})
