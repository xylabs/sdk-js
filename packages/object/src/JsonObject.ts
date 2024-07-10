import { isObject } from './isObject.js'

export type JsonValue = string | number | boolean | null | JsonObject | JsonArray
export type JsonObject = { [key: string]: JsonValue }
export type JsonArray = JsonValue[]

export const isJsonValue = (value: unknown): value is JsonValue => {
  switch (typeof value) {
    case 'string':
    case 'number':
    case 'boolean': {
      return true
    }
    default: {
      return value === null || isJsonObject(value) || isJsonArray(value)
    }
  }
}

export const isJsonArray = (value: unknown): value is JsonArray => {
  return Array.isArray(value) && !value.some((item) => !isJsonValue(item))
}

export const isValidJsonFieldPair = ([key, value]: [key: unknown, value: unknown]) => {
  return typeof key === 'string' && isJsonValue(value)
}

export const isJsonObject = (value: unknown): value is JsonObject => {
  return (
    isObject(value) &&
    //check if all keys are strings
    !Object.entries(value).some((item) => !isValidJsonFieldPair(item))
  )
}
