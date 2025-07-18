# @xylabs/assert

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

## API Documentation

**@xylabs/assert**

***

## Type Aliases

- [AssertExMessageFunc](#type-aliases/AssertExMessageFunc)
- [AssertExErrorFunc](#type-aliases/AssertExErrorFunc)

## Functions

- [assertDefinedEx](#functions/assertDefinedEx)
- [assertEx](#functions/assertEx)

### functions

  ### <a id="assertDefinedEx"></a>assertDefinedEx

[**@xylabs/assert**](#../README)

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

[**@xylabs/assert**](#../README)

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

### type-aliases

  ### <a id="AssertExErrorFunc"></a>AssertExErrorFunc

[**@xylabs/assert**](#../README)

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

[**@xylabs/assert**](#../README)

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
[npm-badge]: https://img.shields.io/npm/v/@xylabs/assert.svg
[npm-link]: https://www.npmjs.com/package/@xylabs/assert
[codacy-badge]: https://app.codacy.com/project/badge/Grade/c8e15e14f37741c18cfb47ac7245c698
[codacy-link]: https://www.codacy.com/gh/xylabs/sdk-js/dashboard?utm_source=github.com&utm_medium=referral&utm_content=xylabs/sdk-js&utm_campaign=Badge_Grade
[codeclimate-badge]: https://api.codeclimate.com/v1/badges/c5eb068f806f0b047ea7/maintainability
[codeclimate-link]: https://codeclimate.com/github/xylabs/sdk-js/maintainability
[snyk-badge]: https://snyk.io/test/github/xylabs/sdk-js/badge.svg?targetFile=package.json
[snyk-link]: https://snyk.io/test/github/xylabs/sdk-js?targetFile=package.json

[npm-downloads-badge]: https://img.shields.io/npm/dw/@xylabs/assert
[npm-license-badge]: https://img.shields.io/npm/l/@xylabs/assert

[jsdelivr-badge]: https://data.jsdelivr.com/v1/package/npm/@xylabs/assert/badge
[jsdelivr-link]: https://www.jsdelivr.com/package/npm/@xylabs/assert

[socket-badge]: https://socket.dev/api/badge/npm/package/@xylabs/assert
[socket-link]: https://socket.dev/npm/package/@xylabs/assert