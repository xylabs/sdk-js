import { assertEx } from '@xylabs/assert'
import type { EventData } from '@xylabs/events'
import { BaseEmitter } from '@xylabs/events'
import { type Logger } from '@xylabs/logger'
import type { Promisable } from '@xylabs/promise'
import {
  SpanConfig, spanRoot, spanRootAsync,
} from '@xylabs/telemetry'
import {
  isError, isNumber, isString,
  isUndefined,
} from '@xylabs/typeof'
import { Mutex } from 'async-mutex'

import {
  type Creatable, creatable, CreatableFactory,
} from './Creatable.ts'
import { Factory } from './Factory.ts'
import { getFunctionName, getRootFunction } from './lib/index.ts'
import type {
  CreatableInstance, CreatableName, CreatableParams,
  CreatableStatus,
  Labels,
  RequiredCreatableParams,
} from './model/index.ts'

const AbstractCreatableConstructorKey = Symbol.for('AbstractCreatableConstructor')
const CREATABLE_NOT_STARTED = 'Creatable not Started' as const

@creatable()
export class AbstractCreatable<TParams extends CreatableParams = CreatableParams,
  TEventData extends EventData = EventData> extends BaseEmitter<Partial<TParams & RequiredCreatableParams>, TEventData> {
  defaultLogger?: Logger

  protected _startPromise: Promisable<boolean> | undefined
  private _status: CreatableStatus | null = null
  private _statusMutex = new Mutex()
  private _validatedParams?: TParams & RequiredCreatableParams

  constructor(key: unknown, params: Partial<TParams & RequiredCreatableParams>) {
    assertEx(key === AbstractCreatableConstructorKey, () => 'AbstractCreatable should not be instantiated directly, use the static create method instead')
    super(params)
  }

  get name(): CreatableName {
    return this.params.name as CreatableName
  }

  override get params(): TParams & RequiredCreatableParams {
    this._validatedParams = this._validatedParams ?? this.paramsValidator(super.params)
    return this._validatedParams
  }

  get startable() {
    return this.status === 'created' || this.status === 'stopped'
  }

  get status(): CreatableStatus | null {
    return this._status
  }

  get statusReporter() {
    return this.params.statusReporter
  }

  static async create<T extends CreatableInstance>(
    this: Creatable<T>,
    inParams: Partial<T['params']> = {},
  ): Promise<T> {
    const params = await this.paramsHandler(inParams)
    const name: CreatableName = params.name ?? this.name as CreatableName
    try {
      const instance = new this(AbstractCreatableConstructorKey, params)
      instance.setStatus('creating')
      const initializedInstance = await this.createHandler(instance)
      await instance.createHandler()
      instance.setStatus('created')
      return initializedInstance
    } catch (ex) {
      params.statusReporter?.report(name, 'error', isError(ex) ? ex : new Error(`Error creating: ${name}`))
      params.logger?.error(`Error creating creatable [${name}]: ${(isError(ex) ? `${ex.message} ${ex.stack}` : ex)}`)
      throw isError(ex) ? ex : new Error(`Error creating: ${name}`)
    }
  }

  static createHandler<T extends CreatableInstance>(
    this: Creatable<T>,
    instance: T,
  ): Promisable<T> {
    return instance
  }

  static paramsHandler<T extends CreatableInstance>(
    this: Creatable<T>,
    params: Partial<T['params']> = {},
  ): Promisable<T['params']> {
    return { ...params }
  }

  createHandler(): Promisable<void> {
    assertEx(this._status === 'creating', () => `createHandler can not be called [status = ${this.status}]`)
  }

  paramsValidator(params: Partial<TParams & RequiredCreatableParams>): TParams & RequiredCreatableParams {
    return { ...params, name: params.name } as TParams & RequiredCreatableParams
  }

  span<T>(name: string, fn: () => T): T {
    return spanRoot(name, fn, this.tracer)
  }

  async spanAsync<T>(name: string, fn: () => Promise<T>, config: SpanConfig = {}): Promise<T> {
    return await spanRootAsync(name, fn, {
      ...config, tracer: config.tracer ?? this.tracer, logger: config.logger ?? this.defaultLogger,
    })
  }

  async start(): Promise<boolean> {
    this._noOverride('start')
    if (this.status === 'started') {
      return true
    }
    return await this._statusMutex.runExclusive(async () => {
      try {
        // check again in case it changed
        if (this.status === 'started') {
          return true
        }
        assertEx(this.startable, () => `Creatable [${this.name}] is not startable in status [${this.status}]`)
        this.setStatus('starting')
        await this.startHandler()
        this.setStatus('started')
        return true
      } catch (ex) {
        this.setStatus('error', isError(ex) ? ex : new Error(`Error starting: ${ex}`))
        this.logger?.error(`Error starting creatable [${this.name}]: ${(isError(ex) ? `${ex.message} ${ex.stack}` : ex)}`)
        return false
      }
    })
  }

  started(notStartedAction: 'error' | 'throw' | 'warn' | 'log' | 'none' = 'log'): boolean {
    if (isString(this.status) && this.status === 'started') {
      return true
    } else {
      const message = () => `${CREATABLE_NOT_STARTED} [${this.name}] current state: ${this.status}`
      switch (notStartedAction) {
        case 'error': {
          throw new Error(message())
        }
        case 'throw': {
          throw new Error(message())
        }
        case 'warn': {
          this.logger?.warn(message())
          break
        }
        case 'log': {
          this.logger?.log(message())
          break
        }
        case 'none': {
          break
        }
        default: {
          throw new Error(`Unknown notStartedAction: ${notStartedAction}`)
        }
      }
      return false
    }
  }

  async startedAsync(notStartedAction: 'error' | 'throw' | 'warn' | 'log' | 'none' = 'log', tryStart = true): Promise<boolean> {
    if (isString(this.status) && this.status === 'started') {
      return true
    } else if (this.status === 'created' || this.status === 'stopped' || this.status === 'starting') {
      // using promise as mutex
      this._startPromise = this._startPromise ?? (async () => {
        if (tryStart) {
          try {
            return await this.start()
          } finally {
            this._startPromise = undefined
          }
        }
        return this.started(notStartedAction)
      })()
    } else {
      const message = `${CREATABLE_NOT_STARTED} [${this.name}] current state: ${this.status}`
      throw new Error(message)
    }

    if (isUndefined(this._startPromise)) {
      throw new Error(`Failed to create start promise: ${this.status}`)
    }
    return await this._startPromise
  }

  async stop(): Promise<boolean> {
    this._noOverride('stop')
    if (this.status === 'stopped') {
      return true
    }
    return await this._statusMutex.runExclusive(async () => {
      try {
        // check again in case it changed
        if (this.status === 'stopped') {
          return true
        }
        assertEx(this.status === 'started', () => `Creatable [${this.name}] is not stoppable in status [${this.status}]`)
        this.setStatus('stopping')
        await this.stopHandler()
        this.setStatus('stopped')
        return true
      } catch (ex) {
        this.setStatus('error', isError(ex) ? ex : new Error(`Error stopping: ${ex}`))
        return false
      }
    })
  }

  protected _noOverride(functionName = getFunctionName(3)) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const thisFunc = (this as any)[functionName]

    const rootFunc = getRootFunction(this, functionName)
    assertEx(thisFunc === rootFunc, () => `Override not allowed for [${functionName}] - override ${functionName}Handler instead`)
  }

  protected setStatus(value: Exclude<CreatableStatus, 'error'>, progress?: number): void
  protected setStatus(value: Extract<CreatableStatus, 'error'>, error?: Error): void
  protected setStatus(value: CreatableStatus, progressOrError?: number | Error): void {
    this._status = value
    if (value !== null) {
      if (value === 'error') {
        if (isError(progressOrError)) {
          this.statusReporter?.report(this.name, value, progressOrError)
          return
        }
      } else {
        if (isNumber(progressOrError)) {
          this.statusReporter?.report(this.name, value, progressOrError)
          return
        }
      }
      this.statusReporter?.report(this.name, value)
    }
  }

  protected startHandler(): Promisable<void> {
    // when overriding this, throw an error on failure
  }

  protected stopHandler(): Promisable<void> {
    // when overriding this, throw an error on failure
  }
}

@creatable()
export class AbstractCreatableWithFactory<TParams extends CreatableParams = CreatableParams,
  TEventData extends EventData = EventData> extends AbstractCreatable<TParams, TEventData> {
  static factory<T extends CreatableInstance>(
    this: Creatable<T>,
    params?: Partial<T['params']>,
    labels?: Labels,
  ): CreatableFactory<T> {
    return Factory.withParams<T>(this, params, labels)
  }
}
