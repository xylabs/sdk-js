# @xylabs/events

[![logo][]](https://xylabs.com)

[![main-build][]][main-build-link]
[![npm-badge][]][npm-link]
[![npm-downloads-badge][]][npm-link]
[![jsdelivr-badge][]][jsdelivr-link]
[![npm-license-badge][]](LICENSE)
[![codacy-badge][]][codacy-link]
[![codeclimate-badge][]][codeclimate-link]
[![snyk-badge][]][snyk-link]
[![socket-badge][]][socket-link]


Base functionality used throughout XY Labs TypeScript/JavaScript libraries



## Reference

**@xylabs/events**

***

## Classes

| Class | Description |
| ------ | ------ |
| [BaseEmitter](#classes/BaseEmitter) | Base class that combines the Base utility class with typed event emission capabilities. Delegates all event operations to an internal Events instance. |
| [Events](#classes/Events) | Core typed event emitter implementation supporting named events, wildcard listeners, serial and concurrent emission, listener filtering, and debug logging. |

## Interfaces

| Interface | Description |
| ------ | ------ |
| [BaseEmitterParamsFields](#interfaces/BaseEmitterParamsFields) | Fields specific to BaseEmitter configuration parameters. |
| [EventEmitter](#interfaces/EventEmitter) | Interface for a typed event emitter that supports subscribing, unsubscribing, and emitting events. |

## Type Aliases

| Type Alias | Description |
| ------ | ------ |
| [BaseEmitterParams](#type-aliases/BaseEmitterParams) | Parameters type for configuring a BaseEmitter instance. |
| [DebugLogger](#type-aliases/DebugLogger) | Emittery can collect and log debug information. |
| [EventListenerInfo](#type-aliases/EventListenerInfo) | Information about a registered event listener, including an optional filter for selective invocation. |
| [DebugOptions](#type-aliases/DebugOptions) | Configure debug options of an instance. |
| [MetaEventData](#type-aliases/MetaEventData) | Data shape for internal meta events that fire when listeners are added or removed. |
| [EventsParams](#type-aliases/EventsParams) | Parameters for constructing an Events instance, with optional debug configuration. |
| [EventName](#type-aliases/EventName) | A valid event name, which can be any property key (string, number, or symbol). |
| [EventArgs](#type-aliases/EventArgs) | The allowed types for event argument payloads. |
| [EventData](#type-aliases/EventData) | A mapping of event names to their corresponding event argument types. |
| [EventUnsubscribeFunction](#type-aliases/EventUnsubscribeFunction) | A function returned by event subscription methods that unsubscribes the listener when called. |
| [EventAnyListener](#type-aliases/EventAnyListener) | A listener that receives all events regardless of name. |
| [EventListener](#type-aliases/EventListener) | A listener for a specific event type. |

### classes

  ### <a id="BaseEmitter"></a>BaseEmitter

[**@xylabs/events**](#../README)

***

Base class that combines the Base utility class with typed event emission capabilities.
Delegates all event operations to an internal Events instance.

## Extends

- `Base`\<`TParams`\>

## Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `TParams` *extends* `BaseParams` | `BaseParams` |
| `TEventData` *extends* [`EventData`](#../type-aliases/EventData) | [`EventData`](#../type-aliases/EventData) |

## Implements

- [`EventEmitter`](#../interfaces/EventEmitter)\<`TEventData`\>

## Constructors

### Constructor

```ts
new BaseEmitter<TParams, TEventData>(params: BaseParams<TParams>): BaseEmitter<TParams, TEventData>;
```

### Parameters

| Parameter | Type |
| ------ | ------ |
| `params` | `BaseParams`\<`TParams`\> |

### Returns

`BaseEmitter`\<`TParams`, `TEventData`\>

### Overrides

```ts
Base<TParams>.constructor
```

## Properties

| Property | Modifier | Type | Description | Inherited from |
| ------ | ------ | ------ | ------ | ------ |
| <a id="defaultlogger"></a> `defaultLogger?` | `static` | `Logger` | - | `Base.defaultLogger` |
| <a id="globalinstances"></a> `globalInstances` | `readonly` | `Record`\<`BaseClassName`, `WeakRef`\<`Base`\>[]\> | - | `Base.globalInstances` |
| <a id="globalinstancescounthistory"></a> `globalInstancesCountHistory` | `readonly` | `Record`\<`BaseClassName`, `number`[]\> | - | `Base.globalInstancesCountHistory` |
| <a id="eventdata"></a> `eventData` | `public` | `TEventData` | Type-level reference to the event data shape for external type queries. | - |

## Accessors

### historyInterval

### Get Signature

```ts
get static historyInterval(): number;
```

#### Returns

`number`

### Set Signature

```ts
set static historyInterval(value: number): void;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `number` |

#### Returns

`void`

### Inherited from

```ts
Base.historyInterval
```

***

### historyTime

### Get Signature

```ts
get static historyTime(): number;
```

#### Returns

`number`

### Set Signature

```ts
set static historyTime(value: number): void;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `number` |

#### Returns

`void`

### Inherited from

```ts
Base.historyTime
```

***

### maxGcFrequency

### Get Signature

```ts
get static maxGcFrequency(): number;
```

#### Returns

`number`

### Set Signature

```ts
set static maxGcFrequency(value: number): void;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `number` |

#### Returns

`void`

### Inherited from

```ts
Base.maxGcFrequency
```

***

### maxHistoryDepth

### Get Signature

```ts
get static maxHistoryDepth(): number;
```

#### Returns

`number`

### Inherited from

```ts
Base.maxHistoryDepth
```

***

### logger

### Get Signature

```ts
get logger(): Logger | undefined;
```

#### Returns

`Logger` \| `undefined`

### Inherited from

```ts
Base.logger
```

***

### meter

### Get Signature

```ts
get meter(): Meter | undefined;
```

#### Returns

`Meter` \| `undefined`

### Inherited from

```ts
Base.meter
```

***

### params

### Get Signature

```ts
get params(): BaseParams<TParams>;
```

#### Returns

`BaseParams`\<`TParams`\>

### Inherited from

```ts
Base.params
```

***

### tracer

### Get Signature

```ts
get tracer(): Tracer | undefined;
```

#### Returns

`Tracer` \| `undefined`

### Inherited from

```ts
Base.tracer
```

## Methods

### gc()

### Call Signature

```ts
static gc(force?: boolean): void;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `force?` | `boolean` |

#### Returns

`void`

#### Inherited from

```ts
Base.gc
```

### Call Signature

```ts
static gc(className: BaseClassName): void;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `className` | `BaseClassName` |

#### Returns

`void`

#### Inherited from

```ts
Base.gc
```

***

### instanceCount()

```ts
static instanceCount(className: BaseClassName): number;
```

### Parameters

| Parameter | Type |
| ------ | ------ |
| `className` | `BaseClassName` |

### Returns

`number`

### Inherited from

```ts
Base.instanceCount
```

***

### instanceCounts()

```ts
static instanceCounts(): Record<BaseClassName, number>;
```

### Returns

`Record`\<`BaseClassName`, `number`\>

### Inherited from

```ts
Base.instanceCounts
```

***

### startHistory()

```ts
static startHistory(): void;
```

### Returns

`void`

### Inherited from

```ts
Base.startHistory
```

***

### stopHistory()

```ts
static stopHistory(): void;
```

### Returns

`void`

### Inherited from

```ts
Base.stopHistory
```

***

### clearListeners()

```ts
clearListeners(eventNames: keyof TEventData | keyof TEventData[]): BaseEmitter<TParams, TEventData>;
```

Removes all listeners for the specified event name(s).

### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `eventNames` | keyof `TEventData` \| keyof `TEventData`[] | One or more event names to clear listeners for. |

### Returns

`BaseEmitter`\<`TParams`, `TEventData`\>

This instance for chaining.

### Implementation of

[`EventEmitter`](#../interfaces/EventEmitter).[`clearListeners`](../interfaces/EventEmitter.md#clearlisteners)

***

### emit()

```ts
emit<TEventName, TEventArgs>(eventName: TEventName, eventArgs: TEventArgs): Promise<void>;
```

Emits an event, invoking all registered listeners concurrently.

### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `TEventName` *extends* `string` \| `number` \| `symbol` | keyof `TEventData` |
| `TEventArgs` *extends* [`EventArgs`](#../type-aliases/EventArgs) | `TEventData`\[`TEventName`\] |

### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `eventName` | `TEventName` | The event to emit. |
| `eventArgs` | `TEventArgs` | The data to pass to listeners. |

### Returns

`Promise`\<`void`\>

### Implementation of

[`EventEmitter`](#../interfaces/EventEmitter).[`emit`](../interfaces/EventEmitter.md#emit)

***

### emitSerial()

```ts
emitSerial<TEventName, TEventArgs>(eventName: TEventName, eventArgs: TEventArgs): Promise<void>;
```

Emits an event, invoking all registered listeners sequentially in order.

### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `TEventName` *extends* `string` \| `number` \| `symbol` | keyof `TEventData` |
| `TEventArgs` *extends* [`EventArgs`](#../type-aliases/EventArgs) | `TEventData`\[`TEventName`\] |

### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `eventName` | `TEventName` | The event to emit. |
| `eventArgs` | `TEventArgs` | The data to pass to listeners. |

### Returns

`Promise`\<`void`\>

### Implementation of

[`EventEmitter`](#../interfaces/EventEmitter).[`emitSerial`](../interfaces/EventEmitter.md#emitserial)

***

### listenerCount()

```ts
listenerCount(eventNames: keyof TEventData | keyof TEventData[]): number;
```

Returns the total number of listeners registered for the specified event name(s).

### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `eventNames` | keyof `TEventData` \| keyof `TEventData`[] | One or more event names to count listeners for. |

### Returns

`number`

The total listener count.

### Implementation of

[`EventEmitter`](#../interfaces/EventEmitter).[`listenerCount`](../interfaces/EventEmitter.md#listenercount)

***

### off()

```ts
off<TEventName>(eventNames: TEventName | TEventName[], listener: EventListener<TEventData[TEventName]>): void;
```

Removes a specific listener from the specified event name(s).

### Type Parameters

| Type Parameter |
| ------ |
| `TEventName` *extends* `string` \| `number` \| `symbol` |

### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `eventNames` | `TEventName` \| `TEventName`[] | One or more event names to unsubscribe from. |
| `listener` | [`EventListener`](#../type-aliases/EventListener)\<`TEventData`\[`TEventName`\]\> | The listener to remove. |

### Returns

`void`

### Implementation of

[`EventEmitter`](#../interfaces/EventEmitter).[`off`](../interfaces/EventEmitter.md#off)

***

### offAny()

```ts
offAny(listener: EventAnyListener): void;
```

Removes a wildcard listener that was receiving all events.

### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `listener` | [`EventAnyListener`](#../type-aliases/EventAnyListener) | The wildcard listener to remove. |

### Returns

`void`

### Implementation of

[`EventEmitter`](#../interfaces/EventEmitter).[`offAny`](../interfaces/EventEmitter.md#offany)

***

### on()

```ts
on<TEventName>(eventNames: TEventName | TEventName[], listener: EventListener<TEventData[TEventName]>): (...args: []) => void;
```

Subscribes a listener to the specified event name(s).

### Type Parameters

| Type Parameter |
| ------ |
| `TEventName` *extends* `string` \| `number` \| `symbol` |

### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `eventNames` | `TEventName` \| `TEventName`[] | One or more event names to listen for. |
| `listener` | [`EventListener`](#../type-aliases/EventListener)\<`TEventData`\[`TEventName`\]\> | The callback to invoke when the event fires. |

### Returns

An unsubscribe function.

```ts
(...args: []): void;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[\] |

#### Returns

`void`

### Implementation of

[`EventEmitter`](#../interfaces/EventEmitter).[`on`](../interfaces/EventEmitter.md#on)

***

### onAny()

```ts
onAny(listener: EventAnyListener): (...args: []) => void;
```

Subscribes a wildcard listener that receives all events.

### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `listener` | [`EventAnyListener`](#../type-aliases/EventAnyListener) | The callback to invoke for any event. |

### Returns

An unsubscribe function.

```ts
(...args: []): void;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[\] |

#### Returns

`void`

### Implementation of

[`EventEmitter`](#../interfaces/EventEmitter).[`onAny`](../interfaces/EventEmitter.md#onany)

***

### once()

```ts
once<TEventName>(eventName: TEventName, listener: EventListener<TEventData[TEventName]>): (...args: []) => void;
```

Subscribes a listener that will be invoked only once for the specified event, then automatically removed.

### Type Parameters

| Type Parameter |
| ------ |
| `TEventName` *extends* `string` \| `number` \| `symbol` |

### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `eventName` | `TEventName` | The event to listen for. |
| `listener` | [`EventListener`](#../type-aliases/EventListener)\<`TEventData`\[`TEventName`\]\> | The callback to invoke once. |

### Returns

An unsubscribe function.

```ts
(...args: []): void;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[\] |

#### Returns

`void`

### Implementation of

[`EventEmitter`](#../interfaces/EventEmitter).[`once`](../interfaces/EventEmitter.md#once)

  ### <a id="Events"></a>Events

[**@xylabs/events**](#../README)

***

Core typed event emitter implementation supporting named events, wildcard listeners,
serial and concurrent emission, listener filtering, and debug logging.

## Extends

- `Base`\<[`EventsParams`](#../type-aliases/EventsParams)\>

## Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `TEventData` *extends* [`EventData`](#../type-aliases/EventData) | [`EventData`](#../type-aliases/EventData) |

## Implements

- [`EventEmitter`](#../interfaces/EventEmitter)\<`TEventData`\>

## Constructors

### Constructor

```ts
new Events<TEventData>(params?: EventsParams): Events<TEventData>;
```

### Parameters

| Parameter | Type |
| ------ | ------ |
| `params` | [`EventsParams`](#../type-aliases/EventsParams) |

### Returns

`Events`\<`TEventData`\>

### Overrides

```ts
Base<EventsParams>.constructor
```

## Properties

| Property | Modifier | Type | Description | Inherited from |
| ------ | ------ | ------ | ------ | ------ |
| <a id="defaultlogger"></a> `defaultLogger?` | `static` | `Logger` | - | `Base.defaultLogger` |
| <a id="globalinstances"></a> `globalInstances` | `readonly` | `Record`\<`BaseClassName`, `WeakRef`\<`Base`\>[]\> | - | `Base.globalInstances` |
| <a id="globalinstancescounthistory"></a> `globalInstancesCountHistory` | `readonly` | `Record`\<`BaseClassName`, `number`[]\> | - | `Base.globalInstancesCountHistory` |
| <a id="anymap"></a> `anyMap` | `static` | `WeakMap`\<`object`, `Set`\<[`EventAnyListener`](#../type-aliases/EventAnyListener)\>\> | - | - |
| <a id="eventsmap"></a> `eventsMap` | `static` | `WeakMap`\<`object`, `Map`\<`PropertyKey`, `Set`\<[`EventListenerInfo`](#../type-aliases/EventListenerInfo)\<[`EventArgs`](#../type-aliases/EventArgs)\>\>\>\> | - | - |
| <a id="eventdata"></a> `eventData` | `public` | `TEventData` | Type-level reference to the event data shape for external type queries. | - |

## Accessors

### historyInterval

### Get Signature

```ts
get static historyInterval(): number;
```

#### Returns

`number`

### Set Signature

```ts
set static historyInterval(value: number): void;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `number` |

#### Returns

`void`

### Inherited from

```ts
Base.historyInterval
```

***

### historyTime

### Get Signature

```ts
get static historyTime(): number;
```

#### Returns

`number`

### Set Signature

```ts
set static historyTime(value: number): void;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `number` |

#### Returns

`void`

### Inherited from

```ts
Base.historyTime
```

***

### maxGcFrequency

### Get Signature

```ts
get static maxGcFrequency(): number;
```

#### Returns

`number`

### Set Signature

```ts
set static maxGcFrequency(value: number): void;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `number` |

#### Returns

`void`

### Inherited from

```ts
Base.maxGcFrequency
```

***

### maxHistoryDepth

### Get Signature

```ts
get static maxHistoryDepth(): number;
```

#### Returns

`number`

### Inherited from

```ts
Base.maxHistoryDepth
```

***

### logger

### Get Signature

```ts
get logger(): Logger | undefined;
```

#### Returns

`Logger` \| `undefined`

### Inherited from

```ts
Base.logger
```

***

### meter

### Get Signature

```ts
get meter(): Meter | undefined;
```

#### Returns

`Meter` \| `undefined`

### Inherited from

```ts
Base.meter
```

***

### params

### Get Signature

```ts
get params(): BaseParams<TParams>;
```

#### Returns

`BaseParams`\<`TParams`\>

### Inherited from

```ts
Base.params
```

***

### tracer

### Get Signature

```ts
get tracer(): Tracer | undefined;
```

#### Returns

`Tracer` \| `undefined`

### Inherited from

```ts
Base.tracer
```

***

### isDebugEnabled

### Get Signature

```ts
get static isDebugEnabled(): boolean;
```

Whether debug mode is enabled globally or via the DEBUG environment variable.

#### Returns

`boolean`

### Set Signature

```ts
set static isDebugEnabled(newValue: boolean): void;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `newValue` | `boolean` |

#### Returns

`void`

***

### debug

### Get Signature

```ts
get debug(): DebugOptions | undefined;
```

The debug configuration for this instance, if provided.

#### Returns

[`DebugOptions`](#../type-aliases/DebugOptions) \| `undefined`

## Methods

### gc()

### Call Signature

```ts
static gc(force?: boolean): void;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `force?` | `boolean` |

#### Returns

`void`

#### Inherited from

```ts
Base.gc
```

### Call Signature

```ts
static gc(className: BaseClassName): void;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `className` | `BaseClassName` |

#### Returns

`void`

#### Inherited from

```ts
Base.gc
```

***

### instanceCount()

```ts
static instanceCount(className: BaseClassName): number;
```

### Parameters

| Parameter | Type |
| ------ | ------ |
| `className` | `BaseClassName` |

### Returns

`number`

### Inherited from

```ts
Base.instanceCount
```

***

### instanceCounts()

```ts
static instanceCounts(): Record<BaseClassName, number>;
```

### Returns

`Record`\<`BaseClassName`, `number`\>

### Inherited from

```ts
Base.instanceCounts
```

***

### startHistory()

```ts
static startHistory(): void;
```

### Returns

`void`

### Inherited from

```ts
Base.startHistory
```

***

### stopHistory()

```ts
static stopHistory(): void;
```

### Returns

`void`

### Inherited from

```ts
Base.stopHistory
```

***

### clearListeners()

```ts
clearListeners(eventNames: keyof TEventData | keyof TEventData[]): void;
```

Removes all listeners for the specified event name(s).

### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `eventNames` | keyof `TEventData` \| keyof `TEventData`[] | One or more event names to clear listeners for. |

### Returns

`void`

### Implementation of

[`EventEmitter`](#../interfaces/EventEmitter).[`clearListeners`](../interfaces/EventEmitter.md#clearlisteners)

***

### emit()

```ts
emit<TEventName>(eventName: TEventName, eventArgs: TEventData[TEventName]): Promise<void>;
```

Emits an event, invoking all registered listeners concurrently.

### Type Parameters

| Type Parameter |
| ------ |
| `TEventName` *extends* `string` \| `number` \| `symbol` |

### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `eventName` | `TEventName` | The event to emit. |
| `eventArgs` | `TEventData`\[`TEventName`\] | The data to pass to listeners. |

### Returns

`Promise`\<`void`\>

### Implementation of

[`EventEmitter`](#../interfaces/EventEmitter).[`emit`](../interfaces/EventEmitter.md#emit)

***

### emitMetaEvent()

```ts
emitMetaEvent<TEventName>(eventName: TEventName, eventArgs: MetaEventData<TEventData>[TEventName]): Promise<boolean | undefined>;
```

Emits an internal meta event (listenerAdded or listenerRemoved).

### Type Parameters

| Type Parameter |
| ------ |
| `TEventName` *extends* keyof [`MetaEventData`](#../type-aliases/MetaEventData)\<`TEventData`\> |

### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `eventName` | `TEventName` | The meta event name. |
| `eventArgs` | [`MetaEventData`](#../type-aliases/MetaEventData)\<`TEventData`\>\[`TEventName`\] | The meta event data containing listener and event information. |

### Returns

`Promise`\<`boolean` \| `undefined`\>

True if the meta event was emitted successfully.

***

### emitSerial()

```ts
emitSerial<TEventName>(eventName: TEventName, eventArgs: TEventData[TEventName]): Promise<void>;
```

Emits an event, invoking all registered listeners sequentially in order.

### Type Parameters

| Type Parameter |
| ------ |
| `TEventName` *extends* `string` \| `number` \| `symbol` |

### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `eventName` | `TEventName` | The event to emit. |
| `eventArgs` | `TEventData`\[`TEventName`\] | The data to pass to listeners. |

### Returns

`Promise`\<`void`\>

### Implementation of

[`EventEmitter`](#../interfaces/EventEmitter).[`emitSerial`](../interfaces/EventEmitter.md#emitserial)

***

### listenerCount()

```ts
listenerCount(eventNames?: keyof TEventData | keyof TEventData[]): number;
```

Returns the total number of listeners registered for the specified event name(s).

### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `eventNames?` | keyof `TEventData` \| keyof `TEventData`[] | One or more event names to count listeners for. |

### Returns

`number`

The total listener count.

### Implementation of

[`EventEmitter`](#../interfaces/EventEmitter).[`listenerCount`](../interfaces/EventEmitter.md#listenercount)

***

### logIfDebugEnabled()

```ts
logIfDebugEnabled<TEventName>(
   type: string, 
   eventName?: TEventName, 
   eventArgs?: EventArgs): void;
```

Logs debug information if debug mode is enabled.

### Type Parameters

| Type Parameter |
| ------ |
| `TEventName` *extends* `PropertyKey` |

### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `type` | `string` | The type of operation being logged. |
| `eventName?` | `TEventName` | The event name, if applicable. |
| `eventArgs?` | [`EventArgs`](#../type-aliases/EventArgs) | The event data, if applicable. |

### Returns

`void`

***

### off()

```ts
off<TEventName, TEventListener>(eventNames: TEventName | TEventName[], listener: TEventListener): void;
```

Removes a specific listener from the specified event name(s).

### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `TEventName` *extends* `string` \| `number` \| `symbol` | - |
| `TEventListener` | [`EventListener`](#../type-aliases/EventListener)\<`TEventData`\[`TEventName`\]\> |

### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `eventNames` | `TEventName` \| `TEventName`[] | One or more event names to unsubscribe from. |
| `listener` | `TEventListener` | The listener to remove. |

### Returns

`void`

### Implementation of

[`EventEmitter`](#../interfaces/EventEmitter).[`off`](../interfaces/EventEmitter.md#off)

***

### offAny()

```ts
offAny(listener: EventAnyListener): void;
```

Removes a wildcard listener that was receiving all events.

### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `listener` | [`EventAnyListener`](#../type-aliases/EventAnyListener) | The wildcard listener to remove. |

### Returns

`void`

### Implementation of

[`EventEmitter`](#../interfaces/EventEmitter).[`offAny`](../interfaces/EventEmitter.md#offany)

***

### on()

```ts
on<TEventName>(
   eventNames: TEventName | TEventName[], 
   listener: EventListener<TEventData[TEventName]>, 
   filter?: TEventData[TEventName]): (...args: []) => void;
```

Subscribes a listener to the specified event name(s).

### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `TEventName` *extends* `string` \| `number` \| `symbol` | keyof `TEventData` |

### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `eventNames` | `TEventName` \| `TEventName`[] | One or more event names to listen for. |
| `listener` | [`EventListener`](#../type-aliases/EventListener)\<`TEventData`\[`TEventName`\]\> | The callback to invoke when the event fires. |
| `filter?` | `TEventData`\[`TEventName`\] | Optional filter to selectively invoke the listener based on event data. |

### Returns

An unsubscribe function.

```ts
(...args: []): void;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[\] |

#### Returns

`void`

### Implementation of

[`EventEmitter`](#../interfaces/EventEmitter).[`on`](../interfaces/EventEmitter.md#on)

***

### onAny()

```ts
onAny(listener: EventAnyListener): (...args: []) => void;
```

Subscribes a wildcard listener that receives all events.

### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `listener` | [`EventAnyListener`](#../type-aliases/EventAnyListener) | The callback to invoke for any event. |

### Returns

An unsubscribe function.

```ts
(...args: []): void;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[\] |

#### Returns

`void`

### Implementation of

[`EventEmitter`](#../interfaces/EventEmitter).[`onAny`](../interfaces/EventEmitter.md#onany)

***

### once()

```ts
once<TEventName>(eventName: TEventName, listener: EventListener<TEventData[TEventName]>): (...args: []) => void;
```

Subscribes a listener that will be invoked only once for the specified event, then automatically removed.

### Type Parameters

| Type Parameter |
| ------ |
| `TEventName` *extends* `string` \| `number` \| `symbol` |

### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `eventName` | `TEventName` | The event to listen for. |
| `listener` | [`EventListener`](#../type-aliases/EventListener)\<`TEventData`\[`TEventName`\]\> | The callback to invoke once. |

### Returns

An unsubscribe function.

```ts
(...args: []): void;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[\] |

#### Returns

`void`

### Implementation of

[`EventEmitter`](#../interfaces/EventEmitter).[`once`](../interfaces/EventEmitter.md#once)

### interfaces

  ### <a id="BaseEmitterParamsFields"></a>BaseEmitterParamsFields

[**@xylabs/events**](#../README)

***

Fields specific to BaseEmitter configuration parameters.

  ### <a id="EventEmitter"></a>EventEmitter

[**@xylabs/events**](#../README)

***

Interface for a typed event emitter that supports subscribing, unsubscribing, and emitting events.

## Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* [`EventData`](#../type-aliases/EventData) |

## Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| <a id="eventdata"></a> `eventData` | `T` | Type-level reference to the event data shape for external type queries. |

## Methods

### clearListeners()

```ts
clearListeners(eventNames: keyof T | keyof T[]): void;
```

Removes all listeners for the specified event name(s).

### Parameters

| Parameter | Type |
| ------ | ------ |
| `eventNames` | keyof `T` \| keyof `T`[] |

### Returns

`void`

***

### emit()

```ts
emit<TEventName>(eventName: TEventName, eventArgs: T[TEventName]): Promise<void>;
```

Emits an event, invoking all registered listeners concurrently.

### Type Parameters

| Type Parameter |
| ------ |
| `TEventName` *extends* `string` \| `number` \| `symbol` |

### Parameters

| Parameter | Type |
| ------ | ------ |
| `eventName` | `TEventName` |
| `eventArgs` | `T`\[`TEventName`\] |

### Returns

`Promise`\<`void`\>

***

### emitSerial()

```ts
emitSerial<TEventName>(eventName: TEventName, eventArgs: T[TEventName]): Promise<void>;
```

Emits an event, invoking all registered listeners sequentially in order.

### Type Parameters

| Type Parameter |
| ------ |
| `TEventName` *extends* `string` \| `number` \| `symbol` |

### Parameters

| Parameter | Type |
| ------ | ------ |
| `eventName` | `TEventName` |
| `eventArgs` | `T`\[`TEventName`\] |

### Returns

`Promise`\<`void`\>

***

### listenerCount()

```ts
listenerCount(eventNames: keyof T | keyof T[]): number;
```

Returns the total number of listeners registered for the specified event name(s).

### Parameters

| Parameter | Type |
| ------ | ------ |
| `eventNames` | keyof `T` \| keyof `T`[] |

### Returns

`number`

***

### off()

```ts
off<TEventName>(eventNames: TEventName | TEventName[], listener: EventListener<T[TEventName]>): void;
```

Removes a specific listener from the specified event name(s).

### Type Parameters

| Type Parameter |
| ------ |
| `TEventName` *extends* `string` \| `number` \| `symbol` |

### Parameters

| Parameter | Type |
| ------ | ------ |
| `eventNames` | `TEventName` \| `TEventName`[] |
| `listener` | [`EventListener`](#../type-aliases/EventListener)\<`T`\[`TEventName`\]\> |

### Returns

`void`

***

### offAny()

```ts
offAny(listener: 
  | Promise<void>
  | EventAnyListener): void;
```

Removes a wildcard listener that was receiving all events.

### Parameters

| Parameter | Type |
| ------ | ------ |
| `listener` | \| `Promise`\<`void`\> \| [`EventAnyListener`](#../type-aliases/EventAnyListener) |

### Returns

`void`

***

### on()

```ts
on<TEventName>(eventNames: TEventName | TEventName[], listener: EventListener<T[TEventName]>): EventUnsubscribeFunction;
```

Subscribes a listener to the specified event name(s) and returns an unsubscribe function.

### Type Parameters

| Type Parameter |
| ------ |
| `TEventName` *extends* `string` \| `number` \| `symbol` |

### Parameters

| Parameter | Type |
| ------ | ------ |
| `eventNames` | `TEventName` \| `TEventName`[] |
| `listener` | [`EventListener`](#../type-aliases/EventListener)\<`T`\[`TEventName`\]\> |

### Returns

[`EventUnsubscribeFunction`](#../type-aliases/EventUnsubscribeFunction)

***

### onAny()

```ts
onAny(listener: EventAnyListener): EventUnsubscribeFunction;
```

Subscribes a wildcard listener that receives all events and returns an unsubscribe function.

### Parameters

| Parameter | Type |
| ------ | ------ |
| `listener` | [`EventAnyListener`](#../type-aliases/EventAnyListener) |

### Returns

[`EventUnsubscribeFunction`](#../type-aliases/EventUnsubscribeFunction)

***

### once()

```ts
once<TEventName>(eventName: TEventName, listener: EventListener<T[TEventName]>): EventUnsubscribeFunction;
```

Subscribes a listener that will be invoked only once for the specified event, then automatically removed.

### Type Parameters

| Type Parameter |
| ------ |
| `TEventName` *extends* `string` \| `number` \| `symbol` |

### Parameters

| Parameter | Type |
| ------ | ------ |
| `eventName` | `TEventName` |
| `listener` | [`EventListener`](#../type-aliases/EventListener)\<`T`\[`TEventName`\]\> |

### Returns

[`EventUnsubscribeFunction`](#../type-aliases/EventUnsubscribeFunction)

### type-aliases

  ### <a id="BaseEmitterParams"></a>BaseEmitterParams

[**@xylabs/events**](#../README)

***

```ts
type BaseEmitterParams<T> = BaseParams<T & BaseEmitterParamsFields & T>;
```

Parameters type for configuring a BaseEmitter instance.

## Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `T` *extends* `EmptyObject` | `EmptyObject` |

  ### <a id="DebugLogger"></a>DebugLogger

[**@xylabs/events**](#../README)

***

```ts
type DebugLogger = (type: string, debugName: string, eventName?: EventName, eventData?: EventArgs) => void;
```

Emittery can collect and log debug information.

To enable this feature set the `DEBUG` environment variable to `emittery` or `*`. Additionally, you can set the static `isDebugEnabled` variable to true
on the Emittery class, or `myEmitter.debug.enabled` on an instance of it for debugging a single instance.

See API for more information on how debugging works.

## Parameters

| Parameter | Type |
| ------ | ------ |
| `type` | `string` |
| `debugName` | `string` |
| `eventName?` | [`EventName`](#EventName) |
| `eventData?` | [`EventArgs`](#EventArgs) |

## Returns

`void`

  ### <a id="DebugOptions"></a>DebugOptions

[**@xylabs/events**](#../README)

***

```ts
type DebugOptions = {
  enabled?: boolean;
  logger?: DebugLogger;
  name: string;
};
```

Configure debug options of an instance.

## Properties

| Property | Modifier | Type |
| ------ | ------ | ------ |
| <a id="enabled"></a> `enabled?` | `public` | `boolean` |
| <a id="logger"></a> `logger?` | `public` | [`DebugLogger`](#DebugLogger) |
| <a id="name"></a> `name` | `readonly` | `string` |

  ### <a id="EventAnyListener"></a>EventAnyListener

[**@xylabs/events**](#../README)

***

```ts
type EventAnyListener<TEventArgs> = (eventName: EventName, eventData: TEventArgs) => Promisable<void>;
```

A listener that receives all events regardless of name.

## Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `TEventArgs` *extends* [`EventArgs`](#EventArgs) | [`EventArgs`](#EventArgs) |

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `eventName` | [`EventName`](#EventName) | The name of the emitted event. |
| `eventData` | `TEventArgs` | The data associated with the event. |

## Returns

`Promisable`\<`void`\>

  ### <a id="EventArgs"></a>EventArgs

[**@xylabs/events**](#../README)

***

```ts
type EventArgs = string | number | object;
```

The allowed types for event argument payloads.

  ### <a id="EventData"></a>EventData

[**@xylabs/events**](#../README)

***

```ts
type EventData = {
[key: string | number | symbol]: EventArgs;
};
```

A mapping of event names to their corresponding event argument types.

## Index Signature

```ts
[key: string | number | symbol]: EventArgs
```

  ### <a id="EventListener"></a>EventListener

[**@xylabs/events**](#../README)

***

```ts
type EventListener<TEventArgs> = (eventData: TEventArgs) => Promisable<void>;
```

A listener for a specific event type.

## Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `TEventArgs` *extends* [`EventArgs`](#EventArgs) | [`EventArgs`](#EventArgs) |

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `eventData` | `TEventArgs` | The data associated with the event. |

## Returns

`Promisable`\<`void`\>

  ### <a id="EventListenerInfo"></a>EventListenerInfo

[**@xylabs/events**](#../README)

***

```ts
type EventListenerInfo<TEventArgs> = {
  filter?: TEventArgs;
  listener: EventListener<TEventArgs>;
};
```

Information about a registered event listener, including an optional filter for selective invocation.

## Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `TEventArgs` *extends* [`EventArgs`](#EventArgs) | [`EventArgs`](#EventArgs) |

## Properties

| Property | Type |
| ------ | ------ |
| <a id="filter"></a> `filter?` | `TEventArgs` |
| <a id="listener"></a> `listener` | [`EventListener`](#EventListener)\<`TEventArgs`\> |

  ### <a id="EventName"></a>EventName

[**@xylabs/events**](#../README)

***

```ts
type EventName = PropertyKey;
```

A valid event name, which can be any property key (string, number, or symbol).

  ### <a id="EventUnsubscribeFunction"></a>EventUnsubscribeFunction

[**@xylabs/events**](#../README)

***

```ts
type EventUnsubscribeFunction = () => void;
```

A function returned by event subscription methods that unsubscribes the listener when called.

## Returns

`void`

  ### <a id="EventsParams"></a>EventsParams

[**@xylabs/events**](#../README)

***

```ts
type EventsParams = BaseParams<{
  debug?: DebugOptions;
}>;
```

Parameters for constructing an Events instance, with optional debug configuration.

  ### <a id="MetaEventData"></a>MetaEventData

[**@xylabs/events**](#../README)

***

```ts
type MetaEventData<TEventData> = {
  listenerAdded: {
     eventName?: keyof TEventData;
     listener:   | EventListener<TEventData[keyof TEventData]>
        | EventAnyListener<TEventData[keyof TEventData]>;
  };
  listenerRemoved: {
     eventName?: keyof TEventData;
     listener:   | EventListener<TEventData[keyof TEventData]>
        | EventAnyListener<TEventData[keyof TEventData]>;
  };
};
```

Data shape for internal meta events that fire when listeners are added or removed.

## Type Parameters

| Type Parameter |
| ------ |
| `TEventData` *extends* [`EventData`](#EventData) |

## Properties

| Property | Type |
| ------ | ------ |
| <a id="listeneradded"></a> `listenerAdded` | \{ `eventName?`: keyof `TEventData`; `listener`: \| [`EventListener`](#EventListener)\<`TEventData`\[keyof `TEventData`\]\> \| [`EventAnyListener`](#EventAnyListener)\<`TEventData`\[keyof `TEventData`\]\>; \} |
| `listenerAdded.eventName?` | keyof `TEventData` |
| `listenerAdded.listener` | \| [`EventListener`](#EventListener)\<`TEventData`\[keyof `TEventData`\]\> \| [`EventAnyListener`](#EventAnyListener)\<`TEventData`\[keyof `TEventData`\]\> |
| <a id="listenerremoved"></a> `listenerRemoved` | \{ `eventName?`: keyof `TEventData`; `listener`: \| [`EventListener`](#EventListener)\<`TEventData`\[keyof `TEventData`\]\> \| [`EventAnyListener`](#EventAnyListener)\<`TEventData`\[keyof `TEventData`\]\>; \} |
| `listenerRemoved.eventName?` | keyof `TEventData` |
| `listenerRemoved.listener` | \| [`EventListener`](#EventListener)\<`TEventData`\[keyof `TEventData`\]\> \| [`EventAnyListener`](#EventAnyListener)\<`TEventData`\[keyof `TEventData`\]\> |


Part of [sdk-js](https://www.npmjs.com/package/@xyo-network/sdk-js)

## Maintainers

-   [Arie Trouw](https://github.com/arietrouw) ([arietrouw.com](https://arietrouw.com))
-   [Matt Jones](https://github.com/jonesmac)
-   [Joel Carter](https://github.com/JoelBCarter)
-   [Jordan Trouw](https://github.com/jordantrouw)

## License

> See the [LICENSE](LICENSE) file for license details

## Credits

[Made with 🔥 and ❄️ by XYLabs](https://xylabs.com)

[logo]: https://cdn.xy.company/img/brand/XYPersistentCompany_Logo_Icon_Colored.svg

[main-build]: https://github.com/xylabs/sdk-js/actions/workflows/build.yml/badge.svg
[main-build-link]: https://github.com/xylabs/sdk-js/actions/workflows/build.yml
[npm-badge]: https://img.shields.io/npm/v/@xylabs/events.svg
[npm-link]: https://www.npmjs.com/package/@xylabs/events
[codacy-badge]: https://app.codacy.com/project/badge/Grade/c8e15e14f37741c18cfb47ac7245c698
[codacy-link]: https://www.codacy.com/gh/xylabs/sdk-js/dashboard?utm_source=github.com&utm_medium=referral&utm_content=xylabs/sdk-js&utm_campaign=Badge_Grade
[codeclimate-badge]: https://api.codeclimate.com/v1/badges/c5eb068f806f0b047ea7/maintainability
[codeclimate-link]: https://codeclimate.com/github/xylabs/sdk-js/maintainability
[snyk-badge]: https://snyk.io/test/github/xylabs/sdk-js/badge.svg?targetFile=package.json
[snyk-link]: https://snyk.io/test/github/xylabs/sdk-js?targetFile=package.json

[npm-downloads-badge]: https://img.shields.io/npm/dw/@xylabs/events
[npm-license-badge]: https://img.shields.io/npm/l/@xylabs/events

[jsdelivr-badge]: https://data.jsdelivr.com/v1/package/npm/@xylabs/events/badge
[jsdelivr-link]: https://www.jsdelivr.com/package/npm/@xylabs/events

[socket-badge]: https://socket.dev/api/badge/npm/package/@xylabs/events
[socket-link]: https://socket.dev/npm/package/@xylabs/events