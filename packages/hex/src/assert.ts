type AssertCallback = (value: unknown, message: string) => string | boolean

export type AssertConfig = string | AssertCallback | boolean

export const assertError = (value: unknown, assert: AssertConfig | undefined, defaultMessage: string) => {
  if (assert) {
    const assertString
      = typeof assert === 'string'
        ? assert
        : typeof assert === 'boolean'
          ? defaultMessage
          : assert(value, defaultMessage)
    if (assertString) {
      throw new Error(assertString === true ? defaultMessage : assertString)
    }
  }
  // eslint-disable-next-line unicorn/no-useless-undefined
  return undefined
}
