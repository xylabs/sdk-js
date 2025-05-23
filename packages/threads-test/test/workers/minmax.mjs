// eslint-disable-next-line import-x/no-internal-modules
import { Observable, Subject } from '@xylabs/threads/observable'
import { expose } from '@xylabs/threads/worker'

let max = Number.NEGATIVE_INFINITY
let min = Number.POSITIVE_INFINITY

let subject = new Subject()

const minmax = {
  finish() {
    subject.complete()
    subject = new Subject()
  },
  push(value) {
    max = Math.max(max, value)
    min = Math.min(min, value)
    subject.next({ max, min })
  },
  values() {
    return Observable.from(subject)
  },
}

expose(minmax)
