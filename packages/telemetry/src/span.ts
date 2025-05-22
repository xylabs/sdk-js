import type {
  Context,
  Tracer,
} from '@opentelemetry/api'
import {
  context, propagation, ROOT_CONTEXT, SpanStatusCode, trace as TRACE_API,
} from '@opentelemetry/api'
import { isDefined } from '@xylabs/typeof'

export function cloneContextWithoutSpan(activeCtx: Context, configKeys: symbol[] = []): Context {
  // Start from root to ensure no span is propagated
  let newCtx = ROOT_CONTEXT

  // Copy baggage
  const baggage = propagation.getBaggage(activeCtx)
  if (baggage) {
    newCtx = propagation.setBaggage(newCtx, baggage)
  }

  // Copy custom config keys
  for (const key of configKeys) {
    const value = activeCtx.getValue(key)
    if (value !== undefined) {
      newCtx = newCtx.setValue(key, value)
    }
  }

  return newCtx
}

export function span<T>(name: string, fn: () => T, tracer?: Tracer): T {
  const activeTracer = tracer ?? TRACE_API.getTracer(name)
  if (isDefined(activeTracer)) {
    const span = activeTracer.startSpan(name)
    return context.with(TRACE_API.setSpan(context.active(), span), () => {
      try {
        const result = fn()
        span.setStatus({ code: SpanStatusCode.OK })
        return result
      } catch (ex) {
        const error = ex as Error
        span.recordException(error)
        span.setStatus({ code: SpanStatusCode.ERROR, message: error.message })
        throw ex
      } finally {
        span.end()
      }
    })
  } else {
    return fn()
  }
}

export function spanRoot<T>(name: string, fn: () => T, tracer?: Tracer): T {
  const activeTracer = tracer ?? TRACE_API.getTracer(name)
  if (isDefined(activeTracer)) {
    // Get current active context for configuration
    const activeContext = context.active()

    // Create a new context with no active span
    const noSpanContext = cloneContextWithoutSpan(activeContext)

    // Create a new span in the context without an active span
    const span = activeTracer.startSpan(name, {}, noSpanContext)

    // Use the active context but replace its span with our new root span
    return context.with(TRACE_API.setSpan(noSpanContext, span), () => {
      try {
        const result = fn()
        span.setStatus({ code: SpanStatusCode.OK })
        return result
      } catch (ex) {
        const error = ex as Error
        span.recordException(error)
        span.setStatus({ code: SpanStatusCode.ERROR, message: error.message })
        throw ex
      } finally {
        span.end()
      }
    })
  } else {
    return fn()
  }
}

export async function spanAsync<T>(
  name: string,
  fn: () => Promise<T>,
  tracer?: Tracer,
): Promise<T> {
  const activeTracer = tracer ?? TRACE_API.getTracer(name)
  if (isDefined(activeTracer)) {
    const span = activeTracer.startSpan(name)
    return await context.with(TRACE_API.setSpan(context.active(), span), async () => {
      try {
        const result = await fn()
        span.setStatus({ code: SpanStatusCode.OK })
        return result
      } catch (ex) {
        const error = ex as Error
        span.recordException(error)
        span.setStatus({ code: SpanStatusCode.ERROR, message: error.message })
        throw ex
      } finally {
        span.end()
      }
    })
  } else {
    return await fn()
  }
}

export async function spanRootAsync<T>(
  name: string,
  fn: () => Promise<T>,
  tracer?: Tracer,
): Promise<T> {
  const activeTracer = tracer ?? TRACE_API.getTracer(name)
  if (isDefined(activeTracer)) {
    const activeContext = context.active()

    const noSpanContext = cloneContextWithoutSpan(activeContext)

    // Create a new span in the context without an active span
    const span = activeTracer.startSpan(name, {}, noSpanContext)

    // Use the active context but replace its span with our new root span
    return await context.with(TRACE_API.setSpan(noSpanContext, span), async () => {
      try {
        const result = await fn()
        span.setStatus({ code: SpanStatusCode.OK })
        return result
      } catch (ex) {
        const error = ex as Error
        span.recordException(error)
        span.setStatus({ code: SpanStatusCode.ERROR, message: error.message })
        throw ex
      } finally {
        span.end()
      }
    })
  } else {
    return await fn()
  }
}
