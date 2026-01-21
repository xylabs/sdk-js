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
- [AxiosJson](#classes/AxiosJson)
- [AxiosJsonUncompressed](#classes/AxiosJsonUncompressed)
- [EthAddress](#classes/EthAddress)
- [ForgetPromise](#classes/ForgetPromise)
- [~~Log~~](#classes/Log)
- [ConsoleLogger](#classes/ConsoleLogger)
- [IdLogger](#classes/IdLogger)
- [LevelLogger](#classes/LevelLogger)
- [SilentLogger](#classes/SilentLogger)
- [IsObjectFactory](#classes/IsObjectFactory)
- [ObjectWrapper](#classes/ObjectWrapper)
- [ValidatorBase](#classes/ValidatorBase)
- [PromiseEx](#classes/PromiseEx)

## Interfaces

- [ApiConfig](#interfaces/ApiConfig)
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

## Type Aliases

- [ApiStage](#type-aliases/ApiStage)
- [AssertExMessageFunc](#type-aliases/AssertExMessageFunc)
- [AssertExErrorFunc](#type-aliases/AssertExErrorFunc)
- [RawAxiosJsonRequestConfig](#type-aliases/RawAxiosJsonRequestConfig)
- [RawAxiosJsonRequestUncompressedConfig](#type-aliases/RawAxiosJsonRequestUncompressedConfig)
- [Address](#type-aliases/Address)
- [HashBitLength](#type-aliases/HashBitLength)
- [Hash](#type-aliases/Hash)
- [Hex](#type-aliases/Hex)
- [LogFunction](#type-aliases/LogFunction)
- [~~LogLevel~~](#type-aliases/LogLevel)
- [LogLevelKey](#type-aliases/LogLevelKey)
- [LogVerbosity](#type-aliases/LogVerbosity)
- [LogLevelValue](#type-aliases/LogLevelValue)
- [EmptyObject](#type-aliases/EmptyObject)
- [EmptyObjectOf](#type-aliases/EmptyObjectOf)
- [JsonValue](#type-aliases/JsonValue)
- [JsonObject](#type-aliases/JsonObject)
- [JsonArray](#type-aliases/JsonArray)
- [OmitStartsWith](#type-aliases/OmitStartsWith)
- [DeepOmitStartsWith](#type-aliases/DeepOmitStartsWith)
- [DeepRestrictToStringKeys](#type-aliases/DeepRestrictToStringKeys)
- [Optional](#type-aliases/Optional)
- [Override](#type-aliases/Override)
- [~~PartialRecord~~](#type-aliases/PartialRecord)
- [PickStartsWith](#type-aliases/PickStartsWith)
- [DeepPickStartsWith](#type-aliases/DeepPickStartsWith)
- [StringKeyObject](#type-aliases/StringKeyObject)
- [WithAdditional](#type-aliases/WithAdditional)
- [OmitByPredicate](#type-aliases/OmitByPredicate)
- [PickByPredicate](#type-aliases/PickByPredicate)
- [AnyObject](#type-aliases/AnyObject)
- [AsTypeFunction](#type-aliases/AsTypeFunction)
- [AsOptionalTypeFunction](#type-aliases/AsOptionalTypeFunction)
- [Compare](#type-aliases/Compare)
- [StringOrAlertFunction](#type-aliases/StringOrAlertFunction)
- [TypeCheck](#type-aliases/TypeCheck)
- [Profiler](#type-aliases/Profiler)
- [PromiseExSubFunc](#type-aliases/PromiseExSubFunc)
- [PromiseExFunc](#type-aliases/PromiseExFunc)
- [PromiseExValueFunc](#type-aliases/PromiseExValueFunc)
- [AnyNonPromise](#type-aliases/AnyNonPromise)
- [Promisable](#type-aliases/Promisable)
- [PromisableArray](#type-aliases/PromisableArray)
- [OptionalPromisable](#type-aliases/OptionalPromisable)
- [OptionalPromisableArray](#type-aliases/OptionalPromisableArray)
- [NullablePromisable](#type-aliases/NullablePromisable)
- [NullablePromisableArray](#type-aliases/NullablePromisableArray)
- [AsyncMutex](#type-aliases/AsyncMutex)

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
- [axios](#variables/axios)
- [axiosUncompressed](#variables/axiosUncompressed)
- [fromFixedPoint](#variables/fromFixedPoint)
- [toDecimalPrecision](#variables/toDecimalPrecision)
- [toFixedPoint](#variables/toFixedPoint)
- [delay](#variables/delay)
- [handleError](#variables/handleError)
- [handleErrorAsync](#variables/handleErrorAsync)
- [isError](#variables/isError)
- [isEthAddress](#variables/isEthAddress)
- [ellipsize](#variables/ellipsize)
- [padHex](#variables/padHex)
- [exists](#variables/exists)
- [defaultForgetNodeConfig](#variables/defaultForgetNodeConfig)
- [forget](#variables/forget)
- [functionName](#variables/functionName)
- [ZERO\_ADDRESS](#variables/ZERO_ADDRESS)
- [toAddress](#variables/toAddress)
- [isAddress](#variables/isAddress)
- [ZERO\_HASH](#variables/ZERO_HASH)
- [HashBitLength](#variables/HashBitLength)
- [isHashBitLength](#variables/isHashBitLength)
- [isHash](#variables/isHash)
- [hexFrom](#variables/hexFrom)
- [hexFromArrayBuffer](#variables/hexFromArrayBuffer)
- [hexFromBigInt](#variables/hexFromBigInt)
- [hexFromHexString](#variables/hexFromHexString)
- [hexFromNumber](#variables/hexFromNumber)
- [isHex](#variables/isHex)
- [isHexZero](#variables/isHexZero)
- [toHexLegacy](#variables/toHexLegacy)
- [bitsToNibbles](#variables/bitsToNibbles)
- [nibblesToBits](#variables/nibblesToBits)
- [hexRegex](#variables/hexRegex)
- [hexRegexWithPrefix](#variables/hexRegexWithPrefix)
- [toHex](#variables/toHex)
- [LogLevel](#variables/LogLevel)
- [NoOpLogFunction](#variables/NoOpLogFunction)
- [getFunctionName](#variables/getFunctionName)
- [AsObjectFactory](#variables/AsObjectFactory)
- [AsTypeFactory](#variables/AsTypeFactory)
- [isJsonValue](#variables/isJsonValue)
- [isJsonArray](#variables/isJsonArray)
- [isValidJsonFieldPair](#variables/isValidJsonFieldPair)
- [isJsonObject](#variables/isJsonObject)
- [asAnyObject](#variables/asAnyObject)
- [deepMerge](#variables/deepMerge)
- [isObject](#variables/isObject)
- [isType](#variables/isType)
- [omitBy](#variables/omitBy)
- [omitByPrefix](#variables/omitByPrefix)
- [pickBy](#variables/pickBy)
- [pickByPrefix](#variables/pickByPrefix)
- [removeFields](#variables/removeFields)
- [toJsonArray](#variables/toJsonArray)
- [toJsonObject](#variables/toJsonObject)
- [toJsonValue](#variables/toJsonValue)
- [toJsonString](#variables/toJsonString)
- [toJson](#variables/toJson)
- [createProfiler](#variables/createProfiler)
- [profile](#variables/profile)
- [profileReport](#variables/profileReport)
- [fulfilled](#variables/fulfilled)
- [fulfilledValues](#variables/fulfilledValues)
- [isPromise](#variables/isPromise)
- [rejected](#variables/rejected)
- [retry](#variables/retry)
- [difference](#variables/difference)
- [intersection](#variables/intersection)
- [union](#variables/union)
- [setTimeoutEx](#variables/setTimeoutEx)
- [clearTimeoutEx](#variables/clearTimeoutEx)

## Functions

- [assertDefinedEx](#functions/assertDefinedEx)
- [assertEx](#functions/assertEx)
- [asAddress](#functions/asAddress)
- [asHash](#functions/asHash)
- [asHex](#functions/asHex)
- [hexToBigInt](#functions/hexToBigInt)
- [createDeepMerge](#functions/createDeepMerge)
- [toPromise](#functions/toPromise)
- [staticImplements](#functions/staticImplements)

### classes

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

`null` | `string`

#### stage?

[`ApiStage`](#../type-aliases/ApiStage)

### Returns

`ApiClient`

## Properties

### token?

```ts
protected optional token: null | string;
```

***

### stage?

```ts
protected optional stage: ApiStage;
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
get value(): undefined | T;
```

#### Returns

`undefined` \| `T`

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

## Extends

- `Axios`

## Constructors

### Constructor

```ts
new AxiosJson(config?): AxiosJson;
```

### Parameters

#### config?

[`RawAxiosJsonRequestConfig`](#../type-aliases/RawAxiosJsonRequestConfig)\<`any`\>

### Returns

`AxiosJson`

### Overrides

```ts
Axios.constructor
```

## Properties

### defaultLogger?

```ts
static optional defaultLogger: Logger;
```

## Methods

### finalPath()

```ts
static finalPath(response): any;
```

### Parameters

#### response

`AxiosResponse`

### Returns

`any`

  ### <a id="AxiosJsonUncompressed"></a>AxiosJsonUncompressed

[**@xylabs/sdk-js**](#../README)

***

## Extends

- `Axios`

## Constructors

### Constructor

```ts
new AxiosJsonUncompressed(config?): AxiosJsonUncompressed;
```

### Parameters

#### config?

[`RawAxiosJsonRequestUncompressedConfig`](#../type-aliases/RawAxiosJsonRequestUncompressedConfig)\<`any`\>

### Returns

`AxiosJsonUncompressed`

### Overrides

```ts
Axios.constructor
```

## Properties

### defaultLogger?

```ts
static optional defaultLogger: Logger;
```

## Methods

### finalPath()

```ts
static finalPath(response): any;
```

### Parameters

#### response

`AxiosResponse`

### Returns

`any`

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

  ### <a id="EthAddress"></a>EthAddress

[**@xylabs/sdk-js**](#../README)

***

## Properties

### type

```ts
readonly static type: "EthAddress" = "EthAddress";
```

***

### type

```ts
type: string;
```

## Methods

### fromString()

```ts
static fromString(value?, base?): undefined | EthAddress;
```

### Parameters

#### value?

`string`

#### base?

`number`

### Returns

`undefined` \| `EthAddress`

***

### parse()

```ts
static parse(value, base?): undefined | EthAddress;
```

### Parameters

#### value

`unknown`

#### base?

`number`

### Returns

`undefined` \| `EthAddress`

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

`null` | `string` | `EthAddress`

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

`T` *extends* `TypedObject`

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

`ObjectTypeShape`

#### additionalChecks?

[`TypeCheck`](#../type-aliases/TypeCheck)\<`TypedObject`\>[]

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

  ### <a id="Log"></a>Log

[**@xylabs/sdk-js**](#../README)

***

## Deprecated

use @xylabs/logger instead

## Constructors

### Constructor

```ts
new Log(config): Log;
```

### Parameters

#### config

`LogConfig`

### Returns

`Log`

## Properties

### ~~config~~

```ts
protected config: LogConfig;
```

## Methods

### ~~debug()~~

```ts
debug(...params): void;
```

### Parameters

#### params

...`any`[]

### Returns

`void`

***

### ~~error()~~

```ts
error(...params): void;
```

### Parameters

#### params

...`any`[]

### Returns

`void`

***

### ~~info()~~

```ts
info(...params): void;
```

### Parameters

#### params

...`any`[]

### Returns

`void`

***

### ~~log()~~

```ts
log(...params): void;
```

### Parameters

#### params

...`any`[]

### Returns

`void`

***

### ~~warn()~~

```ts
warn(...params): void;
```

### Parameters

#### params

...`any`[]

### Returns

`void`

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

`null` | (`value`) => `TResult1` \| `PromiseLike`\<`TResult1`\>

#### onrejected?

The callback to execute when the Promise is rejected.

`null` | (`reason`) => `TResult2` \| `PromiseLike`\<`TResult2`\>

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

### functions

  ### <a id="asAddress"></a>asAddress

[**@xylabs/sdk-js**](#../README)

***

## Call Signature

```ts
function asAddress(value): undefined | Lowercase<string>;
```

### Parameters

### value

`unknown`

### Returns

`undefined` \| `Lowercase`\<`string`\>

## Call Signature

```ts
function asAddress(value, assert): Lowercase<string>;
```

### Parameters

### value

`unknown`

### assert

`AssertConfig`

### Returns

`Lowercase`\<`string`\>

  ### <a id="asHash"></a>asHash

[**@xylabs/sdk-js**](#../README)

***

## Call Signature

```ts
function asHash(value): undefined | Lowercase<string>;
```

### Parameters

### value

`unknown`

### Returns

`undefined` \| `Lowercase`\<`string`\>

## Call Signature

```ts
function asHash(value, assert): Lowercase<string>;
```

### Parameters

### value

`unknown`

### assert

`AssertConfig`

### Returns

`Lowercase`\<`string`\>

  ### <a id="asHex"></a>asHex

[**@xylabs/sdk-js**](#../README)

***

## Call Signature

```ts
function asHex(value): undefined | Lowercase<string>;
```

### Parameters

### value

`unknown`

### Returns

`undefined` \| `Lowercase`\<`string`\>

## Call Signature

```ts
function asHex(value, assert): Lowercase<string>;
```

### Parameters

### value

`unknown`

### assert

`AssertConfig`

### Returns

`Lowercase`\<`string`\>

  ### <a id="assertDefinedEx"></a>assertDefinedEx

[**@xylabs/sdk-js**](#../README)

***

## Call Signature

```ts
function assertDefinedEx<T>(expr, messageFunc?): T;
```

Intended for defined checks for variables

### Type Parameters

### T

`T`

### Parameters

### expr

Expression to be evaluated for truthiness

`undefined` | `T`

### messageFunc?

[`AssertExMessageFunc`](#../type-aliases/AssertExMessageFunc)\<`T`\>

### Returns

`T`

Value of expression

### Throws

AssertExError

## Call Signature

```ts
function assertDefinedEx<T, R>(expr, errorFunc?): T;
```

Intended for defined checks for variables

### Type Parameters

### T

`T`

### R

`R` *extends* `Error`

### Parameters

### expr

Expression to be evaluated for truthiness

`undefined` | `T`

### errorFunc?

[`AssertExErrorFunc`](#../type-aliases/AssertExErrorFunc)\<`T`, `R`\>

### Returns

`T`

Value of expression

### Throws

AssertExError

## Call Signature

```ts
function assertDefinedEx<T>(expr): T;
```

### Type Parameters

### T

`T`

### Parameters

### expr

`undefined` | `T`

### Returns

`T`

### Deprecated

- passing a message will soon be required

## Call Signature

```ts
function assertDefinedEx<T>(expr, message?): T;
```

### Type Parameters

### T

`T`

### Parameters

### expr

`undefined` | `T`

### message?

`string`

### Returns

`T`

### Deprecated

- replace string with () => string

  ### <a id="assertEx"></a>assertEx

[**@xylabs/sdk-js**](#../README)

***

## Call Signature

```ts
function assertEx<T>(expr, messageFunc?): T;
```

Intended for simple truthiness checks for variables

### Type Parameters

### T

`T`

### Parameters

### expr

Expression to be evaluated for truthiness

`undefined` | `null` | `T`

### messageFunc?

[`AssertExMessageFunc`](#../type-aliases/AssertExMessageFunc)\<`T`\>

### Returns

`T`

Value of expression

### Throws

AssertExError

## Call Signature

```ts
function assertEx<T, R>(expr, errorFunc?): T;
```

Intended for simple truthiness checks for variables

### Type Parameters

### T

`T`

### R

`R` *extends* `Error`

### Parameters

### expr

Expression to be evaluated for truthiness

`undefined` | `null` | `T`

### errorFunc?

[`AssertExErrorFunc`](#../type-aliases/AssertExErrorFunc)\<`T`, `R`\>

### Returns

`T`

Value of expression

### Throws

AssertExError

## Call Signature

```ts
function assertEx<T>(expr): T;
```

### Type Parameters

### T

`T`

### Parameters

### expr

`undefined` | `null` | `T`

### Returns

`T`

### Deprecated

- passing a message will soon be required

## Call Signature

```ts
function assertEx<T>(expr, message?): T;
```

### Type Parameters

### T

`T`

### Parameters

### expr

`undefined` | `null` | `T`

### message?

`string`

### Returns

`T`

### Deprecated

- replace string with () => string

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

`Lowercase`\<`string`\>

## Returns

`bigint`

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

\[`undefined` \| `T`, `undefined` \| `Error`\]

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

### type-aliases

  ### <a id="Address"></a>Address

[**@xylabs/sdk-js**](#../README)

***

```ts
type Address = Exclude<Hex, "reserved-address-value">;
```

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
type AnyObject = Record<TypedKey, unknown>;
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
type AsOptionalTypeFunction<T> = <TType>(value) => undefined | TType;
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

`undefined` \| `TType`

  ### <a id="AsTypeFunction"></a>AsTypeFunction

[**@xylabs/sdk-js**](#../README)

***

```ts
type AsTypeFunction<T> = {
<TType>  (value): undefined | TType;
<TType>  (value, config): TType;
<TType>  (value, config): undefined | TType;
<TType>  (value, assert): undefined | TType;
<TType>  (value, assert, config): TType;
<TType>  (value, assert, config): undefined | TType;
};
```

## Type Parameters

### T

`T` *extends* [`AnyNonPromise`](#AnyNonPromise) = [`AnyNonPromise`](#AnyNonPromise)

## Call Signature

```ts
<TType>(value): undefined | TType;
```

### Type Parameters

### TType

`TType` *extends* [`AnyNonPromise`](#AnyNonPromise)

### Parameters

### value

[`AnyNonPromise`](#AnyNonPromise)

### Returns

`undefined` \| `TType`

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
<TType>(value, config): undefined | TType;
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

`undefined` \| `TType`

## Call Signature

```ts
<TType>(value, assert): undefined | TType;
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

`undefined` \| `TType`

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
   config): undefined | TType;
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

`undefined` \| `TType`

  ### <a id="AssertExErrorFunc"></a>AssertExErrorFunc

[**@xylabs/sdk-js**](#../README)

***

```ts
type AssertExErrorFunc<T, R> = (value?) => R;
```

## Type Parameters

### T

`T`

### R

`R` *extends* `Error`

## Parameters

### value?

`T` | `null`

## Returns

`R`

  ### <a id="AssertExMessageFunc"></a>AssertExMessageFunc

[**@xylabs/sdk-js**](#../README)

***

```ts
type AssertExMessageFunc<T> = (value?) => string;
```

## Type Parameters

### T

`T`

## Parameters

### value?

`T` | `null`

## Returns

`string`

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
type EmptyObject<T> = { [K in keyof T]?: never };
```

An empty object, which means that it does enforce the set of field names, defaulting to an empty set until
extended from, which then adds only those additional fields

## Type Parameters

### T

`T` *extends* `object` = `object`

  ### <a id="EmptyObjectOf"></a>EmptyObjectOf

[**@xylabs/sdk-js**](#../README)

***

```ts
type EmptyObjectOf<T> = EmptyObject<T> extends T ? EmptyObject<T> : never;
```

## Type Parameters

### T

`T` *extends* `object`

  ### <a id="Hash"></a>Hash

[**@xylabs/sdk-js**](#../README)

***

```ts
type Hash = Exclude<Hex, "reserved-hash-value">;
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
type Hex = Exclude<Lowercase<string>, "reserved-hex-value">;
```

  ### <a id="JsonArray"></a>JsonArray

[**@xylabs/sdk-js**](#../README)

***

```ts
type JsonArray = JsonValue[];
```

  ### <a id="JsonObject"></a>JsonObject

[**@xylabs/sdk-js**](#../README)

***

```ts
type JsonObject = object;
```

## Index Signature

```ts
[key: string]: JsonValue
```

  ### <a id="JsonValue"></a>JsonValue

[**@xylabs/sdk-js**](#../README)

***

```ts
type JsonValue = 
  | string
  | number
  | boolean
  | null
  | JsonObject
  | JsonArray;
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

  ### <a id="LogLevel"></a>LogLevel

[**@xylabs/sdk-js**](#../README)

***

```ts
type LogLevel = LogLevelValue;
```

## Deprecated

Use `LogLevelValue` instead.
This name conflicts with the `LogLevel` enum and
makes it confusing to import

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

  ### <a id="RawAxiosJsonRequestConfig"></a>RawAxiosJsonRequestConfig

[**@xylabs/sdk-js**](#../README)

***

```ts
type RawAxiosJsonRequestConfig<D> = RawAxiosRequestConfig<D> & object;
```

## Type declaration

### compressLength?

```ts
optional compressLength: number;
```

## Type Parameters

### D

`D` = `any`

  ### <a id="RawAxiosJsonRequestUncompressedConfig"></a>RawAxiosJsonRequestUncompressedConfig

[**@xylabs/sdk-js**](#../README)

***

```ts
type RawAxiosJsonRequestUncompressedConfig<D> = RawAxiosRequestConfig<D>;
```

## Type Parameters

### D

`D` = `any`

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

`T` *extends* `TypedValue`

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

`undefined` | `number` | [`TypeCheckConfig`](#../interfaces/TypeCheckConfig)

### Returns

`obj is T`

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

### variables

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

## Type declaration

### create()

```ts
create: <T>(typeCheck) => AsTypeFunction;
```

### Type Parameters

#### T

`T` *extends* `TypedObject`

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

`T` *extends* `TypedObject`

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

## Type declaration

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

  ### <a id="HashBitLength"></a>HashBitLength

[**@xylabs/sdk-js**](#../README)

***

```ts
HashBitLength: HashBitLength[];
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

  ### <a id="axios"></a>axios

[**@xylabs/sdk-js**](#../README)

***

```ts
const axios: AxiosJson;
```

  ### <a id="axiosUncompressed"></a>axiosUncompressed

[**@xylabs/sdk-js**](#../README)

***

```ts
const axiosUncompressed: AxiosJsonUncompressed;
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

  ### <a id="hexRegex"></a>hexRegex

[**@xylabs/sdk-js**](#../README)

***

```ts
const hexRegex: RegExp;
```

  ### <a id="hexRegexWithPrefix"></a>hexRegexWithPrefix

[**@xylabs/sdk-js**](#../README)

***

```ts
const hexRegexWithPrefix: RegExp;
```

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

  ### <a id="isError"></a>isError

[**@xylabs/sdk-js**](#../README)

***

```ts
const isError: (error) => error is Error;
```

## Parameters

### error

`any`

## Returns

`error is Error`

  ### <a id="isEthAddress"></a>isEthAddress

[**@xylabs/sdk-js**](#../README)

***

```ts
const isEthAddress: (obj) => boolean;
```

## Parameters

### obj

### type

`string`

## Returns

`boolean`

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
const isJsonArray: (value) => value is JsonArray;
```

## Parameters

### value

`unknown`

## Returns

`value is JsonArray`

  ### <a id="isJsonObject"></a>isJsonObject

[**@xylabs/sdk-js**](#../README)

***

```ts
const isJsonObject: (value) => value is JsonObject;
```

## Parameters

### value

`unknown`

## Returns

`value is JsonObject`

  ### <a id="isJsonValue"></a>isJsonValue

[**@xylabs/sdk-js**](#../README)

***

```ts
const isJsonValue: (value) => value is JsonValue;
```

## Parameters

### value

`unknown`

## Returns

`value is JsonValue`

  ### <a id="isObject"></a>isObject

[**@xylabs/sdk-js**](#../README)

***

```ts
const isObject: <T>(value) => value is T & object;
```

## Type Parameters

### T

`T`

## Parameters

### value

`T`

## Returns

`value is T & object`

  ### <a id="isPromise"></a>isPromise

[**@xylabs/sdk-js**](#../README)

***

```ts
const isPromise: (value) => value is Promise<unknown>;
```

## Parameters

### value

`unknown`

## Returns

`value is Promise<unknown>`

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

`FieldType`

## Returns

`boolean`

  ### <a id="isValidJsonFieldPair"></a>isValidJsonFieldPair

[**@xylabs/sdk-js**](#../README)

***

```ts
const isValidJsonFieldPair: ([key, value]) => boolean;
```

## Parameters

### \[key, value\]

\[`unknown`, `unknown`\]

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
const toAddress: (value, config?) => Lowercase<string>;
```

## Parameters

### value

`string` | `number` | `bigint` | `ArrayBufferLike`

### config?

[`HexConfig`](#../interfaces/HexConfig)

## Returns

`Lowercase`\<`string`\>

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
const toHex: (value, config?) => Lowercase<string>;
```

takes any value and tries our best to convert it to a hex string

## Parameters

### value

`string` | `number` | `bigint` | `ArrayBufferLike`

### config?

[`HexConfig`](#../interfaces/HexConfig)

## Returns

`Lowercase`\<`string`\>

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

  ### <a id="toJson"></a>toJson

[**@xylabs/sdk-js**](#../README)

***

```ts
const toJson: (value, maxDepth?) => JsonValue;
```

## Parameters

### value

`unknown`

### maxDepth?

`number`

## Returns

[`JsonValue`](#../type-aliases/JsonValue)

  ### <a id="toJsonArray"></a>toJsonArray

[**@xylabs/sdk-js**](#../README)

***

```ts
const toJsonArray: (value, cycleList?, maxDepth?) => JsonArray;
```

## Parameters

### value

`unknown`[]

### cycleList?

`unknown`[]

### maxDepth?

`number`

## Returns

[`JsonArray`](#../type-aliases/JsonArray)

  ### <a id="toJsonObject"></a>toJsonObject

[**@xylabs/sdk-js**](#../README)

***

```ts
const toJsonObject: (value, cycleList?, maxDepth?) => JsonObject;
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

  ### <a id="toJsonString"></a>toJsonString

[**@xylabs/sdk-js**](#../README)

***

```ts
const toJsonString: (value, maxDepth?) => string;
```

## Parameters

### value

`unknown`

### maxDepth?

`number`

## Returns

`string`

  ### <a id="toJsonValue"></a>toJsonValue

[**@xylabs/sdk-js**](#../README)

***

```ts
const toJsonValue: (value, cycleList?, maxDepth?) => JsonValue;
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