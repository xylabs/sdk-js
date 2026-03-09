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

- [AddressTransformZodType](#type-aliases/AddressTransformZodType)
- [AddressValidationZodType](#type-aliases/AddressValidationZodType)
- [Address](#type-aliases/Address)
- [EthAddress](#type-aliases/EthAddress)
- [HashBitLength](#type-aliases/HashBitLength)
- [BrandedHash](#type-aliases/BrandedHash)
- [Hash](#type-aliases/Hash)
- [BrandedHex](#type-aliases/BrandedHex)
- [Hex](#type-aliases/Hex)

## Variables

- [HexRegEx](#variables/HexRegEx)
- [HexRegExWithPrefix](#variables/HexRegExWithPrefix)
- [AddressTransformZod](#variables/AddressTransformZod)
- [AddressValidationZod](#variables/AddressValidationZod)
- [ZERO\_ADDRESS](#variables/ZERO_ADDRESS)
- [ADDRESS\_LENGTH](#variables/ADDRESS_LENGTH)
- [AddressRegEx](#variables/AddressRegEx)
- [AddressZod](#variables/AddressZod)
- [EthAddressRegEx](#variables/EthAddressRegEx)
- [EthAddressToStringZod](#variables/EthAddressToStringZod)
- [~~EthAddressToStringSchema~~](#variables/EthAddressToStringSchema)
- [EthAddressFromStringZod](#variables/EthAddressFromStringZod)
- [~~EthAddressFromStringSchema~~](#variables/EthAddressFromStringSchema)
- [ETH\_ZERO\_ADDRESS](#variables/ETH_ZERO_ADDRESS)
- [EthAddressZod](#variables/EthAddressZod)
- [HASH\_LENGTH](#variables/HASH_LENGTH)
- [HashRegEx](#variables/HashRegEx)
- [ZERO\_HASH](#variables/ZERO_HASH)
- [HashBitLength](#variables/HashBitLength)
- [HashZod](#variables/HashZod)
- [HashToJsonZod](#variables/HashToJsonZod)
- [JsonToHashZod](#variables/JsonToHashZod)
- [HexZod](#variables/HexZod)
- [BigIntToJsonZod](#variables/BigIntToJsonZod)
- [JsonToBigIntZod](#variables/JsonToBigIntZod)

## Functions

- [HexRegExMinMax](#functions/HexRegExMinMax)
- [HexRegExMinMaxMixedCaseWithPrefix](#functions/HexRegExMinMaxMixedCaseWithPrefix)
- [asAddress](#functions/asAddress)
- [asAddressV2](#functions/asAddressV2)
- [isAddress](#functions/isAddress)
- [isAddressV2](#functions/isAddressV2)
- [toAddress](#functions/toAddress)
- [toAddressV2](#functions/toAddressV2)
- [toEthAddress](#functions/toEthAddress)
- [isEthAddress](#functions/isEthAddress)
- [asEthAddress](#functions/asEthAddress)
- [asHash](#functions/asHash)
- [isHashBitLength](#functions/isHashBitLength)
- [isHash](#functions/isHash)
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

  ### <a id="HexRegExMinMax"></a>HexRegExMinMax

[**@xylabs/hex**](#../README)

***

```ts
function HexRegExMinMax(minBytes?, maxBytes?): RegExp;
```

## Parameters

### minBytes?

`number` = `0`

### maxBytes?

`number` = `...`

## Returns

`RegExp`

  ### <a id="HexRegExMinMaxMixedCaseWithPrefix"></a>HexRegExMinMaxMixedCaseWithPrefix

[**@xylabs/hex**](#../README)

***

```ts
function HexRegExMinMaxMixedCaseWithPrefix(minBytes?, maxBytes?): RegExp;
```

## Parameters

### minBytes?

`number` = `0`

### maxBytes?

`number` = `...`

## Returns

`RegExp`

  ### <a id="asAddress"></a>asAddress

[**@xylabs/hex**](#../README)

***

## Call Signature

```ts
function asAddress(value): BrandedAddress | undefined;
```

### Parameters

### value

`unknown`

### Returns

`BrandedAddress` \| `undefined`

## Call Signature

```ts
function asAddress(value, assert): BrandedAddress;
```

### Parameters

### value

`unknown`

### assert

`AssertConfig`

### Returns

`BrandedAddress`

  ### <a id="asAddressV2"></a>asAddressV2

[**@xylabs/hex**](#../README)

***

```ts
function asAddressV2(value, assert?): BrandedAddress | undefined;
```

**`Alpha`**

## Parameters

### value

`unknown`

### assert?

`boolean` = `false`

## Returns

`BrandedAddress` \| `undefined`

  ### <a id="asEthAddress"></a>asEthAddress

[**@xylabs/hex**](#../README)

***

## Call Signature

```ts
function asEthAddress(value): EthAddress | undefined;
```

### Parameters

### value

`unknown`

### Returns

[`EthAddress`](#../type-aliases/EthAddress) \| `undefined`

## Call Signature

```ts
function asEthAddress(value, assert): EthAddress;
```

### Parameters

### value

`unknown`

### assert

`AssertConfig`

### Returns

[`EthAddress`](#../type-aliases/EthAddress)

  ### <a id="asHash"></a>asHash

[**@xylabs/hex**](#../README)

***

## Call Signature

```ts
function asHash(value): BrandedHash | undefined;
```

### Parameters

### value

`unknown`

### Returns

[`BrandedHash`](#../type-aliases/BrandedHash) \| `undefined`

## Call Signature

```ts
function asHash(value, assert): BrandedHash;
```

### Parameters

### value

`unknown`

### assert

`AssertConfig`

### Returns

[`BrandedHash`](#../type-aliases/BrandedHash)

  ### <a id="asHex"></a>asHex

[**@xylabs/hex**](#../README)

***

## Call Signature

```ts
function asHex(value): BrandedHex | undefined;
```

### Parameters

### value

`unknown`

### Returns

[`BrandedHex`](#../type-aliases/BrandedHex) \| `undefined`

## Call Signature

```ts
function asHex(value, assert): BrandedHex;
```

### Parameters

### value

`unknown`

### assert

`AssertConfig`

### Returns

[`BrandedHex`](#../type-aliases/BrandedHex)

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
function hexFrom(value, config?): BrandedHex;
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

[`BrandedHex`](#../type-aliases/BrandedHex)

  ### <a id="hexFromArrayBuffer"></a>hexFromArrayBuffer

[**@xylabs/hex**](#../README)

***

```ts
function hexFromArrayBuffer(buffer, config?): BrandedHex;
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

[`BrandedHex`](#../type-aliases/BrandedHex)

  ### <a id="hexFromBigInt"></a>hexFromBigInt

[**@xylabs/hex**](#../README)

***

```ts
function hexFromBigInt(value, config?): BrandedHex;
```

Convert a bigint to a hex string

## Parameters

### value

`bigint`

The bigint to be converted

### config?

[`HexConfig`](#../interfaces/HexConfig) = `{}`

Configuration of output format and validation

## Returns

[`BrandedHex`](#../type-aliases/BrandedHex)

  ### <a id="hexFromHexString"></a>hexFromHexString

[**@xylabs/hex**](#../README)

***

```ts
function hexFromHexString(value, config?): BrandedHex;
```

## Parameters

### value

`string`

### config?

[`HexConfig`](#../interfaces/HexConfig) = `{}`

## Returns

[`BrandedHex`](#../type-aliases/BrandedHex)

  ### <a id="hexFromNumber"></a>hexFromNumber

[**@xylabs/hex**](#../README)

***

```ts
function hexFromNumber(value, config?): BrandedHex;
```

## Parameters

### value

`number`

### config?

[`HexConfig`](#../interfaces/HexConfig)

## Returns

[`BrandedHex`](#../type-aliases/BrandedHex)

  ### <a id="hexToBigInt"></a>hexToBigInt

[**@xylabs/hex**](#../README)

***

```ts
function hexToBigInt(hex): bigint;
```

## Parameters

### hex

[`BrandedHex`](#../type-aliases/BrandedHex)

## Returns

`bigint`

  ### <a id="isAddress"></a>isAddress

[**@xylabs/hex**](#../README)

***

```ts
function isAddress(value, config?): value is BrandedAddress;
```

## Parameters

### value

`unknown`

### config?

[`HexConfig`](#../interfaces/HexConfig) = `{}`

## Returns

`value is BrandedAddress`

  ### <a id="isAddressV2"></a>isAddressV2

[**@xylabs/hex**](#../README)

***

```ts
function isAddressV2(value): value is BrandedAddress;
```

**`Alpha`**

## Parameters

### value

`unknown`

## Returns

`value is BrandedAddress`

  ### <a id="isEthAddress"></a>isEthAddress

[**@xylabs/hex**](#../README)

***

```ts
function isEthAddress(value, config?): value is EthAddress;
```

## Parameters

### value

`unknown`

### config?

[`HexConfig`](#../interfaces/HexConfig) = `{}`

## Returns

`value is EthAddress`

  ### <a id="isHash"></a>isHash

[**@xylabs/hex**](#../README)

***

```ts
function isHash(value, bitLength?): value is BrandedHash;
```

## Parameters

### value

`unknown`

### bitLength?

[`HashBitLength`](#../type-aliases/HashBitLength) = `256`

## Returns

`value is BrandedHash`

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
function isHex(value, config?): value is BrandedHex;
```

## Parameters

### value

`unknown`

### config?

[`HexConfig`](#../interfaces/HexConfig)

## Returns

`value is BrandedHex`

  ### <a id="isHexZero"></a>isHexZero

[**@xylabs/hex**](#../README)

***

```ts
function isHexZero(value?): boolean | undefined;
```

## Parameters

### value?

`string`

## Returns

`boolean` \| `undefined`

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
function toAddress(value, config?): BrandedAddress;
```

## Parameters

### value

`string` | `number` | `bigint` | `ArrayBufferLike`

### config?

[`HexConfig`](#../interfaces/HexConfig) = `{}`

## Returns

`BrandedAddress`

  ### <a id="toAddressV2"></a>toAddressV2

[**@xylabs/hex**](#../README)

***

```ts
function toAddressV2(value, assert?): BrandedAddress | undefined;
```

**`Alpha`**

## Parameters

### value

`unknown`

### assert?

`boolean` = `false`

## Returns

`BrandedAddress` \| `undefined`

  ### <a id="toEthAddress"></a>toEthAddress

[**@xylabs/hex**](#../README)

***

```ts
function toEthAddress(value, config?): EthAddress;
```

## Parameters

### value

`string` | `number` | `bigint` | `ArrayBufferLike`

### config?

[`HexConfig`](#../interfaces/HexConfig) = `{}`

## Returns

[`EthAddress`](#../type-aliases/EthAddress)

  ### <a id="toHex"></a>toHex

[**@xylabs/hex**](#../README)

***

```ts
function toHex(value, config?): BrandedHex;
```

takes any value and tries our best to convert it to a hex string

## Parameters

### value

Supported types are string, number, bigint, and ArrayBuffer

`string` | `number` | `bigint` | `ArrayBufferLike`

### config?

[`HexConfig`](#../interfaces/HexConfig) = `{}`

Configuration of output format and validation

## Returns

[`BrandedHex`](#../type-aliases/BrandedHex)

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
type Address = z.infer<typeof AddressZod>;
```

  ### <a id="AddressTransformZodType"></a>AddressTransformZodType

[**@xylabs/hex**](#../README)

***

```ts
type AddressTransformZodType = z.infer<typeof AddressTransformZod>;
```

  ### <a id="AddressValidationZodType"></a>AddressValidationZodType

[**@xylabs/hex**](#../README)

***

```ts
type AddressValidationZodType = z.infer<typeof AddressValidationZod>;
```

  ### <a id="BrandedHash"></a>BrandedHash

[**@xylabs/hex**](#../README)

***

```ts
type BrandedHash = Brand<Hex, {
  __hash: true;
}>;
```

  ### <a id="BrandedHex"></a>BrandedHex

[**@xylabs/hex**](#../README)

***

```ts
type BrandedHex = Brand<Lowercase<string>, {
  __hex: true;
}>;
```

  ### <a id="EthAddress"></a>EthAddress

[**@xylabs/hex**](#../README)

***

```ts
type EthAddress = Brand<string, {
  __eth_address: true;
}>;
```

  ### <a id="Hash"></a>Hash

[**@xylabs/hex**](#../README)

***

```ts
type Hash = z.infer<typeof HashZod>;
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
type Hex = z.infer<typeof HexZod>;
```

### variables

  ### <a id="ADDRESS_LENGTH"></a>ADDRESS_LENGTH

[**@xylabs/hex**](#../README)

***

```ts
const ADDRESS_LENGTH: 40;
```

  ### <a id="AddressRegEx"></a>AddressRegEx

[**@xylabs/hex**](#../README)

***

```ts
const AddressRegEx: RegExp;
```

  ### <a id="AddressTransformZod"></a>AddressTransformZod

[**@xylabs/hex**](#../README)

***

```ts
const AddressTransformZod: ZodPipe<ZodPipe<ZodUnion<readonly [ZodString, ZodBigInt, ZodNumber]>, ZodTransform<string, string | number | bigint>>, ZodTransform<BrandedAddress, string>>;
```

  ### <a id="AddressValidationZod"></a>AddressValidationZod

[**@xylabs/hex**](#../README)

***

```ts
const AddressValidationZod: ZodPipe<ZodString, ZodTransform<BrandedAddress, string>>;
```

  ### <a id="AddressZod"></a>AddressZod

[**@xylabs/hex**](#../README)

***

```ts
const AddressZod: ZodPipe<ZodString, ZodTransform<BrandedAddress, string>>;
```

  ### <a id="BigIntToJsonZod"></a>BigIntToJsonZod

[**@xylabs/hex**](#../README)

***

```ts
const BigIntToJsonZod: ZodPipe<ZodBigInt, ZodTransform<BrandedHex, bigint>>;
```

  ### <a id="ETH_ZERO_ADDRESS"></a>ETH_ZERO_ADDRESS

[**@xylabs/hex**](#../README)

***

```ts
const ETH_ZERO_ADDRESS: EthAddress;
```

  ### <a id="EthAddressFromStringSchema"></a>EthAddressFromStringSchema

[**@xylabs/hex**](#../README)

***

```ts
const EthAddressFromStringSchema: ZodPipe<ZodString, ZodTransform<EthAddress, string>> = EthAddressFromStringZod;
```

## Deprecated

use EthAddressFromStringZod

  ### <a id="EthAddressFromStringZod"></a>EthAddressFromStringZod

[**@xylabs/hex**](#../README)

***

```ts
const EthAddressFromStringZod: ZodPipe<ZodString, ZodTransform<EthAddress, string>>;
```

  ### <a id="EthAddressRegEx"></a>EthAddressRegEx

[**@xylabs/hex**](#../README)

***

```ts
const EthAddressRegEx: RegExp;
```

  ### <a id="EthAddressToStringSchema"></a>EthAddressToStringSchema

[**@xylabs/hex**](#../README)

***

```ts
const EthAddressToStringSchema: ZodString = EthAddressToStringZod;
```

## Deprecated

use EthAddressToStringZod

  ### <a id="EthAddressToStringZod"></a>EthAddressToStringZod

[**@xylabs/hex**](#../README)

***

```ts
const EthAddressToStringZod: ZodString;
```

  ### <a id="EthAddressZod"></a>EthAddressZod

[**@xylabs/hex**](#../README)

***

```ts
const EthAddressZod: ZodString & ZodType<EthAddress, string, $ZodTypeInternals<EthAddress, string>>;
```

  ### <a id="HASH_LENGTH"></a>HASH_LENGTH

[**@xylabs/hex**](#../README)

***

```ts
const HASH_LENGTH: 32;
```

  ### <a id="HashBitLength"></a>HashBitLength

[**@xylabs/hex**](#../README)

***

```ts
HashBitLength: HashBitLength[];
```

  ### <a id="HashRegEx"></a>HashRegEx

[**@xylabs/hex**](#../README)

***

```ts
const HashRegEx: RegExp;
```

  ### <a id="HashToJsonZod"></a>HashToJsonZod

[**@xylabs/hex**](#../README)

***

```ts
const HashToJsonZod: ZodPipe<ZodPipe<ZodString, ZodTransform<BrandedHash, string>>, ZodTransform<string, BrandedHash>>;
```

  ### <a id="HashZod"></a>HashZod

[**@xylabs/hex**](#../README)

***

```ts
const HashZod: ZodPipe<ZodString, ZodTransform<BrandedHash, string>>;
```

  ### <a id="HexRegEx"></a>HexRegEx

[**@xylabs/hex**](#../README)

***

```ts
const HexRegEx: RegExp;
```

  ### <a id="HexRegExWithPrefix"></a>HexRegExWithPrefix

[**@xylabs/hex**](#../README)

***

```ts
const HexRegExWithPrefix: RegExp;
```

  ### <a id="HexZod"></a>HexZod

[**@xylabs/hex**](#../README)

***

```ts
const HexZod: ZodPipe<ZodString, ZodTransform<BrandedHex, string>>;
```

  ### <a id="JsonToBigIntZod"></a>JsonToBigIntZod

[**@xylabs/hex**](#../README)

***

```ts
const JsonToBigIntZod: ZodPipe<ZodPipe<ZodString, ZodTransform<BrandedHex, string>>, ZodTransform<bigint, BrandedHex>>;
```

  ### <a id="JsonToHashZod"></a>JsonToHashZod

[**@xylabs/hex**](#../README)

***

```ts
const JsonToHashZod: ZodPipe<ZodString, ZodTransform<BrandedHash, string>>;
```

  ### <a id="ZERO_ADDRESS"></a>ZERO_ADDRESS

[**@xylabs/hex**](#../README)

***

```ts
const ZERO_ADDRESS: BrandedAddress;
```

  ### <a id="ZERO_HASH"></a>ZERO_HASH

[**@xylabs/hex**](#../README)

***

```ts
const ZERO_HASH: BrandedHash;
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