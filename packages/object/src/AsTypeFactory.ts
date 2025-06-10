import type { AssertExMessageFunc } from '@xylabs/assert'
import { assertEx } from '@xylabs/assert'
import type { Logger } from '@xylabs/logger'
import type { AnyNonPromise } from '@xylabs/promise'
import { isPromise } from '@xylabs/promise'
import type { TypedValue } from '@xylabs/typeof'

export interface TypeCheckConfig {
  log?: boolean | Logger
}

export type StringOrAlertFunction<T extends AnyNonPromise> = string | AssertExMessageFunc<T>

export type TypeCheck<T extends TypedValue> = (obj: AnyNonPromise, config?: TypeCheckConfig) => obj is T

export type AsOptionalTypeFunction<T extends AnyNonPromise = AnyNonPromise> = {
  <TType extends T>(value: AnyNonPromise): TType | undefined
}

export type AsTypeFunction<T extends AnyNonPromise = AnyNonPromise> = {
  <TType extends T>(value: AnyNonPromise): TType | undefined
  <TType extends T>(value: AnyNonPromise, config: TypeCheckConfig): TType | undefined
  <TType extends T>(value: AnyNonPromise, assert: StringOrAlertFunction<TType>): TType
  <TType extends T>(value: AnyNonPromise, assert: StringOrAlertFunction<TType>, config: TypeCheckConfig): TType
}

export const AsTypeFactory = {
  create: <T extends AnyNonPromise>(typeCheck: TypeCheck<T>): AsTypeFunction<T> => {
    const func = (
      value: AnyNonPromise,
      assertOrConfig?: StringOrAlertFunction<T> | TypeCheckConfig,
      config?: TypeCheckConfig,
    ): T | undefined => {
      if (value === undefined || value === null) {
        return undefined
      }

      if (isPromise(value)) {
        throw new TypeError('un-awaited promises may not be sent to "as" functions')
      }

      // when used as a predicate, it seems that the index is passed as the second parameter (filter,map)
      const isPredicate = typeof assertOrConfig === 'number'
      const resolvedAssert = isPredicate
        ? undefined
        : (typeof assertOrConfig === 'object' ? undefined : assertOrConfig) as (StringOrAlertFunction<T> | undefined)
      const resolvedConfig = isPredicate ? undefined : typeof assertOrConfig === 'object' ? assertOrConfig : config

      const result = typeCheck(value, resolvedConfig) ? (value as T) : undefined

      if (resolvedAssert !== undefined) {
        return typeof resolvedAssert === 'function' ? assertEx<T>(result, resolvedAssert) : assertEx<T>(result, () => resolvedAssert)
      }
      return result
    }
    return func
  },
  createOptional: <T extends AnyNonPromise>(typeCheck: TypeCheck<T>) => {
    const func = (value: AnyNonPromise): T | undefined => {
      if (value === undefined || value === null) return undefined
      if (isPromise(value)) {
        throw new TypeError('un-awaited promises may not be sent to "as" functions')
      }
      return typeCheck(value) ? (value as T) : undefined
    }
    return func
  },
}
