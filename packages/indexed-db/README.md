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

| Class | Description |
| ------ | ------ |
| [IndexedDbKeyValueStore](#classes/IndexedDbKeyValueStore) | An IndexedDB key/value store. |

## Interfaces

| Interface | Description |
| ------ | ------ |
| [ObjectStore](#interfaces/ObjectStore) | Generic IndexedDB schema type that maps store names to their value types. |

## Type Aliases

| Type Alias | Description |
| ------ | ------ |
| [IndexDirection](#type-aliases/IndexDirection) | The index direction (1 for ascending, -1 for descending) |
| [IndexDescription](#type-aliases/IndexDescription) | Description of index(es) to be created on a store |

## Variables

| Variable | Description |
| ------ | ------ |
| [IndexSeparator](#variables/IndexSeparator) | Separator used between key names when building standard index names. |

## Functions

| Function | Description |
| ------ | ------ |
| [buildStandardIndexName](#functions/buildStandardIndexName) | Given an index description, this will build the index name in standard form |
| [checkDbNeedsUpgrade](#functions/checkDbNeedsUpgrade) | Checks whether any store in the database needs an upgrade and returns the appropriate version number. |
| [createStoreDuringUpgrade](#functions/createStoreDuringUpgrade) | Creates an object store with the specified indexes during a version upgrade transaction. |
| [getExistingIndexes](#functions/getExistingIndexes) | Retrieves the existing index descriptions for a store. Accepts either a database instance or a database name. |
| [withDb](#functions/withDb) | Opens an IndexedDB database, automatically upgrading if needed, and passes it to the callback. Uses a mutex to serialize access to the same database by default. |
| [withDbByVersion](#functions/withDbByVersion) | Opens an IndexedDB database at a specific version, handling upgrade events, and passes it to the callback. The database is automatically closed after the callback completes. |
| [withReadOnlyStore](#functions/withReadOnlyStore) | Opens a read-only transaction on the specified store and passes it to the callback. |
| [withReadWriteStore](#functions/withReadWriteStore) | Opens a read-write transaction on the specified store and passes it to the callback. |
| [withStore](#functions/withStore) | Opens a transaction on the specified store with the given mode and passes the store to the callback. If the store does not exist, the callback receives null. |

### classes

  ### <a id="IndexedDbKeyValueStore"></a>IndexedDbKeyValueStore

[**@xylabs/indexed-db**](#../README)

***

An IndexedDB key/value store.

## Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* `DBSchema` |
| `S` *extends* `StoreNames`\<`T`\> |

## Implements

- `KeyValueStore`\<`StoreValue`\<`T`, `S`\>, `StoreKey`\<`T`, `S`\>\>

## Constructors

### Constructor

```ts
new IndexedDbKeyValueStore<T, S>(dbName: string, storeName: S): IndexedDbKeyValueStore<T, S>;
```

### Parameters

| Parameter | Type |
| ------ | ------ |
| `dbName` | `string` |
| `storeName` | `S` |

### Returns

`IndexedDbKeyValueStore`\<`T`, `S`\>

## Properties

| Property | Modifier | Type | Description |
| ------ | ------ | ------ | ------ |
| <a id="dbname"></a> `dbName` | `readonly` | `string` | The name of the IndexedDB database. |
| <a id="storename"></a> `storeName` | `readonly` | `S` | The name of the object store within the database. |

## Methods

### clear()?

```ts
optional clear(): Promise<void>;
```

Removes all entries from the store.

### Returns

`Promise`\<`void`\>

### Implementation of

```ts
KeyValueStore.clear
```

***

### delete()

```ts
delete(key: StoreKey<T, S>): Promise<void>;
```

Deletes the entry with the given key.

### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `key` | `StoreKey`\<`T`, `S`\> | The key of the entry to delete |

### Returns

`Promise`\<`void`\>

### Implementation of

```ts
KeyValueStore.delete
```

***

### get()

```ts
get(key: StoreKey<T, S>): Promise<StoreValue<T, S> | undefined>;
```

Retrieves the value associated with the given key.

### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `key` | `StoreKey`\<`T`, `S`\> | The key to look up |

### Returns

`Promise`\<`StoreValue`\<`T`, `S`\> \| `undefined`\>

The value, or undefined if not found

### Implementation of

```ts
KeyValueStore.get
```

***

### keys()?

```ts
optional keys(): Promise<StoreKey<T, S>[]>;
```

Returns all keys in the store.

### Returns

`Promise`\<`StoreKey`\<`T`, `S`\>[]\>

### Implementation of

```ts
KeyValueStore.keys
```

***

### set()

```ts
set(key: StoreKey<T, S>, value: StoreValue<T, S>): Promise<void>;
```

Sets a value for the given key, creating or updating the entry.

### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `key` | `StoreKey`\<`T`, `S`\> | The key to set |
| `value` | `StoreValue`\<`T`, `S`\> | The value to store |

### Returns

`Promise`\<`void`\>

### Implementation of

```ts
KeyValueStore.set
```

***

### withDb()

```ts
withDb<R>(callback: (db: IDBPDatabase<T>) => R | Promise<R>): Promise<R>;
```

Opens the underlying IndexedDB database and passes it to the callback.

### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `R` | `StoreValue`\<`T`, `S`\> |

### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `callback` | (`db`: `IDBPDatabase`\<`T`\>) => `R` \| `Promise`\<`R`\> | Function to execute with the database |

### Returns

`Promise`\<`R`\>

The result of the callback

### functions

  ### <a id="buildStandardIndexName"></a>buildStandardIndexName

[**@xylabs/indexed-db**](#../README)

***

```ts
function buildStandardIndexName(index: IndexDescription): string;
```

Given an index description, this will build the index
name in standard form

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `index` | [`IndexDescription`](#../type-aliases/IndexDescription) | The index description |

## Returns

`string`

The index name in standard form

  ### <a id="checkDbNeedsUpgrade"></a>checkDbNeedsUpgrade

[**@xylabs/indexed-db**](#../README)

***

```ts
function checkDbNeedsUpgrade(
   dbName: string, 
   stores: Record<string, IndexDescription[]>, 
logger?: Logger): Promise<number>;
```

Checks whether any store in the database needs an upgrade and returns the appropriate version number.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `dbName` | `string` | The name of the database to check |
| `stores` | `Record`\<`string`, [`IndexDescription`](#../type-aliases/IndexDescription)[]\> | Map of store names to their expected index descriptions |
| `logger?` | `Logger` | Optional logger for diagnostics |

## Returns

`Promise`\<`number`\>

The version to open (current version + 1 if upgrade needed, otherwise current version)

  ### <a id="createStoreDuringUpgrade"></a>createStoreDuringUpgrade

[**@xylabs/indexed-db**](#../README)

***

```ts
function createStoreDuringUpgrade<DBTypes>(
   db: IDBPDatabase<DBTypes>, 
   storeName: StoreNames<DBTypes>, 
   indexes: IndexDescription[], 
   logger?: Logger): void;
```

Creates an object store with the specified indexes during a version upgrade transaction.

## Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `DBTypes` *extends* `unknown` | `unknown` |

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `db` | `IDBPDatabase`\<`DBTypes`\> | The IndexedDB database instance (during upgrade) |
| `storeName` | `StoreNames`\<`DBTypes`\> | The name of the store to create |
| `indexes` | [`IndexDescription`](#../type-aliases/IndexDescription)[] | The index descriptions to create on the store |
| `logger?` | `Logger` | Optional logger for diagnostics |

## Returns

`void`

  ### <a id="getExistingIndexes"></a>getExistingIndexes

[**@xylabs/indexed-db**](#../README)

***

```ts
function getExistingIndexes<T>(
   db: 
  | string
  | IDBPDatabase<ObjectStore<T>>, 
   storeName: StoreNames<ObjectStore<T>>, 
logger?: Logger): Promise<IndexDescription[] | null>;
```

Retrieves the existing index descriptions for a store. Accepts either a database instance or a database name.

## Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `T` *extends* `object` | `object` |

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `db` | \| `string` \| `IDBPDatabase`\<[`ObjectStore`](#../interfaces/ObjectStore)\<`T`\>\> | The IndexedDB database instance or database name |
| `storeName` | `StoreNames`\<[`ObjectStore`](#../interfaces/ObjectStore)\<`T`\>\> | The name of the store to inspect |
| `logger?` | `Logger` | Optional logger for diagnostics |

## Returns

`Promise`\<[`IndexDescription`](#../type-aliases/IndexDescription)[] \| `null`\>

An array of index descriptions, or null if the store does not exist

  ### <a id="withDb"></a>withDb

[**@xylabs/indexed-db**](#../README)

***

```ts
function withDb<DBTypes, R>(
   dbName: string, 
   callback: (db: IDBPDatabase<DBTypes>) => R | Promise<R>, 
   expectedIndexes?: Record<string, IndexDescription[]>, 
   logger?: Logger, 
lock?: boolean): Promise<R>;
```

Opens an IndexedDB database, automatically upgrading if needed, and passes it to the callback.
Uses a mutex to serialize access to the same database by default.

## Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `DBTypes` *extends* `unknown` | `unknown` |
| `R` | `object` |

## Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `dbName` | `string` | `undefined` | The name of the database to open |
| `callback` | (`db`: `IDBPDatabase`\<`DBTypes`\>) => `R` \| `Promise`\<`R`\> | `undefined` | Function to execute with the opened database |
| `expectedIndexes?` | `Record`\<`string`, [`IndexDescription`](#../type-aliases/IndexDescription)[]\> | `undefined` | Optional map of store names to their expected indexes (triggers upgrade check) |
| `logger?` | `Logger` | `undefined` | Optional logger for diagnostics |
| `lock?` | `boolean` | `true` | Whether to use a mutex to serialize access (defaults to true) |

## Returns

`Promise`\<`R`\>

The result of the callback

  ### <a id="withDbByVersion"></a>withDbByVersion

[**@xylabs/indexed-db**](#../README)

***

```ts
function withDbByVersion<DBTypes, R>(
   dbName: string, 
   callback: (db: IDBPDatabase<DBTypes>) => R | Promise<R>, 
   version?: number, 
   expectedIndexes?: Record<string, IndexDescription[]>, 
   logger?: Logger, 
lock?: boolean): Promise<R>;
```

Opens an IndexedDB database at a specific version, handling upgrade events, and passes it to the callback.
The database is automatically closed after the callback completes.

## Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `DBTypes` *extends* `unknown` | `unknown` |
| `R` | `object` |

## Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `dbName` | `string` | `undefined` | The name of the database to open |
| `callback` | (`db`: `IDBPDatabase`\<`DBTypes`\>) => `R` \| `Promise`\<`R`\> | `undefined` | Function to execute with the opened database |
| `version?` | `number` | `undefined` | Optional specific version to open (undefined for latest) |
| `expectedIndexes?` | `Record`\<`string`, [`IndexDescription`](#../type-aliases/IndexDescription)[]\> | `undefined` | Optional map of store names to indexes to create during upgrade |
| `logger?` | `Logger` | `undefined` | Optional logger for diagnostics |
| `lock?` | `boolean` | `true` | Whether to use a mutex to serialize access (defaults to true) |

## Returns

`Promise`\<`R`\>

The result of the callback

  ### <a id="withReadOnlyStore"></a>withReadOnlyStore

[**@xylabs/indexed-db**](#../README)

***

```ts
function withReadOnlyStore<T, R>(
   db: IDBPDatabase<ObjectStore<T>>, 
   storeName: StoreNames<ObjectStore<T>>, 
   callback: (store: 
  | IDBPObjectStore<ObjectStore<T>, [StoreNames<ObjectStore<T>>], StoreNames<ObjectStore<T>>, "readonly">
  | null) => R | Promise<R>, 
logger?: Logger): Promise<R>;
```

Opens a read-only transaction on the specified store and passes it to the callback.

## Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `T` *extends* `object` | `object` |
| `R` | `T` |

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `db` | `IDBPDatabase`\<[`ObjectStore`](#../interfaces/ObjectStore)\<`T`\>\> | The IndexedDB database instance |
| `storeName` | `StoreNames`\<[`ObjectStore`](#../interfaces/ObjectStore)\<`T`\>\> | The name of the object store to open |
| `callback` | (`store`: \| `IDBPObjectStore`\<[`ObjectStore`](#../interfaces/ObjectStore)\<`T`\>, \[`StoreNames`\<[`ObjectStore`](#../interfaces/ObjectStore)\<`T`\>\>\], `StoreNames`\<[`ObjectStore`](#../interfaces/ObjectStore)\<`T`\>\>, `"readonly"`\> \| `null`) => `R` \| `Promise`\<`R`\> | Function to execute with the read-only store |
| `logger?` | `Logger` | Optional logger for diagnostics |

## Returns

`Promise`\<`R`\>

The result of the callback

  ### <a id="withReadWriteStore"></a>withReadWriteStore

[**@xylabs/indexed-db**](#../README)

***

```ts
function withReadWriteStore<T, R>(
   db: IDBPDatabase<ObjectStore<T>>, 
   storeName: StoreNames<ObjectStore<T>>, 
   callback: (store: 
  | IDBPObjectStore<ObjectStore<T>, [StoreNames<ObjectStore<T>>], StoreNames<ObjectStore<T>>, "readwrite">
  | null) => R | Promise<R>, 
logger?: Logger): Promise<R>;
```

Opens a read-write transaction on the specified store and passes it to the callback.

## Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `T` *extends* `object` | `object` |
| `R` | `T` |

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `db` | `IDBPDatabase`\<[`ObjectStore`](#../interfaces/ObjectStore)\<`T`\>\> | The IndexedDB database instance |
| `storeName` | `StoreNames`\<[`ObjectStore`](#../interfaces/ObjectStore)\<`T`\>\> | The name of the object store to open |
| `callback` | (`store`: \| `IDBPObjectStore`\<[`ObjectStore`](#../interfaces/ObjectStore)\<`T`\>, \[`StoreNames`\<[`ObjectStore`](#../interfaces/ObjectStore)\<`T`\>\>\], `StoreNames`\<[`ObjectStore`](#../interfaces/ObjectStore)\<`T`\>\>, `"readwrite"`\> \| `null`) => `R` \| `Promise`\<`R`\> | Function to execute with the read-write store |
| `logger?` | `Logger` | Optional logger for diagnostics |

## Returns

`Promise`\<`R`\>

The result of the callback

  ### <a id="withStore"></a>withStore

[**@xylabs/indexed-db**](#../README)

***

```ts
function withStore<T, R, M>(
   db: IDBPDatabase<ObjectStore<T>>, 
   storeName: StoreNames<ObjectStore<T>>, 
   callback: (store: 
  | IDBPObjectStore<ObjectStore<T>, [StoreNames<ObjectStore<T>>], StoreNames<ObjectStore<T>>, M>
  | null) => R | Promise<R>, 
   mode: M, 
logger?: Logger): Promise<R>;
```

Opens a transaction on the specified store with the given mode and passes the store to the callback.
If the store does not exist, the callback receives null.

## Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `T` *extends* `object` | `object` |
| `R` | `T` |
| `M` *extends* `"readonly"` \| `"readwrite"` | `"readonly"` |

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `db` | `IDBPDatabase`\<[`ObjectStore`](#../interfaces/ObjectStore)\<`T`\>\> | The IndexedDB database instance |
| `storeName` | `StoreNames`\<[`ObjectStore`](#../interfaces/ObjectStore)\<`T`\>\> | The name of the object store to open |
| `callback` | (`store`: \| `IDBPObjectStore`\<[`ObjectStore`](#../interfaces/ObjectStore)\<`T`\>, \[`StoreNames`\<[`ObjectStore`](#../interfaces/ObjectStore)\<`T`\>\>\], `StoreNames`\<[`ObjectStore`](#../interfaces/ObjectStore)\<`T`\>\>, `M`\> \| `null`) => `R` \| `Promise`\<`R`\> | Function to execute with the store (or null if it doesn't exist) |
| `mode` | `M` | The transaction mode ('readonly' or 'readwrite') |
| `logger?` | `Logger` | Optional logger for diagnostics |

## Returns

`Promise`\<`R`\>

The result of the callback

### interfaces

  ### <a id="ObjectStore"></a>ObjectStore

[**@xylabs/indexed-db**](#../README)

***

Generic IndexedDB schema type that maps store names to their value types.

## Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `T` *extends* `EmptyObject` | `EmptyObject` |

## Indexable

```ts
[s: string]: T
```

### type-aliases

  ### <a id="IndexDescription"></a>IndexDescription

[**@xylabs/indexed-db**](#../README)

***

```ts
type IndexDescription = {
  key: Record<string, IndexDirection>;
  multiEntry?: boolean;
  unique?: boolean;
};
```

Description of index(es) to be created on a store

## Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| <a id="key"></a> `key` | `Record`\<`string`, [`IndexDirection`](#IndexDirection)\> | The key(s) to index |
| <a id="multientry"></a> `multiEntry?` | `boolean` | Is the indexed value an array |
| <a id="unique"></a> `unique?` | `boolean` | If true, the index must enforce uniqueness on the key |

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

Separator used between key names when building standard index names.


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