import { fulfilledValues } from '../src/fulfilledValues'

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
    const results = promiseSettledResults.reduce(fulfilledValues, [] as string[])
    expect(results).toBeArrayOfSize(1)
    results.map((result) => expect(result).toBe('yes'))
  })
  it('filters values from rejected promises', async () => {
    const promiseSettledResults = await getAllRejectedPromises()
    expect(promiseSettledResults).toBeTruthy()
    expect(promiseSettledResults.length).toBe(1)
    const results = promiseSettledResults.reduce<string[]>(fulfilledValues, [])
    expect(results).toBeArrayOfSize(0)
  })
})
