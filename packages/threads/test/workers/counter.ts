/* eslint-disable import/no-internal-modules */
import { expose } from '../../src/worker'

let currentCount = 0

const counter = {
  decrement() {
    return --currentCount
  },
  getCount() {
    return currentCount
  },
  increment() {
    return ++currentCount
  },
}

expose(counter)

export type Counter = typeof counter
