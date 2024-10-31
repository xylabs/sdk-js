import '@xylabs/vitest-extended'

import {
  describe, expect, it,
} from 'vitest'

import { fulfilled } from '../fulfilled.ts'

const getAllResolvedPromises = () => {
  return Promise.allSettled([Promise.resolve('yes')])
}

const getAllRejectedPromises = () => {
  return Promise.allSettled([Promise.reject('no')])
}

describe('fulfilled', () => {
  it('returns true for resolved promises', async () => {
    const promiseSettledResults = await getAllResolvedPromises()
    expect(promiseSettledResults).toBeTruthy()
    expect(promiseSettledResults.length).toBe(1)
    const results: PromiseFulfilledResult<string>[] = promiseSettledResults.filter(fulfilled)
    expect(results).toBeArrayOfSize(1)
    for (const result of results) expect(result.value).toBe('yes')
  })
  it('returns false for rejected promises', async () => {
    const promiseSettledResults = await getAllRejectedPromises()
    expect(promiseSettledResults).toBeTruthy()
    expect(promiseSettledResults.length).toBe(1)
    const results = promiseSettledResults.filter(fulfilled)
    expect(results).toBeArrayOfSize(0)
  })
})
