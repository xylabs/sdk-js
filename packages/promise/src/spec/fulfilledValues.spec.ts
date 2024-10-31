import '@xylabs/vitest-extended'

import {
  describe, expect, it,
} from 'vitest'

import { fulfilledValues } from '../fulfilledValues.ts'

const getAllResolvedPromises = () => {
  return Promise.allSettled([Promise.resolve('yes')])
}

const getAllRejectedPromises = () => {
  return Promise.allSettled([Promise.reject('no')])
}

describe('fulfilledValues', () => {
  it('returns values for resolved promises', async () => {
    const promiseSettledResults = await getAllResolvedPromises()
    expect(promiseSettledResults).toBeTruthy()
    expect(promiseSettledResults.length).toBe(1)
    // eslint-disable-next-line unicorn/no-array-reduce
    const results = promiseSettledResults.reduce(fulfilledValues, [] as string[])
    expect(results).toBeArrayOfSize(1)
    for (const result of results) expect(result).toBe('yes')
  })
  it('filters values from rejected promises', async () => {
    const promiseSettledResults = await getAllRejectedPromises()
    expect(promiseSettledResults).toBeTruthy()
    expect(promiseSettledResults.length).toBe(1)
    // eslint-disable-next-line unicorn/no-array-reduce
    const results = promiseSettledResults.reduce<string[]>(fulfilledValues, [])
    expect(results).toBeArrayOfSize(0)
  })
})
