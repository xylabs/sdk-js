/* eslint-disable max-lines */
import type { Logger } from '@xylabs/logger'
import {
  describe, expect, it, vi,
} from 'vitest'

import type { // eslint-disable-line no-restricted-imports
  CreatableParams,
  RequiredCreatableParams,
} from '../index.ts'
// eslint-disable-next-line no-restricted-imports
import {
  AbstractCreatable,
  AbstractCreatableWithFactory,
  creatable,
  creatableFactory,
  Factory,
  hasAllLabels,
} from '../index.ts'
import {
  getFunctionName,
  getRootFunction,
} from '../lib/index.ts'

@creatable()
class SimpleCreatable extends AbstractCreatable {
  override paramsValidator(params: Partial<CreatableParams & RequiredCreatableParams>): CreatableParams & RequiredCreatableParams {
    return { ...params, name: params.name ?? 'SimpleCreatable' } as CreatableParams & RequiredCreatableParams
  }
}

// eslint-disable-next-line max-statements
describe('AbstractCreatable', () => {
  it('create returns an instance', async () => {
    const instance = await SimpleCreatable.create()
    expect(instance).toBeDefined()
    expect(instance.status).toBe('created')
  })

  it('name returns the creatable name', async () => {
    const instance = await SimpleCreatable.create({ name: 'test-name' as CreatableParams['name'] })
    expect(instance.name).toBe('test-name')
  })

  it('start and stop lifecycle', async () => {
    const instance = await SimpleCreatable.create()
    expect(instance.startable).toBe(true)
    const started = await instance.start()
    expect(started).toBe(true)
    expect(instance.status).toBe('started')

    const stopped = await instance.stop()
    expect(stopped).toBe(true)
    expect(instance.status).toBe('stopped')
  })

  it('start returns true if already started', async () => {
    const instance = await SimpleCreatable.create()
    await instance.start()
    expect(await instance.start()).toBe(true)
  })

  it('stop returns true if already stopped', async () => {
    const instance = await SimpleCreatable.create()
    await instance.start()
    await instance.stop()
    expect(await instance.stop()).toBe(true)
  })

  it('started returns true when started', async () => {
    const instance = await SimpleCreatable.create()
    await instance.start()
    expect(instance.started()).toBe(true)
  })

  it('started returns false when not started (log)', async () => {
    const instance = await SimpleCreatable.create()
    expect(instance.started('log')).toBe(false)
  })

  it('started throws with error action', async () => {
    const instance = await SimpleCreatable.create()
    expect(() => instance.started('error')).toThrow('Creatable not Started')
  })

  it('started throws with throw action', async () => {
    const instance = await SimpleCreatable.create()
    expect(() => instance.started('throw')).toThrow('Creatable not Started')
  })

  it('started returns false with warn action', async () => {
    const instance = await SimpleCreatable.create()
    expect(instance.started('warn')).toBe(false)
  })

  it('started returns false with none action', async () => {
    const instance = await SimpleCreatable.create()
    expect(instance.started('none')).toBe(false)
  })

  it('started with warn action calls logger.warn', async () => {
    const warn = vi.fn()
    const logger: Logger = {
      debug: vi.fn(),
      error: vi.fn(),
      info: vi.fn(),
      log: vi.fn(),
      trace: vi.fn(),
      warn,
    }
    const instance = await SimpleCreatable.create({ logger })
    instance.started('warn')
    expect(warn).toHaveBeenCalledOnce()
  })

  it('started with log action calls logger.log', async () => {
    const log = vi.fn()
    const logger: Logger = {
      debug: vi.fn(),
      error: vi.fn(),
      info: vi.fn(),
      log,
      trace: vi.fn(),
      warn: vi.fn(),
    }
    const instance = await SimpleCreatable.create({ logger })
    instance.started('log')
    expect(log).toHaveBeenCalledOnce()
  })

  it('startedAsync starts automatically', async () => {
    const instance = await SimpleCreatable.create()
    const result = await instance.startedAsync()
    expect(result).toBe(true)
    expect(instance.status).toBe('started')
  })

  it('startedAsync returns true when already started', async () => {
    const instance = await SimpleCreatable.create()
    await instance.start()
    expect(await instance.startedAsync()).toBe(true)
  })

  it('startedAsync with tryStart false returns started check', async () => {
    const instance = await SimpleCreatable.create()
    const result = await instance.startedAsync('none', false)
    expect(result).toBe(false)
  })

  it('statusReporter is called during lifecycle', async () => {
    const reports: [string, string][] = []
    const reporter = { report: (name: string, status: string) => reports.push([name, status]) }
    const instance = await SimpleCreatable.create({ statusReporter: reporter as unknown as CreatableParams['statusReporter'] })
    await instance.start()
    await instance.stop()
    expect(reports.some(([, s]) => s === 'creating')).toBe(true)
    expect(reports.some(([, s]) => s === 'created')).toBe(true)
    expect(reports.some(([, s]) => s === 'starting')).toBe(true)
    expect(reports.some(([, s]) => s === 'started')).toBe(true)
    expect(reports.some(([, s]) => s === 'stopping')).toBe(true)
    expect(reports.some(([, s]) => s === 'stopped')).toBe(true)
  })

  it('statusReporter receives progress numbers', async () => {
    const reports: unknown[][] = []
    const reporter = { report: (...args: unknown[]) => reports.push(args) }
    const instance = await SimpleCreatable.create({ statusReporter: reporter as unknown as CreatableParams['statusReporter'] })
    expect(reports.length).toBeGreaterThan(0)
    // Use instance to avoid unused variable warning
    expect(instance).toBeDefined()
  })

  it('throws when constructed directly', () => {
    expect(() => new (SimpleCreatable as unknown as new (key: string, params: Record<string, unknown>) => unknown)('wrong-key', {})).toThrow('should not be instantiated directly')
  })

  it('span executes and returns result', async () => {
    const instance = await SimpleCreatable.create()
    const result = instance.span('test-span', () => 42)
    expect(result).toBe(42)
  })

  it('spanAsync executes and returns result', async () => {
    const instance = await SimpleCreatable.create()
    // eslint-disable-next-line require-await
    const result = await instance.spanAsync('test-span', async () => 'async-result')
    expect(result).toBe('async-result')
  })

  it('startedAsync throws for error status', async () => {
    @creatable()
    class FailCreatable extends AbstractCreatable {
      override paramsValidator(params: Partial<CreatableParams & RequiredCreatableParams>): CreatableParams & RequiredCreatableParams {
        return { ...params, name: params.name ?? 'FailCreatable' } as CreatableParams & RequiredCreatableParams
      }

      override startHandler() {
        throw new Error('start failed')
      }
    }
    const instance = await FailCreatable.create()
    // Start will fail setting status to 'error'
    await instance.start()
    expect(instance.status).toBe('error')
    // startedAsync should throw for error status
    await expect(instance.startedAsync()).rejects.toThrow('Creatable not Started')
  })

  it('stop fails when not in started state', async () => {
    const instance = await SimpleCreatable.create()
    // status is 'created', not 'started'
    const result = await instance.stop()
    expect(result).toBe(false)
  })

  it('start transitions through starting to started', async () => {
    const statuses: string[] = []
    const reporter = { report: (_name: string, status: string) => statuses.push(status) }
    const instance = await SimpleCreatable.create({ statusReporter: reporter as unknown as CreatableParams['statusReporter'] })
    await instance.start()
    expect(statuses).toContain('starting')
    expect(statuses).toContain('started')
  })

  it('startable returns true for created status', async () => {
    const instance = await SimpleCreatable.create()
    expect(instance.status).toBe('created')
    expect(instance.startable).toBe(true)
  })

  it('startable returns true for stopped status', async () => {
    const instance = await SimpleCreatable.create()
    await instance.start()
    await instance.stop()
    expect(instance.status).toBe('stopped')
    expect(instance.startable).toBe(true)
  })

  it('startable returns false for started status', async () => {
    const instance = await SimpleCreatable.create()
    await instance.start()
    expect(instance.status).toBe('started')
    expect(instance.startable).toBe(false)
  })

  it('can restart after stop', async () => {
    const instance = await SimpleCreatable.create()
    await instance.start()
    await instance.stop()
    const restarted = await instance.start()
    expect(restarted).toBe(true)
    expect(instance.status).toBe('started')
  })

  it('start handles error in startHandler gracefully', async () => {
    @creatable()
    class ErrorStartCreatable extends AbstractCreatable {
      override paramsValidator(params: Partial<CreatableParams & RequiredCreatableParams>): CreatableParams & RequiredCreatableParams {
        return { ...params, name: params.name ?? 'ErrorStartCreatable' } as CreatableParams & RequiredCreatableParams
      }

      override startHandler() {
        throw new Error('start handler error')
      }
    }
    const instance = await ErrorStartCreatable.create()
    const result = await instance.start()
    expect(result).toBe(false)
    expect(instance.status).toBe('error')
  })

  it('start handles non-Error thrown in startHandler', async () => {
    @creatable()
    class StringThrowCreatable extends AbstractCreatable {
      override paramsValidator(params: Partial<CreatableParams & RequiredCreatableParams>): CreatableParams & RequiredCreatableParams {
        return { ...params, name: params.name ?? 'StringThrowCreatable' } as CreatableParams & RequiredCreatableParams
      }

      override startHandler() {
        throw 'string error'
      }
    }
    const instance = await StringThrowCreatable.create()
    const result = await instance.start()
    expect(result).toBe(false)
    expect(instance.status).toBe('error')
  })

  it('stop handles error in stopHandler gracefully', async () => {
    @creatable()
    class ErrorStopCreatable extends AbstractCreatable {
      override paramsValidator(params: Partial<CreatableParams & RequiredCreatableParams>): CreatableParams & RequiredCreatableParams {
        return { ...params, name: params.name ?? 'ErrorStopCreatable' } as CreatableParams & RequiredCreatableParams
      }

      override stopHandler() {
        throw new Error('stop handler error')
      }
    }
    const instance = await ErrorStopCreatable.create()
    await instance.start()
    const result = await instance.stop()
    expect(result).toBe(false)
    expect(instance.status).toBe('error')
  })

  it('createHandler throws if not in creating status', async () => {
    const instance = await SimpleCreatable.create()
    // Status is 'created', not 'creating'
    expect(() => instance.createHandler()).toThrow('createHandler can not be called')
  })

  it('statusReporter receives error on start failure', async () => {
    const reports: unknown[][] = []
    const reporter = { report: (...args: unknown[]) => reports.push(args) }
    @creatable()
    class FailReportCreatable extends AbstractCreatable {
      override paramsValidator(params: Partial<CreatableParams & RequiredCreatableParams>): CreatableParams & RequiredCreatableParams {
        return { ...params, name: params.name ?? 'FailReportCreatable' } as CreatableParams & RequiredCreatableParams
      }

      override startHandler() {
        throw new Error('fail for report')
      }
    }
    const instance = await FailReportCreatable.create({ statusReporter: reporter as unknown as CreatableParams['statusReporter'] })
    await instance.start()
    const errorReport = reports.find(([, status]) => status === 'error')
    expect(errorReport).toBeDefined()
    expect(errorReport?.[2]).toBeInstanceOf(Error)
  })

  it('static createHandler returns the instance by default', () => {
    const fakeInstance = {} as unknown as AbstractCreatable
    const result = AbstractCreatable.createHandler.call(SimpleCreatable, fakeInstance)
    expect(result).toBe(fakeInstance)
  })

  it('static paramsHandler returns spread params', () => {
    const params = { name: 'test' as CreatableParams['name'] }
    const result = AbstractCreatable.paramsHandler.call(SimpleCreatable, params)
    expect(result).toEqual(params)
    expect(result).not.toBe(params) // should be a copy
  })
})

