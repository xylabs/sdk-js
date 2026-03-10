import * as z from 'zod'

import { toHex } from './hex/index.ts'
import { hexToBigInt } from './hexToBigInt.ts'

/** Zod schema that transforms a non-negative BigInt into a hex string for JSON serialization. */
export const BigIntToJsonZod = z.bigint().nonnegative().transform(x => toHex(x))
/** Zod schema that parses a JSON hex string into a BigInt. */
export const JsonToBigIntZod = z.string().transform(x => toHex(x)).transform(x => hexToBigInt(x))
