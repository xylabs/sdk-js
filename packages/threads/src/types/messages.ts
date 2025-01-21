/* eslint-disable @typescript-eslint/no-explicit-any */

import type { EnumValue } from '../enum'
import { Enum } from '../enum'

/* eslint-disable @typescript-eslint/member-ordering */
export interface SerializedError {
  __error_marker: '$$error'
  message: string
  name: string
  stack?: string
}

/////////////////////////////
// Messages sent by master:

export const MasterMessageType = Enum({
  cancel: 'cancel',
  run: 'run',
})

export type MasterMessageType = EnumValue<typeof MasterMessageType>

export type MasterJobCancelMessage = {
  type: 'cancel'
  uid: number
}

export type MasterJobRunMessage = {
  type: 'run'
  uid: number
  method?: string
  args: any[]
}

////////////////////////////
// Messages sent by worker:

export const WorkerMessageType = Enum({
  error: 'error',
  init: 'init',
  result: 'result',
  running: 'running',
  uncaughtError: 'uncaughtError',
})

export type WorkerMessageType = EnumValue<typeof WorkerMessageType>

export type WorkerUncaughtErrorMessage = {
  type: 'uncaughtError'
  error: {
    message: string
    name: string
    stack?: string
  }
}

export type WorkerInitMessage = {
  type: 'init'
  exposed: { type: 'function' } | { type: 'module'; methods: string[] }
}

export type WorkerJobErrorMessage = {
  type: 'error'
  uid: number
  error: SerializedError
}

export type WorkerJobResultMessage = {
  type: 'result'
  uid: number
  complete?: true
  payload?: any
}

export type WorkerJobStartMessage = {
  type: 'running'
  uid: number
  resultType: 'observable' | 'promise'
}