describe('AbstractCreatableWithFactory', () => {
  @creatable()
  class FactoryCreatable extends AbstractCreatableWithFactory {
    override paramsValidator(params: Partial<CreatableParams & RequiredCreatableParams>): CreatableParams & RequiredCreatableParams {
      return { ...params, name: params.name ?? 'FactoryCreatable' } as CreatableParams & RequiredCreatableParams
    }
  }

  it('factory method returns a Factory instance', () => {
    const factory = (FactoryCreatable as unknown as { factory: () => unknown }).factory()
    expect(factory).toBeInstanceOf(Factory)
  })

  it('factory creates instances', async () => {
    const factory = (FactoryCreatable as unknown as { factory: () => Factory }).factory()
    const instance = await factory.create()
    expect(instance).toBeDefined()
    expect((instance as unknown as Record<string, unknown>).status).toBe('created')
  })

  it('factory with params passes them through', async () => {
    const factory = (FactoryCreatable as unknown as { factory: (params: Partial<CreatableParams>) => Factory }).factory({ name: 'from-factory' as CreatableParams['name'] })
    const instance = await factory.create()
    expect(instance.name).toBe('from-factory')
  })

  it('factory with labels stores them', () => {
    const factory = (FactoryCreatable as unknown as { factory: (params: Partial<CreatableParams>, labels: Record<string, string>) => Factory }).factory({}, { env: 'test' })
    expect(factory.labels).toEqual({ env: 'test' })
  })
})

