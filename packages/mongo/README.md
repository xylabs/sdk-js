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

## Accessors

### uri

### Get Signature

```ts
get uri(): string;
```

#### Returns

`string`

## Methods

### deleteMany()

```ts
deleteMany(filter): Promise<DeleteResult>;
```

### Parameters

#### filter

`Filter`\<`T`\>

### Returns

`Promise`\<`DeleteResult`\>

***

### deleteOne()

```ts
deleteOne(filter): Promise<DeleteResult>;
```

### Parameters

#### filter

`Filter`\<`T`\>

### Returns

`Promise`\<`DeleteResult`\>

***

### find()

```ts
find(filter): Promise<FindCursor<WithId<T>>>;
```

### Parameters

#### filter

`Filter`\<`T`\>

### Returns

`Promise`\<`FindCursor`\<`WithId`\<`T`\>\>\>

***

### findOne()

```ts
findOne(filter): Promise<null | WithId<T>>;
```

### Parameters

#### filter

`Filter`\<`T`\>

### Returns

`Promise`\<`null` \| `WithId`\<`T`\>\>

***

### insertMany()

```ts
insertMany(items, options?): Promise<InsertManyResult<T>>;
```

### Parameters

#### items

`OptionalUnlessRequiredId`\<`T`\>[]

#### options?

`BulkWriteOptions`

### Returns

`Promise`\<`InsertManyResult`\<`T`\>\>

***

### insertOne()

```ts
insertOne(item, options?): Promise<InsertOneResult<T>>;
```

### Parameters

#### item

`OptionalUnlessRequiredId`\<`T`\>

#### options?

`InsertOneOptions`

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

### Parameters

#### filter

`Filter`\<`T`\>

#### item

`OptionalUnlessRequiredId`\<`T`\>

#### options?

`ReplaceOptions`

### Returns

`Promise`\<`UpdateResult`\<`T`\>\>

***

### updateOne()

```ts
updateOne(filter, fields): Promise<UpdateResult<T>>;
```

### Parameters

#### filter

`Filter`\<`T`\>

#### fields

`UpdateFilter`\<`T`\>

### Returns

`Promise`\<`UpdateResult`\<`T`\>\>

***

### upsertOne()

```ts
upsertOne(filter, fields): Promise<UpdateResult<T>>;
```

### Parameters

#### filter

`Filter`\<`T`\>

#### fields

`UpdateFilter`\<`T`\>

### Returns

`Promise`\<`UpdateResult`\<`T`\>\>

***

### useCollection()

```ts
useCollection<R>(func): Promise<R>;
```

### Type Parameters

#### R

`R`

### Parameters

#### func

(`collection`) => `R` \| `Promise`\<`R`\>

### Returns

`Promise`\<`R`\>

***

### useMongo()

```ts
useMongo<R>(func): Promise<R>;
```

### Type Parameters

#### R

`R`

### Parameters

#### func

(`client`) => `R` \| `Promise`\<`R`\>

### Returns

`Promise`\<`R`\>

  ### <a id="MongoClientWrapper"></a>MongoClientWrapper

[**@xylabs/mongo**](#../README)

***

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

## Methods

### get()

```ts
static get(
   uri, 
   poolSize?, 
   closeDelay?): MongoClientWrapper;
```

### Parameters

#### uri

`string`

#### poolSize?

`number`

#### closeDelay?

`number`

### Returns

`MongoClientWrapper`

***

### connect()

```ts
connect(): Promise<MongoClient>;
```

### Returns

`Promise`\<`MongoClient`\>

***

### disconnect()

```ts
disconnect(): Promise<number>;
```

### Returns

`Promise`\<`number`\>

***

### initiateClose()

```ts
initiateClose(): Promise<void>;
```

### Returns

`Promise`\<`void`\>

### interfaces

  ### <a id="BaseMongoSdkPrivateConfig"></a>BaseMongoSdkPrivateConfig

[**@xylabs/mongo**](#../README)

***

## Properties

### dbConnectionString?

```ts
optional dbConnectionString: string;
```

***

### dbDomain?

```ts
optional dbDomain: string;
```

***

### dbName?

```ts
optional dbName: string;
```

***

### dbPassword?

```ts
optional dbPassword: string;
```

***

### dbUserName?

```ts
optional dbUserName: string;
```

  ### <a id="BaseMongoSdkPublicConfig"></a>BaseMongoSdkPublicConfig

[**@xylabs/mongo**](#../README)

***

## Properties

### closeDelay?

```ts
optional closeDelay: number;
```

***

### collection

```ts
collection: string;
```

***

### maxPoolSize?

```ts
optional maxPoolSize: number;
```

### type-aliases

  ### <a id="BaseMongoSdkConfig"></a>BaseMongoSdkConfig

[**@xylabs/mongo**](#../README)

***

```ts
type BaseMongoSdkConfig = BaseMongoSdkPublicConfig & BaseMongoSdkPrivateConfig;
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