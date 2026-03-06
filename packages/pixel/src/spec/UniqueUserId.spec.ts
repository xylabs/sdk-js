/**
 * @vitest-environment jsdom
 */

import {
  beforeEach, describe, expect, it, vi,
} from 'vitest'

import { UniqueUserId } from '../UniqueUserId.ts'

describe('UniqueUserId', () => {
  beforeEach(() => {
    localStorage.clear()
    vi.stubGlobal('crypto', { randomUUID: vi.fn(() => 'mock-uuid-1234') })
  })

  it('generates a new id when nothing in localStorage', () => {
    const uid = new UniqueUserId()
    expect(uid.id).toBe('mock-uuid-1234')
    expect(localStorage.getItem('_coin_cid')).toBe('mock-uuid-1234')
  })

  it('uses existing id from localStorage', () => {
    localStorage.setItem('_coin_cid', 'existing-id')
    const uid = new UniqueUserId()
    expect(uid.id).toBe('existing-id')
  })

  it('toString returns the id', () => {
    const uid = new UniqueUserId()
    expect(uid.toString()).toBe('mock-uuid-1234')
  })
})
