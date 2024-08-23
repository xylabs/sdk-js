import type { Logger } from '@xylabs/logger'
import type { AxiosResponse, RawAxiosRequestConfig } from 'axios'
import { Axios, AxiosHeaders } from 'axios'
import { gzip } from 'pako'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type RawAxiosJsonRequestConfig<D = any> = RawAxiosRequestConfig<D> & { compressLength?: number }

export class AxiosJson extends Axios {
  static defaultLogger?: Logger

  constructor(config?: RawAxiosJsonRequestConfig) {
    super(AxiosJson.axiosConfig(config))
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

  private static axiosConfig({
 compressLength, headers, ...config
}: RawAxiosJsonRequestConfig = {}): RawAxiosJsonRequestConfig {
    return {
      headers: this.buildHeaders(headers),
      transformRequest: (data, headers) => {
        const json = JSON.stringify(data)
        if (headers && data && json.length > (compressLength ?? 1024)) {
          headers['Content-Encoding'] = 'gzip'
          return gzip(JSON.stringify(data)).buffer
        }
        return JSON.stringify(data)
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

  private static buildHeaders(headers: RawAxiosJsonRequestConfig['headers']) {
    const axiosHeaders = new AxiosHeaders()
    axiosHeaders.set('Accept', 'application/json, text/plain, *.*')
    axiosHeaders.set('Content-Type', 'application/json')
    for (const [key, value] of Object.entries(headers ?? {})) axiosHeaders.set(key, value)
    return axiosHeaders
  }
}
