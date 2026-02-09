import { BaseContextZod } from '@xylabs/base'
import { BaseEmitterParamsV2Zod } from '@xylabs/events'
import z from 'zod'

import { CreatableStatusReporterV2Zod } from './CreatableStatusReporter.zod.ts'

export const CreatableContextZod = BaseContextZod.extend({ statusReporter: CreatableStatusReporterV2Zod.optional() })

export const CreatableParamsV2Zod = BaseEmitterParamsV2Zod.extend({ context: CreatableContextZod, name: z.string() })

export type CreatableParamsV2 = z.infer<typeof CreatableParamsV2Zod>
