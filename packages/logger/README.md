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

| Class | Description |
| ------ | ------ |
| [ConsoleLogger](#classes/ConsoleLogger) | A LevelLogger that delegates to the global `console` object. |
| [IdLogger](#classes/IdLogger) | A logger wrapper that prefixes every log message with a bracketed identifier. Useful for distinguishing log output from different components or instances. |
| [LevelLogger](#classes/LevelLogger) | A logger that filters messages based on a configured log level. Methods for levels above the configured threshold return a no-op function. |
| [SilentLogger](#classes/SilentLogger) | A logger that does not log anything. This is useful when you want to disable logging like when running unit tests or in silent mode. It implements the `Logger` interface but all methods are no-op functions. |

## Interfaces

| Interface | Description |
| ------ | ------ |
| [Logger](#interfaces/Logger) | Interface to handle overlap between Winston & `console` with as much congruency as possible. |

## Type Aliases

| Type Alias | Description |
| ------ | ------ |
| [LogFunction](#type-aliases/LogFunction) | A generic logging function that accepts any number of arguments. |
| [LogLevelKey](#type-aliases/LogLevelKey) | String key for a log level (e.g. 'error', 'warn', 'info'). |
| [LogVerbosity](#type-aliases/LogVerbosity) | Alias for LogLevelKey, representing the verbosity setting as a string. |
| [LogLevelValue](#type-aliases/LogLevelValue) | Numeric value of a log level (1 through 6). |

## Variables

| Variable | Description |
| ------ | ------ |
| [LogLevel](#variables/LogLevel) | Numeric log level values, from least verbose (error=1) to most verbose (trace=6). |

## Functions

| Function | Description |
| ------ | ------ |
| [NoOpLogFunction](#functions/NoOpLogFunction) | A log function that silently discards all arguments. |
| [getFunctionName](#functions/getFunctionName) | Retrieves the name of the calling function by inspecting the stack trace. |

### classes

  ### <a id="ConsoleLogger"></a>ConsoleLogger

[**@xylabs/logger**](#../README)

***

A LevelLogger that delegates to the global `console` object.

## Extends

- [`LevelLogger`](#LevelLogger)

## Constructors

### Constructor

```ts
new ConsoleLogger(level?: LogLevelValue): ConsoleLogger;
```

### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `level` | [`LogLevelValue`](#../type-aliases/LogLevelValue) | `LogLevel.warn` |

### Returns

`ConsoleLogger`

### Overrides

[`LevelLogger`](#LevelLogger).[`constructor`](LevelLogger.md#constructor)

## Properties

| Property | Modifier | Type | Inherited from |
| ------ | ------ | ------ | ------ |
| <a id="level"></a> `level` | `readonly` | [`LogLevelValue`](#../type-aliases/LogLevelValue) | [`LevelLogger`](#LevelLogger).[`level`](LevelLogger.md#level) |
| <a id="logger"></a> `logger` | `readonly` | [`Logger`](#../interfaces/Logger) | [`LevelLogger`](#LevelLogger).[`logger`](LevelLogger.md#logger) |

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

A logger wrapper that prefixes every log message with a bracketed identifier.
Useful for distinguishing log output from different components or instances.

## Implements

- [`Logger`](#../interfaces/Logger)

## Constructors

### Constructor

```ts
new IdLogger(logger: Logger, id?: () => string): IdLogger;
```

### Parameters

| Parameter | Type |
| ------ | ------ |
| `logger` | [`Logger`](#../interfaces/Logger) |
| `id?` | () => `string` |

### Returns

`IdLogger`

## Accessors

### id

### Set Signature

```ts
set id(id: string): void;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `id` | `string` |

#### Returns

`void`

## Methods

### debug()

```ts
debug(...data: unknown[]): void;
```

### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`data` | `unknown`[] |

### Returns

`void`

### Implementation of

```ts
Logger.debug
```

***

### error()

```ts
error(...data: unknown[]): void;
```

### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`data` | `unknown`[] |

### Returns

`void`

### Implementation of

```ts
Logger.error
```

***

### info()

```ts
info(...data: unknown[]): void;
```

### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`data` | `unknown`[] |

### Returns

`void`

### Implementation of

```ts
Logger.info
```

***

### log()

```ts
log(...data: unknown[]): void;
```

### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`data` | `unknown`[] |

### Returns

`void`

### Implementation of

```ts
Logger.log
```

***

### trace()

```ts
trace(...data: unknown[]): void;
```

### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`data` | `unknown`[] |

### Returns

`void`

### Implementation of

```ts
Logger.trace
```

***

### warn()

```ts
warn(...data: unknown[]): void;
```

### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`data` | `unknown`[] |

### Returns

`void`

### Implementation of

```ts
Logger.warn
```

  ### <a id="LevelLogger"></a>LevelLogger

[**@xylabs/logger**](#../README)

***

A logger that filters messages based on a configured log level.
Methods for levels above the configured threshold return a no-op function.

## Extended by

- [`ConsoleLogger`](#ConsoleLogger)

## Implements

- [`Logger`](#../interfaces/Logger)

## Constructors

### Constructor

```ts
new LevelLogger(logger: Logger, level?: LogLevelValue): LevelLogger;
```

### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `logger` | [`Logger`](#../interfaces/Logger) | `undefined` |
| `level` | [`LogLevelValue`](#../type-aliases/LogLevelValue) | `LogLevel.warn` |

### Returns

`LevelLogger`

## Properties

| Property | Modifier | Type |
| ------ | ------ | ------ |
| <a id="level"></a> `level` | `readonly` | [`LogLevelValue`](#../type-aliases/LogLevelValue) |
| <a id="logger"></a> `logger` | `readonly` | [`Logger`](#../interfaces/Logger) |

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

| Property | Modifier | Type | Default value |
| ------ | ------ | ------ | ------ |
| <a id="debug"></a> `debug` | `readonly` | (...`_data`: `unknown`[]) => `undefined` | `NoOpLogFunction` |
| <a id="error"></a> `error` | `readonly` | (...`_data`: `unknown`[]) => `undefined` | `NoOpLogFunction` |
| <a id="info"></a> `info` | `readonly` | (...`_data`: `unknown`[]) => `undefined` | `NoOpLogFunction` |
| <a id="log"></a> `log` | `readonly` | (...`_data`: `unknown`[]) => `undefined` | `NoOpLogFunction` |
| <a id="trace"></a> `trace` | `readonly` | (...`_data`: `unknown`[]) => `undefined` | `NoOpLogFunction` |
| <a id="warn"></a> `warn` | `readonly` | (...`_data`: `unknown`[]) => `undefined` | `NoOpLogFunction` |

### functions

  ### <a id="NoOpLogFunction"></a>NoOpLogFunction

[**@xylabs/logger**](#../README)

***

```ts
function NoOpLogFunction(..._data: unknown[]): undefined;
```

A log function that silently discards all arguments.

## Parameters

| Parameter | Type |
| ------ | ------ |
| ...`_data` | `unknown`[] |

## Returns

`undefined`

  ### <a id="getFunctionName"></a>getFunctionName

[**@xylabs/logger**](#../README)

***

```ts
function getFunctionName(depth?: number): string;
```

Retrieves the name of the calling function by inspecting the stack trace.

## Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `depth` | `number` | `2` | The stack frame depth to inspect (default: 2, the caller's caller). |

## Returns

`string`

The function name, or '<unknown>' if it cannot be determined.

### interfaces

  ### <a id="Logger"></a>Logger

[**@xylabs/logger**](#../README)

***

Interface to handle overlap between Winston &
`console` with as much congruency as possible.

## Properties

| Property | Type |
| ------ | ------ |
| <a id="debug"></a> `debug` | [`LogFunction`](#../type-aliases/LogFunction) |
| <a id="error"></a> `error` | [`LogFunction`](#../type-aliases/LogFunction) |
| <a id="info"></a> `info` | [`LogFunction`](#../type-aliases/LogFunction) |
| <a id="log"></a> `log` | [`LogFunction`](#../type-aliases/LogFunction) |
| <a id="trace"></a> `trace` | [`LogFunction`](#../type-aliases/LogFunction) |
| <a id="warn"></a> `warn` | [`LogFunction`](#../type-aliases/LogFunction) |

### type-aliases

  ### <a id="LogFunction"></a>LogFunction

[**@xylabs/logger**](#../README)

***

```ts
type LogFunction = (...data: unknown[]) => void;
```

A generic logging function that accepts any number of arguments.

## Parameters

| Parameter | Type |
| ------ | ------ |
| ...`data` | `unknown`[] |

## Returns

`void`

  ### <a id="LogLevelKey"></a>LogLevelKey

[**@xylabs/logger**](#../README)

***

```ts
type LogLevelKey = EnumKey<typeof LogLevel>;
```

String key for a log level (e.g. 'error', 'warn', 'info').

  ### <a id="LogLevelValue"></a>LogLevelValue

[**@xylabs/logger**](#../README)

***

```ts
type LogLevelValue = EnumValue<typeof LogLevel>;
```

Numeric value of a log level (1 through 6).

  ### <a id="LogVerbosity"></a>LogVerbosity

[**@xylabs/logger**](#../README)

***

```ts
type LogVerbosity = LogLevelKey;
```

Alias for LogLevelKey, representing the verbosity setting as a string.

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

Numeric log level values, from least verbose (error=1) to most verbose (trace=6).


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