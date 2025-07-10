import type { Promisable } from '@xylabs/promise'

export type EventName = PropertyKey
export type EventArgs = string | number | object
export type EventData = { [key: EventName]: EventArgs }
export type EventUnsubscribeFunction = () => void
export type EventAnyListener<TEventArgs extends EventArgs = EventArgs> = (eventName: EventName, eventData: TEventArgs) => Promisable<void>
export type EventListener<TEventArgs extends EventArgs = EventArgs> = (eventData: TEventArgs) => Promisable<void>
