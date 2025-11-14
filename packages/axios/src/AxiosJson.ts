import type { Logger } from '@xylabs/logger'
import type { AxiosRequestConfig, AxiosResponse } from 'axios'
import { Axios, AxiosHeaders } from 'axios'
import { gzip } from 'pako'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type AxiosJsonRequestConfig<D = any> = AxiosRequestConfig<D> & { compressLength?: number }

export type AxiosType = typeof Axios

export class AxiosJson extends Axios {
  static defaultLogger?: Logger

  constructor(config?: AxiosJsonRequestConfig) {
    super(config)
  }

  static create(config?: AxiosJsonRequestConfig) {
    return new this(config) as Axios
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
  }: AxiosJsonRequestConfig = {}): AxiosJsonRequestConfig {
    return {
      headers: this.buildHeaders(headers),
      transformRequest: (data, headers) => {
        const json = JSON.stringify(data)
        if (headers !== undefined && data && json.length > (compressLength ?? 1024)) {
          headers.set('Content-Encoding', 'gzip')
          return gzip(json).buffer
        }
        return json
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

  private static buildHeaders(headers: AxiosJsonRequestConfig['headers']) {
    const axiosHeaders = new AxiosHeaders()
    axiosHeaders.set('Accept', 'application/json, text/plain, *.*')
    axiosHeaders.set('Content-Type', 'application/json')
    for (const [key, value] of Object.entries(headers ?? {})) axiosHeaders.set(key, value)
    return axiosHeaders
  }
}
