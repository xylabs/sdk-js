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

| Class | Description |
| ------ | ------ |
| [PromiseEx](#classes/PromiseEx) | An extended Promise that carries an optional attached value and supports cancellation. The value can be inspected via the `then` or `value` methods to conditionally cancel. |

## Interfaces

| Interface | Description |
| ------ | ------ |
| [PromiseType](#interfaces/PromiseType) | An interface representing any thenable (promise-like) object. |

## Type Aliases

| Type Alias | Description |
| ------ | ------ |
| [PromiseExSubFunc](#type-aliases/PromiseExSubFunc) | A resolve/reject callback used within PromiseEx. |
| [PromiseExFunc](#type-aliases/PromiseExFunc) | The executor function passed to the PromiseEx constructor. |
| [PromiseExValueFunc](#type-aliases/PromiseExValueFunc) | A callback that inspects the attached value and returns whether to cancel the promise. |
| [Promisable](#type-aliases/Promisable) | A value that may be a Promise, PromiseEx, or a plain synchronous value. |
| [PromisableArray](#type-aliases/PromisableArray) | A Promisable that resolves to an array. |
| [OptionalPromisable](#type-aliases/OptionalPromisable) | A Promisable that may resolve to undefined. |
| [OptionalPromisableArray](#type-aliases/OptionalPromisableArray) | A Promisable array where elements may be undefined. |
| [NullablePromisable](#type-aliases/NullablePromisable) | A Promisable that may resolve to null. |
| [NullablePromisableArray](#type-aliases/NullablePromisableArray) | A Promisable array where elements may be null. |
| [AsyncMutex](#type-aliases/AsyncMutex) | - |
| [AnyNonPromise](#type-aliases/AnyNonPromise) | Any non-promise typed value, excluding thenables. |

## Functions

| Function | Description |
| ------ | ------ |
| [fulfilled](#functions/fulfilled) | For use with Promise.allSettled to filter only successful results |
| [fulfilledValues](#functions/fulfilledValues) | For use with Promise.allSettled to reduce to only successful result values |
| [rejected](#functions/rejected) | For use with Promise.allSettled to filter only rejected results |
| [toPromise](#functions/toPromise) | Wraps a value in a Promise if it is not already one. |
| [isPromise](#functions/isPromise) | Type guard that checks whether a value is a Promise instance. |

### classes

  ### <a id="PromiseEx"></a>PromiseEx

[**@xylabs/promise**](#../README)

***

An extended Promise that carries an optional attached value and supports cancellation.
The value can be inspected via the `then` or `value` methods to conditionally cancel.

## Extends

- `Promise`\<`T`\>

## Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `T` | - |
| `V` | `void` |

## Constructors

### Constructor

```ts
new PromiseEx<T, V>(func: PromiseExFunc<T>, value?: V): PromiseEx<T, V>;
```

### Parameters

| Parameter | Type |
| ------ | ------ |
| `func` | [`PromiseExFunc`](#../type-aliases/PromiseExFunc)\<`T`\> |
| `value?` | `V` |

### Returns

`PromiseEx`\<`T`, `V`\>

### Overrides

```ts
Promise<T>.constructor
```

## Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| <a id="cancelled"></a> `cancelled?` | `boolean` | Whether the promise has been cancelled via a value callback. |

## Methods

### then()

```ts
then<TResult1, TResult2>(
   onfulfilled?: (value: T) => TResult1 | PromiseLike<TResult1> | null, 
   onrejected?: 
  | (reason: unknown) => TResult2 | PromiseLike<TResult2>
  | null, 
onvalue?: (value?: V) => boolean): Promise<TResult1 | TResult2>;
```

Attaches callbacks for the resolution and/or rejection of the Promise.

### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `TResult1` | `T` |
| `TResult2` | `never` |

### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `onfulfilled?` | (`value`: `T`) => `TResult1` \| `PromiseLike`\<`TResult1`\> \| `null` | The callback to execute when the Promise is resolved. |
| `onrejected?` | \| (`reason`: `unknown`) => `TResult2` \| `PromiseLike`\<`TResult2`\> \| `null` | The callback to execute when the Promise is rejected. |
| `onvalue?` | (`value?`: `V`) => `boolean` | - |

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
value(onvalue?: (value?: V) => boolean): PromiseEx<T, V>;
```

Inspects the attached value via the callback; if it returns true, marks the promise as cancelled.

### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `onvalue?` | (`value?`: `V`) => `boolean` | A callback that receives the attached value and returns whether to cancel. |

### Returns

`PromiseEx`\<`T`, `V`\>

This instance for chaining.

### functions

  ### <a id="fulfilled"></a>fulfilled

[**@xylabs/promise**](#../README)

***

```ts
function fulfilled<T>(val: PromiseSettledResult<T>): val is PromiseFulfilledResult<T>;
```

For use with Promise.allSettled to filter only successful results

## Type Parameters

| Type Parameter |
| ------ |
| `T` |

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `val` | `PromiseSettledResult`\<`T`\> | - |

## Returns

`val is PromiseFulfilledResult<T>`

  ### <a id="fulfilledValues"></a>fulfilledValues

[**@xylabs/promise**](#../README)

***

```ts
function fulfilledValues<T>(previousValue: T[], currentValue: PromiseSettledResult<T>): T[];
```

For use with Promise.allSettled to reduce to only successful result values

## Type Parameters

| Type Parameter |
| ------ |
| `T` |

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `previousValue` | `T`[] | - |
| `currentValue` | `PromiseSettledResult`\<`T`\> | - |

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

## Call Signature

```ts
function isPromise(value: unknown): value is Promise<unknown>;
```

Type guard that checks whether a value is a Promise instance.

### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `unknown` |

### Returns

`value is Promise<unknown>`

## Call Signature

```ts
function isPromise<T>(value: T): value is Extract<T, Promise<unknown>>;
```

Type guard that checks whether a value is a Promise instance.

### Type Parameters

| Type Parameter |
| ------ |
| `T` |

### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `T` |

### Returns

`value is Extract<T, Promise<unknown>>`

  ### <a id="rejected"></a>rejected

[**@xylabs/promise**](#../README)

***

```ts
function rejected<T>(val: PromiseSettledResult<T>): val is PromiseRejectedResult;
```

For use with Promise.allSettled to filter only rejected results

## Type Parameters

| Type Parameter |
| ------ |
| `T` |

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `val` | `PromiseSettledResult`\<`T`\> | - |

## Returns

`val is PromiseRejectedResult`

  ### <a id="toPromise"></a>toPromise

[**@xylabs/promise**](#../README)

***

```ts
function toPromise<T>(value: Promisable<T>): Promise<T>;
```

Wraps a value in a Promise if it is not already one.

## Type Parameters

| Type Parameter |
| ------ |
| `T` |

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `value` | [`Promisable`](#../type-aliases/Promisable)\<`T`\> | A value that may or may not be a Promise. |

## Returns

`Promise`\<`T`\>

A Promise resolving to the value.

### interfaces

  ### <a id="PromiseType"></a>PromiseType

[**@xylabs/promise**](#../README)

***

An interface representing any thenable (promise-like) object.

## Properties

| Property | Type |
| ------ | ------ |
| <a id="then"></a> `then` | () => `unknown` |

### type-aliases

  ### <a id="AnyNonPromise"></a>AnyNonPromise

[**@xylabs/promise**](#../README)

***

```ts
type AnyNonPromise = Exclude<TypedValue, PromiseType>;
```

Any non-promise typed value, excluding thenables.

  ### <a id="AsyncMutex"></a>AsyncMutex

[**@xylabs/promise**](#../README)

***

```ts
type AsyncMutex<T> = Promise<T>;
```

## Type Parameters

| Type Parameter |
| ------ |
| `T` |

## Description

Used to document promises that are being used as Mutexes

  ### <a id="NullablePromisable"></a>NullablePromisable

[**@xylabs/promise**](#../README)

***

```ts
type NullablePromisable<T, V> = Promisable<T | null, V>;
```

A Promisable that may resolve to null.

## Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `T` | - |
| `V` | `never` |

  ### <a id="NullablePromisableArray"></a>NullablePromisableArray

[**@xylabs/promise**](#../README)

***

```ts
type NullablePromisableArray<T, V> = PromisableArray<T | null, V>;
```

A Promisable array where elements may be null.

## Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `T` | - |
| `V` | `never` |

  ### <a id="OptionalPromisable"></a>OptionalPromisable

[**@xylabs/promise**](#../README)

***

```ts
type OptionalPromisable<T, V> = Promisable<T | undefined, V>;
```

A Promisable that may resolve to undefined.

## Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `T` | - |
| `V` | `never` |

  ### <a id="OptionalPromisableArray"></a>OptionalPromisableArray

[**@xylabs/promise**](#../README)

***

```ts
type OptionalPromisableArray<T, V> = PromisableArray<T | undefined, V>;
```

A Promisable array where elements may be undefined.

## Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `T` | - |
| `V` | `never` |

  ### <a id="Promisable"></a>Promisable

[**@xylabs/promise**](#../README)

***

```ts
type Promisable<T, V> = PromiseEx<T, V> | Promise<T> | T;
```

A value that may be a Promise, PromiseEx, or a plain synchronous value.

## Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `T` | - |
| `V` | `never` |

  ### <a id="PromisableArray"></a>PromisableArray

[**@xylabs/promise**](#../README)

***

```ts
type PromisableArray<T, V> = Promisable<T[], V>;
```

A Promisable that resolves to an array.

## Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `T` | - |
| `V` | `never` |

  ### <a id="PromiseExFunc"></a>PromiseExFunc

[**@xylabs/promise**](#../README)

***

```ts
type PromiseExFunc<T> = (resolve?: PromiseExSubFunc<T, void>, reject?: PromiseExSubFunc<T, void>) => void;
```

The executor function passed to the PromiseEx constructor.

## Type Parameters

| Type Parameter |
| ------ |
| `T` |

## Parameters

| Parameter | Type |
| ------ | ------ |
| `resolve?` | [`PromiseExSubFunc`](#PromiseExSubFunc)\<`T`, `void`\> |
| `reject?` | [`PromiseExSubFunc`](#PromiseExSubFunc)\<`T`, `void`\> |

## Returns

`void`

  ### <a id="PromiseExSubFunc"></a>PromiseExSubFunc

[**@xylabs/promise**](#../README)

***

```ts
type PromiseExSubFunc<T, TResult> = (value: T) => TResult;
```

A resolve/reject callback used within PromiseEx.

## Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `T` | - |
| `TResult` | `T` |

## Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `T` |

## Returns

`TResult`

  ### <a id="PromiseExValueFunc"></a>PromiseExValueFunc

[**@xylabs/promise**](#../README)

***

```ts
type PromiseExValueFunc<V> = (value?: V) => boolean;
```

A callback that inspects the attached value and returns whether to cancel the promise.

## Type Parameters

| Type Parameter |
| ------ |
| `V` |

## Parameters

| Parameter | Type |
| ------ | ------ |
| `value?` | `V` |

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