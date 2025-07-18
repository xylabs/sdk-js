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
 * Asserts that a value is defined (not undefined) and returns the value.
 * Throws an error if the value is undefined.
 *
 * @deprecated Use overload with message function instead - passing a message will soon be required
 * @template T - The type of value to check
 * @param expr - Expression to be evaluated for being defined
 * @throws Error with a generic message
 * @returns The value of the expression (guaranteed to be defined)
 */
function assertDefinedEx<T>(expr: T | undefined): T

/**
 * Asserts that a value is defined (not undefined) and returns the value.
 * Throws an error with the provided message if the value is undefined.
 *
 * @deprecated Replace string with () => string for consistency
 * @template T - The type of value to check
 * @param expr - Expression to be evaluated for being defined
 * @param message - Error message if expression is undefined
 * @throws Error with the provided message
 * @returns The value of the expression (guaranteed to be defined)
 */
function assertDefinedEx<T>(expr: T | undefined, message?: string): T

/**
 * Implementation of assertDefinedEx that handles all overloads.
 *
 */
function assertDefinedEx<T, R extends Error, P extends string | AssertExMessageFunc<T> | AssertExErrorFunc<T, R>>(
  expr: T | undefined,
  messageOrFunc?: P,
): T {
  if (expr !== undefined) return expr
  if (typeof messageOrFunc === 'function') {
    const errorOrMessage = messageOrFunc(expr)
    throw typeof errorOrMessage === 'string' ? new Error(errorOrMessage) : errorOrMessage
  }
  // a string was sent
  throw new Error(messageOrFunc)
}

export { assertDefinedEx }
