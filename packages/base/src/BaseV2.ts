import type {
  Meter,
  Tracer,
} from '@opentelemetry/api'

import { Base } from './Base.ts'
import type { BaseClassName, BaseParamsV2 } from './BaseParams.ts'

export abstract class BaseV2<TParams extends BaseParamsV2 = BaseParamsV2> extends Base<TParams> {
  get context() {
    return this.params.context
  }

  override get logger() {
    return this.context.logger ?? BaseV2.defaultLogger
  }

  override get meter(): Meter | undefined {
    return this.context.meterProvider?.getMeter(this.className)
  }

  override get params(): TParams {
    return super.params
  }

  override get tracer(): Tracer | undefined {
    return this.context.traceProvider?.getTracer(this.className)
  }

  abstract get className(): BaseClassName
}
