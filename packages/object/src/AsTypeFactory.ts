import { assertEx, AssertExMessageFunc } from '@xylabs/assert'
import { Logger } from '@xylabs/logger'
import { AnyNonPromise, isPromise, TypedValue } from '@xylabs/promise'

export interface TypeCheckConfig {
  disallowChecks?: ((value: unknown) => unknown)[]
  log?: boolean | Logger
}

export type StringOrAlertFunction<T extends AnyNonPromise> = string | AssertExMessageFunc<T>

export type TypeCheck<T extends TypedValue, E = void> = (
  obj: (E extends void ? Exclude<AnyNonPromise, E> : AnyNonPromise) | T,
  config?: TypeCheckConfig,
) => obj is T

export const AsTypeFactory = {
  // eslint-disable-next-line @typescript-eslint/ban-types
  create: <T extends AnyNonPromise, E = void>(typeCheck: TypeCheck<T, E>) => {
    function func<TType extends T>(
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      value: (E extends void ? Exclude<AnyNonPromise, E> : AnyNonPromise) | T,
      config?: TypeCheckConfig,
    ): TType | undefined
    function func<TType extends T>(
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      value: (E extends void ? Exclude<AnyNonPromise, E> : AnyNonPromise) | T,
      assert: StringOrAlertFunction<T>,
      config?: TypeCheckConfig,
    ): TType
    function func<TType extends T>(
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      value: (E extends void ? Exclude<AnyNonPromise, E> : AnyNonPromise) | T,
      assertOrConfig?: StringOrAlertFunction<T> | TypeCheckConfig,
      config?: TypeCheckConfig,
    ): TType | undefined {
      if (value === undefined) {
        return undefined
      }

      if (value === null) {
        return undefined
      }

      if (isPromise(value)) {
        throw new TypeError('un-awaited promises may not be sent to "as" functions')
      }

      for (const disallowCheck of config?.disallowChecks ?? []) {
        if (disallowCheck(value)) {
          throw new TypeError('disallowed type')
        }
      }

      const resolvedAssert = (typeof assertOrConfig === 'object' ? undefined : assertOrConfig) as StringOrAlertFunction<T> | undefined
      const resolvedConfig = typeof assertOrConfig === 'object' ? assertOrConfig : config
      const result = typeCheck(value, resolvedConfig) ? (value as TType) : undefined

      if (resolvedAssert) {
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
}
