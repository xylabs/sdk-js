import { isUndefined } from '@xylabs/typeof'
import axios from 'axios'

import type { ApiConfig } from './ApiConfig.ts'

class ApiEndpoint<T> {
  private _value?: T
  private config: ApiConfig
  private path: string

  constructor(config: ApiConfig, path: string) {
    this.config = config
    this.path = path
  }

  get value() {
    return this._value
  }

  private get headers() {
    return isUndefined(this.config.jwtToken) ? undefined : { Authorization: this.config.jwtToken }
  }

  private get url() {
    return `${this.config.apiDomain}/${this.path}`
  }

  async fetch() {
    const response = await axios.get<T>(this.url, { headers: this.headers })
    if (response.status === 200) {
      this._value = response.data
    } else {
      throw new Error('Unexpected Status Code')
    }
    return this._value
  }

  async get() {
    return this._value ?? (await this.fetch())
  }

  async insert(value: T) {
    const response = await axios.post<T>(this.url, value, { headers: this.headers })
    if (response.status === 200) {
      this._value = response.data
    } else {
      throw new Error('Unexpected Status Code')
    }
    return this._value
  }
}

export { ApiEndpoint }
