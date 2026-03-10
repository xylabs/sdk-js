import type {
  JsonArray, JsonObject, JsonValue,
} from './JsonObject.ts'

/**
 * Converts an array to a JSON-safe array, handling circular references and depth limits.
 * @param value - The array to convert.
 * @param cycleList - Tracks visited objects to detect circular references.
 * @param maxDepth - Maximum recursion depth before truncating.
 * @returns A JSON-safe array representation.
 */
export const toSafeJsonArray = (value: unknown[], cycleList?: unknown[], maxDepth = 3): JsonArray => {
  return value.map(item => toSafeJsonValue(item, cycleList, maxDepth))
}

/**
 * Converts an object to a JSON-safe object, handling circular references and depth limits.
 * @param value - The object to convert.
 * @param cycleList - Tracks visited objects to detect circular references.
 * @param maxDepth - Maximum recursion depth before truncating.
 * @returns A JSON-safe object representation.
 */
export const toSafeJsonObject = (value: object, cycleList?: unknown[], maxDepth = 3): JsonObject => {
  const result: JsonObject = {}
  for (const [key, entry] of Object.entries(value)) {
    result[key] = value === undefined ? '[Undefined]' : toSafeJsonValue(entry, cycleList, maxDepth)
  }
  return result
}

/**
 * Converts an unknown value to a JSON-safe value, replacing circular references with '[Circular]' and
 * non-JSON types with descriptive placeholder strings.
 * @param value - The value to convert.
 * @param cycleList - Tracks visited objects to detect circular references.
 * @param maxDepth - Maximum recursion depth before truncating with '[MaxDepth]'.
 * @returns A JSON-safe representation of the value.
 */
export const toSafeJsonValue = (value: unknown, cycleList?: unknown[], maxDepth = 3): JsonValue => {
  if (maxDepth <= 0 && typeof value === 'object') {
    return '[MaxDepth]'
  }
  if (cycleList?.includes(value)) {
    return '[Circular]'
  }
  switch (typeof value) {
    case 'string':
    case 'boolean':
    case 'number': {
      return value
    }
    case 'object': {
      if (value === null) {
        return null
      }
      const newCycleList = cycleList ?? []
      newCycleList.push(value)
      return Array.isArray(value) ? toSafeJsonArray(value, newCycleList, maxDepth - 1) : toSafeJsonObject(value, newCycleList, maxDepth - 1)
    }
    default: {
      return `[${typeof value}]`
    }
  }
}

/**
 * Converts a value to a pretty-printed JSON string, safely handling circular references and non-JSON types.
 * @param value - The value to serialize.
 * @param maxDepth - Maximum recursion depth.
 * @returns A formatted JSON string.
 */
export const toSafeJsonString = (value: unknown, maxDepth = 3) => {
  return JSON.stringify(toSafeJson(value, maxDepth), null, 2)
}

/**
 * Converts a value to a JSON-safe representation, handling circular references and non-serializable types.
 * @param value - The value to convert.
 * @param maxDepth - Maximum recursion depth.
 * @returns A JSON-safe value.
 */
export const toSafeJson = (value: unknown, maxDepth = 3): JsonValue => {
  return toSafeJsonValue(value, undefined, maxDepth)
}
