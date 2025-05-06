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

export const AsTypeFactory = {
  create: <T extends AnyNonPromise>(typeCheck: TypeCheck<T>) => {
    function func<TType extends T>(value: AnyNonPromise, config?: TypeCheckConfig): TType | undefined
    function func<TType extends T>(value: AnyNonPromise, assert: StringOrAlertFunction<T>, config?: TypeCheckConfig): TType
    function func<TType extends T>(
      value: AnyNonPromise,
      assertOrConfig?: StringOrAlertFunction<T> | TypeCheckConfig,
      config?: TypeCheckConfig,
    ): TType | undefined {
      if (value === undefined || value === null) return undefined
      if (isPromise(value)) {
        throw new TypeError('un-awaited promises may not be sent to "as" functions')
      }

      const resolvedAssert = (typeof assertOrConfig === 'object' ? undefined : assertOrConfig) as StringOrAlertFunction<T> | undefined
      const resolvedConfig = typeof assertOrConfig === 'object' ? assertOrConfig : config
      const result = typeCheck(value, resolvedConfig) ? (value as TType) : undefined

      if (resolvedAssert !== undefined) {
        if (typeof resolvedAssert === 'function') {
          assertEx<T>(result, resolvedAssert)
        } else {
          assertEx<T>(result, () => resolvedAssert)
        }
      }
      return result
    }
    return func
  },
  createOptional: <T extends AnyNonPromise>(typeCheck: TypeCheck<T>) => {
    function func<TType extends T>(value: AnyNonPromise): TType | undefined {
      if (value === undefined || value === null) return undefined
      if (isPromise(value)) {
        throw new TypeError('un-awaited promises may not be sent to "as" functions')
      }
      return typeCheck(value) ? (value as TType) : undefined
    }
    return func
  },
}
