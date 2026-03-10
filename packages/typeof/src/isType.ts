import type { FieldType } from './ObjectTypeShape.ts'

/**
 * Checks whether a value matches the expected field type, with correct handling for arrays and nulls.
 * @param value - The value to check.
 * @param expectedType - The expected type string.
 * @returns True if the value matches the expected type.
 */
export const isType = (value: unknown, expectedType: FieldType) => {
  const typeofValue = typeof value
  switch (expectedType) {
    case 'array': {
      return Array.isArray(value)
    }
    case 'null': {
      return value === null
    }
    case 'undefined': {
      return value === undefined
    }
    case 'object': {
      // nulls resolve to objects, so exclude them
      if (value === null) {
        return false
      }
      // arrays resolve to objects, so exclude them
      return typeofValue === 'object' && !Array.isArray(value)
    }
    default: {
      return typeofValue === expectedType
    }
  }
}
