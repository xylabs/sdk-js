import { describeIf } from '../describeIf.ts'

describe('describeIf', () => {
  describeIf(true)('This block should run', () => {
    it('should run', () => {
      expect(true).toBeTruthy()
    })
  })
  describeIf(false)('This block should not run', () => {
    it('should not run', () => {
      expect(true).toBeFalsy()
    })
  })
})
