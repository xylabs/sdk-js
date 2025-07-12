import type { ForgetNodeConfig } from './ForgetNodeConfig.ts'

declare global {
  var xy: {
    forget: {
      config: ForgetNodeConfig | undefined
    } | undefined
  } | undefined
}
