/** Configuration for connecting to an API, including domain, authentication, and user identification. */
interface ApiConfig {
  apiDomain: string
  apiKey?: string
  jwtToken?: string
  userid?: string
}

export type { ApiConfig }
