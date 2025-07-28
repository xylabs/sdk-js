import type {
  JsonArray, JsonObject, JsonValue,
} from './JsonObject.ts'

export const toSafeJsonArray = (value: unknown[], cycleList?: unknown[], maxDepth = 3): JsonArray => {
  return value.map(item => toSafeJsonValue(item, cycleList, maxDepth))
}

export const toSafeJsonObject = (value: object, cycleList?: unknown[], maxDepth = 3): JsonObject => {
  const result: JsonObject = {}
  for (const [key, entry] of Object.entries(value)) {
    result[key] = value === undefined ? '[Undefined]' : toSafeJsonValue(entry, cycleList, maxDepth)
  }
  return result
}

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

export const toSafeJsonString = (value: unknown, maxDepth = 3) => {
  return JSON.stringify(toSafeJson(value, maxDepth), null, 2)
}

export const toSafeJson = (value: unknown, maxDepth = 3): JsonValue => {
  return toSafeJsonValue(value, undefined, maxDepth)
}
