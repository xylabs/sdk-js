import type { MeterProvider, TracerProvider } from '@opentelemetry/api'
import { assertEx } from '@xylabs/assert'
import { type Logger } from '@xylabs/logger'
import type { EmptyObject } from '@xylabs/object'
import { isNumber, isObject } from '@xylabs/typeof'

import {
  Base, type BaseClassName, type BaseParams,
} from './Base.ts'
import type {
  Creatable, CreatableFactory, CreatableInstance,
  CreatableName,
} from './Creatable.ts'
import { creatable } from './Creatable.ts'

export type BaseClassStatus = 'creating' | 'created' | 'starting' | 'started' | 'stopping' | 'stopped'

function getFunctionName(depth = 2) {
  const error = new Error('Stack')
  let newIndex: number | undefined
  const stackParts = error.stack?.split('\n')[depth]?.split(' ')
  const funcName
        = stackParts?.find((item, index) => {
          if (item.length > 0 && item !== 'at') {
            // check if constructor
            if (item === 'new') {
              newIndex = index
            }
            return true
          }
        }) ?? '<unknown>'
  return isNumber(newIndex) ? `${funcName} ${stackParts?.[newIndex + 1]}` : funcName
}

function getRootFunction(obj: unknown, funcName: string) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let anyObj = obj as any
  while (anyObj.__proto__?.[funcName]) {
    anyObj = anyObj.__proto__
  }
  return anyObj[funcName]
}

export interface StatusReporter {
  report: (name: BaseClassName, status: BaseClassStatus, progress?: number) => void
}

export type CreatableBaseParamsFields = {
  logger?: Logger
  meterProvider?: MeterProvider
  name?: BaseClassName
  traceProvider?: TracerProvider
}

export interface CreatableBaseInstance {

}

export type CreatableParams<TAdditionalParams extends EmptyObject | void = void> =
  BaseParams<TAdditionalParams extends EmptyObject ? CreatableBaseParamsFields & TAdditionalParams : CreatableBaseParamsFields>

@creatable()
export class AbstractCreatable<T extends EmptyObject | void = void, TParams extends EmptyObject | void = void> extends Base<CreatableParams<TParams>> {
  defaultLogger?: Logger
  name: CreatableName

  constructor(params: CreatableParams<TParams>) {
    super(params)
    this.name = params.name ?? this.constructor.name as CreatableName
  }

  static async create<T extends EmptyObject | void = void, TParams extends EmptyObject | void = void>(
    this: Creatable<T, TParams>,
    params: CreatableParams<TParams>,
  ): Promise<CreatableInstance<T>> {
    const i = new this(params)
    return await Promise.resolve(i as CreatableInstance<T>)
  }

  static factory<T extends EmptyObject | void = void, TParams extends EmptyObject | void = void>(
    params?: CreatableParams<TParams>,
  ): CreatableFactory<T, TParams> {
    throw new Error('Method not implemented.')
  }

  protected _noOverride(functionName = getFunctionName(3)) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const thisFunc = (this as any)[functionName]

    const rootFunc = getRootFunction(this, functionName)
    assertEx(thisFunc === rootFunc, () => `Override not allowed for [${functionName}] - override ${functionName}Handler instead`)
  }
}
