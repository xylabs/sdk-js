# @xylabs/promise

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

**@xylabs/promise**

***

## Classes

- [PromiseEx](#classes/PromiseEx)

## Interfaces

- [PromiseType](#interfaces/PromiseType)

## Type Aliases

- [PromiseExSubFunc](#type-aliases/PromiseExSubFunc)
- [PromiseExFunc](#type-aliases/PromiseExFunc)
- [PromiseExValueFunc](#type-aliases/PromiseExValueFunc)
- [AnyNonPromise](#type-aliases/AnyNonPromise)
- [Promisable](#type-aliases/Promisable)
- [PromisableArray](#type-aliases/PromisableArray)
- [OptionalPromisable](#type-aliases/OptionalPromisable)
- [OptionalPromisableArray](#type-aliases/OptionalPromisableArray)
- [NullablePromisable](#type-aliases/NullablePromisable)
- [NullablePromisableArray](#type-aliases/NullablePromisableArray)
- [AsyncMutex](#type-aliases/AsyncMutex)

## Functions

- [fulfilled](#functions/fulfilled)
- [fulfilledValues](#functions/fulfilledValues)
- [isPromise](#functions/isPromise)
- [rejected](#functions/rejected)
- [toPromise](#functions/toPromise)

### classes

  ### <a id="PromiseEx"></a>PromiseEx

[**@xylabs/promise**](#../README)

***

## Extends

- `Promise`\<`T`\>

## Type Parameters

### T

`T`

### V

`V` = `void`

## Constructors

### Constructor

```ts
new PromiseEx<T, V>(func, value?): PromiseEx<T, V>;
```

### Parameters

#### func

[`PromiseExFunc`](#../type-aliases/PromiseExFunc)\<`T`\>

#### value?

`V`

### Returns

`PromiseEx`\<`T`, `V`\>

### Overrides

```ts
Promise<T>.constructor
```

## Properties

### cancelled?

```ts
optional cancelled: boolean;
```

## Methods

### then()

```ts
then<TResult1, TResult2>(
   onfulfilled?, 
   onrejected?, 
onvalue?): Promise<TResult1 | TResult2>;
```

Attaches callbacks for the resolution and/or rejection of the Promise.

### Type Parameters

#### TResult1

`TResult1` = `T`

#### TResult2

`TResult2` = `never`

### Parameters

#### onfulfilled?

The callback to execute when the Promise is resolved.

`null` | (`value`) => `TResult1` \| `PromiseLike`\<`TResult1`\>

#### onrejected?

The callback to execute when the Promise is rejected.

`null` | (`reason`) => `TResult2` \| `PromiseLike`\<`TResult2`\>

#### onvalue?

(`value?`) => `boolean`

### Returns

`Promise`\<`TResult1` \| `TResult2`\>

A Promise for the completion of which ever callback is executed.

### Overrides

```ts
Promise.then
```

***

### value()

```ts
value(onvalue?): PromiseEx<T, V>;
```

### Parameters

#### onvalue?

(`value?`) => `boolean`

### Returns

`PromiseEx`\<`T`, `V`\>

### functions

  ### <a id="fulfilled"></a>fulfilled

[**@xylabs/promise**](#../README)

***

```ts
function fulfilled<T>(val): val is PromiseFulfilledResult<T>;
```

For use with Promise.allSettled to filter only successful results

## Type Parameters

### T

`T`

## Parameters

### val

`PromiseSettledResult`\<`T`\>

## Returns

`val is PromiseFulfilledResult<T>`

  ### <a id="fulfilledValues"></a>fulfilledValues

[**@xylabs/promise**](#../README)

***

```ts
function fulfilledValues<T>(previousValue, currentValue): T[];
```

For use with Promise.allSettled to reduce to only successful result values

## Type Parameters

### T

`T`

## Parameters

### previousValue

`T`[]

### currentValue

`PromiseSettledResult`\<`T`\>

## Returns

`T`[]

## Examples

```ts
const resolved = Promise.resolve('resolved')
const rejected = Promise.reject('rejected')
const settled = await Promise.allSettled([resolved, rejected])
const results = settled.reduce(fulfilledValues, [] as string[])
// results === [ 'resolved' ]
```

```ts
const resolved = Promise.resolve('resolved')
const rejected = Promise.reject('rejected')
const settled = await Promise.allSettled([resolved, rejected])
const results = settled.reduce<string[]>(fulfilledValues, [])
// results === [ 'resolved' ]
```

  ### <a id="isPromise"></a>isPromise

[**@xylabs/promise**](#../README)

***

```ts
function isPromise(value): value is Promise<unknown>;
```

## Parameters

### value

`unknown`

## Returns

`value is Promise<unknown>`

  ### <a id="rejected"></a>rejected

[**@xylabs/promise**](#../README)

***

```ts
function rejected<T>(val): val is PromiseRejectedResult;
```

For use with Promise.allSettled to filter only rejected results

## Type Parameters

### T

`T`

## Parameters

### val

`PromiseSettledResult`\<`T`\>

## Returns

`val is PromiseRejectedResult`

  ### <a id="toPromise"></a>toPromise

[**@xylabs/promise**](#../README)

***

```ts
function toPromise<T>(value): Promise<T>;
```

## Type Parameters

### T

`T`

## Parameters

### value

[`Promisable`](#../type-aliases/Promisable)\<`T`\>

## Returns

`Promise`\<`T`\>

### interfaces

  ### <a id="PromiseType"></a>PromiseType

[**@xylabs/promise**](#../README)

***

## Properties

### then()

```ts
then: () => unknown;
```

### Returns

`unknown`

### type-aliases

  ### <a id="AnyNonPromise"></a>AnyNonPromise

[**@xylabs/promise**](#../README)

***

```ts
type AnyNonPromise = Exclude<TypedValue, PromiseType>;
```

  ### <a id="AsyncMutex"></a>AsyncMutex

[**@xylabs/promise**](#../README)

***

```ts
type AsyncMutex<T> = Promise<T>;
```

## Type Parameters

### T

`T`

## Description

Used to document promises that are being used as Mutexes

  ### <a id="NullablePromisable"></a>NullablePromisable

[**@xylabs/promise**](#../README)

***

```ts
type NullablePromisable<T, V> = Promisable<T | null, V>;
```

## Type Parameters

### T

`T`

### V

`V` = `never`

  ### <a id="NullablePromisableArray"></a>NullablePromisableArray

[**@xylabs/promise**](#../README)

***

```ts
type NullablePromisableArray<T, V> = PromisableArray<T | null, V>;
```

## Type Parameters

### T

`T`

### V

`V` = `never`

  ### <a id="OptionalPromisable"></a>OptionalPromisable

[**@xylabs/promise**](#../README)

***

```ts
type OptionalPromisable<T, V> = Promisable<T | undefined, V>;
```

## Type Parameters

### T

`T`

### V

`V` = `never`

  ### <a id="OptionalPromisableArray"></a>OptionalPromisableArray

[**@xylabs/promise**](#../README)

***

```ts
type OptionalPromisableArray<T, V> = PromisableArray<T | undefined, V>;
```

## Type Parameters

### T

`T`

### V

`V` = `never`

  ### <a id="Promisable"></a>Promisable

[**@xylabs/promise**](#../README)

***

```ts
type Promisable<T, V> = PromiseEx<T, V> | Promise<T> | T;
```

## Type Parameters

### T

`T`

### V

`V` = `never`

  ### <a id="PromisableArray"></a>PromisableArray

[**@xylabs/promise**](#../README)

***

```ts
type PromisableArray<T, V> = Promisable<T[], V>;
```

## Type Parameters

### T

`T`

### V

`V` = `never`

  ### <a id="PromiseExFunc"></a>PromiseExFunc

[**@xylabs/promise**](#../README)

***

```ts
type PromiseExFunc<T> = (resolve?, reject?) => void;
```

## Type Parameters

### T

`T`

## Parameters

### resolve?

[`PromiseExSubFunc`](#PromiseExSubFunc)\<`T`, `void`\>

### reject?

[`PromiseExSubFunc`](#PromiseExSubFunc)\<`T`, `void`\>

## Returns

`void`

  ### <a id="PromiseExSubFunc"></a>PromiseExSubFunc

[**@xylabs/promise**](#../README)

***

```ts
type PromiseExSubFunc<T, TResult> = (value) => TResult;
```

## Type Parameters

### T

`T`

### TResult

`TResult` = `T`

## Parameters

### value

`T`

## Returns

`TResult`

  ### <a id="PromiseExValueFunc"></a>PromiseExValueFunc

[**@xylabs/promise**](#../README)

***

```ts
type PromiseExValueFunc<V> = (value?) => boolean;
```

## Type Parameters

### V

`V`

## Parameters

### value?

`V`

## Returns

`boolean`


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
[npm-badge]: https://img.shields.io/npm/v/@xylabs/promise.svg
[npm-link]: https://www.npmjs.com/package/@xylabs/promise
[codacy-badge]: https://app.codacy.com/project/badge/Grade/c8e15e14f37741c18cfb47ac7245c698
[codacy-link]: https://www.codacy.com/gh/xylabs/sdk-js/dashboard?utm_source=github.com&utm_medium=referral&utm_content=xylabs/sdk-js&utm_campaign=Badge_Grade
[codeclimate-badge]: https://api.codeclimate.com/v1/badges/c5eb068f806f0b047ea7/maintainability
[codeclimate-link]: https://codeclimate.com/github/xylabs/sdk-js/maintainability
[snyk-badge]: https://snyk.io/test/github/xylabs/sdk-js/badge.svg?targetFile=package.json
[snyk-link]: https://snyk.io/test/github/xylabs/sdk-js?targetFile=package.json

[npm-downloads-badge]: https://img.shields.io/npm/dw/@xylabs/promise
[npm-license-badge]: https://img.shields.io/npm/l/@xylabs/promise

[jsdelivr-badge]: https://data.jsdelivr.com/v1/package/npm/@xylabs/promise/badge
[jsdelivr-link]: https://www.jsdelivr.com/package/npm/@xylabs/promise

[socket-badge]: https://socket.dev/api/badge/npm/package/@xylabs/promise
[socket-link]: https://socket.dev/npm/package/@xylabs/promise