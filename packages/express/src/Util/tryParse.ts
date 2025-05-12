import { isDefined } from '@xylabs/typeof'

export type ParseFunc<T = number> = (value: string) => T

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

export const tryParseFloat = (value?: string) => {
  return tryParse(Number.parseFloat, value)
}

export const tryParseInt = (value?: string) => {
  return tryParse(Number.parseInt, value)
}
