import type { BaseParams } from '@xylabs/base'
import { Base } from '@xylabs/base'
import type { EmptyObject } from '@xylabs/object'

import { Events } from './Events/index.ts'
import type {
  EventAnyListener, EventData, EventEmitter,
  EventListener,
} from './model/index.ts'

export interface BaseEmitterParamsFields {}

export type BaseEmitterParams<T extends EmptyObject = EmptyObject> = BaseParams<T & BaseEmitterParamsFields & T>

export class BaseEmitter<TParams extends BaseParams = BaseParams, TEventData extends EventData = EventData>
  extends Base<TParams> implements EventEmitter<TEventData> {
  // just here to query types
  eventData = {} as TEventData

  private events: Events<TEventData>

  constructor(params: BaseParams<TParams>) {
    super(params)
    this.events = new Events<TEventData>()
  }

  clearListeners(eventNames: keyof TEventData | (keyof TEventData)[]) {
    this.events.clearListeners(eventNames)
    return this
  }

  emit<TEventName extends keyof TEventData = keyof TEventData, TEventArgs extends TEventData[TEventName] = TEventData[TEventName]>(
    eventName: TEventName,
    eventArgs: TEventArgs,
  ) {
    return this.events.emit(eventName, eventArgs)
  }

  emitSerial<TEventName extends keyof TEventData = keyof TEventData, TEventArgs extends TEventData[TEventName] = TEventData[TEventName]>(
    eventName: TEventName,
    eventArgs: TEventArgs,
  ) {
    return this.events.emitSerial(eventName, eventArgs)
  }

  listenerCount(eventNames: keyof TEventData | (keyof TEventData)[]) {
    return this.events.listenerCount(eventNames)
  }

  off<TEventName extends keyof TEventData>(eventNames: TEventName | TEventName[], listener: EventListener<TEventData[TEventName]>) {
    return this.events.off(eventNames, listener)
  }

  offAny(listener: EventAnyListener) {
    return this.events.offAny(listener)
  }

  on<TEventName extends keyof TEventData>(eventNames: TEventName | TEventName[], listener: EventListener<TEventData[TEventName]>) {
    return this.events.on(eventNames, listener)
  }

  onAny(listener: EventAnyListener) {
    return this.events.onAny(listener)
  }

  once<TEventName extends keyof TEventData>(eventName: TEventName, listener: EventListener<TEventData[TEventName]>) {
    return this.events.once(eventName, listener)
  }
}
