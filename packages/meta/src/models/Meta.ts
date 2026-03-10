import type { OpenGraphMeta } from './OpenGraph/index.ts'
import type { TwitterMeta } from './Twitter/index.ts'

/** Represents page metadata including Open Graph and Twitter card properties. */
export interface Meta {
  description?: string
  og?: OpenGraphMeta
  title?: string
  twitter?: TwitterMeta
}
