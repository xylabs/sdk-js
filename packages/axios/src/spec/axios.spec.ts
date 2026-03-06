import { Axios } from 'axios'
import {
  describe, expect, it,
} from 'vitest'

import { axios, axiosJson } from '../index.ts'
import { axiosJsonConfig } from '../axiosJsonConfig.ts'
import { AxiosJson } from '../AxiosJson.ts'

describe('axiosJsonConfig', () => {
  it('returns config with headers', () => {
    const config = axiosJsonConfig()
    expect(config.headers).toBeDefined()
    expect(config.headers?.get('Content-Type')).toBe('application/json')
    expect(config.headers?.get('Accept')).toContain('application/json')
  })

  it('merges custom headers', () => {
    const config = axiosJsonConfig({ headers: { 'X-Custom': 'test' } })
    expect(config.headers?.get('X-Custom')).toBe('test')
    expect(config.headers?.get('Content-Type')).toBe('application/json')
  })

  it('transformResponse parses JSON', () => {
    const config = axiosJsonConfig()
    const transform = config.transformResponse as (data: string) => unknown
    expect(transform('{"a":1}')).toEqual({ a: 1 })
  })

  it('transformResponse returns null for invalid JSON', () => {
    const config = axiosJsonConfig()
    const transform = config.transformResponse as (data: string) => unknown
    expect(transform('not json')).toBeNull()
  })

  it('transformRequest returns JSON string for small data', () => {
    const config = axiosJsonConfig()
    const transform = config.transformRequest as (data: unknown, headers: any) => unknown
    const headers = { set: () => {} }
    const result = transform({ a: 1 }, headers)
    expect(result).toBe('{"a":1}')
  })

  it('transformRequest compresses large data', () => {
    const config = axiosJsonConfig({ compressLength: 10 })
    const transform = config.transformRequest as (data: unknown, headers: any) => unknown
    const setCalls: [string, string][] = []
    const headers = { set: (k: string, v: string) => setCalls.push([k, v]) }
    const largeData = { data: 'x'.repeat(100) }
    const result = transform(largeData, headers)
    expect(result).toBeInstanceOf(ArrayBuffer)
    expect(setCalls.some(([k]) => k === 'Content-Encoding')).toBe(true)
  })

  it('transformRequest returns JSON string when data is null', () => {
    const config = axiosJsonConfig()
    const transform = config.transformRequest as (data: unknown, headers: any) => unknown
    const headers = { set: () => {} }
    expect(transform(null, headers)).toBe('null')
  })
})

describe('AxiosJson', () => {
  it('axiosConfig returns a config object', () => {
    const config = AxiosJson.axiosConfig()
    expect(config).toBeDefined()
    expect(config.headers).toBeDefined()
  })

  it('axiosConfig merges custom config', () => {
    const config = AxiosJson.axiosConfig({ compressLength: 512 })
    expect(config).toBeDefined()
  })

  it('create returns an Axios instance', () => {
    const instance = AxiosJson.create()
    expect(instance).toBeInstanceOf(Axios)
  })

  it('create with custom config returns an Axios instance', () => {
    const instance = AxiosJson.create({ compressLength: 256 })
    expect(instance).toBeInstanceOf(Axios)
  })

  it('constructor creates an instance (deprecated)', () => {
    // eslint-disable-next-line @typescript-eslint/no-deprecated
    const instance = new AxiosJson()
    expect(instance).toBeDefined()
    // eslint-disable-next-line @typescript-eslint/no-deprecated
    expect(instance).toBeInstanceOf(AxiosJson)
  })
})

describe('index exports', () => {
  it('axiosJson is an Axios instance', () => {
    expect(axiosJson).toBeInstanceOf(Axios)
  })

  it('axios is the same as axiosJson (deprecated alias)', () => {
    expect(axios).toBe(axiosJson)
  })
})

describe('transformRequest edge cases', () => {
  it('does not compress when headers is undefined', () => {
    const config = axiosJsonConfig({ compressLength: 1 })
    const transform = config.transformRequest as (data: unknown, headers: undefined) => unknown
    const largeData = { data: 'x'.repeat(100) }
    const result = transform(largeData, undefined)
    expect(typeof result).toBe('string')
  })

  it('does not compress when data is falsy', () => {
    const config = axiosJsonConfig({ compressLength: 1 })
    const transform = config.transformRequest as (data: unknown, headers: any) => unknown
    const headers = { set: () => {} }
    const result = transform(null, headers)
    expect(result).toBe('null')
  })

  it('does not compress when length is under default threshold', () => {
    const config = axiosJsonConfig()
    const transform = config.transformRequest as (data: unknown, headers: any) => unknown
    const headers = { set: () => {} }
    const result = transform({ a: 1 }, headers)
    expect(typeof result).toBe('string')
    expect(result).toBe('{"a":1}')
  })
})
