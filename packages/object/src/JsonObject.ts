import { isObject, isString } from '@xylabs/typeof'

import type { EmptyObject } from './EmptyObject.ts'
import type { DeepRestrictToStringKeys } from './OmitStartsWith.ts'

export type JsonFieldPair = [key: string, value: JsonValue]
export type JsonValue = string | number | boolean | null | JsonObject | JsonArray
export type JsonObject = { [key: string]: JsonValue }
export type JsonTypedObject<T extends EmptyObject = EmptyObject> = DeepRestrictToStringKeys<T>
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
  return Array.isArray(value) && !value.some(item => !isJsonValue(item))
}

export const asJsonArray = (value: unknown): JsonArray => {
  if (Array.isArray(value)) {
    return value.filter(isJsonValue)
  } else {
    throw new TypeError(`Expected an array, got ${typeof value}`)
  }
}

export const isValidJsonFieldPair = (value: unknown): value is JsonFieldPair => {
  if (!Array.isArray(value) || value.length !== 2) {
    return false
  }
  const [key, val] = value
  return isString(key) && isJsonValue(val)
}

export const isJsonObject = (value: unknown): value is JsonObject => {
  return (
    isObject(value)
    // check if all keys are strings
    && !Object.entries(value).some(item => !isValidJsonFieldPair(item))
  )
}

export const toJsonObject = (value: unknown): JsonObject => {
  if (typeof value !== 'object' || value === null || Array.isArray(value)) {
    throw new TypeError(`Expected an object, got ${typeof value}`)
  }
  if (isJsonObject(value)) {
    return value
  }
  const result: JsonObject = {}
  for (const [k, v] of Object.entries(value)) {
    if (v !== undefined) {
      const [key, jsonValue] = toValidJsonFieldPair([k, v])
      result[key] = jsonValue
    }
  }
  return result
}

export const toJsonValue = (value: unknown): JsonValue => {
  if (isObject(value)) {
    return toJsonObject(value)
  } else if (Array.isArray(value)) {
    return toJsonArray(value)
  } else if (isJsonValue(value)) {
    return value
  }
  throw new TypeError(`Unable to coerce ${typeof value} to a JSON value`)
}

export const toJsonArray = (value: unknown): JsonArray => {
  if (Array.isArray(value)) {
    return value.map(item => toJsonValue(item))
  }
  throw new TypeError(`Unable to coerce ${typeof value} to a JSON array`)
}

export const toValidJsonFieldPair = (pair: [key: unknown, value: unknown]): JsonFieldPair => {
  const [key, value] = pair
  if (!isString(key)) {
    throw new TypeError(`Expected a string key, got ${typeof key}`)
  }

  if (isJsonValue(value)) {
    return [key, value]
  } else if (isObject(value)) {
    return [key, toJsonObject(value)]
  }

  throw new TypeError(`Expected a valid JSON value, got ${typeof value}`)
}
