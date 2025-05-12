import {
  context, trace, type Tracer,
} from '@opentelemetry/api'

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
    const span = tracer.startSpan(name, { root: true })
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
    const span = tracer.startSpan(name, { root: true })
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
