/** Symbol key for accessing a thread's error observable. */
export const $errors = Symbol('thread.errors')
/** Symbol key for accessing a thread's event observable. */
export const $events = Symbol('thread.events')
/** Symbol key for accessing a thread's terminate function. */
export const $terminate = Symbol('thread.terminate')
/** Symbol key for marking an object as a transferable descriptor. */
export const $transferable = Symbol('thread.transferable')
/** Symbol key for accessing the underlying worker instance of a thread. */
export const $worker = Symbol('thread.worker')
