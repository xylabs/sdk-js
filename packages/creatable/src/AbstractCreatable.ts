import type { MeterProvider, TracerProvider } from '@opentelemetry/api'
import { assertEx } from '@xylabs/assert'
import type { BaseClassName, BaseParams } from '@xylabs/base'
import { BaseEmitter } from '@xylabs/events'
import { type Logger } from '@xylabs/logger'
import type { EmptyObject } from '@xylabs/object'
import type { Promisable } from '@xylabs/promise'

import type {
  Creatable, CreatableInstance,
  CreatableName,
} from './Creatable.ts'
import { getFunctionName } from './getFunctionName.ts'
import { getRootFunction } from './getRootFunction.ts'

export type CreatableStatus = 'creating' | 'created' | 'starting' | 'started' | 'stopping' | 'stopped'

export interface StatusReporter {
  report: (name: BaseClassName, status: CreatableStatus, progress?: number) => void
}

export type CreatableParamsFields = {
  logger?: Logger
  meterProvider?: MeterProvider
  name?: BaseClassName
  traceProvider?: TracerProvider
}

export type CreatableParams<TAdditionalParams extends EmptyObject | void = void> =
  BaseParams<TAdditionalParams extends EmptyObject ? CreatableParamsFields & TAdditionalParams : CreatableParamsFields>

export abstract class AbstractCreatable<TParams extends EmptyObject | void = void> extends BaseEmitter<Partial<CreatableParams<TParams>>> {
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

  static async create<T extends EmptyObject | void = void, TParams extends EmptyObject | void = void>(
    this: Creatable<T, TParams>,
    params: Partial<CreatableParams<TParams>>,
  ): Promise<CreatableInstance<T>> {
    const instance = new this(params)
    await instance.createHandler()
    return await Promise.resolve(instance as CreatableInstance<T>)
  }

  createHandler(): Promisable<boolean> {
    return true
  }

  protected _noOverride(functionName = getFunctionName(3)) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const thisFunc = (this as any)[functionName]

    const rootFunc = getRootFunction(this, functionName)
    assertEx(thisFunc === rootFunc, () => `Override not allowed for [${functionName}] - override ${functionName}Handler instead`)
  }

  protected abstract paramsHandler(params?: Partial<CreatableParams<TParams>>): CreatableParams<TParams>
}
