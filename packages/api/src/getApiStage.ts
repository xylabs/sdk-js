import { ApiStage } from './ApiStage.ts'

/**
 * Determines the API stage based on the hostname.
 * @param hostname - The hostname to evaluate
 * @returns The corresponding ApiStage (Local, Beta, or Prod)
 */
const getApiStage = (hostname: string) => {
  if (hostname.startsWith('localhost')) {
    return ApiStage.Local
  } else if (hostname.startsWith('beta.')) {
    return ApiStage.Beta
  } else {
    return ApiStage.Prod
  }
}

export { getApiStage }
