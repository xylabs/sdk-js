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

- [BaseEmitter](#classes/BaseEmitter)
- [Events](#classes/Events)

## Interfaces

- [BaseEmitterParamsFields](#interfaces/BaseEmitterParamsFields)
- [EventEmitter](#interfaces/EventEmitter)

## Type Aliases

- [BaseEmitterParams](#type-aliases/BaseEmitterParams)
- [DebugLogger](#type-aliases/DebugLogger)
- [EventListenerInfo](#type-aliases/EventListenerInfo)
- [DebugOptions](#type-aliases/DebugOptions)
- [MetaEventData](#type-aliases/MetaEventData)
- [EventsParams](#type-aliases/EventsParams)
- [EventName](#type-aliases/EventName)
- [EventArgs](#type-aliases/EventArgs)
- [EventData](#type-aliases/EventData)
- [EventUnsubscribeFunction](#type-aliases/EventUnsubscribeFunction)
- [EventAnyListener](#type-aliases/EventAnyListener)
- [EventListener](#type-aliases/EventListener)

### classes

  ### <a id="BaseEmitter"></a>BaseEmitter

[**@xylabs/events**](#../README)

***

## Extends

- `Base`\<`TParams`\>

## Type Parameters

### TParams

`TParams` *extends* `BaseParams` = `BaseParams`

### TEventData

`TEventData` *extends* [`EventData`](#../type-aliases/EventData) = [`EventData`](#../type-aliases/EventData)

## Implements

- [`EventEmitter`](#../interfaces/EventEmitter)\<`TEventData`\>

## Constructors

### Constructor

```ts
new BaseEmitter<TParams, TEventData>(params): BaseEmitter<TParams, TEventData>;
```

### Parameters

#### params

`BaseParams`\<`TParams`\>

### Returns

`BaseEmitter`\<`TParams`, `TEventData`\>

### Overrides

```ts
Base<TParams>.constructor
```

## Properties

### defaultLogger?

```ts
static optional defaultLogger: Logger;
```

### Inherited from

```ts
Base.defaultLogger
```

***

### globalInstances

```ts
readonly static globalInstances: Record<BaseClassName, WeakRef<Base>[]>;
```

### Inherited from

```ts
Base.globalInstances
```

***

### globalInstancesCountHistory

```ts
readonly static globalInstancesCountHistory: Record<BaseClassName, number[]>;
```

### Inherited from

```ts
Base.globalInstancesCountHistory
```

***

### uniqueName

```ts
readonly static uniqueName: string;
```

### Inherited from

```ts
Base.uniqueName
```

***

### eventData

```ts
eventData: TEventData;
```

### Implementation of

[`EventEmitter`](#../interfaces/EventEmitter).[`eventData`](../interfaces/EventEmitter.md#eventdata)

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
set static historyInterval(value): void;
```

#### Parameters

##### value

`number`

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
set static historyTime(value): void;
```

#### Parameters

##### value

`number`

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
set static maxGcFrequency(value): void;
```

#### Parameters

##### value

`number`

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
get logger(): undefined | Logger;
```

#### Returns

`undefined` \| `Logger`

### Inherited from

```ts
Base.logger
```

***

### meter

### Get Signature

```ts
get meter(): undefined | Meter;
```

#### Returns

`undefined` \| `Meter`

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
get tracer(): undefined | Tracer;
```

#### Returns

`undefined` \| `Tracer`

### Inherited from

```ts
Base.tracer
```

## Methods

### gc()

### Call Signature

```ts
static gc(force?): void;
```

#### Parameters

##### force?

`boolean`

#### Returns

`void`

#### Inherited from

```ts
Base.gc
```

### Call Signature

```ts
static gc(className): void;
```

#### Parameters

##### className

`string`

#### Returns

`void`

#### Inherited from

```ts
Base.gc
```

***

### instanceCount()

```ts
static instanceCount(className): number;
```

### Parameters

#### className

`string`

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
clearListeners(eventNames): BaseEmitter<TParams, TEventData>;
```

### Parameters

#### eventNames

keyof `TEventData` | keyof `TEventData`[]

### Returns

`BaseEmitter`\<`TParams`, `TEventData`\>

### Implementation of

[`EventEmitter`](#../interfaces/EventEmitter).[`clearListeners`](../interfaces/EventEmitter.md#clearlisteners)

***

### emit()

```ts
emit<TEventName, TEventArgs>(eventName, eventArgs): Promise<void>;
```

### Type Parameters

#### TEventName

`TEventName` *extends* `string` \| `number` \| `symbol` = keyof `TEventData`

#### TEventArgs

`TEventArgs` *extends* [`EventArgs`](#../type-aliases/EventArgs) = `TEventData`\[`TEventName`\]

### Parameters

#### eventName

`TEventName`

#### eventArgs

`TEventArgs`

### Returns

`Promise`\<`void`\>

### Implementation of

[`EventEmitter`](#../interfaces/EventEmitter).[`emit`](../interfaces/EventEmitter.md#emit)

***

### emitSerial()

```ts
emitSerial<TEventName, TEventArgs>(eventName, eventArgs): Promise<void>;
```

### Type Parameters

#### TEventName

`TEventName` *extends* `string` \| `number` \| `symbol` = keyof `TEventData`

#### TEventArgs

`TEventArgs` *extends* [`EventArgs`](#../type-aliases/EventArgs) = `TEventData`\[`TEventName`\]

### Parameters

#### eventName

`TEventName`

#### eventArgs

`TEventArgs`

### Returns

`Promise`\<`void`\>

### Implementation of

[`EventEmitter`](#../interfaces/EventEmitter).[`emitSerial`](../interfaces/EventEmitter.md#emitserial)

***

### listenerCount()

```ts
listenerCount(eventNames): number;
```

### Parameters

#### eventNames

keyof `TEventData` | keyof `TEventData`[]

### Returns

`number`

### Implementation of

[`EventEmitter`](#../interfaces/EventEmitter).[`listenerCount`](../interfaces/EventEmitter.md#listenercount)

***

### off()

```ts
off<TEventName>(eventNames, listener): void;
```

### Type Parameters

#### TEventName

`TEventName` *extends* `string` \| `number` \| `symbol`

### Parameters

#### eventNames

`TEventName` | `TEventName`[]

#### listener

[`EventListener`](#../type-aliases/EventListener)\<`TEventData`\[`TEventName`\]\>

### Returns

`void`

### Implementation of

[`EventEmitter`](#../interfaces/EventEmitter).[`off`](../interfaces/EventEmitter.md#off)

***

### offAny()

```ts
offAny(listener): void;
```

### Parameters

#### listener

[`EventAnyListener`](#../type-aliases/EventAnyListener)

### Returns

`void`

### Implementation of

[`EventEmitter`](#../interfaces/EventEmitter).[`offAny`](../interfaces/EventEmitter.md#offany)

***

### on()

```ts
on<TEventName>(eventNames, listener): (...args) => void;
```

### Type Parameters

#### TEventName

`TEventName` *extends* `string` \| `number` \| `symbol`

### Parameters

#### eventNames

`TEventName` | `TEventName`[]

#### listener

[`EventListener`](#../type-aliases/EventListener)\<`TEventData`\[`TEventName`\]\>

### Returns

```ts
(...args): void;
```

#### Parameters

##### args

...\[\]

#### Returns

`void`

### Implementation of

[`EventEmitter`](#../interfaces/EventEmitter).[`on`](../interfaces/EventEmitter.md#on)

***

### onAny()

```ts
onAny(listener): (...args) => void;
```

### Parameters

#### listener

[`EventAnyListener`](#../type-aliases/EventAnyListener)

### Returns

```ts
(...args): void;
```

#### Parameters

##### args

...\[\]

#### Returns

`void`

### Implementation of

[`EventEmitter`](#../interfaces/EventEmitter).[`onAny`](../interfaces/EventEmitter.md#onany)

***

### once()

```ts
once<TEventName>(eventName, listener): (...args) => void;
```

### Type Parameters

#### TEventName

`TEventName` *extends* `string` \| `number` \| `symbol`

### Parameters

#### eventName

`TEventName`

#### listener

[`EventListener`](#../type-aliases/EventListener)\<`TEventData`\[`TEventName`\]\>

### Returns

```ts
(...args): void;
```

#### Parameters

##### args

...\[\]

#### Returns

`void`

### Implementation of

[`EventEmitter`](#../interfaces/EventEmitter).[`once`](../interfaces/EventEmitter.md#once)

  ### <a id="Events"></a>Events

[**@xylabs/events**](#../README)

***

## Extends

- `Base`\<[`EventsParams`](#../type-aliases/EventsParams)\>

## Type Parameters

### TEventData

`TEventData` *extends* [`EventData`](#../type-aliases/EventData) = [`EventData`](#../type-aliases/EventData)

## Implements

- [`EventEmitter`](#../interfaces/EventEmitter)\<`TEventData`\>

## Constructors

### Constructor

```ts
new Events<TEventData>(params): Events<TEventData>;
```

### Parameters

#### params

[`EventsParams`](#../type-aliases/EventsParams) = `{}`

### Returns

`Events`\<`TEventData`\>

### Overrides

```ts
Base<EventsParams>.constructor
```

## Properties

### defaultLogger?

```ts
static optional defaultLogger: Logger;
```

### Inherited from

```ts
Base.defaultLogger
```

***

### globalInstances

```ts
readonly static globalInstances: Record<BaseClassName, WeakRef<Base>[]>;
```

### Inherited from

```ts
Base.globalInstances
```

***

### globalInstancesCountHistory

```ts
readonly static globalInstancesCountHistory: Record<BaseClassName, number[]>;
```

### Inherited from

```ts
Base.globalInstancesCountHistory
```

***

### uniqueName

```ts
readonly static uniqueName: string;
```

### Inherited from

```ts
Base.uniqueName
```

***

### anyMap

```ts
protected static anyMap: WeakMap<object, Set<EventAnyListener>>;
```

***

### eventsMap

```ts
protected static eventsMap: WeakMap<object, Map<PropertyKey, Set<EventListenerInfo<EventArgs>>>>;
```

***

### eventData

```ts
eventData: TEventData;
```

### Implementation of

[`EventEmitter`](#../interfaces/EventEmitter).[`eventData`](../interfaces/EventEmitter.md#eventdata)

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
set static historyInterval(value): void;
```

#### Parameters

##### value

`number`

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
set static historyTime(value): void;
```

#### Parameters

##### value

`number`

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
set static maxGcFrequency(value): void;
```

#### Parameters

##### value

`number`

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
get logger(): undefined | Logger;
```

#### Returns

`undefined` \| `Logger`

### Inherited from

```ts
Base.logger
```

***

### meter

### Get Signature

```ts
get meter(): undefined | Meter;
```

#### Returns

`undefined` \| `Meter`

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
get tracer(): undefined | Tracer;
```

#### Returns

`undefined` \| `Tracer`

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

#### Returns

`boolean`

### Set Signature

```ts
set static isDebugEnabled(newValue): void;
```

#### Parameters

##### newValue

`boolean`

#### Returns

`void`

***

### debug

### Get Signature

```ts
get debug(): undefined | DebugOptions;
```

#### Returns

`undefined` \| [`DebugOptions`](#../type-aliases/DebugOptions)

## Methods

### gc()

### Call Signature

```ts
static gc(force?): void;
```

#### Parameters

##### force?

`boolean`

#### Returns

`void`

#### Inherited from

```ts
Base.gc
```

### Call Signature

```ts
static gc(className): void;
```

#### Parameters

##### className

`string`

#### Returns

`void`

#### Inherited from

```ts
Base.gc
```

***

### instanceCount()

```ts
static instanceCount(className): number;
```

### Parameters

#### className

`string`

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
clearListeners(eventNames): void;
```

### Parameters

#### eventNames

keyof `TEventData` | keyof `TEventData`[]

### Returns

`void`

### Implementation of

[`EventEmitter`](#../interfaces/EventEmitter).[`clearListeners`](../interfaces/EventEmitter.md#clearlisteners)

***

### emit()

```ts
emit<TEventName>(eventName, eventArgs): Promise<void>;
```

### Type Parameters

#### TEventName

`TEventName` *extends* `string` \| `number` \| `symbol`

### Parameters

#### eventName

`TEventName`

#### eventArgs

`TEventData`\[`TEventName`\]

### Returns

`Promise`\<`void`\>

### Implementation of

[`EventEmitter`](#../interfaces/EventEmitter).[`emit`](../interfaces/EventEmitter.md#emit)

***

### emitMetaEvent()

```ts
emitMetaEvent<TEventName>(eventName, eventArgs): Promise<undefined | boolean>;
```

### Type Parameters

#### TEventName

`TEventName` *extends* keyof [`MetaEventData`](#../type-aliases/MetaEventData)\<`TEventData`\>

### Parameters

#### eventName

`TEventName`

#### eventArgs

[`MetaEventData`](#../type-aliases/MetaEventData)\<`TEventData`\>\[`TEventName`\]

### Returns

`Promise`\<`undefined` \| `boolean`\>

***

### emitSerial()

```ts
emitSerial<TEventName>(eventName, eventArgs): Promise<void>;
```

### Type Parameters

#### TEventName

`TEventName` *extends* `string` \| `number` \| `symbol`

### Parameters

#### eventName

`TEventName`

#### eventArgs

`TEventData`\[`TEventName`\]

### Returns

`Promise`\<`void`\>

### Implementation of

[`EventEmitter`](#../interfaces/EventEmitter).[`emitSerial`](../interfaces/EventEmitter.md#emitserial)

***

### listenerCount()

```ts
listenerCount(eventNames?): number;
```

### Parameters

#### eventNames?

keyof `TEventData` | keyof `TEventData`[]

### Returns

`number`

### Implementation of

[`EventEmitter`](#../interfaces/EventEmitter).[`listenerCount`](../interfaces/EventEmitter.md#listenercount)

***

### logIfDebugEnabled()

```ts
logIfDebugEnabled<TEventName>(
   type, 
   eventName?, 
   eventArgs?): void;
```

### Type Parameters

#### TEventName

`TEventName` *extends* `PropertyKey`

### Parameters

#### type

`string`

#### eventName?

`TEventName`

#### eventArgs?

[`EventArgs`](#../type-aliases/EventArgs)

### Returns

`void`

***

### off()

```ts
off<TEventName, TEventListener>(eventNames, listener): void;
```

### Type Parameters

#### TEventName

`TEventName` *extends* `string` \| `number` \| `symbol`

#### TEventListener

`TEventListener` = [`EventListener`](#../type-aliases/EventListener)\<`TEventData`\[`TEventName`\]\>

### Parameters

#### eventNames

`TEventName` | `TEventName`[]

#### listener

`TEventListener`

### Returns

`void`

### Implementation of

[`EventEmitter`](#../interfaces/EventEmitter).[`off`](../interfaces/EventEmitter.md#off)

***

### offAny()

```ts
offAny(listener): void;
```

### Parameters

#### listener

[`EventAnyListener`](#../type-aliases/EventAnyListener)

### Returns

`void`

### Implementation of

[`EventEmitter`](#../interfaces/EventEmitter).[`offAny`](../interfaces/EventEmitter.md#offany)

***

### on()

```ts
on<TEventName>(
   eventNames, 
   listener, 
   filter?): (...args) => void;
```

### Type Parameters

#### TEventName

`TEventName` *extends* `string` \| `number` \| `symbol` = keyof `TEventData`

### Parameters

#### eventNames

`TEventName` | `TEventName`[]

#### listener

[`EventListener`](#../type-aliases/EventListener)\<`TEventData`\[`TEventName`\]\>

#### filter?

`TEventData`\[`TEventName`\]

### Returns

```ts
(...args): void;
```

#### Parameters

##### args

...\[\]

#### Returns

`void`

### Implementation of

[`EventEmitter`](#../interfaces/EventEmitter).[`on`](../interfaces/EventEmitter.md#on)

***

### onAny()

```ts
onAny(listener): (...args) => void;
```

### Parameters

#### listener

[`EventAnyListener`](#../type-aliases/EventAnyListener)

### Returns

```ts
(...args): void;
```

#### Parameters

##### args

...\[\]

#### Returns

`void`

### Implementation of

[`EventEmitter`](#../interfaces/EventEmitter).[`onAny`](../interfaces/EventEmitter.md#onany)

***

### once()

```ts
once<TEventName>(eventName, listener): (...args) => void;
```

### Type Parameters

#### TEventName

`TEventName` *extends* `string` \| `number` \| `symbol`

### Parameters

#### eventName

`TEventName`

#### listener

[`EventListener`](#../type-aliases/EventListener)\<`TEventData`\[`TEventName`\]\>

### Returns

```ts
(...args): void;
```

#### Parameters

##### args

...\[\]

#### Returns

`void`

### Implementation of

[`EventEmitter`](#../interfaces/EventEmitter).[`once`](../interfaces/EventEmitter.md#once)

### interfaces

  ### <a id="BaseEmitterParamsFields"></a>BaseEmitterParamsFields

[**@xylabs/events**](#../README)

***

  ### <a id="EventEmitter"></a>EventEmitter

[**@xylabs/events**](#../README)

***

## Type Parameters

### T

`T` *extends* [`EventData`](#../type-aliases/EventData)

## Properties

### eventData

```ts
eventData: T;
```

## Methods

### clearListeners()

```ts
clearListeners(eventNames): void;
```

### Parameters

#### eventNames

keyof `T` | keyof `T`[]

### Returns

`void`

***

### emit()

```ts
emit<TEventName>(eventName, eventArgs): Promise<void>;
```

### Type Parameters

#### TEventName

`TEventName` *extends* `string` \| `number` \| `symbol`

### Parameters

#### eventName

`TEventName`

#### eventArgs

`T`\[`TEventName`\]

### Returns

`Promise`\<`void`\>

***

### emitSerial()

```ts
emitSerial<TEventName>(eventName, eventArgs): Promise<void>;
```

### Type Parameters

#### TEventName

`TEventName` *extends* `string` \| `number` \| `symbol`

### Parameters

#### eventName

`TEventName`

#### eventArgs

`T`\[`TEventName`\]

### Returns

`Promise`\<`void`\>

***

### listenerCount()

```ts
listenerCount(eventNames): number;
```

### Parameters

#### eventNames

keyof `T` | keyof `T`[]

### Returns

`number`

***

### off()

```ts
off<TEventName>(eventNames, listener): void;
```

### Type Parameters

#### TEventName

`TEventName` *extends* `string` \| `number` \| `symbol`

### Parameters

#### eventNames

`TEventName` | `TEventName`[]

#### listener

[`EventListener`](#../type-aliases/EventListener)\<`T`\[`TEventName`\]\>

### Returns

`void`

***

### offAny()

```ts
offAny(listener): void;
```

### Parameters

#### listener

`Promise`\<`void`\> | [`EventAnyListener`](#../type-aliases/EventAnyListener)

### Returns

`void`

***

### on()

```ts
on<TEventName>(eventNames, listener): EventUnsubscribeFunction;
```

### Type Parameters

#### TEventName

`TEventName` *extends* `string` \| `number` \| `symbol`

### Parameters

#### eventNames

`TEventName` | `TEventName`[]

#### listener

[`EventListener`](#../type-aliases/EventListener)\<`T`\[`TEventName`\]\>

### Returns

[`EventUnsubscribeFunction`](#../type-aliases/EventUnsubscribeFunction)

***

### onAny()

```ts
onAny(listener): EventUnsubscribeFunction;
```

### Parameters

#### listener

[`EventAnyListener`](#../type-aliases/EventAnyListener)

### Returns

[`EventUnsubscribeFunction`](#../type-aliases/EventUnsubscribeFunction)

***

### once()

```ts
once<TEventName>(eventName, listener): EventUnsubscribeFunction;
```

### Type Parameters

#### TEventName

`TEventName` *extends* `string` \| `number` \| `symbol`

### Parameters

#### eventName

`TEventName`

#### listener

[`EventListener`](#../type-aliases/EventListener)\<`T`\[`TEventName`\]\>

### Returns

[`EventUnsubscribeFunction`](#../type-aliases/EventUnsubscribeFunction)

### type-aliases

  ### <a id="BaseEmitterParams"></a>BaseEmitterParams

[**@xylabs/events**](#../README)

***

```ts
type BaseEmitterParams<T> = BaseParams<T & BaseEmitterParamsFields & T>;
```

## Type Parameters

### T

`T` *extends* `EmptyObject` = `EmptyObject`

  ### <a id="DebugLogger"></a>DebugLogger

[**@xylabs/events**](#../README)

***

```ts
type DebugLogger = (type, debugName, eventName?, eventData?) => void;
```

Emittery can collect and log debug information.

To enable this feature set the `DEBUG` environment variable to `emittery` or `*`. Additionally, you can set the static `isDebugEnabled` variable to true
on the Emittery class, or `myEmitter.debug.enabled` on an instance of it for debugging a single instance.

See API for more information on how debugging works.

## Parameters

### type

`string`

### debugName

`string`

### eventName?

[`EventName`](#EventName)

### eventData?

[`EventArgs`](#EventArgs)

## Returns

`void`

  ### <a id="DebugOptions"></a>DebugOptions

[**@xylabs/events**](#../README)

***

```ts
type DebugOptions = object;
```

Configure debug options of an instance.

## Properties

### enabled?

```ts
optional enabled: boolean;
```

***

### logger?

```ts
optional logger: DebugLogger;
```

***

### name

```ts
readonly name: string;
```

  ### <a id="EventAnyListener"></a>EventAnyListener

[**@xylabs/events**](#../README)

***

```ts
type EventAnyListener<TEventArgs> = (eventName, eventData) => Promisable<void>;
```

## Type Parameters

### TEventArgs

`TEventArgs` *extends* [`EventArgs`](#EventArgs) = [`EventArgs`](#EventArgs)

## Parameters

### eventName

[`EventName`](#EventName)

### eventData

`TEventArgs`

## Returns

`Promisable`\<`void`\>

  ### <a id="EventArgs"></a>EventArgs

[**@xylabs/events**](#../README)

***

```ts
type EventArgs = string | number | object;
```

  ### <a id="EventData"></a>EventData

[**@xylabs/events**](#../README)

***

```ts
type EventData = object;
```

## Index Signature

```ts
[key: string | number | symbol]: EventArgs
```

  ### <a id="EventListener"></a>EventListener

[**@xylabs/events**](#../README)

***

```ts
type EventListener<TEventArgs> = (eventData) => Promisable<void>;
```

## Type Parameters

### TEventArgs

`TEventArgs` *extends* [`EventArgs`](#EventArgs) = [`EventArgs`](#EventArgs)

## Parameters

### eventData

`TEventArgs`

## Returns

`Promisable`\<`void`\>

  ### <a id="EventListenerInfo"></a>EventListenerInfo

[**@xylabs/events**](#../README)

***

```ts
type EventListenerInfo<TEventArgs> = object;
```

## Type Parameters

### TEventArgs

`TEventArgs` *extends* [`EventArgs`](#EventArgs) = [`EventArgs`](#EventArgs)

## Properties

### filter?

```ts
optional filter: TEventArgs;
```

***

### listener

```ts
listener: EventListener<TEventArgs>;
```

  ### <a id="EventName"></a>EventName

[**@xylabs/events**](#../README)

***

```ts
type EventName = PropertyKey;
```

  ### <a id="EventUnsubscribeFunction"></a>EventUnsubscribeFunction

[**@xylabs/events**](#../README)

***

```ts
type EventUnsubscribeFunction = () => void;
```

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

  ### <a id="MetaEventData"></a>MetaEventData

[**@xylabs/events**](#../README)

***

```ts
type MetaEventData<TEventData> = object;
```

## Type Parameters

### TEventData

`TEventData` *extends* [`EventData`](#EventData)

## Properties

### listenerAdded

```ts
listenerAdded: object;
```

### eventName?

```ts
optional eventName: keyof TEventData;
```

### listener

```ts
listener: 
  | EventListener<TEventData[keyof TEventData]>
| EventAnyListener<TEventData[keyof TEventData]>;
```

***

### listenerRemoved

```ts
listenerRemoved: object;
```

### eventName?

```ts
optional eventName: keyof TEventData;
```

### listener

```ts
listener: 
  | EventListener<TEventData[keyof TEventData]>
| EventAnyListener<TEventData[keyof TEventData]>;
```


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