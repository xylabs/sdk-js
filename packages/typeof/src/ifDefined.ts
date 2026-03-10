import { typeOf } from './typeOf.ts'

/**
 * Invokes the callback only if the value is neither null nor undefined.
 * @param value - The value to check.
 * @param func - The callback to invoke with the value if it is defined.
 * @returns The value if defined, or undefined otherwise.
 */
export const ifDefined = <T>(value: T, func: (value: T) => void) => {
  switch (typeOf(value)) {
    case 'undefined':
    case 'null': {
      break
    }
    default: {
      func(value)
      return value
    }
  }
}
