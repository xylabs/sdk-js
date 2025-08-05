import { ApiStage } from './ApiStage.ts'

abstract class ApiClient {
  protected stage?: ApiStage
  protected token?: string | null

  constructor(
    token?: string | null,
    stage?: ApiStage,
  ) {
    this.stage = stage ?? ApiStage.Prod
    this.token = token
  }

  abstract endPoint(): string
}

export { ApiClient }
