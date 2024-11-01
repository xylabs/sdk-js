import { isType } from '@xylabs/typeof'

// eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
export type TypedValue = bigint | string | number | boolean | null | TypedObject | TypedArray | Function | symbol | undefined
export type TypedKey<T extends string | void = void> = T extends string ? T : string | number | symbol
export type TypedObject = { [key: TypedKey]: TypedValue } | object
export type TypedArray = TypedValue[]

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

export const isTypedArray = (value: unknown): value is TypedArray => {
  return Array.isArray(value) && !value.some(item => !isTypedValue(item))
}

export const isValidTypedFieldPair = (pair: [key: unknown, value: unknown]): pair is [key: TypedKey, value: TypedValue] => {
  const [key, value] = pair
  return isTypedKey(key) && isTypedValue(value)
}

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
