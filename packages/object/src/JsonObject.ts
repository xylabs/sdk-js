import {
  zodAsFactory, zodIsFactory, zodToFactory,
} from '@xylabs/zod'
import z from 'zod'

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
export const JsonObjectZod = z.record(z.string(), JsonValueZod)

// TypeScript type for reference
export type JsonValue = z.infer<typeof JsonValueZod>
export type JsonObject = z.infer<typeof JsonObjectZod>
export type JsonArray = z.infer<typeof JsonArrayZod>

export const isJsonValue = zodIsFactory<JsonValue>(JsonValueZod)
export const asJsonValue = zodAsFactory<JsonValue>(JsonValueZod, 'asJsonValue')
export const toJsonValue = zodToFactory<JsonValue>(JsonValueZod, 'toJsonValue')

export const isJsonArray = zodIsFactory<JsonArray>(JsonArrayZod)
export const asJsonArray = zodAsFactory<JsonArray>(JsonArrayZod, 'asJsonArray')
export const toJsonArray = zodToFactory<JsonArray>(JsonArrayZod, 'toJsonArray')

export const isJsonObject = zodIsFactory<JsonObject>(JsonObjectZod)
export const asJsonObject = zodAsFactory<JsonObject>(JsonObjectZod, 'asJsonObject')
export const toJsonObject = zodToFactory<JsonObject>(JsonObjectZod, 'toJsonObject')
