# @xylabs/arraybuffer

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

**@xylabs/arraybuffer**

***

## Functions

- [equalArrayBuffers](#functions/equalArrayBuffers)
- [isArrayBuffer](#functions/isArrayBuffer)
- [isArrayBufferLike](#functions/isArrayBufferLike)
- [toArrayBuffer](#functions/toArrayBuffer)
- [toUint8Array](#functions/toUint8Array)

### functions

  ### <a id="equalArrayBuffers"></a>equalArrayBuffers

[**@xylabs/arraybuffer**](#../README)

***

```ts
function equalArrayBuffers(a1, a2): boolean;
```

## Parameters

### a1

`ArrayBufferLike`

### a2

`ArrayBufferLike`

## Returns

`boolean`

  ### <a id="isArrayBuffer"></a>isArrayBuffer

[**@xylabs/arraybuffer**](#../README)

***

```ts
function isArrayBuffer(value): value is ArrayBuffer;
```

## Parameters

### value

`unknown`

## Returns

`value is ArrayBuffer`

  ### <a id="isArrayBufferLike"></a>isArrayBufferLike

[**@xylabs/arraybuffer**](#../README)

***

```ts
function isArrayBufferLike(value): value is ArrayBufferLike;
```

## Parameters

### value

`unknown`

## Returns

`value is ArrayBufferLike`

  ### <a id="toArrayBuffer"></a>toArrayBuffer

[**@xylabs/arraybuffer**](#../README)

***

## Call Signature

```ts
function toArrayBuffer(
   value, 
   padLength?, 
   base?): undefined;
```

### Parameters

### value

`undefined`

### padLength?

`number`

### base?

`number`

### Returns

`undefined`

## Call Signature

```ts
function toArrayBuffer(
   value, 
   padLength?, 
   base?): ArrayBufferLike;
```

### Parameters

### value

`string` | `bigint` | `ArrayBufferLike`

### padLength?

`number`

### base?

`number`

### Returns

`ArrayBufferLike`

## Call Signature

```ts
function toArrayBuffer(
   value, 
   padLength?, 
   base?): undefined | ArrayBufferLike;
```

### Parameters

### value

`undefined` | `string` | `bigint` | `ArrayBufferLike`

### padLength?

`number`

### base?

`number`

### Returns

`undefined` \| `ArrayBufferLike`

  ### <a id="toUint8Array"></a>toUint8Array

[**@xylabs/arraybuffer**](#../README)

***

## Call Signature

```ts
function toUint8Array(
   value, 
   padLength?, 
   base?): undefined;
```

### Parameters

### value

`undefined`

### padLength?

`number`

### base?

`number`

### Returns

`undefined`

## Call Signature

```ts
function toUint8Array(
   value, 
   padLength?, 
   base?): Uint8Array;
```

### Parameters

### value

`string` | `bigint` | `ArrayBufferLike`

### padLength?

`number`

### base?

`number`

### Returns

`Uint8Array`

## Call Signature

```ts
function toUint8Array(
   value, 
   padLength?, 
base?): undefined | Uint8Array<ArrayBufferLike>;
```

### Parameters

### value

`undefined` | `string` | `bigint` | `ArrayBufferLike`

### padLength?

`number`

### base?

`number`

### Returns

`undefined` \| `Uint8Array`\<`ArrayBufferLike`\>


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
[npm-badge]: https://img.shields.io/npm/v/@xylabs/arraybuffer.svg
[npm-link]: https://www.npmjs.com/package/@xylabs/arraybuffer
[codacy-badge]: https://app.codacy.com/project/badge/Grade/c8e15e14f37741c18cfb47ac7245c698
[codacy-link]: https://www.codacy.com/gh/xylabs/sdk-js/dashboard?utm_source=github.com&utm_medium=referral&utm_content=xylabs/sdk-js&utm_campaign=Badge_Grade
[codeclimate-badge]: https://api.codeclimate.com/v1/badges/c5eb068f806f0b047ea7/maintainability
[codeclimate-link]: https://codeclimate.com/github/xylabs/sdk-js/maintainability
[snyk-badge]: https://snyk.io/test/github/xylabs/sdk-js/badge.svg?targetFile=package.json
[snyk-link]: https://snyk.io/test/github/xylabs/sdk-js?targetFile=package.json

[npm-downloads-badge]: https://img.shields.io/npm/dw/@xylabs/arraybuffer
[npm-license-badge]: https://img.shields.io/npm/l/@xylabs/arraybuffer

[jsdelivr-badge]: https://data.jsdelivr.com/v1/package/npm/@xylabs/arraybuffer/badge
[jsdelivr-link]: https://www.jsdelivr.com/package/npm/@xylabs/arraybuffer

[socket-badge]: https://socket.dev/api/badge/npm/package/@xylabs/arraybuffer
[socket-link]: https://socket.dev/npm/package/@xylabs/arraybuffer