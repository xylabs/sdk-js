/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/member-ordering */
import type { EnumValue } from '../enum'
import { Enum } from '../enum'
import type { Thread } from './thread'

/** Pool event type. Specifies the type of each `PoolEvent`. */
export const PoolEventType = Enum({
  initialized: 'initialized',
  taskCanceled: 'taskCanceled',
  taskCompleted: 'taskCompleted',
  taskFailed: 'taskFailed',
  taskQueued: 'taskQueued',
  taskQueueDrained: 'taskQueueDrained',
  taskStart: 'taskStart',
  terminated: 'terminated',
})

export type PoolEventType = EnumValue<typeof PoolEventType>

export type TaskRunFunction<ThreadType extends Thread, Return> = (worker: ThreadType) => Promise<Return>

/** Pool event. Subscribe to those events using `pool.events()`. Useful for debugging. */
export type PoolEvent<ThreadType extends Thread> =
  | {
    type: 'initialized'
    size: number
  }
  | {
    type: 'taskQueued'
    taskID: number
  }
  | {
    type: 'taskQueueDrained'
  }
  | {
    type: 'taskStart'
    taskID: number
    workerID: number
  }
  | {
    type: 'taskCompleted'
    returnValue: any
    taskID: number
    workerID: number
  }
  | {
    type: 'taskFailed'
    error: Error
    taskID: number
    workerID: number
  }
  | {
    type: 'taskCanceled'
    taskID: number
  }
  | {
    type: 'terminated'
    remainingQueue: Array<QueuedTask<ThreadType, any>>
  }

export interface WorkerDescriptor<ThreadType extends Thread> {
  init: Promise<ThreadType>
  runningTasks: Array<Promise<any>>
}

/**
 * Task that has been `pool.queued()`-ed.
 */
export interface QueuedTask<ThreadType extends Thread, Return> {
  /** @private */
  id: number

  /** @private */
  run: TaskRunFunction<ThreadType, Return>

  /**
   * Queued tasks can be cancelled until the pool starts running them on a worker thread.
   */
  cancel(): void

  /**
   * `QueuedTask` is thenable, so you can `await` it.
   * Resolves when the task has successfully been executed. Rejects if the task fails.
   */
  then: Promise<Return>['then']
}
