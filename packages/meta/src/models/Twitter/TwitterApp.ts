/** Twitter App Card metadata containing app store identifiers, names, and URLs per platform. */
export interface TwitterApp {
  id?: {
    googleplay?: string
    ipad?: string
    iphone?: string
  }
  name?: {
    googleplay?: string
    ipad?: string
    iphone?: string
  }
  url?: {
    googleplay?: string
    ipad?: string
    iphone?: string
  }
}
