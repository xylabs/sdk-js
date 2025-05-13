import type {
  Context,
  Tracer,
} from '@opentelemetry/api'
import {
  context, propagation, ROOT_CONTEXT, trace,
} from '@opentelemetry/api'

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
  if (tracer) {
    const span = tracer.startSpan(name)
    return context.with(trace.setSpan(context.active(), span), () => {
      try {
        return fn()
      } finally {
        span.end()
      }
    })
  } else {
    return fn()
  }
}

export function spanRoot<T>(name: string, fn: () => T, tracer?: Tracer): T {
  if (tracer) {
    // Get current active context for configuration
    const activeContext = context.active()

    // Create a new context with no active span
    const noSpanContext = cloneContextWithoutSpan(activeContext)

    // Create a new span in the context without an active span
    const span = tracer.startSpan(name, {}, noSpanContext)

    // Use the active context but replace its span with our new root span
    return context.with(trace.setSpan(noSpanContext, span), () => {
      try {
        return fn()
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
  if (tracer) {
    const span = tracer.startSpan(name)
    return await context.with(trace.setSpan(context.active(), span), async () => {
      try {
        return await fn()
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
  if (tracer) {
    const activeContext = context.active()

    const noSpanContext = cloneContextWithoutSpan(activeContext)

    // Create a new span in the context without an active span
    const span = tracer.startSpan(name, {}, noSpanContext)

    // Use the active context but replace its span with our new root span
    return await context.with(trace.setSpan(noSpanContext, span), async () => {
      try {
        return await fn()
      } finally {
        span.end()
      }
    })
  } else {
    return await fn()
  }
}