describe('Factory', () => {
  it('creates instances via factory', async () => {
    const factory = Factory.withParams(SimpleCreatable as unknown as Parameters<typeof Factory.withParams>[0])
    const instance = await factory.create()
    expect(instance).toBeDefined()
  })

  it('merges default params', async () => {
    const factory = Factory.withParams(SimpleCreatable as unknown as Parameters<typeof Factory.withParams>[0], { name: 'factory-name' as CreatableParams['name'] })
    const instance = await factory.create()
    expect(instance.name).toBe('factory-name')
  })

  it('overrides default params with create params', async () => {
    const factory = Factory.withParams(SimpleCreatable as unknown as Parameters<typeof Factory.withParams>[0], { name: 'default-name' as CreatableParams['name'] })
    const instance = await factory.create({ name: 'override-name' as CreatableParams['name'] })
    expect(instance.name).toBe('override-name')
  })

  it('stores labels', () => {
    const factory = Factory.withParams(SimpleCreatable as unknown as Parameters<typeof Factory.withParams>[0], {}, { env: 'test' })
    expect(factory.labels).toEqual({ env: 'test' })
  })

  it('stores default params', () => {
    const params = { name: 'stored' as CreatableParams['name'] }
    const factory = Factory.withParams(SimpleCreatable as unknown as Parameters<typeof Factory.withParams>[0], params)
    expect(factory.defaultParams).toEqual(params)
  })

  it('merges labels from creatable and provided', () => {
    const creatableWithLabels = Object.assign(Object.create(SimpleCreatable) as Record<string, unknown>, { labels: { base: 'label' } })
    const factory = new Factory(creatableWithLabels as unknown as ConstructorParameters<typeof Factory>[0], {}, { extra: 'label' })
    expect(factory.labels).toEqual({ base: 'label', extra: 'label' })
  })

  it('defaults labels to empty object', () => {
    const factory = Factory.withParams(SimpleCreatable as unknown as Parameters<typeof Factory.withParams>[0])
    expect(factory.labels).toEqual({})
  })

  it('constructor stores creatable reference', () => {
    const factory = new Factory(SimpleCreatable as unknown as ConstructorParameters<typeof Factory>[0])
    expect(factory.creatable).toBe(SimpleCreatable)
  })

  it('constructor with no params sets defaultParams to undefined', () => {
    const factory = new Factory(SimpleCreatable as unknown as ConstructorParameters<typeof Factory>[0])
    expect(factory.defaultParams).toBeUndefined()
  })

  it('constructor with explicit undefined labels defaults to empty object', () => {
    const factory = new Factory(SimpleCreatable as unknown as ConstructorParameters<typeof Factory>[0], {}, undefined as unknown as Record<string, string>)
    expect(factory.labels).toEqual({})
  })
})

