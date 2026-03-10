# @xylabs/eth-address

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

**@xylabs/eth-address**

***

## Classes

- [EthAddressWrapper](#classes/EthAddressWrapper)

## Functions

- [isEthAddressWrapper](#functions/isEthAddressWrapper)
- [ellipsize](#functions/ellipsize)
- [padHex](#functions/padHex)

### classes

  ### <a id="EthAddressWrapper"></a>EthAddressWrapper

[**@xylabs/eth-address**](#../README)

***

Wrapper around an Ethereum address providing parsing, formatting, validation, and checksum support.

## Constructors

### Constructor

```ts
protected new EthAddressWrapper(address): EthAddressWrapper;
```

### Parameters

#### address

`bigint`

### Returns

`EthAddressWrapper`

## Methods

### fromString()

```ts
static fromString(value?, base?): EthAddressWrapper | undefined;
```

### Parameters

#### value?

`string`

#### base?

`number` = `16`

### Returns

`EthAddressWrapper` \| `undefined`

***

### parse()

```ts
static parse(value, base?): EthAddressWrapper | undefined;
```

### Parameters

#### value

`unknown`

#### base?

`number`

### Returns

`EthAddressWrapper` \| `undefined`

***

### validate()

```ts
static validate(address): boolean;
```

### Parameters

#### address

`string`

### Returns

`boolean`

***

### equals()

```ts
equals(address?): boolean;
```

### Parameters

#### address?

`string` | `EthAddressWrapper` | `null`

### Returns

`boolean`

***

### toBigNumber()

```ts
toBigNumber(): bigint;
```

### Returns

`bigint`

***

### toHex()

```ts
toHex(): string;
```

### Returns

`string`

***

### toJSON()

```ts
toJSON(): string;
```

### Returns

`string`

***

### toLowerCaseString()

```ts
toLowerCaseString(): string;
```

### Returns

`string`

***

### toShortString()

```ts
toShortString(length?): string;
```

### Parameters

#### length?

`number` = `2`

### Returns

`string`

***

### toString()

```ts
toString(checksum?, chainId?): string;
```

### Parameters

#### checksum?

`boolean`

#### chainId?

`string`

### Returns

`string`

***

### validate()

```ts
validate(): boolean;
```

### Returns

`boolean`

### functions

  ### <a id="ellipsize"></a>ellipsize

[**@xylabs/eth-address**](#../README)

***

```ts
function ellipsize(value, length?): string;
```

Truncates a string to show the first and last `length` characters separated by an ellipsis.

## Parameters

### value

`string`

The string to ellipsize

### length?

`number` = `2`

Number of characters to keep at each end (default 2)

## Returns

`string`

The ellipsized string

  ### <a id="isEthAddressWrapper"></a>isEthAddressWrapper

[**@xylabs/eth-address**](#../README)

***

```ts
function isEthAddressWrapper(obj): obj is { type: string } & EthAddressWrapper;
```

Type guard that checks if the given object is an instance of EthAddressWrapper.

## Parameters

### obj

### type

`string`

## Returns

`obj is { type: string } & EthAddressWrapper`

  ### <a id="padHex"></a>padHex

[**@xylabs/eth-address**](#../README)

***

```ts
function padHex(hex, byteCount?): string;
```

## Parameters

### hex

`string`

### byteCount?

`number` = `0`

## Returns

`string`


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
[npm-badge]: https://img.shields.io/npm/v/@xylabs/eth-address.svg
[npm-link]: https://www.npmjs.com/package/@xylabs/eth-address
[codacy-badge]: https://app.codacy.com/project/badge/Grade/c8e15e14f37741c18cfb47ac7245c698
[codacy-link]: https://www.codacy.com/gh/xylabs/sdk-js/dashboard?utm_source=github.com&utm_medium=referral&utm_content=xylabs/sdk-js&utm_campaign=Badge_Grade
[codeclimate-badge]: https://api.codeclimate.com/v1/badges/c5eb068f806f0b047ea7/maintainability
[codeclimate-link]: https://codeclimate.com/github/xylabs/sdk-js/maintainability
[snyk-badge]: https://snyk.io/test/github/xylabs/sdk-js/badge.svg?targetFile=package.json
[snyk-link]: https://snyk.io/test/github/xylabs/sdk-js?targetFile=package.json

[npm-downloads-badge]: https://img.shields.io/npm/dw/@xylabs/eth-address
[npm-license-badge]: https://img.shields.io/npm/l/@xylabs/eth-address

[jsdelivr-badge]: https://data.jsdelivr.com/v1/package/npm/@xylabs/eth-address/badge
[jsdelivr-link]: https://www.jsdelivr.com/package/npm/@xylabs/eth-address

[socket-badge]: https://socket.dev/api/badge/npm/package/@xylabs/eth-address
[socket-link]: https://socket.dev/npm/package/@xylabs/eth-address