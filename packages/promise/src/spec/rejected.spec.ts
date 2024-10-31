import {
  describe, expect, it,
} from 'vitest'

import { rejected } from '../rejected.ts'

const getAllResolvedPromises = () => {
  return Promise.allSettled([Promise.resolve('yes')])
}

const getAllRejectedPromises = () => {
  return Promise.allSettled([Promise.reject('no')])
}

describe('rejected', () => {
  it('returns true for rejected promises', async () => {
    const results = await getAllRejectedPromises()
    expect(results).toBeTruthy()
    expect(results.length).toBe(1)
    const filtered = results.filter(rejected)
    expect(filtered).toBeArrayOfSize(1)
    const value = filtered[0]
    expect(value.reason).toBeTruthy()
  })
  it('returns false for resolved promises', async () => {
    const results = await getAllResolvedPromises()
    expect(results).toBeTruthy()
    expect(results.length).toBe(1)
    const filtered = results.filter(rejected)
    expect(filtered).toBeArrayOfSize(0)
  })
})
