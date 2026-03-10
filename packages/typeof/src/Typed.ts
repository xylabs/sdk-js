import { isType } from './isType.ts'

/** A value that can appear in a typed object tree (primitives, objects, arrays, functions, and symbols). */
// eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
export type TypedValue = bigint | string | number | boolean | null | TypedObject | TypedArray | Function | symbol | undefined

/** A valid key for a typed object. Defaults to string | number | symbol unless narrowed by T. */
export type TypedKey<T extends string | void = void> = T extends string ? T : string | number | symbol

/** An object whose keys are TypedKey and whose values are TypedValue. */
export type TypedObject = { [key: TypedKey]: TypedValue } | object

/** An array of TypedValue elements. */
export type TypedArray = TypedValue[]

/**
 * Type guard that checks whether a value is a valid TypedKey (string, bigint, number, or symbol).
 * @param value - The value to check.
 * @returns True if the value is a valid TypedKey.
 */
export const isTypedKey = (value: unknown): value is TypedKey => {
  switch (typeof value) {
    case 'string':
    case 'bigint':
    case 'number':
    case 'symbol': {
      return true
    }
    default: {
      return false
    }
  }
}

/**
 * Type guard that checks whether a value is a valid TypedValue.
 * @param value - The value to check.
 * @returns True if the value is a string, number, boolean, null, TypedObject, or TypedArray.
 */
export const isTypedValue = (value: unknown): value is TypedValue => {
  switch (typeof value) {
    case 'string':
    case 'number':
    case 'boolean': {
      return true
    }
    default: {
      return value === null || isTypedObject(value) || isTypedArray(value)
    }
  }
}

/**
 * Type guard that checks whether a value is a TypedArray (an array where every element is a TypedValue).
 * @param value - The value to check.
 * @returns True if the value is an array of TypedValue elements.
 */
export const isTypedArray = (value: unknown): value is TypedArray => {
  return Array.isArray(value) && !value.some(item => !isTypedValue(item))
}

/**
 * Type guard that checks whether a key-value pair has a valid TypedKey and TypedValue.
 * @param pair - A tuple of [key, value] to validate.
 * @returns True if the key is a TypedKey and the value is a TypedValue.
 */
export const isValidTypedFieldPair = (pair: [key: unknown, value: unknown]): pair is [key: TypedKey, value: TypedValue] => {
  const [key, value] = pair
  return isTypedKey(key) && isTypedValue(value)
}

/**
 * Type guard that checks whether a value is a TypedObject (an object with TypedKey keys and TypedValue values).
 * @param value - The value to check.
 * @returns True if the value is a valid TypedObject.
 */
export const isTypedObject = (value: unknown): value is TypedObject => {
  return (
    isType(value, 'object')
    // check if all keys are strings
    && !Object.entries(value as object).some(item => !isValidTypedFieldPair(item))
  )
}

// Object Type Test
/*
interface TestObject {
  value: number
}

const x: TestObject = { value: 1 }

const f = (p: TypedValue): void => {
  console.log(p)
}

f(x)
*/
