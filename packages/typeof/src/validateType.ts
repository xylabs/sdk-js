import { typeOf } from './typeOf.ts'
import type { TypeOfTypes } from './TypeOfTypes.ts'

/**
 * Validates that a value matches the expected type, returning the value and any errors.
 * @param typeName - The expected type name.
 * @param value - The value to validate.
 * @param optional - If true, undefined values are accepted without error.
 * @returns A tuple of [value or undefined, array of errors].
 */
export const validateType = <T>(typeName: TypeOfTypes, value: T, optional = false): [T | undefined, Error[]] => {
  switch (typeOf(value)) {
    case typeName: {
      return [value, []]
    }
    default: {
      if (optional && typeOf(value) === 'undefined') {
        return [value, []]
      }
      return [undefined, [new Error(`value type is not '${typeName}:${typeof value}'`)]]
    }
  }
}
