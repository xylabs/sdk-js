// eslint-disable-next-line @typescript-eslint/no-explicit-any
export interface ForgetConfig<T = any> {
  onCancel?: () => void
  onComplete?: (result: [T | undefined, Error | undefined]) => void
  onException?: (error: Error) => void
  timeout?: number
}

export const defaultForgetConfig: ForgetConfig<unknown> = { timeout: 30_000 }