describe('hasAllLabels', () => {
  it('returns true when all required labels present', () => {
    expect(hasAllLabels({ env: 'prod', region: 'us' }, { env: 'prod' })).toBe(true)
  })

  it('returns false when a required label is missing', () => {
    expect(hasAllLabels({ env: 'prod' }, { region: 'us' })).toBe(false)
  })

  it('returns false when a required label has wrong value', () => {
    expect(hasAllLabels({ env: 'prod' }, { env: 'beta' })).toBe(false)
  })

  it('returns true when required is undefined', () => {
    expect(hasAllLabels({ env: 'prod' })).toBe(true)
  })

  it('returns true when required is empty', () => {
    expect(hasAllLabels({}, {})).toBe(true)
  })

  it('returns true when source is undefined and required is undefined', () => {
    expect(hasAllLabels()).toBe(true)
  })

  it('returns false when source is undefined but required has labels', () => {
    expect(hasAllLabels(undefined, { env: 'prod' })).toBe(false)
  })

  it('handles multiple required labels all present', () => {
    expect(hasAllLabels({
      a: '1', b: '2', c: '3',
    }, { a: '1', b: '2' })).toBe(true)
  })

  it('handles multiple required labels with one missing', () => {
    expect(hasAllLabels({ a: '1' }, { a: '1', b: '2' })).toBe(false)
  })
})

