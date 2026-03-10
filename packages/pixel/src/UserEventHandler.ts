import type { EmptyObject } from '@xylabs/object'
import type { Promisable } from '@xylabs/promise'

import type { FunnelStartedFields } from './FunnelStartedFields.ts'
import type { TestStartedFields } from './TestStartedFields.ts'
import type { UserClickFields } from './UserClickFields.ts'
import type { ViewContentFields } from './ViewContentFields.ts'

/** Abstract base class for handling user tracking events. */
export abstract class UserEventHandler<TData extends EmptyObject> {
  /** Tracks a funnel-started event. */
  abstract funnelStarted<T extends TData>(fields: T | FunnelStartedFields): Promisable<void>
  /** Tracks a test-started event. */
  abstract testStarted<T extends TData>(fields: T | TestStartedFields): Promisable<void>
  /** Tracks a user click event. */
  abstract userClick<T extends TData>(fields: T | UserClickFields): Promisable<void>
  /** Tracks a view-content event. */
  abstract viewContent<T extends TData>(fields: T | ViewContentFields): Promisable<void>
}
