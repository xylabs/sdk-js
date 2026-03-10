import type {
  Context,
  Tracer,
} from '@opentelemetry/api'
import {
  context, propagation, ROOT_CONTEXT, SpanStatusCode, trace as TRACE_API,
} from '@opentelemetry/api'
import type { Logger } from '@xylabs/logger'
import { isDefined } from '@xylabs/typeof'

import { timeBudget } from './timeBudget.ts'

/** Configuration options for span creation and execution. */
export interface SpanConfig {
  /** Optional logger for time budget warnings. Falls back to console if not provided. */
  logger?: Logger | null
  /** Maximum allowed execution time in milliseconds before logging a warning. */
  timeBudgetLimit?: number
  /** OpenTelemetry tracer to use. Defaults to a tracer named after the span. */
  tracer?: Tracer
}

/**
 * Creates a new OpenTelemetry context that preserves baggage and custom keys but has no active span.
 * @param activeCtx - The context to clone from.
 * @param configKeys - Additional context keys to copy.
 * @returns A new context with baggage but no parent span.
 */
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

/**
 * Executes a synchronous function within an OpenTelemetry span, recording status and exceptions.
 * @param name - The span name.
 * @param fn - The function to execute.
 * @param tracer - Optional tracer to use.
 * @returns The return value of `fn`.
 */
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

/**
 * Executes a synchronous function within a new root span that has no parent, even if a span is already active.
 * @param name - The span name.
 * @param fn - The function to execute.
 * @param tracer - Optional tracer to use.
 * @returns The return value of `fn`.
 */
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

/**
 * Executes an async function within an OpenTelemetry span, with optional time budget monitoring.
 * @param name - The span name.
 * @param fn - The async function to execute.
 * @param config - Optional span configuration (tracer, logger, time budget).
 * @returns The resolved value of `fn`.
 */
export async function spanAsync<T>(
  name: string,
  fn: () => Promise<T>,
  {
    timeBudgetLimit, logger, tracer,
  }: SpanConfig = {},
): Promise<T> {
  const activeTracer = tracer ?? TRACE_API.getTracer(name)
  const funcToRun = isDefined(timeBudgetLimit) ? () => timeBudget(name, logger ?? console, fn, timeBudgetLimit) : fn
  if (isDefined(activeTracer)) {
    const span = activeTracer.startSpan(name)
    return await context.with(TRACE_API.setSpan(context.active(), span), async () => {
      try {
        const result = await funcToRun()
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
    return await funcToRun()
  }
}

/**
 * Executes an async function within a new root span (no parent), with optional time budget monitoring.
 * @param name - The span name.
 * @param fn - The async function to execute.
 * @param config - Optional span configuration (tracer, logger, time budget).
 * @returns The resolved value of `fn`.
 */
export async function spanRootAsync<T>(
  name: string,
  fn: () => Promise<T>,
  {
    timeBudgetLimit, logger, tracer,
  }: SpanConfig = {},
): Promise<T> {
  const funcToRun = isDefined(timeBudgetLimit) ? () => timeBudget(name, logger ?? console, fn, timeBudgetLimit) : fn
  const activeTracer = tracer ?? TRACE_API.getTracer(name)
  if (isDefined(activeTracer)) {
    const activeContext = context.active()

    const noSpanContext = cloneContextWithoutSpan(activeContext)

    // Create a new span in the context without an active span
    const span = activeTracer.startSpan(name, {}, noSpanContext)

    // Use the active context but replace its span with our new root span
    return await context.with(TRACE_API.setSpan(noSpanContext, span), async () => {
      try {
        const result = await funcToRun()
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
    return await funcToRun()
  }
}
