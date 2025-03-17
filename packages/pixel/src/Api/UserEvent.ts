import type { ExIds } from '../ExIds.ts'
import type { UserEventSystem } from './UserEventSystem.ts'

export interface UserEvent {
  cid: string
  create_time?: number
  email?: string
  email_hash?: string
  event?: string
  event_id?: string
  exids?: ExIds
  fields?: Record<string, unknown>
  host?: string
  pathname?: string
  pixel?: string
  receive_time?: number
  referrer?: { local: string; session: string }
  rid?: string
  system?: UserEventSystem
  uid?: string
  utm?: Record<string, string>[] | Record<string, string[]>
}
