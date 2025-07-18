import type { AssertExErrorFunc, AssertExMessageFunc } from './types.ts'

/**
 * Asserts that an expression is truthy and returns the value.
 * Throws an error if the expression is falsy.
 *
 * @template T - The type of value to check
 * @param expr - Expression to be evaluated for truthiness
 * @param messageFunc - Function that returns a message for the error if expression is falsy
 * @throws Error with the message returned by messageFunc
 * @returns The value of the expression (guaranteed to be truthy)
 * @example
 * ```typescript
 * // Simple usage with a message function
 * const value = assertEx(possiblyFalsy, () => 'Value must be truthy')
 *
 * // Using with type narrowing
 * const config: Config | null = loadConfig()
 * const safeConfig = assertEx(config, () => 'Config failed to load')
 * // safeConfig is now type Config (not Config | null)
 * ```
 */
function assertEx<T>(expr: T | null | undefined, messageFunc?: AssertExMessageFunc<T>): T

/**
 * Asserts that an expression is truthy and returns the value.
 * Throws a custom error if the expression is falsy.
 *
 * @template T - The type of value to check
 * @template R - The type of error to throw
 * @param expr - Expression to be evaluated for truthiness
 * @param errorFunc - Function that returns a custom error instance if expression is falsy
 * @throws Custom error returned by errorFunc
 * @returns The value of the expression (guaranteed to be truthy)
 * @example
 * ```typescript
 * // Using with a custom error
 * const user = assertEx(getUser(), () => new UserNotFoundError('User not found'))
 * ```
 */
function assertEx<T, R extends Error>(expr: T | null | undefined, errorFunc?: AssertExErrorFunc<T, R>): T

/**
 * Asserts that an expression is truthy and returns the value.
 * Throws an error if the expression is falsy.
 *
 * @deprecated Use overload with message function instead - passing a message will soon be required
 * @template T - The type of value to check
 * @param expr - Expression to be evaluated for truthiness
 * @throws Error with a generic message
 * @returns The value of the expression (guaranteed to be truthy)
 */
function assertEx<T>(expr: T | null | undefined): T

/**
 * Asserts that an expression is truthy and returns the value.
 * Throws an error with the provided message if the expression is falsy.
 *
 * @deprecated Replace string with () => string for consistency
 * @template T - The type of value to check
 * @param expr - Expression to be evaluated for truthiness
 * @param message - Error message if expression is falsy
 * @throws Error with the provided message
 * @returns The value of the expression (guaranteed to be truthy)
 */
function assertEx<T>(expr: T | null | undefined, message?: string): T

/**
 * Implementation of assertEx that handles all overloads.
 */
function assertEx<T, R extends Error, P extends string | AssertExMessageFunc<T> | AssertExErrorFunc<T, R>>(
  expr: T | null | undefined,
  messageOrFunc?: P,
): T {
  // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
  if (expr) return expr
  if (typeof messageOrFunc === 'function') {
    const errorOrMessage = messageOrFunc(expr)
    throw typeof errorOrMessage === 'string' ? new Error(errorOrMessage) : errorOrMessage
  }
  // a string was sent
  throw new Error(messageOrFunc)
}

export { assertEx }
