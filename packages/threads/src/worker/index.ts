/* eslint-disable import-x/no-internal-modules */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-floating-promises */

import isSomeObservable from 'is-observable-2-1-0'
import type { Observable, Subscription } from 'observable-fns'

import { deserialize, serialize } from '../common.ts'
import type { TransferDescriptor } from '../transferable.ts'
import { isTransferDescriptor } from '../transferable.ts'
import type {
  MasterJobCancelMessage,
  MasterJobRunMessage,
  SerializedError,
  WorkerInitMessage,
  WorkerJobErrorMessage,
  WorkerJobResultMessage,
  WorkerJobStartMessage,
  WorkerUncaughtErrorMessage,
} from '../types/messages.ts'
import {
  MasterMessageType,
  WorkerMessageType,
} from '../types/messages.ts'
import type { WorkerFunction, WorkerModule } from '../types/worker.ts'
import Implementation from './implementation.ts'

export { registerSerializer } from '../common.ts'
export { Transfer } from '../transferable.ts'

/** Returns `true` if this code is currently running in a worker. */
export const isWorkerRuntime = Implementation.isWorkerRuntime

let exposeCalled = false

const activeSubscriptions = new Map<number, Subscription<any>>()

const isMasterJobCancelMessage = (thing: any): thing is MasterJobCancelMessage => thing && thing.type === MasterMessageType.cancel
const isMasterJobRunMessage = (thing: any): thing is MasterJobRunMessage => thing && thing.type === MasterMessageType.run

/**
 * There are issues with `is-observable` not recognizing zen-observable's instances.
 * We are using `observable-fns`, but it's based on zen-observable, too.
 */
const isObservable = (thing: any): thing is Observable<any> => isSomeObservable(thing) || isZenObservable(thing)

function isZenObservable(thing: any): thing is Observable<any> {
  return thing && typeof thing === 'object' && typeof thing.subscribe === 'function'
}

function deconstructTransfer(thing: any) {
  return isTransferDescriptor(thing) ? { payload: thing.send, transferables: thing.transferables } : { payload: thing, transferables: undefined }
}

function postFunctionInitMessage() {
  const initMessage: WorkerInitMessage = {
    exposed: { type: 'function' },
    type: WorkerMessageType.init,
  }
  Implementation.postMessageToMaster(initMessage)
}

function postModuleInitMessage(methodNames: string[]) {
  const initMessage: WorkerInitMessage = {
    exposed: {
      methods: methodNames,
      type: 'module',
    },
    type: WorkerMessageType.init,
  }
  Implementation.postMessageToMaster(initMessage)
}

function postJobErrorMessage(uid: number, rawError: Error | TransferDescriptor<Error>) {
  const { payload: error, transferables } = deconstructTransfer(rawError)
  const errorMessage: WorkerJobErrorMessage = {
    error: serialize(error) as any as SerializedError,
    type: WorkerMessageType.error,
    uid,
  }
  Implementation.postMessageToMaster(errorMessage, transferables)
}

function postJobResultMessage(uid: number, completed: boolean, resultValue?: any) {
  const { payload, transferables } = deconstructTransfer(resultValue)
  const resultMessage: WorkerJobResultMessage = {
    complete: completed ? true : undefined,
    payload,
    type: WorkerMessageType.result,
    uid,
  }
  Implementation.postMessageToMaster(resultMessage, transferables)
}

function postJobStartMessage(uid: number, resultType: WorkerJobStartMessage['resultType']) {
  const startMessage: WorkerJobStartMessage = {
    resultType,
    type: WorkerMessageType.running,
    uid,
  }
  Implementation.postMessageToMaster(startMessage)
}

function postUncaughtErrorMessage(error: Error) {
  try {
    const errorMessage: WorkerUncaughtErrorMessage = {
      error: serialize(error) as any as SerializedError,
      type: WorkerMessageType.uncaughtError,
    }
    Implementation.postMessageToMaster(errorMessage)
  } catch (subError) {
    // tslint:disable-next-line no-console
    console.error(
      'Not reporting uncaught error back to master thread as it ' + 'occured while reporting an uncaught error already.' + '\nLatest error:',
      subError,
      '\nOriginal error:',
      error,
    )
  }
}

