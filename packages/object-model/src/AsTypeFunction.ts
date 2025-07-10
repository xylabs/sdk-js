import type { AnyNonPromise } from '@xylabs/promise'

import type {
  StringOrAlertFunction,
  TypeCheckConfig, TypeCheckOptionalConfig, TypeCheckRequiredConfig,
} from './types.ts'

export type AsTypeFunction<T extends AnyNonPromise = AnyNonPromise> = {
  <TType extends T>(value: AnyNonPromise): TType | undefined
  <TType extends T>(value: AnyNonPromise, config: TypeCheckRequiredConfig): TType
  <TType extends T>(value: AnyNonPromise, config: TypeCheckConfig | TypeCheckOptionalConfig): TType | undefined
  <TType extends T>(value: AnyNonPromise, assert: StringOrAlertFunction<TType>): TType | undefined
  <TType extends T>(value: AnyNonPromise, assert: StringOrAlertFunction<TType>, config: TypeCheckRequiredConfig): TType
  <TType extends T>(value: AnyNonPromise, assert: StringOrAlertFunction<TType>, config: TypeCheckConfig | TypeCheckOptionalConfig): TType | undefined
}

export type AsOptionalTypeFunction<T extends AnyNonPromise = AnyNonPromise> = {
  <TType extends T>(value: AnyNonPromise): TType | undefined
}
