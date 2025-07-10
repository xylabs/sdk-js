import type {
  EventAnyListener, EventData, EventListener, EventUnsubscribeFunction,
} from './Event.ts'

export interface EventEmitter<T extends EventData> {
  eventData: T
  clearListeners(eventNames: keyof T | (keyof T)[]): void
  emit<TEventName extends keyof T>(eventName: TEventName, eventArgs: T[TEventName]): Promise<void>
  emitSerial<TEventName extends keyof T>(eventName: TEventName, eventArgs: T[TEventName]): Promise<void>
  listenerCount(eventNames: keyof T | (keyof T)[]): number
  off<TEventName extends keyof T>(eventNames: TEventName | TEventName[], listener: EventListener<T[TEventName]>): void
  offAny(listener: EventAnyListener | Promise<void>): void
  on<TEventName extends keyof T>(
    eventNames: TEventName | TEventName[],
    listener: EventListener<T[TEventName]>,
  ): EventUnsubscribeFunction
  onAny(listener: EventAnyListener): EventUnsubscribeFunction
  once<TEventName extends keyof T>(eventName: TEventName, listener: EventListener<T[TEventName]>): EventUnsubscribeFunction
}
