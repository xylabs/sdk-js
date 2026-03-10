# @xylabs/mongo

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


Base functionality used throughout XYO TypeScript/JavaScript libraries that access Mongo DB

## Reference

**@xylabs/mongo**

***

## Classes

- [BaseMongoSdk](#classes/BaseMongoSdk)
- [MongoClientWrapper](#classes/MongoClientWrapper)

## Interfaces

- [BaseMongoSdkPublicConfig](#interfaces/BaseMongoSdkPublicConfig)
- [BaseMongoSdkPrivateConfig](#interfaces/BaseMongoSdkPrivateConfig)

## Type Aliases

- [BaseMongoSdkConfig](#type-aliases/BaseMongoSdkConfig)

### classes

  ### <a id="BaseMongoSdk"></a>BaseMongoSdk

[**@xylabs/mongo**](#../README)

***

Provides a typed wrapper around common MongoDB collection operations.

## Type Parameters

### T

`T` *extends* `Document`

## Constructors

### Constructor

```ts
new BaseMongoSdk<T>(config): BaseMongoSdk<T>;
```

### Parameters

#### config

[`BaseMongoSdkConfig`](#../type-aliases/BaseMongoSdkConfig)

### Returns

`BaseMongoSdk`\<`T`\>

## Properties

### config

```ts
config: BaseMongoSdkConfig;
```

The MongoDB SDK configuration for this instance.

## Accessors

### uri

### Get Signature

```ts
get uri(): string;
```

Returns the MongoDB connection URI, either from the config or constructed from individual credential fields.

#### Returns

`string`

## Methods

### deleteMany()

```ts
deleteMany(filter): Promise<DeleteResult>;
```

Deletes all documents matching the filter.

### Parameters

#### filter

`Filter`\<`T`\>

The query filter to match documents for deletion

### Returns

`Promise`\<`DeleteResult`\>

***

### deleteOne()

```ts
deleteOne(filter): Promise<DeleteResult>;
```

Deletes the first document matching the filter.

### Parameters

#### filter

`Filter`\<`T`\>

The query filter to match a document for deletion

### Returns

`Promise`\<`DeleteResult`\>

***

### find()

```ts
find(filter): Promise<FindCursor<WithId<T>>>;
```

Finds all documents matching the filter and returns a cursor.

### Parameters

#### filter

`Filter`\<`T`\>

The query filter

### Returns

`Promise`\<`FindCursor`\<`WithId`\<`T`\>\>\>

***

### findOne()

```ts
findOne(filter): Promise<WithId<T> | null>;
```

Finds a single document matching the filter.

### Parameters

#### filter

`Filter`\<`T`\>

The query filter

### Returns

`Promise`\<`WithId`\<`T`\> \| `null`\>

The matched document, or `null` if not found

***

### insertMany()

```ts
insertMany(items, options?): Promise<InsertManyResult<T>>;
```

Inserts multiple documents into the collection.

### Parameters

#### items

`OptionalUnlessRequiredId`\<`T`\>[]

The documents to insert

#### options?

`BulkWriteOptions`

Optional bulk write options

### Returns

`Promise`\<`InsertManyResult`\<`T`\>\>

***

### insertOne()

```ts
insertOne(item, options?): Promise<InsertOneResult<T>>;
```

Inserts a single document into the collection.

### Parameters

#### item

`OptionalUnlessRequiredId`\<`T`\>

The document to insert

#### options?

`InsertOneOptions`

Optional insert options

### Returns

`Promise`\<`InsertOneResult`\<`T`\>\>

***

### replaceOne()

```ts
replaceOne(
   filter, 
   item, 
options?): Promise<UpdateResult<T>>;
```

Replaces a single document matching the filter.

### Parameters

#### filter

`Filter`\<`T`\>

The query filter to match the document

#### item

`OptionalUnlessRequiredId`\<`T`\>

The replacement document

#### options?

`ReplaceOptions`

Optional replace options

### Returns

`Promise`\<`UpdateResult`\<`T`\>\>

***

### updateOne()

```ts
updateOne(filter, fields): Promise<UpdateResult<T>>;
```

Updates a single document matching the filter without upserting.

### Parameters

#### filter

`Filter`\<`T`\>

The query filter to match the document

#### fields

`UpdateFilter`\<`T`\>

The update operations to apply

### Returns

`Promise`\<`UpdateResult`\<`T`\>\>

***

### upsertOne()

```ts
upsertOne(filter, fields): Promise<UpdateResult<T>>;
```

Updates a single document matching the filter, inserting it if it does not exist.

### Parameters

#### filter

`Filter`\<`T`\>

The query filter to match the document

#### fields

`UpdateFilter`\<`T`\>

The update operations to apply

### Returns

`Promise`\<`UpdateResult`\<`T`\>\>

***

### useCollection()

```ts
useCollection<R>(func): Promise<R>;
```

Executes a callback with access to the configured MongoDB collection.

### Type Parameters

#### R

`R`

### Parameters

#### func

(`collection`) => `R` \| `Promise`\<`R`\>

A callback receiving the typed collection

### Returns

`Promise`\<`R`\>

The result of the callback

***

### useMongo()

```ts
useMongo<R>(func): Promise<R>;
```

Executes a callback with a connected MongoClient, handling connection and disconnection.

### Type Parameters

#### R

`R`

### Parameters

#### func

(`client`) => `R` \| `Promise`\<`R`\>

A callback receiving the connected MongoClient

### Returns

`Promise`\<`R`\>

The result of the callback

  ### <a id="MongoClientWrapper"></a>MongoClientWrapper

[**@xylabs/mongo**](#../README)

***

Manages a shared pool of MongoClient instances, reusing connections by URI.

## Constructors

### Constructor

```ts
new MongoClientWrapper(
   uri, 
   maxPoolSize?, 
   closeDelay?): MongoClientWrapper;
```

### Parameters

#### uri

`string`

#### maxPoolSize?

`number`

#### closeDelay?

`number`

### Returns

`MongoClientWrapper`

## Properties

### clients

```ts
readonly static clients: Map<string, MongoClientWrapper>;
```

Global cache of wrapper instances keyed by connection URI.

## Methods

### get()

```ts
static get(
   uri, 
   poolSize?, 
   closeDelay?): MongoClientWrapper;
```

Gets or creates a cached MongoClientWrapper for the given URI.

### Parameters

#### uri

`string`

The MongoDB connection URI

#### poolSize?

`number`

Maximum connection pool size

#### closeDelay?

`number`

Delay in milliseconds before closing idle connections

### Returns

`MongoClientWrapper`

A cached or newly created wrapper instance

***

### connect()

```ts
connect(): Promise<MongoClient>;
```

Connects to MongoDB and returns the underlying MongoClient.

### Returns

`Promise`\<`MongoClient`\>

***

### disconnect()

```ts
disconnect(): Promise<number>;
```

Disconnects from MongoDB.

### Returns

`Promise`\<`number`\>

***

### initiateClose()

```ts
initiateClose(): Promise<void>;
```

Initiates a graceful close of the connection.

### Returns

`Promise`\<`void`\>

### interfaces

  ### <a id="BaseMongoSdkPrivateConfig"></a>BaseMongoSdkPrivateConfig

[**@xylabs/mongo**](#../README)

***

Private configuration options for the Mongo SDK containing connection credentials.

## Properties

### dbConnectionString?

```ts
optional dbConnectionString: string;
```

A full MongoDB connection string, used instead of individual credential fields.

***

### dbDomain?

```ts
optional dbDomain: string;
```

The MongoDB Atlas cluster domain.

***

### dbName?

```ts
optional dbName: string;
```

The database name to connect to.

***

### dbPassword?

```ts
optional dbPassword: string;
```

The password for MongoDB authentication.

***

### dbUserName?

```ts
optional dbUserName: string;
```

The username for MongoDB authentication.

  ### <a id="BaseMongoSdkPublicConfig"></a>BaseMongoSdkPublicConfig

[**@xylabs/mongo**](#../README)

***

Public configuration options for the Mongo SDK, safe to expose to clients.

## Properties

### closeDelay?

```ts
optional closeDelay: number;
```

Delay in milliseconds before closing idle connections.

***

### collection

```ts
collection: string;
```

The MongoDB collection name to operate on.

***

### maxPoolSize?

```ts
optional maxPoolSize: number;
```

Maximum number of connections in the connection pool.

### type-aliases

  ### <a id="BaseMongoSdkConfig"></a>BaseMongoSdkConfig

[**@xylabs/mongo**](#../README)

***

```ts
type BaseMongoSdkConfig = BaseMongoSdkPublicConfig & BaseMongoSdkPrivateConfig;
```

Combined public and private MongoDB SDK configuration.


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
[npm-badge]: https://img.shields.io/npm/v/@xylabs/mongo.svg
[npm-link]: https://www.npmjs.com/package/@xylabs/mongo
[codacy-badge]: https://app.codacy.com/project/badge/Grade/c8e15e14f37741c18cfb47ac7245c698
[codacy-link]: https://www.codacy.com/gh/xylabs/sdk-js/dashboard?utm_source=github.com&utm_medium=referral&utm_content=xylabs/sdk-js&utm_campaign=Badge_Grade
[codeclimate-badge]: https://api.codeclimate.com/v1/badges/c5eb068f806f0b047ea7/maintainability
[codeclimate-link]: https://codeclimate.com/github/xylabs/sdk-js/maintainability
[snyk-badge]: https://snyk.io/test/github/xylabs/sdk-js/badge.svg?targetFile=package.json
[snyk-link]: https://snyk.io/test/github/xylabs/sdk-js?targetFile=package.json

[npm-downloads-badge]: https://img.shields.io/npm/dw/@xylabs/mongo
[npm-license-badge]: https://img.shields.io/npm/l/@xylabs/mongo

[jsdelivr-badge]: https://data.jsdelivr.com/v1/package/npm/@xylabs/mongo/badge
[jsdelivr-link]: https://www.jsdelivr.com/package/npm/@xylabs/mongo

[socket-badge]: https://socket.dev/api/badge/npm/package/@xylabs/mongo
[socket-link]: https://socket.dev/npm/package/@xylabs/mongo