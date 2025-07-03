import { assertEx } from '@xylabs/assert'
import type { EventData } from '@xylabs/events'
import { BaseEmitter } from '@xylabs/events'
import { type Logger } from '@xylabs/logger'
import type { Promisable } from '@xylabs/promise'
import { isError } from '@xylabs/typeof'

import { type Creatable, creatable } from './Creatable.ts'
import { Factory } from './Factory.ts'
import { getFunctionName, getRootFunction } from './lib/index.ts'
import type {
  CreatableInstance, CreatableName, CreatableParams,
  Labels,
} from './model/index.ts'

const AbstractCreatableConstructorKey = Symbol.for('AbstractCreatableConstructor')

@creatable()
export class AbstractCreatable<TParams extends CreatableParams = CreatableParams,
  TEventData extends EventData = EventData> extends BaseEmitter<Partial<TParams>, TEventData> {
  defaultLogger?: Logger

  private _validatedParams?: TParams

  constructor(key: unknown, params: Partial<TParams>) {
    assertEx(key === AbstractCreatableConstructorKey, () => 'AbstractCreatable should not be instantiated directly, use the static create method instead')
    super(params)
  }

  get name(): CreatableName {
    return this.params.name ?? this.constructor.name
  }

  override get params(): TParams {
    this._validatedParams = this._validatedParams ?? this.paramsValidator(super.params)
    return this._validatedParams
  }

  get statusReporter() {
    return this.params.statusReporter
  }

  static async create<T extends CreatableInstance>(
    this: Creatable<T>,
    inParams: Partial<T['params']> = {},
  ): Promise<T> {
    const params = await this.paramsHandler(inParams)
    const name: CreatableName = params.name ?? this.name
    params.statusReporter?.report(name, 'creating')
    try {
      const instance = new this(AbstractCreatableConstructorKey, params)
      const initializedInstance = await this.createHandler(instance)
      await instance.createHandler()
      params.statusReporter?.report(name, 'created')
      return initializedInstance
    } catch (ex) {
      params.statusReporter?.report(name, 'error', isError(ex) ? ex : new Error(`Error creating: ${name}`))
      throw isError(ex) ? ex : new Error(`Error creating: ${name}`)
    }
  }

  static createHandler<T extends CreatableInstance>(
    this: Creatable<T>,
    instance: T,
  ): Promisable<T> {
    return instance
  }

  static factory<T extends CreatableInstance>(
    this: Creatable<T>,
    params?: Partial<T['params']>,
    labels?: Labels,
  ): Factory<T> {
    return Factory.withParams<T>(this, params, labels)
  }

  static paramsHandler<T extends CreatableInstance>(
    this: Creatable<T>,
    params: Partial<T['params']> = {},
  ): Promisable<Partial<T['params']>> {
    return { ...params }
  }

  createHandler(): Promisable<void> {}

  paramsValidator(params: Partial<TParams>): TParams {
    return { ...params, name: params.name ?? this.constructor.name } as TParams
  }

  async start(): Promise<boolean> {
    this._noOverride('start')
    try {
      this.statusReporter?.report(this.name, 'starting')
      await this.startHandler()
      this.statusReporter?.report(this.name, 'started')
      return true
    } catch (ex) {
      this.statusReporter?.report(this.name, 'error', isError(ex) ? ex : new Error(`Error stopping: ${ex}`))
      return false
    }
  }

  async stop(): Promise<boolean> {
    this._noOverride('stop')
    try {
      this.statusReporter?.report(this.name, 'stopping')
      await this.stopHandler()
      this.statusReporter?.report(this.name, 'stopped')
      return true
    } catch (ex) {
      this.statusReporter?.report(this.name, 'error', isError(ex) ? ex : new Error(`Error stopping: ${ex}`))
      return false
    }
  }

  protected _noOverride(functionName = getFunctionName(3)) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const thisFunc = (this as any)[functionName]

    const rootFunc = getRootFunction(this, functionName)
    assertEx(thisFunc === rootFunc, () => `Override not allowed for [${functionName}] - override ${functionName}Handler instead`)
  }

  protected startHandler(): Promisable<void> {
    // when overriding this, throw an error on failure
  }

  protected stopHandler(): Promisable<void> {
    // when overriding this, throw an error on failure
  }
}
