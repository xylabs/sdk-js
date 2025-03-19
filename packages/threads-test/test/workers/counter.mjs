import { expose } from '@xylabs/threads/worker'

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
