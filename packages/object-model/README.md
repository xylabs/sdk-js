# @xylabs/object-model

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

**@xylabs/object-model**

***

## Interfaces

| Interface | Description |
| ------ | ------ |
| [TypeCheckConfig](#interfaces/TypeCheckConfig) | Configuration options for type check functions, with optional logging. |
| [TypeCheckRequiredConfig](#interfaces/TypeCheckRequiredConfig) | Type check configuration that marks the value as required, causing assertions on failure. |
| [TypeCheckOptionalConfig](#interfaces/TypeCheckOptionalConfig) | Type check configuration that marks the value as optional, returning undefined on failure. |

## Type Aliases

| Type Alias | Description |
| ------ | ------ |
| [AnyObject](#type-aliases/AnyObject) | Any object, which means that it does not enforce the set of fields that it has. Extending from AnyObject will result in a type that includes the universal set of field names |
| [AsTypeFunction](#type-aliases/AsTypeFunction) | A type-narrowing function that attempts to cast a value to T, with optional assertion and configuration overloads. |
| [AsOptionalTypeFunction](#type-aliases/AsOptionalTypeFunction) | A simplified type-narrowing function that returns T or undefined, without assertion support. |
| [Compare](#type-aliases/Compare) | A comparator function that returns a negative number if a < b, zero if a == b, and a positive number if a > b. |
| [EmptyObject](#type-aliases/EmptyObject) | An empty object, which means that it does enforce the set of field names, defaulting to an empty set until extended from, which then adds only those additional fields |
| [StringOrAlertFunction](#type-aliases/StringOrAlertFunction) | A string message or function that produces an assertion error message for a failed type check. |
| [TypeCheck](#type-aliases/TypeCheck) | A type guard function that checks whether a value conforms to type T, with optional configuration. |

### interfaces

  ### <a id="TypeCheckConfig"></a>TypeCheckConfig

[**@xylabs/object-model**](#../README)

***

Configuration options for type check functions, with optional logging.

## Extended by

- [`TypeCheckRequiredConfig`](#TypeCheckRequiredConfig)
- [`TypeCheckOptionalConfig`](#TypeCheckOptionalConfig)

## Properties

| Property | Type |
| ------ | ------ |
| <a id="log"></a> `log?` | `boolean` \| `Logger` |

  ### <a id="TypeCheckOptionalConfig"></a>TypeCheckOptionalConfig

[**@xylabs/object-model**](#../README)

***

Type check configuration that marks the value as optional, returning undefined on failure.

## Extends

- [`TypeCheckConfig`](#TypeCheckConfig)

## Properties

| Property | Type | Inherited from |
| ------ | ------ | ------ |
| <a id="log"></a> `log?` | `boolean` \| `Logger` | [`TypeCheckConfig`](#TypeCheckConfig).[`log`](TypeCheckConfig.md#log) |
| <a id="required"></a> `required` | `false` | - |

  ### <a id="TypeCheckRequiredConfig"></a>TypeCheckRequiredConfig

[**@xylabs/object-model**](#../README)

***

Type check configuration that marks the value as required, causing assertions on failure.

## Extends

- [`TypeCheckConfig`](#TypeCheckConfig)

## Properties

| Property | Type | Inherited from |
| ------ | ------ | ------ |
| <a id="log"></a> `log?` | `boolean` \| `Logger` | [`TypeCheckConfig`](#TypeCheckConfig).[`log`](TypeCheckConfig.md#log) |
| <a id="required"></a> `required` | `true` | - |

### type-aliases

  ### <a id="AnyObject"></a>AnyObject

[**@xylabs/object-model**](#../README)

***

```ts
type AnyObject = EmptyObject & Partial<Record<TypedKey, unknown>>;
```

Any object, which means that it does not enforce the set of fields that it has.  Extending from AnyObject
will result in a type that includes the universal set of field names

  ### <a id="AsOptionalTypeFunction"></a>AsOptionalTypeFunction

[**@xylabs/object-model**](#../README)

***

```ts
type AsOptionalTypeFunction<T> = <TType>(value: AnyNonPromise) => TType | undefined;
```

A simplified type-narrowing function that returns T or undefined, without assertion support.

## Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `T` *extends* `AnyNonPromise` | `AnyNonPromise` |

## Type Parameters

| Type Parameter |
| ------ |
| `TType` *extends* `AnyNonPromise` |

## Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `AnyNonPromise` |

## Returns

`TType` \| `undefined`

  ### <a id="AsTypeFunction"></a>AsTypeFunction

[**@xylabs/object-model**](#../README)

***

```ts
type AsTypeFunction<T> = {
<TType>  (value: AnyNonPromise): TType | undefined;
<TType>  (value: AnyNonPromise, config: TypeCheckRequiredConfig): TType;
<TType>  (value: AnyNonPromise, config: 
  | TypeCheckConfig
  | TypeCheckOptionalConfig): TType | undefined;
<TType>  (value: AnyNonPromise, assert: StringOrAlertFunction<TType>): TType | undefined;
<TType>  (value: AnyNonPromise, assert: StringOrAlertFunction<TType>, config: TypeCheckRequiredConfig): TType;
<TType>  (value: AnyNonPromise, assert: StringOrAlertFunction<TType>, config: 
  | TypeCheckConfig
  | TypeCheckOptionalConfig): TType | undefined;
};
```

A type-narrowing function that attempts to cast a value to T, with optional assertion and configuration overloads.

## Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `T` *extends* `AnyNonPromise` | `AnyNonPromise` |

## Call Signature

```ts
<TType>(value: AnyNonPromise): TType | undefined;
```

### Type Parameters

| Type Parameter |
| ------ |
| `TType` *extends* `AnyNonPromise` |

### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `AnyNonPromise` |

### Returns

`TType` \| `undefined`

## Call Signature

```ts
<TType>(value: AnyNonPromise, config: TypeCheckRequiredConfig): TType;
```

### Type Parameters

| Type Parameter |
| ------ |
| `TType` *extends* `AnyNonPromise` |

### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `AnyNonPromise` |
| `config` | [`TypeCheckRequiredConfig`](#../interfaces/TypeCheckRequiredConfig) |

### Returns

`TType`

## Call Signature

```ts
<TType>(value: AnyNonPromise, config: 
  | TypeCheckConfig
  | TypeCheckOptionalConfig): TType | undefined;
```

### Type Parameters

| Type Parameter |
| ------ |
| `TType` *extends* `AnyNonPromise` |

### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `AnyNonPromise` |
| `config` | \| [`TypeCheckConfig`](#../interfaces/TypeCheckConfig) \| [`TypeCheckOptionalConfig`](#../interfaces/TypeCheckOptionalConfig) |

### Returns

`TType` \| `undefined`

## Call Signature

```ts
<TType>(value: AnyNonPromise, assert: StringOrAlertFunction<TType>): TType | undefined;
```

### Type Parameters

| Type Parameter |
| ------ |
| `TType` *extends* `AnyNonPromise` |

### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `AnyNonPromise` |
| `assert` | [`StringOrAlertFunction`](#StringOrAlertFunction)\<`TType`\> |

### Returns

`TType` \| `undefined`

## Call Signature

```ts
<TType>(
   value: AnyNonPromise, 
   assert: StringOrAlertFunction<TType>, 
   config: TypeCheckRequiredConfig): TType;
```

### Type Parameters

| Type Parameter |
| ------ |
| `TType` *extends* `AnyNonPromise` |

### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `AnyNonPromise` |
| `assert` | [`StringOrAlertFunction`](#StringOrAlertFunction)\<`TType`\> |
| `config` | [`TypeCheckRequiredConfig`](#../interfaces/TypeCheckRequiredConfig) |

### Returns

`TType`

## Call Signature

```ts
<TType>(
   value: AnyNonPromise, 
   assert: StringOrAlertFunction<TType>, 
   config: 
  | TypeCheckConfig
  | TypeCheckOptionalConfig): TType | undefined;
```

### Type Parameters

| Type Parameter |
| ------ |
| `TType` *extends* `AnyNonPromise` |

### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `AnyNonPromise` |
| `assert` | [`StringOrAlertFunction`](#StringOrAlertFunction)\<`TType`\> |
| `config` | \| [`TypeCheckConfig`](#../interfaces/TypeCheckConfig) \| [`TypeCheckOptionalConfig`](#../interfaces/TypeCheckOptionalConfig) |

### Returns

`TType` \| `undefined`

  ### <a id="Compare"></a>Compare

[**@xylabs/object-model**](#../README)

***

```ts
type Compare<T> = (a: T, b: T) => number;
```

A comparator function that returns a negative number if a < b, zero if a == b, and a positive number if a > b.

## Type Parameters

| Type Parameter |
| ------ |
| `T` |

## Parameters

| Parameter | Type |
| ------ | ------ |
| `a` | `T` |
| `b` | `T` |

## Returns

`number`

  ### <a id="EmptyObject"></a>EmptyObject

[**@xylabs/object-model**](#../README)

***

```ts
type EmptyObject<T> = Exclude<{ [K in keyof T]?: never }, unknown[] | (...args: unknown[]) => unknown | null>;
```

An empty object, which means that it does enforce the set of field names, defaulting to an empty set until
extended from, which then adds only those additional fields

## Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `T` *extends* `object` | `object` |

  ### <a id="StringOrAlertFunction"></a>StringOrAlertFunction

[**@xylabs/object-model**](#../README)

***

```ts
type StringOrAlertFunction<T> = string | AssertExMessageFunc<T>;
```

A string message or function that produces an assertion error message for a failed type check.

## Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* `AnyNonPromise` |

  ### <a id="TypeCheck"></a>TypeCheck

[**@xylabs/object-model**](#../README)

***

```ts
type TypeCheck<T> = {
  (obj: AnyNonPromise): obj is T;
  (obj: AnyNonPromise, config: TypeCheckConfig): obj is T;
  (obj: AnyNonPromise, config: 
  | number
  | TypeCheckConfig
  | undefined): obj is T;
};
```

A type guard function that checks whether a value conforms to type T, with optional configuration.

## Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* `TypedValue` |

## Call Signature

```ts
(obj: AnyNonPromise): obj is T;
```

### Parameters

| Parameter | Type |
| ------ | ------ |
| `obj` | `AnyNonPromise` |

### Returns

`obj is T`

## Call Signature

```ts
(obj: AnyNonPromise, config: TypeCheckConfig): obj is T;
```

### Parameters

| Parameter | Type |
| ------ | ------ |
| `obj` | `AnyNonPromise` |
| `config` | [`TypeCheckConfig`](#../interfaces/TypeCheckConfig) |

### Returns

`obj is T`

## Call Signature

```ts
(obj: AnyNonPromise, config: 
  | number
  | TypeCheckConfig
  | undefined): obj is T;
```

### Parameters

| Parameter | Type |
| ------ | ------ |
| `obj` | `AnyNonPromise` |
| `config` | \| `number` \| [`TypeCheckConfig`](#../interfaces/TypeCheckConfig) \| `undefined` |

### Returns

`obj is T`


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
[npm-badge]: https://img.shields.io/npm/v/@xylabs/object-model.svg
[npm-link]: https://www.npmjs.com/package/@xylabs/object-model
[codacy-badge]: https://app.codacy.com/project/badge/Grade/c8e15e14f37741c18cfb47ac7245c698
[codacy-link]: https://www.codacy.com/gh/xylabs/sdk-js/dashboard?utm_source=github.com&utm_medium=referral&utm_content=xylabs/sdk-js&utm_campaign=Badge_Grade
[codeclimate-badge]: https://api.codeclimate.com/v1/badges/c5eb068f806f0b047ea7/maintainability
[codeclimate-link]: https://codeclimate.com/github/xylabs/sdk-js/maintainability
[snyk-badge]: https://snyk.io/test/github/xylabs/sdk-js/badge.svg?targetFile=package.json
[snyk-link]: https://snyk.io/test/github/xylabs/sdk-js?targetFile=package.json

[npm-downloads-badge]: https://img.shields.io/npm/dw/@xylabs/object-model
[npm-license-badge]: https://img.shields.io/npm/l/@xylabs/object-model

[jsdelivr-badge]: https://data.jsdelivr.com/v1/package/npm/@xylabs/object-model/badge
[jsdelivr-link]: https://www.jsdelivr.com/package/npm/@xylabs/object-model

[socket-badge]: https://socket.dev/api/badge/npm/package/@xylabs/object-model
[socket-link]: https://socket.dev/npm/package/@xylabs/object-model