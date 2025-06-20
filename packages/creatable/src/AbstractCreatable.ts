import { assertEx } from '@xylabs/assert'
import type { EventData } from '@xylabs/events'
import { BaseEmitter } from '@xylabs/events'
import { type Logger } from '@xylabs/logger'
import type { EmptyObject } from '@xylabs/object'
import type { Promisable } from '@xylabs/promise'

import type { Creatable } from './Creatable.ts'
import type { CreatableInstance } from './CreatableInstance.ts'
import type { CreatableName, CreatableParams } from './CreatableParams.ts'
import { getFunctionName } from './getFunctionName.ts'
import { getRootFunction } from './getRootFunction.ts'

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
