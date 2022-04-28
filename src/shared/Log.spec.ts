import { Log } from './Log'

describe('Log', () => {
  test('checking happy path', () => {
    const log = new Log({ devMode: false })
    expect(log).toBeDefined()
  })
  test('rollbar error methods not to be called when in dev', () => {
    jest.spyOn(global.console, 'error').mockImplementation()
    const log = new Log({ devMode: true, rollbarToken: 'mock' })
    const errorSpy = jest.spyOn((log as any).rollbar, 'error')
    log.error(['ERROR'])
    //@ts-ignore
    expect(errorSpy).toBeCalledTimes(0)
  })
  test('rollbar error methods to be called when not in dev', () => {
    jest.spyOn(global.console, 'error').mockImplementation()
    const log = new Log({ devMode: false, rollbarToken: 'mock' })
    const errorSpy = jest.spyOn((log as any).rollbar, 'error')
    log.error(['ERROR'])
    //@ts-ignore
    expect(errorSpy).toHaveBeenCalled()
  })
  test('rollbar warn methods not to be called when in dev', () => {
    jest.spyOn(global.console, 'warn').mockImplementation()
    const log = new Log({ devMode: true, rollbarToken: 'mock' })
    const warnSpy = jest.spyOn((log as any).rollbar, 'warn')
    log.warn(['WARNING'])
    //@ts-ignore
    expect(warnSpy).toBeCalledTimes(0)
  })
  test('rollbar warn methods to be called when not in dev', () => {
    jest.spyOn(global.console, 'warn').mockImplementation()
    const log = new Log({ devMode: false, rollbarToken: 'mock' })
    const warnSpy = jest.spyOn((log as any).rollbar, 'error')
    log.error(['WARNING'])
    //@ts-ignore
    expect(warnSpy).toHaveBeenCalled()
  })

})
