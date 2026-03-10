import type { AnyNonPromise } from '@xylabs/promise'

import type {
  StringOrAlertFunction,
  TypeCheckConfig, TypeCheckOptionalConfig, TypeCheckRequiredConfig,
} from './types.ts'

/** A type-narrowing function that attempts to cast a value to T, with optional assertion and configuration overloads. */
export type AsTypeFunction<T extends AnyNonPromise = AnyNonPromise> = {
  <TType extends T>(value: AnyNonPromise): TType | undefined
  <TType extends T>(value: AnyNonPromise, config: TypeCheckRequiredConfig): TType
  <TType extends T>(value: AnyNonPromise, config: TypeCheckConfig | TypeCheckOptionalConfig): TType | undefined
  <TType extends T>(value: AnyNonPromise, assert: StringOrAlertFunction<TType>): TType | undefined
  <TType extends T>(value: AnyNonPromise, assert: StringOrAlertFunction<TType>, config: TypeCheckRequiredConfig): TType
  <TType extends T>(value: AnyNonPromise, assert: StringOrAlertFunction<TType>, config: TypeCheckConfig | TypeCheckOptionalConfig): TType | undefined
}

/** A simplified type-narrowing function that returns T or undefined, without assertion support. */
export type AsOptionalTypeFunction<T extends AnyNonPromise = AnyNonPromise> = {
  <TType extends T>(value: AnyNonPromise): TType | undefined
}
