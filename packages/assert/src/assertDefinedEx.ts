import type { AssertExErrorFunc, AssertExMessageFunc } from './types.ts'

/**
 * Asserts that a value is defined (not undefined) and returns the value.
 * Throws an error if the value is undefined.
 *
 * @template T - The type of value to check
 * @param expr - Expression to be evaluated for being defined
 * @param messageFunc - Function that returns a message for the error if expression is undefined
 * @throws Error with the message returned by messageFunc
 * @returns The value of the expression (guaranteed to be defined)
 * @example
 * ```typescript
 * // Simple usage with a message function
 * const value = assertDefinedEx(possiblyUndefined, () => 'Value must be defined')
 *
 * // Using with type narrowing
 * const config: Config | undefined = loadConfig()
 * const safeConfig = assertDefinedEx(config, () => 'Config failed to load')
 * // safeConfig is now type Config (not Config | undefined)
 * ```
 */
function assertDefinedEx<T>(expr: T | undefined, messageFunc?: AssertExMessageFunc<T>): T

/**
 * Asserts that a value is defined (not undefined) and returns the value.
 * Throws a custom error if the value is undefined.
 *
 * @template T - The type of value to check
 * @template R - The type of error to throw
 * @param expr - Expression to be evaluated for being defined
 * @param errorFunc - Function that returns a custom error instance if expression is undefined
 * @throws Custom error returned by errorFunc
 * @returns The value of the expression (guaranteed to be defined)
 * @example
 * ```typescript
 * // Using with a custom error
 * const user = assertDefinedEx(getUser(), () => new UserNotFoundError('User not found'))
 * ```
 */
function assertDefinedEx<T, R extends Error>(expr: T | undefined, errorFunc?: AssertExErrorFunc<T, R>): T

/**
 * Implementation of assertDefinedEx that handles all overloads.
 *
 */
function assertDefinedEx<T, R extends Error, P extends AssertExMessageFunc<T> | AssertExErrorFunc<T, R>>(
  expr: T | undefined,
  func?: P,
): T {
  if (expr !== undefined) return expr
  if (typeof func === 'function') {
    const errorOrMessage = func(expr)
    throw typeof errorOrMessage === 'string' ? new Error(errorOrMessage) : errorOrMessage
  }
  if (func !== undefined) {
    throw new Error('Invalid assertEx usage: second argument must be a function or undefined')
  }
  throw new Error('Assertion failed: value is undefined')
}

export { assertDefinedEx }
