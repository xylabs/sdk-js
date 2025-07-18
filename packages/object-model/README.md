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

- [TypeCheckConfig](#interfaces/TypeCheckConfig)
- [TypeCheckRequiredConfig](#interfaces/TypeCheckRequiredConfig)
- [TypeCheckOptionalConfig](#interfaces/TypeCheckOptionalConfig)

## Type Aliases

- [AnyObject](#type-aliases/AnyObject)
- [AsTypeFunction](#type-aliases/AsTypeFunction)
- [AsOptionalTypeFunction](#type-aliases/AsOptionalTypeFunction)
- [Compare](#type-aliases/Compare)
- [StringOrAlertFunction](#type-aliases/StringOrAlertFunction)
- [TypeCheck](#type-aliases/TypeCheck)

### interfaces

  ### <a id="TypeCheckConfig"></a>TypeCheckConfig

[**@xylabs/object-model**](#../README)

***

## Extended by

- [`TypeCheckRequiredConfig`](#TypeCheckRequiredConfig)
- [`TypeCheckOptionalConfig`](#TypeCheckOptionalConfig)

## Properties

### log?

```ts
optional log: boolean | Logger;
```

  ### <a id="TypeCheckOptionalConfig"></a>TypeCheckOptionalConfig

[**@xylabs/object-model**](#../README)

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

[**@xylabs/object-model**](#../README)

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

### type-aliases

  ### <a id="AnyObject"></a>AnyObject

[**@xylabs/object-model**](#../README)

***

```ts
type AnyObject = Record<TypedKey, unknown>;
```

Any object, which means that it does not enforce the set of fields that it has.  Extending from AnyObject
will result in a type that includes the universal set of field names

  ### <a id="AsOptionalTypeFunction"></a>AsOptionalTypeFunction

[**@xylabs/object-model**](#../README)

***

```ts
type AsOptionalTypeFunction<T> = <TType>(value) => undefined | TType;
```

## Type Parameters

### T

`T` *extends* `AnyNonPromise` = `AnyNonPromise`

## Type Parameters

### TType

`TType` *extends* `AnyNonPromise`

## Parameters

### value

`AnyNonPromise`

## Returns

`undefined` \| `TType`

  ### <a id="AsTypeFunction"></a>AsTypeFunction

[**@xylabs/object-model**](#../README)

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

`T` *extends* `AnyNonPromise` = `AnyNonPromise`

## Call Signature

```ts
<TType>(value): undefined | TType;
```

### Type Parameters

### TType

`TType` *extends* `AnyNonPromise`

### Parameters

### value

`AnyNonPromise`

### Returns

`undefined` \| `TType`

## Call Signature

```ts
<TType>(value, config): TType;
```

### Type Parameters

### TType

`TType` *extends* `AnyNonPromise`

### Parameters

### value

`AnyNonPromise`

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

`TType` *extends* `AnyNonPromise`

### Parameters

### value

`AnyNonPromise`

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

`TType` *extends* `AnyNonPromise`

### Parameters

### value

`AnyNonPromise`

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

`TType` *extends* `AnyNonPromise`

### Parameters

### value

`AnyNonPromise`

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

`TType` *extends* `AnyNonPromise`

### Parameters

### value

`AnyNonPromise`

### assert

[`StringOrAlertFunction`](#StringOrAlertFunction)\<`TType`\>

### config

[`TypeCheckConfig`](#../interfaces/TypeCheckConfig) | [`TypeCheckOptionalConfig`](#../interfaces/TypeCheckOptionalConfig)

### Returns

`undefined` \| `TType`

  ### <a id="Compare"></a>Compare

[**@xylabs/object-model**](#../README)

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

  ### <a id="StringOrAlertFunction"></a>StringOrAlertFunction

[**@xylabs/object-model**](#../README)

***

```ts
type StringOrAlertFunction<T> = string | AssertExMessageFunc<T>;
```

## Type Parameters

### T

`T` *extends* `AnyNonPromise`

  ### <a id="TypeCheck"></a>TypeCheck

[**@xylabs/object-model**](#../README)

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

`AnyNonPromise`

### Returns

`obj is T`

## Call Signature

```ts
(obj, config): obj is T;
```

### Parameters

### obj

`AnyNonPromise`

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

`AnyNonPromise`

### config

`undefined` | `number` | [`TypeCheckConfig`](#../interfaces/TypeCheckConfig)

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