# @xylabs/creatable

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

## API Documentation

**@xylabs/creatable**

***

## Classes

- [AbstractCreatable](#classes/AbstractCreatable)
- [AbstractCreatableWithFactory](#classes/AbstractCreatableWithFactory)
- [Factory](#classes/Factory)

## Interfaces

- [CreatableFactory](#interfaces/CreatableFactory)
- [Creatable](#interfaces/Creatable)
- [CreatableWithFactory](#interfaces/CreatableWithFactory)
- [CreatableInstance](#interfaces/CreatableInstance)
- [CreatableParams](#interfaces/CreatableParams)
- [CreatableStatusReporter](#interfaces/CreatableStatusReporter)
- [Labels](#interfaces/Labels)
- [WithLabels](#interfaces/WithLabels)
- [WithOptionalLabels](#interfaces/WithOptionalLabels)

## Type Aliases

- [CreatableName](#type-aliases/CreatableName)
- [CreatableStatus](#type-aliases/CreatableStatus)

## Functions

- [creatable](#functions/creatable)
- [creatableFactory](#functions/creatableFactory)
- [hasAllLabels](#functions/hasAllLabels)

### classes

  ### <a id="AbstractCreatable"></a>AbstractCreatable

[**@xylabs/creatable**](#../README)

***

## Extends

- `BaseEmitter`\<`Partial`\<`TParams`\>, `TEventData`\>

## Extended by

- [`AbstractCreatableWithFactory`](#AbstractCreatableWithFactory)

## Type Parameters

### TParams

`TParams` *extends* [`CreatableParams`](#../interfaces/CreatableParams) = [`CreatableParams`](#../interfaces/CreatableParams)

### TEventData

`TEventData` *extends* `EventData` = `EventData`

## Constructors

### Constructor

```ts
new AbstractCreatable<TParams, TEventData>(key, params): AbstractCreatable<TParams, TEventData>;
```

### Parameters

#### key

`unknown`

#### params

`Partial`\<`TParams`\>

### Returns

`AbstractCreatable`\<`TParams`, `TEventData`\>

### Overrides

```ts
BaseEmitter<Partial<TParams>, TEventData>.constructor
```

## Properties

### defaultLogger?

```ts
static optional defaultLogger: Logger;
```

### Inherited from

```ts
BaseEmitter.defaultLogger
```

***

### globalInstances

```ts
readonly static globalInstances: Record<BaseClassName, WeakRef<Base>[]>;
```

### Inherited from

```ts
BaseEmitter.globalInstances
```

***

### globalInstancesCountHistory

```ts
readonly static globalInstancesCountHistory: Record<BaseClassName, number[]>;
```

### Inherited from

```ts
BaseEmitter.globalInstancesCountHistory
```

***

### uniqueName

```ts
readonly static uniqueName: string;
```

### Inherited from

```ts
BaseEmitter.uniqueName
```

***

### defaultLogger?

```ts
optional defaultLogger: Logger;
```

***

### eventData

```ts
eventData: TEventData;
```

### Inherited from

```ts
BaseEmitter.eventData
```

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
BaseEmitter.historyInterval
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
BaseEmitter.historyTime
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
BaseEmitter.maxGcFrequency
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
BaseEmitter.maxHistoryDepth
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
BaseEmitter.logger
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
BaseEmitter.meter
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
BaseEmitter.tracer
```

***

### name

### Get Signature

```ts
get name(): string;
```

#### Returns

`string`

***

### params

### Get Signature

```ts
get params(): TParams;
```

#### Returns

`TParams`

### Overrides

```ts
BaseEmitter.params
```

***

### statusReporter

### Get Signature

```ts
get statusReporter(): 
  | undefined
| CreatableStatusReporter<void>;
```

#### Returns

  \| `undefined`
  \| [`CreatableStatusReporter`](#../interfaces/CreatableStatusReporter)\<`void`\>

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
BaseEmitter.gc
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
BaseEmitter.gc
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
BaseEmitter.instanceCount
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
BaseEmitter.instanceCounts
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
BaseEmitter.startHistory
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
BaseEmitter.stopHistory
```

***

### create()

```ts
static create<T>(this, inParams): Promise<T>;
```

### Type Parameters

#### T

`T` *extends* [`CreatableInstance`](#../interfaces/CreatableInstance)\<[`CreatableParams`](#../interfaces/CreatableParams), `EventData`\>

### Parameters

#### this

[`Creatable`](#../interfaces/Creatable)\<`T`\>

#### inParams

`Partial`\<`T`\[`"params"`\]\> = `{}`

### Returns

`Promise`\<`T`\>

***

### createHandler()

```ts
static createHandler<T>(this, instance): Promisable<T>;
```

### Type Parameters

#### T

`T` *extends* [`CreatableInstance`](#../interfaces/CreatableInstance)\<[`CreatableParams`](#../interfaces/CreatableParams), `EventData`\>

### Parameters

#### this

[`Creatable`](#../interfaces/Creatable)\<`T`\>

#### instance

`T`

### Returns

`Promisable`\<`T`\>

***

### paramsHandler()

```ts
static paramsHandler<T>(this, params): Promisable<T["params"]>;
```

### Type Parameters

#### T

`T` *extends* [`CreatableInstance`](#../interfaces/CreatableInstance)\<[`CreatableParams`](#../interfaces/CreatableParams), `EventData`\>

### Parameters

#### this

[`Creatable`](#../interfaces/Creatable)\<`T`\>

#### params

`Partial`\<`T`\[`"params"`\]\> = `{}`

### Returns

`Promisable`\<`T`\[`"params"`\]\>

***

### createHandler()

```ts
createHandler(): Promisable<void>;
```

### Returns

`Promisable`\<`void`\>

***

### paramsValidator()

```ts
paramsValidator(params): TParams;
```

### Parameters

#### params

`Partial`\<`TParams`\>

### Returns

`TParams`

***

### start()

```ts
start(): Promise<boolean>;
```

### Returns

`Promise`\<`boolean`\>

***

### stop()

```ts
stop(): Promise<boolean>;
```

### Returns

`Promise`\<`boolean`\>

***

### \_noOverride()

```ts
protected _noOverride(functionName): void;
```

### Parameters

#### functionName

`string` = `...`

### Returns

`void`

***

### startHandler()

```ts
protected startHandler(): Promisable<void>;
```

### Returns

`Promisable`\<`void`\>

***

### stopHandler()

```ts
protected stopHandler(): Promisable<void>;
```

### Returns

`Promisable`\<`void`\>

***

### clearListeners()

```ts
clearListeners(eventNames): this;
```

### Parameters

#### eventNames

keyof `TEventData` | keyof `TEventData`[]

### Returns

`this`

### Inherited from

```ts
BaseEmitter.clearListeners
```

***

### emit()

```ts
emit<TEventName, TEventArgs>(eventName, eventArgs): Promise<void>;
```

### Type Parameters

#### TEventName

`TEventName` *extends* `string` \| `number` \| `symbol` = keyof `TEventData`

#### TEventArgs

`TEventArgs` *extends* `EventArgs` = `TEventData`\[`TEventName`\]

### Parameters

#### eventName

`TEventName`

#### eventArgs

`TEventArgs`

### Returns

`Promise`\<`void`\>

### Inherited from

```ts
BaseEmitter.emit
```

***

### emitSerial()

```ts
emitSerial<TEventName, TEventArgs>(eventName, eventArgs): Promise<void>;
```

### Type Parameters

#### TEventName

`TEventName` *extends* `string` \| `number` \| `symbol` = keyof `TEventData`

#### TEventArgs

`TEventArgs` *extends* `EventArgs` = `TEventData`\[`TEventName`\]

### Parameters

#### eventName

`TEventName`

#### eventArgs

`TEventArgs`

### Returns

`Promise`\<`void`\>

### Inherited from

```ts
BaseEmitter.emitSerial
```

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

### Inherited from

```ts
BaseEmitter.listenerCount
```

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

`EventListener`\<`TEventData`\[`TEventName`\]\>

### Returns

`void`

### Inherited from

```ts
BaseEmitter.off
```

***

### offAny()

```ts
offAny(listener): void;
```

### Parameters

#### listener

`EventAnyListener`

### Returns

`void`

### Inherited from

```ts
BaseEmitter.offAny
```

***

### on()

```ts
on<TEventName>(eventNames, listener): () => void;
```

### Type Parameters

#### TEventName

`TEventName` *extends* `string` \| `number` \| `symbol`

### Parameters

#### eventNames

`TEventName` | `TEventName`[]

#### listener

`EventListener`\<`TEventData`\[`TEventName`\]\>

### Returns

```ts
(): void;
```

#### Returns

`void`

### Inherited from

```ts
BaseEmitter.on
```

***

### onAny()

```ts
onAny(listener): () => void;
```

### Parameters

#### listener

`EventAnyListener`

### Returns

```ts
(): void;
```

#### Returns

`void`

### Inherited from

```ts
BaseEmitter.onAny
```

***

### once()

```ts
once<TEventName>(eventName, listener): () => void;
```

### Type Parameters

#### TEventName

`TEventName` *extends* `string` \| `number` \| `symbol`

### Parameters

#### eventName

`TEventName`

#### listener

`EventListener`\<`TEventData`\[`TEventName`\]\>

### Returns

```ts
(): void;
```

#### Returns

`void`

### Inherited from

```ts
BaseEmitter.once
```

  ### <a id="AbstractCreatableWithFactory"></a>AbstractCreatableWithFactory

[**@xylabs/creatable**](#../README)

***

## Extends

- [`AbstractCreatable`](#AbstractCreatable)\<`TParams`, `TEventData`\>

## Type Parameters

### TParams

`TParams` *extends* [`CreatableParams`](#../interfaces/CreatableParams) = [`CreatableParams`](#../interfaces/CreatableParams)

### TEventData

`TEventData` *extends* `EventData` = `EventData`

## Constructors

### Constructor

```ts
new AbstractCreatableWithFactory<TParams, TEventData>(key, params): AbstractCreatableWithFactory<TParams, TEventData>;
```

### Parameters

#### key

`unknown`

#### params

`Partial`\<`TParams`\>

### Returns

`AbstractCreatableWithFactory`\<`TParams`, `TEventData`\>

### Inherited from

[`AbstractCreatable`](#AbstractCreatable).[`constructor`](AbstractCreatable.md#constructor)

## Properties

### defaultLogger?

```ts
static optional defaultLogger: Logger;
```

### Inherited from

[`AbstractCreatable`](#AbstractCreatable).[`defaultLogger`](AbstractCreatable.md#defaultlogger)

***

### globalInstances

```ts
readonly static globalInstances: Record<BaseClassName, WeakRef<Base>[]>;
```

### Inherited from

[`AbstractCreatable`](#AbstractCreatable).[`globalInstances`](AbstractCreatable.md#globalinstances)

***

### globalInstancesCountHistory

```ts
readonly static globalInstancesCountHistory: Record<BaseClassName, number[]>;
```

### Inherited from

[`AbstractCreatable`](#AbstractCreatable).[`globalInstancesCountHistory`](AbstractCreatable.md#globalinstancescounthistory)

***

### uniqueName

```ts
readonly static uniqueName: string;
```

### Inherited from

[`AbstractCreatable`](#AbstractCreatable).[`uniqueName`](AbstractCreatable.md#uniquename)

***

### defaultLogger?

```ts
optional defaultLogger: Logger;
```

### Inherited from

[`AbstractCreatable`](#AbstractCreatable).[`defaultLogger`](AbstractCreatable.md#defaultlogger-1)

***

### eventData

```ts
eventData: TEventData;
```

### Inherited from

[`AbstractCreatable`](#AbstractCreatable).[`eventData`](AbstractCreatable.md#eventdata)

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

[`AbstractCreatable`](#AbstractCreatable).[`historyInterval`](AbstractCreatable.md#historyinterval)

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

[`AbstractCreatable`](#AbstractCreatable).[`historyTime`](AbstractCreatable.md#historytime)

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

[`AbstractCreatable`](#AbstractCreatable).[`maxGcFrequency`](AbstractCreatable.md#maxgcfrequency)

***

### maxHistoryDepth

### Get Signature

```ts
get static maxHistoryDepth(): number;
```

#### Returns

`number`

### Inherited from

[`AbstractCreatable`](#AbstractCreatable).[`maxHistoryDepth`](AbstractCreatable.md#maxhistorydepth)

***

### logger

### Get Signature

```ts
get logger(): undefined | Logger;
```

#### Returns

`undefined` \| `Logger`

### Inherited from

[`AbstractCreatable`](#AbstractCreatable).[`logger`](AbstractCreatable.md#logger)

***

### meter

### Get Signature

```ts
get meter(): undefined | Meter;
```

#### Returns

`undefined` \| `Meter`

### Inherited from

[`AbstractCreatable`](#AbstractCreatable).[`meter`](AbstractCreatable.md#meter)

***

### tracer

### Get Signature

```ts
get tracer(): undefined | Tracer;
```

#### Returns

`undefined` \| `Tracer`

### Inherited from

[`AbstractCreatable`](#AbstractCreatable).[`tracer`](AbstractCreatable.md#tracer)

***

### name

### Get Signature

```ts
get name(): string;
```

#### Returns

`string`

### Inherited from

[`AbstractCreatable`](#AbstractCreatable).[`name`](AbstractCreatable.md#name)

***

### params

### Get Signature

```ts
get params(): TParams;
```

#### Returns

`TParams`

### Inherited from

[`AbstractCreatable`](#AbstractCreatable).[`params`](AbstractCreatable.md#params)

***

### statusReporter

### Get Signature

```ts
get statusReporter(): 
  | undefined
| CreatableStatusReporter<void>;
```

#### Returns

  \| `undefined`
  \| [`CreatableStatusReporter`](#../interfaces/CreatableStatusReporter)\<`void`\>

### Inherited from

[`AbstractCreatable`](#AbstractCreatable).[`statusReporter`](AbstractCreatable.md#statusreporter)

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

[`AbstractCreatable`](#AbstractCreatable).[`gc`](AbstractCreatable.md#gc)

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

[`AbstractCreatable`](#AbstractCreatable).[`gc`](AbstractCreatable.md#gc)

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

[`AbstractCreatable`](#AbstractCreatable).[`instanceCount`](AbstractCreatable.md#instancecount)

***

### instanceCounts()

```ts
static instanceCounts(): Record<BaseClassName, number>;
```

### Returns

`Record`\<`BaseClassName`, `number`\>

### Inherited from

[`AbstractCreatable`](#AbstractCreatable).[`instanceCounts`](AbstractCreatable.md#instancecounts)

***

### startHistory()

```ts
static startHistory(): void;
```

### Returns

`void`

### Inherited from

[`AbstractCreatable`](#AbstractCreatable).[`startHistory`](AbstractCreatable.md#starthistory)

***

### stopHistory()

```ts
static stopHistory(): void;
```

### Returns

`void`

### Inherited from

[`AbstractCreatable`](#AbstractCreatable).[`stopHistory`](AbstractCreatable.md#stophistory)

***

### create()

```ts
static create<T>(this, inParams): Promise<T>;
```

### Type Parameters

#### T

`T` *extends* [`CreatableInstance`](#../interfaces/CreatableInstance)\<[`CreatableParams`](#../interfaces/CreatableParams), `EventData`\>

### Parameters

#### this

[`Creatable`](#../interfaces/Creatable)\<`T`\>

#### inParams

`Partial`\<`T`\[`"params"`\]\> = `{}`

### Returns

`Promise`\<`T`\>

### Inherited from

[`AbstractCreatable`](#AbstractCreatable).[`create`](AbstractCreatable.md#create)

***

### createHandler()

```ts
static createHandler<T>(this, instance): Promisable<T>;
```

### Type Parameters

#### T

`T` *extends* [`CreatableInstance`](#../interfaces/CreatableInstance)\<[`CreatableParams`](#../interfaces/CreatableParams), `EventData`\>

### Parameters

#### this

[`Creatable`](#../interfaces/Creatable)\<`T`\>

#### instance

`T`

### Returns

`Promisable`\<`T`\>

### Inherited from

[`AbstractCreatable`](#AbstractCreatable).[`createHandler`](AbstractCreatable.md#createhandler)

***

### paramsHandler()

```ts
static paramsHandler<T>(this, params): Promisable<T["params"]>;
```

### Type Parameters

#### T

`T` *extends* [`CreatableInstance`](#../interfaces/CreatableInstance)\<[`CreatableParams`](#../interfaces/CreatableParams), `EventData`\>

### Parameters

#### this

[`Creatable`](#../interfaces/Creatable)\<`T`\>

#### params

`Partial`\<`T`\[`"params"`\]\> = `{}`

### Returns

`Promisable`\<`T`\[`"params"`\]\>

### Inherited from

[`AbstractCreatable`](#AbstractCreatable).[`paramsHandler`](AbstractCreatable.md#paramshandler)

***

### createHandler()

```ts
createHandler(): Promisable<void>;
```

### Returns

`Promisable`\<`void`\>

### Inherited from

[`AbstractCreatable`](#AbstractCreatable).[`createHandler`](AbstractCreatable.md#createhandler-2)

***

### paramsValidator()

```ts
paramsValidator(params): TParams;
```

### Parameters

#### params

`Partial`\<`TParams`\>

### Returns

`TParams`

### Inherited from

[`AbstractCreatable`](#AbstractCreatable).[`paramsValidator`](AbstractCreatable.md#paramsvalidator)

***

### start()

```ts
start(): Promise<boolean>;
```

### Returns

`Promise`\<`boolean`\>

### Inherited from

[`AbstractCreatable`](#AbstractCreatable).[`start`](AbstractCreatable.md#start)

***

### stop()

```ts
stop(): Promise<boolean>;
```

### Returns

`Promise`\<`boolean`\>

### Inherited from

[`AbstractCreatable`](#AbstractCreatable).[`stop`](AbstractCreatable.md#stop)

***

### \_noOverride()

```ts
protected _noOverride(functionName): void;
```

### Parameters

#### functionName

`string` = `...`

### Returns

`void`

### Inherited from

[`AbstractCreatable`](#AbstractCreatable).[`_noOverride`](AbstractCreatable.md#_nooverride)

***

### startHandler()

```ts
protected startHandler(): Promisable<void>;
```

### Returns

`Promisable`\<`void`\>

### Inherited from

[`AbstractCreatable`](#AbstractCreatable).[`startHandler`](AbstractCreatable.md#starthandler)

***

### stopHandler()

```ts
protected stopHandler(): Promisable<void>;
```

### Returns

`Promisable`\<`void`\>

### Inherited from

[`AbstractCreatable`](#AbstractCreatable).[`stopHandler`](AbstractCreatable.md#stophandler)

***

### factory()

```ts
static factory<T>(
   this, 
   params?, 
labels?): CreatableFactory<T>;
```

### Type Parameters

#### T

`T` *extends* [`CreatableInstance`](#../interfaces/CreatableInstance)\<[`CreatableParams`](#../interfaces/CreatableParams), `EventData`\>

### Parameters

#### this

[`Creatable`](#../interfaces/Creatable)\<`T`\>

#### params?

`Partial`\<`T`\[`"params"`\]\>

#### labels?

[`Labels`](#../interfaces/Labels)

### Returns

[`CreatableFactory`](#../interfaces/CreatableFactory)\<`T`\>

***

### clearListeners()

```ts
clearListeners(eventNames): this;
```

### Parameters

#### eventNames

keyof `TEventData` | keyof `TEventData`[]

### Returns

`this`

### Inherited from

[`AbstractCreatable`](#AbstractCreatable).[`clearListeners`](AbstractCreatable.md#clearlisteners)

***

### emit()

```ts
emit<TEventName, TEventArgs>(eventName, eventArgs): Promise<void>;
```

### Type Parameters

#### TEventName

`TEventName` *extends* `string` \| `number` \| `symbol` = keyof `TEventData`

#### TEventArgs

`TEventArgs` *extends* `EventArgs` = `TEventData`\[`TEventName`\]

### Parameters

#### eventName

`TEventName`

#### eventArgs

`TEventArgs`

### Returns

`Promise`\<`void`\>

### Inherited from

[`AbstractCreatable`](#AbstractCreatable).[`emit`](AbstractCreatable.md#emit)

***

### emitSerial()

```ts
emitSerial<TEventName, TEventArgs>(eventName, eventArgs): Promise<void>;
```

### Type Parameters

#### TEventName

`TEventName` *extends* `string` \| `number` \| `symbol` = keyof `TEventData`

#### TEventArgs

`TEventArgs` *extends* `EventArgs` = `TEventData`\[`TEventName`\]

### Parameters

#### eventName

`TEventName`

#### eventArgs

`TEventArgs`

### Returns

`Promise`\<`void`\>

### Inherited from

[`AbstractCreatable`](#AbstractCreatable).[`emitSerial`](AbstractCreatable.md#emitserial)

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

### Inherited from

[`AbstractCreatable`](#AbstractCreatable).[`listenerCount`](AbstractCreatable.md#listenercount)

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

`EventListener`\<`TEventData`\[`TEventName`\]\>

### Returns

`void`

### Inherited from

[`AbstractCreatable`](#AbstractCreatable).[`off`](AbstractCreatable.md#off)

***

### offAny()

```ts
offAny(listener): void;
```

### Parameters

#### listener

`EventAnyListener`

### Returns

`void`

### Inherited from

[`AbstractCreatable`](#AbstractCreatable).[`offAny`](AbstractCreatable.md#offany)

***

### on()

```ts
on<TEventName>(eventNames, listener): () => void;
```

### Type Parameters

#### TEventName

`TEventName` *extends* `string` \| `number` \| `symbol`

### Parameters

#### eventNames

`TEventName` | `TEventName`[]

#### listener

`EventListener`\<`TEventData`\[`TEventName`\]\>

### Returns

```ts
(): void;
```

#### Returns

`void`

### Inherited from

[`AbstractCreatable`](#AbstractCreatable).[`on`](AbstractCreatable.md#on)

***

### onAny()

```ts
onAny(listener): () => void;
```

### Parameters

#### listener

`EventAnyListener`

### Returns

```ts
(): void;
```

#### Returns

`void`

### Inherited from

[`AbstractCreatable`](#AbstractCreatable).[`onAny`](AbstractCreatable.md#onany)

***

### once()

```ts
once<TEventName>(eventName, listener): () => void;
```

### Type Parameters

#### TEventName

`TEventName` *extends* `string` \| `number` \| `symbol`

### Parameters

#### eventName

`TEventName`

#### listener

`EventListener`\<`TEventData`\[`TEventName`\]\>

### Returns

```ts
(): void;
```

#### Returns

`void`

### Inherited from

[`AbstractCreatable`](#AbstractCreatable).[`once`](AbstractCreatable.md#once)

  ### <a id="Factory"></a>Factory

[**@xylabs/creatable**](#../README)

***

## Type Parameters

### T

`T` *extends* [`CreatableInstance`](#../interfaces/CreatableInstance) = [`CreatableInstance`](#../interfaces/CreatableInstance)

## Implements

- [`CreatableFactory`](#../interfaces/CreatableFactory)\<`T`\>

## Constructors

### Constructor

```ts
new Factory<T>(
   creatable, 
   params?, 
labels?): Factory<T>;
```

### Parameters

#### creatable

[`Creatable`](#../interfaces/Creatable)\<`T`\>

#### params?

`Partial`\<`T`\[`"params"`\]\>

#### labels?

[`Labels`](#../interfaces/Labels) = `{}`

### Returns

`Factory`\<`T`\>

## Properties

### creatable

```ts
creatable: Creatable<T>;
```

***

### defaultParams?

```ts
optional defaultParams: Partial<T["params"]>;
```

***

### labels?

```ts
optional labels: Labels;
```

## Methods

### withParams()

```ts
static withParams<T>(
   creatableModule, 
   params?, 
labels?): Factory<T>;
```

### Type Parameters

#### T

`T` *extends* [`CreatableInstance`](#../interfaces/CreatableInstance)\<[`CreatableParams`](#../interfaces/CreatableParams), `EventData`\>

### Parameters

#### creatableModule

[`Creatable`](#../interfaces/Creatable)\<`T`\>

#### params?

`Partial`\<`T`\[`"params"`\]\>

#### labels?

[`Labels`](#../interfaces/Labels) = `{}`

### Returns

`Factory`\<`T`\>

***

### create()

```ts
create(params?): Promise<T>;
```

### Parameters

#### params?

`Partial`\<`T`\[`"params"`\]\>

### Returns

`Promise`\<`T`\>

### Implementation of

[`CreatableFactory`](#../interfaces/CreatableFactory).[`create`](../interfaces/CreatableFactory.md#create)

### functions

  ### <a id="creatable"></a>creatable

[**@xylabs/creatable**](#../README)

***

```ts
function creatable<T>(): <U>(constructor) => void;
```

Class annotation to be used to decorate Modules which support
an asynchronous creation pattern

## Type Parameters

### T

`T` *extends* [`CreatableInstance`](#../interfaces/CreatableInstance)\<[`CreatableParams`](#../interfaces/CreatableParams), `EventData`\>

## Returns

The decorated Module requiring it implement the members
of the CreatableModule as statics properties/methods

```ts
<U>(constructor): void;
```

### Type Parameters

### U

`U` *extends* [`Creatable`](#../interfaces/Creatable)\<`T`\>

### Parameters

### constructor

`U`

### Returns

`void`

  ### <a id="creatableFactory"></a>creatableFactory

[**@xylabs/creatable**](#../README)

***

```ts
function creatableFactory(): <U>(constructor) => void;
```

Class annotation to be used to decorate Modules which support
an asynchronous creation factory pattern

## Returns

The decorated Module requiring it implement the members
of the CreatableModule as statics properties/methods

```ts
<U>(constructor): void;
```

### Type Parameters

### U

`U` *extends* [`CreatableFactory`](#../interfaces/CreatableFactory)\<[`CreatableInstance`](#../interfaces/CreatableInstance)\<[`CreatableParams`](#../interfaces/CreatableParams), `EventData`\>\>

### Parameters

### constructor

`U`

### Returns

`void`

  ### <a id="hasAllLabels"></a>hasAllLabels

[**@xylabs/creatable**](#../README)

***

```ts
function hasAllLabels(source?, required?): boolean;
```

Returns true if the source object has all the labels from the required set

## Parameters

### source?

[`Labels`](#../interfaces/Labels)

Source object to check against

### required?

[`Labels`](#../interfaces/Labels)

Set of labels to check for in source

## Returns

`boolean`

True of the source object has all the labels from the required set

### interfaces

  ### <a id="Creatable"></a>Creatable

[**@xylabs/creatable**](#../README)

***

## Extended by

- [`CreatableWithFactory`](#CreatableWithFactory)

## Type Parameters

### T

`T` *extends* [`CreatableInstance`](#CreatableInstance) = [`CreatableInstance`](#CreatableInstance)

## Constructors

### Constructor

```ts
new Creatable(key, params): T & AbstractCreatable<T["params"], EventData>;
```

### Parameters

#### key

`unknown`

#### params

`Partial`\<[`CreatableParams`](#CreatableParams)\>

### Returns

`T` & [`AbstractCreatable`](#../classes/AbstractCreatable)\<`T`\[`"params"`\], `EventData`\>

## Properties

### defaultLogger?

```ts
optional defaultLogger: Logger;
```

## Methods

### create()

```ts
create<T>(this, params?): Promise<T>;
```

### Type Parameters

#### T

`T` *extends* [`CreatableInstance`](#CreatableInstance)\<[`CreatableParams`](#CreatableParams), `EventData`\>

### Parameters

#### this

`Creatable`\<`T`\>

#### params?

`Partial`\<`T`\[`"params"`\]\>

### Returns

`Promise`\<`T`\>

***

### createHandler()

```ts
createHandler<T>(this, instance): Promisable<T>;
```

### Type Parameters

#### T

`T` *extends* [`CreatableInstance`](#CreatableInstance)\<[`CreatableParams`](#CreatableParams), `EventData`\>

### Parameters

#### this

`Creatable`\<`T`\>

#### instance

`T`

### Returns

`Promisable`\<`T`\>

***

### paramsHandler()

```ts
paramsHandler<T>(this, params?): Promisable<T["params"]>;
```

### Type Parameters

#### T

`T` *extends* [`CreatableInstance`](#CreatableInstance)\<[`CreatableParams`](#CreatableParams), `EventData`\>

### Parameters

#### this

`Creatable`\<`T`\>

#### params?

`Partial`\<`T`\[`"params"`\]\>

### Returns

`Promisable`\<`T`\[`"params"`\]\>

  ### <a id="CreatableFactory"></a>CreatableFactory

[**@xylabs/creatable**](#../README)

***

## Extends

- `Omit`\<[`Creatable`](#Creatable)\<`T`\>, 
  \| `"create"`
  \| `"createHandler"`
  \| `"paramsHandler"`
  \| `"defaultLogger"`
  \| `"factory"`\>

## Type Parameters

### T

`T` *extends* [`CreatableInstance`](#CreatableInstance) = [`CreatableInstance`](#CreatableInstance)

## Methods

### create()

```ts
create(this, params?): Promise<T>;
```

### Parameters

#### this

`CreatableFactory`\<`T`\>

#### params?

`Partial`\<`T`\[`"params"`\]\>

### Returns

`Promise`\<`T`\>

  ### <a id="CreatableInstance"></a>CreatableInstance

[**@xylabs/creatable**](#../README)

***

## Extends

- `EventEmitter`\<`TEventData`\>

## Type Parameters

### TParams

`TParams` *extends* [`CreatableParams`](#CreatableParams) = [`CreatableParams`](#CreatableParams)

### TEventData

`TEventData` *extends* `EventData` = `EventData`

## Properties

### eventData

```ts
eventData: TEventData;
```

### Overrides

```ts
EventEmitter.eventData
```

***

### name

```ts
name: string;
```

***

### params

```ts
params: TParams;
```

## Methods

### clearListeners()

```ts
clearListeners(eventNames): void;
```

### Parameters

#### eventNames

keyof `TEventData` | keyof `TEventData`[]

### Returns

`void`

### Inherited from

```ts
EventEmitter.clearListeners
```

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

### Inherited from

```ts
EventEmitter.emit
```

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

### Inherited from

```ts
EventEmitter.emitSerial
```

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

### Inherited from

```ts
EventEmitter.listenerCount
```

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

`EventListener`\<`TEventData`\[`TEventName`\]\>

### Returns

`void`

### Inherited from

```ts
EventEmitter.off
```

***

### offAny()

```ts
offAny(listener): void;
```

### Parameters

#### listener

`Promise`\<`void`\> | `EventAnyListener`

### Returns

`void`

### Inherited from

```ts
EventEmitter.offAny
```

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

`EventListener`\<`TEventData`\[`TEventName`\]\>

### Returns

`EventUnsubscribeFunction`

### Inherited from

```ts
EventEmitter.on
```

***

### onAny()

```ts
onAny(listener): EventUnsubscribeFunction;
```

### Parameters

#### listener

`EventAnyListener`

### Returns

`EventUnsubscribeFunction`

### Inherited from

```ts
EventEmitter.onAny
```

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

`EventListener`\<`TEventData`\[`TEventName`\]\>

### Returns

`EventUnsubscribeFunction`

### Inherited from

```ts
EventEmitter.once
```

  ### <a id="CreatableParams"></a>CreatableParams

[**@xylabs/creatable**](#../README)

***

## Extends

- `BaseEmitterParams`

## Properties

### logger?

```ts
optional logger: Logger;
```

### Inherited from

```ts
BaseEmitterParams.logger
```

***

### meterProvider?

```ts
optional meterProvider: MeterProvider;
```

### Inherited from

```ts
BaseEmitterParams.meterProvider
```

***

### traceProvider?

```ts
optional traceProvider: TracerProvider;
```

### Inherited from

```ts
BaseEmitterParams.traceProvider
```

***

### name?

```ts
optional name: string;
```

***

### statusReporter?

```ts
optional statusReporter: CreatableStatusReporter<void>;
```

  ### <a id="CreatableStatusReporter"></a>CreatableStatusReporter

[**@xylabs/creatable**](#../README)

***

## Type Parameters

### T

`T` *extends* `void` \| `string` = `void`

## Methods

### report()

### Call Signature

```ts
report(
   name, 
   status, 
   progress?): void;
```

#### Parameters

##### name

`string`

##### status

`Exclude`\<`T` *extends* `void` ? [`CreatableStatus`](#../type-aliases/CreatableStatus) : `T` \| [`CreatableStatus`](#../type-aliases/CreatableStatus), `"error"`\>

##### progress?

`number`

#### Returns

`void`

### Call Signature

```ts
report(
   name, 
   status, 
   error?): void;
```

#### Parameters

##### name

`string`

##### status

`Extract`\<`T` *extends* `void` ? [`CreatableStatus`](#../type-aliases/CreatableStatus) : `T` \| [`CreatableStatus`](#../type-aliases/CreatableStatus), `"error"`\>

##### error?

`Error`

#### Returns

`void`

  ### <a id="CreatableWithFactory"></a>CreatableWithFactory

[**@xylabs/creatable**](#../README)

***

## Extends

- [`Creatable`](#Creatable)\<`T`\>

## Type Parameters

### T

`T` *extends* [`CreatableInstance`](#CreatableInstance) = [`CreatableInstance`](#CreatableInstance)

## Constructors

### Constructor

```ts
new CreatableWithFactory(key, params): T & AbstractCreatable<T["params"], EventData>;
```

### Parameters

#### key

`unknown`

#### params

`Partial`\<[`CreatableParams`](#CreatableParams)\>

### Returns

`T` & [`AbstractCreatable`](#../classes/AbstractCreatable)\<`T`\[`"params"`\], `EventData`\>

### Inherited from

[`Creatable`](#Creatable).[`constructor`](Creatable.md#constructor)

## Properties

### defaultLogger?

```ts
optional defaultLogger: Logger;
```

### Inherited from

[`Creatable`](#Creatable).[`defaultLogger`](Creatable.md#defaultlogger)

## Methods

### create()

```ts
create<T>(this, params?): Promise<T>;
```

### Type Parameters

#### T

`T` *extends* [`CreatableInstance`](#CreatableInstance)\<[`CreatableParams`](#CreatableParams), `EventData`\>

### Parameters

#### this

[`Creatable`](#Creatable)\<`T`\>

#### params?

`Partial`\<`T`\[`"params"`\]\>

### Returns

`Promise`\<`T`\>

### Inherited from

[`Creatable`](#Creatable).[`create`](Creatable.md#create)

***

### createHandler()

```ts
createHandler<T>(this, instance): Promisable<T>;
```

### Type Parameters

#### T

`T` *extends* [`CreatableInstance`](#CreatableInstance)\<[`CreatableParams`](#CreatableParams), `EventData`\>

### Parameters

#### this

[`Creatable`](#Creatable)\<`T`\>

#### instance

`T`

### Returns

`Promisable`\<`T`\>

### Inherited from

[`Creatable`](#Creatable).[`createHandler`](Creatable.md#createhandler)

***

### paramsHandler()

```ts
paramsHandler<T>(this, params?): Promisable<T["params"]>;
```

### Type Parameters

#### T

`T` *extends* [`CreatableInstance`](#CreatableInstance)\<[`CreatableParams`](#CreatableParams), `EventData`\>

### Parameters

#### this

[`Creatable`](#Creatable)\<`T`\>

#### params?

`Partial`\<`T`\[`"params"`\]\>

### Returns

`Promisable`\<`T`\[`"params"`\]\>

### Inherited from

[`Creatable`](#Creatable).[`paramsHandler`](Creatable.md#paramshandler)

***

### factory()

```ts
factory<T>(
   this, 
   params?, 
labels?): CreatableFactory<T>;
```

### Type Parameters

#### T

`T` *extends* [`CreatableInstance`](#CreatableInstance)\<[`CreatableParams`](#CreatableParams), `EventData`\>

### Parameters

#### this

[`Creatable`](#Creatable)\<`T`\>

#### params?

`Partial`\<`T`\[`"params"`\]\>

#### labels?

[`Labels`](#Labels)

### Returns

[`CreatableFactory`](#CreatableFactory)\<`T`\>

  ### <a id="Labels"></a>Labels

[**@xylabs/creatable**](#../README)

***

Object used to represent labels identifying a resource.

## Indexable

```ts
[key: string]: undefined | string
```

  ### <a id="WithLabels"></a>WithLabels

[**@xylabs/creatable**](#../README)

***

Interface for objects that have labels.

## Type Parameters

### T

`T` *extends* [`Labels`](#Labels) = [`Labels`](#Labels)

## Properties

### labels

```ts
labels: T;
```

  ### <a id="WithOptionalLabels"></a>WithOptionalLabels

[**@xylabs/creatable**](#../README)

***

Interface for objects that have labels.

## Type Parameters

### T

`T` *extends* [`Labels`](#Labels) = [`Labels`](#Labels)

## Properties

### labels?

```ts
optional labels: T;
```

### type-aliases

  ### <a id="CreatableName"></a>CreatableName

[**@xylabs/creatable**](#../README)

***

```ts
type CreatableName = Exclude<string, "creatable-name-reserved-32546239486"> & BaseClassName;
```

  ### <a id="CreatableStatus"></a>CreatableStatus

[**@xylabs/creatable**](#../README)

***

```ts
type CreatableStatus = 
  | "creating"
  | "created"
  | "starting"
  | "started"
  | "stopping"
  | "stopped"
  | "error";
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
[npm-badge]: https://img.shields.io/npm/v/@xylabs/creatable.svg
[npm-link]: https://www.npmjs.com/package/@xylabs/creatable
[codacy-badge]: https://app.codacy.com/project/badge/Grade/c8e15e14f37741c18cfb47ac7245c698
[codacy-link]: https://www.codacy.com/gh/xylabs/sdk-js/dashboard?utm_source=github.com&utm_medium=referral&utm_content=xylabs/sdk-js&utm_campaign=Badge_Grade
[codeclimate-badge]: https://api.codeclimate.com/v1/badges/c5eb068f806f0b047ea7/maintainability
[codeclimate-link]: https://codeclimate.com/github/xylabs/sdk-js/maintainability
[snyk-badge]: https://snyk.io/test/github/xylabs/sdk-js/badge.svg?targetFile=package.json
[snyk-link]: https://snyk.io/test/github/xylabs/sdk-js?targetFile=package.json

[npm-downloads-badge]: https://img.shields.io/npm/dw/@xylabs/creatable
[npm-license-badge]: https://img.shields.io/npm/l/@xylabs/creatable

[jsdelivr-badge]: https://data.jsdelivr.com/v1/package/npm/@xylabs/creatable/badge
[jsdelivr-link]: https://www.jsdelivr.com/package/npm/@xylabs/creatable

[socket-badge]: https://socket.dev/api/badge/npm/package/@xylabs/creatable
[socket-link]: https://socket.dev/npm/package/@xylabs/creatable