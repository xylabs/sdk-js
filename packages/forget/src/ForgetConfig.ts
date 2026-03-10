/**
 * Configuration options for fire-and-forget promises.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export interface ForgetConfig<T = any> {
  /** Optional name for identifying the forgotten promise in logs. */
  name?: string
  /** Called when the promise is cancelled due to timeout. */
  onCancel?: () => void
  /** Called when the promise completes, with a tuple of [result, error]. */
  onComplete?: (result: [T | undefined, Error | undefined]) => void
  /** Called when an exception occurs outside the promise itself. */
  onException?: (error: Error) => void
  /** Timeout in milliseconds after which the promise is considered timed out. */
  timeout?: number
}

/** Default forget configuration with a 30-second timeout. */
export const defaultForgetConfig: ForgetConfig<unknown> = { timeout: 30_000 }
