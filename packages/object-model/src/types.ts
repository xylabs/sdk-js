import type { AssertExMessageFunc } from '@xylabs/assert'
import type { Logger } from '@xylabs/logger'
import type { AnyNonPromise } from '@xylabs/promise'
import type { TypedValue } from '@xylabs/typeof'

export interface TypeCheckConfig {
  log?: boolean | Logger
}

export interface TypeCheckRequiredConfig extends TypeCheckConfig {
  required: true
}

export interface TypeCheckOptionalConfig extends TypeCheckConfig {
  required: false
}

export type StringOrAlertFunction<T extends AnyNonPromise> = string | AssertExMessageFunc<T>

export type TypeCheck<T extends TypedValue> = {
  (obj: AnyNonPromise): obj is T
  (obj: AnyNonPromise, config: undefined): obj is T
  // this is here to allow it to be used as a predicate function
  (obj: AnyNonPromise, index: number): obj is T
  (obj: AnyNonPromise, config: TypeCheckConfig): obj is T
}
