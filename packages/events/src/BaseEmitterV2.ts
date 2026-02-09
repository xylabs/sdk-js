import { BaseParamsV2Zod, BaseV2 } from '@xylabs/base'
import type z from 'zod'

import { Events } from './Events/index.ts'
import type {
  EventAnyListener, EventData, EventEmitter,
  EventListener,
} from './model/index.ts'

export const BaseEmitterParamsV2Zod = BaseParamsV2Zod.extend({})

export type BaseEmitterParamsV2 = z.infer<typeof BaseEmitterParamsV2Zod>

export abstract class BaseEmitterV2<TParams extends BaseEmitterParamsV2 = BaseEmitterParamsV2, TEventData extends EventData = EventData>
  extends BaseV2<TParams> implements EventEmitter<TEventData> {
  // just here to query types
  eventData = {} as TEventData

  private events: Events<TEventData>

  constructor(params: TParams) {
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
