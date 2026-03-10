# @xylabs/vitest-matchers

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

**@xylabs/vitest-matchers**

***

## Interfaces

- [ExpectationResult](#interfaces/ExpectationResult)

## Variables

- [matchers](#variables/matchers)

### interfaces

  ### <a id="ExpectationResult"></a>ExpectationResult

[**@xylabs/vitest-matchers**](#../README)

***

Result returned by a custom matcher function.

## Properties

### actual?

```ts
optional actual: unknown;
```

The actual value received by the matcher.

***

### expected?

```ts
optional expected: unknown;
```

The expected value the matcher compared against.

***

### message()

```ts
message: () => string;
```

Returns a human-readable failure or negation message.

### Returns

`string`

***

### pass

```ts
pass: boolean;
```

Whether the matcher assertion passed.

### variables

  ### <a id="matchers"></a>matchers

[**@xylabs/vitest-matchers**](#../README)

***

```ts
const matchers: object;
```

Collection of custom Vitest matchers extending the built-in `expect` assertions.

## Type Declaration

### toBeArrayOfSize()

```ts
toBeArrayOfSize(received, expectedSize): ExpectationResult;
```

Asserts the received value is an array with the specified length.

### Parameters

#### received

`unknown`

The value to check.

#### expectedSize

`number`

The expected array length.

### Returns

[`ExpectationResult`](#../interfaces/ExpectationResult)

### toBeArray()

```ts
toBeArray(received): ExpectationResult;
```

Asserts the received value is an array.

### Parameters

#### received

`unknown`

The value to check.

### Returns

[`ExpectationResult`](#../interfaces/ExpectationResult)

### toBeOneOf()

```ts
toBeOneOf(received, expected): ExpectationResult;
```

Asserts the received value is one of the values in the expected array.

### Parameters

#### received

`unknown`

The value to check.

#### expected

`unknown`[]

The array of acceptable values.

### Returns

[`ExpectationResult`](#../interfaces/ExpectationResult)

### toBeNegative()

```ts
toBeNegative(received): ExpectationResult;
```

Asserts the received number is negative (less than zero).

### Parameters

#### received

`number`

The number to check.

### Returns

[`ExpectationResult`](#../interfaces/ExpectationResult)

### toBePositive()

```ts
toBePositive(received): ExpectationResult;
```

Asserts the received number is positive (greater than zero).

### Parameters

#### received

`number`

The number to check.

### Returns

[`ExpectationResult`](#../interfaces/ExpectationResult)

### toBeNumber()

```ts
toBeNumber: (received) => ExpectationResult;
```

Asserts the received value is of type `number` and not NaN.

### Parameters

#### received

`unknown`

The value to check.

### Returns

[`ExpectationResult`](#../interfaces/ExpectationResult)

### toBeFunction()

```ts
toBeFunction: (received) => ExpectationResult;
```

Asserts the received value is of type `function`.

### Parameters

#### received

`unknown`

The value to check.

### Returns

[`ExpectationResult`](#../interfaces/ExpectationResult)

### toBeString()

```ts
toBeString: (received) => ExpectationResult;
```

Asserts the received value is of type `string`.

### Parameters

#### received

`unknown`

The value to check.

### Returns

[`ExpectationResult`](#../interfaces/ExpectationResult)

### toBeObject()

```ts
toBeObject(received): ExpectationResult;
```

Asserts the received value is a plain object (not an array or null).

### Parameters

#### received

`unknown`

The value to check.

### Returns

[`ExpectationResult`](#../interfaces/ExpectationResult)

### toBeInteger()

```ts
toBeInteger(received): ExpectationResult;
```

Asserts the received number is an integer.

### Parameters

#### received

`number`

The number to check.

### Returns

[`ExpectationResult`](#../interfaces/ExpectationResult)

### toBeFalse()

```ts
toBeFalse(received): ExpectationResult;
```

Asserts the received value is strictly `false`.

### Parameters

#### received

`unknown`

The value to check.

### Returns

[`ExpectationResult`](#../interfaces/ExpectationResult)

### toBeTrue()

```ts
toBeTrue(received): ExpectationResult;
```

Asserts the received value is strictly `true`.

### Parameters

#### received

`unknown`

The value to check.

### Returns

[`ExpectationResult`](#../interfaces/ExpectationResult)

### toContainAllValues()

```ts
toContainAllValues(received, expectedValues): object;
```

Asserts that all expected values are present in the received array or object values.

### Parameters

#### received

`unknown`

The array or object to check.

#### expectedValues

`unknown`[]

The values that must all be present.

### Returns

`object`

#### pass

```ts
pass: boolean = false;
```

#### message()

```ts
message: () => string;
```

##### Returns

`string`

### toContainKey()

```ts
toContainKey(received, key): object;
```

Asserts that the received object contains the specified key.

### Parameters

#### received

`object`

The object to check.

#### key

`string`

The key that should be present.

### Returns

`object`

#### pass

```ts
pass: boolean = true;
```

#### message()

```ts
message: () => string;
```

##### Returns

`string`

### toInclude()

```ts
toInclude(received, value): object;
```

Asserts that the received array, string, or object values include the specified value.

### Parameters

#### received

`unknown`

The array, string, or object to search within.

#### value

`any`

The value to look for.

### Returns

`object`

#### pass

```ts
pass: boolean;
```

#### message()

```ts
message: () => string;
```

##### Returns

`string`

### toIncludeAllMembers()

```ts
toIncludeAllMembers(received, expected): ExpectationResult;
```

Asserts that the received array includes all members of the expected array.

### Parameters

#### received

`unknown`[]

The array to check.

#### expected

`unknown`[]

The members that must all be present.

### Returns

[`ExpectationResult`](#../interfaces/ExpectationResult)

### toContainAllKeys()

```ts
toContainAllKeys(received, expectedKeys): ExpectationResult;
```

Asserts that the received object contains all of the specified keys.

### Parameters

#### received

`object`

The object to check.

#### expectedKeys

`string`[]

The keys that must all be present.

### Returns

[`ExpectationResult`](#../interfaces/ExpectationResult)

### toContainValues()

```ts
toContainValues(received, expectedValues): ExpectationResult;
```

Asserts that the received object contains all of the specified values (using deep equality).

### Parameters

#### received

`object`

The object to check.

#### expectedValues

`unknown`[]

The values that must all be present.

### Returns

[`ExpectationResult`](#../interfaces/ExpectationResult)

### toBeEmpty()

```ts
toBeEmpty(received): ExpectationResult;
```

Asserts the received value is empty (zero-length array/string, empty object, or empty Map/Set).

### Parameters

#### received

`unknown`

The value to check.

### Returns

[`ExpectationResult`](#../interfaces/ExpectationResult)

### toBeValidDate()

```ts
toBeValidDate(received): object;
```

Asserts the received value is a valid Date instance (not an invalid date).

### Parameters

#### received

`unknown`

The value to check.

### Returns

`object`

#### pass

```ts
pass: boolean = isValid;
```

#### message()

```ts
message: () => string;
```

##### Returns

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
[npm-badge]: https://img.shields.io/npm/v/@xylabs/vitest-matchers.svg
[npm-link]: https://www.npmjs.com/package/@xylabs/vitest-matchers
[codacy-badge]: https://app.codacy.com/project/badge/Grade/c8e15e14f37741c18cfb47ac7245c698
[codacy-link]: https://www.codacy.com/gh/xylabs/sdk-js/dashboard?utm_source=github.com&utm_medium=referral&utm_content=xylabs/sdk-js&utm_campaign=Badge_Grade
[codeclimate-badge]: https://api.codeclimate.com/v1/badges/c5eb068f806f0b047ea7/maintainability
[codeclimate-link]: https://codeclimate.com/github/xylabs/sdk-js/maintainability
[snyk-badge]: https://snyk.io/test/github/xylabs/sdk-js/badge.svg?targetFile=package.json
[snyk-link]: https://snyk.io/test/github/xylabs/sdk-js?targetFile=package.json

[npm-downloads-badge]: https://img.shields.io/npm/dw/@xylabs/vitest-matchers
[npm-license-badge]: https://img.shields.io/npm/l/@xylabs/vitest-matchers

[jsdelivr-badge]: https://data.jsdelivr.com/v1/package/npm/@xylabs/vitest-matchers/badge
[jsdelivr-link]: https://www.jsdelivr.com/package/npm/@xylabs/vitest-matchers

[socket-badge]: https://socket.dev/api/badge/npm/package/@xylabs/vitest-matchers
[socket-link]: https://socket.dev/npm/package/@xylabs/vitest-matchers