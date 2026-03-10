import { isDefined } from '@xylabs/typeof'

/** A function that parses a string value into the target type. */
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
