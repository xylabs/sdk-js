import { itIf } from '../itIf.ts'

describe('itIf', () => {
  itIf(true)('should run', () => {
    expect(true).toBeTruthy()
  })
  itIf(false)('should not run', () => {
    expect(true).toBeFalsy()
  })
})
