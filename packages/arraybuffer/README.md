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

## Reference

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

Compares two ArrayBuffers for byte-level equality.

## Parameters

### a1

`ArrayBufferLike`

First buffer

### a2

`ArrayBufferLike`

Second buffer

## Returns

`boolean`

True if the buffers have the same length and identical bytes

  ### <a id="isArrayBuffer"></a>isArrayBuffer

[**@xylabs/arraybuffer**](#../README)

***

## Call Signature

```ts
function isArrayBuffer(value): value is ArrayBuffer;
```

Type guard that checks if a value is an ArrayBuffer instance.

### Parameters

### value

`unknown`

### Returns

`value is ArrayBuffer`

## Call Signature

```ts
function isArrayBuffer<T>(value): value is Extract<T, ArrayBuffer>;
```

Type guard that checks if a value is an ArrayBuffer instance.

### Type Parameters

### T

`T` *extends* `ArrayBuffer`

### Parameters

### value

`T`

### Returns

`value is Extract<T, ArrayBuffer>`

  ### <a id="isArrayBufferLike"></a>isArrayBufferLike

[**@xylabs/arraybuffer**](#../README)

***

## Call Signature

```ts
function isArrayBufferLike(value): value is ArrayBufferLike;
```

Type guard that checks if a value conforms to the ArrayBufferLike interface (has byteLength and slice).

### Parameters

### value

`unknown`

### Returns

`value is ArrayBufferLike`

## Call Signature

```ts
function isArrayBufferLike<T>(value): value is Extract<T, ArrayBufferLike>;
```

Type guard that checks if a value conforms to the ArrayBufferLike interface (has byteLength and slice).

### Type Parameters

### T

`T` *extends* `ArrayBufferLike`

### Parameters

### value

`T`

### Returns

`value is Extract<T, ArrayBufferLike>`

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

Converts a string, bigint, or ArrayBufferLike to an ArrayBufferLike, with optional zero-padding.

### Parameters

### value

`undefined`

The value to convert (hex string, bigint, or existing buffer)

### padLength?

`number`

Minimum byte length, left-padded with zeros if needed

### base?

`number`

Numeric base for string parsing (default 16)

### Returns

`undefined`

The resulting ArrayBufferLike, or undefined if value is undefined

## Call Signature

```ts
function toArrayBuffer(
   value, 
   padLength?, 
   base?): ArrayBufferLike;
```

Converts a string, bigint, or ArrayBufferLike to an ArrayBufferLike, with optional zero-padding.

### Parameters

### value

The value to convert (hex string, bigint, or existing buffer)

`string` | `bigint` | `ArrayBufferLike`

### padLength?

`number`

Minimum byte length, left-padded with zeros if needed

### base?

`number`

Numeric base for string parsing (default 16)

### Returns

`ArrayBufferLike`

The resulting ArrayBufferLike, or undefined if value is undefined

## Call Signature

```ts
function toArrayBuffer(
   value, 
   padLength?, 
   base?): ArrayBufferLike | undefined;
```

Converts a string, bigint, or ArrayBufferLike to an ArrayBufferLike, with optional zero-padding.

### Parameters

### value

The value to convert (hex string, bigint, or existing buffer)

`string` | `bigint` | `ArrayBufferLike` | `undefined`

### padLength?

`number`

Minimum byte length, left-padded with zeros if needed

### base?

`number`

Numeric base for string parsing (default 16)

### Returns

`ArrayBufferLike` \| `undefined`

The resulting ArrayBufferLike, or undefined if value is undefined

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

Converts a string, bigint, or ArrayBufferLike to a Uint8Array, with optional zero-padding.

### Parameters

### value

`undefined`

The value to convert

### padLength?

`number`

Minimum byte length, left-padded with zeros if needed

### base?

`number`

Numeric base for string parsing (default 16)

### Returns

`undefined`

The resulting Uint8Array, or undefined if value is undefined

## Call Signature

```ts
function toUint8Array(
   value, 
   padLength?, 
   base?): Uint8Array;
```

Converts a string, bigint, or ArrayBufferLike to a Uint8Array, with optional zero-padding.

### Parameters

### value

The value to convert

`string` | `bigint` | `ArrayBufferLike`

### padLength?

`number`

Minimum byte length, left-padded with zeros if needed

### base?

`number`

Numeric base for string parsing (default 16)

### Returns

`Uint8Array`

The resulting Uint8Array, or undefined if value is undefined

## Call Signature

```ts
function toUint8Array(
   value, 
   padLength?, 
   base?): Uint8Array<ArrayBufferLike> | undefined;
```

Converts a string, bigint, or ArrayBufferLike to a Uint8Array, with optional zero-padding.

### Parameters

### value

The value to convert

`string` | `bigint` | `ArrayBufferLike` | `undefined`

### padLength?

`number`

Minimum byte length, left-padded with zeros if needed

### base?

`number`

Numeric base for string parsing (default 16)

### Returns

`Uint8Array`\<`ArrayBufferLike`\> \| `undefined`

The resulting Uint8Array, or undefined if value is undefined


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