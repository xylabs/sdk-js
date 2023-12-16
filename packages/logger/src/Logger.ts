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
