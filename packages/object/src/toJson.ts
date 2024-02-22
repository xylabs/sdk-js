import { JsonArray, JsonObject, JsonValue } from './JsonObject'

const toJsonArray = (value: unknown[], cycleList?: unknown[]): JsonArray => {
  return value.map((item) => toJsonValue(item, cycleList))
}

const toJsonObject = (value: object, cycleList?: unknown[]): JsonObject => {
  const result: JsonObject = {}
  for (const [key, entry] of Object.entries(value)) {
    result[key] = value === undefined ? '[Undefined]' : toJsonValue(entry, cycleList)
  }
  return result
}

const toJsonValue = (value: unknown, cycleList?: unknown[]): JsonValue => {
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
      return Array.isArray(value) ? toJsonArray(value) : toJsonObject(value)
    }
    default: {
      return `[${typeof value}]`
    }
  }
}

export const toJson = (value: unknown): JsonValue => {
  return toJsonValue(value)
}
