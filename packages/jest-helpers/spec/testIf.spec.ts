import { testIf } from '../src/testIf'

describe('testIf', () => {
  testIf(true)('should run', () => {
    expect(true).toBeTrue()
  })
  testIf(false)('should not run', () => {
    expect(true).toBeFalse()
  })
})
