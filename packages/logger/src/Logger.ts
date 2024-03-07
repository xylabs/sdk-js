import { handleError } from '@xylabs/error'

export type LogFunction = (message?: unknown) => void

/**
 * Interface to handle overlap between Winston &
 * `console` with as much congruency as possible.
 */
export interface Logger {
  debug: LogFunction
  error: LogFunction
  info: LogFunction
  log: LogFunction
  warn: LogFunction
}

export enum LogLevel {
  error = 1,
  warn = 2,
  info = 3,
  debug = 4,
  log = 5,
}

export const NoOpLogFunction = (_message?: unknown) => void {}

export class ConsoleLogger implements Logger {
  constructor(readonly level: LogLevel = LogLevel.warn) {}

  get debug() {
    return this.level >= LogLevel.debug ? console.debug : NoOpLogFunction
  }

  get error() {
    return this.level >= LogLevel.error ? console.error : NoOpLogFunction
  }

  get info() {
    return this.level >= LogLevel.info ? console.info : NoOpLogFunction
  }

  get log() {
    return this.level >= LogLevel.log ? console.log : NoOpLogFunction
  }

  get warn() {
    return this.level >= LogLevel.warn ? console.warn : NoOpLogFunction
  }
}
export const getFunctionName = (depth = 2) => {
  try {
    throw new Error('Getting function name')
  } catch (ex) {
    return handleError(ex, (error) => {
      let newIndex: number | undefined
      const stackParts = error.stack?.split('\n')[depth].split(' ')
      const funcName =
        stackParts?.find((item, index) => {
          if (item.length > 0 && item !== 'at') {
            //check if constructor
            if (item === 'new') {
              newIndex = index
            }
            return item
          }
        }) ?? '<unknown>'
      return newIndex ? `${funcName} ${stackParts?.[newIndex + 1]}` : funcName
    })
  }
}
