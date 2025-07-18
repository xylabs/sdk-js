# @xylabs/enum

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

**@xylabs/enum**

***

## Type Aliases

- [Enum](#type-aliases/Enum)
- [EnumKey](#type-aliases/EnumKey)
- [EnumValue](#type-aliases/EnumValue)

## Functions

- [Enum](#functions/Enum)

### functions

  ### <a id="Enum"></a>Enum

[**@xylabs/enum**](#../README)

***

```ts
function Enum<T>(obj): Enum<T>;
```

Transforms a given record object into a readonly "enum-like" structure while preserving
the literal types of its values. This allows you to use the returned object both at runtime
(for lookups) and at compile time (for strongly typed values).

To maintain literal types (i.e., prevent them from being widened to `string`, `number`, etc.),
ensure you annotate your object with `as const` before passing it to `Enum`.

## Type Parameters

### T

`T` *extends* `Record`\<`string` \| `number` \| `symbol`, `unknown`\>

A record type with string keys and any kind of values.

## Parameters

### obj

`Readonly`\<`T`\>

A readonly record object annotated with `as const`.

## Returns

[`Enum`](#../type-aliases/Enum)\<`T`\>

A readonly version of the provided record, preserving exact literal value types.

## Example

```typescript
// Defining a record with literal types using as const:
const DnsRecordType = Enum({
  A: 1,
  AAAA: 28,
  CAA: 257,
  CNAME: 5,
  DNAME: 39,
  MX: 15,
  NS: 2,
  PTR: 12,
  SOA: 6,
  SPF: 99,
  SRV: 33,
  TXT: 16,
} as const);

// DnsRecordType is now a readonly object:
// {
//   readonly A: 1;
//   readonly AAAA: 28;
//   readonly CAA: 257;
//   readonly CNAME: 5;
//   readonly DNAME: 39;
//   readonly MX: 15;
//   readonly NS: 2;
//   readonly PTR: 12;
//   readonly SOA: 6;
//   readonly SPF: 99;
//   readonly SRV: 33;
//   readonly TXT: 16;
// }
```

### type-aliases

  ### <a id="Enum"></a>Enum

[**@xylabs/enum**](#../README)

***

```ts
type Enum<T> = { readonly [K in keyof T]: T[K] };
```

A utility type that, given a `Record<string, unknown>`, returns a readonly version
of that record. This results in a type where all properties of `T` are readonly.

## Type Parameters

### T

`T` *extends* `Readonly`\<`Record`\<`string` \| `number` \| `symbol`, `unknown`\>\>

The record type to make readonly.

## Example

```typescript
// Given a record:
export const DnsRecordType = Enum({
  A: 1,
  AAAA: 28,
  CAA: 257,
  CNAME: 5,
  DNAME: 39,
  MX: 15,
  NS: 2,
  PTR: 12,
  SOA: 6,
  SPF: 99,
  SRV: 33,
  TXT: 16,
})

// Now the type inference will preserve the literal types:
export type DnsRecordType = Enum<typeof DnsRecordType>
```

  ### <a id="EnumKey"></a>EnumKey

[**@xylabs/enum**](#../README)

***

```ts
type EnumKey<T, K> = keyof K;
```

A utility type that, given an `Enum` object, returns the union of its keys.

## Type Parameters

### T

`T` *extends* `Record`\<`string` \| `number` \| `symbol`, `unknown`\>

### K

`K` = [`Enum`](#Enum)\<`T`\>

  ### <a id="EnumValue"></a>EnumValue

[**@xylabs/enum**](#../README)

***

```ts
type EnumValue<T, K> = K[keyof K];
```

A utility type that, given an `Enum` object, returns the union of its values.

## Type Parameters

### T

`T` *extends* `Record`\<`string` \| `number` \| `symbol`, `unknown`\>

### K

`K` = [`Enum`](#Enum)\<`T`\>


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
[npm-badge]: https://img.shields.io/npm/v/@xylabs/enum.svg
[npm-link]: https://www.npmjs.com/package/@xylabs/enum
[codacy-badge]: https://app.codacy.com/project/badge/Grade/c8e15e14f37741c18cfb47ac7245c698
[codacy-link]: https://www.codacy.com/gh/xylabs/sdk-js/dashboard?utm_source=github.com&utm_medium=referral&utm_content=xylabs/sdk-js&utm_campaign=Badge_Grade
[codeclimate-badge]: https://api.codeclimate.com/v1/badges/c5eb068f806f0b047ea7/maintainability
[codeclimate-link]: https://codeclimate.com/github/xylabs/sdk-js/maintainability
[snyk-badge]: https://snyk.io/test/github/xylabs/sdk-js/badge.svg?targetFile=package.json
[snyk-link]: https://snyk.io/test/github/xylabs/sdk-js?targetFile=package.json

[npm-downloads-badge]: https://img.shields.io/npm/dw/@xylabs/enum
[npm-license-badge]: https://img.shields.io/npm/l/@xylabs/enum

[jsdelivr-badge]: https://data.jsdelivr.com/v1/package/npm/@xylabs/enum/badge
[jsdelivr-link]: https://www.jsdelivr.com/package/npm/@xylabs/enum

[socket-badge]: https://socket.dev/api/badge/npm/package/@xylabs/enum
[socket-link]: https://socket.dev/npm/package/@xylabs/enum