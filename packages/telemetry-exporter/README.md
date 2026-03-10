# @xylabs/telemetry-exporter

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

**@xylabs/telemetry-exporter**

***

## Classes

- [XyConsoleSpanExporter](#classes/XyConsoleSpanExporter)

## Functions

- [spanDurationInMillis](#functions/spanDurationInMillis)

### classes

  ### <a id="XyConsoleSpanExporter"></a>XyConsoleSpanExporter

[**@xylabs/telemetry-exporter**](#../README)

***

A console span exporter that formats spans with color-coded durations using chalk.
Spans are filtered by a configurable log level based on their duration.

## Extends

- `ConsoleSpanExporter`

## Constructors

### Constructor

```ts
new XyConsoleSpanExporter(logLevel?, logger?): XyConsoleSpanExporter;
```

### Parameters

#### logLevel?

`number` = `0`

#### logger?

`Logger` = `console`

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

Duration thresholds (in ms) that map to increasing log levels.

***

### logLevelToChalkColor

```ts
readonly static logLevelToChalkColor: ChalkInstance[];
```

Chalk color functions corresponding to each log level.

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

The minimum log level required for a span to be exported.

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

Returns the chalk color function for the given log level.

### Parameters

#### level

`number`

The log level index.

### Returns

`ChalkInstance`

A chalk color function.

***

### spanLevel()

```ts
spanLevel(span): number;
```

Determines the log level of a span based on its duration.

### Parameters

#### span

`ReadableSpan`

The span to evaluate.

### Returns

`number`

The numeric log level (index into durationToLogLevel).

### functions

  ### <a id="spanDurationInMillis"></a>spanDurationInMillis

[**@xylabs/telemetry-exporter**](#../README)

***

```ts
function spanDurationInMillis(span): number;
```

Calculates the duration of a span in milliseconds from its high-resolution time tuple.

## Parameters

### span

`ReadableSpan`

The span to measure.

## Returns

`number`

The span duration in milliseconds.


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
[npm-badge]: https://img.shields.io/npm/v/@xylabs/telemetry-exporter.svg
[npm-link]: https://www.npmjs.com/package/@xylabs/telemetry-exporter
[codacy-badge]: https://app.codacy.com/project/badge/Grade/c8e15e14f37741c18cfb47ac7245c698
[codacy-link]: https://www.codacy.com/gh/xylabs/sdk-js/dashboard?utm_source=github.com&utm_medium=referral&utm_content=xylabs/sdk-js&utm_campaign=Badge_Grade
[codeclimate-badge]: https://api.codeclimate.com/v1/badges/c5eb068f806f0b047ea7/maintainability
[codeclimate-link]: https://codeclimate.com/github/xylabs/sdk-js/maintainability
[snyk-badge]: https://snyk.io/test/github/xylabs/sdk-js/badge.svg?targetFile=package.json
[snyk-link]: https://snyk.io/test/github/xylabs/sdk-js?targetFile=package.json

[npm-downloads-badge]: https://img.shields.io/npm/dw/@xylabs/telemetry-exporter
[npm-license-badge]: https://img.shields.io/npm/l/@xylabs/telemetry-exporter

[jsdelivr-badge]: https://data.jsdelivr.com/v1/package/npm/@xylabs/telemetry-exporter/badge
[jsdelivr-link]: https://www.jsdelivr.com/package/npm/@xylabs/telemetry-exporter

[socket-badge]: https://socket.dev/api/badge/npm/package/@xylabs/telemetry-exporter
[socket-link]: https://socket.dev/npm/package/@xylabs/telemetry-exporter