import { isString, isUndefined } from '@xylabs/typeof'

type AssertCallback = (value: unknown, message: string) => string | boolean

/** Configuration for assertion behavior: a static message string, a boolean toggle, or a callback. */
export type AssertConfig = string | AssertCallback | boolean

/**
 * Throws an Error based on the assert configuration when a value fails validation.
 * @param value - The value being validated
 * @param assert - Assertion config controlling the error message
 * @param defaultMessage - Fallback message if no custom message is provided
 */
export const assertError = (value: unknown, assert: AssertConfig | undefined, defaultMessage: string) => {
  if (!isUndefined(assert)) {
    const assertString
      = typeof assert === 'string'
        ? assert
        : typeof assert === 'boolean'
          ? defaultMessage
          : assert(value, defaultMessage)
    if (isString(assertString) || assertString === true) {
      throw new Error(assertString === true ? defaultMessage : assertString)
    }
  }
  // eslint-disable-next-line unicorn/no-useless-undefined
  return undefined
}
