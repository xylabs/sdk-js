export interface XyLabsTrackingEventJson {
  cid: string
  create_time?: number
  email?: string
  email_hash?: string
  event?: string
  event_id?: string
  exids?: Record<string, string>
  fields?: Record<string, unknown>
  host?: string
  ip?: string
  pathname?: string
  pixel?: string
  receive_time?: number
  rid?: string
  system?: unknown
  ua?: string
  uid?: string
  utm?: Record<string, string>[] | Record<string, string[]>
}
