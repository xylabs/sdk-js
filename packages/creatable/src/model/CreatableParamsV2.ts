import { BaseContextZod } from '@xylabs/base'
import { BaseEmitterParamsV2Zod } from '@xylabs/events'
import z from 'zod'

import { CreatableStatusReporterV2Zod } from './CreatableStatusReporter.zod.ts'

export const CreatableContext = z.intersection(BaseContextZod, z.object({ name: z.string(), statusReporter: CreatableStatusReporterV2Zod.optional() }))

export const CreatableParamsV2Zod = BaseEmitterParamsV2Zod.extend(z.object({ context: CreatableContext, name: z.string() }).shape)

export type CreatableParamsV2 = z.infer<typeof CreatableParamsV2Zod>
