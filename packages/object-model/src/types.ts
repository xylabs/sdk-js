import type { AssertExMessageFunc } from '@xylabs/assert'
import type { Logger } from '@xylabs/logger'
import type { AnyNonPromise } from '@xylabs/promise'
import type { TypedValue } from '@xylabs/typeof'

/** Configuration options for type check functions, with optional logging. */
export interface TypeCheckConfig {
  log?: boolean | Logger
}

/** Type check configuration that marks the value as required, causing assertions on failure. */
export interface TypeCheckRequiredConfig extends TypeCheckConfig {
  required: true
}

/** Type check configuration that marks the value as optional, returning undefined on failure. */
export interface TypeCheckOptionalConfig extends TypeCheckConfig {
  required: false
}

/** A string message or function that produces an assertion error message for a failed type check. */
export type StringOrAlertFunction<T extends AnyNonPromise> = string | AssertExMessageFunc<T>

/** A type guard function that checks whether a value conforms to type T, with optional configuration. */
export type TypeCheck<T extends TypedValue> = {
  (obj: AnyNonPromise): obj is T
  (obj: AnyNonPromise, config: TypeCheckConfig): obj is T
  (obj: AnyNonPromise, config: TypeCheckConfig | number /* for use as predicate */ | undefined): obj is T
}
