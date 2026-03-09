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

/**
 * Base class for objects that follow an asynchronous creation and lifecycle pattern.
 * Instances must be created via the static `create` method rather than direct construction.
 * Provides start/stop lifecycle management with status tracking and telemetry support.
 */
@creatable()
export class AbstractCreatable<TParams extends CreatableParams = CreatableParams,
  TEventData extends EventData = EventData> extends BaseEmitter<Partial<TParams & RequiredCreatableParams>, TEventData> {
  /** Optional default logger for this instance. */
  defaultLogger?: Logger

  protected _startPromise: Promisable<boolean> | undefined
  private _status: CreatableStatus | null = null
  private _statusMutex = new Mutex()
  private _validatedParams?: TParams & RequiredCreatableParams

  constructor(key: unknown, params: Partial<TParams & RequiredCreatableParams>) {
    assertEx(key === AbstractCreatableConstructorKey, () => 'AbstractCreatable should not be instantiated directly, use the static create method instead')
    super(params)
  }

  /** The name identifier for this creatable instance. */
  get name(): CreatableName {
    return this.params.name as CreatableName
  }

  /** The validated and merged parameters for this instance. */
  override get params(): TParams & RequiredCreatableParams {
    this._validatedParams = this._validatedParams ?? this.paramsValidator(super.params)
    return this._validatedParams
  }

  /** Whether this instance can be started (must be in 'created' or 'stopped' status). */
  get startable() {
    return this.status === 'created' || this.status === 'stopped'
  }

  /** The current lifecycle status of this instance, or null if not yet initialized. */
  get status(): CreatableStatus | null {
    return this._status
  }

  /** The status reporter used to broadcast lifecycle changes. */
  get statusReporter() {
    return this.params.statusReporter
  }

  /**
   * Asynchronously creates a new instance by processing params, constructing,
   * and running both static and instance createHandlers.
   * @param inParams - Optional partial parameters to configure the instance
   * @returns The fully initialized instance
   */
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

  /**
   * Static hook called during creation to perform additional initialization.
   * Override in subclasses to customize post-construction setup.
   * @param instance - The newly constructed instance
   * @returns The instance, potentially modified
   */
  static createHandler<T extends CreatableInstance>(
    this: Creatable<T>,
    instance: T,
  ): Promisable<T> {
    return instance
  }

  /**
   * Static hook called during creation to validate and transform params.
   * Override in subclasses to add default values or validation.
   * @param params - The raw partial params provided to `create`
   * @returns The processed params ready for construction
   */
  static paramsHandler<T extends CreatableInstance>(
    this: Creatable<T>,
    params: Partial<T['params']> = {},
  ): Promisable<T['params']> {
    return { ...params }
  }

  /** Instance-level creation hook. Override in subclasses to perform setup after construction. */
  createHandler(): Promisable<void> {
    assertEx(this._status === 'creating', () => `createHandler can not be called [status = ${this.status}]`)
  }

  /**
   * Validates and returns the merged params, ensuring required fields are present.
   * Override in subclasses to add custom validation logic.
   * @param params - The raw partial params to validate
   * @returns The validated params
   */
  paramsValidator(params: Partial<TParams & RequiredCreatableParams>): TParams & RequiredCreatableParams {
    return { ...params, name: params.name } as TParams & RequiredCreatableParams
  }

  /**
   * Executes a function within a telemetry span.
   * @param name - The span name
   * @param fn - The function to execute within the span
   */
  span<T>(name: string, fn: () => T): T {
    return spanRoot(name, fn, this.tracer)
  }

  /**
   * Executes an async function within a telemetry span.
   * @param name - The span name
   * @param fn - The async function to execute within the span
   * @param config - Optional span configuration
   */
  async spanAsync<T>(name: string, fn: () => Promise<T>, config: SpanConfig = {}): Promise<T> {
    return await spanRootAsync(name, fn, {
      ...config, tracer: config.tracer ?? this.tracer, logger: config.logger ?? this.defaultLogger,
    })
  }

  /**
   * Starts the instance, transitioning through 'starting' to 'started' status.
   * Thread-safe via mutex. Returns true if already started or started successfully.
   */
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

  /**
   * Checks whether this instance is currently started.
   * Takes an action if not started, based on the notStartedAction parameter.
   * @param notStartedAction - What to do if not started: 'error'/'throw' throws, 'warn'/'log' logs, 'none' is silent
   * @returns True if started, false otherwise
   */
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

  /**
   * Async version of `started` that can optionally auto-start the instance.
   * @param notStartedAction - What to do if not started and auto-start is disabled
   * @param tryStart - If true, attempts to start the instance automatically
   * @returns True if the instance is or becomes started
   */
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

  /**
   * Stops the instance, transitioning through 'stopping' to 'stopped' status.
   * Thread-safe via mutex. Returns true if already stopped or stopped successfully.
   */
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

  /**
   * Asserts that the given function has not been overridden in a subclass.
   * Used to enforce the handler pattern (override `startHandler` not `start`).
   */
  protected _noOverride(functionName = getFunctionName(3)) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const thisFunc = (this as any)[functionName]

    const rootFunc = getRootFunction(this, functionName)
    assertEx(thisFunc === rootFunc, () => `Override not allowed for [${functionName}] - override ${functionName}Handler instead`)
  }

  /** Sets the lifecycle status and reports it via the status reporter. */
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

  /** Override in subclasses to define start behavior. Throw an error on failure. */
  protected startHandler(): Promisable<void> {
    // when overriding this, throw an error on failure
  }

  /** Override in subclasses to define stop behavior. Throw an error on failure. */
  protected stopHandler(): Promisable<void> {
    // when overriding this, throw an error on failure
  }
}

/**
 * Extends AbstractCreatable with a static `factory` method for creating
 * pre-configured CreatableFactory instances.
 */
@creatable()
export class AbstractCreatableWithFactory<TParams extends CreatableParams = CreatableParams,
  TEventData extends EventData = EventData> extends AbstractCreatable<TParams, TEventData> {
  /**
   * Creates a factory that produces instances of this class with pre-configured params and labels.
   * @param params - Default parameters for instances created by the factory
   * @param labels - Labels to assign to created instances
   */
  static factory<T extends CreatableInstance>(
    this: Creatable<T>,
    params?: Partial<T['params']>,
    labels?: Labels,
  ): CreatableFactory<T> {
    return Factory.withParams<T>(this, params, labels)
  }
}
