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
export const JsonObjectZod = z.record(z.string(), JsonValueZod)

// TypeScript type for reference
export type JsonValue = z.infer<typeof JsonValueZod>
export type JsonObject = z.infer<typeof JsonObjectZod>
export type JsonArray = z.infer<typeof JsonArrayZod>

export const isJsonValue = zodIsFactory(JsonValueZod)
export const asJsonValue = zodAsFactory(JsonValueZod, 'asJsonValue')
export const toJsonValue = zodToFactory(JsonValueZod, 'toJsonValue')

export const isJsonArray = zodIsFactory(JsonArrayZod)
export const asJsonArray = zodAsFactory(JsonArrayZod, 'asJsonArray')
export const toJsonArray = zodToFactory(JsonArrayZod, 'toJsonArray')

export const isJsonObject = zodIsFactory(JsonObjectZod)
export const asJsonObject = zodAsFactory(JsonObjectZod, 'asJsonObject')
export const toJsonObject = zodToFactory(JsonObjectZod, 'toJsonObject')
