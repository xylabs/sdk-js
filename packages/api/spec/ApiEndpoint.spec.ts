import { ApiEndpoint } from '../src/ApiEndpoint'

describe('ApiEndpoint', () => {
  test('checking happy path', () => {
    const apiEndpoint = new ApiEndpoint({ apiDomain: 'sample.com' }, '/')
    expect(apiEndpoint).toBeDefined()
  })
})
