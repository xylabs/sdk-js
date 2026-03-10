/** A link with an href and associated metadata. */
export interface HrefWithMeta {
  href: string
  meta: Record<string, unknown>
}
/** A JSON:API link, either a simple URL string or an object with href and metadata. */
export type ApiLink = string | HrefWithMeta
/** A collection of named JSON:API links. */
export type ApiLinks = Record<string, ApiLink>
