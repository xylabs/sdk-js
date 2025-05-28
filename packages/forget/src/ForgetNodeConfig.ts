import { defaultForgetConfig, type ForgetConfig } from './ForgetConfig.ts'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export interface ForgetNodeConfig<T = any> extends ForgetConfig<T> {
  terminateOnException?: boolean // terminate the process on an exception that happens outside of the promise being forgotten
  terminateOnTimeout?: boolean // terminate the process if the promise times out
}

export const defaultForgetNodeConfig: ForgetNodeConfig<unknown> = {
  ...defaultForgetConfig,
  terminateOnTimeout: false,
  terminateOnException: false,
}
