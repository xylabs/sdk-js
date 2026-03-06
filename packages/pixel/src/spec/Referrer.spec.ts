/**
 * @vitest-environment jsdom
 */

import {
  beforeEach, describe, expect, it,
} from 'vitest'

import { Referrer } from '../Referrer.ts'

describe('Referrer', () => {
  beforeEach(() => {
    localStorage.clear()
    sessionStorage.clear()
    // jsdom sets document.referrer to '' by default
  })

  it('stores document.referrer when no prior values exist', () => {
    // document.referrer is '' in jsdom
    const ref = new Referrer()
    expect(ref.session).toBe('')
    expect(ref.local).toBe('')
  })

  it('uses session storage value when present', () => {
    sessionStorage.setItem('_coin_referrer', 'https://session-ref.com')
    const ref = new Referrer()
    expect(ref.session).toBe('https://session-ref.com')
  })

  it('uses local storage value when present', () => {
    localStorage.setItem('_coin_referrer', 'https://local-ref.com')
    const ref = new Referrer()
    expect(ref.local).toBe('https://local-ref.com')
  })

  it('toJson returns undefined when both are empty strings', () => {
    const ref = new Referrer()
    expect(ref.toJson()).toBeUndefined()
  })

  it('toJson returns object when local has a value', () => {
    localStorage.setItem('_coin_referrer', 'https://local-ref.com')
    const ref = new Referrer()
    expect(ref.toJson()).toEqual({
      local: 'https://local-ref.com',
      session: '',
    })
  })

  it('toJson returns object when session has a value', () => {
    sessionStorage.setItem('_coin_referrer', 'https://session-ref.com')
    const ref = new Referrer()
    expect(ref.toJson()).toEqual({
      local: '',
      session: 'https://session-ref.com',
    })
  })

  it('getFromLocal returns undefined for empty string in localStorage', () => {
    localStorage.setItem('_coin_referrer', '')
    const ref = new Referrer()
    // Empty string should be treated as no value, falling back to document.referrer
    expect(ref.local).toBe('')
  })

  it('getFromSession returns undefined for empty string in sessionStorage', () => {
    sessionStorage.setItem('_coin_referrer', '')
    const ref = new Referrer()
    // Empty string should be treated as no value, falling back to document.referrer
    expect(ref.session).toBe('')
  })
})
