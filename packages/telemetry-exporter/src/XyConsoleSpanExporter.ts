import type { ReadableSpan } from '@opentelemetry/sdk-trace-base'
import { ConsoleSpanExporter } from '@opentelemetry/sdk-trace-base'
import type { Logger } from '@xylabs/logger'
import chalk from 'chalk'

/**
 * Calculates the duration of a span in milliseconds from its high-resolution time tuple.
 * @param span - The span to measure.
 * @returns The span duration in milliseconds.
 */
export function spanDurationInMillis(span: ReadableSpan) {
  return span.duration[0] * 1000 + span.duration[1] / 1e6
}

/**
 * A console span exporter that formats spans with color-coded durations using chalk.
 * Spans are filtered by a configurable log level based on their duration.
 */
export class XyConsoleSpanExporter extends ConsoleSpanExporter {
  /** Duration thresholds (in ms) that map to increasing log levels. */
  static readonly durationToLogLevel = [
    0,
    1,
    10,
    100,
    1000,
  ]

  /** Chalk color functions corresponding to each log level. */
  static readonly logLevelToChalkColor = [
    chalk.grey,
    chalk.white,
    chalk.green,
    chalk.yellow,
    chalk.red,
  ]

  logger: Logger
  private _logLevel: number

  constructor(logLevel = 0, logger: Logger = console) {
    super()
    this._logLevel = logLevel
    this.logger = logger
  }

  /** The minimum log level required for a span to be exported. */
  get logLevel() {
    return this._logLevel
  }

  override export(spans: ReadableSpan[]): void {
    for (const span of spans) {
      const spanLevel = this.spanLevel(span)
      if (spanLevel < this.logLevel) {
        continue
      }
      const duration = spanDurationInMillis(span)
      this.logger.log(chalk.grey([
        `Span [${span.name}]`,
        this.logColor(spanLevel)(`${duration}ms`),
        `TraceId: ${span.spanContext().traceId}`,
      ].join(', ')))
    }
  }

  /**
   * Returns the chalk color function for the given log level.
   * @param level - The log level index.
   * @returns A chalk color function.
   */
  logColor(level: number) {
    return XyConsoleSpanExporter.logLevelToChalkColor[level] ?? chalk.magenta
  }

  /**
   * Determines the log level of a span based on its duration.
   * @param span - The span to evaluate.
   * @returns The numeric log level (index into durationToLogLevel).
   */
  spanLevel(span: ReadableSpan) {
    let logLevel = 0
    const duration = spanDurationInMillis(span)
    for (let x = XyConsoleSpanExporter.durationToLogLevel.length - 1; x >= 0; x--) {
      if (duration > XyConsoleSpanExporter.durationToLogLevel[x]) {
        logLevel = x
        break
      }
    }
    return logLevel
  }
}
