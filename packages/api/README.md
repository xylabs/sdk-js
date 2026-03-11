# @xylabs/api

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

**@xylabs/api**

***

## Classes

| Class | Description |
| ------ | ------ |
| [ApiClient](#classes/ApiClient) | Abstract base class for API clients that provides stage and token configuration. |
| [ApiEndpoint](#classes/ApiEndpoint) | Generic REST API endpoint wrapper that supports fetching and inserting typed data. |

## Interfaces

| Interface | Description |
| ------ | ------ |
| [ApiConfig](#interfaces/ApiConfig) | Configuration for connecting to an API, including domain, authentication, and user identification. |

## Type Aliases

| Type Alias | Description |
| ------ | ------ |
| [ApiStage](#type-aliases/ApiStage) | A valid API stage value ('prod', 'beta', or 'local'). |

## Variables

| Variable | Description |
| ------ | ------ |
| [ApiStage](#variables/ApiStage) | Deployment stage identifiers for API environments. |

## Functions

| Function | Description |
| ------ | ------ |
| [getApiStage](#functions/getApiStage) | Determines the API stage based on the hostname. |

### classes

  ### <a id="ApiClient"></a>ApiClient

[**@xylabs/api**](#../README)

***

Abstract base class for API clients that provides stage and token configuration.

## Constructors

### Constructor

```ts
new ApiClient(token?: string | null, stage?: ApiStage): ApiClient;
```

### Parameters

| Parameter | Type |
| ------ | ------ |
| `token?` | `string` \| `null` |
| `stage?` | [`ApiStage`](#../type-aliases/ApiStage) |

### Returns

`ApiClient`

## Properties

| Property | Modifier | Type |
| ------ | ------ | ------ |
| <a id="stage"></a> `stage?` | `protected` | [`ApiStage`](#../type-aliases/ApiStage) |
| <a id="token"></a> `token?` | `protected` | `string` \| `null` |

## Methods

### endPoint()

```ts
abstract endPoint(): string;
```

### Returns

`string`

  ### <a id="ApiEndpoint"></a>ApiEndpoint

[**@xylabs/api**](#../README)

***

Generic REST API endpoint wrapper that supports fetching and inserting typed data.

## Type Parameters

| Type Parameter | Description |
| ------ | ------ |
| `T` | The type of data returned by the endpoint |

## Constructors

### Constructor

```ts
new ApiEndpoint<T>(config: ApiConfig, path: string): ApiEndpoint<T>;
```

### Parameters

| Parameter | Type |
| ------ | ------ |
| `config` | [`ApiConfig`](#../interfaces/ApiConfig) |
| `path` | `string` |

### Returns

`ApiEndpoint`\<`T`\>

## Accessors

### value

### Get Signature

```ts
get value(): T | undefined;
```

#### Returns

`T` \| `undefined`

## Methods

### fetch()

```ts
fetch(): Promise<T>;
```

### Returns

`Promise`\<`T`\>

***

### get()

```ts
get(): Promise<T | NonNullable<T>>;
```

### Returns

`Promise`\<`T` \| `NonNullable`\<`T`\>\>

***

### insert()

```ts
insert(value: T): Promise<T>;
```

### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `T` |

### Returns

`Promise`\<`T`\>

### functions

  ### <a id="getApiStage"></a>getApiStage

[**@xylabs/api**](#../README)

***

```ts
function getApiStage(hostname: string): "beta" | "local" | "prod";
```

Determines the API stage based on the hostname.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `hostname` | `string` | The hostname to evaluate |

## Returns

`"beta"` \| `"local"` \| `"prod"`

The corresponding ApiStage (Local, Beta, or Prod)

### interfaces

  ### <a id="ApiConfig"></a>ApiConfig

[**@xylabs/api**](#../README)

***

Configuration for connecting to an API, including domain, authentication, and user identification.

## Properties

| Property | Type |
| ------ | ------ |
| <a id="apidomain"></a> `apiDomain` | `string` |
| <a id="apikey"></a> `apiKey?` | `string` |
| <a id="jwttoken"></a> `jwtToken?` | `string` |
| <a id="userid"></a> `userid?` | `string` |

### type-aliases

  ### <a id="ApiStage"></a>ApiStage

[**@xylabs/api**](#../README)

***

```ts
type ApiStage = EnumValue<typeof ApiStage>;
```

A valid API stage value ('prod', 'beta', or 'local').

### variables

  ### <a id="ApiStage"></a>ApiStage

[**@xylabs/api**](#../README)

***

```ts
const ApiStage: Enum<{
  Beta: "beta";
  Local: "local";
  Prod: "prod";
}>;
```

Deployment stage identifiers for API environments.


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
[npm-badge]: https://img.shields.io/npm/v/@xylabs/api.svg
[npm-link]: https://www.npmjs.com/package/@xylabs/api
[codacy-badge]: https://app.codacy.com/project/badge/Grade/c8e15e14f37741c18cfb47ac7245c698
[codacy-link]: https://www.codacy.com/gh/xylabs/sdk-js/dashboard?utm_source=github.com&utm_medium=referral&utm_content=xylabs/sdk-js&utm_campaign=Badge_Grade
[codeclimate-badge]: https://api.codeclimate.com/v1/badges/c5eb068f806f0b047ea7/maintainability
[codeclimate-link]: https://codeclimate.com/github/xylabs/sdk-js/maintainability
[snyk-badge]: https://snyk.io/test/github/xylabs/sdk-js/badge.svg?targetFile=package.json
[snyk-link]: https://snyk.io/test/github/xylabs/sdk-js?targetFile=package.json

[npm-downloads-badge]: https://img.shields.io/npm/dw/@xylabs/api
[npm-license-badge]: https://img.shields.io/npm/l/@xylabs/api

[jsdelivr-badge]: https://data.jsdelivr.com/v1/package/npm/@xylabs/api/badge
[jsdelivr-link]: https://www.jsdelivr.com/package/npm/@xylabs/api

[socket-badge]: https://socket.dev/api/badge/npm/package/@xylabs/api
[socket-link]: https://socket.dev/npm/package/@xylabs/api