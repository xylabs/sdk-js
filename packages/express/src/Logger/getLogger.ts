import { createLogger, transports as winstonTransports } from 'winston'
import type TransportStream from 'winston-transport'

import { logFormatLocalDev, logFormatStructured } from './LogFormats/index.ts'
import type { Logger } from './Logger.ts'
import type { LoggerVerbosity } from './LoggerVerbosity.ts'
import { toWinstonVerbosity } from './toWinstonVerbosity.ts'
import { canGetDefaultRollbarTransport, getDefaultRollbarTransport } from './Transports/index.ts'
import type { WinstonVerbosity } from './WinstonVerbosity.ts'
import { WrappedWinstonLogger } from './WrappedWinstonLogger.ts'

const exitOnError = false
const handleRejections = true

const { Console } = winstonTransports
const consoleTransport = new Console()
const format = process.env.NODE_ENV === 'development' ? logFormatLocalDev : logFormatStructured
const transports: TransportStream[] = [consoleTransport]
if (canGetDefaultRollbarTransport(process.env)) {
  try {
    const rollbarTransport = getDefaultRollbarTransport(process.env)
    transports.push(rollbarTransport)
  } catch {
    // NOTE: No error here, just gracefully adding logger if ENV VARs
    // were preset
  }
}

const loggers: Record<WinstonVerbosity, Logger | undefined> = {
  debug: undefined,
  error: undefined,
  http: undefined,
  info: undefined,
  silly: undefined,
  verbose: undefined,
  warn: undefined,
}

export const getLogger = (minVerbosity: LoggerVerbosity = 'info'): Logger => {
  const level = toWinstonVerbosity(minVerbosity)
  const existing = loggers[level]
  if (existing) return existing
  const logger = new WrappedWinstonLogger(
    createLogger({
      exitOnError,
      format,
      handleRejections,
      level,
      rejectionHandlers: transports,
      transports,
    }),
  )
  loggers[level] = logger
  return logger
}
