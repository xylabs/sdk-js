# @xylabs/logger

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


XYLabs Logger Library

## Reference

**@xylabs/logger**

***

## Classes

- [ConsoleLogger](#classes/ConsoleLogger)
- [IdLogger](#classes/IdLogger)
- [LevelLogger](#classes/LevelLogger)
- [SilentLogger](#classes/SilentLogger)

## Interfaces

- [Logger](#interfaces/Logger)

## Type Aliases

- [LogFunction](#type-aliases/LogFunction)
- [~~LogLevel~~](#type-aliases/LogLevel)
- [LogLevelKey](#type-aliases/LogLevelKey)
- [LogVerbosity](#type-aliases/LogVerbosity)
- [LogLevelValue](#type-aliases/LogLevelValue)

## Variables

- [LogLevel](#variables/LogLevel)

## Functions

- [NoOpLogFunction](#functions/NoOpLogFunction)
- [getFunctionName](#functions/getFunctionName)

### classes

  ### <a id="ConsoleLogger"></a>ConsoleLogger

[**@xylabs/logger**](#../README)

***

Interface to handle overlap between Winston &
`console` with as much congruency as possible.

## Extends

- [`LevelLogger`](#LevelLogger)

## Constructors

### Constructor

```ts
new ConsoleLogger(level): ConsoleLogger;
```

### Parameters

#### level

[`LogLevelValue`](#../type-aliases/LogLevelValue) = `LogLevel.warn`

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

  ### <a id="IdLogger"></a>IdLogger

[**@xylabs/logger**](#../README)

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

  ### <a id="LevelLogger"></a>LevelLogger

[**@xylabs/logger**](#../README)

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
new LevelLogger(logger, level): LevelLogger;
```

### Parameters

#### logger

[`Logger`](#../interfaces/Logger)

#### level

[`LogLevelValue`](#../type-aliases/LogLevelValue) = `LogLevel.warn`

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

  ### <a id="SilentLogger"></a>SilentLogger

[**@xylabs/logger**](#../README)

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
readonly debug: (..._data) => undefined = NoOpLogFunction;
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
readonly error: (..._data) => undefined = NoOpLogFunction;
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
readonly info: (..._data) => undefined = NoOpLogFunction;
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
readonly log: (..._data) => undefined = NoOpLogFunction;
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
readonly trace: (..._data) => undefined = NoOpLogFunction;
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
readonly warn: (..._data) => undefined = NoOpLogFunction;
```

### Parameters

#### \_data

...`unknown`[]

### Returns

`undefined`

### Implementation of

[`Logger`](#../interfaces/Logger).[`warn`](../interfaces/Logger.md#warn)

### functions

  ### <a id="NoOpLogFunction"></a>NoOpLogFunction

[**@xylabs/logger**](#../README)

***

```ts
function NoOpLogFunction(..._data): undefined;
```

## Parameters

### \_data

...`unknown`[]

## Returns

`undefined`

  ### <a id="getFunctionName"></a>getFunctionName

[**@xylabs/logger**](#../README)

***

```ts
function getFunctionName(depth): string;
```

## Parameters

### depth

`number` = `2`

## Returns

`string`

### interfaces

  ### <a id="Logger"></a>Logger

[**@xylabs/logger**](#../README)

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

### type-aliases

  ### <a id="LogFunction"></a>LogFunction

[**@xylabs/logger**](#../README)

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

[**@xylabs/logger**](#../README)

***

```ts
type LogLevel = LogLevelValue;
```

## Deprecated

Use `LogLevelValue` instead.
This name conflicts with the `LogLevel` enum and
makes it confusing to import

  ### <a id="LogLevelKey"></a>LogLevelKey

[**@xylabs/logger**](#../README)

***

```ts
type LogLevelKey = EnumKey<typeof LogLevel>;
```

  ### <a id="LogLevelValue"></a>LogLevelValue

[**@xylabs/logger**](#../README)

***

```ts
type LogLevelValue = EnumValue<typeof LogLevel>;
```

  ### <a id="LogVerbosity"></a>LogVerbosity

[**@xylabs/logger**](#../README)

***

```ts
type LogVerbosity = LogLevelKey;
```

### variables

  ### <a id="LogLevel"></a>LogLevel

[**@xylabs/logger**](#../README)

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
[npm-badge]: https://img.shields.io/npm/v/@xylabs/logger.svg
[npm-link]: https://www.npmjs.com/package/@xylabs/logger
[codacy-badge]: https://app.codacy.com/project/badge/Grade/c8e15e14f37741c18cfb47ac7245c698
[codacy-link]: https://www.codacy.com/gh/xylabs/sdk-js/dashboard?utm_source=github.com&utm_medium=referral&utm_content=xylabs/sdk-js&utm_campaign=Badge_Grade
[codeclimate-badge]: https://api.codeclimate.com/v1/badges/c5eb068f806f0b047ea7/maintainability
[codeclimate-link]: https://codeclimate.com/github/xylabs/sdk-js/maintainability
[snyk-badge]: https://snyk.io/test/github/xylabs/sdk-js/badge.svg?targetFile=package.json
[snyk-link]: https://snyk.io/test/github/xylabs/sdk-js?targetFile=package.json

[npm-downloads-badge]: https://img.shields.io/npm/dw/@xylabs/logger
[npm-license-badge]: https://img.shields.io/npm/l/@xylabs/logger

[jsdelivr-badge]: https://data.jsdelivr.com/v1/package/npm/@xylabs/logger/badge
[jsdelivr-link]: https://www.jsdelivr.com/package/npm/@xylabs/logger

[socket-badge]: https://socket.dev/api/badge/npm/package/@xylabs/logger
[socket-link]: https://socket.dev/npm/package/@xylabs/logger