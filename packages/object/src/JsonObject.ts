import {
  zodAsFactory, zodIsFactory, zodToFactory,
} from '@xylabs/zod'
import * as z from 'zod'

const JsonArrayZod = z.array(z.lazy(() => JsonValueZod))

// Define recursive JSON value schema
const JsonValueZod: z.ZodType<unknown> = z.lazy(() =>
  z.union([
    z.string(),
    z.number(),
    z.boolean(),
    z.null(),
    z.array(JsonValueZod),
    z.record(z.string(), JsonValueZod), // object with string keys and JSON values
  ]))

// JSON object schema — top-level must be an object
/** Zod schema for a JSON object with string keys and recursive JSON values. */
export const JsonObjectZod = z.record(z.string(), JsonValueZod)

// TypeScript type for reference
/** A recursive JSON value: string, number, boolean, null, array, or object. */
export type JsonValue = z.infer<typeof JsonValueZod>
/** A JSON object with string keys and JSON values. */
export type JsonObject = z.infer<typeof JsonObjectZod>
/** A JSON array containing JSON values. */
export type JsonArray = z.infer<typeof JsonArrayZod>

/** Type guard that checks if a value is a valid JSON value. */
export const isJsonValue = zodIsFactory(JsonValueZod)
/** Casts a value to JsonValue or returns undefined if it does not conform. */
export const asJsonValue = zodAsFactory(JsonValueZod, 'asJsonValue')
/** Parses a value into a JsonValue, throwing if it does not conform. */
export const toJsonValue = zodToFactory(JsonValueZod, 'toJsonValue')

/** Type guard that checks if a value is a valid JSON array. */
export const isJsonArray = zodIsFactory(JsonArrayZod)
/** Casts a value to JsonArray or returns undefined if it does not conform. */
export const asJsonArray = zodAsFactory(JsonArrayZod, 'asJsonArray')
/** Parses a value into a JsonArray, throwing if it does not conform. */
export const toJsonArray = zodToFactory(JsonArrayZod, 'toJsonArray')

/** Type guard that checks if a value is a valid JSON object. */
export const isJsonObject = zodIsFactory(JsonObjectZod)
/** Casts a value to JsonObject or returns undefined if it does not conform. */
export const asJsonObject = zodAsFactory(JsonObjectZod, 'asJsonObject')
/** Parses a value into a JsonObject, throwing if it does not conform. */
export const toJsonObject = zodToFactory(JsonObjectZod, 'toJsonObject')
