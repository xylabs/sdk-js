import { Observable } from '@xylabs/threads/observable'

import { expose } from '@xylabs/threads/worker'

expose(function countToFive() {
  return new Observable((observer) => {
    for (let counter = 1; counter <= 5; counter++) {
      observer.next(counter)
    }
    observer.complete()
  })
})
