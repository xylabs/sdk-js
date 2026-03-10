/// <reference lib="webworker" />

/** Minimal interface representing the global scope inside a web worker. */
export interface WorkerGlobalScope {
  addEventListener(eventName: string, listener: (event: Event) => void): void
  postMessage(message: unknown, transferList?: Readonly<Transferable[]>): void
  removeEventListener(eventName: string, listener: (event: Event) => void): void
}