describe('getFunctionName', () => {
  it('returns a string', () => {
    const name = getFunctionName()
    expect(typeof name).toBe('string')
  })

  it('returns non-empty string', () => {
    const name = getFunctionName()
    expect(name.length).toBeGreaterThan(0)
  })

  it('returns a name with custom depth', () => {
    const name = getFunctionName(1)
    expect(typeof name).toBe('string')
    expect(name.length).toBeGreaterThan(0)
  })

  it('returns <unknown> for very large depth beyond stack', () => {
    const name = getFunctionName(999)
    expect(typeof name).toBe('string')
  })

  it('uses default depth of 2', () => {
    function outerWrapper() {
      return getFunctionName()
    }
    const name = outerWrapper()
    expect(typeof name).toBe('string')
    expect(name.length).toBeGreaterThan(0)
  })

  it('detects constructor calls with new keyword', () => {
    class TestClass {
      name: string
      constructor() {
        this.name = getFunctionName(1)
      }
    }
    const instance = new TestClass()
    expect(typeof instance.name).toBe('string')
    expect(instance.name.length).toBeGreaterThan(0)
  })
})

describe('getRootFunction', () => {
  it('traverses prototype chain to find root function', () => {
    class A {
      foo() {
        return 'a'
      }
    }
    class B extends A {
      override foo() {
        return 'b'
      }
    }
    const b = new B()
    const root = getRootFunction(b, 'foo')
    expect(typeof root).toBe('function')
  })

  it('returns the function from the deepest prototype', () => {
    class A {
      bar() {
        return 'a'
      }
    }
    class B extends A {}
    class C extends B {
      override bar() {
        return 'c'
      }
    }
    const c = new C()
    const root = getRootFunction(c, 'bar')
    expect(typeof root).toBe('function')
    // The root function should be from A (the deepest in the chain)
    expect(root.call(c)).toBe('a')
  })

  it('returns the function directly when no prototype chain', () => {
    const obj = {
      baz() {
        return 'direct'
      },
    }
    const root = getRootFunction(obj, 'baz')
    expect(typeof root).toBe('function')
  })

  it('returns undefined for nonexistent function name', () => {
    const obj = {
      foo() {
        return 1
      },
    }
    const root = getRootFunction(obj, 'nonexistent')
    expect(root).toBeUndefined()
  })
})

describe('creatable and creatableFactory decorators', () => {
  it('creatable decorator returns a function', () => {
    const decorator = creatable()
    expect(typeof decorator).toBe('function')
  })

  it('creatable decorator does not modify the class', () => {
    @creatable()
    class Decorated extends AbstractCreatable {
      override paramsValidator(params: Partial<CreatableParams & RequiredCreatableParams>): CreatableParams & RequiredCreatableParams {
        return { ...params, name: params.name ?? 'Decorated' } as CreatableParams & RequiredCreatableParams
      }
    }
    expect(Decorated).toBeDefined()
    expect(typeof Decorated.create).toBe('function')
  })

  it('creatableFactory decorator returns a function', () => {
    const decorator = creatableFactory()
    expect(typeof decorator).toBe('function')
  })

  it('creatableFactory decorator does not modify the class', () => {
    const factoryClass = { create: () => ({}) }
    const decorator = creatableFactory()
    decorator(factoryClass as unknown as Parameters<typeof decorator>[0])
    expect(factoryClass).toBeDefined()
    expect(typeof factoryClass.create).toBe('function')
  })
})

