# @xylabs/telemetry

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

**@xylabs/telemetry**

***

## Functions

- [cloneContextWithoutSpan](#functions/cloneContextWithoutSpan)
- [span](#functions/span)
- [spanRoot](#functions/spanRoot)
- [spanAsync](#functions/spanAsync)
- [spanRootAsync](#functions/spanRootAsync)

### functions

  ### <a id="cloneContextWithoutSpan"></a>cloneContextWithoutSpan

[**@xylabs/telemetry**](#../README)

***

```ts
function cloneContextWithoutSpan(activeCtx, configKeys): Context;
```

## Parameters

### activeCtx

`Context`

### configKeys

`symbol`[] = `[]`

## Returns

`Context`

  ### <a id="span"></a>span

[**@xylabs/telemetry**](#../README)

***

```ts
function span<T>(
   name, 
   fn, 
   tracer?): T;
```

## Type Parameters

### T

`T`

## Parameters

### name

`string`

### fn

() => `T`

### tracer?

`Tracer`

## Returns

`T`

  ### <a id="spanAsync"></a>spanAsync

[**@xylabs/telemetry**](#../README)

***

```ts
function spanAsync<T>(
   name, 
   fn, 
tracer?): Promise<T>;
```

## Type Parameters

### T

`T`

## Parameters

### name

`string`

### fn

() => `Promise`\<`T`\>

### tracer?

`Tracer`

## Returns

`Promise`\<`T`\>

  ### <a id="spanRoot"></a>spanRoot

[**@xylabs/telemetry**](#../README)

***

```ts
function spanRoot<T>(
   name, 
   fn, 
   tracer?): T;
```

## Type Parameters

### T

`T`

## Parameters

### name

`string`

### fn

() => `T`

### tracer?

`Tracer`

## Returns

`T`

  ### <a id="spanRootAsync"></a>spanRootAsync

[**@xylabs/telemetry**](#../README)

***

```ts
function spanRootAsync<T>(
   name, 
   fn, 
tracer?): Promise<T>;
```

## Type Parameters

### T

`T`

## Parameters

### name

`string`

### fn

() => `Promise`\<`T`\>

### tracer?

`Tracer`

## Returns

`Promise`\<`T`\>


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
[npm-badge]: https://img.shields.io/npm/v/@xylabs/telemetry.svg
[npm-link]: https://www.npmjs.com/package/@xylabs/telemetry
[codacy-badge]: https://app.codacy.com/project/badge/Grade/c8e15e14f37741c18cfb47ac7245c698
[codacy-link]: https://www.codacy.com/gh/xylabs/sdk-js/dashboard?utm_source=github.com&utm_medium=referral&utm_content=xylabs/sdk-js&utm_campaign=Badge_Grade
[codeclimate-badge]: https://api.codeclimate.com/v1/badges/c5eb068f806f0b047ea7/maintainability
[codeclimate-link]: https://codeclimate.com/github/xylabs/sdk-js/maintainability
[snyk-badge]: https://snyk.io/test/github/xylabs/sdk-js/badge.svg?targetFile=package.json
[snyk-link]: https://snyk.io/test/github/xylabs/sdk-js?targetFile=package.json

[npm-downloads-badge]: https://img.shields.io/npm/dw/@xylabs/telemetry
[npm-license-badge]: https://img.shields.io/npm/l/@xylabs/telemetry

[jsdelivr-badge]: https://data.jsdelivr.com/v1/package/npm/@xylabs/telemetry/badge
[jsdelivr-link]: https://www.jsdelivr.com/package/npm/@xylabs/telemetry

[socket-badge]: https://socket.dev/api/badge/npm/package/@xylabs/telemetry
[socket-link]: https://socket.dev/npm/package/@xylabs/telemetry