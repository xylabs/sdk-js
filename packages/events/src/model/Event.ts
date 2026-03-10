/* v8 ignore start */
import type { Promisable } from '@xylabs/promise'

/** A valid event name, which can be any property key (string, number, or symbol). */
export type EventName = PropertyKey

/** The allowed types for event argument payloads. */
export type EventArgs = string | number | object

/** A mapping of event names to their corresponding event argument types. */
export type EventData = { [key: EventName]: EventArgs }

/** A function returned by event subscription methods that unsubscribes the listener when called. */
export type EventUnsubscribeFunction = () => void

/**
 * A listener that receives all events regardless of name.
 * @param eventName - The name of the emitted event.
 * @param eventData - The data associated with the event.
 */
export type EventAnyListener<TEventArgs extends EventArgs = EventArgs> = (eventName: EventName, eventData: TEventArgs) => Promisable<void>

/**
 * A listener for a specific event type.
 * @param eventData - The data associated with the event.
 */
export type EventListener<TEventArgs extends EventArgs = EventArgs> = (eventData: TEventArgs) => Promisable<void>
/* v8 ignore stop */
