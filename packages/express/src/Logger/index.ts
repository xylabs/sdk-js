export * from './getDefaultLogger.ts'
export * from './getLogger.ts'
export * from './LoggerMeta.ts'
export * from './LoggerOptions.ts'
export * from './LoggerVerbosity.ts'
export * from './WrappedWinstonLogger.ts'
import type { LogFunction as XyLabsLogFunction, Logger as XyLabsLogger } from '@xylabs/logger'

/** @deprecated use from @xylabs/logger instead */
export type LogFunction = XyLabsLogFunction

/** @deprecated use from @xylabs/logger instead */
export type Logger = XyLabsLogger
