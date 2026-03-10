# @xylabs/telemetry

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

**@xylabs/telemetry**

***

## Interfaces

- [SpanConfig](#interfaces/SpanConfig)

## Functions

- [cloneContextWithoutSpan](#functions/cloneContextWithoutSpan)
- [span](#functions/span)
- [spanRoot](#functions/spanRoot)
- [spanAsync](#functions/spanAsync)
- [spanRootAsync](#functions/spanRootAsync)
- [timeBudget](#functions/timeBudget)

### functions

  ### <a id="cloneContextWithoutSpan"></a>cloneContextWithoutSpan

[**@xylabs/telemetry**](#../README)

***

```ts
function cloneContextWithoutSpan(activeCtx, configKeys?): Context;
```

Creates a new OpenTelemetry context that preserves baggage and custom keys but has no active span.

## Parameters

### activeCtx

`Context`

The context to clone from.

### configKeys?

`symbol`[] = `[]`

Additional context keys to copy.

## Returns

`Context`

A new context with baggage but no parent span.

  ### <a id="span"></a>span

[**@xylabs/telemetry**](#../README)

***

```ts
function span<T>(
   name, 
   fn, 
   tracer?): T;
```

Executes a synchronous function within an OpenTelemetry span, recording status and exceptions.

## Type Parameters

### T

`T`

## Parameters

### name

`string`

The span name.

### fn

() => `T`

The function to execute.

### tracer?

`Tracer`

Optional tracer to use.

## Returns

`T`

The return value of `fn`.

  ### <a id="spanAsync"></a>spanAsync

[**@xylabs/telemetry**](#../README)

***

```ts
function spanAsync<T>(
   name, 
   fn, 
config?): Promise<T>;
```

Executes an async function within an OpenTelemetry span, with optional time budget monitoring.

## Type Parameters

### T

`T`

## Parameters

### name

`string`

The span name.

### fn

() => `Promise`\<`T`\>

The async function to execute.

### config?

[`SpanConfig`](#../interfaces/SpanConfig) = `{}`

Optional span configuration (tracer, logger, time budget).

## Returns

`Promise`\<`T`\>

The resolved value of `fn`.

  ### <a id="spanRoot"></a>spanRoot

[**@xylabs/telemetry**](#../README)

***

```ts
function spanRoot<T>(
   name, 
   fn, 
   tracer?): T;
```

Executes a synchronous function within a new root span that has no parent, even if a span is already active.

## Type Parameters

### T

`T`

## Parameters

### name

`string`

The span name.

### fn

() => `T`

The function to execute.

### tracer?

`Tracer`

Optional tracer to use.

## Returns

`T`

The return value of `fn`.

  ### <a id="spanRootAsync"></a>spanRootAsync

[**@xylabs/telemetry**](#../README)

***

```ts
function spanRootAsync<T>(
   name, 
   fn, 
config?): Promise<T>;
```

Executes an async function within a new root span (no parent), with optional time budget monitoring.

## Type Parameters

### T

`T`

## Parameters

### name

`string`

The span name.

### fn

() => `Promise`\<`T`\>

The async function to execute.

### config?

[`SpanConfig`](#../interfaces/SpanConfig) = `{}`

Optional span configuration (tracer, logger, time budget).

## Returns

`Promise`\<`T`\>

The resolved value of `fn`.

  ### <a id="timeBudget"></a>timeBudget

[**@xylabs/telemetry**](#../README)

***

```ts
function timeBudget<TResult>(
   name, 
   logger, 
   func, 
   budget, 
status?): Promise<TResult>;
```

Executes an async function and logs a warning if it exceeds the given time budget.

## Type Parameters

### TResult

`TResult`

## Parameters

### name

`string`

A label for the function, used in warning messages.

### logger

The logger to use for budget-exceeded warnings.

`Logger` | `undefined`

### func

() => `Promise`\<`TResult`\>

The async function to execute.

### budget

`number`

The time budget in milliseconds.

### status?

`boolean` = `false`

If true, logs periodic warnings while the function is still running.

## Returns

`Promise`\<`TResult`\>

The result of the executed function.

### interfaces

  ### <a id="SpanConfig"></a>SpanConfig

[**@xylabs/telemetry**](#../README)

***

Configuration options for span creation and execution.

## Properties

### logger?

```ts
optional logger: Logger | null;
```

Optional logger for time budget warnings. Falls back to console if not provided.

***

### timeBudgetLimit?

```ts
optional timeBudgetLimit: number;
```

Maximum allowed execution time in milliseconds before logging a warning.

***

### tracer?

```ts
optional tracer: Tracer;
```

OpenTelemetry tracer to use. Defaults to a tracer named after the span.


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
[npm-badge]: https://img.shields.io/npm/v/@xylabs/telemetry.svg
[npm-link]: https://www.npmjs.com/package/@xylabs/telemetry
[codacy-badge]: https://app.codacy.com/project/badge/Grade/c8e15e14f37741c18cfb47ac7245c698
[codacy-link]: https://www.codacy.com/gh/xylabs/sdk-js/dashboard?utm_source=github.com&utm_medium=referral&utm_content=xylabs/sdk-js&utm_campaign=Badge_Grade
[codeclimate-badge]: https://api.codeclimate.com/v1/badges/c5eb068f806f0b047ea7/maintainability
[codeclimate-link]: https://codeclimate.com/github/xylabs/sdk-js/maintainability
[snyk-badge]: https://snyk.io/test/github/xylabs/sdk-js/badge.svg?targetFile=package.json
[snyk-link]: https://snyk.io/test/github/xylabs/sdk-js?targetFile=package.json

[npm-downloads-badge]: https://img.shields.io/npm/dw/@xylabs/telemetry
[npm-license-badge]: https://img.shields.io/npm/l/@xylabs/telemetry

[jsdelivr-badge]: https://data.jsdelivr.com/v1/package/npm/@xylabs/telemetry/badge
[jsdelivr-link]: https://www.jsdelivr.com/package/npm/@xylabs/telemetry

[socket-badge]: https://socket.dev/api/badge/npm/package/@xylabs/telemetry
[socket-link]: https://socket.dev/npm/package/@xylabs/telemetry