import type { EmptyObject } from '@xylabs/object'
import type { Promisable } from '@xylabs/promise'

import type { FunnelStartedFields } from './FunnelStartedFields.ts'
import type { TestStartedFields } from './TestStartedFields.ts'
import type { UserClickFields } from './UserClickFields.ts'
import type { ViewContentFields } from './ViewContentFields.ts'

export abstract class UserEventHandler<TData extends EmptyObject> {
  abstract funnelStarted<T extends TData>(fields: T | FunnelStartedFields): Promisable<void>
  abstract testStarted<T extends TData>(fields: T | TestStartedFields): Promisable<void>
  abstract userClick<T extends TData>(fields: T | UserClickFields): Promisable<void>
  abstract viewContent<T extends TData>(fields: T | ViewContentFields): Promisable<void>
}
