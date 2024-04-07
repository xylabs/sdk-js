import { Logger } from '@xylabs/logger'

import { EmptyObject } from './EmptyObject'
import { globallyUnique } from './globallyUnique'

export type BaseParamsFields = {
  logger?: Logger
}

export type BaseParams<TAdditionalParams extends EmptyObject | void = void> =
  TAdditionalParams extends EmptyObject ? BaseParamsFields & TAdditionalParams : BaseParamsFields

export abstract class Base<TParams extends BaseParams | undefined = BaseParams> {
  static defaultLogger?: Logger
  static readonly uniqueName = globallyUnique(this.name, this, 'xyo')

  private _params?: TParams

  constructor(params?: TParams) {
    this._params = params
    params?.logger?.debug(`Base constructed [${Object(this).name}]`)
  }

  get params() {
    return this._params
  }

  protected get logger() {
    return this.params?.logger ?? Base.defaultLogger
  }
}
