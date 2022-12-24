import { fulfilled } from './fulfilled'

const getResolvedPromise = () => {
  return Promise.allSettled([Promise.resolve('yes')])
}

const getRejectedPromise = () => {
  return Promise.allSettled([Promise.reject('no')])
}

describe('fulfilled', () => {
  it('returns true for resolved promises', async () => {
    const results = await getResolvedPromise()
    expect(results).toBeTruthy()
    expect(results.length).toBe(1)
    const filtered = results.filter(fulfilled)
    expect(filtered).toBeTruthy()
    expect(filtered.length).toBe(1)
    const value = filtered[0]
    expect(value.value).toBeTruthy()
  })
  it('returns false for rejected promises', () => {
    //
  })
})
