import * as z from 'zod'

import { toHex } from './hex/index.ts'
import { hexToBigInt } from './hexToBigInt.ts'

export const BigIntToJsonZod = z.bigint().nonnegative().transform(x => toHex(x))
export const JsonToBigIntZod = z.string().transform(x => toHex(x)).transform(x => hexToBigInt(x))
