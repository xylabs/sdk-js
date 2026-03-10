/* v8 ignore start */
import type {
  EventAnyListener, EventData, EventListener, EventUnsubscribeFunction,
} from './Event.ts'

/** Interface for a typed event emitter that supports subscribing, unsubscribing, and emitting events. */
export interface EventEmitter<T extends EventData> {
  /** Type-level reference to the event data shape for external type queries. */
  eventData: T
  /** Removes all listeners for the specified event name(s). */
  clearListeners(eventNames: keyof T | (keyof T)[]): void
  /** Emits an event, invoking all registered listeners concurrently. */
  emit<TEventName extends keyof T>(eventName: TEventName, eventArgs: T[TEventName]): Promise<void>
  /** Emits an event, invoking all registered listeners sequentially in order. */
  emitSerial<TEventName extends keyof T>(eventName: TEventName, eventArgs: T[TEventName]): Promise<void>
  /** Returns the total number of listeners registered for the specified event name(s). */
  listenerCount(eventNames: keyof T | (keyof T)[]): number
  /** Removes a specific listener from the specified event name(s). */
  off<TEventName extends keyof T>(eventNames: TEventName | TEventName[], listener: EventListener<T[TEventName]>): void
  /** Removes a wildcard listener that was receiving all events. */
  offAny(listener: EventAnyListener | Promise<void>): void
  /** Subscribes a listener to the specified event name(s) and returns an unsubscribe function. */
  on<TEventName extends keyof T>(
    eventNames: TEventName | TEventName[],
    listener: EventListener<T[TEventName]>,
  ): EventUnsubscribeFunction
  /** Subscribes a wildcard listener that receives all events and returns an unsubscribe function. */
  onAny(listener: EventAnyListener): EventUnsubscribeFunction
  /** Subscribes a listener that will be invoked only once for the specified event, then automatically removed. */
  once<TEventName extends keyof T>(eventName: TEventName, listener: EventListener<T[TEventName]>): EventUnsubscribeFunction
}
/* v8 ignore stop */
