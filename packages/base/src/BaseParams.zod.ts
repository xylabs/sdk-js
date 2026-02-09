import { z } from 'zod'

import {
  BaseContextZod, LoggerZod, MeterProviderZod,
  TracerProviderZod,
} from './BaseContext.zod.ts'

export const BaseParamsZod = z.object({
  logger: LoggerZod.optional(),
  meterProvider: MeterProviderZod.optional(),
  traceProvider: TracerProviderZod.optional(),
})

export const BaseParamsV2Zod = z.object({ context: BaseContextZod })
