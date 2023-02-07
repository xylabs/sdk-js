import { itIf } from './itIf'

describe('itIf', () => {
  itIf(true)('should run', () => {
    expect(true).toBeTrue()
  })
  itIf(false)('should not run', () => {
    expect(true).toBeFalse()
  })
})
