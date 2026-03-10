import { defaultForgetConfig, type ForgetConfig } from './ForgetConfig.ts'

/**
 * Node.js-specific forget configuration that extends ForgetConfig with process termination options.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export interface ForgetNodeConfig<T = any> extends ForgetConfig<T> {
  /** Terminate the process on an exception that happens outside of the promise being forgotten. */
  terminateOnException?: boolean
  /** Terminate the process if the promise times out. */
  terminateOnTimeout?: boolean
}

/** Default Node.js forget configuration with termination disabled. */
export const defaultForgetNodeConfig: ForgetNodeConfig<unknown> = {
  ...defaultForgetConfig,
  terminateOnTimeout: false,
  terminateOnException: false,
}
