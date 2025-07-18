# @xylabs/hex

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

**@xylabs/hex**

***

## Interfaces

- [HexConfig](#interfaces/HexConfig)

## Type Aliases

- [Address](#type-aliases/Address)
- [HashBitLength](#type-aliases/HashBitLength)
- [Hash](#type-aliases/Hash)
- [Hex](#type-aliases/Hex)

## Variables

- [ZERO\_ADDRESS](#variables/ZERO_ADDRESS)
- [ZERO\_HASH](#variables/ZERO_HASH)
- [HashBitLength](#variables/HashBitLength)
- [hexRegex](#variables/hexRegex)
- [hexRegexWithPrefix](#variables/hexRegexWithPrefix)

## Functions

- [toAddress](#functions/toAddress)
- [isAddress](#functions/isAddress)
- [asAddress](#functions/asAddress)
- [isHashBitLength](#functions/isHashBitLength)
- [isHash](#functions/isHash)
- [asHash](#functions/asHash)
- [asHex](#functions/asHex)
- [hexFrom](#functions/hexFrom)
- [hexFromArrayBuffer](#functions/hexFromArrayBuffer)
- [hexFromBigInt](#functions/hexFromBigInt)
- [hexFromHexString](#functions/hexFromHexString)
- [hexFromNumber](#functions/hexFromNumber)
- [isHex](#functions/isHex)
- [isHexZero](#functions/isHexZero)
- [toHexLegacy](#functions/toHexLegacy)
- [bitsToNibbles](#functions/bitsToNibbles)
- [nibblesToBits](#functions/nibblesToBits)
- [toHex](#functions/toHex)
- [hexToBigInt](#functions/hexToBigInt)

### functions

  ### <a id="asAddress"></a>asAddress

[**@xylabs/hex**](#../README)

***

## Call Signature

```ts
function asAddress(value): undefined | Lowercase<string>;
```

### Parameters

### value

`unknown`

### Returns

`undefined` \| `Lowercase`\<`string`\>

## Call Signature

```ts
function asAddress(value, assert): Lowercase<string>;
```

### Parameters

### value

`unknown`

### assert

`AssertConfig`

### Returns

`Lowercase`\<`string`\>

  ### <a id="asHash"></a>asHash

[**@xylabs/hex**](#../README)

***

## Call Signature

```ts
function asHash(value): undefined | Lowercase<string>;
```

### Parameters

### value

`unknown`

### Returns

`undefined` \| `Lowercase`\<`string`\>

## Call Signature

```ts
function asHash(value, assert): Lowercase<string>;
```

### Parameters

### value

`unknown`

### assert

`AssertConfig`

### Returns

`Lowercase`\<`string`\>

  ### <a id="asHex"></a>asHex

[**@xylabs/hex**](#../README)

***

## Call Signature

```ts
function asHex(value): undefined | Lowercase<string>;
```

### Parameters

### value

`unknown`

### Returns

`undefined` \| `Lowercase`\<`string`\>

## Call Signature

```ts
function asHex(value, assert): Lowercase<string>;
```

### Parameters

### value

`unknown`

### assert

`AssertConfig`

### Returns

`Lowercase`\<`string`\>

  ### <a id="bitsToNibbles"></a>bitsToNibbles

[**@xylabs/hex**](#../README)

***

```ts
function bitsToNibbles(value): number;
```

## Parameters

### value

`number`

## Returns

`number`

  ### <a id="hexFrom"></a>hexFrom

[**@xylabs/hex**](#../README)

***

```ts
function hexFrom(value, config?): Lowercase<string>;
```

Takes unknown value and tries our best to convert it to a hex string

## Parameters

### value

Supported types are string, number, bigint, and ArrayBuffer

`string` | `number` | `bigint` | `ArrayBufferLike`

### config?

[`HexConfig`](#../interfaces/HexConfig)

Configuration of output format and validation

## Returns

`Lowercase`\<`string`\>

  ### <a id="hexFromArrayBuffer"></a>hexFromArrayBuffer

[**@xylabs/hex**](#../README)

***

```ts
function hexFromArrayBuffer(buffer, config?): Lowercase<string>;
```

Convert an ArrayBuffer to a hex string

## Parameters

### buffer

`ArrayBufferLike`

The buffer to be converted

### config?

[`HexConfig`](#../interfaces/HexConfig)

Configuration of output format and validation

## Returns

`Lowercase`\<`string`\>

  ### <a id="hexFromBigInt"></a>hexFromBigInt

[**@xylabs/hex**](#../README)

***

```ts
function hexFromBigInt(value, config): Lowercase<string>;
```

Convert a bigint to a hex string

## Parameters

### value

`bigint`

The bigint to be converted

### config

[`HexConfig`](#../interfaces/HexConfig) = `{}`

Configuration of output format and validation

## Returns

`Lowercase`\<`string`\>

  ### <a id="hexFromHexString"></a>hexFromHexString

[**@xylabs/hex**](#../README)

***

```ts
function hexFromHexString(value, config): Lowercase<string>;
```

## Parameters

### value

`string`

### config

[`HexConfig`](#../interfaces/HexConfig) = `{}`

## Returns

`Lowercase`\<`string`\>

  ### <a id="hexFromNumber"></a>hexFromNumber

[**@xylabs/hex**](#../README)

***

```ts
function hexFromNumber(value, config?): Lowercase<string>;
```

## Parameters

### value

`number`

### config?

[`HexConfig`](#../interfaces/HexConfig)

## Returns

`Lowercase`\<`string`\>

  ### <a id="hexToBigInt"></a>hexToBigInt

[**@xylabs/hex**](#../README)

***

```ts
function hexToBigInt(hex): bigint;
```

## Parameters

### hex

`Lowercase`\<`string`\>

## Returns

`bigint`

  ### <a id="isAddress"></a>isAddress

[**@xylabs/hex**](#../README)

***

```ts
function isAddress(value, config): value is Lowercase<string>;
```

## Parameters

### value

`unknown`

### config

[`HexConfig`](#../interfaces/HexConfig) = `{}`

## Returns

`value is Lowercase<string>`

  ### <a id="isHash"></a>isHash

[**@xylabs/hex**](#../README)

***

```ts
function isHash(value, bitLength): value is Lowercase<string>;
```

## Parameters

### value

`unknown`

### bitLength

[`HashBitLength`](#../type-aliases/HashBitLength) = `256`

## Returns

`value is Lowercase<string>`

  ### <a id="isHashBitLength"></a>isHashBitLength

[**@xylabs/hex**](#../README)

***

```ts
function isHashBitLength(value): value is HashBitLength;
```

## Parameters

### value

`unknown`

## Returns

`value is HashBitLength`

  ### <a id="isHex"></a>isHex

[**@xylabs/hex**](#../README)

***

```ts
function isHex(value, config?): value is Lowercase<string>;
```

## Parameters

### value

`unknown`

### config?

[`HexConfig`](#../interfaces/HexConfig)

## Returns

`value is Lowercase<string>`

  ### <a id="isHexZero"></a>isHexZero

[**@xylabs/hex**](#../README)

***

```ts
function isHexZero(value?): undefined | boolean;
```

## Parameters

### value?

`string`

## Returns

`undefined` \| `boolean`

  ### <a id="nibblesToBits"></a>nibblesToBits

[**@xylabs/hex**](#../README)

***

```ts
function nibblesToBits(value): number;
```

## Parameters

### value

`number`

## Returns

`number`

  ### <a id="toAddress"></a>toAddress

[**@xylabs/hex**](#../README)

***

```ts
function toAddress(value, config): Lowercase<string>;
```

## Parameters

### value

`string` | `number` | `bigint` | `ArrayBufferLike`

### config

[`HexConfig`](#../interfaces/HexConfig) = `{}`

## Returns

`Lowercase`\<`string`\>

  ### <a id="toHex"></a>toHex

[**@xylabs/hex**](#../README)

***

```ts
function toHex(value, config): Lowercase<string>;
```

takes any value and tries our best to convert it to a hex string

## Parameters

### value

Supported types are string, number, bigint, and ArrayBuffer

`string` | `number` | `bigint` | `ArrayBufferLike`

### config

[`HexConfig`](#../interfaces/HexConfig) = `{}`

Configuration of output format and validation

## Returns

`Lowercase`\<`string`\>

  ### <a id="toHexLegacy"></a>toHexLegacy

[**@xylabs/hex**](#../README)

***

```ts
function toHexLegacy(buffer): string;
```

## Parameters

### buffer

`ArrayBuffer`

## Returns

`string`

### interfaces

  ### <a id="HexConfig"></a>HexConfig

[**@xylabs/hex**](#../README)

***

Configuration of validation and output format

## Properties

### bitLength?

```ts
optional bitLength: number;
```

***

### byteSize?

```ts
optional byteSize: number;
```

***

### prefix?

```ts
optional prefix: boolean;
```

### type-aliases

  ### <a id="Address"></a>Address

[**@xylabs/hex**](#../README)

***

```ts
type Address = Exclude<Hex, "reserved-address-value">;
```

  ### <a id="Hash"></a>Hash

[**@xylabs/hex**](#../README)

***

```ts
type Hash = Exclude<Hex, "reserved-hash-value">;
```

  ### <a id="HashBitLength"></a>HashBitLength

[**@xylabs/hex**](#../README)

***

```ts
type HashBitLength = 32 | 64 | 128 | 256 | 512 | 1024 | 2048 | 4096;
```

  ### <a id="Hex"></a>Hex

[**@xylabs/hex**](#../README)

***

```ts
type Hex = Exclude<Lowercase<string>, "reserved-hex-value">;
```

### variables

  ### <a id="HashBitLength"></a>HashBitLength

[**@xylabs/hex**](#../README)

***

```ts
HashBitLength: HashBitLength[];
```

  ### <a id="ZERO_ADDRESS"></a>ZERO_ADDRESS

[**@xylabs/hex**](#../README)

***

```ts
const ZERO_ADDRESS: Address;
```

  ### <a id="ZERO_HASH"></a>ZERO_HASH

[**@xylabs/hex**](#../README)

***

```ts
const ZERO_HASH: Hash;
```

  ### <a id="hexRegex"></a>hexRegex

[**@xylabs/hex**](#../README)

***

```ts
const hexRegex: RegExp;
```

  ### <a id="hexRegexWithPrefix"></a>hexRegexWithPrefix

[**@xylabs/hex**](#../README)

***

```ts
const hexRegexWithPrefix: RegExp;
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
[npm-badge]: https://img.shields.io/npm/v/@xylabs/hex.svg
[npm-link]: https://www.npmjs.com/package/@xylabs/hex
[codacy-badge]: https://app.codacy.com/project/badge/Grade/c8e15e14f37741c18cfb47ac7245c698
[codacy-link]: https://www.codacy.com/gh/xylabs/sdk-js/dashboard?utm_source=github.com&utm_medium=referral&utm_content=xylabs/sdk-js&utm_campaign=Badge_Grade
[codeclimate-badge]: https://api.codeclimate.com/v1/badges/c5eb068f806f0b047ea7/maintainability
[codeclimate-link]: https://codeclimate.com/github/xylabs/sdk-js/maintainability
[snyk-badge]: https://snyk.io/test/github/xylabs/sdk-js/badge.svg?targetFile=package.json
[snyk-link]: https://snyk.io/test/github/xylabs/sdk-js?targetFile=package.json

[npm-downloads-badge]: https://img.shields.io/npm/dw/@xylabs/hex
[npm-license-badge]: https://img.shields.io/npm/l/@xylabs/hex

[jsdelivr-badge]: https://data.jsdelivr.com/v1/package/npm/@xylabs/hex/badge
[jsdelivr-link]: https://www.jsdelivr.com/package/npm/@xylabs/hex

[socket-badge]: https://socket.dev/api/badge/npm/package/@xylabs/hex
[socket-link]: https://socket.dev/npm/package/@xylabs/hex