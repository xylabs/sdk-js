import { ApiStage } from './ApiStage.js'

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
