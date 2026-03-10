# @xylabs/axios

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

**@xylabs/axios**

***

## Classes

- [~~AxiosJson~~](#classes/AxiosJson)

## Variables

- [axiosJson](#variables/axiosJson)
- [~~axios~~](#variables/axios)

## Functions

- [axiosJsonConfig](#functions/axiosJsonConfig)

### classes

  ### <a id="AxiosJson"></a>AxiosJson

[**@xylabs/axios**](#../README)

***

## Deprecated

use axiosJsonConfig instead

## Extends

- `Axios`

## Constructors

### Constructor

```ts
new AxiosJson(config?): AxiosJson;
```

### Parameters

#### config?

`RawAxiosJsonRequestConfig`

### Returns

`AxiosJson`

### Overrides

```ts
Axios.constructor
```

## Methods

### ~~axiosConfig()~~

```ts
static axiosConfig(config?): RawAxiosJsonRequestConfig;
```

### Parameters

#### config?

`RawAxiosJsonRequestConfig` = `{}`

### Returns

`RawAxiosJsonRequestConfig`

***

### ~~create()~~

```ts
static create(config?): Axios;
```

### Parameters

#### config?

`RawAxiosJsonRequestConfig`

### Returns

`Axios`

### functions

  ### <a id="axiosJsonConfig"></a>axiosJsonConfig

[**@xylabs/axios**](#../README)

***

```ts
function axiosJsonConfig(config?): RawAxiosJsonRequestConfig;
```

Creates an Axios config preconfigured for JSON requests with optional gzip compression.
Request bodies exceeding `compressLength` (default 1024 bytes) are automatically gzip-compressed.

## Parameters

### config?

`RawAxiosJsonRequestConfig` = `{}`

Base Axios config, optionally including a `compressLength` threshold

## Returns

`RawAxiosJsonRequestConfig`

A fully configured Axios request config with JSON transforms

### variables

  ### <a id="axios"></a>axios

[**@xylabs/axios**](#../README)

***

```ts
const axios: Axios = axiosJson;
```

## Deprecated

use axiosJson instead

  ### <a id="axiosJson"></a>axiosJson

[**@xylabs/axios**](#../README)

***

```ts
const axiosJson: Axios;
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
[npm-badge]: https://img.shields.io/npm/v/@xylabs/axios.svg
[npm-link]: https://www.npmjs.com/package/@xylabs/axios
[codacy-badge]: https://app.codacy.com/project/badge/Grade/c8e15e14f37741c18cfb47ac7245c698
[codacy-link]: https://www.codacy.com/gh/xylabs/sdk-js/dashboard?utm_source=github.com&utm_medium=referral&utm_content=xylabs/sdk-js&utm_campaign=Badge_Grade
[codeclimate-badge]: https://api.codeclimate.com/v1/badges/c5eb068f806f0b047ea7/maintainability
[codeclimate-link]: https://codeclimate.com/github/xylabs/sdk-js/maintainability
[snyk-badge]: https://snyk.io/test/github/xylabs/sdk-js/badge.svg?targetFile=package.json
[snyk-link]: https://snyk.io/test/github/xylabs/sdk-js?targetFile=package.json

[npm-downloads-badge]: https://img.shields.io/npm/dw/@xylabs/axios
[npm-license-badge]: https://img.shields.io/npm/l/@xylabs/axios

[jsdelivr-badge]: https://data.jsdelivr.com/v1/package/npm/@xylabs/axios/badge
[jsdelivr-link]: https://www.jsdelivr.com/package/npm/@xylabs/axios

[socket-badge]: https://socket.dev/api/badge/npm/package/@xylabs/axios
[socket-link]: https://socket.dev/npm/package/@xylabs/axios