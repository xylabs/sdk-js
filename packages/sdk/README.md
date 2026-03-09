# @xylabs/sdk-js

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

**@xylabs/sdk-js**

***

## Classes

- [ApiClient](#classes/ApiClient)
- [ApiEndpoint](#classes/ApiEndpoint)
- [~~AxiosJson~~](#classes/AxiosJson)
- [Base](#classes/Base)
- [UniqueBase](#classes/UniqueBase)
- [AbstractCreatable](#classes/AbstractCreatable)
- [AbstractCreatableWithFactory](#classes/AbstractCreatableWithFactory)
- [Factory](#classes/Factory)
- [EthAddressWrapper](#classes/EthAddressWrapper)
- [BaseEmitter](#classes/BaseEmitter)
- [Events](#classes/Events)
- [ForgetPromise](#classes/ForgetPromise)
- [ConsoleLogger](#classes/ConsoleLogger)
- [IdLogger](#classes/IdLogger)
- [LevelLogger](#classes/LevelLogger)
- [SilentLogger](#classes/SilentLogger)
- [IsObjectFactory](#classes/IsObjectFactory)
- [ObjectWrapper](#classes/ObjectWrapper)
- [ValidatorBase](#classes/ValidatorBase)
- [PromiseEx](#classes/PromiseEx)
- [XyConsoleSpanExporter](#classes/XyConsoleSpanExporter)

## Interfaces

- [ApiConfig](#interfaces/ApiConfig)
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
- [BaseEmitterParamsFields](#interfaces/BaseEmitterParamsFields)
- [EventEmitter](#interfaces/EventEmitter)
- [ForgetNodeConfig](#interfaces/ForgetNodeConfig)
- [HexConfig](#interfaces/HexConfig)
- [Logger](#interfaces/Logger)
- [ObjectTypeConfig](#interfaces/ObjectTypeConfig)
- [Validator](#interfaces/Validator)
- [TypeCheckConfig](#interfaces/TypeCheckConfig)
- [TypeCheckRequiredConfig](#interfaces/TypeCheckRequiredConfig)
- [TypeCheckOptionalConfig](#interfaces/TypeCheckOptionalConfig)
- [PromiseType](#interfaces/PromiseType)
- [RetryConfig](#interfaces/RetryConfig)
- [RetryConfigWithComplete](#interfaces/RetryConfigWithComplete)
- [ReadonlyKeyValueStore](#interfaces/ReadonlyKeyValueStore)
- [KeyValueStore](#interfaces/KeyValueStore)
- [SpanConfig](#interfaces/SpanConfig)
- [ZodFactoryConfigObject](#interfaces/ZodFactoryConfigObject)

## Type Aliases

- [ApiStage](#type-aliases/ApiStage)
- [BaseClassName](#type-aliases/BaseClassName)
- [BaseParamsFields](#type-aliases/BaseParamsFields)
- [BaseParams](#type-aliases/BaseParams)
- [CreatableName](#type-aliases/CreatableName)
- [StandardCreatableStatus](#type-aliases/StandardCreatableStatus)
- [CreatableStatus](#type-aliases/CreatableStatus)
- [Enum](#type-aliases/Enum)
- [EnumKey](#type-aliases/EnumKey)
- [EnumValue](#type-aliases/EnumValue)
- [AssertConfig](#type-aliases/AssertConfig)
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
- [AddressTransformZodType](#type-aliases/AddressTransformZodType)
- [AddressValidationZodType](#type-aliases/AddressValidationZodType)
- [Address](#type-aliases/Address)
- [EthAddress](#type-aliases/EthAddress)
- [HashBitLength](#type-aliases/HashBitLength)
- [BrandedHash](#type-aliases/BrandedHash)
- [Hash](#type-aliases/Hash)
- [BrandedHex](#type-aliases/BrandedHex)
- [Hex](#type-aliases/Hex)
- [LogFunction](#type-aliases/LogFunction)
- [LogLevelKey](#type-aliases/LogLevelKey)
- [LogVerbosity](#type-aliases/LogVerbosity)
- [LogLevelValue](#type-aliases/LogLevelValue)
- [JsonValue](#type-aliases/JsonValue)
- [JsonObject](#type-aliases/JsonObject)
- [JsonArray](#type-aliases/JsonArray)
- [OmitStartsWith](#type-aliases/OmitStartsWith)
- [DeepOmitStartsWith](#type-aliases/DeepOmitStartsWith)
- [DeepRestrictToStringKeys](#type-aliases/DeepRestrictToStringKeys)
- [DeepRestrictToJson](#type-aliases/DeepRestrictToJson)
- [Optional](#type-aliases/Optional)
- [Override](#type-aliases/Override)
- [~~PartialRecord~~](#type-aliases/PartialRecord)
- [PickStartsWith](#type-aliases/PickStartsWith)
- [DeepPickStartsWith](#type-aliases/DeepPickStartsWith)
- [Simplify](#type-aliases/Simplify)
- [StringKeyObject](#type-aliases/StringKeyObject)
- [WithAdditional](#type-aliases/WithAdditional)
- [OmitByPredicate](#type-aliases/OmitByPredicate)
- [PickByPredicate](#type-aliases/PickByPredicate)
- [AnyObject](#type-aliases/AnyObject)
- [AsTypeFunction](#type-aliases/AsTypeFunction)
- [AsOptionalTypeFunction](#type-aliases/AsOptionalTypeFunction)
- [Compare](#type-aliases/Compare)
- [EmptyObject](#type-aliases/EmptyObject)
- [StringOrAlertFunction](#type-aliases/StringOrAlertFunction)
- [TypeCheck](#type-aliases/TypeCheck)
- [Profiler](#type-aliases/Profiler)
- [PromiseExSubFunc](#type-aliases/PromiseExSubFunc)
- [PromiseExFunc](#type-aliases/PromiseExFunc)
- [PromiseExValueFunc](#type-aliases/PromiseExValueFunc)
- [Promisable](#type-aliases/Promisable)
- [PromisableArray](#type-aliases/PromisableArray)
- [OptionalPromisable](#type-aliases/OptionalPromisable)
- [OptionalPromisableArray](#type-aliases/OptionalPromisableArray)
- [NullablePromisable](#type-aliases/NullablePromisable)
- [NullablePromisableArray](#type-aliases/NullablePromisableArray)
- [AsyncMutex](#type-aliases/AsyncMutex)
- [AnyNonPromise](#type-aliases/AnyNonPromise)
- [Brand](#type-aliases/Brand)
- [IdentityFunction](#type-aliases/IdentityFunction)
- [FieldType](#type-aliases/FieldType)
- [ObjectTypeShape](#type-aliases/ObjectTypeShape)
- [TypeOfTypes](#type-aliases/TypeOfTypes)
- [TypedValue](#type-aliases/TypedValue)
- [TypedKey](#type-aliases/TypedKey)
- [TypedObject](#type-aliases/TypedObject)
- [TypedArray](#type-aliases/TypedArray)
- [AnyFunction](#type-aliases/AnyFunction)
- [RecordKey](#type-aliases/RecordKey)
- [ZodFactoryConfig](#type-aliases/ZodFactoryConfig)
- [AllZodFactories](#type-aliases/AllZodFactories)

## Variables

- [ApiStage](#variables/ApiStage)
- [getApiStage](#variables/getApiStage)
- [containsAll](#variables/containsAll)
- [distinct](#variables/distinct)
- [filterAs](#variables/filterAs)
- [filterAsync](#variables/filterAsync)
- [findAs](#variables/findAs)
- [findLastAs](#variables/findLastAs)
- [flatten](#variables/flatten)
- [uniq](#variables/uniq)
- [uniqBy](#variables/uniqBy)
- [equalArrayBuffers](#variables/equalArrayBuffers)
- [axiosJson](#variables/axiosJson)
- [~~axios~~](#variables/axios)
- [disableGloballyUnique](#variables/disableGloballyUnique)
- [globallyUnique](#variables/globallyUnique)
- [Buffer](#variables/Buffer)
- [bufferPolyfill](#variables/bufferPolyfill)
- [hasAllLabels](#variables/hasAllLabels)
- [fromFixedPoint](#variables/fromFixedPoint)
- [toDecimalPrecision](#variables/toDecimalPrecision)
- [toFixedPoint](#variables/toFixedPoint)
- [delay](#variables/delay)
- [Enum](#variables/Enum)
- [assertError](#variables/assertError)
- [handleError](#variables/handleError)
- [handleErrorAsync](#variables/handleErrorAsync)
- [isEthAddressWrapper](#variables/isEthAddressWrapper)
- [ellipsize](#variables/ellipsize)
- [padHex](#variables/padHex)
- [exists](#variables/exists)
- [defaultForgetNodeConfig](#variables/defaultForgetNodeConfig)
- [forget](#variables/forget)
- [functionName](#variables/functionName)
- [HexRegExMinMax](#variables/HexRegExMinMax)
- [HexRegExMinMaxMixedCaseWithPrefix](#variables/HexRegExMinMaxMixedCaseWithPrefix)
- [HexRegEx](#variables/HexRegEx)
- [HexRegExWithPrefix](#variables/HexRegExWithPrefix)
- [AddressTransformZod](#variables/AddressTransformZod)
- [AddressValidationZod](#variables/AddressValidationZod)
- [ZERO\_ADDRESS](#variables/ZERO_ADDRESS)
- [ADDRESS\_LENGTH](#variables/ADDRESS_LENGTH)
- [AddressRegEx](#variables/AddressRegEx)
- [AddressZod](#variables/AddressZod)
- [isAddress](#variables/isAddress)
- [toAddress](#variables/toAddress)
- [EthAddressRegEx](#variables/EthAddressRegEx)
- [EthAddressToStringZod](#variables/EthAddressToStringZod)
- [~~EthAddressToStringSchema~~](#variables/EthAddressToStringSchema)
- [EthAddressFromStringZod](#variables/EthAddressFromStringZod)
- [~~EthAddressFromStringSchema~~](#variables/EthAddressFromStringSchema)
- [ETH\_ZERO\_ADDRESS](#variables/ETH_ZERO_ADDRESS)
- [toEthAddress](#variables/toEthAddress)
- [isEthAddress](#variables/isEthAddress)
- [EthAddressZod](#variables/EthAddressZod)
- [HASH\_LENGTH](#variables/HASH_LENGTH)
- [HashRegEx](#variables/HashRegEx)
- [ZERO\_HASH](#variables/ZERO_HASH)
- [HashBitLength](#variables/HashBitLength)
- [isHashBitLength](#variables/isHashBitLength)
- [HashZod](#variables/HashZod)
- [isHash](#variables/isHash)
- [HashToJsonZod](#variables/HashToJsonZod)
- [JsonToHashZod](#variables/JsonToHashZod)
- [hexFrom](#variables/hexFrom)
- [hexFromArrayBuffer](#variables/hexFromArrayBuffer)
- [hexFromBigInt](#variables/hexFromBigInt)
- [hexFromHexString](#variables/hexFromHexString)
- [hexFromNumber](#variables/hexFromNumber)
- [HexZod](#variables/HexZod)
- [isHex](#variables/isHex)
- [isHexZero](#variables/isHexZero)
- [toHexLegacy](#variables/toHexLegacy)
- [bitsToNibbles](#variables/bitsToNibbles)
- [nibblesToBits](#variables/nibblesToBits)
- [toHex](#variables/toHex)
- [BigIntToJsonZod](#variables/BigIntToJsonZod)
- [JsonToBigIntZod](#variables/JsonToBigIntZod)
- [LogLevel](#variables/LogLevel)
- [NoOpLogFunction](#variables/NoOpLogFunction)
- [getFunctionName](#variables/getFunctionName)
- [AsObjectFactory](#variables/AsObjectFactory)
- [AsTypeFactory](#variables/AsTypeFactory)
- [JsonObjectZod](#variables/JsonObjectZod)
- [isJsonValue](#variables/isJsonValue)
- [asJsonValue](#variables/asJsonValue)
- [toJsonValue](#variables/toJsonValue)
- [isJsonArray](#variables/isJsonArray)
- [asJsonArray](#variables/asJsonArray)
- [toJsonArray](#variables/toJsonArray)
- [isJsonObject](#variables/isJsonObject)
- [asJsonObject](#variables/asJsonObject)
- [toJsonObject](#variables/toJsonObject)
- [asAnyObject](#variables/asAnyObject)
- [deepMerge](#variables/deepMerge)
- [omitBy](#variables/omitBy)
- [omitByPrefix](#variables/omitByPrefix)
- [pickBy](#variables/pickBy)
- [pickByPrefix](#variables/pickByPrefix)
- [removeFields](#variables/removeFields)
- [toSafeJsonArray](#variables/toSafeJsonArray)
- [toSafeJsonObject](#variables/toSafeJsonObject)
- [toSafeJsonValue](#variables/toSafeJsonValue)
- [toSafeJsonString](#variables/toSafeJsonString)
- [toSafeJson](#variables/toSafeJson)
- [isBrowser](#variables/isBrowser)
- [isWebworker](#variables/isWebworker)
- [isNode](#variables/isNode)
- [createProfiler](#variables/createProfiler)
- [profile](#variables/profile)
- [profileReport](#variables/profileReport)
- [fulfilled](#variables/fulfilled)
- [fulfilledValues](#variables/fulfilledValues)
- [rejected](#variables/rejected)
- [retry](#variables/retry)
- [difference](#variables/difference)
- [intersection](#variables/intersection)
- [union](#variables/union)
- [setTimeoutEx](#variables/setTimeoutEx)
- [clearTimeoutEx](#variables/clearTimeoutEx)
- [isTypedKey](#variables/isTypedKey)
- [isTypedValue](#variables/isTypedValue)
- [isTypedArray](#variables/isTypedArray)
- [isValidTypedFieldPair](#variables/isValidTypedFieldPair)
- [isTypedObject](#variables/isTypedObject)
- [ifDefined](#variables/ifDefined)
- [ifTypeOf](#variables/ifTypeOf)
- [isType](#variables/isType)
- [typeOf](#variables/typeOf)
- [validateType](#variables/validateType)
- [URL](#variables/URL)
- [isLocalhost](#variables/isLocalhost)

## Functions

- [isArrayBuffer](#functions/isArrayBuffer)
- [isArrayBufferLike](#functions/isArrayBufferLike)
- [toArrayBuffer](#functions/toArrayBuffer)
- [toUint8Array](#functions/toUint8Array)
- [assertDefinedEx](#functions/assertDefinedEx)
- [assertEx](#functions/assertEx)
- [axiosJsonConfig](#functions/axiosJsonConfig)
- [creatable](#functions/creatable)
- [creatableFactory](#functions/creatableFactory)
- [asAddress](#functions/asAddress)
- [asAddressV2](#functions/asAddressV2)
- [isAddressV2](#functions/isAddressV2)
- [toAddressV2](#functions/toAddressV2)
- [asEthAddress](#functions/asEthAddress)
- [asHash](#functions/asHash)
- [asHex](#functions/asHex)
- [hexToBigInt](#functions/hexToBigInt)
- [createDeepMerge](#functions/createDeepMerge)
- [toPromise](#functions/toPromise)
- [staticImplements](#functions/staticImplements)
- [cloneContextWithoutSpan](#functions/cloneContextWithoutSpan)
- [span](#functions/span)
- [spanRoot](#functions/spanRoot)
- [spanAsync](#functions/spanAsync)
- [spanRootAsync](#functions/spanRootAsync)
- [timeBudget](#functions/timeBudget)
- [spanDurationInMillis](#functions/spanDurationInMillis)
- [isUndefined](#functions/isUndefined)
- [isDefined](#functions/isDefined)
- [isNull](#functions/isNull)
- [isDefinedNotNull](#functions/isDefinedNotNull)
- [isUndefinedOrNull](#functions/isUndefinedOrNull)
- [isBigInt](#functions/isBigInt)
- [isString](#functions/isString)
- [isNumber](#functions/isNumber)
- [isObject](#functions/isObject)
- [isArray](#functions/isArray)
- [isFunction](#functions/isFunction)
- [isSymbol](#functions/isSymbol)
- [isEmptyObject](#functions/isEmptyObject)
- [isEmptyString](#functions/isEmptyString)
- [isEmptyArray](#functions/isEmptyArray)
- [isPopulatedArray](#functions/isPopulatedArray)
- [isEmpty](#functions/isEmpty)
- [isFalsy](#functions/isFalsy)
- [isTruthy](#functions/isTruthy)
- [isBoolean](#functions/isBoolean)
- [isDateString](#functions/isDateString)
- [isDate](#functions/isDate)
- [isRegExp](#functions/isRegExp)
- [isError](#functions/isError)
- [isPromise](#functions/isPromise)
- [isPromiseLike](#functions/isPromiseLike)
- [isMap](#functions/isMap)
- [isArrayBufferView](#functions/isArrayBufferView)
- [isSet](#functions/isSet)
- [isWeakMap](#functions/isWeakMap)
- [isWeakSet](#functions/isWeakSet)
- [isDataView](#functions/isDataView)
- [isBlob](#functions/isBlob)
- [isFile](#functions/isFile)
- [zodAllFactory](#functions/zodAllFactory)
- [zodAsAsyncFactory](#functions/zodAsAsyncFactory)
- [zodAsFactory](#functions/zodAsFactory)
- [zodIsFactory](#functions/zodIsFactory)
- [zodToAsyncFactory](#functions/zodToAsyncFactory)
- [zodToFactory](#functions/zodToFactory)

### classes

  ### <a id="AbstractCreatable"></a>AbstractCreatable

[**@xylabs/sdk-js**](#../README)

***

Base class for objects that follow an asynchronous creation and lifecycle pattern.
Instances must be created via the static `create` method rather than direct construction.
Provides start/stop lifecycle management with status tracking and telemetry support.

## Extends

- [`BaseEmitter`](#BaseEmitter)\<`Partial`\<`TParams` & [`RequiredCreatableParams`](#../interfaces/RequiredCreatableParams)\>, `TEventData`\>

## Extended by

- [`AbstractCreatableWithFactory`](#AbstractCreatableWithFactory)

## Type Parameters

### TParams

`TParams` *extends* [`CreatableParams`](#../interfaces/CreatableParams) = [`CreatableParams`](#../interfaces/CreatableParams)

### TEventData

`TEventData` *extends* [`EventData`](#../type-aliases/EventData) = [`EventData`](#../type-aliases/EventData)

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

[`BaseEmitter`](#BaseEmitter).[`constructor`](BaseEmitter.md#constructor)

## Properties

### defaultLogger?

```ts
static optional defaultLogger: Logger;
```

### Inherited from

[`BaseEmitter`](#BaseEmitter).[`defaultLogger`](BaseEmitter.md#defaultlogger)

***

### globalInstances

```ts
readonly static globalInstances: Record<BaseClassName, WeakRef<Base>[]>;
```

### Inherited from

[`BaseEmitter`](#BaseEmitter).[`globalInstances`](BaseEmitter.md#globalinstances)

***

### globalInstancesCountHistory

```ts
readonly static globalInstancesCountHistory: Record<BaseClassName, number[]>;
```

### Inherited from

[`BaseEmitter`](#BaseEmitter).[`globalInstancesCountHistory`](BaseEmitter.md#globalinstancescounthistory)

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

### Inherited from

[`BaseEmitter`](#BaseEmitter).[`eventData`](BaseEmitter.md#eventdata)

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

[`BaseEmitter`](#BaseEmitter).[`historyInterval`](BaseEmitter.md#historyinterval)

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

[`BaseEmitter`](#BaseEmitter).[`historyTime`](BaseEmitter.md#historytime)

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

[`BaseEmitter`](#BaseEmitter).[`maxGcFrequency`](BaseEmitter.md#maxgcfrequency)

***

### maxHistoryDepth

### Get Signature

```ts
get static maxHistoryDepth(): number;
```

#### Returns

`number`

### Inherited from

[`BaseEmitter`](#BaseEmitter).[`maxHistoryDepth`](BaseEmitter.md#maxhistorydepth)

***

### logger

### Get Signature

```ts
get logger(): Logger | undefined;
```

#### Returns

[`Logger`](#../interfaces/Logger) \| `undefined`

### Inherited from

[`BaseEmitter`](#BaseEmitter).[`logger`](BaseEmitter.md#logger)

***

### meter

### Get Signature

```ts
get meter(): Meter | undefined;
```

#### Returns

`Meter` \| `undefined`

### Inherited from

[`BaseEmitter`](#BaseEmitter).[`meter`](BaseEmitter.md#meter)

***

### tracer

### Get Signature

```ts
get tracer(): Tracer | undefined;
```

#### Returns

`Tracer` \| `undefined`

### Inherited from

[`BaseEmitter`](#BaseEmitter).[`tracer`](BaseEmitter.md#tracer)

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

[`BaseEmitter`](#BaseEmitter).[`params`](BaseEmitter.md#params)

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

[`BaseEmitter`](#BaseEmitter).[`gc`](BaseEmitter.md#gc)

### Call Signature

```ts
static gc(className): void;
```

#### Parameters

##### className

[`BaseClassName`](#../type-aliases/BaseClassName)

#### Returns

`void`

#### Inherited from

[`BaseEmitter`](#BaseEmitter).[`gc`](BaseEmitter.md#gc)

***

### instanceCount()

```ts
static instanceCount(className): number;
```

### Parameters

#### className

[`BaseClassName`](#../type-aliases/BaseClassName)

### Returns

`number`

### Inherited from

[`BaseEmitter`](#BaseEmitter).[`instanceCount`](BaseEmitter.md#instancecount)

***

### instanceCounts()

```ts
static instanceCounts(): Record<BaseClassName, number>;
```

### Returns

`Record`\<[`BaseClassName`](#../type-aliases/BaseClassName), `number`\>

### Inherited from

[`BaseEmitter`](#BaseEmitter).[`instanceCounts`](BaseEmitter.md#instancecounts)

***

### startHistory()

```ts
static startHistory(): void;
```

### Returns

`void`

### Inherited from

[`BaseEmitter`](#BaseEmitter).[`startHistory`](BaseEmitter.md#starthistory)

***

### stopHistory()

```ts
static stopHistory(): void;
```

### Returns

`void`

### Inherited from

[`BaseEmitter`](#BaseEmitter).[`stopHistory`](BaseEmitter.md#stophistory)

***

### create()

```ts
static create<T>(this, inParams?): Promise<T>;
```

Asynchronously creates a new instance by processing params, constructing,
and running both static and instance createHandlers.

### Type Parameters

#### T

`T` *extends* [`CreatableInstance`](#../interfaces/CreatableInstance)\<[`CreatableParams`](#../interfaces/CreatableParams), [`EventData`](#../type-aliases/EventData)\>

### Parameters

#### this

[`Creatable`](#../interfaces/Creatable)\<`T`\>

#### inParams?

`Partial`\<`T`\[`"params"`\]\>

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

`T` *extends* [`CreatableInstance`](#../interfaces/CreatableInstance)\<[`CreatableParams`](#../interfaces/CreatableParams), [`EventData`](#../type-aliases/EventData)\>

### Parameters

#### this

[`Creatable`](#../interfaces/Creatable)\<`T`\>

#### instance

`T`

The newly constructed instance

### Returns

[`Promisable`](#../type-aliases/Promisable)\<`T`\>

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

`T` *extends* [`CreatableInstance`](#../interfaces/CreatableInstance)\<[`CreatableParams`](#../interfaces/CreatableParams), [`EventData`](#../type-aliases/EventData)\>

### Parameters

#### this

[`Creatable`](#../interfaces/Creatable)\<`T`\>

#### params?

`Partial`\<`T`\[`"params"`\]\>

The raw partial params provided to `create`

### Returns

[`Promisable`](#../type-aliases/Promisable)\<`T`\[`"params"`\]\>

The processed params ready for construction

***

### createHandler()

```ts
createHandler(): Promisable<void>;
```

Instance-level creation hook. Override in subclasses to perform setup after construction.

### Returns

[`Promisable`](#../type-aliases/Promisable)\<`void`\>

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

[`SpanConfig`](#../interfaces/SpanConfig)

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

`boolean`

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

`string`

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

[`Promisable`](#../type-aliases/Promisable)\<`void`\>

***

### stopHandler()

```ts
protected stopHandler(): Promisable<void>;
```

Override in subclasses to define stop behavior. Throw an error on failure.

### Returns

[`Promisable`](#../type-aliases/Promisable)\<`void`\>

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

[`BaseEmitter`](#BaseEmitter).[`clearListeners`](BaseEmitter.md#clearlisteners)

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

### Inherited from

[`BaseEmitter`](#BaseEmitter).[`emit`](BaseEmitter.md#emit)

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

### Inherited from

[`BaseEmitter`](#BaseEmitter).[`emitSerial`](BaseEmitter.md#emitserial)

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

[`BaseEmitter`](#BaseEmitter).[`listenerCount`](BaseEmitter.md#listenercount)

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

### Inherited from

[`BaseEmitter`](#BaseEmitter).[`off`](BaseEmitter.md#off)

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

### Inherited from

[`BaseEmitter`](#BaseEmitter).[`offAny`](BaseEmitter.md#offany)

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

[`EventListener`](#../type-aliases/EventListener)\<`TEventData`\[`TEventName`\]\>

### Returns

```ts
(): void;
```

#### Returns

`void`

### Inherited from

[`BaseEmitter`](#BaseEmitter).[`on`](BaseEmitter.md#on)

***

### onAny()

```ts
onAny(listener): () => void;
```

### Parameters

#### listener

[`EventAnyListener`](#../type-aliases/EventAnyListener)

### Returns

```ts
(): void;
```

#### Returns

`void`

### Inherited from

[`BaseEmitter`](#BaseEmitter).[`onAny`](BaseEmitter.md#onany)

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

[`EventListener`](#../type-aliases/EventListener)\<`TEventData`\[`TEventName`\]\>

### Returns

```ts
(): void;
```

#### Returns

`void`

### Inherited from

[`BaseEmitter`](#BaseEmitter).[`once`](BaseEmitter.md#once)

  ### <a id="AbstractCreatableWithFactory"></a>AbstractCreatableWithFactory

[**@xylabs/sdk-js**](#../README)

***

Extends AbstractCreatable with a static `factory` method for creating
pre-configured CreatableFactory instances.

## Extends

- [`AbstractCreatable`](#AbstractCreatable)\<`TParams`, `TEventData`\>

## Type Parameters

### TParams

`TParams` *extends* [`CreatableParams`](#../interfaces/CreatableParams) = [`CreatableParams`](#../interfaces/CreatableParams)

### TEventData

`TEventData` *extends* [`EventData`](#../type-aliases/EventData) = [`EventData`](#../type-aliases/EventData)

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

[`Logger`](#../interfaces/Logger) \| `undefined`

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

[`BaseClassName`](#../type-aliases/BaseClassName)

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

[`BaseClassName`](#../type-aliases/BaseClassName)

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

`Record`\<[`BaseClassName`](#../type-aliases/BaseClassName), `number`\>

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

`T` *extends* [`CreatableInstance`](#../interfaces/CreatableInstance)\<[`CreatableParams`](#../interfaces/CreatableParams), [`EventData`](#../type-aliases/EventData)\>

### Parameters

#### this

[`Creatable`](#../interfaces/Creatable)\<`T`\>

#### inParams?

`Partial`\<`T`\[`"params"`\]\>

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

`T` *extends* [`CreatableInstance`](#../interfaces/CreatableInstance)\<[`CreatableParams`](#../interfaces/CreatableParams), [`EventData`](#../type-aliases/EventData)\>

### Parameters

#### this

[`Creatable`](#../interfaces/Creatable)\<`T`\>

#### instance

`T`

The newly constructed instance

### Returns

[`Promisable`](#../type-aliases/Promisable)\<`T`\>

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

`T` *extends* [`CreatableInstance`](#../interfaces/CreatableInstance)\<[`CreatableParams`](#../interfaces/CreatableParams), [`EventData`](#../type-aliases/EventData)\>

### Parameters

#### this

[`Creatable`](#../interfaces/Creatable)\<`T`\>

#### params?

`Partial`\<`T`\[`"params"`\]\>

The raw partial params provided to `create`

### Returns

[`Promisable`](#../type-aliases/Promisable)\<`T`\[`"params"`\]\>

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

[`Promisable`](#../type-aliases/Promisable)\<`void`\>

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

[`SpanConfig`](#../interfaces/SpanConfig)

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

`boolean`

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

`string`

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

[`Promisable`](#../type-aliases/Promisable)\<`void`\>

### Inherited from

[`AbstractCreatable`](#AbstractCreatable).[`startHandler`](AbstractCreatable.md#starthandler)

***

### stopHandler()

```ts
protected stopHandler(): Promisable<void>;
```

Override in subclasses to define stop behavior. Throw an error on failure.

### Returns

[`Promisable`](#../type-aliases/Promisable)\<`void`\>

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

`T` *extends* [`CreatableInstance`](#../interfaces/CreatableInstance)\<[`CreatableParams`](#../interfaces/CreatableParams), [`EventData`](#../type-aliases/EventData)\>

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

`TEventArgs` *extends* [`EventArgs`](#../type-aliases/EventArgs) = `TEventData`\[`TEventName`\]

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

`TEventArgs` *extends* [`EventArgs`](#../type-aliases/EventArgs) = `TEventData`\[`TEventName`\]

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

[`EventListener`](#../type-aliases/EventListener)\<`TEventData`\[`TEventName`\]\>

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

[`EventAnyListener`](#../type-aliases/EventAnyListener)

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

[`EventListener`](#../type-aliases/EventListener)\<`TEventData`\[`TEventName`\]\>

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

[`EventAnyListener`](#../type-aliases/EventAnyListener)

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

[`EventListener`](#../type-aliases/EventListener)\<`TEventData`\[`TEventName`\]\>

### Returns

```ts
(): void;
```

#### Returns

`void`

### Inherited from

[`AbstractCreatable`](#AbstractCreatable).[`once`](AbstractCreatable.md#once)

  ### <a id="ApiClient"></a>ApiClient

[**@xylabs/sdk-js**](#../README)

***

## Constructors

### Constructor

```ts
new ApiClient(token?, stage?): ApiClient;
```

### Parameters

#### token?

`string` | `null`

#### stage?

[`ApiStage`](#../type-aliases/ApiStage)

### Returns

`ApiClient`

## Properties

### stage?

```ts
protected optional stage: ApiStage;
```

***

### token?

```ts
protected optional token: string | null;
```

## Methods

### endPoint()

```ts
abstract endPoint(): string;
```

### Returns

`string`

  ### <a id="ApiEndpoint"></a>ApiEndpoint

[**@xylabs/sdk-js**](#../README)

***

## Type Parameters

### T

`T`

## Constructors

### Constructor

```ts
new ApiEndpoint<T>(config, path): ApiEndpoint<T>;
```

### Parameters

#### config

[`ApiConfig`](#../interfaces/ApiConfig)

#### path

`string`

### Returns

`ApiEndpoint`\<`T`\>

## Accessors

### value

### Get Signature

```ts
get value(): T | undefined;
```

#### Returns

`T` \| `undefined`

## Methods

### fetch()

```ts
fetch(): Promise<T>;
```

### Returns

`Promise`\<`T`\>

***

### get()

```ts
get(): Promise<T | NonNullable<T>>;
```

### Returns

`Promise`\<`T` \| `NonNullable`\<`T`\>\>

***

### insert()

```ts
insert(value): Promise<T>;
```

### Parameters

#### value

`T`

### Returns

`Promise`\<`T`\>

  ### <a id="AxiosJson"></a>AxiosJson

[**@xylabs/sdk-js**](#../README)

***

## Deprecated

use axiosJsonConfig instead

## Extends

- `Axios`

## Constructors

### Constructor

```ts
new AxiosJson(config?): AxiosJson;
```

### Parameters

#### config?

`RawAxiosJsonRequestConfig`

### Returns

`AxiosJson`

### Overrides

```ts
Axios.constructor
```

## Methods

### ~~axiosConfig()~~

```ts
static axiosConfig(config?): RawAxiosJsonRequestConfig;
```

### Parameters

#### config?

`RawAxiosJsonRequestConfig`

### Returns

`RawAxiosJsonRequestConfig`

***

### ~~create()~~

```ts
static create(config?): Axios;
```

### Parameters

#### config?

`RawAxiosJsonRequestConfig`

### Returns

`Axios`

  ### <a id="Base"></a>Base

[**@xylabs/sdk-js**](#../README)

***

## Extended by

- [`UniqueBase`](#UniqueBase)
- [`BaseEmitter`](#BaseEmitter)
- [`Events`](#Events)

## Type Parameters

### TParams

`TParams` *extends* [`BaseParams`](#../type-aliases/BaseParams) = [`BaseParams`](#../type-aliases/BaseParams)

## Constructors

### Constructor

```ts
new Base<TParams>(params): Base<TParams>;
```

### Parameters

#### params

[`BaseParams`](#../type-aliases/BaseParams)\<`TParams`\>

### Returns

`Base`\<`TParams`\>

## Properties

### defaultLogger?

```ts
static optional defaultLogger: Logger;
```

***

### globalInstances

```ts
readonly static globalInstances: Record<BaseClassName, WeakRef<Base>[]>;
```

***

### globalInstancesCountHistory

```ts
readonly static globalInstancesCountHistory: Record<BaseClassName, number[]>;
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

***

### maxHistoryDepth

### Get Signature

```ts
get static maxHistoryDepth(): number;
```

#### Returns

`number`

***

### logger

### Get Signature

```ts
get logger(): Logger | undefined;
```

#### Returns

[`Logger`](#../interfaces/Logger) \| `undefined`

***

### meter

### Get Signature

```ts
get meter(): Meter | undefined;
```

#### Returns

`Meter` \| `undefined`

***

### params

### Get Signature

```ts
get params(): BaseParams<TParams>;
```

#### Returns

[`BaseParams`](#../type-aliases/BaseParams)\<`TParams`\>

***

### tracer

### Get Signature

```ts
get tracer(): Tracer | undefined;
```

#### Returns

`Tracer` \| `undefined`

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

### Call Signature

```ts
static gc(className): void;
```

#### Parameters

##### className

[`BaseClassName`](#../type-aliases/BaseClassName)

#### Returns

`void`

***

### instanceCount()

```ts
static instanceCount(className): number;
```

### Parameters

#### className

[`BaseClassName`](#../type-aliases/BaseClassName)

### Returns

`number`

***

### instanceCounts()

```ts
static instanceCounts(): Record<BaseClassName, number>;
```

### Returns

`Record`\<[`BaseClassName`](#../type-aliases/BaseClassName), `number`\>

***

### startHistory()

```ts
static startHistory(): void;
```

### Returns

`void`

***

### stopHistory()

```ts
static stopHistory(): void;
```

### Returns

`void`

  ### <a id="BaseEmitter"></a>BaseEmitter

[**@xylabs/sdk-js**](#../README)

***

## Extends

- [`Base`](#Base)\<`TParams`\>

## Extended by

- [`AbstractCreatable`](#AbstractCreatable)

## Type Parameters

### TParams

`TParams` *extends* [`BaseParams`](#../type-aliases/BaseParams) = [`BaseParams`](#../type-aliases/BaseParams)

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

[`BaseParams`](#../type-aliases/BaseParams)\<`TParams`\>

### Returns

`BaseEmitter`\<`TParams`, `TEventData`\>

### Overrides

[`Base`](#Base).[`constructor`](Base.md#constructor)

## Properties

### defaultLogger?

```ts
static optional defaultLogger: Logger;
```

### Inherited from

[`Base`](#Base).[`defaultLogger`](Base.md#defaultlogger)

***

### globalInstances

```ts
readonly static globalInstances: Record<BaseClassName, WeakRef<Base>[]>;
```

### Inherited from

[`Base`](#Base).[`globalInstances`](Base.md#globalinstances)

***

### globalInstancesCountHistory

```ts
readonly static globalInstancesCountHistory: Record<BaseClassName, number[]>;
```

### Inherited from

[`Base`](#Base).[`globalInstancesCountHistory`](Base.md#globalinstancescounthistory)

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

[`Base`](#Base).[`historyInterval`](Base.md#historyinterval)

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

[`Base`](#Base).[`historyTime`](Base.md#historytime)

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

[`Base`](#Base).[`maxGcFrequency`](Base.md#maxgcfrequency)

***

### maxHistoryDepth

### Get Signature

```ts
get static maxHistoryDepth(): number;
```

#### Returns

`number`

### Inherited from

[`Base`](#Base).[`maxHistoryDepth`](Base.md#maxhistorydepth)

***

### logger

### Get Signature

```ts
get logger(): Logger | undefined;
```

#### Returns

[`Logger`](#../interfaces/Logger) \| `undefined`

### Inherited from

[`Base`](#Base).[`logger`](Base.md#logger)

***

### meter

### Get Signature

```ts
get meter(): Meter | undefined;
```

#### Returns

`Meter` \| `undefined`

### Inherited from

[`Base`](#Base).[`meter`](Base.md#meter)

***

### params

### Get Signature

```ts
get params(): BaseParams<TParams>;
```

#### Returns

[`BaseParams`](#../type-aliases/BaseParams)\<`TParams`\>

### Inherited from

[`Base`](#Base).[`params`](Base.md#params)

***

### tracer

### Get Signature

```ts
get tracer(): Tracer | undefined;
```

#### Returns

`Tracer` \| `undefined`

### Inherited from

[`Base`](#Base).[`tracer`](Base.md#tracer)

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

[`Base`](#Base).[`gc`](Base.md#gc)

### Call Signature

```ts
static gc(className): void;
```

#### Parameters

##### className

[`BaseClassName`](#../type-aliases/BaseClassName)

#### Returns

`void`

#### Inherited from

[`Base`](#Base).[`gc`](Base.md#gc)

***

### instanceCount()

```ts
static instanceCount(className): number;
```

### Parameters

#### className

[`BaseClassName`](#../type-aliases/BaseClassName)

### Returns

`number`

### Inherited from

[`Base`](#Base).[`instanceCount`](Base.md#instancecount)

***

### instanceCounts()

```ts
static instanceCounts(): Record<BaseClassName, number>;
```

### Returns

`Record`\<[`BaseClassName`](#../type-aliases/BaseClassName), `number`\>

### Inherited from

[`Base`](#Base).[`instanceCounts`](Base.md#instancecounts)

***

### startHistory()

```ts
static startHistory(): void;
```

### Returns

`void`

### Inherited from

[`Base`](#Base).[`startHistory`](Base.md#starthistory)

***

### stopHistory()

```ts
static stopHistory(): void;
```

### Returns

`void`

### Inherited from

[`Base`](#Base).[`stopHistory`](Base.md#stophistory)

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
on<TEventName>(eventNames, listener): () => void;
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
(): void;
```

#### Returns

`void`

### Implementation of

[`EventEmitter`](#../interfaces/EventEmitter).[`on`](../interfaces/EventEmitter.md#on)

***

### onAny()

```ts
onAny(listener): () => void;
```

### Parameters

#### listener

[`EventAnyListener`](#../type-aliases/EventAnyListener)

### Returns

```ts
(): void;
```

#### Returns

`void`

### Implementation of

[`EventEmitter`](#../interfaces/EventEmitter).[`onAny`](../interfaces/EventEmitter.md#onany)

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

[`EventListener`](#../type-aliases/EventListener)\<`TEventData`\[`TEventName`\]\>

### Returns

```ts
(): void;
```

#### Returns

`void`

### Implementation of

[`EventEmitter`](#../interfaces/EventEmitter).[`once`](../interfaces/EventEmitter.md#once)

  ### <a id="ConsoleLogger"></a>ConsoleLogger

[**@xylabs/sdk-js**](#../README)

***

Interface to handle overlap between Winston &
`console` with as much congruency as possible.

## Extends

- [`LevelLogger`](#LevelLogger)

## Constructors

### Constructor

```ts
new ConsoleLogger(level?): ConsoleLogger;
```

### Parameters

#### level?

[`LogLevelValue`](#../type-aliases/LogLevelValue)

### Returns

`ConsoleLogger`

### Overrides

[`LevelLogger`](#LevelLogger).[`constructor`](LevelLogger.md#constructor)

## Properties

### level

```ts
readonly level: LogLevelValue;
```

### Inherited from

[`LevelLogger`](#LevelLogger).[`level`](LevelLogger.md#level)

***

### logger

```ts
readonly logger: Logger;
```

### Inherited from

[`LevelLogger`](#LevelLogger).[`logger`](LevelLogger.md#logger)

## Accessors

### debug

### Get Signature

```ts
get debug(): LogFunction;
```

#### Returns

[`LogFunction`](#../type-aliases/LogFunction)

### Inherited from

[`LevelLogger`](#LevelLogger).[`debug`](LevelLogger.md#debug)

***

### error

### Get Signature

```ts
get error(): LogFunction;
```

#### Returns

[`LogFunction`](#../type-aliases/LogFunction)

### Inherited from

[`LevelLogger`](#LevelLogger).[`error`](LevelLogger.md#error)

***

### info

### Get Signature

```ts
get info(): LogFunction;
```

#### Returns

[`LogFunction`](#../type-aliases/LogFunction)

### Inherited from

[`LevelLogger`](#LevelLogger).[`info`](LevelLogger.md#info)

***

### log

### Get Signature

```ts
get log(): LogFunction;
```

#### Returns

[`LogFunction`](#../type-aliases/LogFunction)

### Inherited from

[`LevelLogger`](#LevelLogger).[`log`](LevelLogger.md#log)

***

### trace

### Get Signature

```ts
get trace(): LogFunction;
```

#### Returns

[`LogFunction`](#../type-aliases/LogFunction)

### Inherited from

[`LevelLogger`](#LevelLogger).[`trace`](LevelLogger.md#trace)

***

### warn

### Get Signature

```ts
get warn(): LogFunction;
```

#### Returns

[`LogFunction`](#../type-aliases/LogFunction)

### Inherited from

[`LevelLogger`](#LevelLogger).[`warn`](LevelLogger.md#warn)

  ### <a id="EthAddressWrapper"></a>EthAddressWrapper

[**@xylabs/sdk-js**](#../README)

***

## Constructors

### Constructor

```ts
protected new EthAddressWrapper(address): EthAddressWrapper;
```

### Parameters

#### address

`bigint`

### Returns

`EthAddressWrapper`

## Methods

### fromString()

```ts
static fromString(value?, base?): EthAddressWrapper | undefined;
```

### Parameters

#### value?

`string`

#### base?

`number`

### Returns

`EthAddressWrapper` \| `undefined`

***

### parse()

```ts
static parse(value, base?): EthAddressWrapper | undefined;
```

### Parameters

#### value

`unknown`

#### base?

`number`

### Returns

`EthAddressWrapper` \| `undefined`

***

### validate()

```ts
static validate(address): boolean;
```

### Parameters

#### address

`string`

### Returns

`boolean`

***

### equals()

```ts
equals(address?): boolean;
```

### Parameters

#### address?

`string` | `EthAddressWrapper` | `null`

### Returns

`boolean`

***

### toBigNumber()

```ts
toBigNumber(): bigint;
```

### Returns

`bigint`

***

### toHex()

```ts
toHex(): string;
```

### Returns

`string`

***

### toJSON()

```ts
toJSON(): string;
```

### Returns

`string`

***

### toLowerCaseString()

```ts
toLowerCaseString(): string;
```

### Returns

`string`

***

### toShortString()

```ts
toShortString(length?): string;
```

### Parameters

#### length?

`number`

### Returns

`string`

***

### toString()

```ts
toString(checksum?, chainId?): string;
```

### Parameters

#### checksum?

`boolean`

#### chainId?

`string`

### Returns

`string`

***

### validate()

```ts
validate(): boolean;
```

### Returns

`boolean`

  ### <a id="Events"></a>Events

[**@xylabs/sdk-js**](#../README)

***

## Extends

- [`Base`](#Base)\<[`EventsParams`](#../type-aliases/EventsParams)\>

## Type Parameters

### TEventData

`TEventData` *extends* [`EventData`](#../type-aliases/EventData) = [`EventData`](#../type-aliases/EventData)

## Implements

- [`EventEmitter`](#../interfaces/EventEmitter)\<`TEventData`\>

## Constructors

### Constructor

```ts
new Events<TEventData>(params?): Events<TEventData>;
```

### Parameters

#### params?

[`EventsParams`](#../type-aliases/EventsParams)

### Returns

`Events`\<`TEventData`\>

### Overrides

[`Base`](#Base).[`constructor`](Base.md#constructor)

## Properties

### defaultLogger?

```ts
static optional defaultLogger: Logger;
```

### Inherited from

[`Base`](#Base).[`defaultLogger`](Base.md#defaultlogger)

***

### globalInstances

```ts
readonly static globalInstances: Record<BaseClassName, WeakRef<Base>[]>;
```

### Inherited from

[`Base`](#Base).[`globalInstances`](Base.md#globalinstances)

***

### globalInstancesCountHistory

```ts
readonly static globalInstancesCountHistory: Record<BaseClassName, number[]>;
```

### Inherited from

[`Base`](#Base).[`globalInstancesCountHistory`](Base.md#globalinstancescounthistory)

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

[`Base`](#Base).[`historyInterval`](Base.md#historyinterval)

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

[`Base`](#Base).[`historyTime`](Base.md#historytime)

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

[`Base`](#Base).[`maxGcFrequency`](Base.md#maxgcfrequency)

***

### maxHistoryDepth

### Get Signature

```ts
get static maxHistoryDepth(): number;
```

#### Returns

`number`

### Inherited from

[`Base`](#Base).[`maxHistoryDepth`](Base.md#maxhistorydepth)

***

### logger

### Get Signature

```ts
get logger(): Logger | undefined;
```

#### Returns

[`Logger`](#../interfaces/Logger) \| `undefined`

### Inherited from

[`Base`](#Base).[`logger`](Base.md#logger)

***

### meter

### Get Signature

```ts
get meter(): Meter | undefined;
```

#### Returns

`Meter` \| `undefined`

### Inherited from

[`Base`](#Base).[`meter`](Base.md#meter)

***

### params

### Get Signature

```ts
get params(): BaseParams<TParams>;
```

#### Returns

[`BaseParams`](#../type-aliases/BaseParams)\<`TParams`\>

### Inherited from

[`Base`](#Base).[`params`](Base.md#params)

***

### tracer

### Get Signature

```ts
get tracer(): Tracer | undefined;
```

#### Returns

`Tracer` \| `undefined`

### Inherited from

[`Base`](#Base).[`tracer`](Base.md#tracer)

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
get debug(): DebugOptions | undefined;
```

#### Returns

[`DebugOptions`](#../type-aliases/DebugOptions) \| `undefined`

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

[`Base`](#Base).[`gc`](Base.md#gc)

### Call Signature

```ts
static gc(className): void;
```

#### Parameters

##### className

[`BaseClassName`](#../type-aliases/BaseClassName)

#### Returns

`void`

#### Inherited from

[`Base`](#Base).[`gc`](Base.md#gc)

***

### instanceCount()

```ts
static instanceCount(className): number;
```

### Parameters

#### className

[`BaseClassName`](#../type-aliases/BaseClassName)

### Returns

`number`

### Inherited from

[`Base`](#Base).[`instanceCount`](Base.md#instancecount)

***

### instanceCounts()

```ts
static instanceCounts(): Record<BaseClassName, number>;
```

### Returns

`Record`\<[`BaseClassName`](#../type-aliases/BaseClassName), `number`\>

### Inherited from

[`Base`](#Base).[`instanceCounts`](Base.md#instancecounts)

***

### startHistory()

```ts
static startHistory(): void;
```

### Returns

`void`

### Inherited from

[`Base`](#Base).[`startHistory`](Base.md#starthistory)

***

### stopHistory()

```ts
static stopHistory(): void;
```

### Returns

`void`

### Inherited from

[`Base`](#Base).[`stopHistory`](Base.md#stophistory)

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
emitMetaEvent<TEventName>(eventName, eventArgs): Promise<boolean | undefined>;
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

`Promise`\<`boolean` \| `undefined`\>

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
   filter?): () => void;
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
(): void;
```

#### Returns

`void`

### Implementation of

[`EventEmitter`](#../interfaces/EventEmitter).[`on`](../interfaces/EventEmitter.md#on)

***

### onAny()

```ts
onAny(listener): () => void;
```

### Parameters

#### listener

[`EventAnyListener`](#../type-aliases/EventAnyListener)

### Returns

```ts
(): void;
```

#### Returns

`void`

### Implementation of

[`EventEmitter`](#../interfaces/EventEmitter).[`onAny`](../interfaces/EventEmitter.md#onany)

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

[`EventListener`](#../type-aliases/EventListener)\<`TEventData`\[`TEventName`\]\>

### Returns

```ts
(): void;
```

#### Returns

`void`

### Implementation of

[`EventEmitter`](#../interfaces/EventEmitter).[`once`](../interfaces/EventEmitter.md#once)

  ### <a id="Factory"></a>Factory

[**@xylabs/sdk-js**](#../README)

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

[`Labels`](#../interfaces/Labels)

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

`T` *extends* [`CreatableInstance`](#../interfaces/CreatableInstance)\<[`CreatableParams`](#../interfaces/CreatableParams), [`EventData`](#../type-aliases/EventData)\>

### Parameters

#### creatableModule

[`Creatable`](#../interfaces/Creatable)\<`T`\>

The Creatable class to wrap

#### params?

`Partial`\<`T`\[`"params"`\]\>

Default parameters for new instances

#### labels?

[`Labels`](#../interfaces/Labels)

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

  ### <a id="ForgetPromise"></a>ForgetPromise

[**@xylabs/sdk-js**](#../README)

***

## Extends

- `ForgetPromise`

## Constructors

### Constructor

```ts
new ForgetPromise(): ForgetPromiseNode;
```

### Returns

`ForgetPromiseNode`

### Inherited from

```ts
ForgetPromise.constructor
```

## Properties

### activeForgets

```ts
static activeForgets: number;
```

### Inherited from

```ts
ForgetPromise.activeForgets
```

***

### exceptedForgets

```ts
static exceptedForgets: number;
```

### Inherited from

```ts
ForgetPromise.exceptedForgets
```

***

### logger

```ts
static logger: Logger;
```

### Inherited from

```ts
ForgetPromise.logger
```

## Accessors

### active

### Get Signature

```ts
get static active(): boolean;
```

#### Returns

`boolean`

### Inherited from

```ts
ForgetPromise.active
```

## Methods

### awaitInactive()

```ts
static awaitInactive(interval?, timeout?): Promise<number>;
```

### Parameters

#### interval?

`number`

#### timeout?

`number`

### Returns

`Promise`\<`number`\>

### Inherited from

```ts
ForgetPromise.awaitInactive
```

***

### exceptionHandler()

```ts
static exceptionHandler(
   error, 
   config, 
   externalStackTrace?): void;
```

### Parameters

#### error

`Error`

#### config

[`ForgetNodeConfig`](#../interfaces/ForgetNodeConfig)

#### externalStackTrace?

`string`

### Returns

`void`

### Overrides

```ts
ForgetPromise.exceptionHandler
```

***

### forget()

```ts
static forget<T>(promise, config?): void;
```

Used to explicitly launch an async function (or Promise) with awaiting it

### Type Parameters

#### T

`T`

### Parameters

#### promise

[`Promisable`](#../type-aliases/Promisable)\<`T`\>

The promise to forget

#### config?

[`ForgetNodeConfig`](#../interfaces/ForgetNodeConfig)\<`T`\>

Configuration of forget settings

### Returns

`void`

### Overrides

```ts
ForgetPromise.forget
```

***

### timeoutHandler()

```ts
static timeoutHandler(
   time, 
   config, 
   externalStackTrace?): void;
```

### Parameters

#### time

`number`

#### config

[`ForgetNodeConfig`](#../interfaces/ForgetNodeConfig)

#### externalStackTrace?

`string`

### Returns

`void`

### Overrides

```ts
ForgetPromise.timeoutHandler
```

  ### <a id="IdLogger"></a>IdLogger

[**@xylabs/sdk-js**](#../README)

***

Interface to handle overlap between Winston &
`console` with as much congruency as possible.

## Implements

- [`Logger`](#../interfaces/Logger)

## Constructors

### Constructor

```ts
new IdLogger(logger, id?): IdLogger;
```

### Parameters

#### logger

[`Logger`](#../interfaces/Logger)

#### id?

() => `string`

### Returns

`IdLogger`

## Accessors

### id

### Set Signature

```ts
set id(id): void;
```

#### Parameters

##### id

`string`

#### Returns

`void`

## Methods

### debug()

```ts
debug(...data): void;
```

### Parameters

#### data

...`unknown`[]

### Returns

`void`

### Implementation of

```ts
Logger.debug
```

***

### error()

```ts
error(...data): void;
```

### Parameters

#### data

...`unknown`[]

### Returns

`void`

### Implementation of

```ts
Logger.error
```

***

### info()

```ts
info(...data): void;
```

### Parameters

#### data

...`unknown`[]

### Returns

`void`

### Implementation of

```ts
Logger.info
```

***

### log()

```ts
log(...data): void;
```

### Parameters

#### data

...`unknown`[]

### Returns

`void`

### Implementation of

```ts
Logger.log
```

***

### trace()

```ts
trace(...data): void;
```

### Parameters

#### data

...`unknown`[]

### Returns

`void`

### Implementation of

```ts
Logger.trace
```

***

### warn()

```ts
warn(...data): void;
```

### Parameters

#### data

...`unknown`[]

### Returns

`void`

### Implementation of

```ts
Logger.warn
```

  ### <a id="IsObjectFactory"></a>IsObjectFactory

[**@xylabs/sdk-js**](#../README)

***

## Type Parameters

### T

`T` *extends* [`TypedObject`](#../type-aliases/TypedObject)

## Constructors

### Constructor

```ts
new IsObjectFactory<T>(): IsObjectFactory<T>;
```

### Returns

`IsObjectFactory`\<`T`\>

## Methods

### create()

```ts
create(shape?, additionalChecks?): TypeCheck<T>;
```

### Parameters

#### shape?

[`ObjectTypeShape`](#../type-aliases/ObjectTypeShape)

#### additionalChecks?

[`TypeCheck`](#../type-aliases/TypeCheck)\<[`TypedObject`](#../type-aliases/TypedObject)\>[]

### Returns

[`TypeCheck`](#../type-aliases/TypeCheck)\<`T`\>

  ### <a id="LevelLogger"></a>LevelLogger

[**@xylabs/sdk-js**](#../README)

***

Interface to handle overlap between Winston &
`console` with as much congruency as possible.

## Extended by

- [`ConsoleLogger`](#ConsoleLogger)

## Implements

- [`Logger`](#../interfaces/Logger)

## Constructors

### Constructor

```ts
new LevelLogger(logger, level?): LevelLogger;
```

### Parameters

#### logger

[`Logger`](#../interfaces/Logger)

#### level?

[`LogLevelValue`](#../type-aliases/LogLevelValue)

### Returns

`LevelLogger`

## Properties

### level

```ts
readonly level: LogLevelValue;
```

***

### logger

```ts
readonly logger: Logger;
```

## Accessors

### debug

### Get Signature

```ts
get debug(): LogFunction;
```

#### Returns

[`LogFunction`](#../type-aliases/LogFunction)

### Implementation of

[`Logger`](#../interfaces/Logger).[`debug`](../interfaces/Logger.md#debug)

***

### error

### Get Signature

```ts
get error(): LogFunction;
```

#### Returns

[`LogFunction`](#../type-aliases/LogFunction)

### Implementation of

[`Logger`](#../interfaces/Logger).[`error`](../interfaces/Logger.md#error)

***

### info

### Get Signature

```ts
get info(): LogFunction;
```

#### Returns

[`LogFunction`](#../type-aliases/LogFunction)

### Implementation of

[`Logger`](#../interfaces/Logger).[`info`](../interfaces/Logger.md#info)

***

### log

### Get Signature

```ts
get log(): LogFunction;
```

#### Returns

[`LogFunction`](#../type-aliases/LogFunction)

### Implementation of

[`Logger`](#../interfaces/Logger).[`log`](../interfaces/Logger.md#log)

***

### trace

### Get Signature

```ts
get trace(): LogFunction;
```

#### Returns

[`LogFunction`](#../type-aliases/LogFunction)

### Implementation of

[`Logger`](#../interfaces/Logger).[`trace`](../interfaces/Logger.md#trace)

***

### warn

### Get Signature

```ts
get warn(): LogFunction;
```

#### Returns

[`LogFunction`](#../type-aliases/LogFunction)

### Implementation of

[`Logger`](#../interfaces/Logger).[`warn`](../interfaces/Logger.md#warn)

  ### <a id="ObjectWrapper"></a>ObjectWrapper

[**@xylabs/sdk-js**](#../README)

***

## Extended by

- [`ValidatorBase`](#ValidatorBase)

## Type Parameters

### T

`T` *extends* [`EmptyObject`](#../type-aliases/EmptyObject) = [`EmptyObject`](#../type-aliases/EmptyObject)

## Constructors

### Constructor

```ts
new ObjectWrapper<T>(obj): ObjectWrapper<T>;
```

### Parameters

#### obj

`T`

### Returns

`ObjectWrapper`\<`T`\>

## Properties

### obj

```ts
readonly obj: T;
```

## Accessors

### stringKeyObj

### Get Signature

```ts
get protected stringKeyObj(): StringKeyObject;
```

#### Returns

[`StringKeyObject`](#../type-aliases/StringKeyObject)

  ### <a id="PromiseEx"></a>PromiseEx

[**@xylabs/sdk-js**](#../README)

***

## Extends

- `Promise`\<`T`\>

## Type Parameters

### T

`T`

### V

`V` = `void`

## Constructors

### Constructor

```ts
new PromiseEx<T, V>(func, value?): PromiseEx<T, V>;
```

### Parameters

#### func

[`PromiseExFunc`](#../type-aliases/PromiseExFunc)\<`T`\>

#### value?

`V`

### Returns

`PromiseEx`\<`T`, `V`\>

### Overrides

```ts
Promise<T>.constructor
```

## Properties

### cancelled?

```ts
optional cancelled: boolean;
```

## Methods

### then()

```ts
then<TResult1, TResult2>(
   onfulfilled?, 
   onrejected?, 
onvalue?): Promise<TResult1 | TResult2>;
```

Attaches callbacks for the resolution and/or rejection of the Promise.

### Type Parameters

#### TResult1

`TResult1` = `T`

#### TResult2

`TResult2` = `never`

### Parameters

#### onfulfilled?

The callback to execute when the Promise is resolved.

(`value`) => `TResult1` \| `PromiseLike`\<`TResult1`\> | `null`

#### onrejected?

The callback to execute when the Promise is rejected.

(`reason`) => `TResult2` \| `PromiseLike`\<`TResult2`\> | `null`

#### onvalue?

(`value?`) => `boolean`

### Returns

`Promise`\<`TResult1` \| `TResult2`\>

A Promise for the completion of which ever callback is executed.

### Overrides

```ts
Promise.then
```

***

### value()

```ts
value(onvalue?): this;
```

### Parameters

#### onvalue?

(`value?`) => `boolean`

### Returns

`this`

  ### <a id="SilentLogger"></a>SilentLogger

[**@xylabs/sdk-js**](#../README)

***

A logger that does not log anything.
This is useful when you want to disable logging
like when running unit tests or in silent mode.
It implements the `Logger` interface but all methods
are no-op functions.

## Implements

- [`Logger`](#../interfaces/Logger)

## Constructors

### Constructor

```ts
new SilentLogger(): SilentLogger;
```

### Returns

`SilentLogger`

## Properties

### debug()

```ts
readonly debug: (..._data) => undefined;
```

### Parameters

#### \_data

...`unknown`[]

### Returns

`undefined`

### Implementation of

[`Logger`](#../interfaces/Logger).[`debug`](../interfaces/Logger.md#debug)

***

### error()

```ts
readonly error: (..._data) => undefined;
```

### Parameters

#### \_data

...`unknown`[]

### Returns

`undefined`

### Implementation of

[`Logger`](#../interfaces/Logger).[`error`](../interfaces/Logger.md#error)

***

### info()

```ts
readonly info: (..._data) => undefined;
```

### Parameters

#### \_data

...`unknown`[]

### Returns

`undefined`

### Implementation of

[`Logger`](#../interfaces/Logger).[`info`](../interfaces/Logger.md#info)

***

### log()

```ts
readonly log: (..._data) => undefined;
```

### Parameters

#### \_data

...`unknown`[]

### Returns

`undefined`

### Implementation of

[`Logger`](#../interfaces/Logger).[`log`](../interfaces/Logger.md#log)

***

### trace()

```ts
readonly trace: (..._data) => undefined;
```

### Parameters

#### \_data

...`unknown`[]

### Returns

`undefined`

### Implementation of

[`Logger`](#../interfaces/Logger).[`trace`](../interfaces/Logger.md#trace)

***

### warn()

```ts
readonly warn: (..._data) => undefined;
```

### Parameters

#### \_data

...`unknown`[]

### Returns

`undefined`

### Implementation of

[`Logger`](#../interfaces/Logger).[`warn`](../interfaces/Logger.md#warn)

  ### <a id="UniqueBase"></a>UniqueBase

[**@xylabs/sdk-js**](#../README)

***

## Extends

- [`Base`](#Base)\<`TParams`\>

## Type Parameters

### TParams

`TParams` *extends* [`BaseParams`](#../type-aliases/BaseParams) = [`BaseParams`](#../type-aliases/BaseParams)

## Constructors

### Constructor

```ts
new UniqueBase<TParams>(params): UniqueBase<TParams>;
```

### Parameters

#### params

[`BaseParams`](#../type-aliases/BaseParams)\<`TParams`\>

### Returns

`UniqueBase`\<`TParams`\>

### Overrides

[`Base`](#Base).[`constructor`](Base.md#constructor)

## Properties

### defaultLogger?

```ts
static optional defaultLogger: Logger;
```

### Inherited from

[`Base`](#Base).[`defaultLogger`](Base.md#defaultlogger)

***

### globalInstances

```ts
readonly static globalInstances: Record<BaseClassName, WeakRef<Base>[]>;
```

### Inherited from

[`Base`](#Base).[`globalInstances`](Base.md#globalinstances)

***

### globalInstancesCountHistory

```ts
readonly static globalInstancesCountHistory: Record<BaseClassName, number[]>;
```

### Inherited from

[`Base`](#Base).[`globalInstancesCountHistory`](Base.md#globalinstancescounthistory)

***

### uniqueDomain

```ts
readonly static uniqueDomain: "xy" = "xy";
```

***

### uniqueName

```ts
readonly static uniqueName: string;
```

***

### uniqueNameXyo

```ts
readonly static uniqueNameXyo: string;
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

[`Base`](#Base).[`historyInterval`](Base.md#historyinterval)

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

[`Base`](#Base).[`historyTime`](Base.md#historytime)

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

[`Base`](#Base).[`maxGcFrequency`](Base.md#maxgcfrequency)

***

### maxHistoryDepth

### Get Signature

```ts
get static maxHistoryDepth(): number;
```

#### Returns

`number`

### Inherited from

[`Base`](#Base).[`maxHistoryDepth`](Base.md#maxhistorydepth)

***

### logger

### Get Signature

```ts
get logger(): Logger | undefined;
```

#### Returns

[`Logger`](#../interfaces/Logger) \| `undefined`

### Inherited from

[`Base`](#Base).[`logger`](Base.md#logger)

***

### meter

### Get Signature

```ts
get meter(): Meter | undefined;
```

#### Returns

`Meter` \| `undefined`

### Inherited from

[`Base`](#Base).[`meter`](Base.md#meter)

***

### params

### Get Signature

```ts
get params(): BaseParams<TParams>;
```

#### Returns

[`BaseParams`](#../type-aliases/BaseParams)\<`TParams`\>

### Inherited from

[`Base`](#Base).[`params`](Base.md#params)

***

### tracer

### Get Signature

```ts
get tracer(): Tracer | undefined;
```

#### Returns

`Tracer` \| `undefined`

### Inherited from

[`Base`](#Base).[`tracer`](Base.md#tracer)

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

[`Base`](#Base).[`gc`](Base.md#gc)

### Call Signature

```ts
static gc(className): void;
```

#### Parameters

##### className

[`BaseClassName`](#../type-aliases/BaseClassName)

#### Returns

`void`

#### Inherited from

[`Base`](#Base).[`gc`](Base.md#gc)

***

### instanceCount()

```ts
static instanceCount(className): number;
```

### Parameters

#### className

[`BaseClassName`](#../type-aliases/BaseClassName)

### Returns

`number`

### Inherited from

[`Base`](#Base).[`instanceCount`](Base.md#instancecount)

***

### instanceCounts()

```ts
static instanceCounts(): Record<BaseClassName, number>;
```

### Returns

`Record`\<[`BaseClassName`](#../type-aliases/BaseClassName), `number`\>

### Inherited from

[`Base`](#Base).[`instanceCounts`](Base.md#instancecounts)

***

### startHistory()

```ts
static startHistory(): void;
```

### Returns

`void`

### Inherited from

[`Base`](#Base).[`startHistory`](Base.md#starthistory)

***

### stopHistory()

```ts
static stopHistory(): void;
```

### Returns

`void`

### Inherited from

[`Base`](#Base).[`stopHistory`](Base.md#stophistory)

  ### <a id="ValidatorBase"></a>ValidatorBase

[**@xylabs/sdk-js**](#../README)

***

## Extends

- [`ObjectWrapper`](#ObjectWrapper)\<`Partial`\<`T`\>\>

## Type Parameters

### T

`T` *extends* [`EmptyObject`](#../type-aliases/EmptyObject) = [`AnyObject`](#../type-aliases/AnyObject)

## Implements

- [`Validator`](#../interfaces/Validator)\<`T`\>

## Constructors

### Constructor

```ts
new ValidatorBase<T>(obj): ValidatorBase<T>;
```

### Parameters

#### obj

`T`

### Returns

`ValidatorBase`\<`T`\>

### Inherited from

[`ObjectWrapper`](#ObjectWrapper).[`constructor`](ObjectWrapper.md#constructor)

## Properties

### obj

```ts
readonly obj: T;
```

### Inherited from

[`ObjectWrapper`](#ObjectWrapper).[`obj`](ObjectWrapper.md#obj)

## Accessors

### stringKeyObj

### Get Signature

```ts
get protected stringKeyObj(): StringKeyObject;
```

#### Returns

[`StringKeyObject`](#../type-aliases/StringKeyObject)

### Inherited from

[`ObjectWrapper`](#ObjectWrapper).[`stringKeyObj`](ObjectWrapper.md#stringkeyobj)

## Methods

### validate()

```ts
abstract validate(payload): Promisable<Error[]>;
```

### Parameters

#### payload

`T`

### Returns

[`Promisable`](#../type-aliases/Promisable)\<`Error`[]\>

### Implementation of

[`Validator`](#../interfaces/Validator).[`validate`](../interfaces/Validator.md#validate)

  ### <a id="XyConsoleSpanExporter"></a>XyConsoleSpanExporter

[**@xylabs/sdk-js**](#../README)

***

## Extends

- `ConsoleSpanExporter`

## Constructors

### Constructor

```ts
new XyConsoleSpanExporter(logLevel?, logger?): XyConsoleSpanExporter;
```

### Parameters

#### logLevel?

`number`

#### logger?

[`Logger`](#../interfaces/Logger)

### Returns

`XyConsoleSpanExporter`

### Overrides

```ts
ConsoleSpanExporter.constructor
```

## Properties

### durationToLogLevel

```ts
readonly static durationToLogLevel: number[];
```

***

### logLevelToChalkColor

```ts
readonly static logLevelToChalkColor: ChalkInstance[];
```

***

### logger

```ts
logger: Logger;
```

## Accessors

### logLevel

### Get Signature

```ts
get logLevel(): number;
```

#### Returns

`number`

## Methods

### export()

```ts
export(spans): void;
```

Export spans.

### Parameters

#### spans

`ReadableSpan`[]

### Returns

`void`

### Overrides

```ts
ConsoleSpanExporter.export
```

***

### logColor()

```ts
logColor(level): ChalkInstance;
```

### Parameters

#### level

`number`

### Returns

`ChalkInstance`

***

### spanLevel()

```ts
spanLevel(span): number;
```

### Parameters

#### span

`ReadableSpan`

### Returns

`number`

### functions

  ### <a id="asAddress"></a>asAddress

[**@xylabs/sdk-js**](#../README)

***

## Call Signature

```ts
function asAddress(value): BrandedAddress | undefined;
```

### Parameters

### value

`unknown`

### Returns

`BrandedAddress` \| `undefined`

## Call Signature

```ts
function asAddress(value, assert): BrandedAddress;
```

### Parameters

### value

`unknown`

### assert

[`AssertConfig`](#../type-aliases/AssertConfig)

### Returns

`BrandedAddress`

  ### <a id="asAddressV2"></a>asAddressV2

[**@xylabs/sdk-js**](#../README)

***

```ts
function asAddressV2(value, assert?): BrandedAddress | undefined;
```

**`Alpha`**

## Parameters

### value

`unknown`

### assert?

`boolean`

## Returns

`BrandedAddress` \| `undefined`

  ### <a id="asEthAddress"></a>asEthAddress

[**@xylabs/sdk-js**](#../README)

***

## Call Signature

```ts
function asEthAddress(value): EthAddress | undefined;
```

### Parameters

### value

`unknown`

### Returns

[`EthAddress`](#../type-aliases/EthAddress) \| `undefined`

## Call Signature

```ts
function asEthAddress(value, assert): EthAddress;
```

### Parameters

### value

`unknown`

### assert

[`AssertConfig`](#../type-aliases/AssertConfig)

### Returns

[`EthAddress`](#../type-aliases/EthAddress)

  ### <a id="asHash"></a>asHash

[**@xylabs/sdk-js**](#../README)

***

## Call Signature

```ts
function asHash(value): BrandedHash | undefined;
```

### Parameters

### value

`unknown`

### Returns

[`BrandedHash`](#../type-aliases/BrandedHash) \| `undefined`

## Call Signature

```ts
function asHash(value, assert): BrandedHash;
```

### Parameters

### value

`unknown`

### assert

[`AssertConfig`](#../type-aliases/AssertConfig)

### Returns

[`BrandedHash`](#../type-aliases/BrandedHash)

  ### <a id="asHex"></a>asHex

[**@xylabs/sdk-js**](#../README)

***

## Call Signature

```ts
function asHex(value): BrandedHex | undefined;
```

### Parameters

### value

`unknown`

### Returns

[`BrandedHex`](#../type-aliases/BrandedHex) \| `undefined`

## Call Signature

```ts
function asHex(value, assert): BrandedHex;
```

### Parameters

### value

`unknown`

### assert

[`AssertConfig`](#../type-aliases/AssertConfig)

### Returns

[`BrandedHex`](#../type-aliases/BrandedHex)

  ### <a id="assertDefinedEx"></a>assertDefinedEx

[**@xylabs/sdk-js**](#../README)

***

## Call Signature

```ts
function assertDefinedEx<T>(expr, messageFunc?): T;
```

Asserts that a value is defined (not undefined) and returns the value.
Throws an error if the value is undefined.

### Type Parameters

### T

`T`

The type of value to check

### Parameters

### expr

Expression to be evaluated for being defined

`T` | `undefined`

### messageFunc?

`AssertExMessageFunc`\<`T`\>

Function that returns a message for the error if expression is undefined

### Returns

`T`

The value of the expression (guaranteed to be defined)

### Throws

Error with the message returned by messageFunc

### Example

```typescript
// Simple usage with a message function
const value = assertDefinedEx(possiblyUndefined, () => 'Value must be defined')

// Using with type narrowing
const config: Config | undefined = loadConfig()
const safeConfig = assertDefinedEx(config, () => 'Config failed to load')
// safeConfig is now type Config (not Config | undefined)
```

## Call Signature

```ts
function assertDefinedEx<T, R>(expr, errorFunc?): T;
```

Asserts that a value is defined (not undefined) and returns the value.
Throws a custom error if the value is undefined.

### Type Parameters

### T

`T`

The type of value to check

### R

`R` *extends* `Error`

The type of error to throw

### Parameters

### expr

Expression to be evaluated for being defined

`T` | `undefined`

### errorFunc?

`AssertExErrorFunc`\<`T`, `R`\>

Function that returns a custom error instance if expression is undefined

### Returns

`T`

The value of the expression (guaranteed to be defined)

### Throws

Custom error returned by errorFunc

### Example

```typescript
// Using with a custom error
const user = assertDefinedEx(getUser(), () => new UserNotFoundError('User not found'))
```

  ### <a id="assertEx"></a>assertEx

[**@xylabs/sdk-js**](#../README)

***

## Call Signature

```ts
function assertEx<T>(expr, messageFunc?): T;
```

Asserts that an expression is truthy and returns the value.
Throws an error if the expression is falsy.

### Type Parameters

### T

`T`

The type of value to check

### Parameters

### expr

Expression to be evaluated for truthiness

`T` | `null` | `undefined`

### messageFunc?

`AssertExMessageFunc`\<`T`\>

Function that returns a message for the error if expression is falsy

### Returns

`T`

The value of the expression (guaranteed to be truthy)

### Throws

Error with the message returned by messageFunc

### Example

```typescript
// Simple usage with a message function
const value = assertEx(possiblyFalsy, () => 'Value must be truthy')

// Using with type narrowing
const config: Config | null = loadConfig()
const safeConfig = assertEx(config, () => 'Config failed to load')
// safeConfig is now type Config (not Config | null)
```

## Call Signature

```ts
function assertEx<T, R>(expr, errorFunc?): T;
```

Asserts that an expression is truthy and returns the value.
Throws a custom error if the expression is falsy.

### Type Parameters

### T

`T`

The type of value to check

### R

`R` *extends* `Error`

The type of error to throw

### Parameters

### expr

Expression to be evaluated for truthiness

`T` | `null` | `undefined`

### errorFunc?

`AssertExErrorFunc`\<`T`, `R`\>

Function that returns a custom error instance if expression is falsy

### Returns

`T`

The value of the expression (guaranteed to be truthy)

### Throws

Custom error returned by errorFunc

### Example

```typescript
// Using with a custom error
const user = assertEx(getUser(), () => new UserNotFoundError('User not found'))
```

  ### <a id="axiosJsonConfig"></a>axiosJsonConfig

[**@xylabs/sdk-js**](#../README)

***

```ts
function axiosJsonConfig(__namedParameters?): RawAxiosJsonRequestConfig;
```

## Parameters

### \_\_namedParameters?

`RawAxiosJsonRequestConfig`\<`any`\>

## Returns

`RawAxiosJsonRequestConfig`

  ### <a id="cloneContextWithoutSpan"></a>cloneContextWithoutSpan

[**@xylabs/sdk-js**](#../README)

***

```ts
function cloneContextWithoutSpan(activeCtx, configKeys?): Context;
```

## Parameters

### activeCtx

`Context`

### configKeys?

`symbol`[]

## Returns

`Context`

  ### <a id="creatable"></a>creatable

[**@xylabs/sdk-js**](#../README)

***

```ts
function creatable<T>(): <U>(constructor) => void;
```

Class annotation to be used to decorate Modules which support
an asynchronous creation pattern

## Type Parameters

### T

`T` *extends* [`CreatableInstance`](#../interfaces/CreatableInstance)\<[`CreatableParams`](#../interfaces/CreatableParams), [`EventData`](#../type-aliases/EventData)\>

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

[**@xylabs/sdk-js**](#../README)

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

`U` *extends* [`CreatableFactory`](#../interfaces/CreatableFactory)\<[`CreatableInstance`](#../interfaces/CreatableInstance)\<[`CreatableParams`](#../interfaces/CreatableParams), [`EventData`](#../type-aliases/EventData)\>\>

### Parameters

### constructor

`U`

### Returns

`void`

  ### <a id="createDeepMerge"></a>createDeepMerge

[**@xylabs/sdk-js**](#../README)

***

```ts
function createDeepMerge(options): <T>(...objects) => MergeAll<T>;
```

Creates a deep merge function with the specified options.

## Parameters

### options

`MergeOptions`

Options for merging.

## Returns

A deep merge function configured for the specified options.

```ts
<T>(...objects): MergeAll<T>;
```

### Type Parameters

### T

`T` *extends* [`AnyObject`](#../type-aliases/AnyObject)[]

### Parameters

### objects

...`T`

### Returns

`MergeAll`\<`T`\>

  ### <a id="hexToBigInt"></a>hexToBigInt

[**@xylabs/sdk-js**](#../README)

***

```ts
function hexToBigInt(hex): bigint;
```

## Parameters

### hex

[`BrandedHex`](#../type-aliases/BrandedHex)

## Returns

`bigint`

  ### <a id="isAddressV2"></a>isAddressV2

[**@xylabs/sdk-js**](#../README)

***

```ts
function isAddressV2(value): value is BrandedAddress;
```

**`Alpha`**

## Parameters

### value

`unknown`

## Returns

`value is BrandedAddress`

  ### <a id="isArray"></a>isArray

[**@xylabs/sdk-js**](#../README)

***

## Call Signature

```ts
function isArray(value): value is readonly unknown[];
```

### Parameters

### value

`unknown`

### Returns

`value is readonly unknown[]`

## Call Signature

```ts
function isArray<T>(value): value is Extract<T, readonly unknown[]>;
```

### Type Parameters

### T

`T`

### Parameters

### value

`T`

### Returns

`value is Extract<T, readonly unknown[]>`

  ### <a id="isArrayBuffer"></a>isArrayBuffer

[**@xylabs/sdk-js**](#../README)

***

## Call Signature

```ts
function isArrayBuffer(value): value is ArrayBuffer;
```

### Parameters

### value

`unknown`

### Returns

`value is ArrayBuffer`

## Call Signature

```ts
function isArrayBuffer<T>(value): value is Extract<T, ArrayBuffer>;
```

### Type Parameters

### T

`T` *extends* `ArrayBuffer`

### Parameters

### value

`T`

### Returns

`value is Extract<T, ArrayBuffer>`

  ### <a id="isArrayBufferLike"></a>isArrayBufferLike

[**@xylabs/sdk-js**](#../README)

***

## Call Signature

```ts
function isArrayBufferLike(value): value is ArrayBufferLike;
```

### Parameters

### value

`unknown`

### Returns

`value is ArrayBufferLike`

## Call Signature

```ts
function isArrayBufferLike<T>(value): value is Extract<T, ArrayBufferLike>;
```

### Type Parameters

### T

`T` *extends* `ArrayBufferLike`

### Parameters

### value

`T`

### Returns

`value is Extract<T, ArrayBufferLike>`

  ### <a id="isArrayBufferView"></a>isArrayBufferView

[**@xylabs/sdk-js**](#../README)

***

## Call Signature

```ts
function isArrayBufferView(value): value is ArrayBufferView<ArrayBufferLike>;
```

### Parameters

### value

`unknown`

### Returns

`value is ArrayBufferView<ArrayBufferLike>`

## Call Signature

```ts
function isArrayBufferView<T>(value): value is Extract<T, ArrayBufferView<ArrayBufferLike>>;
```

### Type Parameters

### T

`T` *extends* `ArrayBufferView`\<`ArrayBufferLike`\>

### Parameters

### value

`T`

### Returns

`value is Extract<T, ArrayBufferView<ArrayBufferLike>>`

  ### <a id="isBigInt"></a>isBigInt

[**@xylabs/sdk-js**](#../README)

***

## Call Signature

```ts
function isBigInt(value): value is bigint;
```

### Parameters

### value

`unknown`

### Returns

`value is bigint`

## Call Signature

```ts
function isBigInt<T>(value): value is Extract<T, bigint>;
```

### Type Parameters

### T

`T` *extends* `bigint`

### Parameters

### value

`T`

### Returns

`value is Extract<T, bigint>`

  ### <a id="isBlob"></a>isBlob

[**@xylabs/sdk-js**](#../README)

***

## Call Signature

```ts
function isBlob(value): value is Blob;
```

### Parameters

### value

`unknown`

### Returns

`value is Blob`

## Call Signature

```ts
function isBlob<T>(value): value is Extract<T, Blob>;
```

### Type Parameters

### T

`T` *extends* `Blob`

### Parameters

### value

`T`

### Returns

`value is Extract<T, Blob>`

  ### <a id="isBoolean"></a>isBoolean

[**@xylabs/sdk-js**](#../README)

***

## Call Signature

```ts
function isBoolean(value): value is boolean;
```

### Parameters

### value

`unknown`

### Returns

`value is boolean`

## Call Signature

```ts
function isBoolean<T>(value): value is Extract<T, boolean>;
```

### Type Parameters

### T

`T` *extends* `boolean`

### Parameters

### value

`T`

### Returns

`value is Extract<T, boolean>`

  ### <a id="isDataView"></a>isDataView

[**@xylabs/sdk-js**](#../README)

***

## Call Signature

```ts
function isDataView(value): value is DataView<ArrayBufferLike>;
```

### Parameters

### value

`unknown`

### Returns

`value is DataView<ArrayBufferLike>`

## Call Signature

```ts
function isDataView<T>(value): value is Extract<T, DataView<ArrayBufferLike>>;
```

### Type Parameters

### T

`T`

### Parameters

### value

`T`

### Returns

`value is Extract<T, DataView<ArrayBufferLike>>`

  ### <a id="isDate"></a>isDate

[**@xylabs/sdk-js**](#../README)

***

## Call Signature

```ts
function isDate(value): value is Date;
```

### Parameters

### value

`unknown`

### Returns

`value is Date`

## Call Signature

```ts
function isDate<T>(value): value is Extract<T, Date>;
```

### Type Parameters

### T

`T`

### Parameters

### value

`T`

### Returns

`value is Extract<T, Date>`

  ### <a id="isDateString"></a>isDateString

[**@xylabs/sdk-js**](#../README)

***

## Call Signature

```ts
function isDateString(value): value is string;
```

### Parameters

### value

`unknown`

### Returns

`value is string`

## Call Signature

```ts
function isDateString<T>(value): value is Extract<T, string>;
```

### Type Parameters

### T

`T`

### Parameters

### value

`T`

### Returns

`value is Extract<T, string>`

  ### <a id="isDefined"></a>isDefined

[**@xylabs/sdk-js**](#../README)

***

```ts
function isDefined<T>(value): value is Exclude<T, undefined>;
```

## Type Parameters

### T

`T`

## Parameters

### value

`T`

## Returns

`value is Exclude<T, undefined>`

  ### <a id="isDefinedNotNull"></a>isDefinedNotNull

[**@xylabs/sdk-js**](#../README)

***

```ts
function isDefinedNotNull<T>(value): value is Exclude<T, null | undefined>;
```

## Type Parameters

### T

`T`

## Parameters

### value

`T`

## Returns

value is Exclude\<T, null \| undefined\>

  ### <a id="isEmpty"></a>isEmpty

[**@xylabs/sdk-js**](#../README)

***

## Call Signature

```ts
function isEmpty<T>(value): value is T;
```

### Type Parameters

### T

`T`

### Parameters

### value

`unknown`

### Returns

`value is T`

## Call Signature

```ts
function isEmpty<K, V, T>(value): value is Extract<T, Record<K, never>>;
```

### Type Parameters

### K

`K` *extends* [`RecordKey`](#../type-aliases/RecordKey)

### V

`V`

### T

`T` *extends* `Record`\<`K`, `V`\>

### Parameters

### value

`T`

### Returns

`value is Extract<T, Record<K, never>>`

## Call Signature

```ts
function isEmpty<T>(value): value is Extract<T, never[]>;
```

### Type Parameters

### T

`T` *extends* `unknown`[]

### Parameters

### value

`T`

### Returns

`value is Extract<T, never[]>`

  ### <a id="isEmptyArray"></a>isEmptyArray

[**@xylabs/sdk-js**](#../README)

***

## Call Signature

```ts
function isEmptyArray(value): value is [];
```

### Parameters

### value

`unknown`

### Returns

`value is []`

## Call Signature

```ts
function isEmptyArray<T>(value): value is Extract<T, unknown[]>;
```

### Type Parameters

### T

`T` *extends* `unknown`[]

### Parameters

### value

`T`

### Returns

`value is Extract<T, unknown[]>`

  ### <a id="isEmptyObject"></a>isEmptyObject

[**@xylabs/sdk-js**](#../README)

***

## Call Signature

```ts
function isEmptyObject(value): value is {};
```

### Parameters

### value

`unknown`

### Returns

`value is {}`

## Call Signature

```ts
function isEmptyObject<K, V, T>(value): value is Extract<T, Record<K, never>>;
```

### Type Parameters

### K

`K` *extends* [`RecordKey`](#../type-aliases/RecordKey)

### V

`V`

### T

`T` *extends* `Record`\<`K`, `V`\>

### Parameters

### value

`T`

### Returns

`value is Extract<T, Record<K, never>>`

  ### <a id="isEmptyString"></a>isEmptyString

[**@xylabs/sdk-js**](#../README)

***

## Call Signature

```ts
function isEmptyString(value): value is "";
```

### Parameters

### value

`unknown`

### Returns

`value is ""`

## Call Signature

```ts
function isEmptyString<T>(value): value is Extract<T, "">;
```

### Type Parameters

### T

`T` *extends* `string`

### Parameters

### value

`T`

### Returns

`value is Extract<T, "">`

  ### <a id="isError"></a>isError

[**@xylabs/sdk-js**](#../README)

***

## Call Signature

```ts
function isError(value): value is Error;
```

### Parameters

### value

`unknown`

### Returns

`value is Error`

## Call Signature

```ts
function isError<T>(value): value is Extract<T, Error>;
```

### Type Parameters

### T

`T`

### Parameters

### value

`T`

### Returns

`value is Extract<T, Error>`

  ### <a id="isFalsy"></a>isFalsy

[**@xylabs/sdk-js**](#../README)

***

## Call Signature

```ts
function isFalsy<T>(value): value is Extract<T, false | "" | 0 | 0n | null | undefined>;
```

### Type Parameters

### T

`T`

### Parameters

### value

`T`

### Returns

value is Extract\<T, false \| "" \| 0 \| 0n \| null \| undefined\>

## Call Signature

```ts
function isFalsy<T>(value): value is Extract<T, false>;
```

### Type Parameters

### T

`T` *extends* `boolean`

### Parameters

### value

`T`

### Returns

`value is Extract<T, false>`

## Call Signature

```ts
function isFalsy<T>(value): value is Extract<T, 0>;
```

### Type Parameters

### T

`T` *extends* `number`

### Parameters

### value

`T`

### Returns

`value is Extract<T, 0>`

## Call Signature

```ts
function isFalsy<T>(value): value is Extract<T, 0n>;
```

### Type Parameters

### T

`T` *extends* `bigint`

### Parameters

### value

`T`

### Returns

`value is Extract<T, 0n>`

## Call Signature

```ts
function isFalsy<T>(value): value is Extract<T, null>;
```

### Type Parameters

### T

`T` *extends* `null`

### Parameters

### value

`T`

### Returns

`value is Extract<T, null>`

## Call Signature

```ts
function isFalsy<T>(value): value is Extract<T, undefined>;
```

### Type Parameters

### T

`T` *extends* `undefined`

### Parameters

### value

`T`

### Returns

`value is Extract<T, undefined>`

## Call Signature

```ts
function isFalsy<T>(value): value is Extract<T, "">;
```

### Type Parameters

### T

`T` *extends* `string`

### Parameters

### value

`T`

### Returns

`value is Extract<T, "">`

  ### <a id="isFile"></a>isFile

[**@xylabs/sdk-js**](#../README)

***

## Call Signature

```ts
function isFile(value): value is File;
```

### Parameters

### value

`unknown`

### Returns

`value is File`

## Call Signature

```ts
function isFile<T>(value): value is Extract<T, File>;
```

### Type Parameters

### T

`T` *extends* `File`

### Parameters

### value

`T`

### Returns

`value is Extract<T, File>`

  ### <a id="isFunction"></a>isFunction

[**@xylabs/sdk-js**](#../README)

***

## Call Signature

```ts
function isFunction(value): value is AnyFunction;
```

### Parameters

### value

`unknown`

### Returns

`value is AnyFunction`

## Call Signature

```ts
function isFunction<T>(value): value is Extract<T, AnyFunction>;
```

### Type Parameters

### T

`T` *extends* [`AnyFunction`](#../type-aliases/AnyFunction)

### Parameters

### value

`T`

### Returns

`value is Extract<T, AnyFunction>`

  ### <a id="isMap"></a>isMap

[**@xylabs/sdk-js**](#../README)

***

## Call Signature

```ts
function isMap(value): value is Map<unknown, unknown>;
```

### Parameters

### value

`unknown`

### Returns

`value is Map<unknown, unknown>`

## Call Signature

```ts
function isMap<K, V, T>(value): value is Extract<T, Map<K, V>>;
```

### Type Parameters

### K

`K`

### V

`V`

### T

`T` *extends* `Map`\<`K`, `V`\>

### Parameters

### value

`T`

### Returns

`value is Extract<T, Map<K, V>>`

  ### <a id="isNull"></a>isNull

[**@xylabs/sdk-js**](#../README)

***

## Call Signature

```ts
function isNull(value): value is null;
```

### Parameters

### value

`unknown`

### Returns

`value is null`

## Call Signature

```ts
function isNull<T>(value): value is Extract<T, null>;
```

### Type Parameters

### T

`T`

### Parameters

### value

`T`

### Returns

`value is Extract<T, null>`

  ### <a id="isNumber"></a>isNumber

[**@xylabs/sdk-js**](#../README)

***

## Call Signature

```ts
function isNumber(value): value is number;
```

### Parameters

### value

`unknown`

### Returns

`value is number`

## Call Signature

```ts
function isNumber<T>(value): value is Extract<T, number>;
```

### Type Parameters

### T

`T` *extends* `number`

### Parameters

### value

`T`

### Returns

`value is Extract<T, number>`

  ### <a id="isObject"></a>isObject

[**@xylabs/sdk-js**](#../README)

***

## Call Signature

```ts
function isObject(value): value is object;
```

### Parameters

### value

`unknown`

### Returns

`value is object`

## Call Signature

```ts
function isObject<T>(value): value is Extract<T, object>;
```

### Type Parameters

### T

`T` *extends* `object`

### Parameters

### value

`T`

### Returns

`value is Extract<T, object>`

  ### <a id="isPopulatedArray"></a>isPopulatedArray

[**@xylabs/sdk-js**](#../README)

***

## Call Signature

```ts
function isPopulatedArray(value): value is readonly unknown[];
```

### Parameters

### value

`unknown`

### Returns

`value is readonly unknown[]`

## Call Signature

```ts
function isPopulatedArray<T>(value): value is Extract<T, readonly unknown[]>;
```

### Type Parameters

### T

`T` *extends* `unknown`[]

### Parameters

### value

`T`

### Returns

`value is Extract<T, readonly unknown[]>`

  ### <a id="isPromise"></a>isPromise

[**@xylabs/sdk-js**](#../README)

***

## Call Signature

```ts
function isPromise(value): value is Promise<unknown>;
```

### Parameters

### value

`unknown`

### Returns

`value is Promise<unknown>`

## Call Signature

```ts
function isPromise<T>(value): value is Extract<T, Promise<unknown>>;
```

### Type Parameters

### T

`T`

### Parameters

### value

`T`

### Returns

`value is Extract<T, Promise<unknown>>`

  ### <a id="isPromiseLike"></a>isPromiseLike

[**@xylabs/sdk-js**](#../README)

***

## Call Signature

```ts
function isPromiseLike(value): value is Promise<unknown>;
```

### Parameters

### value

`unknown`

### Returns

`value is Promise<unknown>`

## Call Signature

```ts
function isPromiseLike<T>(value): value is Extract<T, Promise<unknown>>;
```

### Type Parameters

### T

`T`

### Parameters

### value

`T`

### Returns

`value is Extract<T, Promise<unknown>>`

  ### <a id="isRegExp"></a>isRegExp

[**@xylabs/sdk-js**](#../README)

***

## Call Signature

```ts
function isRegExp(value): value is RegExp;
```

### Parameters

### value

`unknown`

### Returns

`value is RegExp`

## Call Signature

```ts
function isRegExp<T>(value): value is Extract<T, RegExp>;
```

### Type Parameters

### T

`T` *extends* `RegExp`

### Parameters

### value

`T`

### Returns

`value is Extract<T, RegExp>`

  ### <a id="isSet"></a>isSet

[**@xylabs/sdk-js**](#../README)

***

## Call Signature

```ts
function isSet(value): value is Set<unknown>;
```

### Parameters

### value

`unknown`

### Returns

`value is Set<unknown>`

## Call Signature

```ts
function isSet<T>(value): value is Extract<T, Set<unknown>>;
```

### Type Parameters

### T

`T` *extends* `Set`\<`unknown`\>

### Parameters

### value

`unknown`

### Returns

`value is Extract<T, Set<unknown>>`

  ### <a id="isString"></a>isString

[**@xylabs/sdk-js**](#../README)

***

## Call Signature

```ts
function isString(value): value is string;
```

### Parameters

### value

`unknown`

### Returns

`value is string`

## Call Signature

```ts
function isString<T>(value): value is Extract<T, string>;
```

### Type Parameters

### T

`T` *extends* `string`

### Parameters

### value

`T`

### Returns

`value is Extract<T, string>`

  ### <a id="isSymbol"></a>isSymbol

[**@xylabs/sdk-js**](#../README)

***

## Call Signature

```ts
function isSymbol(value): value is symbol;
```

### Parameters

### value

`unknown`

### Returns

`value is symbol`

## Call Signature

```ts
function isSymbol<T>(value): value is Extract<T, symbol>;
```

### Type Parameters

### T

`T` *extends* `symbol`

### Parameters

### value

`T`

### Returns

`value is Extract<T, symbol>`

  ### <a id="isTruthy"></a>isTruthy

[**@xylabs/sdk-js**](#../README)

***

## Call Signature

```ts
function isTruthy<T>(value): value is Exclude<T, false | "" | 0 | 0n | null | undefined>;
```

### Type Parameters

### T

`T`

### Parameters

### value

`T`

### Returns

value is Exclude\<T, false \| "" \| 0 \| 0n \| null \| undefined\>

## Call Signature

```ts
function isTruthy<T>(value): value is Extract<T, true>;
```

### Type Parameters

### T

`T` *extends* `boolean`

### Parameters

### value

`T`

### Returns

`value is Extract<T, true>`

## Call Signature

```ts
function isTruthy<T>(value): value is Extract<T, number>;
```

### Type Parameters

### T

`T` *extends* `number`

### Parameters

### value

`T`

### Returns

`value is Extract<T, number>`

## Call Signature

```ts
function isTruthy<T>(value): value is Extract<T, bigint>;
```

### Type Parameters

### T

`T` *extends* `bigint`

### Parameters

### value

`T`

### Returns

`value is Extract<T, bigint>`

## Call Signature

```ts
function isTruthy<T>(value): value is Extract<T, null>;
```

### Type Parameters

### T

`T` *extends* `null`

### Parameters

### value

`T`

### Returns

`value is Extract<T, null>`

## Call Signature

```ts
function isTruthy<T>(value): value is Extract<T, undefined>;
```

### Type Parameters

### T

`T` *extends* `undefined`

### Parameters

### value

`T`

### Returns

`value is Extract<T, undefined>`

## Call Signature

```ts
function isTruthy<T>(value): value is Extract<T, string>;
```

### Type Parameters

### T

`T` *extends* `string`

### Parameters

### value

`T`

### Returns

`value is Extract<T, string>`

  ### <a id="isUndefined"></a>isUndefined

[**@xylabs/sdk-js**](#../README)

***

## Call Signature

```ts
function isUndefined(value): value is undefined;
```

### Parameters

### value

`unknown`

### Returns

`value is undefined`

## Call Signature

```ts
function isUndefined<T>(value): value is Extract<T, undefined>;
```

### Type Parameters

### T

`T`

### Parameters

### value

`T`

### Returns

`value is Extract<T, undefined>`

  ### <a id="isUndefinedOrNull"></a>isUndefinedOrNull

[**@xylabs/sdk-js**](#../README)

***

## Call Signature

```ts
function isUndefinedOrNull(value): value is null | undefined;
```

### Parameters

### value

`unknown`

### Returns

value is null \| undefined

## Call Signature

```ts
function isUndefinedOrNull<T>(value): value is Extract<T, null | undefined>;
```

### Type Parameters

### T

`T`

### Parameters

### value

`T`

### Returns

value is Extract\<T, null \| undefined\>

  ### <a id="isWeakMap"></a>isWeakMap

[**@xylabs/sdk-js**](#../README)

***

## Call Signature

```ts
function isWeakMap(value): value is WeakMap<WeakKey, unknown>;
```

### Parameters

### value

`unknown`

### Returns

`value is WeakMap<WeakKey, unknown>`

## Call Signature

```ts
function isWeakMap<K, V, T>(value): value is Extract<T, WeakMap<K, V>>;
```

### Type Parameters

### K

`K` *extends* `WeakKey`

### V

`V`

### T

`T` *extends* `WeakMap`\<`K`, `V`\>

### Parameters

### value

`T`

### Returns

`value is Extract<T, WeakMap<K, V>>`

  ### <a id="isWeakSet"></a>isWeakSet

[**@xylabs/sdk-js**](#../README)

***

## Call Signature

```ts
function isWeakSet(value): value is WeakSet<WeakKey>;
```

### Parameters

### value

`unknown`

### Returns

`value is WeakSet<WeakKey>`

## Call Signature

```ts
function isWeakSet<K, T>(value): value is Extract<T, WeakSet<K>>;
```

### Type Parameters

### K

`K` *extends* `WeakKey`

### T

`T` *extends* `WeakSet`\<`K`\>

### Parameters

### value

`T`

### Returns

`value is Extract<T, WeakSet<K>>`

  ### <a id="span"></a>span

[**@xylabs/sdk-js**](#../README)

***

```ts
function span<T>(
   name, 
   fn, 
   tracer?): T;
```

## Type Parameters

### T

`T`

## Parameters

### name

`string`

### fn

() => `T`

### tracer?

`Tracer`

## Returns

`T`

  ### <a id="spanAsync"></a>spanAsync

[**@xylabs/sdk-js**](#../README)

***

```ts
function spanAsync<T>(
   name, 
   fn, 
__namedParameters?): Promise<T>;
```

## Type Parameters

### T

`T`

## Parameters

### name

`string`

### fn

() => `Promise`\<`T`\>

### \_\_namedParameters?

[`SpanConfig`](#../interfaces/SpanConfig)

## Returns

`Promise`\<`T`\>

  ### <a id="spanDurationInMillis"></a>spanDurationInMillis

[**@xylabs/sdk-js**](#../README)

***

```ts
function spanDurationInMillis(span): number;
```

## Parameters

### span

`ReadableSpan`

## Returns

`number`

  ### <a id="spanRoot"></a>spanRoot

[**@xylabs/sdk-js**](#../README)

***

```ts
function spanRoot<T>(
   name, 
   fn, 
   tracer?): T;
```

## Type Parameters

### T

`T`

## Parameters

### name

`string`

### fn

() => `T`

### tracer?

`Tracer`

## Returns

`T`

  ### <a id="spanRootAsync"></a>spanRootAsync

[**@xylabs/sdk-js**](#../README)

***

```ts
function spanRootAsync<T>(
   name, 
   fn, 
__namedParameters?): Promise<T>;
```

## Type Parameters

### T

`T`

## Parameters

### name

`string`

### fn

() => `Promise`\<`T`\>

### \_\_namedParameters?

[`SpanConfig`](#../interfaces/SpanConfig)

## Returns

`Promise`\<`T`\>

  ### <a id="staticImplements"></a>staticImplements

[**@xylabs/sdk-js**](#../README)

***

```ts
function staticImplements<T>(): <U>(constructor) => void;
```

Annotation to decorate classes which implement static methods

## Type Parameters

### T

`T`

## Returns

The decorated class requiring it to implement
the members of the the type as static properties/methods

```ts
<U>(constructor): void;
```

### Type Parameters

### U

`U`

### Parameters

### constructor

`U`

### Returns

`void`

  ### <a id="timeBudget"></a>timeBudget

[**@xylabs/sdk-js**](#../README)

***

```ts
function timeBudget<TResult>(
   name, 
   logger, 
   func, 
   budget, 
status?): Promise<TResult>;
```

## Type Parameters

### TResult

`TResult`

## Parameters

### name

`string`

### logger

[`Logger`](#../interfaces/Logger) | `undefined`

### func

() => `Promise`\<`TResult`\>

### budget

`number`

### status?

`boolean`

## Returns

`Promise`\<`TResult`\>

  ### <a id="toAddressV2"></a>toAddressV2

[**@xylabs/sdk-js**](#../README)

***

```ts
function toAddressV2(value, assert?): BrandedAddress | undefined;
```

**`Alpha`**

## Parameters

### value

`unknown`

### assert?

`boolean`

## Returns

`BrandedAddress` \| `undefined`

  ### <a id="toArrayBuffer"></a>toArrayBuffer

[**@xylabs/sdk-js**](#../README)

***

## Call Signature

```ts
function toArrayBuffer(
   value, 
   padLength?, 
   base?): undefined;
```

### Parameters

### value

`undefined`

### padLength?

`number`

### base?

`number`

### Returns

`undefined`

## Call Signature

```ts
function toArrayBuffer(
   value, 
   padLength?, 
   base?): ArrayBufferLike;
```

### Parameters

### value

`string` | `bigint` | `ArrayBufferLike`

### padLength?

`number`

### base?

`number`

### Returns

`ArrayBufferLike`

## Call Signature

```ts
function toArrayBuffer(
   value, 
   padLength?, 
   base?): ArrayBufferLike | undefined;
```

### Parameters

### value

`string` | `bigint` | `ArrayBufferLike` | `undefined`

### padLength?

`number`

### base?

`number`

### Returns

`ArrayBufferLike` \| `undefined`

  ### <a id="toPromise"></a>toPromise

[**@xylabs/sdk-js**](#../README)

***

```ts
function toPromise<T>(value): Promise<T>;
```

## Type Parameters

### T

`T`

## Parameters

### value

[`Promisable`](#../type-aliases/Promisable)\<`T`\>

## Returns

`Promise`\<`T`\>

  ### <a id="toUint8Array"></a>toUint8Array

[**@xylabs/sdk-js**](#../README)

***

## Call Signature

```ts
function toUint8Array(
   value, 
   padLength?, 
   base?): undefined;
```

### Parameters

### value

`undefined`

### padLength?

`number`

### base?

`number`

### Returns

`undefined`

## Call Signature

```ts
function toUint8Array(
   value, 
   padLength?, 
   base?): Uint8Array;
```

### Parameters

### value

`string` | `bigint` | `ArrayBufferLike`

### padLength?

`number`

### base?

`number`

### Returns

`Uint8Array`

## Call Signature

```ts
function toUint8Array(
   value, 
   padLength?, 
   base?): Uint8Array<ArrayBufferLike> | undefined;
```

### Parameters

### value

`string` | `bigint` | `ArrayBufferLike` | `undefined`

### padLength?

`number`

### base?

`number`

### Returns

`Uint8Array`\<`ArrayBufferLike`\> \| `undefined`

  ### <a id="zodAllFactory"></a>zodAllFactory

[**@xylabs/sdk-js**](#../README)

***

```ts
function zodAllFactory<T, TName>(zod, name): object;
```

**`Alpha`**

## Type Parameters

### T

`T`

### TName

`TName` *extends* `string`

## Parameters

### zod

`ZodType`\<`T`\>

### name

`TName`

## Returns

`object`

  ### <a id="zodAsAsyncFactory"></a>zodAsAsyncFactory

[**@xylabs/sdk-js**](#../README)

***

```ts
function zodAsAsyncFactory<TZod>(zod, name): {
<T>  (value): Promise<T & TZod | undefined>;
<T>  (value, assert): Promise<T & TZod>;
};
```

## Type Parameters

### TZod

`TZod`

## Parameters

### zod

`ZodType`\<`TZod`\>

### name

`string`

## Returns

```ts
<T>(value): Promise<T & TZod | undefined>;
```

### Type Parameters

### T

`T`

### Parameters

### value

`T`

### Returns

`Promise`\<`T` & `TZod` \| `undefined`\>

```ts
<T>(value, assert): Promise<T & TZod>;
```

### Type Parameters

### T

`T`

### Parameters

### value

`T`

### assert

[`ZodFactoryConfig`](#../type-aliases/ZodFactoryConfig)

### Returns

`Promise`\<`T` & `TZod`\>

  ### <a id="zodAsFactory"></a>zodAsFactory

[**@xylabs/sdk-js**](#../README)

***

```ts
function zodAsFactory<TZod>(zod, name): {
<T>  (value): T & TZod | undefined;
<T>  (value, assert): T & TZod;
};
```

## Type Parameters

### TZod

`TZod`

## Parameters

### zod

`ZodType`\<`TZod`\>

### name

`string`

## Returns

```ts
<T>(value): T & TZod | undefined;
```

### Type Parameters

### T

`T`

### Parameters

### value

`T`

### Returns

`T` & `TZod` \| `undefined`

```ts
<T>(value, assert): T & TZod;
```

### Type Parameters

### T

`T`

### Parameters

### value

`T`

### assert

[`ZodFactoryConfig`](#../type-aliases/ZodFactoryConfig)

### Returns

`T` & `TZod`

  ### <a id="zodIsFactory"></a>zodIsFactory

[**@xylabs/sdk-js**](#../README)

***

```ts
function zodIsFactory<TZod>(zod): <T>(value) => value is T & TZod;
```

## Type Parameters

### TZod

`TZod`

## Parameters

### zod

`ZodType`\<`TZod`\>

## Returns

```ts
<T>(value): value is T & TZod;
```

### Type Parameters

### T

`T`

### Parameters

### value

`T`

### Returns

`value is T & TZod`

  ### <a id="zodToAsyncFactory"></a>zodToAsyncFactory

[**@xylabs/sdk-js**](#../README)

***

```ts
function zodToAsyncFactory<TZod>(zod, name): {
<T>  (value): Promise<T & TZod | undefined>;
<T>  (value, assert): Promise<T & TZod>;
};
```

## Type Parameters

### TZod

`TZod`

## Parameters

### zod

`ZodType`\<`TZod`\>

### name

`string`

## Returns

```ts
<T>(value): Promise<T & TZod | undefined>;
```

### Type Parameters

### T

`T`

### Parameters

### value

`T`

### Returns

`Promise`\<`T` & `TZod` \| `undefined`\>

```ts
<T>(value, assert): Promise<T & TZod>;
```

### Type Parameters

### T

`T`

### Parameters

### value

`T`

### assert

[`ZodFactoryConfig`](#../type-aliases/ZodFactoryConfig)

### Returns

`Promise`\<`T` & `TZod`\>

  ### <a id="zodToFactory"></a>zodToFactory

[**@xylabs/sdk-js**](#../README)

***

```ts
function zodToFactory<TZod>(zod, name): {
<T>  (value): T & TZod | undefined;
<T>  (value, assert): T & TZod;
};
```

## Type Parameters

### TZod

`TZod`

## Parameters

### zod

`ZodType`\<`TZod`\>

### name

`string`

## Returns

```ts
<T>(value): T & TZod | undefined;
```

### Type Parameters

### T

`T`

### Parameters

### value

`T`

### Returns

`T` & `TZod` \| `undefined`

```ts
<T>(value, assert): T & TZod;
```

### Type Parameters

### T

`T`

### Parameters

### value

`T`

### assert

[`ZodFactoryConfig`](#../type-aliases/ZodFactoryConfig)

### Returns

`T` & `TZod`

### interfaces

  ### <a id="ApiConfig"></a>ApiConfig

[**@xylabs/sdk-js**](#../README)

***

## Properties

### apiDomain

```ts
apiDomain: string;
```

***

### apiKey?

```ts
optional apiKey: string;
```

***

### jwtToken?

```ts
optional jwtToken: string;
```

***

### userid?

```ts
optional userid: string;
```

  ### <a id="BaseEmitterParamsFields"></a>BaseEmitterParamsFields

[**@xylabs/sdk-js**](#../README)

***

  ### <a id="Creatable"></a>Creatable

[**@xylabs/sdk-js**](#../README)

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

`T` & [`AbstractCreatable`](#../classes/AbstractCreatable)\<`T`\[`"params"`\], [`EventData`](#../type-aliases/EventData)\>

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

`T` *extends* [`CreatableInstance`](#CreatableInstance)\<[`CreatableParams`](#CreatableParams), [`EventData`](#../type-aliases/EventData)\>

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

`T` *extends* [`CreatableInstance`](#CreatableInstance)\<[`CreatableParams`](#CreatableParams), [`EventData`](#../type-aliases/EventData)\>

### Parameters

#### this

`Creatable`\<`T`\>

#### instance

`T`

### Returns

[`Promisable`](#../type-aliases/Promisable)\<`T`\>

***

### paramsHandler()

```ts
paramsHandler<T>(this, params?): Promisable<T["params"] & RequiredCreatableParams<void>>;
```

Hook called to validate and transform params before instance construction.

### Type Parameters

#### T

`T` *extends* [`CreatableInstance`](#CreatableInstance)\<[`CreatableParams`](#CreatableParams), [`EventData`](#../type-aliases/EventData)\>

### Parameters

#### this

`Creatable`\<`T`\>

#### params?

`Partial`\<`T`\[`"params"`\]\>

### Returns

[`Promisable`](#../type-aliases/Promisable)\<`T`\[`"params"`\] & [`RequiredCreatableParams`](#RequiredCreatableParams)\<`void`\>\>

  ### <a id="CreatableFactory"></a>CreatableFactory

[**@xylabs/sdk-js**](#../README)

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

[**@xylabs/sdk-js**](#../README)

***

Represents a created instance with a managed lifecycle (start/stop) and event emission.

## Extends

- [`EventEmitter`](#EventEmitter)\<`TEventData`\>

## Type Parameters

### TParams

`TParams` *extends* [`CreatableParams`](#CreatableParams) = [`CreatableParams`](#CreatableParams)

### TEventData

`TEventData` *extends* [`EventData`](#../type-aliases/EventData) = [`EventData`](#../type-aliases/EventData)

## Properties

### eventData

```ts
eventData: TEventData;
```

The event data type associated with this instance.

### Overrides

[`EventEmitter`](#EventEmitter).[`eventData`](EventEmitter.md#eventdata)

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

### Parameters

#### eventNames

keyof `TEventData` | keyof `TEventData`[]

### Returns

`void`

### Inherited from

[`EventEmitter`](#EventEmitter).[`clearListeners`](EventEmitter.md#clearlisteners)

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

[`EventEmitter`](#EventEmitter).[`emit`](EventEmitter.md#emit)

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

[`EventEmitter`](#EventEmitter).[`emitSerial`](EventEmitter.md#emitserial)

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

[`EventEmitter`](#EventEmitter).[`listenerCount`](EventEmitter.md#listenercount)

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

### Inherited from

[`EventEmitter`](#EventEmitter).[`off`](EventEmitter.md#off)

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

### Inherited from

[`EventEmitter`](#EventEmitter).[`offAny`](EventEmitter.md#offany)

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

[`EventListener`](#../type-aliases/EventListener)\<`TEventData`\[`TEventName`\]\>

### Returns

[`EventUnsubscribeFunction`](#../type-aliases/EventUnsubscribeFunction)

### Inherited from

[`EventEmitter`](#EventEmitter).[`on`](EventEmitter.md#on)

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

### Inherited from

[`EventEmitter`](#EventEmitter).[`onAny`](EventEmitter.md#onany)

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

[`EventListener`](#../type-aliases/EventListener)\<`TEventData`\[`TEventName`\]\>

### Returns

[`EventUnsubscribeFunction`](#../type-aliases/EventUnsubscribeFunction)

### Inherited from

[`EventEmitter`](#EventEmitter).[`once`](EventEmitter.md#once)

  ### <a id="CreatableParams"></a>CreatableParams

[**@xylabs/sdk-js**](#../README)

***

Parameters for creating a creatable instance, combining required params with emitter params.

## Extends

- [`RequiredCreatableParams`](#RequiredCreatableParams).[`BaseEmitterParams`](#../type-aliases/BaseEmitterParams)

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

[**@xylabs/sdk-js**](#../README)

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

[`BaseClassName`](#../type-aliases/BaseClassName)

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

[`BaseClassName`](#../type-aliases/BaseClassName)

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

[`BaseClassName`](#../type-aliases/BaseClassName)

##### status

[`CreatableStatus`](#../type-aliases/CreatableStatus)\<`TAdditionalStatus`\>

#### Returns

`void`

  ### <a id="CreatableWithFactory"></a>CreatableWithFactory

[**@xylabs/sdk-js**](#../README)

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

`T` & [`AbstractCreatable`](#../classes/AbstractCreatable)\<`T`\[`"params"`\], [`EventData`](#../type-aliases/EventData)\>

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

`T` *extends* [`CreatableInstance`](#CreatableInstance)\<[`CreatableParams`](#CreatableParams), [`EventData`](#../type-aliases/EventData)\>

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

`T` *extends* [`CreatableInstance`](#CreatableInstance)\<[`CreatableParams`](#CreatableParams), [`EventData`](#../type-aliases/EventData)\>

### Parameters

#### this

[`Creatable`](#Creatable)\<`T`\>

#### instance

`T`

### Returns

[`Promisable`](#../type-aliases/Promisable)\<`T`\>

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

`T` *extends* [`CreatableInstance`](#CreatableInstance)\<[`CreatableParams`](#CreatableParams), [`EventData`](#../type-aliases/EventData)\>

### Parameters

#### this

[`Creatable`](#Creatable)\<`T`\>

#### params?

`Partial`\<`T`\[`"params"`\]\>

### Returns

[`Promisable`](#../type-aliases/Promisable)\<`T`\[`"params"`\] & [`RequiredCreatableParams`](#RequiredCreatableParams)\<`void`\>\>

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

`T` *extends* [`CreatableInstance`](#CreatableInstance)\<[`CreatableParams`](#CreatableParams), [`EventData`](#../type-aliases/EventData)\>

### Parameters

#### this

[`Creatable`](#Creatable)\<`T`\>

#### params?

`Partial`\<`T`\[`"params"`\]\>

#### labels?

[`Labels`](#Labels)

### Returns

[`CreatableFactory`](#CreatableFactory)\<`T`\>

  ### <a id="EventEmitter"></a>EventEmitter

[**@xylabs/sdk-js**](#../README)

***

## Extended by

- [`CreatableInstance`](#CreatableInstance)

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

  ### <a id="ForgetNodeConfig"></a>ForgetNodeConfig

[**@xylabs/sdk-js**](#../README)

***

## Extends

- `ForgetConfig`\<`T`\>

## Type Parameters

### T

`T` = `any`

## Properties

### name?

```ts
optional name: string;
```

### Inherited from

```ts
ForgetConfig.name
```

***

### onCancel()?

```ts
optional onCancel: () => void;
```

### Returns

`void`

### Inherited from

```ts
ForgetConfig.onCancel
```

***

### onComplete()?

```ts
optional onComplete: (result) => void;
```

### Parameters

#### result

\[`T` \| `undefined`, `Error` \| `undefined`\]

### Returns

`void`

### Inherited from

```ts
ForgetConfig.onComplete
```

***

### onException()?

```ts
optional onException: (error) => void;
```

### Parameters

#### error

`Error`

### Returns

`void`

### Inherited from

```ts
ForgetConfig.onException
```

***

### timeout?

```ts
optional timeout: number;
```

### Inherited from

```ts
ForgetConfig.timeout
```

***

### terminateOnException?

```ts
optional terminateOnException: boolean;
```

***

### terminateOnTimeout?

```ts
optional terminateOnTimeout: boolean;
```

  ### <a id="HexConfig"></a>HexConfig

[**@xylabs/sdk-js**](#../README)

***

Configuration of validation and output format

## Properties

### bitLength?

```ts
optional bitLength: number;
```

***

### byteSize?

```ts
optional byteSize: number;
```

***

### prefix?

```ts
optional prefix: boolean;
```

  ### <a id="KeyValueStore"></a>KeyValueStore

[**@xylabs/sdk-js**](#../README)

***

A read/write storage device.

## Extends

- [`ReadonlyKeyValueStore`](#ReadonlyKeyValueStore)\<`TValue`, `TKey`\>

## Type Parameters

### TValue

`TValue`

### TKey

`TKey` = `string`

## Methods

### get()

```ts
get(key): Promisable<TValue | undefined>;
```

Returns a promise that resolves to the value for the given key.

### Parameters

#### key

`TKey`

The key to get the value for.

### Returns

[`Promisable`](#../type-aliases/Promisable)\<`TValue` \| `undefined`\>

### Inherited from

[`ReadonlyKeyValueStore`](#ReadonlyKeyValueStore).[`get`](ReadonlyKeyValueStore.md#get)

***

### keys()?

```ts
optional keys(): Promisable<TKey[]>;
```

The keys an array of keys.

### Returns

[`Promisable`](#../type-aliases/Promisable)\<`TKey`[]\>

### Inherited from

[`ReadonlyKeyValueStore`](#ReadonlyKeyValueStore).[`keys`](ReadonlyKeyValueStore.md#keys)

***

### clear()?

```ts
optional clear(): Promisable<void>;
```

### Returns

[`Promisable`](#../type-aliases/Promisable)\<`void`\>

***

### delete()

```ts
delete(key): Promisable<void>;
```

### Parameters

#### key

`TKey`

### Returns

[`Promisable`](#../type-aliases/Promisable)\<`void`\>

***

### set()

```ts
set(key, value): Promisable<void>;
```

### Parameters

#### key

`TKey`

#### value

`TValue`

### Returns

[`Promisable`](#../type-aliases/Promisable)\<`void`\>

  ### <a id="Labels"></a>Labels

[**@xylabs/sdk-js**](#../README)

***

Object used to represent labels identifying a resource.

## Indexable

```ts
[key: string]: string | undefined
```

  ### <a id="Logger"></a>Logger

[**@xylabs/sdk-js**](#../README)

***

Interface to handle overlap between Winston &
`console` with as much congruency as possible.

## Properties

### debug

```ts
debug: LogFunction;
```

***

### error

```ts
error: LogFunction;
```

***

### info

```ts
info: LogFunction;
```

***

### log

```ts
log: LogFunction;
```

***

### trace

```ts
trace: LogFunction;
```

***

### warn

```ts
warn: LogFunction;
```

  ### <a id="ObjectTypeConfig"></a>ObjectTypeConfig

[**@xylabs/sdk-js**](#../README)

***

## Extends

- [`TypeCheckConfig`](#TypeCheckConfig)

## Properties

### log?

```ts
optional log: boolean | Logger;
```

### Inherited from

[`TypeCheckConfig`](#TypeCheckConfig).[`log`](TypeCheckConfig.md#log)

  ### <a id="PromiseType"></a>PromiseType

[**@xylabs/sdk-js**](#../README)

***

## Properties

### then()

```ts
then: () => unknown;
```

### Returns

`unknown`

  ### <a id="ReadonlyKeyValueStore"></a>ReadonlyKeyValueStore

[**@xylabs/sdk-js**](#../README)

***

A readonly storage device.

## Extended by

- [`KeyValueStore`](#KeyValueStore)

## Type Parameters

### TValue

`TValue`

### TKey

`TKey` = `string`

## Methods

### get()

```ts
get(key): Promisable<TValue | undefined>;
```

Returns a promise that resolves to the value for the given key.

### Parameters

#### key

`TKey`

The key to get the value for.

### Returns

[`Promisable`](#../type-aliases/Promisable)\<`TValue` \| `undefined`\>

***

### keys()?

```ts
optional keys(): Promisable<TKey[]>;
```

The keys an array of keys.

### Returns

[`Promisable`](#../type-aliases/Promisable)\<`TKey`[]\>

  ### <a id="RequiredCreatableParams"></a>RequiredCreatableParams

[**@xylabs/sdk-js**](#../README)

***

The minimum required parameters for constructing a creatable.

## Extends

- [`BaseEmitterParams`](#../type-aliases/BaseEmitterParams)

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

  ### <a id="RetryConfig"></a>RetryConfig

[**@xylabs/sdk-js**](#../README)

***

## Extended by

- [`RetryConfigWithComplete`](#RetryConfigWithComplete)

## Properties

### backoff?

```ts
optional backoff: number;
```

***

### interval?

```ts
optional interval: number;
```

***

### retries?

```ts
optional retries: number;
```

  ### <a id="RetryConfigWithComplete"></a>RetryConfigWithComplete

[**@xylabs/sdk-js**](#../README)

***

## Extends

- [`RetryConfig`](#RetryConfig)

## Type Parameters

### T

`T` = `unknown`

## Properties

### backoff?

```ts
optional backoff: number;
```

### Inherited from

[`RetryConfig`](#RetryConfig).[`backoff`](RetryConfig.md#backoff)

***

### interval?

```ts
optional interval: number;
```

### Inherited from

[`RetryConfig`](#RetryConfig).[`interval`](RetryConfig.md#interval)

***

### retries?

```ts
optional retries: number;
```

### Inherited from

[`RetryConfig`](#RetryConfig).[`retries`](RetryConfig.md#retries)

***

### complete()?

```ts
optional complete: (result?) => boolean;
```

### Parameters

#### result?

`T`

### Returns

`boolean`

  ### <a id="SpanConfig"></a>SpanConfig

[**@xylabs/sdk-js**](#../README)

***

## Properties

### logger?

```ts
optional logger: Logger | null;
```

***

### timeBudgetLimit?

```ts
optional timeBudgetLimit: number;
```

***

### tracer?

```ts
optional tracer: Tracer;
```

  ### <a id="TypeCheckConfig"></a>TypeCheckConfig

[**@xylabs/sdk-js**](#../README)

***

## Extended by

- [`ObjectTypeConfig`](#ObjectTypeConfig)
- [`TypeCheckRequiredConfig`](#TypeCheckRequiredConfig)
- [`TypeCheckOptionalConfig`](#TypeCheckOptionalConfig)

## Properties

### log?

```ts
optional log: boolean | Logger;
```

  ### <a id="TypeCheckOptionalConfig"></a>TypeCheckOptionalConfig

[**@xylabs/sdk-js**](#../README)

***

## Extends

- [`TypeCheckConfig`](#TypeCheckConfig)

## Properties

### log?

```ts
optional log: boolean | Logger;
```

### Inherited from

[`TypeCheckConfig`](#TypeCheckConfig).[`log`](TypeCheckConfig.md#log)

***

### required

```ts
required: false;
```

  ### <a id="TypeCheckRequiredConfig"></a>TypeCheckRequiredConfig

[**@xylabs/sdk-js**](#../README)

***

## Extends

- [`TypeCheckConfig`](#TypeCheckConfig)

## Properties

### log?

```ts
optional log: boolean | Logger;
```

### Inherited from

[`TypeCheckConfig`](#TypeCheckConfig).[`log`](TypeCheckConfig.md#log)

***

### required

```ts
required: true;
```

  ### <a id="Validator"></a>Validator

[**@xylabs/sdk-js**](#../README)

***

## Type Parameters

### T

`T` *extends* [`EmptyObject`](#../type-aliases/EmptyObject) = [`AnyObject`](#../type-aliases/AnyObject)

## Methods

### validate()

```ts
validate(payload): Promisable<Error[]>;
```

### Parameters

#### payload

`T`

### Returns

[`Promisable`](#../type-aliases/Promisable)\<`Error`[]\>

  ### <a id="WithLabels"></a>WithLabels

[**@xylabs/sdk-js**](#../README)

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

[**@xylabs/sdk-js**](#../README)

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

  ### <a id="ZodFactoryConfigObject"></a>ZodFactoryConfigObject

[**@xylabs/sdk-js**](#../README)

***

## Properties

### name

```ts
name: string;
```

### type-aliases

  ### <a id="Address"></a>Address

[**@xylabs/sdk-js**](#../README)

***

```ts
type Address = z.infer<typeof AddressZod>;
```

  ### <a id="AddressTransformZodType"></a>AddressTransformZodType

[**@xylabs/sdk-js**](#../README)

***

```ts
type AddressTransformZodType = z.infer<typeof AddressTransformZod>;
```

  ### <a id="AddressValidationZodType"></a>AddressValidationZodType

[**@xylabs/sdk-js**](#../README)

***

```ts
type AddressValidationZodType = z.infer<typeof AddressValidationZod>;
```

  ### <a id="AllZodFactories"></a>AllZodFactories

[**@xylabs/sdk-js**](#../README)

***

```ts
type AllZodFactories<TType, TName> = { [K in `is${TName}`]: ReturnType<typeof zodIsFactory> } & { [K in `as${TName}`]: ReturnType<typeof zodAsFactory> } & { [K in `to${TName}`]: ReturnType<typeof zodToFactory> };
```

**`Alpha`**

## Type Parameters

### TType

`TType`

### TName

`TName` *extends* `string`

  ### <a id="AnyFunction"></a>AnyFunction

[**@xylabs/sdk-js**](#../README)

***

```ts
type AnyFunction = (...args) => unknown;
```

## Parameters

### args

...`unknown`[]

## Returns

`unknown`

  ### <a id="AnyNonPromise"></a>AnyNonPromise

[**@xylabs/sdk-js**](#../README)

***

```ts
type AnyNonPromise = Exclude<TypedValue, PromiseType>;
```

  ### <a id="AnyObject"></a>AnyObject

[**@xylabs/sdk-js**](#../README)

***

```ts
type AnyObject = EmptyObject & Partial<Record<TypedKey, unknown>>;
```

Any object, which means that it does not enforce the set of fields that it has.  Extending from AnyObject
will result in a type that includes the universal set of field names

  ### <a id="ApiStage"></a>ApiStage

[**@xylabs/sdk-js**](#../README)

***

```ts
type ApiStage = EnumValue<typeof ApiStage>;
```

  ### <a id="AsOptionalTypeFunction"></a>AsOptionalTypeFunction

[**@xylabs/sdk-js**](#../README)

***

```ts
type AsOptionalTypeFunction<T> = <TType>(value) => TType | undefined;
```

## Type Parameters

### T

`T` *extends* [`AnyNonPromise`](#AnyNonPromise) = [`AnyNonPromise`](#AnyNonPromise)

## Type Parameters

### TType

`TType` *extends* [`AnyNonPromise`](#AnyNonPromise)

## Parameters

### value

[`AnyNonPromise`](#AnyNonPromise)

## Returns

`TType` \| `undefined`

  ### <a id="AsTypeFunction"></a>AsTypeFunction

[**@xylabs/sdk-js**](#../README)

***

```ts
type AsTypeFunction<T> = {
<TType>  (value): TType | undefined;
<TType>  (value, config): TType;
<TType>  (value, config): TType | undefined;
<TType>  (value, assert): TType | undefined;
<TType>  (value, assert, config): TType;
<TType>  (value, assert, config): TType | undefined;
};
```

## Type Parameters

### T

`T` *extends* [`AnyNonPromise`](#AnyNonPromise) = [`AnyNonPromise`](#AnyNonPromise)

## Call Signature

```ts
<TType>(value): TType | undefined;
```

### Type Parameters

### TType

`TType` *extends* [`AnyNonPromise`](#AnyNonPromise)

### Parameters

### value

[`AnyNonPromise`](#AnyNonPromise)

### Returns

`TType` \| `undefined`

## Call Signature

```ts
<TType>(value, config): TType;
```

### Type Parameters

### TType

`TType` *extends* [`AnyNonPromise`](#AnyNonPromise)

### Parameters

### value

[`AnyNonPromise`](#AnyNonPromise)

### config

[`TypeCheckRequiredConfig`](#../interfaces/TypeCheckRequiredConfig)

### Returns

`TType`

## Call Signature

```ts
<TType>(value, config): TType | undefined;
```

### Type Parameters

### TType

`TType` *extends* [`AnyNonPromise`](#AnyNonPromise)

### Parameters

### value

[`AnyNonPromise`](#AnyNonPromise)

### config

[`TypeCheckConfig`](#../interfaces/TypeCheckConfig) | [`TypeCheckOptionalConfig`](#../interfaces/TypeCheckOptionalConfig)

### Returns

`TType` \| `undefined`

## Call Signature

```ts
<TType>(value, assert): TType | undefined;
```

### Type Parameters

### TType

`TType` *extends* [`AnyNonPromise`](#AnyNonPromise)

### Parameters

### value

[`AnyNonPromise`](#AnyNonPromise)

### assert

[`StringOrAlertFunction`](#StringOrAlertFunction)\<`TType`\>

### Returns

`TType` \| `undefined`

## Call Signature

```ts
<TType>(
   value, 
   assert, 
   config): TType;
```

### Type Parameters

### TType

`TType` *extends* [`AnyNonPromise`](#AnyNonPromise)

### Parameters

### value

[`AnyNonPromise`](#AnyNonPromise)

### assert

[`StringOrAlertFunction`](#StringOrAlertFunction)\<`TType`\>

### config

[`TypeCheckRequiredConfig`](#../interfaces/TypeCheckRequiredConfig)

### Returns

`TType`

## Call Signature

```ts
<TType>(
   value, 
   assert, 
   config): TType | undefined;
```

### Type Parameters

### TType

`TType` *extends* [`AnyNonPromise`](#AnyNonPromise)

### Parameters

### value

[`AnyNonPromise`](#AnyNonPromise)

### assert

[`StringOrAlertFunction`](#StringOrAlertFunction)\<`TType`\>

### config

[`TypeCheckConfig`](#../interfaces/TypeCheckConfig) | [`TypeCheckOptionalConfig`](#../interfaces/TypeCheckOptionalConfig)

### Returns

`TType` \| `undefined`

  ### <a id="AssertConfig"></a>AssertConfig

[**@xylabs/sdk-js**](#../README)

***

```ts
type AssertConfig = string | AssertCallback | boolean;
```

  ### <a id="AsyncMutex"></a>AsyncMutex

[**@xylabs/sdk-js**](#../README)

***

```ts
type AsyncMutex<T> = Promise<T>;
```

## Type Parameters

### T

`T`

## Description

Used to document promises that are being used as Mutexes

  ### <a id="BaseClassName"></a>BaseClassName

[**@xylabs/sdk-js**](#../README)

***

```ts
type BaseClassName = string & object;
```

## Type Declaration

### \_\_baseClassName

```ts
__baseClassName: true;
```

  ### <a id="BaseEmitterParams"></a>BaseEmitterParams

[**@xylabs/sdk-js**](#../README)

***

```ts
type BaseEmitterParams<T> = BaseParams<T & BaseEmitterParamsFields & T>;
```

## Type Parameters

### T

`T` *extends* [`EmptyObject`](#EmptyObject) = [`EmptyObject`](#EmptyObject)

  ### <a id="BaseParams"></a>BaseParams

[**@xylabs/sdk-js**](#../README)

***

```ts
type BaseParams<TAdditionalParams> = TAdditionalParams & BaseParamsFields;
```

## Type Parameters

### TAdditionalParams

`TAdditionalParams` *extends* [`EmptyObject`](#EmptyObject) = [`EmptyObject`](#EmptyObject)

  ### <a id="BaseParamsFields"></a>BaseParamsFields

[**@xylabs/sdk-js**](#../README)

***

```ts
type BaseParamsFields = object;
```

## Properties

### logger?

```ts
optional logger: Logger;
```

***

### meterProvider?

```ts
optional meterProvider: MeterProvider;
```

***

### traceProvider?

```ts
optional traceProvider: TracerProvider;
```

  ### <a id="Brand"></a>Brand

[**@xylabs/sdk-js**](#../README)

***

```ts
type Brand<T, B> = T & { [K in keyof B]: B[K] };
```

## Type Parameters

### T

`T`

### B

`B`

  ### <a id="BrandedHash"></a>BrandedHash

[**@xylabs/sdk-js**](#../README)

***

```ts
type BrandedHash = Brand<Hex, {
  __hash: true;
}>;
```

  ### <a id="BrandedHex"></a>BrandedHex

[**@xylabs/sdk-js**](#../README)

***

```ts
type BrandedHex = Brand<Lowercase<string>, {
  __hex: true;
}>;
```

  ### <a id="Compare"></a>Compare

[**@xylabs/sdk-js**](#../README)

***

```ts
type Compare<T> = (a, b) => number;
```

## Type Parameters

### T

`T`

## Parameters

### a

`T`

### b

`T`

## Returns

`number`

  ### <a id="CreatableName"></a>CreatableName

[**@xylabs/sdk-js**](#../README)

***

```ts
type CreatableName = Exclude<string, "creatable-name-reserved-32546239486"> & BaseClassName;
```

A branded string type used as the name identifier for creatables.

  ### <a id="CreatableStatus"></a>CreatableStatus

[**@xylabs/sdk-js**](#../README)

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

  ### <a id="DebugLogger"></a>DebugLogger

[**@xylabs/sdk-js**](#../README)

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

[**@xylabs/sdk-js**](#../README)

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

  ### <a id="DeepOmitStartsWith"></a>DeepOmitStartsWith

[**@xylabs/sdk-js**](#../README)

***

```ts
type DeepOmitStartsWith<T, Prefix> = T extends infer U[] ? DeepOmitStartsWith<U, Prefix>[] : T extends object ? { [K in keyof T as K extends string ? K extends `${Prefix}${string}` ? never : K : K]: DeepOmitStartsWith<T[K], Prefix> } : T;
```

## Type Parameters

### T

`T`

### Prefix

`Prefix` *extends* `string`

  ### <a id="DeepPickStartsWith"></a>DeepPickStartsWith

[**@xylabs/sdk-js**](#../README)

***

```ts
type DeepPickStartsWith<T, Prefix> = T extends infer U[] ? DeepPickStartsWith<U, Prefix>[] : T extends object ? { [K in keyof T as K extends string ? K extends `${Prefix}${string}` ? K : never : K]: DeepPickStartsWith<T[K], Prefix> } : T;
```

## Type Parameters

### T

`T`

### Prefix

`Prefix` *extends* `string`

  ### <a id="DeepRestrictToJson"></a>DeepRestrictToJson

[**@xylabs/sdk-js**](#../README)

***

```ts
type DeepRestrictToJson<T> = { [K in keyof T as K extends string ? K : never]: T[K] extends (infer U)[] ? DeepRestrictToJson<U>[] : T[K] extends object ? DeepRestrictToJson<T[K]> : T[K] extends JsonValue ? T[K] : never };
```

## Type Parameters

### T

`T`

  ### <a id="DeepRestrictToStringKeys"></a>DeepRestrictToStringKeys

[**@xylabs/sdk-js**](#../README)

***

```ts
type DeepRestrictToStringKeys<T> = { [K in keyof T as K extends string ? K : never]: T[K] extends (infer U)[] ? DeepRestrictToStringKeys<U>[] : T[K] extends object ? DeepRestrictToStringKeys<T[K]> : T[K] };
```

## Type Parameters

### T

`T`

  ### <a id="EmptyObject"></a>EmptyObject

[**@xylabs/sdk-js**](#../README)

***

```ts
type EmptyObject<T> = Exclude<{ [K in keyof T]?: never }, unknown[] | (...args) => unknown | null>;
```

An empty object, which means that it does enforce the set of field names, defaulting to an empty set until
extended from, which then adds only those additional fields

## Type Parameters

### T

`T` *extends* `object` = `object`

  ### <a id="Enum"></a>Enum

[**@xylabs/sdk-js**](#../README)

***

```ts
type Enum<T> = { readonly [K in keyof T]: T[K] };
```

A utility type that, given a `Record<string, unknown>`, returns a readonly version
of that record. This results in a type where all properties of `T` are readonly.

## Type Parameters

### T

`T` *extends* `Readonly`\<`Record`\<`string` \| `number` \| `symbol`, `unknown`\>\>

The record type to make readonly.

## Example

```typescript
// Given a record:
export const DnsRecordType = Enum({
  A: 1,
  AAAA: 28,
  CAA: 257,
  CNAME: 5,
  DNAME: 39,
  MX: 15,
  NS: 2,
  PTR: 12,
  SOA: 6,
  SPF: 99,
  SRV: 33,
  TXT: 16,
})

// Now the type inference will preserve the literal types:
export type DnsRecordType = Enum<typeof DnsRecordType>
```

  ### <a id="EnumKey"></a>EnumKey

[**@xylabs/sdk-js**](#../README)

***

```ts
type EnumKey<T, K> = keyof K;
```

A utility type that, given an `Enum` object, returns the union of its keys.

## Type Parameters

### T

`T` *extends* `Record`\<`string` \| `number` \| `symbol`, `unknown`\>

### K

`K` = [`Enum`](#Enum)\<`T`\>

  ### <a id="EnumValue"></a>EnumValue

[**@xylabs/sdk-js**](#../README)

***

```ts
type EnumValue<T, K> = K[keyof K];
```

A utility type that, given an `Enum` object, returns the union of its values.

## Type Parameters

### T

`T` *extends* `Record`\<`string` \| `number` \| `symbol`, `unknown`\>

### K

`K` = [`Enum`](#Enum)\<`T`\>

  ### <a id="EthAddress"></a>EthAddress

[**@xylabs/sdk-js**](#../README)

***

```ts
type EthAddress = Brand<string, {
  __eth_address: true;
}>;
```

  ### <a id="EventAnyListener"></a>EventAnyListener

[**@xylabs/sdk-js**](#../README)

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

[`Promisable`](#Promisable)\<`void`\>

  ### <a id="EventArgs"></a>EventArgs

[**@xylabs/sdk-js**](#../README)

***

```ts
type EventArgs = string | number | object;
```

  ### <a id="EventData"></a>EventData

[**@xylabs/sdk-js**](#../README)

***

```ts
type EventData = object;
```

## Index Signature

```ts
[key: string | number | symbol]: EventArgs
```

  ### <a id="EventListener"></a>EventListener

[**@xylabs/sdk-js**](#../README)

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

[`Promisable`](#Promisable)\<`void`\>

  ### <a id="EventListenerInfo"></a>EventListenerInfo

[**@xylabs/sdk-js**](#../README)

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

[**@xylabs/sdk-js**](#../README)

***

```ts
type EventName = PropertyKey;
```

  ### <a id="EventUnsubscribeFunction"></a>EventUnsubscribeFunction

[**@xylabs/sdk-js**](#../README)

***

```ts
type EventUnsubscribeFunction = () => void;
```

## Returns

`void`

  ### <a id="EventsParams"></a>EventsParams

[**@xylabs/sdk-js**](#../README)

***

```ts
type EventsParams = BaseParams<{
  debug?: DebugOptions;
}>;
```

  ### <a id="FieldType"></a>FieldType

[**@xylabs/sdk-js**](#../README)

***

```ts
type FieldType = 
  | "string"
  | "number"
  | "object"
  | "symbol"
  | "undefined"
  | "null"
  | "array"
  | "function";
```

  ### <a id="Hash"></a>Hash

[**@xylabs/sdk-js**](#../README)

***

```ts
type Hash = z.infer<typeof HashZod>;
```

  ### <a id="HashBitLength"></a>HashBitLength

[**@xylabs/sdk-js**](#../README)

***

```ts
type HashBitLength = 32 | 64 | 128 | 256 | 512 | 1024 | 2048 | 4096;
```

  ### <a id="Hex"></a>Hex

[**@xylabs/sdk-js**](#../README)

***

```ts
type Hex = z.infer<typeof HexZod>;
```

  ### <a id="IdentityFunction"></a>IdentityFunction

[**@xylabs/sdk-js**](#../README)

***

```ts
type IdentityFunction<T> = (value) => value is T;
```

## Type Parameters

### T

`T`

## Parameters

### value

`unknown`

## Returns

`value is T`

  ### <a id="JsonArray"></a>JsonArray

[**@xylabs/sdk-js**](#../README)

***

```ts
type JsonArray = z.infer<typeof JsonArrayZod>;
```

  ### <a id="JsonObject"></a>JsonObject

[**@xylabs/sdk-js**](#../README)

***

```ts
type JsonObject = z.infer<typeof JsonObjectZod>;
```

  ### <a id="JsonValue"></a>JsonValue

[**@xylabs/sdk-js**](#../README)

***

```ts
type JsonValue = z.infer<typeof JsonValueZod>;
```

  ### <a id="LogFunction"></a>LogFunction

[**@xylabs/sdk-js**](#../README)

***

```ts
type LogFunction = (...data) => void;
```

## Parameters

### data

...`unknown`[]

## Returns

`void`

  ### <a id="LogLevelKey"></a>LogLevelKey

[**@xylabs/sdk-js**](#../README)

***

```ts
type LogLevelKey = EnumKey<typeof LogLevel>;
```

  ### <a id="LogLevelValue"></a>LogLevelValue

[**@xylabs/sdk-js**](#../README)

***

```ts
type LogLevelValue = EnumValue<typeof LogLevel>;
```

  ### <a id="LogVerbosity"></a>LogVerbosity

[**@xylabs/sdk-js**](#../README)

***

```ts
type LogVerbosity = LogLevelKey;
```

  ### <a id="MetaEventData"></a>MetaEventData

[**@xylabs/sdk-js**](#../README)

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

  ### <a id="NullablePromisable"></a>NullablePromisable

[**@xylabs/sdk-js**](#../README)

***

```ts
type NullablePromisable<T, V> = Promisable<T | null, V>;
```

## Type Parameters

### T

`T`

### V

`V` = `never`

  ### <a id="NullablePromisableArray"></a>NullablePromisableArray

[**@xylabs/sdk-js**](#../README)

***

```ts
type NullablePromisableArray<T, V> = PromisableArray<T | null, V>;
```

## Type Parameters

### T

`T`

### V

`V` = `never`

  ### <a id="ObjectTypeShape"></a>ObjectTypeShape

[**@xylabs/sdk-js**](#../README)

***

```ts
type ObjectTypeShape = Record<string | number | symbol, FieldType>;
```

  ### <a id="OmitByPredicate"></a>OmitByPredicate

[**@xylabs/sdk-js**](#../README)

***

```ts
type OmitByPredicate<T> = (value, key) => boolean;
```

## Type Parameters

### T

`T` *extends* [`EmptyObject`](#EmptyObject) = `Record`\<`string`, `unknown`\>

## Parameters

### value

`T`\[keyof `T`\]

### key

keyof `T`

## Returns

`boolean`

  ### <a id="OmitStartsWith"></a>OmitStartsWith

[**@xylabs/sdk-js**](#../README)

***

```ts
type OmitStartsWith<T, Prefix> = { [K in keyof T as K extends `${Prefix}${string}` ? never : K]: T[K] };
```

## Type Parameters

### T

`T`

### Prefix

`Prefix` *extends* `string`

  ### <a id="Optional"></a>Optional

[**@xylabs/sdk-js**](#../README)

***

```ts
type Optional<T, F> = Omit<T, F> & Partial<Pick<T, F>>;
```

## Type Parameters

### T

`T` *extends* `object`

### F

`F` *extends* keyof `T`

  ### <a id="OptionalPromisable"></a>OptionalPromisable

[**@xylabs/sdk-js**](#../README)

***

```ts
type OptionalPromisable<T, V> = Promisable<T | undefined, V>;
```

## Type Parameters

### T

`T`

### V

`V` = `never`

  ### <a id="OptionalPromisableArray"></a>OptionalPromisableArray

[**@xylabs/sdk-js**](#../README)

***

```ts
type OptionalPromisableArray<T, V> = PromisableArray<T | undefined, V>;
```

## Type Parameters

### T

`T`

### V

`V` = `never`

  ### <a id="Override"></a>Override

[**@xylabs/sdk-js**](#../README)

***

```ts
type Override<T1, T2> = Omit<T1, keyof T2> & T2;
```

## Type Parameters

### T1

`T1`

### T2

`T2`

  ### <a id="PartialRecord"></a>PartialRecord

[**@xylabs/sdk-js**](#../README)

***

```ts
type PartialRecord<K, T> = { [P in K]?: T };
```

## Type Parameters

### K

`K` *extends* keyof `any`

### T

`T`

## Deprecated

use Partial<Record<>> instead

  ### <a id="PickByPredicate"></a>PickByPredicate

[**@xylabs/sdk-js**](#../README)

***

```ts
type PickByPredicate<T> = (value, key) => boolean;
```

## Type Parameters

### T

`T` *extends* [`EmptyObject`](#EmptyObject) = `Record`\<`string`, `unknown`\>

## Parameters

### value

`T`\[keyof `T`\]

### key

keyof `T`

## Returns

`boolean`

  ### <a id="PickStartsWith"></a>PickStartsWith

[**@xylabs/sdk-js**](#../README)

***

```ts
type PickStartsWith<T, Prefix> = { [K in keyof T as K extends `${Prefix}${string}` ? K : never]: T[K] };
```

## Type Parameters

### T

`T`

### Prefix

`Prefix` *extends* `string`

  ### <a id="Profiler"></a>Profiler

[**@xylabs/sdk-js**](#../README)

***

```ts
type Profiler = Record<string, number[]>;
```

  ### <a id="Promisable"></a>Promisable

[**@xylabs/sdk-js**](#../README)

***

```ts
type Promisable<T, V> = PromiseEx<T, V> | Promise<T> | T;
```

## Type Parameters

### T

`T`

### V

`V` = `never`

  ### <a id="PromisableArray"></a>PromisableArray

[**@xylabs/sdk-js**](#../README)

***

```ts
type PromisableArray<T, V> = Promisable<T[], V>;
```

## Type Parameters

### T

`T`

### V

`V` = `never`

  ### <a id="PromiseExFunc"></a>PromiseExFunc

[**@xylabs/sdk-js**](#../README)

***

```ts
type PromiseExFunc<T> = (resolve?, reject?) => void;
```

## Type Parameters

### T

`T`

## Parameters

### resolve?

[`PromiseExSubFunc`](#PromiseExSubFunc)\<`T`, `void`\>

### reject?

[`PromiseExSubFunc`](#PromiseExSubFunc)\<`T`, `void`\>

## Returns

`void`

  ### <a id="PromiseExSubFunc"></a>PromiseExSubFunc

[**@xylabs/sdk-js**](#../README)

***

```ts
type PromiseExSubFunc<T, TResult> = (value) => TResult;
```

## Type Parameters

### T

`T`

### TResult

`TResult` = `T`

## Parameters

### value

`T`

## Returns

`TResult`

  ### <a id="PromiseExValueFunc"></a>PromiseExValueFunc

[**@xylabs/sdk-js**](#../README)

***

```ts
type PromiseExValueFunc<V> = (value?) => boolean;
```

## Type Parameters

### V

`V`

## Parameters

### value?

`V`

## Returns

`boolean`

  ### <a id="RecordKey"></a>RecordKey

[**@xylabs/sdk-js**](#../README)

***

```ts
type RecordKey = string | number | symbol;
```

  ### <a id="Simplify"></a>Simplify

[**@xylabs/sdk-js**](#../README)

***

```ts
type Simplify<T> = { [K in keyof T]: T[K] } & object;
```

## Type Parameters

### T

`T`

  ### <a id="StandardCreatableStatus"></a>StandardCreatableStatus

[**@xylabs/sdk-js**](#../README)

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

  ### <a id="StringKeyObject"></a>StringKeyObject

[**@xylabs/sdk-js**](#../README)

***

```ts
type StringKeyObject<T> = object;
```

## Type Parameters

### T

`T` = `unknown`

## Index Signature

```ts
[key: string]: T
```

  ### <a id="StringOrAlertFunction"></a>StringOrAlertFunction

[**@xylabs/sdk-js**](#../README)

***

```ts
type StringOrAlertFunction<T> = string | AssertExMessageFunc<T>;
```

## Type Parameters

### T

`T` *extends* [`AnyNonPromise`](#AnyNonPromise)

  ### <a id="TypeCheck"></a>TypeCheck

[**@xylabs/sdk-js**](#../README)

***

```ts
type TypeCheck<T> = {
  (obj): obj is T;
  (obj, config): obj is T;
  (obj, config): obj is T;
};
```

## Type Parameters

### T

`T` *extends* [`TypedValue`](#TypedValue)

## Call Signature

```ts
(obj): obj is T;
```

### Parameters

### obj

[`AnyNonPromise`](#AnyNonPromise)

### Returns

`obj is T`

## Call Signature

```ts
(obj, config): obj is T;
```

### Parameters

### obj

[`AnyNonPromise`](#AnyNonPromise)

### config

[`TypeCheckConfig`](#../interfaces/TypeCheckConfig)

### Returns

`obj is T`

## Call Signature

```ts
(obj, config): obj is T;
```

### Parameters

### obj

[`AnyNonPromise`](#AnyNonPromise)

### config

`number` | [`TypeCheckConfig`](#../interfaces/TypeCheckConfig) | `undefined`

### Returns

`obj is T`

  ### <a id="TypeOfTypes"></a>TypeOfTypes

[**@xylabs/sdk-js**](#../README)

***

```ts
type TypeOfTypes = 
  | "string"
  | "number"
  | "object"
  | "array"
  | "buffer"
  | "null"
  | "undefined"
  | "bigint"
  | "boolean"
  | "function"
  | "symbol";
```

  ### <a id="TypedArray"></a>TypedArray

[**@xylabs/sdk-js**](#../README)

***

```ts
type TypedArray = TypedValue[];
```

  ### <a id="TypedKey"></a>TypedKey

[**@xylabs/sdk-js**](#../README)

***

```ts
type TypedKey<T> = T extends string ? T : string | number | symbol;
```

## Type Parameters

### T

`T` *extends* `string` \| `void` = `void`

  ### <a id="TypedObject"></a>TypedObject

[**@xylabs/sdk-js**](#../README)

***

```ts
type TypedObject = 
  | {
[key: string | number | symbol]: TypedValue;
}
  | object;
```

  ### <a id="TypedValue"></a>TypedValue

[**@xylabs/sdk-js**](#../README)

***

```ts
type TypedValue = 
  | bigint
  | string
  | number
  | boolean
  | null
  | TypedObject
  | TypedArray
  | Function
  | symbol
  | undefined;
```

  ### <a id="WithAdditional"></a>WithAdditional

[**@xylabs/sdk-js**](#../README)

***

```ts
type WithAdditional<T, TAdditional> = TAdditional extends EmptyObject ? T & TAdditional : T;
```

## Type Parameters

### T

`T` *extends* [`EmptyObject`](#EmptyObject) \| `void`

### TAdditional

`TAdditional` *extends* [`EmptyObject`](#EmptyObject) \| `void` = `void`

  ### <a id="ZodFactoryConfig"></a>ZodFactoryConfig

[**@xylabs/sdk-js**](#../README)

***

```ts
type ZodFactoryConfig = 
  | AssertConfig
  | ZodFactoryConfigObject;
```

### variables

  ### <a id="ADDRESS_LENGTH"></a>ADDRESS_LENGTH

[**@xylabs/sdk-js**](#../README)

***

```ts
const ADDRESS_LENGTH: 40;
```

  ### <a id="AddressRegEx"></a>AddressRegEx

[**@xylabs/sdk-js**](#../README)

***

```ts
const AddressRegEx: RegExp;
```

  ### <a id="AddressTransformZod"></a>AddressTransformZod

[**@xylabs/sdk-js**](#../README)

***

```ts
const AddressTransformZod: z.ZodPipe<z.ZodPipe<z.ZodUnion<readonly [z.ZodString, z.ZodBigInt, z.ZodNumber]>, z.ZodTransform<string, string | number | bigint>>, z.ZodTransform<Lowercase<string> & object & object, string>>;
```

  ### <a id="AddressValidationZod"></a>AddressValidationZod

[**@xylabs/sdk-js**](#../README)

***

```ts
const AddressValidationZod: z.ZodPipe<z.ZodString, z.ZodTransform<Lowercase<string> & object & object, string>>;
```

  ### <a id="AddressZod"></a>AddressZod

[**@xylabs/sdk-js**](#../README)

***

```ts
const AddressZod: z.ZodPipe<z.ZodString, z.ZodTransform<BrandedAddress, string>>;
```

  ### <a id="ApiStage"></a>ApiStage

[**@xylabs/sdk-js**](#../README)

***

```ts
const ApiStage: Enum<{
  Beta: "beta";
  Local: "local";
  Prod: "prod";
}>;
```

  ### <a id="AsObjectFactory"></a>AsObjectFactory

[**@xylabs/sdk-js**](#../README)

***

```ts
const AsObjectFactory: object;
```

## Type Declaration

### create()

```ts
create: <T>(typeCheck) => AsTypeFunction;
```

### Type Parameters

#### T

`T` *extends* [`TypedObject`](#../type-aliases/TypedObject)

### Parameters

#### typeCheck

[`TypeCheck`](#../type-aliases/TypeCheck)\<`T`\>

### Returns

[`AsTypeFunction`](#../type-aliases/AsTypeFunction)

### createOptional()

```ts
createOptional: <T>(typeCheck) => (value) => T | undefined;
```

### Type Parameters

#### T

`T` *extends* [`TypedObject`](#../type-aliases/TypedObject)

### Parameters

#### typeCheck

[`TypeCheck`](#../type-aliases/TypeCheck)\<`T`\>

### Returns

```ts
(value): T | undefined;
```

#### Parameters

##### value

[`AnyNonPromise`](#../type-aliases/AnyNonPromise)

#### Returns

`T` \| `undefined`

  ### <a id="AsTypeFactory"></a>AsTypeFactory

[**@xylabs/sdk-js**](#../README)

***

```ts
const AsTypeFactory: object;
```

## Type Declaration

### create()

```ts
create: <T>(typeCheck) => AsTypeFunction<T>;
```

### Type Parameters

#### T

`T` *extends* [`AnyNonPromise`](#../type-aliases/AnyNonPromise)

### Parameters

#### typeCheck

[`TypeCheck`](#../type-aliases/TypeCheck)\<`T`\>

### Returns

[`AsTypeFunction`](#../type-aliases/AsTypeFunction)\<`T`\>

### createOptional()

```ts
createOptional: <T>(typeCheck) => (value) => T | undefined;
```

### Type Parameters

#### T

`T` *extends* [`AnyNonPromise`](#../type-aliases/AnyNonPromise)

### Parameters

#### typeCheck

[`TypeCheck`](#../type-aliases/TypeCheck)\<`T`\>

### Returns

```ts
(value): T | undefined;
```

#### Parameters

##### value

[`AnyNonPromise`](#../type-aliases/AnyNonPromise)

#### Returns

`T` \| `undefined`

  ### <a id="BigIntToJsonZod"></a>BigIntToJsonZod

[**@xylabs/sdk-js**](#../README)

***

```ts
const BigIntToJsonZod: z.ZodPipe<z.ZodBigInt, z.ZodTransform<BrandedHex, bigint>>;
```

  ### <a id="Buffer"></a>Buffer

[**@xylabs/sdk-js**](#../README)

***

```ts
const Buffer: BufferConstructor;
```

  ### <a id="ETH_ZERO_ADDRESS"></a>ETH_ZERO_ADDRESS

[**@xylabs/sdk-js**](#../README)

***

```ts
const ETH_ZERO_ADDRESS: EthAddress;
```

  ### <a id="Enum"></a>Enum

[**@xylabs/sdk-js**](#../README)

***

```ts
const Enum: <T>(obj) => Enum<T>;
```

Transforms a given record object into a readonly "enum-like" structure while preserving
the literal types of its values. This allows you to use the returned object both at runtime
(for lookups) and at compile time (for strongly typed values).

To maintain literal types (i.e., prevent them from being widened to `string`, `number`, etc.),
ensure you annotate your object with `as const` before passing it to `Enum`.

## Type Parameters

### T

`T` *extends* `Record`\<`string` \| `number` \| `symbol`, `unknown`\>

A record type with string keys and any kind of values.

## Parameters

### obj

`Readonly`\<`T`\>

A readonly record object annotated with `as const`.

## Returns

[`Enum`](#../type-aliases/Enum)\<`T`\>

A readonly version of the provided record, preserving exact literal value types.

## Example

```typescript
// Defining a record with literal types using as const:
const DnsRecordType = Enum({
  A: 1,
  AAAA: 28,
  CAA: 257,
  CNAME: 5,
  DNAME: 39,
  MX: 15,
  NS: 2,
  PTR: 12,
  SOA: 6,
  SPF: 99,
  SRV: 33,
  TXT: 16,
} as const);

// DnsRecordType is now a readonly object:
// {
//   readonly A: 1;
//   readonly AAAA: 28;
//   readonly CAA: 257;
//   readonly CNAME: 5;
//   readonly DNAME: 39;
//   readonly MX: 15;
//   readonly NS: 2;
//   readonly PTR: 12;
//   readonly SOA: 6;
//   readonly SPF: 99;
//   readonly SRV: 33;
//   readonly TXT: 16;
// }
```

  ### <a id="EthAddressFromStringSchema"></a>EthAddressFromStringSchema

[**@xylabs/sdk-js**](#../README)

***

```ts
const EthAddressFromStringSchema: z.ZodPipe<z.ZodString, z.ZodTransform<EthAddress, string>>;
```

## Deprecated

use EthAddressFromStringZod

  ### <a id="EthAddressFromStringZod"></a>EthAddressFromStringZod

[**@xylabs/sdk-js**](#../README)

***

```ts
const EthAddressFromStringZod: z.ZodPipe<z.ZodString, z.ZodTransform<EthAddress, string>>;
```

  ### <a id="EthAddressRegEx"></a>EthAddressRegEx

[**@xylabs/sdk-js**](#../README)

***

```ts
const EthAddressRegEx: RegExp;
```

  ### <a id="EthAddressToStringSchema"></a>EthAddressToStringSchema

[**@xylabs/sdk-js**](#../README)

***

```ts
const EthAddressToStringSchema: z.ZodString;
```

## Deprecated

use EthAddressToStringZod

  ### <a id="EthAddressToStringZod"></a>EthAddressToStringZod

[**@xylabs/sdk-js**](#../README)

***

```ts
const EthAddressToStringZod: z.ZodString;
```

  ### <a id="EthAddressZod"></a>EthAddressZod

[**@xylabs/sdk-js**](#../README)

***

```ts
const EthAddressZod: z.ZodString & z.ZodType<EthAddress, string, z.core.$ZodTypeInternals<EthAddress, string>>;
```

  ### <a id="HASH_LENGTH"></a>HASH_LENGTH

[**@xylabs/sdk-js**](#../README)

***

```ts
const HASH_LENGTH: 32;
```

  ### <a id="HashBitLength"></a>HashBitLength

[**@xylabs/sdk-js**](#../README)

***

```ts
HashBitLength: HashBitLength[];
```

  ### <a id="HashRegEx"></a>HashRegEx

[**@xylabs/sdk-js**](#../README)

***

```ts
const HashRegEx: RegExp;
```

  ### <a id="HashToJsonZod"></a>HashToJsonZod

[**@xylabs/sdk-js**](#../README)

***

```ts
const HashToJsonZod: z.ZodPipe<z.ZodPipe<z.ZodString, z.ZodTransform<BrandedHash, string>>, z.ZodTransform<string, BrandedHash>>;
```

  ### <a id="HashZod"></a>HashZod

[**@xylabs/sdk-js**](#../README)

***

```ts
const HashZod: z.ZodPipe<z.ZodString, z.ZodTransform<BrandedHash, string>>;
```

  ### <a id="HexRegEx"></a>HexRegEx

[**@xylabs/sdk-js**](#../README)

***

```ts
const HexRegEx: RegExp;
```

  ### <a id="HexRegExMinMax"></a>HexRegExMinMax

[**@xylabs/sdk-js**](#../README)

***

```ts
const HexRegExMinMax: (minBytes?, maxBytes?) => RegExp;
```

## Parameters

### minBytes?

`number`

### maxBytes?

`number`

## Returns

`RegExp`

  ### <a id="HexRegExMinMaxMixedCaseWithPrefix"></a>HexRegExMinMaxMixedCaseWithPrefix

[**@xylabs/sdk-js**](#../README)

***

```ts
const HexRegExMinMaxMixedCaseWithPrefix: (minBytes?, maxBytes?) => RegExp;
```

## Parameters

### minBytes?

`number`

### maxBytes?

`number`

## Returns

`RegExp`

  ### <a id="HexRegExWithPrefix"></a>HexRegExWithPrefix

[**@xylabs/sdk-js**](#../README)

***

```ts
const HexRegExWithPrefix: RegExp;
```

  ### <a id="HexZod"></a>HexZod

[**@xylabs/sdk-js**](#../README)

***

```ts
const HexZod: z.ZodPipe<z.ZodString, z.ZodTransform<BrandedHex, string>>;
```

  ### <a id="JsonObjectZod"></a>JsonObjectZod

[**@xylabs/sdk-js**](#../README)

***

```ts
const JsonObjectZod: z.ZodRecord<z.ZodString, z.ZodType<unknown, unknown, z.core.$ZodTypeInternals<unknown, unknown>>>;
```

  ### <a id="JsonToBigIntZod"></a>JsonToBigIntZod

[**@xylabs/sdk-js**](#../README)

***

```ts
const JsonToBigIntZod: z.ZodPipe<z.ZodPipe<z.ZodString, z.ZodTransform<BrandedHex, string>>, z.ZodTransform<bigint, BrandedHex>>;
```

  ### <a id="JsonToHashZod"></a>JsonToHashZod

[**@xylabs/sdk-js**](#../README)

***

```ts
const JsonToHashZod: z.ZodPipe<z.ZodString, z.ZodTransform<BrandedHash, string>>;
```

  ### <a id="LogLevel"></a>LogLevel

[**@xylabs/sdk-js**](#../README)

***

```ts
const LogLevel: Enum<{
  error: 1;
  warn: 2;
  info: 3;
  log: 4;
  debug: 5;
  trace: 6;
}>;
```

  ### <a id="NoOpLogFunction"></a>NoOpLogFunction

[**@xylabs/sdk-js**](#../README)

***

```ts
const NoOpLogFunction: (..._data) => undefined;
```

## Parameters

### \_data

...`unknown`[]

## Returns

`undefined`

  ### <a id="URL"></a>URL

[**@xylabs/sdk-js**](#../README)

***

```ts
const URL: {
(url, base?): URL;
  prototype: URL;
  canParse: boolean;
  createObjectURL: string;
  parse: URL | null;
  revokeObjectURL: void;
};
```

## Type Declaration

## Parameters

### url

`string` | `URL`

### base?

`string` | `URL`

## Returns

`URL`

### prototype

```ts
prototype: URL;
```

### canParse()

```ts
canParse(input, base?): boolean;
```

### Parameters

#### input

`string` | `URL`

#### base?

`string` | `URL`

### Returns

`boolean`

### createObjectURL()

```ts
createObjectURL(blob): string;
```

### Parameters

#### blob

`Blob`

### Returns

`string`

### parse()

```ts
parse(input, base?): URL | null;
```

### Parameters

#### input

`string` | `URL`

#### base?

`string` | `URL`

### Returns

`URL` \| `null`

### revokeObjectURL()

```ts
revokeObjectURL(id): void;
```

### Parameters

#### id

`string`

### Returns

`void`

  ### <a id="ZERO_ADDRESS"></a>ZERO_ADDRESS

[**@xylabs/sdk-js**](#../README)

***

```ts
const ZERO_ADDRESS: Address;
```

  ### <a id="ZERO_HASH"></a>ZERO_HASH

[**@xylabs/sdk-js**](#../README)

***

```ts
const ZERO_HASH: Hash;
```

  ### <a id="asAnyObject"></a>asAnyObject

[**@xylabs/sdk-js**](#../README)

***

```ts
const asAnyObject: AsTypeFunction;
```

  ### <a id="asJsonArray"></a>asJsonArray

[**@xylabs/sdk-js**](#../README)

***

```ts
const asJsonArray: {
<T>  (value): T & unknown[] | undefined;
<T>  (value, assert): T & unknown[];
};
```

## Call Signature

```ts
<T>(value): T & unknown[] | undefined;
```

### Type Parameters

### T

`T`

### Parameters

### value

`T`

### Returns

`T` & `unknown`[] \| `undefined`

## Call Signature

```ts
<T>(value, assert): T & unknown[];
```

### Type Parameters

### T

`T`

### Parameters

### value

`T`

### assert

[`ZodFactoryConfig`](#../type-aliases/ZodFactoryConfig)

### Returns

`T` & `unknown`[]

  ### <a id="asJsonObject"></a>asJsonObject

[**@xylabs/sdk-js**](#../README)

***

```ts
const asJsonObject: {
<T>  (value): T & Record<string, unknown> | undefined;
<T>  (value, assert): T & Record<string, unknown>;
};
```

## Call Signature

```ts
<T>(value): T & Record<string, unknown> | undefined;
```

### Type Parameters

### T

`T`

### Parameters

### value

`T`

### Returns

`T` & `Record`\<`string`, `unknown`\> \| `undefined`

## Call Signature

```ts
<T>(value, assert): T & Record<string, unknown>;
```

### Type Parameters

### T

`T`

### Parameters

### value

`T`

### assert

[`ZodFactoryConfig`](#../type-aliases/ZodFactoryConfig)

### Returns

`T` & `Record`\<`string`, `unknown`\>

  ### <a id="asJsonValue"></a>asJsonValue

[**@xylabs/sdk-js**](#../README)

***

```ts
const asJsonValue: {
<T>  (value): T | undefined;
<T>  (value, assert): T;
};
```

## Call Signature

```ts
<T>(value): T | undefined;
```

### Type Parameters

### T

`T`

### Parameters

### value

`T`

### Returns

`T` \| `undefined`

## Call Signature

```ts
<T>(value, assert): T;
```

### Type Parameters

### T

`T`

### Parameters

### value

`T`

### assert

[`ZodFactoryConfig`](#../type-aliases/ZodFactoryConfig)

### Returns

`T`

  ### <a id="assertError"></a>assertError

[**@xylabs/sdk-js**](#../README)

***

```ts
const assertError: (value, assert, defaultMessage) => undefined;
```

## Parameters

### value

`unknown`

### assert

[`AssertConfig`](#../type-aliases/AssertConfig) | `undefined`

### defaultMessage

`string`

## Returns

`undefined`

  ### <a id="axios"></a>axios

[**@xylabs/sdk-js**](#../README)

***

```ts
const axios: Axios;
```

## Deprecated

use axiosJson instead

  ### <a id="axiosJson"></a>axiosJson

[**@xylabs/sdk-js**](#../README)

***

```ts
const axiosJson: Axios;
```

  ### <a id="bitsToNibbles"></a>bitsToNibbles

[**@xylabs/sdk-js**](#../README)

***

```ts
const bitsToNibbles: (value) => number;
```

## Parameters

### value

`number`

## Returns

`number`

  ### <a id="bufferPolyfill"></a>bufferPolyfill

[**@xylabs/sdk-js**](#../README)

***

```ts
const bufferPolyfill: () => void;
```

## Returns

`void`

  ### <a id="clearTimeoutEx"></a>clearTimeoutEx

[**@xylabs/sdk-js**](#../README)

***

```ts
const clearTimeoutEx: (id) => void;
```

## Parameters

### id

`string`

## Returns

`void`

  ### <a id="containsAll"></a>containsAll

[**@xylabs/sdk-js**](#../README)

***

```ts
const containsAll: <T>(source, target) => boolean;
```

## Type Parameters

### T

`T`

## Parameters

### source

`T`[]

### target

`T`[]

## Returns

`boolean`

  ### <a id="createProfiler"></a>createProfiler

[**@xylabs/sdk-js**](#../README)

***

```ts
const createProfiler: () => Profiler;
```

## Returns

[`Profiler`](#../type-aliases/Profiler)

  ### <a id="deepMerge"></a>deepMerge

[**@xylabs/sdk-js**](#../README)

***

```ts
const deepMerge: <T>(...objects) => MergeAll<T>;
```

Deeply merges multiple objects into a new object.

## Type Parameters

### T

`T` *extends* [`AnyObject`](#../type-aliases/AnyObject)[]

## Parameters

### objects

...`T`

Multiple objects to merge deeply.
The function merges properties from all objects into a new object.
If a property exists in multiple objects, the last object's value will be used.
If a property is an object, it will be merged recursively.
If a property is an array, it will be overwritten by the last object's value.
If a property is a primitive value, it will be overwritten by the last object's value.
If a property is undefined in the source, it will be skipped.
If a property is a symbol, it will be merged as well.

## Returns

`MergeAll`\<`T`\>

A new object with the merged properties.

  ### <a id="defaultForgetNodeConfig"></a>defaultForgetNodeConfig

[**@xylabs/sdk-js**](#../README)

***

```ts
const defaultForgetNodeConfig: ForgetNodeConfig<unknown>;
```

  ### <a id="delay"></a>delay

[**@xylabs/sdk-js**](#../README)

***

```ts
const delay: (ms) => Promise<unknown>;
```

## Parameters

### ms

`number`

## Returns

`Promise`\<`unknown`\>

  ### <a id="difference"></a>difference

[**@xylabs/sdk-js**](#../README)

***

```ts
const difference: <TKey>(a, b) => Set<TKey>;
```

## Type Parameters

### TKey

`TKey`

## Parameters

### a

`Set`\<`TKey`\>

### b

`Set`\<`TKey`\>

## Returns

`Set`\<`TKey`\>

  ### <a id="disableGloballyUnique"></a>disableGloballyUnique

[**@xylabs/sdk-js**](#../README)

***

```ts
const disableGloballyUnique: () => void;
```

## Returns

`void`

  ### <a id="distinct"></a>distinct

[**@xylabs/sdk-js**](#../README)

***

```ts
const distinct: <T>(value, index, array) => boolean;
```

## Type Parameters

### T

`T`

## Parameters

### value

`T`

### index

`number`

### array

`T`[]

## Returns

`boolean`

  ### <a id="ellipsize"></a>ellipsize

[**@xylabs/sdk-js**](#../README)

***

```ts
const ellipsize: (value, length?) => string;
```

## Parameters

### value

`string`

### length?

`number`

## Returns

`string`

  ### <a id="equalArrayBuffers"></a>equalArrayBuffers

[**@xylabs/sdk-js**](#../README)

***

```ts
const equalArrayBuffers: (a1, a2) => boolean;
```

## Parameters

### a1

`ArrayBufferLike`

### a2

`ArrayBufferLike`

## Returns

`boolean`

  ### <a id="exists"></a>exists

[**@xylabs/sdk-js**](#../README)

***

```ts
const exists: <T>(x?) => x is NonNullable<T>;
```

Used to type narrow an object which is possibly null or undefined. Works well
with functional Array methods. For example:

## Type Parameters

### T

`T`

## Parameters

### x?

The object which is potentially undefined or null

`T` | `null`

## Returns

`x is NonNullable<T>`

False if the object is null/undefined, true otherwise

## Example

```ts
const payloads: XyoPayload[] = boundWitness._payloads?.filter(exists) || []
```

  ### <a id="filterAs"></a>filterAs

[**@xylabs/sdk-js**](#../README)

***

```ts
const filterAs: <In, Out>(x, predicate) => NonNullable<Out>[];
```

## Type Parameters

### In

`In`

### Out

`Out`

## Parameters

### x

`In`[]

### predicate

(`a`) => `Out`

## Returns

`NonNullable`\<`Out`\>[]

  ### <a id="filterAsync"></a>filterAsync

[**@xylabs/sdk-js**](#../README)

***

```ts
const filterAsync: <T>(array, predicate) => Promise<T[]>;
```

Returns the elements of an array that meet the condition specified in a callback function.

## Type Parameters

### T

`T`

## Parameters

### array

`T`[]

The array to filter.

### predicate

(`value`, `index`, `array`) => `Promise`\<`boolean`\>

A function that accepts up to three arguments. The filter method calls the predicate function one time for each element in the array.

## Returns

`Promise`\<`T`[]\>

The elements of an array that meet the condition specified in a callback function.

  ### <a id="findAs"></a>findAs

[**@xylabs/sdk-js**](#../README)

***

```ts
const findAs: <In, Out>(x, predicate) => NonNullable<Out> | undefined;
```

## Type Parameters

### In

`In`

### Out

`Out`

## Parameters

### x

`In`[]

### predicate

(`a`) => `Out`

## Returns

`NonNullable`\<`Out`\> \| `undefined`

  ### <a id="findLastAs"></a>findLastAs

[**@xylabs/sdk-js**](#../README)

***

```ts
const findLastAs: <In, Out>(x, predicate) => NonNullable<Out> | undefined;
```

## Type Parameters

### In

`In`

### Out

`Out`

## Parameters

### x

`In`[]

### predicate

(`a`) => `Out`

## Returns

`NonNullable`\<`Out`\> \| `undefined`

  ### <a id="flatten"></a>flatten

[**@xylabs/sdk-js**](#../README)

***

```ts
const flatten: <T>(a?, b?) => T[];
```

## Type Parameters

### T

`T`

## Parameters

### a?

`T` | `ConcatArray`\<`T`\>

### b?

`T` | `ConcatArray`\<`T`\>

## Returns

`T`[]

  ### <a id="forget"></a>forget

[**@xylabs/sdk-js**](#../README)

***

```ts
const forget: <T>(promise, config?) => void;
```

## Type Parameters

### T

`T`

## Parameters

### promise

[`Promisable`](#../type-aliases/Promisable)\<`T`\>

### config?

[`ForgetNodeConfig`](#../interfaces/ForgetNodeConfig)\<`T`\>

## Returns

`void`

  ### <a id="fromFixedPoint"></a>fromFixedPoint

[**@xylabs/sdk-js**](#../README)

***

```ts
const fromFixedPoint: (value, places?) => bigint;
```

## Parameters

### value

`bigint`

### places?

`number`

## Returns

`bigint`

  ### <a id="fulfilled"></a>fulfilled

[**@xylabs/sdk-js**](#../README)

***

```ts
const fulfilled: <T>(val) => val is PromiseFulfilledResult<T>;
```

For use with Promise.allSettled to filter only successful results

## Type Parameters

### T

`T`

## Parameters

### val

`PromiseSettledResult`\<`T`\>

## Returns

`val is PromiseFulfilledResult<T>`

  ### <a id="fulfilledValues"></a>fulfilledValues

[**@xylabs/sdk-js**](#../README)

***

```ts
const fulfilledValues: <T>(previousValue, currentValue) => T[];
```

For use with Promise.allSettled to reduce to only successful result values

## Type Parameters

### T

`T`

## Parameters

### previousValue

`T`[]

### currentValue

`PromiseSettledResult`\<`T`\>

## Returns

`T`[]

## Examples

```ts
const resolved = Promise.resolve('resolved')
const rejected = Promise.reject('rejected')
const settled = await Promise.allSettled([resolved, rejected])
const results = settled.reduce(fulfilledValues, [] as string[])
// results === [ 'resolved' ]
```

```ts
const resolved = Promise.resolve('resolved')
const rejected = Promise.reject('rejected')
const settled = await Promise.allSettled([resolved, rejected])
const results = settled.reduce<string[]>(fulfilledValues, [])
// results === [ 'resolved' ]
```

  ### <a id="functionName"></a>functionName

[**@xylabs/sdk-js**](#../README)

***

```ts
const functionName: (depth?) => string;
```

## Parameters

### depth?

`number`

## Returns

`string`

  ### <a id="getApiStage"></a>getApiStage

[**@xylabs/sdk-js**](#../README)

***

```ts
const getApiStage: (hostname) => "beta" | "local" | "prod";
```

## Parameters

### hostname

`string`

## Returns

`"beta"` \| `"local"` \| `"prod"`

  ### <a id="getFunctionName"></a>getFunctionName

[**@xylabs/sdk-js**](#../README)

***

```ts
const getFunctionName: (depth?) => string;
```

## Parameters

### depth?

`number`

## Returns

`string`

  ### <a id="globallyUnique"></a>globallyUnique

[**@xylabs/sdk-js**](#../README)

***

```ts
const globallyUnique: (name, value, domain?) => string;
```

## Parameters

### name

`string` | `symbol`

### value

`unknown`

### domain?

`string`

## Returns

`string`

  ### <a id="handleError"></a>handleError

[**@xylabs/sdk-js**](#../README)

***

```ts
const handleError: <T>(error, handler) => T;
```

## Type Parameters

### T

`T`

## Parameters

### error

`any`

### handler

(`error`) => `T`

## Returns

`T`

  ### <a id="handleErrorAsync"></a>handleErrorAsync

[**@xylabs/sdk-js**](#../README)

***

```ts
const handleErrorAsync: <T>(error, handler) => Promise<T>;
```

## Type Parameters

### T

`T`

## Parameters

### error

`any`

### handler

(`error`) => `Promise`\<`T`\>

## Returns

`Promise`\<`T`\>

  ### <a id="hasAllLabels"></a>hasAllLabels

[**@xylabs/sdk-js**](#../README)

***

```ts
const hasAllLabels: (source?, required?) => boolean;
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

  ### <a id="hexFrom"></a>hexFrom

[**@xylabs/sdk-js**](#../README)

***

```ts
const hexFrom: (value, config?) => Hex;
```

Takes unknown value and tries our best to convert it to a hex string

## Parameters

### value

`string` | `number` | `bigint` | `ArrayBufferLike`

### config?

[`HexConfig`](#../interfaces/HexConfig)

## Returns

[`Hex`](#../type-aliases/Hex)

  ### <a id="hexFromArrayBuffer"></a>hexFromArrayBuffer

[**@xylabs/sdk-js**](#../README)

***

```ts
const hexFromArrayBuffer: (buffer, config?) => Hex;
```

Convert an ArrayBuffer to a hex string

## Parameters

### buffer

`ArrayBufferLike`

### config?

[`HexConfig`](#../interfaces/HexConfig)

## Returns

[`Hex`](#../type-aliases/Hex)

  ### <a id="hexFromBigInt"></a>hexFromBigInt

[**@xylabs/sdk-js**](#../README)

***

```ts
const hexFromBigInt: (value, config?) => Hex;
```

Convert a bigint to a hex string

## Parameters

### value

`bigint`

### config?

[`HexConfig`](#../interfaces/HexConfig)

## Returns

[`Hex`](#../type-aliases/Hex)

  ### <a id="hexFromHexString"></a>hexFromHexString

[**@xylabs/sdk-js**](#../README)

***

```ts
const hexFromHexString: (value, config?) => Hex;
```

## Parameters

### value

`string`

### config?

[`HexConfig`](#../interfaces/HexConfig)

## Returns

[`Hex`](#../type-aliases/Hex)

  ### <a id="hexFromNumber"></a>hexFromNumber

[**@xylabs/sdk-js**](#../README)

***

```ts
const hexFromNumber: (value, config?) => Hex;
```

## Parameters

### value

`number`

### config?

[`HexConfig`](#../interfaces/HexConfig)

## Returns

[`Hex`](#../type-aliases/Hex)

  ### <a id="ifDefined"></a>ifDefined

[**@xylabs/sdk-js**](#../README)

***

```ts
const ifDefined: <T>(value, func) => T | undefined;
```

## Type Parameters

### T

`T`

## Parameters

### value

`T`

### func

(`value`) => `void`

## Returns

`T` \| `undefined`

  ### <a id="ifTypeOf"></a>ifTypeOf

[**@xylabs/sdk-js**](#../README)

***

```ts
const ifTypeOf: <T, R>(typeName, value, trueFunc, isFunc?) => R | undefined;
```

## Type Parameters

### T

`T`

### R

`R`

## Parameters

### typeName

[`TypeOfTypes`](#../type-aliases/TypeOfTypes)

### value

`unknown`

### trueFunc

(`value`) => `R`

### isFunc?

(`value`) => `boolean`

## Returns

`R` \| `undefined`

  ### <a id="intersection"></a>intersection

[**@xylabs/sdk-js**](#../README)

***

```ts
const intersection: <TKey>(a, b) => Set<TKey>;
```

## Type Parameters

### TKey

`TKey`

## Parameters

### a

`Set`\<`TKey`\>

### b

`Set`\<`TKey`\>

## Returns

`Set`\<`TKey`\>

  ### <a id="isAddress"></a>isAddress

[**@xylabs/sdk-js**](#../README)

***

```ts
const isAddress: (value, config?) => value is Address;
```

## Parameters

### value

`unknown`

### config?

[`HexConfig`](#../interfaces/HexConfig)

## Returns

`value is Address`

  ### <a id="isBrowser"></a>isBrowser

[**@xylabs/sdk-js**](#../README)

***

```ts
const isBrowser: () => boolean;
```

## Returns

`boolean`

  ### <a id="isEthAddress"></a>isEthAddress

[**@xylabs/sdk-js**](#../README)

***

```ts
const isEthAddress: (value, config?) => value is EthAddress;
```

## Parameters

### value

`unknown`

### config?

[`HexConfig`](#../interfaces/HexConfig)

## Returns

`value is EthAddress`

  ### <a id="isEthAddressWrapper"></a>isEthAddressWrapper

[**@xylabs/sdk-js**](#../README)

***

```ts
const isEthAddressWrapper: (obj) => obj is { type: string } & EthAddressWrapper;
```

## Parameters

### obj

### type

`string`

## Returns

`obj is { type: string } & EthAddressWrapper`

  ### <a id="isHash"></a>isHash

[**@xylabs/sdk-js**](#../README)

***

```ts
const isHash: (value, bitLength?) => value is Hash;
```

## Parameters

### value

`unknown`

### bitLength?

[`HashBitLength`](#../type-aliases/HashBitLength)

## Returns

`value is Hash`

  ### <a id="isHashBitLength"></a>isHashBitLength

[**@xylabs/sdk-js**](#../README)

***

```ts
const isHashBitLength: (value) => value is HashBitLength;
```

## Parameters

### value

`unknown`

## Returns

`value is HashBitLength`

  ### <a id="isHex"></a>isHex

[**@xylabs/sdk-js**](#../README)

***

```ts
const isHex: (value, config?) => value is Hex;
```

## Parameters

### value

`unknown`

### config?

[`HexConfig`](#../interfaces/HexConfig)

## Returns

`value is Hex`

  ### <a id="isHexZero"></a>isHexZero

[**@xylabs/sdk-js**](#../README)

***

```ts
const isHexZero: (value?) => boolean | undefined;
```

## Parameters

### value?

`string`

## Returns

`boolean` \| `undefined`

  ### <a id="isJsonArray"></a>isJsonArray

[**@xylabs/sdk-js**](#../README)

***

```ts
const isJsonArray: <T>(value) => value is T & unknown[];
```

## Type Parameters

### T

`T`

## Parameters

### value

`T`

## Returns

`value is T & unknown[]`

  ### <a id="isJsonObject"></a>isJsonObject

[**@xylabs/sdk-js**](#../README)

***

```ts
const isJsonObject: <T>(value) => value is T & Record<string, unknown>;
```

## Type Parameters

### T

`T`

## Parameters

### value

`T`

## Returns

`value is T & Record<string, unknown>`

  ### <a id="isJsonValue"></a>isJsonValue

[**@xylabs/sdk-js**](#../README)

***

```ts
const isJsonValue: <T>(value) => value is T;
```

## Type Parameters

### T

`T`

## Parameters

### value

`T`

## Returns

`value is T`

  ### <a id="isLocalhost"></a>isLocalhost

[**@xylabs/sdk-js**](#../README)

***

```ts
const isLocalhost: (hostname) => boolean;
```

## Parameters

### hostname

`string`

## Returns

`boolean`

  ### <a id="isNode"></a>isNode

[**@xylabs/sdk-js**](#../README)

***

```ts
const isNode: () => boolean;
```

## Returns

`boolean`

  ### <a id="isType"></a>isType

[**@xylabs/sdk-js**](#../README)

***

```ts
const isType: (value, expectedType) => boolean;
```

## Parameters

### value

`unknown`

### expectedType

[`FieldType`](#../type-aliases/FieldType)

## Returns

`boolean`

  ### <a id="isTypedArray"></a>isTypedArray

[**@xylabs/sdk-js**](#../README)

***

```ts
const isTypedArray: (value) => value is TypedArray;
```

## Parameters

### value

`unknown`

## Returns

`value is TypedArray`

  ### <a id="isTypedKey"></a>isTypedKey

[**@xylabs/sdk-js**](#../README)

***

```ts
const isTypedKey: (value) => value is TypedKey;
```

## Parameters

### value

`unknown`

## Returns

`value is TypedKey`

  ### <a id="isTypedObject"></a>isTypedObject

[**@xylabs/sdk-js**](#../README)

***

```ts
const isTypedObject: (value) => value is TypedObject;
```

## Parameters

### value

`unknown`

## Returns

`value is TypedObject`

  ### <a id="isTypedValue"></a>isTypedValue

[**@xylabs/sdk-js**](#../README)

***

```ts
const isTypedValue: (value) => value is TypedValue;
```

## Parameters

### value

`unknown`

## Returns

`value is TypedValue`

  ### <a id="isValidTypedFieldPair"></a>isValidTypedFieldPair

[**@xylabs/sdk-js**](#../README)

***

```ts
const isValidTypedFieldPair: (pair) => pair is [key: TypedKey, value: TypedValue];
```

## Parameters

### pair

\[`unknown`, `unknown`\]

## Returns

`pair is [key: TypedKey, value: TypedValue]`

  ### <a id="isWebworker"></a>isWebworker

[**@xylabs/sdk-js**](#../README)

***

```ts
const isWebworker: () => boolean;
```

## Returns

`boolean`

  ### <a id="nibblesToBits"></a>nibblesToBits

[**@xylabs/sdk-js**](#../README)

***

```ts
const nibblesToBits: (value) => number;
```

## Parameters

### value

`number`

## Returns

`number`

  ### <a id="omitBy"></a>omitBy

[**@xylabs/sdk-js**](#../README)

***

```ts
const omitBy: <T>(obj, predicate, maxDepth?) => Partial<T>;
```

## Type Parameters

### T

`T` *extends* [`EmptyObject`](#../type-aliases/EmptyObject)

## Parameters

### obj

`T`

### predicate

[`OmitByPredicate`](#../type-aliases/OmitByPredicate)

### maxDepth?

`number`

## Returns

`Partial`\<`T`\>

  ### <a id="omitByPrefix"></a>omitByPrefix

[**@xylabs/sdk-js**](#../README)

***

```ts
const omitByPrefix: <T, P>(payload, prefix, maxDepth?) => DeepOmitStartsWith<T, P>;
```

## Type Parameters

### T

`T` *extends* [`EmptyObject`](#../type-aliases/EmptyObject)

### P

`P` *extends* `string`

## Parameters

### payload

`T`

### prefix

`P`

### maxDepth?

`number`

## Returns

[`DeepOmitStartsWith`](#../type-aliases/DeepOmitStartsWith)\<`T`, `P`\>

  ### <a id="padHex"></a>padHex

[**@xylabs/sdk-js**](#../README)

***

```ts
const padHex: (hex, byteCount?) => string;
```

## Parameters

### hex

`string`

### byteCount?

`number`

## Returns

`string`

  ### <a id="pickBy"></a>pickBy

[**@xylabs/sdk-js**](#../README)

***

```ts
const pickBy: <T>(obj, predicate, maxDepth?) => Partial<T>;
```

## Type Parameters

### T

`T` *extends* [`EmptyObject`](#../type-aliases/EmptyObject)

## Parameters

### obj

`T`

### predicate

[`PickByPredicate`](#../type-aliases/PickByPredicate)

### maxDepth?

`number`

## Returns

`Partial`\<`T`\>

  ### <a id="pickByPrefix"></a>pickByPrefix

[**@xylabs/sdk-js**](#../README)

***

```ts
const pickByPrefix: <T, P>(payload, prefix, maxDepth?) => DeepPickStartsWith<T, P>;
```

## Type Parameters

### T

`T` *extends* [`EmptyObject`](#../type-aliases/EmptyObject)

### P

`P` *extends* `string`

## Parameters

### payload

`T`

### prefix

`P`

### maxDepth?

`number`

## Returns

[`DeepPickStartsWith`](#../type-aliases/DeepPickStartsWith)\<`T`, `P`\>

  ### <a id="profile"></a>profile

[**@xylabs/sdk-js**](#../README)

***

```ts
const profile: (profiler, name) => void;
```

## Parameters

### profiler

[`Profiler`](#../type-aliases/Profiler)

### name

`string`

## Returns

`void`

  ### <a id="profileReport"></a>profileReport

[**@xylabs/sdk-js**](#../README)

***

```ts
const profileReport: (profiler) => Record<string, number>;
```

## Parameters

### profiler

[`Profiler`](#../type-aliases/Profiler)

## Returns

`Record`\<`string`, `number`\>

  ### <a id="rejected"></a>rejected

[**@xylabs/sdk-js**](#../README)

***

```ts
const rejected: <T>(val) => val is PromiseRejectedResult;
```

For use with Promise.allSettled to filter only rejected results

## Type Parameters

### T

`T`

## Parameters

### val

`PromiseSettledResult`\<`T`\>

## Returns

`val is PromiseRejectedResult`

  ### <a id="removeFields"></a>removeFields

[**@xylabs/sdk-js**](#../README)

***

```ts
const removeFields: <T, K>(obj, fields) => Omit<T, K>;
```

## Type Parameters

### T

`T` *extends* [`EmptyObject`](#../type-aliases/EmptyObject)

### K

`K` *extends* keyof `T`

## Parameters

### obj

`T`

### fields

`K`[]

## Returns

`Omit`\<`T`, `K`\>

  ### <a id="retry"></a>retry

[**@xylabs/sdk-js**](#../README)

***

```ts
const retry: <T>(func, config?) => Promise<T | undefined>;
```

## Type Parameters

### T

`T` = `unknown`

## Parameters

### func

() => [`Promisable`](#../type-aliases/Promisable)\<`T` \| `undefined`\>

### config?

[`RetryConfigWithComplete`](#../interfaces/RetryConfigWithComplete)\<`T`\>

## Returns

`Promise`\<`T` \| `undefined`\>

  ### <a id="setTimeoutEx"></a>setTimeoutEx

[**@xylabs/sdk-js**](#../README)

***

```ts
const setTimeoutEx: (func, delay) => string;
```

## Parameters

### func

`Function`

### delay

`number`

## Returns

`string`

  ### <a id="toAddress"></a>toAddress

[**@xylabs/sdk-js**](#../README)

***

```ts
const toAddress: (value, config?) => Address;
```

## Parameters

### value

`string` | `number` | `bigint` | `ArrayBufferLike`

### config?

[`HexConfig`](#../interfaces/HexConfig)

## Returns

[`Address`](#../type-aliases/Address)

  ### <a id="toDecimalPrecision"></a>toDecimalPrecision

[**@xylabs/sdk-js**](#../README)

***

```ts
const toDecimalPrecision: (value, digits) => string;
```

## Parameters

### value

`number`

### digits

`number`

## Returns

`string`

  ### <a id="toEthAddress"></a>toEthAddress

[**@xylabs/sdk-js**](#../README)

***

```ts
const toEthAddress: (value, config?) => EthAddress;
```

## Parameters

### value

`string` | `number` | `bigint` | `ArrayBufferLike`

### config?

[`HexConfig`](#../interfaces/HexConfig)

## Returns

[`EthAddress`](#../type-aliases/EthAddress)

  ### <a id="toFixedPoint"></a>toFixedPoint

[**@xylabs/sdk-js**](#../README)

***

```ts
const toFixedPoint: (value, places?) => bigint;
```

## Parameters

### value

`bigint` | `string`

### places?

`number`

## Returns

`bigint`

  ### <a id="toHex"></a>toHex

[**@xylabs/sdk-js**](#../README)

***

```ts
const toHex: (value, config?) => BrandedHex;
```

takes any value and tries our best to convert it to a hex string

## Parameters

### value

`string` | `number` | `bigint` | `ArrayBufferLike`

### config?

[`HexConfig`](#../interfaces/HexConfig)

## Returns

[`BrandedHex`](#../type-aliases/BrandedHex)

  ### <a id="toHexLegacy"></a>toHexLegacy

[**@xylabs/sdk-js**](#../README)

***

```ts
const toHexLegacy: (buffer) => string;
```

## Parameters

### buffer

`ArrayBuffer`

## Returns

`string`

  ### <a id="toJsonArray"></a>toJsonArray

[**@xylabs/sdk-js**](#../README)

***

```ts
const toJsonArray: {
<T>  (value): T & unknown[] | undefined;
<T>  (value, assert): T & unknown[];
};
```

## Call Signature

```ts
<T>(value): T & unknown[] | undefined;
```

### Type Parameters

### T

`T`

### Parameters

### value

`T`

### Returns

`T` & `unknown`[] \| `undefined`

## Call Signature

```ts
<T>(value, assert): T & unknown[];
```

### Type Parameters

### T

`T`

### Parameters

### value

`T`

### assert

[`ZodFactoryConfig`](#../type-aliases/ZodFactoryConfig)

### Returns

`T` & `unknown`[]

  ### <a id="toJsonObject"></a>toJsonObject

[**@xylabs/sdk-js**](#../README)

***

```ts
const toJsonObject: {
<T>  (value): T & Record<string, unknown> | undefined;
<T>  (value, assert): T & Record<string, unknown>;
};
```

## Call Signature

```ts
<T>(value): T & Record<string, unknown> | undefined;
```

### Type Parameters

### T

`T`

### Parameters

### value

`T`

### Returns

`T` & `Record`\<`string`, `unknown`\> \| `undefined`

## Call Signature

```ts
<T>(value, assert): T & Record<string, unknown>;
```

### Type Parameters

### T

`T`

### Parameters

### value

`T`

### assert

[`ZodFactoryConfig`](#../type-aliases/ZodFactoryConfig)

### Returns

`T` & `Record`\<`string`, `unknown`\>

  ### <a id="toJsonValue"></a>toJsonValue

[**@xylabs/sdk-js**](#../README)

***

```ts
const toJsonValue: {
<T>  (value): T | undefined;
<T>  (value, assert): T;
};
```

## Call Signature

```ts
<T>(value): T | undefined;
```

### Type Parameters

### T

`T`

### Parameters

### value

`T`

### Returns

`T` \| `undefined`

## Call Signature

```ts
<T>(value, assert): T;
```

### Type Parameters

### T

`T`

### Parameters

### value

`T`

### assert

[`ZodFactoryConfig`](#../type-aliases/ZodFactoryConfig)

### Returns

`T`

  ### <a id="toSafeJson"></a>toSafeJson

[**@xylabs/sdk-js**](#../README)

***

```ts
const toSafeJson: (value, maxDepth?) => JsonValue;
```

## Parameters

### value

`unknown`

### maxDepth?

`number`

## Returns

[`JsonValue`](#../type-aliases/JsonValue)

  ### <a id="toSafeJsonArray"></a>toSafeJsonArray

[**@xylabs/sdk-js**](#../README)

***

```ts
const toSafeJsonArray: (value, cycleList?, maxDepth?) => any[];
```

## Parameters

### value

`unknown`[]

### cycleList?

`unknown`[]

### maxDepth?

`number`

## Returns

`any`[]

  ### <a id="toSafeJsonObject"></a>toSafeJsonObject

[**@xylabs/sdk-js**](#../README)

***

```ts
const toSafeJsonObject: (value, cycleList?, maxDepth?) => JsonObject;
```

## Parameters

### value

`object`

### cycleList?

`unknown`[]

### maxDepth?

`number`

## Returns

[`JsonObject`](#../type-aliases/JsonObject)

  ### <a id="toSafeJsonString"></a>toSafeJsonString

[**@xylabs/sdk-js**](#../README)

***

```ts
const toSafeJsonString: (value, maxDepth?) => string;
```

## Parameters

### value

`unknown`

### maxDepth?

`number`

## Returns

`string`

  ### <a id="toSafeJsonValue"></a>toSafeJsonValue

[**@xylabs/sdk-js**](#../README)

***

```ts
const toSafeJsonValue: (value, cycleList?, maxDepth?) => JsonValue;
```

## Parameters

### value

`unknown`

### cycleList?

`unknown`[]

### maxDepth?

`number`

## Returns

[`JsonValue`](#../type-aliases/JsonValue)

  ### <a id="typeOf"></a>typeOf

[**@xylabs/sdk-js**](#../README)

***

```ts
const typeOf: <T>(item) => TypeOfTypes;
```

## Type Parameters

### T

`T`

## Parameters

### item

`T`

## Returns

[`TypeOfTypes`](#../type-aliases/TypeOfTypes)

  ### <a id="union"></a>union

[**@xylabs/sdk-js**](#../README)

***

```ts
const union: <TKey>(a, b) => Set<TKey>;
```

## Type Parameters

### TKey

`TKey`

## Parameters

### a

`Set`\<`TKey`\>

### b

`Set`\<`TKey`\>

## Returns

`Set`\<`TKey`\>

  ### <a id="uniq"></a>uniq

[**@xylabs/sdk-js**](#../README)

***

```ts
const uniq: <T>(arr) => T[];
```

## Type Parameters

### T

`T`

## Parameters

### arr

`T`[]

## Returns

`T`[]

  ### <a id="uniqBy"></a>uniqBy

[**@xylabs/sdk-js**](#../README)

***

```ts
const uniqBy: <T, I>(arr, iteratee) => T[];
```

## Type Parameters

### T

`T`

### I

`I`

## Parameters

### arr

`T`[]

### iteratee

(`item`) => `I`

## Returns

`T`[]

  ### <a id="validateType"></a>validateType

[**@xylabs/sdk-js**](#../README)

***

```ts
const validateType: <T>(typeName, value, optional?) => [T | undefined, Error[]];
```

## Type Parameters

### T

`T`

## Parameters

### typeName

[`TypeOfTypes`](#../type-aliases/TypeOfTypes)

### value

`T`

### optional?

`boolean`

## Returns

\[`T` \| `undefined`, `Error`[]\]


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
[npm-badge]: https://img.shields.io/npm/v/@xylabs/sdk-js.svg
[npm-link]: https://www.npmjs.com/package/@xylabs/sdk-js
[codacy-badge]: https://app.codacy.com/project/badge/Grade/c8e15e14f37741c18cfb47ac7245c698
[codacy-link]: https://www.codacy.com/gh/xylabs/sdk-js/dashboard?utm_source=github.com&utm_medium=referral&utm_content=xylabs/sdk-js&utm_campaign=Badge_Grade
[codeclimate-badge]: https://api.codeclimate.com/v1/badges/c5eb068f806f0b047ea7/maintainability
[codeclimate-link]: https://codeclimate.com/github/xylabs/sdk-js/maintainability
[snyk-badge]: https://snyk.io/test/github/xylabs/sdk-js/badge.svg?targetFile=package.json
[snyk-link]: https://snyk.io/test/github/xylabs/sdk-js?targetFile=package.json

[npm-downloads-badge]: https://img.shields.io/npm/dw/@xylabs/sdk-js
[npm-license-badge]: https://img.shields.io/npm/l/@xylabs/sdk-js

[jsdelivr-badge]: https://data.jsdelivr.com/v1/package/npm/@xylabs/sdk-js/badge
[jsdelivr-link]: https://www.jsdelivr.com/package/npm/@xylabs/sdk-js

[socket-badge]: https://socket.dev/api/badge/npm/package/@xylabs/sdk-js
[socket-link]: https://socket.dev/npm/package/@xylabs/sdk-js