interface ApiConfig {
  apiDomain: string
  /** @deprecated use jwtToken or apiKey instead */
  token?: string
  userid?: string
  jwtToken?: string
  apiKey?: string
}

export type { ApiConfig }
