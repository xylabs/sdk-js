/**
 * @vitest-environment jsdom
 */

import {
  beforeEach, describe, expect, it,
} from 'vitest'

import { UtmFields } from '../../UtmFields.ts'

describe('UtmFields', () => {
  beforeEach(() => {
    localStorage.clear()
    // Reset URL to clean state
    globalThis.history.pushState({}, '', '/')
  })

  it('initializes with empty fields when localStorage is empty', () => {
    const utm = new UtmFields()
    expect(utm.fields).toEqual([])
  })

  it('parses stored fields from localStorage', () => {
    const stored = [{ source: 'google' }]
    localStorage.setItem('_coin_utm', JSON.stringify(stored))
    const utm = new UtmFields()
    expect(utm.fields).toEqual(stored)
  })

  it('handles invalid JSON in localStorage gracefully', () => {
    localStorage.setItem('_coin_utm', 'not-json')
    const utm = new UtmFields()
    expect(utm.fields).toEqual([])
  })

  it('resets fields if stored value is not an array', () => {
    localStorage.setItem('_coin_utm', JSON.stringify({ source: 'google' }))
    const utm = new UtmFields()
    expect(utm.fields).toEqual([])
  })

  it('getUtmRecord extracts utm params from query string', () => {
    globalThis.history.pushState({}, '', '/?utm_source=google&utm_medium=cpc&other=value')
    const utm = new UtmFields()
    const record = utm.getUtmRecord()
    expect(record).toEqual({ source: 'google', medium: 'cpc' })
  })

  it('getUtmRecord returns null when no utm params exist', () => {
    globalThis.history.pushState({}, '', '/?foo=bar')
    const utm = new UtmFields()
    const record = utm.getUtmRecord()
    expect(record).toBeNull()
  })

  it('getUtmRecord returns null for empty query string', () => {
    globalThis.history.pushState({}, '', '/')
    const utm = new UtmFields()
    const record = utm.getUtmRecord()
    expect(record).toBeNull()
  })

  it('update adds new utm record to fields', () => {
    globalThis.history.pushState({}, '', '/?utm_source=twitter')
    const utm = new UtmFields()
    // Constructor already calls update(), so the field should be there
    expect(utm.fields).toEqual([{ source: 'twitter' }])
  })

  it('update does not add duplicate record', () => {
    globalThis.history.pushState({}, '', '/?utm_source=twitter')
    const utm = new UtmFields()
    utm.update()
    // Should still be just one entry
    expect(utm.fields).toEqual([{ source: 'twitter' }])
  })

  it('update adds when record differs from last entry', () => {
    globalThis.history.pushState({}, '', '/?utm_source=twitter')
    const utm = new UtmFields()
    expect(utm.fields).toHaveLength(1)

    globalThis.history.pushState({}, '', '/?utm_source=facebook')
    utm.update()
    expect(utm.fields).toHaveLength(2)
    expect(utm.fields[1]).toEqual({ source: 'facebook' })
  })

  it('toString returns JSON string of fields', () => {
    globalThis.history.pushState({}, '', '/?utm_source=google')
    const utm = new UtmFields()
    expect(utm.toString()).toBe(JSON.stringify([{ source: 'google' }]))
  })

  it('persists updated fields to localStorage', () => {
    globalThis.history.pushState({}, '', '/?utm_source=google')

    new UtmFields()
    const stored = localStorage.getItem('_coin_utm')
    expect(stored).toBe(JSON.stringify([{ source: 'google' }]))
  })
})
