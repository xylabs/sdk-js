import { isError } from '@xylabs/typeof'

/**
 * Invokes the handler if the value is an Error, otherwise re-throws it.
 * @param error - The caught value to inspect
 * @param handler - Callback invoked with the Error if it is one
 * @returns The handler's return value
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const handleError = <T>(error: any, handler: (error: Error) => T) => {
  if (isError(error)) {
    return handler(error)
  } else {
    throw error
  }
}

/**
 * Async version of handleError. Invokes the async handler if the value is an Error, otherwise re-throws it.
 * @param error - The caught value to inspect
 * @param handler - Async callback invoked with the Error if it is one
 * @returns The handler's resolved return value
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const handleErrorAsync = async <T>(error: any, handler: (error: Error) => Promise<T>) => {
  if (isError(error)) {
    return await handler(error)
  } else {
    throw error
  }
}
