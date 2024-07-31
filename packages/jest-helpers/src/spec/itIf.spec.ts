import { itIf } from '../itIf.ts'

describe('itIf', () => {
  itIf(true)('should run', () => {
    expect(true).toBeTrue()
  })
  itIf(false)('should not run', () => {
    expect(true).toBeFalse()
  })
})
