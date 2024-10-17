import type { Logger } from '@xylabs/logger'
import type { AxiosResponse, RawAxiosRequestConfig } from 'axios'
import { Axios, AxiosHeaders } from 'axios'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type RawAxiosJsonRequestUncompressedConfig<D = any> = RawAxiosRequestConfig<D>

export class AxiosJsonUncompressed extends Axios {
  static defaultLogger?: Logger

  constructor(config?: RawAxiosJsonRequestUncompressedConfig) {
    super(AxiosJsonUncompressed.axiosConfig(config))
  }

  static finalPath(response: AxiosResponse) {
    if (response.request.path) {
      // nodejs
      return response.request.path.split('/').pop()
    } else if (response.request.responseURL) {
      // browser
      return response.request.responseURL.split('/').pop()
    } else {
      this.defaultLogger?.warn('Failed to get final path from response')
    }
  }

  private static axiosConfig({ headers, ...config }: RawAxiosJsonRequestUncompressedConfig = {}): RawAxiosJsonRequestUncompressedConfig {
    return {
      headers: this.buildHeaders(headers),
      transformRequest: (data) => {
        const json = JSON.stringify(data)
        return JSON.stringify(json)
      },
      transformResponse: (data) => {
        try {
          return JSON.parse(data)
        } catch {
          return null
        }
      },
      ...config,
    }
  }

  private static buildHeaders(headers: RawAxiosJsonRequestUncompressedConfig['headers']) {
    const axiosHeaders = new AxiosHeaders()
    axiosHeaders.set('Accept', 'application/json, text/plain, *.*')
    axiosHeaders.set('Content-Type', 'application/json')
    for (const [key, value] of Object.entries(headers ?? {})) axiosHeaders.set(key, value)
    return axiosHeaders
  }
}
