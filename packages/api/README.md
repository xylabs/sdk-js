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

## API Documentation

**@xylabs/api**

***

## Classes

- [ApiClient](#classes/ApiClient)
- [ApiEndpoint](#classes/ApiEndpoint)

## Interfaces

- [ApiConfig](#interfaces/ApiConfig)

## Type Aliases

- [ApiStage](#type-aliases/ApiStage)

## Variables

- [ApiStage](#variables/ApiStage)

## Functions

- [getApiStage](#functions/getApiStage)

### classes

  ### <a id="ApiClient"></a>ApiClient

[**@xylabs/api**](#../README)

***

## Constructors

### Constructor

```ts
new ApiClient(token?, stage?): ApiClient;
```

### Parameters

#### token?

`null` | `string`

#### stage?

[`ApiStage`](#../type-aliases/ApiStage)

### Returns

`ApiClient`

## Properties

### token?

```ts
protected optional token: null | string;
```

***

### stage?

```ts
protected optional stage: ApiStage;
```

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

## Type Parameters

### T

`T`

## Constructors

### Constructor

```ts
new ApiEndpoint<T>(config, path): ApiEndpoint<T>;
```

### Parameters

#### config

[`ApiConfig`](#../interfaces/ApiConfig)

#### path

`string`

### Returns

`ApiEndpoint`\<`T`\>

## Accessors

### value

### Get Signature

```ts
get value(): undefined | T;
```

#### Returns

`undefined` \| `T`

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
insert(value): Promise<T>;
```

### Parameters

#### value

`T`

### Returns

`Promise`\<`T`\>

### functions

  ### <a id="getApiStage"></a>getApiStage

[**@xylabs/api**](#../README)

***

```ts
function getApiStage(hostname): "beta" | "local" | "prod";
```

## Parameters

### hostname

`string`

## Returns

`"beta"` \| `"local"` \| `"prod"`

### interfaces

  ### <a id="ApiConfig"></a>ApiConfig

[**@xylabs/api**](#../README)

***

## Properties

### apiDomain

```ts
apiDomain: string;
```

***

### apiKey?

```ts
optional apiKey: string;
```

***

### jwtToken?

```ts
optional jwtToken: string;
```

***

### userid?

```ts
optional userid: string;
```

### type-aliases

  ### <a id="ApiStage"></a>ApiStage

[**@xylabs/api**](#../README)

***

```ts
type ApiStage = EnumValue<typeof ApiStage>;
```

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