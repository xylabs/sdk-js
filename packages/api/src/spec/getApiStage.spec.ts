import { getApiStage } from '../getApiStage.ts'

describe('getApiStage', () => {
  test('checking happy path', () => {
    const apiStage = getApiStage('localhost')
    expect(apiStage).toBeDefined()
  })
})
