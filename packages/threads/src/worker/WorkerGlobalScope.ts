/// <reference lib="webworker" />
export interface WorkerGlobalScope {
  addEventListener(eventName: string, listener: (event: Event) => void): void
  postMessage(message: unknown, transferList?: Readonly<Transferable[]>): void
  removeEventListener(eventName: string, listener: (event: Event) => void): void
}