async function runFunction(jobUID: number, fn: WorkerFunction, args: any[]) {
  let syncResult: any

  try {
    syncResult = fn(...args)
  } catch (ex) {
    const error = ex as Error
    return postJobErrorMessage(jobUID, error)
  }

  const resultType = isObservable(syncResult) ? 'observable' : 'promise'
  postJobStartMessage(jobUID, resultType)

  if (isObservable(syncResult)) {
    const subscription = syncResult.subscribe(
      value => postJobResultMessage(jobUID, false, serialize(value)),
      (error) => {
        postJobErrorMessage(jobUID, serialize(error) as any)
        activeSubscriptions.delete(jobUID)
      },
      () => {
        postJobResultMessage(jobUID, true)
        activeSubscriptions.delete(jobUID)
      },
    )
    activeSubscriptions.set(jobUID, subscription)
  } else {
    try {
      const result = await syncResult
      postJobResultMessage(jobUID, true, serialize(result))
    } catch (error) {
      postJobErrorMessage(jobUID, serialize(error) as any)
    }
  }
}

/**
 * Expose a function or a module (an object whose values are functions)
 * to the main thread. Must be called exactly once in every worker thread
 * to signal its API to the main thread.
 *
 * @param exposed Function or object whose values are functions
 */
export function expose(exposed: WorkerFunction | WorkerModule<any>) {
  if (!Implementation.isWorkerRuntime()) {
    throw new Error('expose() called in the master thread.')
  }
  if (exposeCalled) {
    throw new Error('expose() called more than once. This is not possible. Pass an object to expose() if you want to expose multiple functions.')
  }
  exposeCalled = true

  if (typeof exposed === 'function') {
    Implementation.subscribeToMasterMessages((messageData: unknown) => {
      if (isMasterJobRunMessage(messageData) && !messageData.method) {
        runFunction(messageData.uid, exposed, messageData.args.map(deserialize))
      }
    })
    postFunctionInitMessage()
  } else if (typeof exposed === 'object' && exposed) {
    Implementation.subscribeToMasterMessages((messageData: unknown) => {
      if (isMasterJobRunMessage(messageData) && messageData.method) {
        runFunction(messageData.uid, exposed[messageData.method], messageData.args.map(deserialize))
      }
    })

    const methodNames = Object.keys(exposed).filter(key => typeof exposed[key] === 'function')
    postModuleInitMessage(methodNames)
  } else {
    throw new Error(`Invalid argument passed to expose(). Expected a function or an object, got: ${exposed}`)
  }

  Implementation.subscribeToMasterMessages((messageData: unknown) => {
    if (isMasterJobCancelMessage(messageData)) {
      const jobUID = messageData.uid
      const subscription = activeSubscriptions.get(jobUID)

      if (subscription) {
        subscription.unsubscribe()
        activeSubscriptions.delete(jobUID)
      }
    }
  })
}

if (typeof globalThis !== 'undefined' && typeof self.addEventListener === 'function' && Implementation.isWorkerRuntime()) {
  self.addEventListener('error', (event) => {
    // Post with some delay, so the master had some time to subscribe to messages
    setTimeout(() => postUncaughtErrorMessage(event.error || event), 250)
  })
  self.addEventListener('unhandledrejection', (event) => {
    const error = (event as any).reason
    if (error && typeof (error as any).message === 'string') {
      // Post with some delay, so the master had some time to subscribe to messages
      setTimeout(() => postUncaughtErrorMessage(error), 250)
    }
  })
}

if (typeof process !== 'undefined' && typeof process.on === 'function' && Implementation.isWorkerRuntime()) {
  process.on('uncaughtException', (error) => {
    // Post with some delay, so the master had some time to subscribe to messages
    setTimeout(() => postUncaughtErrorMessage(error), 250)
  })
  process.on('unhandledRejection', (error) => {
    if (error && typeof (error as any).message === 'string') {
      // Post with some delay, so the master had some time to subscribe to messages
      setTimeout(() => postUncaughtErrorMessage(error as any), 250)
    }
  })
}
