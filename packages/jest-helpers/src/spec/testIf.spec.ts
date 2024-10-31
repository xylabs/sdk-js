import { testIf } from '../testIf.ts'

describe('testIf', () => {
  testIf(true)('should run', () => {
    expect(true).toBeTruthy()
  })
  testIf(false)('should not run', () => {
    expect(true).toBeFalsy()
  })
})
