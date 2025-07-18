# @xylabs/indexed-db

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

**@xylabs/indexed-db**

***

## Classes

- [IndexedDbKeyValueStore](#classes/IndexedDbKeyValueStore)

## Interfaces

- [ObjectStore](#interfaces/ObjectStore)

## Type Aliases

- [IndexDirection](#type-aliases/IndexDirection)
- [IndexDescription](#type-aliases/IndexDescription)

## Variables

- [IndexSeparator](#variables/IndexSeparator)

## Functions

- [buildStandardIndexName](#functions/buildStandardIndexName)
- [checkDbNeedsUpgrade](#functions/checkDbNeedsUpgrade)
- [createStoreDuringUpgrade](#functions/createStoreDuringUpgrade)
- [getExistingIndexes](#functions/getExistingIndexes)
- [withDb](#functions/withDb)
- [withDbByVersion](#functions/withDbByVersion)
- [withReadOnlyStore](#functions/withReadOnlyStore)
- [withReadWriteStore](#functions/withReadWriteStore)
- [withStore](#functions/withStore)

### classes

  ### <a id="IndexedDbKeyValueStore"></a>IndexedDbKeyValueStore

[**@xylabs/indexed-db**](#../README)

***

An IndexedDB key/value store.

## Type Parameters

### T

`T` *extends* `DBSchema`

### S

`S` *extends* `StoreNames`\<`T`\>

## Implements

- `KeyValueStore`\<`StoreValue`\<`T`, `S`\>, `StoreKey`\<`T`, `S`\>\>

## Constructors

### Constructor

```ts
new IndexedDbKeyValueStore<T, S>(dbName, storeName): IndexedDbKeyValueStore<T, S>;
```

### Parameters

#### dbName

`string`

#### storeName

`S`

### Returns

`IndexedDbKeyValueStore`\<`T`, `S`\>

## Properties

### dbName

```ts
readonly dbName: string;
```

***

### storeName

```ts
readonly storeName: S;
```

## Methods

### clear()?

```ts
optional clear(): Promise<void>;
```

### Returns

`Promise`\<`void`\>

### Implementation of

```ts
KeyValueStore.clear
```

***

### delete()

```ts
delete(key): Promise<void>;
```

### Parameters

#### key

`StoreKey`\<`T`, `S`\>

### Returns

`Promise`\<`void`\>

### Implementation of

```ts
KeyValueStore.delete
```

***

### get()

```ts
get(key): Promise<undefined | StoreValue<T, S>>;
```

Returns a promise that resolves to the value for the given key.

### Parameters

#### key

`StoreKey`\<`T`, `S`\>

The key to get the value for.

### Returns

`Promise`\<`undefined` \| `StoreValue`\<`T`, `S`\>\>

### Implementation of

```ts
KeyValueStore.get
```

***

### keys()?

```ts
optional keys(): Promise<StoreKey<T, S>[]>;
```

The keys an array of keys.

### Returns

`Promise`\<`StoreKey`\<`T`, `S`\>[]\>

### Implementation of

```ts
KeyValueStore.keys
```

***

### set()

```ts
set(key, value): Promise<void>;
```

### Parameters

#### key

`StoreKey`\<`T`, `S`\>

#### value

`StoreValue`\<`T`, `S`\>

### Returns

`Promise`\<`void`\>

### Implementation of

```ts
KeyValueStore.set
```

***

### withDb()

```ts
withDb<R>(callback): Promise<R>;
```

### Type Parameters

#### R

`R` = `StoreValue`\<`T`, `S`\>

### Parameters

#### callback

(`db`) => `R` \| `Promise`\<`R`\>

### Returns

`Promise`\<`R`\>

### functions

  ### <a id="buildStandardIndexName"></a>buildStandardIndexName

[**@xylabs/indexed-db**](#../README)

***

```ts
function buildStandardIndexName(index): string;
```

Given an index description, this will build the index
name in standard form

## Parameters

### index

[`IndexDescription`](#../type-aliases/IndexDescription)

The index description

## Returns

`string`

The index name in standard form

  ### <a id="checkDbNeedsUpgrade"></a>checkDbNeedsUpgrade

[**@xylabs/indexed-db**](#../README)

***

```ts
function checkDbNeedsUpgrade(
   dbName, 
   stores, 
logger?): Promise<number>;
```

## Parameters

### dbName

`string`

### stores

`Record`\<`string`, [`IndexDescription`](#../type-aliases/IndexDescription)[]\>

### logger?

`Logger`

## Returns

`Promise`\<`number`\>

  ### <a id="createStoreDuringUpgrade"></a>createStoreDuringUpgrade

[**@xylabs/indexed-db**](#../README)

***

```ts
function createStoreDuringUpgrade<DBTypes>(
   db, 
   storeName, 
   indexes, 
   logger?): void;
```

## Type Parameters

### DBTypes

`DBTypes` *extends* `unknown` = `unknown`

## Parameters

### db

`IDBPDatabase`\<`DBTypes`\>

### storeName

`StoreNames`\<`DBTypes`\>

### indexes

[`IndexDescription`](#../type-aliases/IndexDescription)[]

### logger?

`Logger`

## Returns

`void`

  ### <a id="getExistingIndexes"></a>getExistingIndexes

[**@xylabs/indexed-db**](#../README)

***

```ts
function getExistingIndexes<T>(
   db, 
   storeName, 
logger?): Promise<null | IndexDescription[]>;
```

## Type Parameters

### T

`T` *extends* `object` = `object`

## Parameters

### db

`string` | `IDBPDatabase`\<[`ObjectStore`](#../interfaces/ObjectStore)\<`T`\>\>

### storeName

`StoreNames`\<[`ObjectStore`](#../interfaces/ObjectStore)\<`T`\>\>

### logger?

`Logger`

## Returns

`Promise`\<`null` \| [`IndexDescription`](#../type-aliases/IndexDescription)[]\>

  ### <a id="withDb"></a>withDb

[**@xylabs/indexed-db**](#../README)

***

```ts
function withDb<DBTypes, R>(
   dbName, 
   callback, 
   expectedIndexes?, 
   logger?, 
lock?): Promise<R>;
```

## Type Parameters

### DBTypes

`DBTypes` *extends* `unknown` = `unknown`

### R

`R` = `object`

## Parameters

### dbName

`string`

### callback

(`db`) => `R` \| `Promise`\<`R`\>

### expectedIndexes?

`Record`\<`string`, [`IndexDescription`](#../type-aliases/IndexDescription)[]\>

### logger?

`Logger`

### lock?

`boolean` = `true`

## Returns

`Promise`\<`R`\>

  ### <a id="withDbByVersion"></a>withDbByVersion

[**@xylabs/indexed-db**](#../README)

***

```ts
function withDbByVersion<DBTypes, R>(
   dbName, 
   callback, 
   version?, 
   expectedIndexes?, 
   logger?, 
lock?): Promise<R>;
```

## Type Parameters

### DBTypes

`DBTypes` *extends* `unknown` = `unknown`

### R

`R` = `object`

## Parameters

### dbName

`string`

### callback

(`db`) => `R` \| `Promise`\<`R`\>

### version?

`number`

### expectedIndexes?

`Record`\<`string`, [`IndexDescription`](#../type-aliases/IndexDescription)[]\>

### logger?

`Logger`

### lock?

`boolean` = `true`

## Returns

`Promise`\<`R`\>

  ### <a id="withReadOnlyStore"></a>withReadOnlyStore

[**@xylabs/indexed-db**](#../README)

***

```ts
function withReadOnlyStore<T, R>(
   db, 
   storeName, 
   callback, 
logger?): Promise<R>;
```

## Type Parameters

### T

`T` *extends* `object` = `object`

### R

`R` = `T`

## Parameters

### db

`IDBPDatabase`\<[`ObjectStore`](#../interfaces/ObjectStore)\<`T`\>\>

### storeName

`StoreNames`\<[`ObjectStore`](#../interfaces/ObjectStore)\<`T`\>\>

### callback

(`store`) => `R` \| `Promise`\<`R`\>

### logger?

`Logger`

## Returns

`Promise`\<`R`\>

  ### <a id="withReadWriteStore"></a>withReadWriteStore

[**@xylabs/indexed-db**](#../README)

***

```ts
function withReadWriteStore<T, R>(
   db, 
   storeName, 
   callback, 
logger?): Promise<R>;
```

## Type Parameters

### T

`T` *extends* `object` = `object`

### R

`R` = `T`

## Parameters

### db

`IDBPDatabase`\<[`ObjectStore`](#../interfaces/ObjectStore)\<`T`\>\>

### storeName

`StoreNames`\<[`ObjectStore`](#../interfaces/ObjectStore)\<`T`\>\>

### callback

(`store`) => `R` \| `Promise`\<`R`\>

### logger?

`Logger`

## Returns

`Promise`\<`R`\>

  ### <a id="withStore"></a>withStore

[**@xylabs/indexed-db**](#../README)

***

```ts
function withStore<T, R, M>(
   db, 
   storeName, 
   callback, 
   mode, 
logger?): Promise<R>;
```

## Type Parameters

### T

`T` *extends* `object` = `object`

### R

`R` = `T`

### M

`M` *extends* `"readonly"` \| `"readwrite"` = `"readonly"`

## Parameters

### db

`IDBPDatabase`\<[`ObjectStore`](#../interfaces/ObjectStore)\<`T`\>\>

### storeName

`StoreNames`\<[`ObjectStore`](#../interfaces/ObjectStore)\<`T`\>\>

### callback

(`store`) => `R` \| `Promise`\<`R`\>

### mode

`M`

### logger?

`Logger`

## Returns

`Promise`\<`R`\>

### interfaces

  ### <a id="ObjectStore"></a>ObjectStore

[**@xylabs/indexed-db**](#../README)

***

## Type Parameters

### T

`T` *extends* `EmptyObject` = `EmptyObject`

## Indexable

```ts
[s: string]: T
```

### type-aliases

  ### <a id="IndexDescription"></a>IndexDescription

[**@xylabs/indexed-db**](#../README)

***

```ts
type IndexDescription = object;
```

Description of index(es) to be created on a store

## Properties

### key

```ts
key: Record<string, IndexDirection>;
```

The key(s) to index

***

### multiEntry?

```ts
optional multiEntry: boolean;
```

Is the indexed value an array

***

### unique?

```ts
optional unique: boolean;
```

If true, the index must enforce uniqueness on the key

  ### <a id="IndexDirection"></a>IndexDirection

[**@xylabs/indexed-db**](#../README)

***

```ts
type IndexDirection = -1 | 1;
```

The index direction (1 for ascending, -1 for descending)

### variables

  ### <a id="IndexSeparator"></a>IndexSeparator

[**@xylabs/indexed-db**](#../README)

***

```ts
const IndexSeparator: "-" = '-';
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
[npm-badge]: https://img.shields.io/npm/v/@xylabs/indexed-db.svg
[npm-link]: https://www.npmjs.com/package/@xylabs/indexed-db
[codacy-badge]: https://app.codacy.com/project/badge/Grade/c8e15e14f37741c18cfb47ac7245c698
[codacy-link]: https://www.codacy.com/gh/xylabs/sdk-js/dashboard?utm_source=github.com&utm_medium=referral&utm_content=xylabs/sdk-js&utm_campaign=Badge_Grade
[codeclimate-badge]: https://api.codeclimate.com/v1/badges/c5eb068f806f0b047ea7/maintainability
[codeclimate-link]: https://codeclimate.com/github/xylabs/sdk-js/maintainability
[snyk-badge]: https://snyk.io/test/github/xylabs/sdk-js/badge.svg?targetFile=package.json
[snyk-link]: https://snyk.io/test/github/xylabs/sdk-js?targetFile=package.json

[npm-downloads-badge]: https://img.shields.io/npm/dw/@xylabs/indexed-db
[npm-license-badge]: https://img.shields.io/npm/l/@xylabs/indexed-db

[jsdelivr-badge]: https://data.jsdelivr.com/v1/package/npm/@xylabs/indexed-db/badge
[jsdelivr-link]: https://www.jsdelivr.com/package/npm/@xylabs/indexed-db

[socket-badge]: https://socket.dev/api/badge/npm/package/@xylabs/indexed-db
[socket-link]: https://socket.dev/npm/package/@xylabs/indexed-db