import { isDefined } from '@xylabs/typeof'

export type ParseFunc<T = number> = (value: string) => T

/**
 * @deprecated use zod instead
 */
export const tryParse = <T = number>(func: ParseFunc<T>, value?: string) => {
  try {
    const result = isDefined(value) ? func(value) : null
    if (!Number.isNaN(result) && result !== null) {
      return result
    }
  } catch {
    return
  }
}

/**
 * @deprecated use zod instead
 */
export const tryParseFloat = (value?: string) => {
  // eslint-disable-next-line sonarjs/deprecation
  return tryParse(Number.parseFloat, value)
}

/**
 * @deprecated use zod instead
 */
export const tryParseInt = (value?: string) => {
  // eslint-disable-next-line sonarjs/deprecation
  return tryParse(Number.parseInt, value)
}
