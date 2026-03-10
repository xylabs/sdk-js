import type { RawAxiosRequestConfig } from 'axios'
import { AxiosHeaders } from 'axios'
import { gzip } from 'pako'

/** Axios request config extended with an optional gzip compression threshold. */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type RawAxiosJsonRequestConfig<D = any> = RawAxiosRequestConfig<D> & { compressLength?: number }

function buildHeaders(headers: RawAxiosJsonRequestConfig['headers']) {
  const axiosHeaders = new AxiosHeaders()
  axiosHeaders.set('Accept', 'application/json, text/plain, *.*')
  axiosHeaders.set('Content-Type', 'application/json')
  for (const [key, value] of Object.entries(headers ?? {})) axiosHeaders.set(key, value)
  return axiosHeaders
}

/**
 * Creates an Axios config preconfigured for JSON requests with optional gzip compression.
 * Request bodies exceeding `compressLength` (default 1024 bytes) are automatically gzip-compressed.
 * @param config - Base Axios config, optionally including a `compressLength` threshold
 * @returns A fully configured Axios request config with JSON transforms
 */
export function axiosJsonConfig({
  compressLength, headers, ...config
}: RawAxiosJsonRequestConfig = {}): RawAxiosJsonRequestConfig {
  return {
    headers: buildHeaders(headers),
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
