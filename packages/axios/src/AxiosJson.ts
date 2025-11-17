import type { Logger } from '@xylabs/logger'
import { Axios } from 'axios'

import type { RawAxiosJsonRequestConfig } from './axiosJsonConfig.ts'
import { axiosJsonConfig } from './axiosJsonConfig.ts'

function deprecated(from: string, to: string, logger: Logger = console) {
  logger.warn(`${from} is deprecated. Please use ${to} instead.`)
}

/** @deprecated use axiosJsonConfig instead */
export class AxiosJson extends Axios {
  constructor(config?: RawAxiosJsonRequestConfig) {
    deprecated('AxiosJson', 'axiosJsonConfig')
    // eslint-disable-next-line sonarjs/deprecation
    super(AxiosJson.axiosConfig(config))
  }

  static axiosConfig(config: RawAxiosJsonRequestConfig = {}): RawAxiosJsonRequestConfig {
    return axiosJsonConfig(config)
  }

  static create(config?: RawAxiosJsonRequestConfig) {
    return new Axios(this.axiosConfig(config))
  }
}
