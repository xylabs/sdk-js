import * as z from 'zod'

import { asHash } from './as.ts'
import type { Hash } from './hash.ts'
import { HashZod } from './hash.ts'

/** Zod schema that transforms a Hash to a plain string for JSON serialization. */
export const HashToJsonZod = HashZod.transform<string>(v => v)
/** Zod schema that parses a JSON string into a validated Hash, throwing on invalid input. */
export const JsonToHashZod = z.string().transform<Hash>(v => asHash(v, true))
