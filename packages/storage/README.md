# @xylabs/storage

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

**@xylabs/storage**

***

## Interfaces

- [ReadonlyKeyValueStore](#interfaces/ReadonlyKeyValueStore)
- [KeyValueStore](#interfaces/KeyValueStore)

### interfaces

  ### <a id="KeyValueStore"></a>KeyValueStore

[**@xylabs/storage**](#../README)

***

A read/write storage device.

## Extends

- [`ReadonlyKeyValueStore`](#ReadonlyKeyValueStore)\<`TValue`, `TKey`\>

## Type Parameters

### TValue

`TValue`

### TKey

`TKey` = `string`

## Methods

### get()

```ts
get(key): Promisable<undefined | TValue>;
```

Returns a promise that resolves to the value for the given key.

### Parameters

#### key

`TKey`

The key to get the value for.

### Returns

`Promisable`\<`undefined` \| `TValue`\>

### Inherited from

[`ReadonlyKeyValueStore`](#ReadonlyKeyValueStore).[`get`](ReadonlyKeyValueStore.md#get)

***

### keys()?

```ts
optional keys(): Promisable<TKey[]>;
```

The keys an array of keys.

### Returns

`Promisable`\<`TKey`[]\>

### Inherited from

[`ReadonlyKeyValueStore`](#ReadonlyKeyValueStore).[`keys`](ReadonlyKeyValueStore.md#keys)

***

### clear()?

```ts
optional clear(): Promisable<void>;
```

### Returns

`Promisable`\<`void`\>

***

### delete()

```ts
delete(key): Promisable<void>;
```

### Parameters

#### key

`TKey`

### Returns

`Promisable`\<`void`\>

***

### set()

```ts
set(key, value): Promisable<void>;
```

### Parameters

#### key

`TKey`

#### value

`TValue`

### Returns

`Promisable`\<`void`\>

  ### <a id="ReadonlyKeyValueStore"></a>ReadonlyKeyValueStore

[**@xylabs/storage**](#../README)

***

A readonly storage device.

## Extended by

- [`KeyValueStore`](#KeyValueStore)

## Type Parameters

### TValue

`TValue`

### TKey

`TKey` = `string`

## Methods

### get()

```ts
get(key): Promisable<undefined | TValue>;
```

Returns a promise that resolves to the value for the given key.

### Parameters

#### key

`TKey`

The key to get the value for.

### Returns

`Promisable`\<`undefined` \| `TValue`\>

***

### keys()?

```ts
optional keys(): Promisable<TKey[]>;
```

The keys an array of keys.

### Returns

`Promisable`\<`TKey`[]\>


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
[npm-badge]: https://img.shields.io/npm/v/@xylabs/storage.svg
[npm-link]: https://www.npmjs.com/package/@xylabs/storage
[codacy-badge]: https://app.codacy.com/project/badge/Grade/c8e15e14f37741c18cfb47ac7245c698
[codacy-link]: https://www.codacy.com/gh/xylabs/sdk-js/dashboard?utm_source=github.com&utm_medium=referral&utm_content=xylabs/sdk-js&utm_campaign=Badge_Grade
[codeclimate-badge]: https://api.codeclimate.com/v1/badges/c5eb068f806f0b047ea7/maintainability
[codeclimate-link]: https://codeclimate.com/github/xylabs/sdk-js/maintainability
[snyk-badge]: https://snyk.io/test/github/xylabs/sdk-js/badge.svg?targetFile=package.json
[snyk-link]: https://snyk.io/test/github/xylabs/sdk-js?targetFile=package.json

[npm-downloads-badge]: https://img.shields.io/npm/dw/@xylabs/storage
[npm-license-badge]: https://img.shields.io/npm/l/@xylabs/storage

[jsdelivr-badge]: https://data.jsdelivr.com/v1/package/npm/@xylabs/storage/badge
[jsdelivr-link]: https://www.jsdelivr.com/package/npm/@xylabs/storage

[socket-badge]: https://socket.dev/api/badge/npm/package/@xylabs/storage
[socket-link]: https://socket.dev/npm/package/@xylabs/storage