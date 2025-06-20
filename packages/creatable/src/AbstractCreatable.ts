import { assertEx } from '@xylabs/assert'
import type { EventData } from '@xylabs/events'
import { BaseEmitter } from '@xylabs/events'
import { type Logger } from '@xylabs/logger'
import type { EmptyObject } from '@xylabs/object'
import type { Promisable } from '@xylabs/promise'
import { isError } from '@xylabs/typeof'

import type { Creatable } from './Creatable.ts'
import { getFunctionName, getRootFunction } from './lib/index.ts'
import type {
  CreatableInstance, CreatableName, CreatableParams,
} from './model/index.ts'

export abstract class AbstractCreatable<TParams extends EmptyObject | void = void,
  TEventData extends EventData = EventData> extends BaseEmitter<Partial<CreatableParams<TParams>>, TEventData> {
  defaultLogger?: Logger
  name: CreatableName

  private _populatedParams: CreatableParams<TParams> | undefined

  constructor(params: Partial<CreatableParams<TParams>>) {
    super(params)
    this.name = params.name ?? this.constructor.name as CreatableName
  }

  override get params(): CreatableParams<TParams> {
    this._noOverride()
    this._populatedParams = this._populatedParams ?? this.paramsHandler(super.params)
    return this._populatedParams
  }

  get statusReporter() {
    return this.params.statusReporter
  }

  static async create<T extends EmptyObject | void = void, TParams extends EmptyObject | void = void>(
    this: Creatable<T, TParams>,
    params: Partial<CreatableParams<TParams>>,
  ): Promise<CreatableInstance<T>> {
    const name: CreatableName = params.name ?? this.name
    params.statusReporter?.report(name, 'creating')
    try {
      const instance = new this(params)
      await instance.createHandler()
      params.statusReporter?.report(name, 'created')
      return instance
    } catch (ex) {
      params.statusReporter?.report(name, 'error', isError(ex) ? ex : new Error(`Error creating: ${name}`))
      throw new Error(`Error creating: ${name}`)
    }
  }

  createHandler(): Promisable<boolean> {
    return true
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

  protected abstract paramsHandler(params?: Partial<CreatableParams<TParams>>): CreatableParams<TParams>
}
