# @xylabs/retry

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

**@xylabs/retry**

***

## Interfaces

| Interface | Description |
| ------ | ------ |
| [RetryConfig](#interfaces/RetryConfig) | Configuration for retry behavior. |
| [RetryConfigWithComplete](#interfaces/RetryConfigWithComplete) | Retry configuration extended with a custom completion check. |

## Functions

| Function | Description |
| ------ | ------ |
| [retry](#functions/retry) | Retries an async function with exponential backoff until it completes or retries are exhausted. |

### functions

  ### <a id="retry"></a>retry

[**@xylabs/retry**](#../README)

***

```ts
function retry<T>(func: () => Promisable<T | undefined>, config?: RetryConfigWithComplete<T>): Promise<T | undefined>;
```

Retries an async function with exponential backoff until it completes or retries are exhausted.

## Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `T` | `unknown` |

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `func` | () => `Promisable`\<`T` \| `undefined`\> | The function to retry. |
| `config?` | [`RetryConfigWithComplete`](#../interfaces/RetryConfigWithComplete)\<`T`\> | Optional retry configuration including backoff, interval, retries, and completion check. |

## Returns

`Promise`\<`T` \| `undefined`\>

The result of the function, or undefined if all retries were exhausted.

### interfaces

  ### <a id="RetryConfig"></a>RetryConfig

[**@xylabs/retry**](#../README)

***

Configuration for retry behavior.

## Extended by

- [`RetryConfigWithComplete`](#RetryConfigWithComplete)

## Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| <a id="backoff"></a> `backoff?` | `number` | Multiplier applied to the interval after each retry. Defaults to 2. |
| <a id="interval"></a> `interval?` | `number` | Initial delay in milliseconds between retries. Defaults to 100. |
| <a id="retries"></a> `retries?` | `number` | Maximum number of retry attempts. Defaults to 0 (no retries). |

  ### <a id="RetryConfigWithComplete"></a>RetryConfigWithComplete

[**@xylabs/retry**](#../README)

***

Retry configuration extended with a custom completion check.

## Extends

- [`RetryConfig`](#RetryConfig)

## Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `T` | `unknown` |

## Properties

| Property | Type | Description | Inherited from |
| ------ | ------ | ------ | ------ |
| <a id="backoff"></a> `backoff?` | `number` | Multiplier applied to the interval after each retry. Defaults to 2. | [`RetryConfig`](#RetryConfig).[`backoff`](RetryConfig.md#backoff) |
| <a id="interval"></a> `interval?` | `number` | Initial delay in milliseconds between retries. Defaults to 100. | [`RetryConfig`](#RetryConfig).[`interval`](RetryConfig.md#interval) |
| <a id="retries"></a> `retries?` | `number` | Maximum number of retry attempts. Defaults to 0 (no retries). | [`RetryConfig`](#RetryConfig).[`retries`](RetryConfig.md#retries) |
| <a id="complete"></a> `complete?` | (`result?`: `T`) => `boolean` | Determines whether the result is considered complete. Defaults to checking for a defined value. | - |


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
[npm-badge]: https://img.shields.io/npm/v/@xylabs/retry.svg
[npm-link]: https://www.npmjs.com/package/@xylabs/retry
[codacy-badge]: https://app.codacy.com/project/badge/Grade/c8e15e14f37741c18cfb47ac7245c698
[codacy-link]: https://www.codacy.com/gh/xylabs/sdk-js/dashboard?utm_source=github.com&utm_medium=referral&utm_content=xylabs/sdk-js&utm_campaign=Badge_Grade
[codeclimate-badge]: https://api.codeclimate.com/v1/badges/c5eb068f806f0b047ea7/maintainability
[codeclimate-link]: https://codeclimate.com/github/xylabs/sdk-js/maintainability
[snyk-badge]: https://snyk.io/test/github/xylabs/sdk-js/badge.svg?targetFile=package.json
[snyk-link]: https://snyk.io/test/github/xylabs/sdk-js?targetFile=package.json

[npm-downloads-badge]: https://img.shields.io/npm/dw/@xylabs/retry
[npm-license-badge]: https://img.shields.io/npm/l/@xylabs/retry

[jsdelivr-badge]: https://data.jsdelivr.com/v1/package/npm/@xylabs/retry/badge
[jsdelivr-link]: https://www.jsdelivr.com/package/npm/@xylabs/retry

[socket-badge]: https://socket.dev/api/badge/npm/package/@xylabs/retry
[socket-link]: https://socket.dev/npm/package/@xylabs/retry