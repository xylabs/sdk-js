/* eslint-disable @typescript-eslint/no-explicit-any */
import type { Logger } from '@xylabs/logger'
import type {
  AxiosRequestConfig, AxiosResponse, RawAxiosRequestConfig,
} from 'axios'
import { Axios, AxiosHeaders } from 'axios'
import { gzip } from 'pako'

export type RawAxiosJsonRequestConfig<D = any> = RawAxiosRequestConfig<D> & { compressLength?: number }

export class AxiosJson {
  static defaultLogger?: Logger

  private axios: Axios = new Axios(AxiosJson.axiosConfig())

  constructor(config?: RawAxiosJsonRequestConfig) {
    this.axios = new Axios(AxiosJson.axiosConfig(config))
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

  private static buildHeaders(headers: RawAxiosJsonRequestConfig['headers']) {
    const axiosHeaders = new AxiosHeaders()
    axiosHeaders.set('Accept', 'application/json, text/plain, *.*')
    axiosHeaders.set('Content-Type', 'application/json')
    for (const [key, value] of Object.entries(headers ?? {})) axiosHeaders.set(key, value)
    return axiosHeaders
  }

  delete<T = any, R = AxiosResponse<T>, D = any>(url: string, config?: AxiosRequestConfig<D>): Promise<R> {
    return this.axios.delete<T, R, D>(url, config)
  }

  get<T = any, R = AxiosResponse<T>, D = any>(url: string, config?: AxiosRequestConfig<D>): Promise<R> {
    return this.axios.get<T, R, D>(url, config)
  }

  getUri(config?: AxiosRequestConfig): string {
    return this.axios.getUri(config)
  }

  head<T = any, R = AxiosResponse<T>, D = any>(url: string, config?: AxiosRequestConfig<D>): Promise<R> {
    return this.axios.head<T, R, D>(url, config)
  }

  options<T = any, R = AxiosResponse<T>, D = any>(url: string, config?: AxiosRequestConfig<D>): Promise<R> {
    return this.axios.options<T, R, D>(url, config)
  }

  patch<T = any, R = AxiosResponse<T>, D = any>(url: string, data?: D, config?: AxiosRequestConfig<D>): Promise<R> {
    return this.axios.patch<T, R, D>(url, data, config)
  }

  patchForm<T = any, R = AxiosResponse<T>, D = any>(url: string, data?: D, config?: AxiosRequestConfig<D>): Promise<R> {
    return this.axios.patch<T, R, D>(url, data, config)
  }

  post<T = any, R = AxiosResponse<T>, D = any>(url: string, data?: D, config?: AxiosRequestConfig<D>): Promise<R> {
    return this.axios.post<T, R, D>(url, data, config)
  }

  postForm<T = any, R = AxiosResponse<T>, D = any>(url: string, data?: D, config?: AxiosRequestConfig<D>): Promise<R> {
    return this.axios.post<T, R, D>(url, data, config)
  }

  put<T = any, R = AxiosResponse<T>, D = any>(url: string, data?: D, config?: AxiosRequestConfig<D>): Promise<R> {
    return this.axios.put<T, R, D>(url, data, config)
  }

  putForm<T = any, R = AxiosResponse<T>, D = any>(url: string, data?: D, config?: AxiosRequestConfig<D>): Promise<R> {
    return this.axios.put<T, R, D>(url, data, config)
  }

  request<T = any, R = AxiosResponse<T>, D = any>(config: AxiosRequestConfig<D>): Promise<R> {
    return this.axios.request<T, R, D>(config)
  }
}
