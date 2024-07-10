import { ApiStage } from './ApiStage.js'

abstract class ApiClient {
  constructor(
    protected token?: string | null,
    protected stage?: ApiStage,
  ) {
    this.stage = stage ?? ApiStage.Prod
    this.token = token
  }

  abstract endPoint(): string
}

export { ApiClient }
