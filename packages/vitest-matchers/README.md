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

| Interface | Description |
| ------ | ------ |
| [ExpectationResult](#interfaces/ExpectationResult) | Result returned by a custom matcher function. |

## Variables

| Variable | Description |
| ------ | ------ |
| [matchers](#variables/matchers) | Collection of custom Vitest matchers extending the built-in `expect` assertions. |

### interfaces

  ### <a id="ExpectationResult"></a>ExpectationResult

[**@xylabs/vitest-matchers**](#../README)

***

Result returned by a custom matcher function.

## Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| <a id="actual"></a> `actual?` | `unknown` | The actual value received by the matcher. |
| <a id="expected"></a> `expected?` | `unknown` | The expected value the matcher compared against. |
| <a id="message"></a> `message` | () => `string` | Returns a human-readable failure or negation message. |
| <a id="pass"></a> `pass` | `boolean` | Whether the matcher assertion passed. |

### variables

  ### <a id="matchers"></a>matchers

[**@xylabs/vitest-matchers**](#../README)

***

```ts
const matchers: {
  toBeArrayOfSize: ExpectationResult;
  toBeArray: ExpectationResult;
  toBeOneOf: ExpectationResult;
  toBeNegative: ExpectationResult;
  toBePositive: ExpectationResult;
  toBeNumber: (received: unknown) => ExpectationResult;
  toBeFunction: (received: unknown) => ExpectationResult;
  toBeString: (received: unknown) => ExpectationResult;
  toBeObject: ExpectationResult;
  toBeInteger: ExpectationResult;
  toBeFalse: ExpectationResult;
  toBeTrue: ExpectationResult;
  toContainAllValues: {
     pass: boolean;
     message: () => string;
  };
  toContainKey: {
     pass: boolean;
     message: () => string;
  };
  toInclude: {
     pass: boolean;
     message: () => string;
  };
  toIncludeAllMembers: ExpectationResult;
  toContainAllKeys: ExpectationResult;
  toContainValues: ExpectationResult;
  toBeEmpty: ExpectationResult;
  toBeValidDate: {
     pass: boolean;
     message: () => string;
  };
};
```

Collection of custom Vitest matchers extending the built-in `expect` assertions.

## Type Declaration

| Name | Type | Description |
| ------ | ------ | ------ |
| `toBeArrayOfSize()` | (`received`: `unknown`, `expectedSize`: `number`) => [`ExpectationResult`](#../interfaces/ExpectationResult) | Asserts the received value is an array with the specified length. |
| `toBeArray()` | (`received`: `unknown`) => [`ExpectationResult`](#../interfaces/ExpectationResult) | Asserts the received value is an array. |
| `toBeOneOf()` | (`received`: `unknown`, `expected`: `unknown`[]) => [`ExpectationResult`](#../interfaces/ExpectationResult) | Asserts the received value is one of the values in the expected array. |
| `toBeNegative()` | (`received`: `number`) => [`ExpectationResult`](#../interfaces/ExpectationResult) | Asserts the received number is negative (less than zero). |
| `toBePositive()` | (`received`: `number`) => [`ExpectationResult`](#../interfaces/ExpectationResult) | Asserts the received number is positive (greater than zero). |
| <a id="property-tobenumber"></a> `toBeNumber()` | (`received`: `unknown`) => [`ExpectationResult`](#../interfaces/ExpectationResult) | Asserts the received value is of type `number` and not NaN. |
| <a id="property-tobefunction"></a> `toBeFunction()` | (`received`: `unknown`) => [`ExpectationResult`](#../interfaces/ExpectationResult) | Asserts the received value is of type `function`. |
| <a id="property-tobestring"></a> `toBeString()` | (`received`: `unknown`) => [`ExpectationResult`](#../interfaces/ExpectationResult) | Asserts the received value is of type `string`. |
| `toBeObject()` | (`received`: `unknown`) => [`ExpectationResult`](#../interfaces/ExpectationResult) | Asserts the received value is a plain object (not an array or null). |
| `toBeInteger()` | (`received`: `number`) => [`ExpectationResult`](#../interfaces/ExpectationResult) | Asserts the received number is an integer. |
| `toBeFalse()` | (`received`: `unknown`) => [`ExpectationResult`](#../interfaces/ExpectationResult) | Asserts the received value is strictly `false`. |
| `toBeTrue()` | (`received`: `unknown`) => [`ExpectationResult`](#../interfaces/ExpectationResult) | Asserts the received value is strictly `true`. |
| `toContainAllValues()` | (`received`: `unknown`, `expectedValues`: `unknown`[]) => \{ `pass`: `boolean`; `message`: () => `string`; \} | Asserts that all expected values are present in the received array or object values. |
| `toContainKey()` | (`received`: `object`, `key`: `string`) => \{ `pass`: `boolean`; `message`: () => `string`; \} | Asserts that the received object contains the specified key. |
| `toInclude()` | (`received`: `unknown`, `value`: `any`) => \{ `pass`: `boolean`; `message`: () => `string`; \} | Asserts that the received array, string, or object values include the specified value. |
| `toIncludeAllMembers()` | (`received`: `unknown`[], `expected`: `unknown`[]) => [`ExpectationResult`](#../interfaces/ExpectationResult) | Asserts that the received array includes all members of the expected array. |
| `toContainAllKeys()` | (`received`: `object`, `expectedKeys`: `string`[]) => [`ExpectationResult`](#../interfaces/ExpectationResult) | Asserts that the received object contains all of the specified keys. |
| `toContainValues()` | (`received`: `object`, `expectedValues`: `unknown`[]) => [`ExpectationResult`](#../interfaces/ExpectationResult) | Asserts that the received object contains all of the specified values (using deep equality). |
| `toBeEmpty()` | (`received`: `unknown`) => [`ExpectationResult`](#../interfaces/ExpectationResult) | Asserts the received value is empty (zero-length array/string, empty object, or empty Map/Set). |
| `toBeValidDate()` | (`received`: `unknown`) => \{ `pass`: `boolean`; `message`: () => `string`; \} | Asserts the received value is a valid Date instance (not an invalid date). |


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