/* eslint-disable @typescript-eslint/no-explicit-any */
import type { ObservableLike, SubscriptionObserver } from 'observable-fns'
import { Observable } from 'observable-fns'

const $observers = Symbol('observers')

/**
 * Observable subject. Implements the Observable interface, but also exposes
 * the `next()`, `error()`, `complete()` methods to initiate observable
 * updates "from the outside".
 *
 * Use `Observable.from(subject)` to derive an observable that proxies all
 * values, errors and the completion raised on this subject, but does not
 * expose the `next()`, `error()`, `complete()` methods.
 */
export class Subject<T> extends Observable<T> implements ObservableLike<T> {
  private [$observers]: Array<SubscriptionObserver<T>>

  constructor() {
    super((observer) => {
      this[$observers] = [...(this[$observers] || []), observer]
      const unsubscribe = () => {
        this[$observers] = this[$observers].filter(someObserver => someObserver !== observer)
      }
      return unsubscribe
    })

    this[$observers] = []
  }

  /** Signal completion to all subscribers. */
  complete() {
    for (const observer of this[$observers]) observer.complete()
  }

  /** Signal an error to all subscribers. */
  error(error: any) {
    for (const observer of this[$observers]) observer.error(error)
  }

  /** Emit a new value to all subscribers. */
  next(value: T) {
    for (const observer of this[$observers]) observer.next(value)
  }
}

/** Re-export of the Observable class from the `observable-fns` library. */
export { Observable } from 'observable-fns'
