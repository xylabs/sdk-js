import { ApiStage } from './ApiStage.ts'

/** Abstract base class for API clients that provides stage and token configuration. */
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