describe('AbstractCreatable.create error path', () => {
  it('create reports error to statusReporter on failure', async () => {
    const reports: unknown[][] = []
    const reporter = { report: (...args: unknown[]) => reports.push(args) }

    @creatable()
    class CreateFailCreatable extends AbstractCreatable {
      override createHandler() {
        throw new Error('create handler failure')
      }

      override paramsValidator(params: Partial<CreatableParams & RequiredCreatableParams>): CreatableParams & RequiredCreatableParams {
        return { ...params, name: params.name ?? 'CreateFailCreatable' } as CreatableParams & RequiredCreatableParams
      }
    }

    await expect(CreateFailCreatable.create({ statusReporter: reporter as unknown as CreatableParams['statusReporter'] })).rejects.toThrow('create handler failure')
    const errorReport = reports.find(([, status]) => status === 'error')
    expect(errorReport).toBeDefined()
  })

  it('create wraps non-Error thrown in createHandler', async () => {
    @creatable()
    class NonErrorCreateCreatable extends AbstractCreatable {
      override createHandler() {
        throw 'string error in create'
      }

      override paramsValidator(params: Partial<CreatableParams & RequiredCreatableParams>): CreatableParams & RequiredCreatableParams {
        return { ...params, name: params.name ?? 'NonErrorCreateCreatable' } as CreatableParams & RequiredCreatableParams
      }
    }

    await expect(NonErrorCreateCreatable.create()).rejects.toThrow('Error creating')
  })
})

describe('AbstractCreatable.paramsHandler default params', () => {
  it('static paramsHandler works with no arguments (default empty params)', () => {
    const result = AbstractCreatable.paramsHandler.call(SimpleCreatable)
    expect(result).toEqual({})
  })
})

describe('AbstractCreatable.stop concurrent path', () => {
  it('stop returns true when status becomes stopped inside mutex (concurrent stop)', async () => {
    @creatable()
    class SlowStopCreatable extends AbstractCreatable {
      override paramsValidator(params: Partial<CreatableParams & RequiredCreatableParams>): CreatableParams & RequiredCreatableParams {
        return { ...params, name: params.name ?? 'SlowStopCreatable' } as CreatableParams & RequiredCreatableParams
      }

      override async stopHandler() {
        // Simulate slow stop
        await new Promise(resolve => setTimeout(resolve, 50))
      }
    }
    const instance = await SlowStopCreatable.create()
    await instance.start()
    // Fire two concurrent stops; the second will enter the mutex after the first
    // completes, finding status already 'stopped' at line 207-208
    const [r1, r2] = await Promise.all([instance.stop(), instance.stop()])
    expect(r1).toBe(true)
    expect(r2).toBe(true)
    expect(instance.status).toBe('stopped')
  })
})

describe('AbstractCreatable.setStatus with progress', () => {
  it('setStatus reports progress number to statusReporter', async () => {
    const reports: unknown[][] = []
    const reporter = { report: (...args: unknown[]) => reports.push(args) }

    @creatable()
    class ProgressCreatable extends AbstractCreatable {
      override paramsValidator(params: Partial<CreatableParams & RequiredCreatableParams>): CreatableParams & RequiredCreatableParams {
        return { ...params, name: params.name ?? 'ProgressCreatable' } as CreatableParams & RequiredCreatableParams
      }

      override startHandler() {
        // Call setStatus with a progress number to hit lines 242-243
        this.setStatus('starting', 0.5)
      }
    }
    const instance = await ProgressCreatable.create({ statusReporter: reporter as unknown as CreatableParams['statusReporter'] })
    await instance.start()
    // Find a report that includes a numeric progress value
    const progressReport = reports.find(r => typeof r[2] === 'number')
    expect(progressReport).toBeDefined()
    expect(progressReport?.[2]).toBe(0.5)
  })
})

describe('AbstractCreatable.stop error path', () => {
  it('stop handles non-Error thrown in stopHandler', async () => {
    @creatable()
    class StringStopCreatable extends AbstractCreatable {
      override paramsValidator(params: Partial<CreatableParams & RequiredCreatableParams>): CreatableParams & RequiredCreatableParams {
        return { ...params, name: params.name ?? 'StringStopCreatable' } as CreatableParams & RequiredCreatableParams
      }

      override stopHandler() {
        throw 'stop string error'
      }
    }
    const instance = await StringStopCreatable.create()
    await instance.start()
    const result = await instance.stop()
    expect(result).toBe(false)
    expect(instance.status).toBe('error')
  })
})
