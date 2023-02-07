import { testIf } from './testIf'

describe('itIf', () => {
  testIf(true)('should run', () => {
    expect(true).toBeTrue()
  })
  testIf(false)('should not run', () => {
    expect(true).toBeFalse()
  })
})
