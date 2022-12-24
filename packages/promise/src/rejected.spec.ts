import { rejected } from './rejected'

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
    expect(filtered).toBeTruthy()
    expect(filtered.length).toBe(1)
    const value = filtered[0]
    expect(value.reason).toBeTruthy()
  })
  it('returns false for resolved promises', async () => {
    const results = await getAllResolvedPromises()
    expect(results).toBeTruthy()
    expect(results.length).toBe(1)
    const filtered = results.filter(rejected)
    expect(filtered).toBeTruthy()
    expect(filtered.length).toBe(0)
  })
})
