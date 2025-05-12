import type {
  Context,
  Tracer,
} from '@opentelemetry/api'
import { context, trace } from '@opentelemetry/api'

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

function clearContext(context: Context): Context {
  return trace.getSpan(context) ? clearContext(trace.deleteSpan(context)) : context
}

export function spanRoot<T>(name: string, fn: () => T, tracer?: Tracer): T {
  if (tracer) {
    // Get current active context for configuration
    const activeContext = context.active()

    // Create a new context with no active span
    const noSpanContext = clearContext(activeContext)

    // Create a new span in the context without an active span
    const span = tracer.startSpan(name, {}, noSpanContext)

    // Use the active context but replace its span with our new root span
    return context.with(trace.setSpan(activeContext, span), () => {
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
    // Get current active context for configuration
    const activeContext = context.active()

    // Create a new context with no active span
    const noSpanContext = clearContext(activeContext)

    // Create a new span in the context without an active span
    const span = tracer.startSpan(name, {}, noSpanContext)

    // Use the active context but replace its span with our new root span
    return await context.with(trace.setSpan(activeContext, span), async () => {
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
