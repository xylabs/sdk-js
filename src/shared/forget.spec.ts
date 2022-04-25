import { delay } from './delay'
import { forget } from './forget'


describe('foget', () => {
  test('checking happy path', async () => {
    let cancelled = false
    forget(delay(100), {delay: 200, cancel: () => cancelled = true })
    await delay(300)
    expect(cancelled).toBeFalsy()
  })
  test('checking unhappy path', async () => {
    let cancelled = false
    forget(delay(200), {delay: 100, cancel: () => cancelled = true })
    await delay(300)
    expect(cancelled).toBeTruthy()
  })
})
