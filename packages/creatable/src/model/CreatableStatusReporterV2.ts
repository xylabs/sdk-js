import type z from 'zod'

import type {
  CreatableStatusReporterV2Zod, CreatableStatusSuccessZod, CreatableStatusZod,
} from './CreatableStatusReporter.zod.ts'

export type CreatableStatusSuccessV2 = z.infer<typeof CreatableStatusSuccessZod>
export type CreatableStatusErrorV2 = Extract<CreatableStatusV2, 'error'>
export type CreatableStatusV2 = z.infer<typeof CreatableStatusZod>

export type CreatableStatusReporterV2 = z.infer<typeof CreatableStatusReporterV2Zod>
