# @xylabs/zod

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

**@xylabs/zod**

***

## Interfaces

| Interface | Description |
| ------ | ------ |
| [ZodFactoryConfigObject](#interfaces/ZodFactoryConfigObject) | Configuration object for zod factory functions, providing a name for error messages. |

## Type Aliases

| Type Alias | Description |
| ------ | ------ |
| [ZodFactoryConfig](#type-aliases/ZodFactoryConfig) | Configuration for zod factory assertion behavior, either an AssertConfig or a named config object. |
| [AllZodFactories](#type-aliases/AllZodFactories) | - |

## Functions

| Function | Description |
| ------ | ------ |
| [zodAllFactory](#functions/zodAllFactory) | Creates a bundle of `is`, `as`, and `to` factory functions for a given zod schema. |
| [zodAsAsyncFactory](#functions/zodAsAsyncFactory) | Creates an async function that validates a value against a zod schema and returns it with a narrowed type. Uses `safeParseAsync` for schemas with async refinements. When called without an assert config, returns undefined on failure. |
| [zodAsFactory](#functions/zodAsFactory) | Creates a function that validates a value against a zod schema and returns it with a narrowed type. When called without an assert config, returns undefined on failure. When called with an assert config, throws on failure. |
| [zodIsFactory](#functions/zodIsFactory) | Creates a type guard function that checks if a value matches a zod schema. |
| [zodToAsyncFactory](#functions/zodToAsyncFactory) | Creates an async function that converts a value to the zod schema type, delegating to `zodAsAsyncFactory` internally. Provides overloads for optional assertion: without assert config resolves to undefined on failure, with assert config throws on failure. |
| [zodToFactory](#functions/zodToFactory) | Creates a function that converts a value to the zod schema type, delegating to `zodAsFactory` internally. Provides overloads for optional assertion: without assert config returns undefined on failure, with assert config throws on failure. |

### functions

  ### <a id="zodAllFactory"></a>zodAllFactory

[**@xylabs/zod**](#../README)

***

```ts
function zodAllFactory<T, TName>(zod: ZodType<T>, name: TName): {
[key: string]: {
<T>  (value: T): T & T | undefined;
<T>  (value: T, assert: ZodFactoryConfig): T & T;
};
};
```

**`Alpha`**

Creates a bundle of `is`, `as`, and `to` factory functions for a given zod schema.

## Type Parameters

| Type Parameter |
| ------ |
| `T` |
| `TName` *extends* `string` |

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `zod` | `ZodType`\<`T`\> | The zod schema to validate against |
| `name` | `TName` | The name used to suffix the generated function names (e.g. 'Address' produces `isAddress`, `asAddress`, `toAddress`) |

## Returns

```ts
{
[key: string]: {
<T>  (value: T): T & T | undefined;
<T>  (value: T, assert: ZodFactoryConfig): T & T;
};
}
```

An object containing `is<Name>`, `as<Name>`, and `to<Name>` functions

  ### <a id="zodAsAsyncFactory"></a>zodAsAsyncFactory

[**@xylabs/zod**](#../README)

***

```ts
function zodAsAsyncFactory<TZod>(zod: ZodType<TZod>, name: string): {
<T>  (value: T): Promise<T & TZod | undefined>;
<T>  (value: T, assert: ZodFactoryConfig): Promise<T & TZod>;
};
```

Creates an async function that validates a value against a zod schema and returns it with a narrowed type.
Uses `safeParseAsync` for schemas with async refinements. When called without an assert config, returns undefined on failure.

## Type Parameters

| Type Parameter |
| ------ |
| `TZod` |

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `zod` | `ZodType`\<`TZod`\> | The zod schema to validate against |
| `name` | `string` | A name used in error messages for identification |

## Returns

An async function that validates and narrows the type of a value

```ts
<T>(value: T): Promise<T & TZod | undefined>;
```

### Type Parameters

| Type Parameter |
| ------ |
| `T` |

### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `T` |

### Returns

`Promise`\<`T` & `TZod` \| `undefined`\>

```ts
<T>(value: T, assert: ZodFactoryConfig): Promise<T & TZod>;
```

### Type Parameters

| Type Parameter |
| ------ |
| `T` |

### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `T` |
| `assert` | [`ZodFactoryConfig`](#../type-aliases/ZodFactoryConfig) |

### Returns

`Promise`\<`T` & `TZod`\>

  ### <a id="zodAsFactory"></a>zodAsFactory

[**@xylabs/zod**](#../README)

***

```ts
function zodAsFactory<TZod>(zod: ZodType<TZod>, name: string): {
<T>  (value: T): T & TZod | undefined;
<T>  (value: T, assert: ZodFactoryConfig): T & TZod;
};
```

Creates a function that validates a value against a zod schema and returns it with a narrowed type.
When called without an assert config, returns undefined on failure. When called with an assert config, throws on failure.

## Type Parameters

| Type Parameter |
| ------ |
| `TZod` |

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `zod` | `ZodType`\<`TZod`\> | The zod schema to validate against |
| `name` | `string` | A name used in error messages for identification |

## Returns

A function that validates and narrows the type of a value

```ts
<T>(value: T): T & TZod | undefined;
```

### Type Parameters

| Type Parameter |
| ------ |
| `T` |

### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `T` |

### Returns

`T` & `TZod` \| `undefined`

```ts
<T>(value: T, assert: ZodFactoryConfig): T & TZod;
```

### Type Parameters

| Type Parameter |
| ------ |
| `T` |

### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `T` |
| `assert` | [`ZodFactoryConfig`](#../type-aliases/ZodFactoryConfig) |

### Returns

`T` & `TZod`

  ### <a id="zodIsFactory"></a>zodIsFactory

[**@xylabs/zod**](#../README)

***

```ts
function zodIsFactory<TZod>(zod: ZodType<TZod>): <T>(value: T) => value is T & TZod;
```

Creates a type guard function that checks if a value matches a zod schema.

## Type Parameters

| Type Parameter |
| ------ |
| `TZod` |

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `zod` | `ZodType`\<`TZod`\> | The zod schema to validate against |

## Returns

A type guard function that returns true if the value passes validation

```ts
<T>(value: T): value is T & TZod;
```

### Type Parameters

| Type Parameter |
| ------ |
| `T` |

### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `T` |

### Returns

`value is T & TZod`

  ### <a id="zodToAsyncFactory"></a>zodToAsyncFactory

[**@xylabs/zod**](#../README)

***

```ts
function zodToAsyncFactory<TZod>(zod: ZodType<TZod>, name: string): {
<T>  (value: T): Promise<T & TZod | undefined>;
<T>  (value: T, assert: ZodFactoryConfig): Promise<T & TZod>;
};
```

Creates an async function that converts a value to the zod schema type, delegating to `zodAsAsyncFactory` internally.
Provides overloads for optional assertion: without assert config resolves to undefined on failure, with assert config throws on failure.

## Type Parameters

| Type Parameter |
| ------ |
| `TZod` |

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `zod` | `ZodType`\<`TZod`\> | The zod schema to validate against |
| `name` | `string` | A name used in error messages for identification |

## Returns

An async function that validates and converts a value to the schema type

```ts
<T>(value: T): Promise<T & TZod | undefined>;
```

### Type Parameters

| Type Parameter |
| ------ |
| `T` |

### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `T` |

### Returns

`Promise`\<`T` & `TZod` \| `undefined`\>

```ts
<T>(value: T, assert: ZodFactoryConfig): Promise<T & TZod>;
```

### Type Parameters

| Type Parameter |
| ------ |
| `T` |

### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `T` |
| `assert` | [`ZodFactoryConfig`](#../type-aliases/ZodFactoryConfig) |

### Returns

`Promise`\<`T` & `TZod`\>

  ### <a id="zodToFactory"></a>zodToFactory

[**@xylabs/zod**](#../README)

***

```ts
function zodToFactory<TZod>(zod: ZodType<TZod>, name: string): {
<T>  (value: T): T & TZod | undefined;
<T>  (value: T, assert: ZodFactoryConfig): T & TZod;
};
```

Creates a function that converts a value to the zod schema type, delegating to `zodAsFactory` internally.
Provides overloads for optional assertion: without assert config returns undefined on failure, with assert config throws on failure.

## Type Parameters

| Type Parameter |
| ------ |
| `TZod` |

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `zod` | `ZodType`\<`TZod`\> | The zod schema to validate against |
| `name` | `string` | A name used in error messages for identification |

## Returns

A function that validates and converts a value to the schema type

```ts
<T>(value: T): T & TZod | undefined;
```

### Type Parameters

| Type Parameter |
| ------ |
| `T` |

### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `T` |

### Returns

`T` & `TZod` \| `undefined`

```ts
<T>(value: T, assert: ZodFactoryConfig): T & TZod;
```

### Type Parameters

| Type Parameter |
| ------ |
| `T` |

### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `T` |
| `assert` | [`ZodFactoryConfig`](#../type-aliases/ZodFactoryConfig) |

### Returns

`T` & `TZod`

### interfaces

  ### <a id="ZodFactoryConfigObject"></a>ZodFactoryConfigObject

[**@xylabs/zod**](#../README)

***

Configuration object for zod factory functions, providing a name for error messages.

## Properties

| Property | Type |
| ------ | ------ |
| <a id="name"></a> `name` | `string` |

### type-aliases

  ### <a id="AllZodFactories"></a>AllZodFactories

[**@xylabs/zod**](#../README)

***

```ts
type AllZodFactories<TType, TName> = { [K in `is${TName}`]: ReturnType<typeof zodIsFactory> } & { [K in `as${TName}`]: ReturnType<typeof zodAsFactory> } & { [K in `to${TName}`]: ReturnType<typeof zodToFactory> };
```

**`Alpha`**

## Type Parameters

| Type Parameter |
| ------ |
| `TType` |
| `TName` *extends* `string` |

  ### <a id="ZodFactoryConfig"></a>ZodFactoryConfig

[**@xylabs/zod**](#../README)

***

```ts
type ZodFactoryConfig = 
  | AssertConfig
  | ZodFactoryConfigObject;
```

Configuration for zod factory assertion behavior, either an AssertConfig or a named config object.


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
[npm-badge]: https://img.shields.io/npm/v/@xylabs/zod.svg
[npm-link]: https://www.npmjs.com/package/@xylabs/zod
[codacy-badge]: https://app.codacy.com/project/badge/Grade/c8e15e14f37741c18cfb47ac7245c698
[codacy-link]: https://www.codacy.com/gh/xylabs/sdk-js/dashboard?utm_source=github.com&utm_medium=referral&utm_content=xylabs/sdk-js&utm_campaign=Badge_Grade
[codeclimate-badge]: https://api.codeclimate.com/v1/badges/c5eb068f806f0b047ea7/maintainability
[codeclimate-link]: https://codeclimate.com/github/xylabs/sdk-js/maintainability
[snyk-badge]: https://snyk.io/test/github/xylabs/sdk-js/badge.svg?targetFile=package.json
[snyk-link]: https://snyk.io/test/github/xylabs/sdk-js?targetFile=package.json

[npm-downloads-badge]: https://img.shields.io/npm/dw/@xylabs/zod
[npm-license-badge]: https://img.shields.io/npm/l/@xylabs/zod

[jsdelivr-badge]: https://data.jsdelivr.com/v1/package/npm/@xylabs/zod/badge
[jsdelivr-link]: https://www.jsdelivr.com/package/npm/@xylabs/zod

[socket-badge]: https://socket.dev/api/badge/npm/package/@xylabs/zod
[socket-link]: https://socket.dev/npm/package/@xylabs/zod