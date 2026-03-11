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

| Interface | Description |
| ------ | ------ |
| [HexConfig](#interfaces/HexConfig) | Configuration of validation and output format |

## Type Aliases

| Type Alias | Description |
| ------ | ------ |
| [AddressTransformZodType](#type-aliases/AddressTransformZodType) | The output type of AddressTransformZod after parsing and transformation. |
| [AddressValidationZodType](#type-aliases/AddressValidationZodType) | The output type of AddressValidationZod after parsing. |
| [Address](#type-aliases/Address) | A validated 20-byte address string type, inferred from the AddressZod schema. |
| [EthAddress](#type-aliases/EthAddress) | Branded type representing a validated Ethereum address with 0x prefix. |
| [HashBitLength](#type-aliases/HashBitLength) | Valid bit lengths for hash values. |
| [BrandedHash](#type-aliases/BrandedHash) | Branded type representing a validated hash hex string. |
| [Hash](#type-aliases/Hash) | A validated hash string type, inferred from the HashZod schema. |
| [BrandedHex](#type-aliases/BrandedHex) | Branded type representing a validated lowercase hex string. |
| [Hex](#type-aliases/Hex) | A validated hex string type, inferred from the HexZod schema. |

## Variables

| Variable | Description |
| ------ | ------ |
| [HexRegEx](#variables/HexRegEx) | Regular expression matching a lowercase hex string without prefix. |
| [HexRegExWithPrefix](#variables/HexRegExWithPrefix) | Regular expression matching a lowercase hex string with a 0x prefix. |
| [AddressTransformZod](#variables/AddressTransformZod) | Zod schema that accepts a string, bigint, or number and transforms it into a validated Address. |
| [AddressValidationZod](#variables/AddressValidationZod) | Zod schema that validates a string is a properly formatted 40-character hex address. |
| [ZERO\_ADDRESS](#variables/ZERO_ADDRESS) | A 160-bit zero address constant. |
| [ADDRESS\_LENGTH](#variables/ADDRESS_LENGTH) | The character length of an address hex string (40 hex characters / 20 bytes). |
| [AddressRegEx](#variables/AddressRegEx) | Regular expression matching a 20-byte (40 hex character) address string. |
| [AddressZod](#variables/AddressZod) | Zod schema that validates and transforms a string into a branded Address type. |
| [EthAddressRegEx](#variables/EthAddressRegEx) | Regular expression matching a 20-byte Ethereum address with 0x prefix (mixed case). |
| [EthAddressToStringZod](#variables/EthAddressToStringZod) | Zod schema that validates a string is a properly formatted Ethereum address. |
| [~~EthAddressToStringSchema~~](#variables/EthAddressToStringSchema) | - |
| [EthAddressFromStringZod](#variables/EthAddressFromStringZod) | Zod schema that validates and transforms a string into an EthAddress type. |
| [~~EthAddressFromStringSchema~~](#variables/EthAddressFromStringSchema) | - |
| [ETH\_ZERO\_ADDRESS](#variables/ETH_ZERO_ADDRESS) | The zero Ethereum address constant (0x followed by 40 zero characters). |
| [EthAddressZod](#variables/EthAddressZod) | Zod schema that validates a string as a properly formatted Ethereum address using regex and type guard. |
| [HASH\_LENGTH](#variables/HASH_LENGTH) | The byte length of a standard hash (32 bytes / 256 bits). |
| [HashRegEx](#variables/HashRegEx) | Regular expression matching a 32-byte (64 hex character) hash string. |
| [ZERO\_HASH](#variables/ZERO_HASH) | A 256-bit zero hash constant. |
| [HashBitLength](#variables/HashBitLength) | Array of all valid hash bit lengths for runtime validation. |
| [HashZod](#variables/HashZod) | Zod schema that validates and transforms a string into a branded Hash type. |
| [HashToJsonZod](#variables/HashToJsonZod) | Zod schema that transforms a Hash to a plain string for JSON serialization. |
| [JsonToHashZod](#variables/JsonToHashZod) | Zod schema that parses a JSON string into a validated Hash, throwing on invalid input. |
| [HexZod](#variables/HexZod) | Zod schema that validates and transforms a string into a branded Hex type. |
| [BigIntToJsonZod](#variables/BigIntToJsonZod) | Zod schema that transforms a non-negative BigInt into a hex string for JSON serialization. |
| [JsonToBigIntZod](#variables/JsonToBigIntZod) | Zod schema that parses a JSON hex string into a BigInt. |

## Functions

| Function | Description |
| ------ | ------ |
| [HexRegExMinMax](#functions/HexRegExMinMax) | Creates a RegExp matching lowercase hex strings with a byte length in the given range. |
| [HexRegExMinMaxMixedCaseWithPrefix](#functions/HexRegExMinMaxMixedCaseWithPrefix) | Creates a RegExp matching mixed-case hex strings with a 0x prefix and a byte length in the given range. |
| [asAddress](#functions/asAddress) | Attempts to coerce a value into an Address type, returning undefined or throwing based on the assert config. |
| [asAddressV2](#functions/asAddressV2) | - |
| [isAddress](#functions/isAddress) | Type guard that checks whether a value is a valid 160-bit address. |
| [isAddressV2](#functions/isAddressV2) | - |
| [toAddress](#functions/toAddress) | Converts a value to a 160-bit Address hex string. |
| [toAddressV2](#functions/toAddressV2) | - |
| [toEthAddress](#functions/toEthAddress) | Converts a value to a 0x-prefixed Ethereum address string. |
| [isEthAddress](#functions/isEthAddress) | Type guard that checks whether a value is a valid 0x-prefixed Ethereum address. |
| [asEthAddress](#functions/asEthAddress) | Attempts to coerce a value into an EthAddress, returning undefined or throwing based on the assert config. |
| [asHash](#functions/asHash) | Attempts to coerce a value into a Hash type, returning undefined or throwing based on the assert config. |
| [isHashBitLength](#functions/isHashBitLength) | Type guard that checks whether a value is a valid hash bit length. |
| [isHash](#functions/isHash) | Type guard that checks whether a value is a valid hash of the specified bit length. |
| [asHex](#functions/asHex) | Attempts to coerce a value into a Hex type, returning undefined or throwing based on the assert config. |
| [hexFrom](#functions/hexFrom) | Takes unknown value and tries our best to convert it to a hex string |
| [hexFromArrayBuffer](#functions/hexFromArrayBuffer) | Convert an ArrayBuffer to a hex string |
| [hexFromBigInt](#functions/hexFromBigInt) | Convert a bigint to a hex string |
| [hexFromHexString](#functions/hexFromHexString) | Normalizes a hex string by stripping an optional 0x prefix, lowercasing, and padding to byte/bit boundaries. |
| [hexFromNumber](#functions/hexFromNumber) | Converts a number to a hex string by converting to BigInt first. |
| [isHex](#functions/isHex) | Type guard that checks whether a value is a valid hex string. |
| [isHexZero](#functions/isHexZero) | Checks whether a hex string represents a zero value. |
| [toHexLegacy](#functions/toHexLegacy) | Converts an ArrayBuffer to a hex string without padding or normalization. |
| [bitsToNibbles](#functions/bitsToNibbles) | Converts a bit count to the equivalent number of hex nibbles (4 bits each). |
| [nibblesToBits](#functions/nibblesToBits) | Converts a nibble count to the equivalent number of bits. |
| [toHex](#functions/toHex) | takes any value and tries our best to convert it to a hex string |
| [hexToBigInt](#functions/hexToBigInt) | Converts a Hex string to a BigInt. |

### functions

  ### <a id="HexRegExMinMax"></a>HexRegExMinMax

[**@xylabs/hex**](#../README)

***

```ts
function HexRegExMinMax(minBytes?: number, maxBytes?: number): RegExp;
```

Creates a RegExp matching lowercase hex strings with a byte length in the given range.

## Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `minBytes` | `number` | `0` | Minimum number of bytes (default 0) |
| `maxBytes` | `number` | `...` | Maximum number of bytes |

## Returns

`RegExp`

A RegExp for validating hex strings within the byte range

  ### <a id="HexRegExMinMaxMixedCaseWithPrefix"></a>HexRegExMinMaxMixedCaseWithPrefix

[**@xylabs/hex**](#../README)

***

```ts
function HexRegExMinMaxMixedCaseWithPrefix(minBytes?: number, maxBytes?: number): RegExp;
```

Creates a RegExp matching mixed-case hex strings with a 0x prefix and a byte length in the given range.

## Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `minBytes` | `number` | `0` | Minimum number of bytes (default 0) |
| `maxBytes` | `number` | `...` | Maximum number of bytes |

## Returns

`RegExp`

A RegExp for validating prefixed hex strings within the byte range

  ### <a id="asAddress"></a>asAddress

[**@xylabs/hex**](#../README)

***

## Call Signature

```ts
function asAddress(value: unknown): BrandedAddress | undefined;
```

Attempts to coerce a value into an Address type, returning undefined or throwing based on the assert config.

### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `value` | `unknown` | The value to coerce (must be a string) |

### Returns

`BrandedAddress` \| `undefined`

The value as Address, or undefined if coercion fails and assert is not set

## Call Signature

```ts
function asAddress(value: unknown, assert: AssertConfig): BrandedAddress;
```

Attempts to coerce a value into an Address type, returning undefined or throwing based on the assert config.

### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `value` | `unknown` | The value to coerce (must be a string) |
| `assert` | `AssertConfig` | If provided, throws on failure instead of returning undefined |

### Returns

`BrandedAddress`

The value as Address, or undefined if coercion fails and assert is not set

  ### <a id="asAddressV2"></a>asAddressV2

[**@xylabs/hex**](#../README)

***

```ts
function asAddressV2(value: unknown, assert?: boolean): BrandedAddress | undefined;
```

**`Alpha`**

## Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `value` | `unknown` | `undefined` |
| `assert` | `boolean` | `false` |

## Returns

`BrandedAddress` \| `undefined`

  ### <a id="asEthAddress"></a>asEthAddress

[**@xylabs/hex**](#../README)

***

## Call Signature

```ts
function asEthAddress(value: unknown): EthAddress | undefined;
```

Attempts to coerce a value into an EthAddress, returning undefined or throwing based on the assert config.

### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `value` | `unknown` | The value to coerce (must be a string) |

### Returns

[`EthAddress`](#../type-aliases/EthAddress) \| `undefined`

The value as EthAddress, or undefined if coercion fails and assert is not set

## Call Signature

```ts
function asEthAddress(value: unknown, assert: AssertConfig): EthAddress;
```

Attempts to coerce a value into an EthAddress, returning undefined or throwing based on the assert config.

### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `value` | `unknown` | The value to coerce (must be a string) |
| `assert` | `AssertConfig` | If provided, throws on failure instead of returning undefined |

### Returns

[`EthAddress`](#../type-aliases/EthAddress)

The value as EthAddress, or undefined if coercion fails and assert is not set

  ### <a id="asHash"></a>asHash

[**@xylabs/hex**](#../README)

***

## Call Signature

```ts
function asHash(value: unknown): BrandedHash | undefined;
```

Attempts to coerce a value into a Hash type, returning undefined or throwing based on the assert config.

### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `value` | `unknown` | The value to coerce (must be a string) |

### Returns

[`BrandedHash`](#../type-aliases/BrandedHash) \| `undefined`

The value as Hash, or undefined if coercion fails and assert is not set

## Call Signature

```ts
function asHash(value: unknown, assert: AssertConfig): BrandedHash;
```

Attempts to coerce a value into a Hash type, returning undefined or throwing based on the assert config.

### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `value` | `unknown` | The value to coerce (must be a string) |
| `assert` | `AssertConfig` | If provided, throws on failure instead of returning undefined |

### Returns

[`BrandedHash`](#../type-aliases/BrandedHash)

The value as Hash, or undefined if coercion fails and assert is not set

  ### <a id="asHex"></a>asHex

[**@xylabs/hex**](#../README)

***

## Call Signature

```ts
function asHex(value: unknown): BrandedHex | undefined;
```

Attempts to coerce a value into a Hex type, returning undefined or throwing based on the assert config.

### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `value` | `unknown` | The value to coerce (must be a string) |

### Returns

[`BrandedHex`](#../type-aliases/BrandedHex) \| `undefined`

The value as Hex, or undefined if coercion fails and assert is not set

## Call Signature

```ts
function asHex(value: unknown, assert: AssertConfig): BrandedHex;
```

Attempts to coerce a value into a Hex type, returning undefined or throwing based on the assert config.

### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `value` | `unknown` | The value to coerce (must be a string) |
| `assert` | `AssertConfig` | If provided, throws on failure instead of returning undefined |

### Returns

[`BrandedHex`](#../type-aliases/BrandedHex)

The value as Hex, or undefined if coercion fails and assert is not set

  ### <a id="bitsToNibbles"></a>bitsToNibbles

[**@xylabs/hex**](#../README)

***

```ts
function bitsToNibbles(value: number): number;
```

Converts a bit count to the equivalent number of hex nibbles (4 bits each).

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `value` | `number` | The number of bits (must be a multiple of 4) |

## Returns

`number`

The number of nibbles

  ### <a id="hexFrom"></a>hexFrom

[**@xylabs/hex**](#../README)

***

```ts
function hexFrom(value: string | number | bigint | ArrayBufferLike, config?: HexConfig): BrandedHex;
```

Takes unknown value and tries our best to convert it to a hex string

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `value` | `string` \| `number` \| `bigint` \| `ArrayBufferLike` | Supported types are string, number, bigint, and ArrayBuffer |
| `config?` | [`HexConfig`](#../interfaces/HexConfig) | Configuration of output format and validation |

## Returns

[`BrandedHex`](#../type-aliases/BrandedHex)

  ### <a id="hexFromArrayBuffer"></a>hexFromArrayBuffer

[**@xylabs/hex**](#../README)

***

```ts
function hexFromArrayBuffer(buffer: ArrayBufferLike, config?: HexConfig): BrandedHex;
```

Convert an ArrayBuffer to a hex string

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `buffer` | `ArrayBufferLike` | The buffer to be converted |
| `config?` | [`HexConfig`](#../interfaces/HexConfig) | Configuration of output format and validation |

## Returns

[`BrandedHex`](#../type-aliases/BrandedHex)

  ### <a id="hexFromBigInt"></a>hexFromBigInt

[**@xylabs/hex**](#../README)

***

```ts
function hexFromBigInt(value: bigint, config?: HexConfig): BrandedHex;
```

Convert a bigint to a hex string

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `value` | `bigint` | The bigint to be converted |
| `config` | [`HexConfig`](#../interfaces/HexConfig) | Configuration of output format and validation |

## Returns

[`BrandedHex`](#../type-aliases/BrandedHex)

  ### <a id="hexFromHexString"></a>hexFromHexString

[**@xylabs/hex**](#../README)

***

```ts
function hexFromHexString(value: string, config?: HexConfig): BrandedHex;
```

Normalizes a hex string by stripping an optional 0x prefix, lowercasing, and padding to byte/bit boundaries.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `value` | `string` | The hex string to normalize (with or without 0x prefix) |
| `config` | [`HexConfig`](#../interfaces/HexConfig) | Configuration for prefix, byteSize, and bitLength padding |

## Returns

[`BrandedHex`](#../type-aliases/BrandedHex)

The normalized Hex string

  ### <a id="hexFromNumber"></a>hexFromNumber

[**@xylabs/hex**](#../README)

***

```ts
function hexFromNumber(value: number, config?: HexConfig): BrandedHex;
```

Converts a number to a hex string by converting to BigInt first.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `value` | `number` | The number to convert |
| `config?` | [`HexConfig`](#../interfaces/HexConfig) | Optional hex output configuration |

## Returns

[`BrandedHex`](#../type-aliases/BrandedHex)

The hex string representation

  ### <a id="hexToBigInt"></a>hexToBigInt

[**@xylabs/hex**](#../README)

***

```ts
function hexToBigInt(hex: BrandedHex): bigint;
```

Converts a Hex string to a BigInt.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `hex` | [`BrandedHex`](#../type-aliases/BrandedHex) | The hex string to convert |

## Returns

`bigint`

The BigInt representation of the hex value

  ### <a id="isAddress"></a>isAddress

[**@xylabs/hex**](#../README)

***

```ts
function isAddress(value: unknown, config?: HexConfig): value is BrandedAddress;
```

Type guard that checks whether a value is a valid 160-bit address.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `value` | `unknown` | The value to check |
| `config` | [`HexConfig`](#../interfaces/HexConfig) | Optional hex config (defaults to 160-bit, no prefix) |

## Returns

`value is BrandedAddress`

True if the value is a valid Address

  ### <a id="isAddressV2"></a>isAddressV2

[**@xylabs/hex**](#../README)

***

```ts
function isAddressV2(value: unknown): value is BrandedAddress;
```

**`Alpha`**

## Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `unknown` |

## Returns

`value is BrandedAddress`

  ### <a id="isEthAddress"></a>isEthAddress

[**@xylabs/hex**](#../README)

***

```ts
function isEthAddress(value: unknown, config?: HexConfig): value is EthAddress;
```

Type guard that checks whether a value is a valid 0x-prefixed Ethereum address.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `value` | `unknown` | The value to check |
| `config` | [`HexConfig`](#../interfaces/HexConfig) | Optional hex config (defaults to 160-bit with prefix) |

## Returns

`value is EthAddress`

True if the value is a valid EthAddress

  ### <a id="isHash"></a>isHash

[**@xylabs/hex**](#../README)

***

```ts
function isHash(value: unknown, bitLength?: HashBitLength): value is BrandedHash;
```

Type guard that checks whether a value is a valid hash of the specified bit length.

## Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `value` | `unknown` | `undefined` | The value to check |
| `bitLength` | [`HashBitLength`](#../type-aliases/HashBitLength) | `256` | The expected bit length of the hash (defaults to 256) |

## Returns

`value is BrandedHash`

True if the value is a valid Hash

  ### <a id="isHashBitLength"></a>isHashBitLength

[**@xylabs/hex**](#../README)

***

```ts
function isHashBitLength(value: unknown): value is HashBitLength;
```

Type guard that checks whether a value is a valid hash bit length.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `value` | `unknown` | The value to check |

## Returns

`value is HashBitLength`

True if the value is one of the supported HashBitLength values

  ### <a id="isHex"></a>isHex

[**@xylabs/hex**](#../README)

***

```ts
function isHex(value: unknown, config?: HexConfig): value is BrandedHex;
```

Type guard that checks whether a value is a valid hex string.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `value` | `unknown` | The value to check |
| `config?` | [`HexConfig`](#../interfaces/HexConfig) | Optional configuration for prefix and bit length validation |

## Returns

`value is BrandedHex`

True if the value is a valid Hex string

  ### <a id="isHexZero"></a>isHexZero

[**@xylabs/hex**](#../README)

***

```ts
function isHexZero(value?: string): boolean | undefined;
```

Checks whether a hex string represents a zero value.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `value?` | `string` | The hex string to check |

## Returns

`boolean` \| `undefined`

True if zero, false if non-zero, or undefined if the input is not a string

  ### <a id="nibblesToBits"></a>nibblesToBits

[**@xylabs/hex**](#../README)

***

```ts
function nibblesToBits(value: number): number;
```

Converts a nibble count to the equivalent number of bits.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `value` | `number` | The number of nibbles |

## Returns

`number`

The number of bits

  ### <a id="toAddress"></a>toAddress

[**@xylabs/hex**](#../README)

***

```ts
function toAddress(value: string | number | bigint | ArrayBufferLike, config?: HexConfig): BrandedAddress;
```

Converts a value to a 160-bit Address hex string.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `value` | `string` \| `number` \| `bigint` \| `ArrayBufferLike` | The value to convert (string, number, bigint, or ArrayBuffer) |
| `config` | [`HexConfig`](#../interfaces/HexConfig) | Optional hex config (defaults to 160-bit, no prefix) |

## Returns

`BrandedAddress`

The value as an Address

  ### <a id="toAddressV2"></a>toAddressV2

[**@xylabs/hex**](#../README)

***

```ts
function toAddressV2(value: unknown, assert?: boolean): BrandedAddress | undefined;
```

**`Alpha`**

## Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `value` | `unknown` | `undefined` |
| `assert` | `boolean` | `false` |

## Returns

`BrandedAddress` \| `undefined`

  ### <a id="toEthAddress"></a>toEthAddress

[**@xylabs/hex**](#../README)

***

```ts
function toEthAddress(value: string | number | bigint | ArrayBufferLike, config?: HexConfig): EthAddress;
```

Converts a value to a 0x-prefixed Ethereum address string.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `value` | `string` \| `number` \| `bigint` \| `ArrayBufferLike` | The value to convert (string, number, bigint, or ArrayBuffer) |
| `config` | [`HexConfig`](#../interfaces/HexConfig) | Optional hex config (defaults to 160-bit, no inner prefix) |

## Returns

[`EthAddress`](#../type-aliases/EthAddress)

The value as an EthAddress

  ### <a id="toHex"></a>toHex

[**@xylabs/hex**](#../README)

***

```ts
function toHex(value: string | number | bigint | ArrayBufferLike, config?: HexConfig): BrandedHex;
```

takes any value and tries our best to convert it to a hex string

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `value` | `string` \| `number` \| `bigint` \| `ArrayBufferLike` | Supported types are string, number, bigint, and ArrayBuffer |
| `config` | [`HexConfig`](#../interfaces/HexConfig) | Configuration of output format and validation |

## Returns

[`BrandedHex`](#../type-aliases/BrandedHex)

  ### <a id="toHexLegacy"></a>toHexLegacy

[**@xylabs/hex**](#../README)

***

```ts
function toHexLegacy(buffer: ArrayBuffer): string;
```

Converts an ArrayBuffer to a hex string without padding or normalization.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `buffer` | `ArrayBuffer` | The ArrayBuffer to convert |

## Returns

`string`

A lowercase hex string representation of the buffer

### interfaces

  ### <a id="HexConfig"></a>HexConfig

[**@xylabs/hex**](#../README)

***

Configuration of validation and output format

## Properties

| Property | Type |
| ------ | ------ |
| <a id="bitlength"></a> `bitLength?` | `number` |
| <a id="bytesize"></a> `byteSize?` | `number` |
| <a id="prefix"></a> `prefix?` | `boolean` |

### type-aliases

  ### <a id="Address"></a>Address

[**@xylabs/hex**](#../README)

***

```ts
type Address = z.infer<typeof AddressZod>;
```

A validated 20-byte address string type, inferred from the AddressZod schema.

  ### <a id="AddressTransformZodType"></a>AddressTransformZodType

[**@xylabs/hex**](#../README)

***

```ts
type AddressTransformZodType = z.infer<typeof AddressTransformZod>;
```

The output type of AddressTransformZod after parsing and transformation.

  ### <a id="AddressValidationZodType"></a>AddressValidationZodType

[**@xylabs/hex**](#../README)

***

```ts
type AddressValidationZodType = z.infer<typeof AddressValidationZod>;
```

The output type of AddressValidationZod after parsing.

  ### <a id="BrandedHash"></a>BrandedHash

[**@xylabs/hex**](#../README)

***

```ts
type BrandedHash = Brand<Hex, {
  __hash: true;
}>;
```

Branded type representing a validated hash hex string.

  ### <a id="BrandedHex"></a>BrandedHex

[**@xylabs/hex**](#../README)

***

```ts
type BrandedHex = Brand<Lowercase<string>, {
  __hex: true;
}>;
```

Branded type representing a validated lowercase hex string.

  ### <a id="EthAddress"></a>EthAddress

[**@xylabs/hex**](#../README)

***

```ts
type EthAddress = Brand<string, {
  __eth_address: true;
}>;
```

Branded type representing a validated Ethereum address with 0x prefix.

  ### <a id="Hash"></a>Hash

[**@xylabs/hex**](#../README)

***

```ts
type Hash = z.infer<typeof HashZod>;
```

A validated hash string type, inferred from the HashZod schema.

  ### <a id="HashBitLength"></a>HashBitLength

[**@xylabs/hex**](#../README)

***

```ts
type HashBitLength = 32 | 64 | 128 | 256 | 512 | 1024 | 2048 | 4096;
```

Valid bit lengths for hash values.

  ### <a id="Hex"></a>Hex

[**@xylabs/hex**](#../README)

***

```ts
type Hex = z.infer<typeof HexZod>;
```

A validated hex string type, inferred from the HexZod schema.

### variables

  ### <a id="ADDRESS_LENGTH"></a>ADDRESS_LENGTH

[**@xylabs/hex**](#../README)

***

```ts
const ADDRESS_LENGTH: 40;
```

The character length of an address hex string (40 hex characters / 20 bytes).

  ### <a id="AddressRegEx"></a>AddressRegEx

[**@xylabs/hex**](#../README)

***

```ts
const AddressRegEx: RegExp;
```

Regular expression matching a 20-byte (40 hex character) address string.

  ### <a id="AddressTransformZod"></a>AddressTransformZod

[**@xylabs/hex**](#../README)

***

```ts
const AddressTransformZod: ZodPipe<ZodPipe<ZodUnion<readonly [ZodString, ZodBigInt, ZodNumber]>, ZodTransform<string, string | number | bigint>>, ZodTransform<BrandedAddress, string>>;
```

Zod schema that accepts a string, bigint, or number and transforms it into a validated Address.

  ### <a id="AddressValidationZod"></a>AddressValidationZod

[**@xylabs/hex**](#../README)

***

```ts
const AddressValidationZod: ZodPipe<ZodString, ZodTransform<BrandedAddress, string>>;
```

Zod schema that validates a string is a properly formatted 40-character hex address.

  ### <a id="AddressZod"></a>AddressZod

[**@xylabs/hex**](#../README)

***

```ts
const AddressZod: ZodPipe<ZodString, ZodTransform<BrandedAddress, string>>;
```

Zod schema that validates and transforms a string into a branded Address type.

  ### <a id="BigIntToJsonZod"></a>BigIntToJsonZod

[**@xylabs/hex**](#../README)

***

```ts
const BigIntToJsonZod: ZodPipe<ZodBigInt, ZodTransform<BrandedHex, bigint>>;
```

Zod schema that transforms a non-negative BigInt into a hex string for JSON serialization.

  ### <a id="ETH_ZERO_ADDRESS"></a>ETH_ZERO_ADDRESS

[**@xylabs/hex**](#../README)

***

```ts
const ETH_ZERO_ADDRESS: EthAddress;
```

The zero Ethereum address constant (0x followed by 40 zero characters).

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

Zod schema that validates and transforms a string into an EthAddress type.

  ### <a id="EthAddressRegEx"></a>EthAddressRegEx

[**@xylabs/hex**](#../README)

***

```ts
const EthAddressRegEx: RegExp;
```

Regular expression matching a 20-byte Ethereum address with 0x prefix (mixed case).

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

Zod schema that validates a string is a properly formatted Ethereum address.

  ### <a id="EthAddressZod"></a>EthAddressZod

[**@xylabs/hex**](#../README)

***

```ts
const EthAddressZod: ZodString & ZodType<EthAddress, string, $ZodTypeInternals<EthAddress, string>>;
```

Zod schema that validates a string as a properly formatted Ethereum address using regex and type guard.

  ### <a id="HASH_LENGTH"></a>HASH_LENGTH

[**@xylabs/hex**](#../README)

***

```ts
const HASH_LENGTH: 32;
```

The byte length of a standard hash (32 bytes / 256 bits).

  ### <a id="HashBitLength"></a>HashBitLength

[**@xylabs/hex**](#../README)

***

```ts
HashBitLength: HashBitLength[];
```

Array of all valid hash bit lengths for runtime validation.

  ### <a id="HashRegEx"></a>HashRegEx

[**@xylabs/hex**](#../README)

***

```ts
const HashRegEx: RegExp;
```

Regular expression matching a 32-byte (64 hex character) hash string.

  ### <a id="HashToJsonZod"></a>HashToJsonZod

[**@xylabs/hex**](#../README)

***

```ts
const HashToJsonZod: ZodPipe<ZodPipe<ZodString, ZodTransform<BrandedHash, string>>, ZodTransform<string, BrandedHash>>;
```

Zod schema that transforms a Hash to a plain string for JSON serialization.

  ### <a id="HashZod"></a>HashZod

[**@xylabs/hex**](#../README)

***

```ts
const HashZod: ZodPipe<ZodString, ZodTransform<BrandedHash, string>>;
```

Zod schema that validates and transforms a string into a branded Hash type.

  ### <a id="HexRegEx"></a>HexRegEx

[**@xylabs/hex**](#../README)

***

```ts
const HexRegEx: RegExp;
```

Regular expression matching a lowercase hex string without prefix.

  ### <a id="HexRegExWithPrefix"></a>HexRegExWithPrefix

[**@xylabs/hex**](#../README)

***

```ts
const HexRegExWithPrefix: RegExp;
```

Regular expression matching a lowercase hex string with a 0x prefix.

  ### <a id="HexZod"></a>HexZod

[**@xylabs/hex**](#../README)

***

```ts
const HexZod: ZodPipe<ZodString, ZodTransform<BrandedHex, string>>;
```

Zod schema that validates and transforms a string into a branded Hex type.

  ### <a id="JsonToBigIntZod"></a>JsonToBigIntZod

[**@xylabs/hex**](#../README)

***

```ts
const JsonToBigIntZod: ZodPipe<ZodPipe<ZodString, ZodTransform<BrandedHex, string>>, ZodTransform<bigint, BrandedHex>>;
```

Zod schema that parses a JSON hex string into a BigInt.

  ### <a id="JsonToHashZod"></a>JsonToHashZod

[**@xylabs/hex**](#../README)

***

```ts
const JsonToHashZod: ZodPipe<ZodString, ZodTransform<BrandedHash, string>>;
```

Zod schema that parses a JSON string into a validated Hash, throwing on invalid input.

  ### <a id="ZERO_ADDRESS"></a>ZERO_ADDRESS

[**@xylabs/hex**](#../README)

***

```ts
const ZERO_ADDRESS: BrandedAddress;
```

A 160-bit zero address constant.

  ### <a id="ZERO_HASH"></a>ZERO_HASH

[**@xylabs/hex**](#../README)

***

```ts
const ZERO_HASH: BrandedHash;
```

A 256-bit zero hash constant.


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