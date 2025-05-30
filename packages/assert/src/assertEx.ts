import type { AssertExErrorFunc, AssertExMessageFunc } from './types.ts'

/**
 *
 * Intended for simple truthiness checks for variables
 *
 * @param expr - Expression to be evaluated for truthiness
 * @param message - Message in Error if expression is false, may be a function that returns a string
 * @throws AssertExError
 * @returns Value of expression
 */

function assertEx<T>(expr: T | null | undefined, messageFunc?: AssertExMessageFunc<T>): T
function assertEx<T, R extends Error>(expr: T | null | undefined, errorFunc?: AssertExErrorFunc<T, R>): T
/**
 * @deprecated - passing a message will soon be required
 */
function assertEx<T>(expr: T | null | undefined): T
/**
 * @deprecated - replace string with () => string
 */
function assertEx<T>(expr: T | null | undefined, message?: string): T
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
