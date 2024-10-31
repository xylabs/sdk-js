import {
  describe, expect, test,
} from 'vitest'

import { ApiEndpoint } from '../ApiEndpoint.ts'

describe('ApiEndpoint', () => {
  test('checking happy path', () => {
    const apiEndpoint = new ApiEndpoint({ apiDomain: 'sample.com' }, '/')
    expect(apiEndpoint).toBeDefined()
  })
})
