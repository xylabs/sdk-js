import type { ReadableSpan } from '@opentelemetry/sdk-trace-base'
import { ConsoleSpanExporter } from '@opentelemetry/sdk-trace-base'
import type { Logger } from '@xylabs/logger'
import chalk from 'chalk'

export function spanDurationInMillis(span: ReadableSpan) {
  return span.duration[0] * 1000 + span.duration[1] / 1e6
}

export class XyConsoleSpanExporter extends ConsoleSpanExporter {
  static readonly durationToLogLevel = [
    0,
    1,
    10,
    100,
    1000,
  ]

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

  logColor(level: number) {
    return XyConsoleSpanExporter.logLevelToChalkColor[level] ?? chalk.magenta
  }

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
