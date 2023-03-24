/**
 * Error object thrown by assertEx
 */
class AssertExError extends Error {}

export type AssertExMessageFunc = <T>(value: T) => string

/**
 *
 * Intended for simple null/undefined checks for variables
 *
 * @param expr - Expression to be evaluated for truthiness
 * @param message - Message in Error if expression is false, may be a function that returns a string
 * @throws AssertExError
 * @returns Value of expression
 */
const assertEx = <T>(expr?: T | null, message?: string | AssertExMessageFunc): T => {
  if (expr) return expr
  throw new AssertExError(typeof message === 'string' ? message : message?.(expr))
}

// eslint-disable-next-line import/no-default-export
export default assertEx

export { assertEx }
