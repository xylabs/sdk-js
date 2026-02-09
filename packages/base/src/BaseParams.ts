import type { MeterProvider, TracerProvider } from '@opentelemetry/api'
import type { Logger } from '@xylabs/logger'
import type { EmptyObject } from '@xylabs/object'
import type z from 'zod'

import type { BaseParamsV2Zod } from './BaseParams.zod.ts'

export type BaseClassName = string & { __baseClassName: true }

export type BaseParamsDeprecated = {
  /** @deprecated Use context.logger instead */
  logger?: Logger

  /** @deprecated Use context.meterProvider instead */
  meterProvider?: MeterProvider

  /** @deprecated Use context.traceProvider instead */
  traceProvider?: TracerProvider
}

export type BaseParams<TAdditionalParams extends EmptyObject = EmptyObject> = TAdditionalParams & BaseParamsDeprecated

export type BaseParamsV2 = z.infer<typeof BaseParamsV2Zod> & BaseParams
