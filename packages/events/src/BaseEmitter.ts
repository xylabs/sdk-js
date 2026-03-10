import type { BaseParams } from '@xylabs/base'
import { Base } from '@xylabs/base'
import type { EmptyObject } from '@xylabs/object'

import { Events } from './Events/index.ts'
import type {
  EventAnyListener, EventData, EventEmitter,
  EventListener,
} from './model/index.ts'

/** Fields specific to BaseEmitter configuration parameters. */
export interface BaseEmitterParamsFields {}

/** Parameters type for configuring a BaseEmitter instance. */
export type BaseEmitterParams<T extends EmptyObject = EmptyObject> = BaseParams<T & BaseEmitterParamsFields & T>

/**
 * Base class that combines the Base utility class with typed event emission capabilities.
 * Delegates all event operations to an internal Events instance.
 */
export class BaseEmitter<TParams extends BaseParams = BaseParams, TEventData extends EventData = EventData>
  extends Base<TParams> implements EventEmitter<TEventData> {
  // just here to query types
  eventData = {} as TEventData

  private events: Events<TEventData>

  constructor(params: BaseParams<TParams>) {
    super(params)
    this.events = new Events<TEventData>()
  }

  /**
   * Removes all listeners for the specified event name(s).
   * @param eventNames - One or more event names to clear listeners for.
   * @returns This instance for chaining.
   */
  clearListeners(eventNames: keyof TEventData | (keyof TEventData)[]) {
    this.events.clearListeners(eventNames)
    return this
  }

  /**
   * Emits an event, invoking all registered listeners concurrently.
   * @param eventName - The event to emit.
   * @param eventArgs - The data to pass to listeners.
   */
  emit<TEventName extends keyof TEventData = keyof TEventData, TEventArgs extends TEventData[TEventName] = TEventData[TEventName]>(
    eventName: TEventName,
    eventArgs: TEventArgs,
  ) {
    return this.events.emit(eventName, eventArgs)
  }

  /**
   * Emits an event, invoking all registered listeners sequentially in order.
   * @param eventName - The event to emit.
   * @param eventArgs - The data to pass to listeners.
   */
  emitSerial<TEventName extends keyof TEventData = keyof TEventData, TEventArgs extends TEventData[TEventName] = TEventData[TEventName]>(
    eventName: TEventName,
    eventArgs: TEventArgs,
  ) {
    return this.events.emitSerial(eventName, eventArgs)
  }

  /**
   * Returns the total number of listeners registered for the specified event name(s).
   * @param eventNames - One or more event names to count listeners for.
   * @returns The total listener count.
   */
  listenerCount(eventNames: keyof TEventData | (keyof TEventData)[]) {
    return this.events.listenerCount(eventNames)
  }

  /**
   * Removes a specific listener from the specified event name(s).
   * @param eventNames - One or more event names to unsubscribe from.
   * @param listener - The listener to remove.
   */
  off<TEventName extends keyof TEventData>(eventNames: TEventName | TEventName[], listener: EventListener<TEventData[TEventName]>) {
    return this.events.off(eventNames, listener)
  }

  /**
   * Removes a wildcard listener that was receiving all events.
   * @param listener - The wildcard listener to remove.
   */
  offAny(listener: EventAnyListener) {
    return this.events.offAny(listener)
  }

  /**
   * Subscribes a listener to the specified event name(s).
   * @param eventNames - One or more event names to listen for.
   * @param listener - The callback to invoke when the event fires.
   * @returns An unsubscribe function.
   */
  on<TEventName extends keyof TEventData>(eventNames: TEventName | TEventName[], listener: EventListener<TEventData[TEventName]>) {
    return this.events.on(eventNames, listener)
  }

  /**
   * Subscribes a wildcard listener that receives all events.
   * @param listener - The callback to invoke for any event.
   * @returns An unsubscribe function.
   */
  onAny(listener: EventAnyListener) {
    return this.events.onAny(listener)
  }

  /**
   * Subscribes a listener that will be invoked only once for the specified event, then automatically removed.
   * @param eventName - The event to listen for.
   * @param listener - The callback to invoke once.
   * @returns An unsubscribe function.
   */
  once<TEventName extends keyof TEventData>(eventName: TEventName, listener: EventListener<TEventData[TEventName]>) {
    return this.events.once(eventName, listener)
  }
}
