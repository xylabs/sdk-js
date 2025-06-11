import type { AssertExErrorFunc, AssertExMessageFunc } from './types.ts'

/**
 *
 * Intended for defined checks for variables
 *
 * @param expr - Expression to be evaluated for truthiness
 * @param message - Message in Error if expression is false, may be a function that returns a string
 * @throws AssertExError
 * @returns Value of expression
 */

function assertDefinedEx<T>(expr: T | undefined, messageFunc?: AssertExMessageFunc<T>): T
function assertDefinedEx<T, R extends Error>(expr: T | undefined, errorFunc?: AssertExErrorFunc<T, R>): T
/**
 * @deprecated - passing a message will soon be required
 */
function assertDefinedEx<T>(expr: T | undefined): T
/**
 * @deprecated - replace string with () => string
 */
function assertDefinedEx<T>(expr: T | undefined, message?: string): T
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
