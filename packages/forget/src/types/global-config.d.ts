import type { ForgetConfig } from './ForgetConfig.ts'

declare global {
  var xy: {
    forget: {
      config: ForgetConfig | undefined
    } | undefined
  } | undefined
}
