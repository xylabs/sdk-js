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

## Reference

**@xylabs/assert**

***

## Functions

- [assertDefinedEx](#functions/assertDefinedEx)
- [assertEx](#functions/assertEx)

### functions

  ### <a id="assertDefinedEx"></a>assertDefinedEx

[**@xylabs/assert**](#../README)

***

Implementation of assertDefinedEx that handles all overloads.

## Call Signature

```ts
function assertDefinedEx<T>(expr, messageFunc?): T;
```

Asserts that a value is defined (not undefined) and returns the value.
Throws an error if the value is undefined.

### Type Parameters

### T

`T`

The type of value to check

### Parameters

### expr

Expression to be evaluated for being defined

`undefined` | `T`

### messageFunc?

`AssertExMessageFunc`\<`T`\>

Function that returns a message for the error if expression is undefined

### Returns

`T`

The value of the expression (guaranteed to be defined)

### Throws

Error with the message returned by messageFunc

### Example

```typescript
// Simple usage with a message function
const value = assertDefinedEx(possiblyUndefined, () => 'Value must be defined')

// Using with type narrowing
const config: Config | undefined = loadConfig()
const safeConfig = assertDefinedEx(config, () => 'Config failed to load')
// safeConfig is now type Config (not Config | undefined)
```

## Call Signature

```ts
function assertDefinedEx<T, R>(expr, errorFunc?): T;
```

Asserts that a value is defined (not undefined) and returns the value.
Throws a custom error if the value is undefined.

### Type Parameters

### T

`T`

The type of value to check

### R

`R` *extends* `Error`

The type of error to throw

### Parameters

### expr

Expression to be evaluated for being defined

`undefined` | `T`

### errorFunc?

`AssertExErrorFunc`\<`T`, `R`\>

Function that returns a custom error instance if expression is undefined

### Returns

`T`

The value of the expression (guaranteed to be defined)

### Throws

Custom error returned by errorFunc

### Example

```typescript
// Using with a custom error
const user = assertDefinedEx(getUser(), () => new UserNotFoundError('User not found'))
```

## Call Signature

```ts
function assertDefinedEx<T>(expr): T;
```

Asserts that a value is defined (not undefined) and returns the value.
Throws an error if the value is undefined.

### Type Parameters

### T

`T`

The type of value to check

### Parameters

### expr

Expression to be evaluated for being defined

`undefined` | `T`

### Returns

`T`

The value of the expression (guaranteed to be defined)

### Deprecated

Use overload with message function instead - passing a message will soon be required

### Throws

Error with a generic message

## Call Signature

```ts
function assertDefinedEx<T>(expr, message?): T;
```

Asserts that a value is defined (not undefined) and returns the value.
Throws an error with the provided message if the value is undefined.

### Type Parameters

### T

`T`

The type of value to check

### Parameters

### expr

Expression to be evaluated for being defined

`undefined` | `T`

### message?

`string`

Error message if expression is undefined

### Returns

`T`

The value of the expression (guaranteed to be defined)

### Deprecated

Replace string with () => string for consistency

### Throws

Error with the provided message

  ### <a id="assertEx"></a>assertEx

[**@xylabs/assert**](#../README)

***

Implementation of assertEx that handles all overloads.

## Call Signature

```ts
function assertEx<T>(expr, messageFunc?): T;
```

Asserts that an expression is truthy and returns the value.
Throws an error if the expression is falsy.

### Type Parameters

### T

`T`

The type of value to check

### Parameters

### expr

Expression to be evaluated for truthiness

`undefined` | `null` | `T`

### messageFunc?

`AssertExMessageFunc`\<`T`\>

Function that returns a message for the error if expression is falsy

### Returns

`T`

The value of the expression (guaranteed to be truthy)

### Throws

Error with the message returned by messageFunc

### Example

```typescript
// Simple usage with a message function
const value = assertEx(possiblyFalsy, () => 'Value must be truthy')

// Using with type narrowing
const config: Config | null = loadConfig()
const safeConfig = assertEx(config, () => 'Config failed to load')
// safeConfig is now type Config (not Config | null)
```

## Call Signature

```ts
function assertEx<T, R>(expr, errorFunc?): T;
```

Asserts that an expression is truthy and returns the value.
Throws a custom error if the expression is falsy.

### Type Parameters

### T

`T`

The type of value to check

### R

`R` *extends* `Error`

The type of error to throw

### Parameters

### expr

Expression to be evaluated for truthiness

`undefined` | `null` | `T`

### errorFunc?

`AssertExErrorFunc`\<`T`, `R`\>

Function that returns a custom error instance if expression is falsy

### Returns

`T`

The value of the expression (guaranteed to be truthy)

### Throws

Custom error returned by errorFunc

### Example

```typescript
// Using with a custom error
const user = assertEx(getUser(), () => new UserNotFoundError('User not found'))
```

## Call Signature

```ts
function assertEx<T>(expr): T;
```

Asserts that an expression is truthy and returns the value.
Throws an error if the expression is falsy.

### Type Parameters

### T

`T`

The type of value to check

### Parameters

### expr

Expression to be evaluated for truthiness

`undefined` | `null` | `T`

### Returns

`T`

The value of the expression (guaranteed to be truthy)

### Deprecated

Use overload with message function instead - passing a message will soon be required

### Throws

Error with a generic message

## Call Signature

```ts
function assertEx<T>(expr, message?): T;
```

Asserts that an expression is truthy and returns the value.
Throws an error with the provided message if the expression is falsy.

### Type Parameters

### T

`T`

The type of value to check

### Parameters

### expr

Expression to be evaluated for truthiness

`undefined` | `null` | `T`

### message?

`string`

Error message if expression is falsy

### Returns

`T`

The value of the expression (guaranteed to be truthy)

### Deprecated

Replace string with () => string for consistency

### Throws

Error with the provided message


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