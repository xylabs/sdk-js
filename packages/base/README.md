# @xylabs/base

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

**@xylabs/base**

***

## Classes

| Class | Description |
| ------ | ------ |
| [Base](#classes/Base) | Abstract base class providing logging, telemetry, and global instance tracking with WeakRef-based GC. |
| [UniqueBase](#classes/UniqueBase) | Base class that registers itself as globally unique, preventing duplicate module instances. |

## Type Aliases

| Type Alias | Description |
| ------ | ------ |
| [BaseClassName](#type-aliases/BaseClassName) | Branded string type representing a class name used for global instance tracking. |
| [BaseParamsFields](#type-aliases/BaseParamsFields) | Common parameter fields available to all Base instances (logger, meter, tracer). |
| [BaseParams](#type-aliases/BaseParams) | Parameters for constructing a Base instance, combining BaseParamsFields with optional additional params. |

## Functions

| Function | Description |
| ------ | ------ |
| [disableGloballyUnique](#functions/disableGloballyUnique) | Disables global uniqueness checks, allowing duplicate registrations without throwing. |
| [globallyUnique](#functions/globallyUnique) | Registers a value as globally unique under the given name and domain. Throws if a different value is already registered under the same key. |

### classes

  ### <a id="Base"></a>Base

[**@xylabs/base**](#../README)

***

Abstract base class providing logging, telemetry, and global instance tracking with WeakRef-based GC.

## Extended by

- [`UniqueBase`](#UniqueBase)

## Type Parameters

| Type Parameter | Default type | Description |
| ------ | ------ | ------ |
| `TParams` *extends* [`BaseParams`](#../type-aliases/BaseParams) | [`BaseParams`](#../type-aliases/BaseParams) | The parameter type, extending BaseParams |

## Constructors

### Constructor

```ts
new Base<TParams>(params: BaseParams<TParams>): Base<TParams>;
```

### Parameters

| Parameter | Type |
| ------ | ------ |
| `params` | [`BaseParams`](#../type-aliases/BaseParams)\<`TParams`\> |

### Returns

`Base`\<`TParams`\>

## Properties

| Property | Modifier | Type | Default value |
| ------ | ------ | ------ | ------ |
| <a id="defaultlogger"></a> `defaultLogger?` | `static` | `Logger` | `undefined` |
| <a id="globalinstances"></a> `globalInstances` | `readonly` | `Record`\<[`BaseClassName`](#../type-aliases/BaseClassName), `WeakRef`\<`Base`\>[]\> | `{}` |
| <a id="globalinstancescounthistory"></a> `globalInstancesCountHistory` | `readonly` | `Record`\<[`BaseClassName`](#../type-aliases/BaseClassName), `number`[]\> | `{}` |

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

`Logger` \| `undefined`

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
static gc(force?: boolean): void;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `force?` | `boolean` |

#### Returns

`void`

### Call Signature

```ts
static gc(className: BaseClassName): void;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `className` | [`BaseClassName`](#../type-aliases/BaseClassName) |

#### Returns

`void`

***

### instanceCount()

```ts
static instanceCount(className: BaseClassName): number;
```

### Parameters

| Parameter | Type |
| ------ | ------ |
| `className` | [`BaseClassName`](#../type-aliases/BaseClassName) |

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

  ### <a id="UniqueBase"></a>UniqueBase

[**@xylabs/base**](#../README)

***

Base class that registers itself as globally unique, preventing duplicate module instances.

## Extends

- [`Base`](#Base)\<`TParams`\>

## Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `TParams` *extends* [`BaseParams`](#../type-aliases/BaseParams) | [`BaseParams`](#../type-aliases/BaseParams) |

## Constructors

### Constructor

```ts
new UniqueBase<TParams>(params: BaseParams<TParams>): UniqueBase<TParams>;
```

### Parameters

| Parameter | Type |
| ------ | ------ |
| `params` | [`BaseParams`](#../type-aliases/BaseParams)\<`TParams`\> |

### Returns

`UniqueBase`\<`TParams`\>

### Overrides

[`Base`](#Base).[`constructor`](Base.md#constructor)

## Properties

| Property | Modifier | Type | Default value | Inherited from |
| ------ | ------ | ------ | ------ | ------ |
| <a id="defaultlogger"></a> `defaultLogger?` | `static` | `Logger` | `undefined` | [`Base`](#Base).[`defaultLogger`](Base.md#defaultlogger) |
| <a id="globalinstances"></a> `globalInstances` | `readonly` | `Record`\<[`BaseClassName`](#../type-aliases/BaseClassName), `WeakRef`\<[`Base`](#Base)\>[]\> | `{}` | [`Base`](#Base).[`globalInstances`](Base.md#globalinstances) |
| <a id="globalinstancescounthistory"></a> `globalInstancesCountHistory` | `readonly` | `Record`\<[`BaseClassName`](#../type-aliases/BaseClassName), `number`[]\> | `{}` | [`Base`](#Base).[`globalInstancesCountHistory`](Base.md#globalinstancescounthistory) |
| <a id="uniquedomain"></a> `uniqueDomain` | `readonly` | `"xy"` | `'xy'` | - |
| <a id="uniquename"></a> `uniqueName` | `readonly` | `string` | `undefined` | - |
| <a id="uniquenamexyo"></a> `uniqueNameXyo` | `readonly` | `string` | `undefined` | - |

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
set static historyTime(value: number): void;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `number` |

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
set static maxGcFrequency(value: number): void;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `number` |

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

`Logger` \| `undefined`

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
static gc(force?: boolean): void;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `force?` | `boolean` |

#### Returns

`void`

#### Inherited from

[`Base`](#Base).[`gc`](Base.md#gc)

### Call Signature

```ts
static gc(className: BaseClassName): void;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `className` | [`BaseClassName`](#../type-aliases/BaseClassName) |

#### Returns

`void`

#### Inherited from

[`Base`](#Base).[`gc`](Base.md#gc)

***

### instanceCount()

```ts
static instanceCount(className: BaseClassName): number;
```

### Parameters

| Parameter | Type |
| ------ | ------ |
| `className` | [`BaseClassName`](#../type-aliases/BaseClassName) |

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

### functions

  ### <a id="disableGloballyUnique"></a>disableGloballyUnique

[**@xylabs/base**](#../README)

***

```ts
function disableGloballyUnique(): void;
```

Disables global uniqueness checks, allowing duplicate registrations without throwing.

## Returns

`void`

  ### <a id="globallyUnique"></a>globallyUnique

[**@xylabs/base**](#../README)

***

```ts
function globallyUnique(
   name: string | symbol, 
   value: unknown, 
   domain?: string): string;
```

Registers a value as globally unique under the given name and domain.
Throws if a different value is already registered under the same key.

## Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `name` | `string` \| `symbol` | `undefined` | The unique name or symbol |
| `value` | `unknown` | `undefined` | The value to register |
| `domain` | `string` | `'global'` | The namespace domain (default 'global') |

## Returns

`string`

The fully qualified unique name

### type-aliases

  ### <a id="BaseClassName"></a>BaseClassName

[**@xylabs/base**](#../README)

***

```ts
type BaseClassName = string & {
  __baseClassName: true;
};
```

Branded string type representing a class name used for global instance tracking.

## Type Declaration

| Name | Type |
| ------ | ------ |
| `__baseClassName` | `true` |

  ### <a id="BaseParams"></a>BaseParams

[**@xylabs/base**](#../README)

***

```ts
type BaseParams<TAdditionalParams> = TAdditionalParams & BaseParamsFields;
```

Parameters for constructing a Base instance, combining BaseParamsFields with optional additional params.

## Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `TAdditionalParams` *extends* `EmptyObject` | `EmptyObject` |

  ### <a id="BaseParamsFields"></a>BaseParamsFields

[**@xylabs/base**](#../README)

***

```ts
type BaseParamsFields = {
  logger?: Logger;
  meterProvider?: MeterProvider;
  traceProvider?: TracerProvider;
};
```

Common parameter fields available to all Base instances (logger, meter, tracer).

## Properties

| Property | Type |
| ------ | ------ |
| <a id="logger"></a> `logger?` | `Logger` |
| <a id="meterprovider"></a> `meterProvider?` | `MeterProvider` |
| <a id="traceprovider"></a> `traceProvider?` | `TracerProvider` |


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
[npm-badge]: https://img.shields.io/npm/v/@xylabs/base.svg
[npm-link]: https://www.npmjs.com/package/@xylabs/base
[codacy-badge]: https://app.codacy.com/project/badge/Grade/c8e15e14f37741c18cfb47ac7245c698
[codacy-link]: https://www.codacy.com/gh/xylabs/sdk-js/dashboard?utm_source=github.com&utm_medium=referral&utm_content=xylabs/sdk-js&utm_campaign=Badge_Grade
[codeclimate-badge]: https://api.codeclimate.com/v1/badges/c5eb068f806f0b047ea7/maintainability
[codeclimate-link]: https://codeclimate.com/github/xylabs/sdk-js/maintainability
[snyk-badge]: https://snyk.io/test/github/xylabs/sdk-js/badge.svg?targetFile=package.json
[snyk-link]: https://snyk.io/test/github/xylabs/sdk-js?targetFile=package.json

[npm-downloads-badge]: https://img.shields.io/npm/dw/@xylabs/base
[npm-license-badge]: https://img.shields.io/npm/l/@xylabs/base

[jsdelivr-badge]: https://data.jsdelivr.com/v1/package/npm/@xylabs/base/badge
[jsdelivr-link]: https://www.jsdelivr.com/package/npm/@xylabs/base

[socket-badge]: https://socket.dev/api/badge/npm/package/@xylabs/base
[socket-link]: https://socket.dev/npm/package/@xylabs/base