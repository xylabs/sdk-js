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

## Reference

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
- [RequiredCreatableParams](#interfaces/RequiredCreatableParams)
- [CreatableParams](#interfaces/CreatableParams)
- [CreatableStatusReporter](#interfaces/CreatableStatusReporter)
- [Labels](#interfaces/Labels)
- [WithLabels](#interfaces/WithLabels)
- [WithOptionalLabels](#interfaces/WithOptionalLabels)

## Type Aliases

- [CreatableName](#type-aliases/CreatableName)
- [StandardCreatableStatus](#type-aliases/StandardCreatableStatus)
- [CreatableStatus](#type-aliases/CreatableStatus)

## Functions

- [creatable](#functions/creatable)
- [creatableFactory](#functions/creatableFactory)
- [hasAllLabels](#functions/hasAllLabels)

### classes

  ### <a id="AbstractCreatable"></a>AbstractCreatable

[**@xylabs/creatable**](#../README)

***

Base class for objects that follow an asynchronous creation and lifecycle pattern.
Instances must be created via the static `create` method rather than direct construction.
Provides start/stop lifecycle management with status tracking and telemetry support.

## Extends

- `BaseEmitter`\<`Partial`\<`TParams` & [`RequiredCreatableParams`](#../interfaces/RequiredCreatableParams)\>, `TEventData`\>

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

`Partial`\<`TParams` & [`RequiredCreatableParams`](#../interfaces/RequiredCreatableParams)\>

### Returns

`AbstractCreatable`\<`TParams`, `TEventData`\>

### Overrides

```ts
BaseEmitter<Partial<TParams & RequiredCreatableParams>, TEventData>.constructor
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

### defaultLogger?

```ts
optional defaultLogger: Logger;
```

Optional default logger for this instance.

***

### \_startPromise

```ts
protected _startPromise: Promisable<boolean> | undefined;
```

***

### eventData

```ts
eventData: TEventData;
```

Type-level reference to the event data shape for external type queries.

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
get logger(): Logger | undefined;
```

#### Returns

`Logger` \| `undefined`

### Inherited from

```ts
BaseEmitter.logger
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
BaseEmitter.meter
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
BaseEmitter.tracer
```

***

### name

### Get Signature

```ts
get name(): CreatableName;
```

The name identifier for this creatable instance.

#### Returns

[`CreatableName`](#../type-aliases/CreatableName)

***

### params

### Get Signature

```ts
get params(): TParams & RequiredCreatableParams<void>;
```

The validated and merged parameters for this instance.

#### Returns

`TParams` & [`RequiredCreatableParams`](#../interfaces/RequiredCreatableParams)\<`void`\>

### Overrides

```ts
BaseEmitter.params
```

***

### startable

### Get Signature

```ts
get startable(): boolean;
```

Whether this instance can be started (must be in 'created' or 'stopped' status).

#### Returns

`boolean`

***

### status

### Get Signature

```ts
get status(): CreatableStatus | null;
```

The current lifecycle status of this instance, or null if not yet initialized.

#### Returns

[`CreatableStatus`](#../type-aliases/CreatableStatus) \| `null`

***

### statusReporter

### Get Signature

```ts
get statusReporter(): 
  | CreatableStatusReporter<void>
  | undefined;
```

The status reporter used to broadcast lifecycle changes.

#### Returns

  \| [`CreatableStatusReporter`](#../interfaces/CreatableStatusReporter)\<`void`\>
  \| `undefined`

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

`BaseClassName`

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

`BaseClassName`

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
static create<T>(this, inParams?): Promise<T>;
```

Asynchronously creates a new instance by processing params, constructing,
and running both static and instance createHandlers.

### Type Parameters

#### T

`T` *extends* [`CreatableInstance`](#../interfaces/CreatableInstance)\<[`CreatableParams`](#../interfaces/CreatableParams), `EventData`\>

### Parameters

#### this

[`Creatable`](#../interfaces/Creatable)\<`T`\>

#### inParams?

`Partial`\<`T`\[`"params"`\]\> = `{}`

Optional partial parameters to configure the instance

### Returns

`Promise`\<`T`\>

The fully initialized instance

***

### createHandler()

```ts
static createHandler<T>(this, instance): Promisable<T>;
```

Static hook called during creation to perform additional initialization.
Override in subclasses to customize post-construction setup.

### Type Parameters

#### T

`T` *extends* [`CreatableInstance`](#../interfaces/CreatableInstance)\<[`CreatableParams`](#../interfaces/CreatableParams), `EventData`\>

### Parameters

#### this

[`Creatable`](#../interfaces/Creatable)\<`T`\>

#### instance

`T`

The newly constructed instance

### Returns

`Promisable`\<`T`\>

The instance, potentially modified

***

### paramsHandler()

```ts
static paramsHandler<T>(this, params?): Promisable<T["params"]>;
```

Static hook called during creation to validate and transform params.
Override in subclasses to add default values or validation.

### Type Parameters

#### T

`T` *extends* [`CreatableInstance`](#../interfaces/CreatableInstance)\<[`CreatableParams`](#../interfaces/CreatableParams), `EventData`\>

### Parameters

#### this

[`Creatable`](#../interfaces/Creatable)\<`T`\>

#### params?

`Partial`\<`T`\[`"params"`\]\> = `{}`

The raw partial params provided to `create`

### Returns

`Promisable`\<`T`\[`"params"`\]\>

The processed params ready for construction

***

### createHandler()

```ts
createHandler(): Promisable<void>;
```

Instance-level creation hook. Override in subclasses to perform setup after construction.

### Returns

`Promisable`\<`void`\>

***

### paramsValidator()

```ts
paramsValidator(params): TParams & RequiredCreatableParams<void>;
```

Validates and returns the merged params, ensuring required fields are present.
Override in subclasses to add custom validation logic.

### Parameters

#### params

`Partial`\<`TParams` & [`RequiredCreatableParams`](#../interfaces/RequiredCreatableParams)\>

The raw partial params to validate

### Returns

`TParams` & [`RequiredCreatableParams`](#../interfaces/RequiredCreatableParams)\<`void`\>

The validated params

***

### span()

```ts
span<T>(name, fn): T;
```

Executes a function within a telemetry span.

### Type Parameters

#### T

`T`

### Parameters

#### name

`string`

The span name

#### fn

() => `T`

The function to execute within the span

### Returns

`T`

***

### spanAsync()

```ts
spanAsync<T>(
   name, 
   fn, 
config?): Promise<T>;
```

Executes an async function within a telemetry span.

### Type Parameters

#### T

`T`

### Parameters

#### name

`string`

The span name

#### fn

() => `Promise`\<`T`\>

The async function to execute within the span

#### config?

`SpanConfig` = `{}`

Optional span configuration

### Returns

`Promise`\<`T`\>

***

### start()

```ts
start(): Promise<boolean>;
```

Starts the instance, transitioning through 'starting' to 'started' status.
Thread-safe via mutex. Returns true if already started or started successfully.

### Returns

`Promise`\<`boolean`\>

***

### started()

```ts
started(notStartedAction?): boolean;
```

Checks whether this instance is currently started.
Takes an action if not started, based on the notStartedAction parameter.

### Parameters

#### notStartedAction?

What to do if not started: 'error'/'throw' throws, 'warn'/'log' logs, 'none' is silent

`"error"` | `"throw"` | `"warn"` | `"log"` | `"none"`

### Returns

`boolean`

True if started, false otherwise

***

### startedAsync()

```ts
startedAsync(notStartedAction?, tryStart?): Promise<boolean>;
```

Async version of `started` that can optionally auto-start the instance.

### Parameters

#### notStartedAction?

What to do if not started and auto-start is disabled

`"error"` | `"throw"` | `"warn"` | `"log"` | `"none"`

#### tryStart?

`boolean` = `true`

If true, attempts to start the instance automatically

### Returns

`Promise`\<`boolean`\>

True if the instance is or becomes started

***

### stop()

```ts
stop(): Promise<boolean>;
```

Stops the instance, transitioning through 'stopping' to 'stopped' status.
Thread-safe via mutex. Returns true if already stopped or stopped successfully.

### Returns

`Promise`\<`boolean`\>

***

### \_noOverride()

```ts
protected _noOverride(functionName?): void;
```

Asserts that the given function has not been overridden in a subclass.
Used to enforce the handler pattern (override `startHandler` not `start`).

### Parameters

#### functionName?

`string` = `...`

### Returns

`void`

***

### setStatus()

### Call Signature

```ts
protected setStatus(value, progress?): void;
```

Sets the lifecycle status and reports it via the status reporter.

#### Parameters

##### value

`"creating"` | `"created"` | `"starting"` | `"started"` | `"stopping"` | `"stopped"`

##### progress?

`number`

#### Returns

`void`

### Call Signature

```ts
protected setStatus(value, error?): void;
```

Sets the lifecycle status and reports it via the status reporter.

#### Parameters

##### value

`"error"`

##### error?

`Error`

#### Returns

`void`

***

### startHandler()

```ts
protected startHandler(): Promisable<void>;
```

Override in subclasses to define start behavior. Throw an error on failure.

### Returns

`Promisable`\<`void`\>

***

### stopHandler()

```ts
protected stopHandler(): Promisable<void>;
```

Override in subclasses to define stop behavior. Throw an error on failure.

### Returns

`Promisable`\<`void`\>

***

### clearListeners()

```ts
clearListeners(eventNames): this;
```

Removes all listeners for the specified event name(s).

### Parameters

#### eventNames

One or more event names to clear listeners for.

keyof `TEventData` | keyof `TEventData`[]

### Returns

`this`

This instance for chaining.

### Inherited from

```ts
BaseEmitter.clearListeners
```

***

### emit()

```ts
emit<TEventName, TEventArgs>(eventName, eventArgs): Promise<void>;
```

Emits an event, invoking all registered listeners concurrently.

### Type Parameters

#### TEventName

`TEventName` *extends* `string` \| `number` \| `symbol` = keyof `TEventData`

#### TEventArgs

`TEventArgs` *extends* `EventArgs` = `TEventData`\[`TEventName`\]

### Parameters

#### eventName

`TEventName`

The event to emit.

#### eventArgs

`TEventArgs`

The data to pass to listeners.

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

Emits an event, invoking all registered listeners sequentially in order.

### Type Parameters

#### TEventName

`TEventName` *extends* `string` \| `number` \| `symbol` = keyof `TEventData`

#### TEventArgs

`TEventArgs` *extends* `EventArgs` = `TEventData`\[`TEventName`\]

### Parameters

#### eventName

`TEventName`

The event to emit.

#### eventArgs

`TEventArgs`

The data to pass to listeners.

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

Returns the total number of listeners registered for the specified event name(s).

### Parameters

#### eventNames

One or more event names to count listeners for.

keyof `TEventData` | keyof `TEventData`[]

### Returns

`number`

The total listener count.

### Inherited from

```ts
BaseEmitter.listenerCount
```

***

### off()

```ts
off<TEventName>(eventNames, listener): void;
```

Removes a specific listener from the specified event name(s).

### Type Parameters

#### TEventName

`TEventName` *extends* `string` \| `number` \| `symbol`

### Parameters

#### eventNames

One or more event names to unsubscribe from.

`TEventName` | `TEventName`[]

#### listener

`EventListener`\<`TEventData`\[`TEventName`\]\>

The listener to remove.

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

Removes a wildcard listener that was receiving all events.

### Parameters

#### listener

`EventAnyListener`

The wildcard listener to remove.

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

Subscribes a listener to the specified event name(s).

### Type Parameters

#### TEventName

`TEventName` *extends* `string` \| `number` \| `symbol`

### Parameters

#### eventNames

One or more event names to listen for.

`TEventName` | `TEventName`[]

#### listener

`EventListener`\<`TEventData`\[`TEventName`\]\>

The callback to invoke when the event fires.

### Returns

An unsubscribe function.

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

Subscribes a wildcard listener that receives all events.

### Parameters

#### listener

`EventAnyListener`

The callback to invoke for any event.

### Returns

An unsubscribe function.

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

Subscribes a listener that will be invoked only once for the specified event, then automatically removed.

### Type Parameters

#### TEventName

`TEventName` *extends* `string` \| `number` \| `symbol`

### Parameters

#### eventName

`TEventName`

The event to listen for.

#### listener

`EventListener`\<`TEventData`\[`TEventName`\]\>

The callback to invoke once.

### Returns

An unsubscribe function.

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

Extends AbstractCreatable with a static `factory` method for creating
pre-configured CreatableFactory instances.

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

`Partial`\<`TParams` & [`RequiredCreatableParams`](#../interfaces/RequiredCreatableParams)\>

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

### defaultLogger?

```ts
optional defaultLogger: Logger;
```

Optional default logger for this instance.

### Inherited from

[`AbstractCreatable`](#AbstractCreatable).[`defaultLogger`](AbstractCreatable.md#defaultlogger-1)

***

### \_startPromise

```ts
protected _startPromise: Promisable<boolean> | undefined;
```

### Inherited from

[`AbstractCreatable`](#AbstractCreatable).[`_startPromise`](AbstractCreatable.md#_startpromise)

***

### eventData

```ts
eventData: TEventData;
```

Type-level reference to the event data shape for external type queries.

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
get logger(): Logger | undefined;
```

#### Returns

`Logger` \| `undefined`

### Inherited from

[`AbstractCreatable`](#AbstractCreatable).[`logger`](AbstractCreatable.md#logger)

***

### meter

### Get Signature

```ts
get meter(): Meter | undefined;
```

#### Returns

`Meter` \| `undefined`

### Inherited from

[`AbstractCreatable`](#AbstractCreatable).[`meter`](AbstractCreatable.md#meter)

***

### tracer

### Get Signature

```ts
get tracer(): Tracer | undefined;
```

#### Returns

`Tracer` \| `undefined`

### Inherited from

[`AbstractCreatable`](#AbstractCreatable).[`tracer`](AbstractCreatable.md#tracer)

***

### name

### Get Signature

```ts
get name(): CreatableName;
```

The name identifier for this creatable instance.

#### Returns

[`CreatableName`](#../type-aliases/CreatableName)

### Inherited from

[`AbstractCreatable`](#AbstractCreatable).[`name`](AbstractCreatable.md#name)

***

### params

### Get Signature

```ts
get params(): TParams & RequiredCreatableParams<void>;
```

The validated and merged parameters for this instance.

#### Returns

`TParams` & [`RequiredCreatableParams`](#../interfaces/RequiredCreatableParams)\<`void`\>

### Inherited from

[`AbstractCreatable`](#AbstractCreatable).[`params`](AbstractCreatable.md#params)

***

### startable

### Get Signature

```ts
get startable(): boolean;
```

Whether this instance can be started (must be in 'created' or 'stopped' status).

#### Returns

`boolean`

### Inherited from

[`AbstractCreatable`](#AbstractCreatable).[`startable`](AbstractCreatable.md#startable)

***

### status

### Get Signature

```ts
get status(): CreatableStatus | null;
```

The current lifecycle status of this instance, or null if not yet initialized.

#### Returns

[`CreatableStatus`](#../type-aliases/CreatableStatus) \| `null`

### Inherited from

[`AbstractCreatable`](#AbstractCreatable).[`status`](AbstractCreatable.md#status)

***

### statusReporter

### Get Signature

```ts
get statusReporter(): 
  | CreatableStatusReporter<void>
  | undefined;
```

The status reporter used to broadcast lifecycle changes.

#### Returns

  \| [`CreatableStatusReporter`](#../interfaces/CreatableStatusReporter)\<`void`\>
  \| `undefined`

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

`BaseClassName`

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

`BaseClassName`

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
static create<T>(this, inParams?): Promise<T>;
```

Asynchronously creates a new instance by processing params, constructing,
and running both static and instance createHandlers.

### Type Parameters

#### T

`T` *extends* [`CreatableInstance`](#../interfaces/CreatableInstance)\<[`CreatableParams`](#../interfaces/CreatableParams), `EventData`\>

### Parameters

#### this

[`Creatable`](#../interfaces/Creatable)\<`T`\>

#### inParams?

`Partial`\<`T`\[`"params"`\]\> = `{}`

Optional partial parameters to configure the instance

### Returns

`Promise`\<`T`\>

The fully initialized instance

### Inherited from

[`AbstractCreatable`](#AbstractCreatable).[`create`](AbstractCreatable.md#create)

***

### createHandler()

```ts
static createHandler<T>(this, instance): Promisable<T>;
```

Static hook called during creation to perform additional initialization.
Override in subclasses to customize post-construction setup.

### Type Parameters

#### T

`T` *extends* [`CreatableInstance`](#../interfaces/CreatableInstance)\<[`CreatableParams`](#../interfaces/CreatableParams), `EventData`\>

### Parameters

#### this

[`Creatable`](#../interfaces/Creatable)\<`T`\>

#### instance

`T`

The newly constructed instance

### Returns

`Promisable`\<`T`\>

The instance, potentially modified

### Inherited from

[`AbstractCreatable`](#AbstractCreatable).[`createHandler`](AbstractCreatable.md#createhandler)

***

### paramsHandler()

```ts
static paramsHandler<T>(this, params?): Promisable<T["params"]>;
```

Static hook called during creation to validate and transform params.
Override in subclasses to add default values or validation.

### Type Parameters

#### T

`T` *extends* [`CreatableInstance`](#../interfaces/CreatableInstance)\<[`CreatableParams`](#../interfaces/CreatableParams), `EventData`\>

### Parameters

#### this

[`Creatable`](#../interfaces/Creatable)\<`T`\>

#### params?

`Partial`\<`T`\[`"params"`\]\> = `{}`

The raw partial params provided to `create`

### Returns

`Promisable`\<`T`\[`"params"`\]\>

The processed params ready for construction

### Inherited from

[`AbstractCreatable`](#AbstractCreatable).[`paramsHandler`](AbstractCreatable.md#paramshandler)

***

### createHandler()

```ts
createHandler(): Promisable<void>;
```

Instance-level creation hook. Override in subclasses to perform setup after construction.

### Returns

`Promisable`\<`void`\>

### Inherited from

[`AbstractCreatable`](#AbstractCreatable).[`createHandler`](AbstractCreatable.md#createhandler-1)

***

### paramsValidator()

```ts
paramsValidator(params): TParams & RequiredCreatableParams<void>;
```

Validates and returns the merged params, ensuring required fields are present.
Override in subclasses to add custom validation logic.

### Parameters

#### params

`Partial`\<`TParams` & [`RequiredCreatableParams`](#../interfaces/RequiredCreatableParams)\>

The raw partial params to validate

### Returns

`TParams` & [`RequiredCreatableParams`](#../interfaces/RequiredCreatableParams)\<`void`\>

The validated params

### Inherited from

[`AbstractCreatable`](#AbstractCreatable).[`paramsValidator`](AbstractCreatable.md#paramsvalidator)

***

### span()

```ts
span<T>(name, fn): T;
```

Executes a function within a telemetry span.

### Type Parameters

#### T

`T`

### Parameters

#### name

`string`

The span name

#### fn

() => `T`

The function to execute within the span

### Returns

`T`

### Inherited from

[`AbstractCreatable`](#AbstractCreatable).[`span`](AbstractCreatable.md#span)

***

### spanAsync()

```ts
spanAsync<T>(
   name, 
   fn, 
config?): Promise<T>;
```

Executes an async function within a telemetry span.

### Type Parameters

#### T

`T`

### Parameters

#### name

`string`

The span name

#### fn

() => `Promise`\<`T`\>

The async function to execute within the span

#### config?

`SpanConfig` = `{}`

Optional span configuration

### Returns

`Promise`\<`T`\>

### Inherited from

[`AbstractCreatable`](#AbstractCreatable).[`spanAsync`](AbstractCreatable.md#spanasync)

***

### start()

```ts
start(): Promise<boolean>;
```

Starts the instance, transitioning through 'starting' to 'started' status.
Thread-safe via mutex. Returns true if already started or started successfully.

### Returns

`Promise`\<`boolean`\>

### Inherited from

[`AbstractCreatable`](#AbstractCreatable).[`start`](AbstractCreatable.md#start)

***

### started()

```ts
started(notStartedAction?): boolean;
```

Checks whether this instance is currently started.
Takes an action if not started, based on the notStartedAction parameter.

### Parameters

#### notStartedAction?

What to do if not started: 'error'/'throw' throws, 'warn'/'log' logs, 'none' is silent

`"error"` | `"throw"` | `"warn"` | `"log"` | `"none"`

### Returns

`boolean`

True if started, false otherwise

### Inherited from

[`AbstractCreatable`](#AbstractCreatable).[`started`](AbstractCreatable.md#started)

***

### startedAsync()

```ts
startedAsync(notStartedAction?, tryStart?): Promise<boolean>;
```

Async version of `started` that can optionally auto-start the instance.

### Parameters

#### notStartedAction?

What to do if not started and auto-start is disabled

`"error"` | `"throw"` | `"warn"` | `"log"` | `"none"`

#### tryStart?

`boolean` = `true`

If true, attempts to start the instance automatically

### Returns

`Promise`\<`boolean`\>

True if the instance is or becomes started

### Inherited from

[`AbstractCreatable`](#AbstractCreatable).[`startedAsync`](AbstractCreatable.md#startedasync)

***

### stop()

```ts
stop(): Promise<boolean>;
```

Stops the instance, transitioning through 'stopping' to 'stopped' status.
Thread-safe via mutex. Returns true if already stopped or stopped successfully.

### Returns

`Promise`\<`boolean`\>

### Inherited from

[`AbstractCreatable`](#AbstractCreatable).[`stop`](AbstractCreatable.md#stop)

***

### \_noOverride()

```ts
protected _noOverride(functionName?): void;
```

Asserts that the given function has not been overridden in a subclass.
Used to enforce the handler pattern (override `startHandler` not `start`).

### Parameters

#### functionName?

`string` = `...`

### Returns

`void`

### Inherited from

[`AbstractCreatable`](#AbstractCreatable).[`_noOverride`](AbstractCreatable.md#_nooverride)

***

### setStatus()

### Call Signature

```ts
protected setStatus(value, progress?): void;
```

Sets the lifecycle status and reports it via the status reporter.

#### Parameters

##### value

`"creating"` | `"created"` | `"starting"` | `"started"` | `"stopping"` | `"stopped"`

##### progress?

`number`

#### Returns

`void`

#### Inherited from

[`AbstractCreatable`](#AbstractCreatable).[`setStatus`](AbstractCreatable.md#setstatus)

### Call Signature

```ts
protected setStatus(value, error?): void;
```

Sets the lifecycle status and reports it via the status reporter.

#### Parameters

##### value

`"error"`

##### error?

`Error`

#### Returns

`void`

#### Inherited from

[`AbstractCreatable`](#AbstractCreatable).[`setStatus`](AbstractCreatable.md#setstatus)

***

### startHandler()

```ts
protected startHandler(): Promisable<void>;
```

Override in subclasses to define start behavior. Throw an error on failure.

### Returns

`Promisable`\<`void`\>

### Inherited from

[`AbstractCreatable`](#AbstractCreatable).[`startHandler`](AbstractCreatable.md#starthandler)

***

### stopHandler()

```ts
protected stopHandler(): Promisable<void>;
```

Override in subclasses to define stop behavior. Throw an error on failure.

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

Creates a factory that produces instances of this class with pre-configured params and labels.

### Type Parameters

#### T

`T` *extends* [`CreatableInstance`](#../interfaces/CreatableInstance)\<[`CreatableParams`](#../interfaces/CreatableParams), `EventData`\>

### Parameters

#### this

[`Creatable`](#../interfaces/Creatable)\<`T`\>

#### params?

`Partial`\<`T`\[`"params"`\]\>

Default parameters for instances created by the factory

#### labels?

[`Labels`](#../interfaces/Labels)

Labels to assign to created instances

### Returns

[`CreatableFactory`](#../interfaces/CreatableFactory)\<`T`\>

***

### clearListeners()

```ts
clearListeners(eventNames): this;
```

Removes all listeners for the specified event name(s).

### Parameters

#### eventNames

One or more event names to clear listeners for.

keyof `TEventData` | keyof `TEventData`[]

### Returns

`this`

This instance for chaining.

### Inherited from

[`AbstractCreatable`](#AbstractCreatable).[`clearListeners`](AbstractCreatable.md#clearlisteners)

***

### emit()

```ts
emit<TEventName, TEventArgs>(eventName, eventArgs): Promise<void>;
```

Emits an event, invoking all registered listeners concurrently.

### Type Parameters

#### TEventName

`TEventName` *extends* `string` \| `number` \| `symbol` = keyof `TEventData`

#### TEventArgs

`TEventArgs` *extends* `EventArgs` = `TEventData`\[`TEventName`\]

### Parameters

#### eventName

`TEventName`

The event to emit.

#### eventArgs

`TEventArgs`

The data to pass to listeners.

### Returns

`Promise`\<`void`\>

### Inherited from

[`AbstractCreatable`](#AbstractCreatable).[`emit`](AbstractCreatable.md#emit)

***

### emitSerial()

```ts
emitSerial<TEventName, TEventArgs>(eventName, eventArgs): Promise<void>;
```

Emits an event, invoking all registered listeners sequentially in order.

### Type Parameters

#### TEventName

`TEventName` *extends* `string` \| `number` \| `symbol` = keyof `TEventData`

#### TEventArgs

`TEventArgs` *extends* `EventArgs` = `TEventData`\[`TEventName`\]

### Parameters

#### eventName

`TEventName`

The event to emit.

#### eventArgs

`TEventArgs`

The data to pass to listeners.

### Returns

`Promise`\<`void`\>

### Inherited from

[`AbstractCreatable`](#AbstractCreatable).[`emitSerial`](AbstractCreatable.md#emitserial)

***

### listenerCount()

```ts
listenerCount(eventNames): number;
```

Returns the total number of listeners registered for the specified event name(s).

### Parameters

#### eventNames

One or more event names to count listeners for.

keyof `TEventData` | keyof `TEventData`[]

### Returns

`number`

The total listener count.

### Inherited from

[`AbstractCreatable`](#AbstractCreatable).[`listenerCount`](AbstractCreatable.md#listenercount)

***

### off()

```ts
off<TEventName>(eventNames, listener): void;
```

Removes a specific listener from the specified event name(s).

### Type Parameters

#### TEventName

`TEventName` *extends* `string` \| `number` \| `symbol`

### Parameters

#### eventNames

One or more event names to unsubscribe from.

`TEventName` | `TEventName`[]

#### listener

`EventListener`\<`TEventData`\[`TEventName`\]\>

The listener to remove.

### Returns

`void`

### Inherited from

[`AbstractCreatable`](#AbstractCreatable).[`off`](AbstractCreatable.md#off)

***

### offAny()

```ts
offAny(listener): void;
```

Removes a wildcard listener that was receiving all events.

### Parameters

#### listener

`EventAnyListener`

The wildcard listener to remove.

### Returns

`void`

### Inherited from

[`AbstractCreatable`](#AbstractCreatable).[`offAny`](AbstractCreatable.md#offany)

***

### on()

```ts
on<TEventName>(eventNames, listener): () => void;
```

Subscribes a listener to the specified event name(s).

### Type Parameters

#### TEventName

`TEventName` *extends* `string` \| `number` \| `symbol`

### Parameters

#### eventNames

One or more event names to listen for.

`TEventName` | `TEventName`[]

#### listener

`EventListener`\<`TEventData`\[`TEventName`\]\>

The callback to invoke when the event fires.

### Returns

An unsubscribe function.

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

Subscribes a wildcard listener that receives all events.

### Parameters

#### listener

`EventAnyListener`

The callback to invoke for any event.

### Returns

An unsubscribe function.

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

Subscribes a listener that will be invoked only once for the specified event, then automatically removed.

### Type Parameters

#### TEventName

`TEventName` *extends* `string` \| `number` \| `symbol`

### Parameters

#### eventName

`TEventName`

The event to listen for.

#### listener

`EventListener`\<`TEventData`\[`TEventName`\]\>

The callback to invoke once.

### Returns

An unsubscribe function.

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

A concrete factory that wraps a Creatable class with default parameters and labels.
Instances are created by merging caller-provided params over the factory defaults.

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

The Creatable class this factory delegates creation to.

***

### defaultParams?

```ts
optional defaultParams: Partial<T["params"]>;
```

Default parameters merged into every `create` call.

***

### labels?

```ts
optional labels: Labels;
```

Labels identifying resources created by this factory.

## Methods

### withParams()

```ts
static withParams<T>(
   creatableModule, 
   params?, 
labels?): Factory<T>;
```

Creates a new Factory instance with the given default params and labels.

### Type Parameters

#### T

`T` *extends* [`CreatableInstance`](#../interfaces/CreatableInstance)\<[`CreatableParams`](#../interfaces/CreatableParams), `EventData`\>

### Parameters

#### creatableModule

[`Creatable`](#../interfaces/Creatable)\<`T`\>

The Creatable class to wrap

#### params?

`Partial`\<`T`\[`"params"`\]\>

Default parameters for new instances

#### labels?

[`Labels`](#../interfaces/Labels) = `{}`

Labels to assign to created instances

### Returns

`Factory`\<`T`\>

***

### create()

```ts
create(params?): Promise<T>;
```

Creates a new instance, merging the provided params over the factory defaults.

### Parameters

#### params?

`Partial`\<`T`\[`"params"`\]\>

Optional parameters to override the factory defaults

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

Static interface for classes that support asynchronous creation.
Provides the `create`, `createHandler`, and `paramsHandler` static methods
used to construct instances through the creatable lifecycle.

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

Constructs a new raw instance. Should not be called directly; use `create` instead.

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

Optional default logger shared across instances created by this class.

## Methods

### create()

```ts
create<T>(this, params?): Promise<T>;
```

Asynchronously creates and initializes a new instance with the given params.

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

Hook called after construction to perform additional initialization on the instance.

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
paramsHandler<T>(this, params?): Promisable<T["params"] & RequiredCreatableParams<void>>;
```

Hook called to validate and transform params before instance construction.

### Type Parameters

#### T

`T` *extends* [`CreatableInstance`](#CreatableInstance)\<[`CreatableParams`](#CreatableParams), `EventData`\>

### Parameters

#### this

`Creatable`\<`T`\>

#### params?

`Partial`\<`T`\[`"params"`\]\>

### Returns

`Promisable`\<`T`\[`"params"`\] & [`RequiredCreatableParams`](#RequiredCreatableParams)\<`void`\>\>

  ### <a id="CreatableFactory"></a>CreatableFactory

[**@xylabs/creatable**](#../README)

***

A factory interface for creating instances of a Creatable with pre-configured parameters.
Unlike the full Creatable, this only exposes the `create` method.

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

Creates a new instance, merging the provided params with the factory's defaults.

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

Represents a created instance with a managed lifecycle (start/stop) and event emission.

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

The event data type associated with this instance.

### Overrides

```ts
EventEmitter.eventData
```

***

### name

```ts
name: CreatableName;
```

The name identifier for this instance.

***

### params

```ts
params: TParams;
```

The parameters used to configure this instance.

***

### start()

```ts
start: () => Promise<boolean>;
```

Starts the instance. Resolves to true if started successfully.

### Returns

`Promise`\<`boolean`\>

***

### stop()

```ts
stop: () => Promise<boolean>;
```

Stops the instance. Resolves to true if stopped successfully.

### Returns

`Promise`\<`boolean`\>

## Methods

### clearListeners()

```ts
clearListeners(eventNames): void;
```

Removes all listeners for the specified event name(s).

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

Emits an event, invoking all registered listeners concurrently.

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

Emits an event, invoking all registered listeners sequentially in order.

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

Returns the total number of listeners registered for the specified event name(s).

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

Removes a specific listener from the specified event name(s).

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

Removes a wildcard listener that was receiving all events.

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

Subscribes a listener to the specified event name(s) and returns an unsubscribe function.

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

Subscribes a wildcard listener that receives all events and returns an unsubscribe function.

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

Subscribes a listener that will be invoked only once for the specified event, then automatically removed.

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

Parameters for creating a creatable instance, combining required params with emitter params.

## Extends

- [`RequiredCreatableParams`](#RequiredCreatableParams).`BaseEmitterParams`

## Properties

### logger?

```ts
optional logger: Logger;
```

### Inherited from

[`RequiredCreatableParams`](#RequiredCreatableParams).[`logger`](RequiredCreatableParams.md#logger)

***

### meterProvider?

```ts
optional meterProvider: MeterProvider;
```

### Inherited from

[`RequiredCreatableParams`](#RequiredCreatableParams).[`meterProvider`](RequiredCreatableParams.md#meterprovider)

***

### traceProvider?

```ts
optional traceProvider: TracerProvider;
```

### Inherited from

[`RequiredCreatableParams`](#RequiredCreatableParams).[`traceProvider`](RequiredCreatableParams.md#traceprovider)

***

### name?

```ts
optional name: CreatableName;
```

Optional name identifying this creatable instance.

### Inherited from

[`RequiredCreatableParams`](#RequiredCreatableParams).[`name`](RequiredCreatableParams.md#name)

***

### statusReporter?

```ts
optional statusReporter: CreatableStatusReporter<void>;
```

Optional reporter for broadcasting status changes.

### Inherited from

[`RequiredCreatableParams`](#RequiredCreatableParams).[`statusReporter`](RequiredCreatableParams.md#statusreporter)

  ### <a id="CreatableStatusReporter"></a>CreatableStatusReporter

[**@xylabs/creatable**](#../README)

***

Reports status changes for a creatable, supporting progress tracking and error reporting.

## Type Parameters

### TAdditionalStatus

`TAdditionalStatus` *extends* `void` \| `string` = `void`

## Methods

### report()

### Call Signature

```ts
report(
   name, 
   status, 
   progress): void;
```

Report a non-error status with a numeric progress value.

#### Parameters

##### name

`BaseClassName`

##### status

`"creating"` | `"created"` | `"starting"` | `"started"` | `"stopping"` | `"stopped"` | `Exclude`\<`TAdditionalStatus` *extends* `void` ? [`StandardCreatableStatus`](#../type-aliases/StandardCreatableStatus) : `TAdditionalStatus`, `"error"`\>

##### progress

`number`

#### Returns

`void`

### Call Signature

```ts
report(
   name, 
   status, 
   error): void;
```

Report an error status with the associated Error.

#### Parameters

##### name

`BaseClassName`

##### status

`"error"` | `Extract`\<`TAdditionalStatus` *extends* `void` ? [`StandardCreatableStatus`](#../type-aliases/StandardCreatableStatus) : `TAdditionalStatus`, `"error"`\>

##### error

`Error`

#### Returns

`void`

### Call Signature

```ts
report(name, status): void;
```

Report a status change without progress or error details.

#### Parameters

##### name

`BaseClassName`

##### status

[`CreatableStatus`](#../type-aliases/CreatableStatus)\<`TAdditionalStatus`\>

#### Returns

`void`

  ### <a id="CreatableWithFactory"></a>CreatableWithFactory

[**@xylabs/creatable**](#../README)

***

Extends Creatable with a `factory` method that produces pre-configured CreatableFactory instances.

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

Constructs a new raw instance. Should not be called directly; use `create` instead.

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

Optional default logger shared across instances created by this class.

### Inherited from

[`Creatable`](#Creatable).[`defaultLogger`](Creatable.md#defaultlogger)

## Methods

### create()

```ts
create<T>(this, params?): Promise<T>;
```

Asynchronously creates and initializes a new instance with the given params.

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

Hook called after construction to perform additional initialization on the instance.

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
paramsHandler<T>(this, params?): Promisable<T["params"] & RequiredCreatableParams<void>>;
```

Hook called to validate and transform params before instance construction.

### Type Parameters

#### T

`T` *extends* [`CreatableInstance`](#CreatableInstance)\<[`CreatableParams`](#CreatableParams), `EventData`\>

### Parameters

#### this

[`Creatable`](#Creatable)\<`T`\>

#### params?

`Partial`\<`T`\[`"params"`\]\>

### Returns

`Promisable`\<`T`\[`"params"`\] & [`RequiredCreatableParams`](#RequiredCreatableParams)\<`void`\>\>

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

Creates a factory with the given default params and labels.

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
[key: string]: string | undefined
```

  ### <a id="RequiredCreatableParams"></a>RequiredCreatableParams

[**@xylabs/creatable**](#../README)

***

The minimum required parameters for constructing a creatable.

## Extends

- `BaseEmitterParams`

## Extended by

- [`CreatableParams`](#CreatableParams)

## Type Parameters

### TAdditionalStatus

`TAdditionalStatus` *extends* [`CreatableStatus`](#../type-aliases/CreatableStatus) \| `void` = `void`

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
optional name: CreatableName;
```

Optional name identifying this creatable instance.

***

### statusReporter?

```ts
optional statusReporter: CreatableStatusReporter<TAdditionalStatus>;
```

Optional reporter for broadcasting status changes.

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

A branded string type used as the name identifier for creatables.

  ### <a id="CreatableStatus"></a>CreatableStatus

[**@xylabs/creatable**](#../README)

***

```ts
type CreatableStatus<TAdditionalStatus> = 
  | StandardCreatableStatus
  | TAdditionalStatus extends void ? StandardCreatableStatus : TAdditionalStatus;
```

A creatable's status, optionally extended with additional custom status values.

## Type Parameters

### TAdditionalStatus

`TAdditionalStatus` *extends* `void` \| `string` = `void`

  ### <a id="StandardCreatableStatus"></a>StandardCreatableStatus

[**@xylabs/creatable**](#../README)

***

```ts
type StandardCreatableStatus = 
  | "creating"
  | "created"
  | "starting"
  | "started"
  | "stopping"
  | "stopped"
  | "error";
```

The standard lifecycle statuses a creatable can transition through.


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