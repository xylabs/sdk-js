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

## API Documentation

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

## Properties

### actual?

```ts
optional actual: unknown;
```

***

### expected?

```ts
optional expected: unknown;
```

***

### message()

```ts
message: () => string;
```

### Returns

`string`

***

### pass

```ts
pass: boolean;
```

### variables

  ### <a id="matchers"></a>matchers

[**@xylabs/vitest-matchers**](#../README)

***

```ts
const matchers: object;
```

## Type declaration

### toBeArrayOfSize()

```ts
toBeArrayOfSize(received, expectedSize): ExpectationResult;
```

### Parameters

#### received

`unknown`

#### expectedSize

`number`

### Returns

[`ExpectationResult`](#../interfaces/ExpectationResult)

### toBeArray()

```ts
toBeArray(received): ExpectationResult;
```

### Parameters

#### received

`unknown`

### Returns

[`ExpectationResult`](#../interfaces/ExpectationResult)

### toBeOneOf()

```ts
toBeOneOf(received, expected): ExpectationResult;
```

### Parameters

#### received

`unknown`

#### expected

`unknown`[]

### Returns

[`ExpectationResult`](#../interfaces/ExpectationResult)

### toBeNegative()

```ts
toBeNegative(received): ExpectationResult;
```

### Parameters

#### received

`number`

### Returns

[`ExpectationResult`](#../interfaces/ExpectationResult)

### toBePositive()

```ts
toBePositive(received): ExpectationResult;
```

### Parameters

#### received

`number`

### Returns

[`ExpectationResult`](#../interfaces/ExpectationResult)

### toBeNumber()

```ts
toBeNumber: (received) => ExpectationResult;
```

### Parameters

#### received

`unknown`

### Returns

[`ExpectationResult`](#../interfaces/ExpectationResult)

### toBeFunction()

```ts
toBeFunction: (received) => ExpectationResult;
```

### Parameters

#### received

`unknown`

### Returns

[`ExpectationResult`](#../interfaces/ExpectationResult)

### toBeString()

```ts
toBeString: (received) => ExpectationResult;
```

### Parameters

#### received

`unknown`

### Returns

[`ExpectationResult`](#../interfaces/ExpectationResult)

### toBeObject()

```ts
toBeObject(received): ExpectationResult;
```

### Parameters

#### received

`unknown`

### Returns

[`ExpectationResult`](#../interfaces/ExpectationResult)

### toBeInteger()

```ts
toBeInteger(received): ExpectationResult;
```

### Parameters

#### received

`number`

### Returns

[`ExpectationResult`](#../interfaces/ExpectationResult)

### toBeFalse()

```ts
toBeFalse(received): ExpectationResult;
```

### Parameters

#### received

`unknown`

### Returns

[`ExpectationResult`](#../interfaces/ExpectationResult)

### toBeTrue()

```ts
toBeTrue(received): ExpectationResult;
```

### Parameters

#### received

`unknown`

### Returns

[`ExpectationResult`](#../interfaces/ExpectationResult)

### toContainAllValues()

```ts
toContainAllValues(received, expectedValues): object;
```

### Parameters

#### received

`unknown`

#### expectedValues

`unknown`[]

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

### Parameters

#### received

`object`

#### key

`string`

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

### Parameters

#### received

`unknown`

#### value

`any`

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

### Parameters

#### received

`unknown`[]

#### expected

`unknown`[]

### Returns

[`ExpectationResult`](#../interfaces/ExpectationResult)

### toContainAllKeys()

```ts
toContainAllKeys(received, expectedKeys): ExpectationResult;
```

### Parameters

#### received

`object`

#### expectedKeys

`string`[]

### Returns

[`ExpectationResult`](#../interfaces/ExpectationResult)

### toContainValues()

```ts
toContainValues(received, expectedValues): ExpectationResult;
```

### Parameters

#### received

`object`

#### expectedValues

`unknown`[]

### Returns

[`ExpectationResult`](#../interfaces/ExpectationResult)

### toBeEmpty()

```ts
toBeEmpty(received): ExpectationResult;
```

### Parameters

#### received

`unknown`

### Returns

[`ExpectationResult`](#../interfaces/ExpectationResult)

### toBeValidDate()

```ts
toBeValidDate(received): object;
```

### Parameters

#### received

`unknown`

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