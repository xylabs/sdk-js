import { assertDefinedEx } from '@xylabs/assert'
import type { AnyNonPromise } from '@xylabs/promise'
import { isPromise } from '@xylabs/promise'
import { isTruthy } from '@xylabs/typeof'

import type { AsTypeFunction } from './AsTypeFunction.ts'
import type {
  StringOrAlertFunction, TypeCheck, TypeCheckConfig,
  TypeCheckRequiredConfig,
} from './types.ts'

export const AsTypeFactory = {
  create: <T extends AnyNonPromise>(typeCheck: TypeCheck<T>): AsTypeFunction<T> => {
    const func = (
      value: AnyNonPromise,
      assertOrConfig?: StringOrAlertFunction<T> | TypeCheckConfig,
      config?: TypeCheckConfig,
    ): T | undefined => {
      // when used as a predicate, it seems that the index is passed as the second parameter (filter,map)
      const isPredicate = typeof assertOrConfig === 'number'
      const resolvedAssert = isPredicate
        ? undefined
        : (typeof assertOrConfig === 'object' ? undefined : assertOrConfig) as (StringOrAlertFunction<T> | undefined)
      const resolvedConfig = isPredicate ? undefined : typeof assertOrConfig === 'object' ? assertOrConfig : config

      // only return undefined if not required
      const required = isTruthy((resolvedConfig as (TypeCheckRequiredConfig | undefined))?.required)
      if (!required && (value === undefined || value === null)) {
        return undefined
      }

      if (isPromise(value)) {
        throw new TypeError('un-awaited promises may not be sent to "as" functions')
      }

      const result = typeCheck(value, resolvedConfig) ? (value as T) : undefined

      if (resolvedAssert !== undefined) {
        return typeof resolvedAssert === 'function' ? assertDefinedEx<T>(result, resolvedAssert) : assertDefinedEx<T>(result, () => resolvedAssert)
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
