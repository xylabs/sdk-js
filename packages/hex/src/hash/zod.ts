import { z } from 'zod'

import { asHash } from './as.ts'
import type { Hash } from './hash.ts'
import { HashZod } from './hash.ts'

export const HashToJsonZod = HashZod.transform<string>(v => v)
export const JsonToHashZod = z.string().transform<Hash>(v => asHash(v, true))
