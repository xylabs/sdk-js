import type { LogFunction, Logger } from '@xylabs/logger'
import type { Logger as Winston } from 'winston'

/**
 * Wrap Winston logger methods to adapt to familiar
 * console logging methods
 */
export class WrappedWinstonLogger implements Logger {
  constructor(protected readonly winston: Winston) {}
  debug: LogFunction = message => this.winston.debug(message)
  error: LogFunction = message => this.winston.error(message)
  info: LogFunction = message => this.winston.info(message)
  log: LogFunction = message => this.winston.info(message)
  warn: LogFunction = message => this.winston.warn(message)
}
