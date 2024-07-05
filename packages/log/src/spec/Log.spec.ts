import { Log } from '../Log'

describe('Log', () => {
  test('checking happy path', () => {
    const log = new Log({ devMode: false })
    expect(log).toBeDefined()
  })
  test('rollbar error methods not to be called when in dev', () => {
    jest.spyOn(global.console, 'error').mockImplementation()
    const log = new Log({ devMode: true, rollbarToken: 'mock' })
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const errorSpy = jest.spyOn((log as any).rollbar, 'error')
    log.error(['ERROR'])
    expect(errorSpy).toHaveBeenCalledTimes(0)
  })
  test('rollbar error methods to be called when not in dev', () => {
    jest.spyOn(global.console, 'error').mockImplementation()
    const log = new Log({ devMode: false, rollbarToken: 'mock' })
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const errorSpy = jest.spyOn((log as any).rollbar, 'error')
    log.error(['ERROR'])
    expect(errorSpy).toHaveBeenCalled()
  })
  test('rollbar warn methods not to be called when in dev', () => {
    jest.spyOn(global.console, 'warn').mockImplementation()
    const log = new Log({ devMode: true, rollbarToken: 'mock' })
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const warnSpy = jest.spyOn((log as any).rollbar, 'warn')
    log.warn(['WARNING'])
    expect(warnSpy).toHaveBeenCalledTimes(0)
  })
  test('rollbar warn methods to be called when not in dev', () => {
    jest.spyOn(global.console, 'warn').mockImplementation()
    const log = new Log({ devMode: false, rollbarToken: 'mock' })
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const warnSpy = jest.spyOn((log as any).rollbar, 'error')
    log.error(['WARNING'])
    expect(warnSpy).toHaveBeenCalled()
  })
})
