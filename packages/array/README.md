# @xylabs/array

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

**@xylabs/array**

***

## Functions

| Function | Description |
| ------ | ------ |
| [containsAll](#functions/containsAll) | Checks whether the source array contains every element in the target array. |
| [distinct](#functions/distinct) | Array filter callback that removes duplicate values, with correct NaN handling. Use with `array.filter(distinct)`. |
| [filterAs](#functions/filterAs) | Maps each element using the predicate and filters out nullish results. |
| [filterAsync](#functions/filterAsync) | Returns the elements of an array that meet the condition specified in a callback function. |
| [findAs](#functions/findAs) | Maps each element using the predicate and returns the first non-nullish result. |
| [findLastAs](#functions/findLastAs) | Maps each element using the predicate and returns the last non-nullish result. |
| [flatten](#functions/flatten) | Concatenates two values or arrays into a single flat array, filtering out nullish entries. |
| [uniq](#functions/uniq) | Returns a new array with duplicate values removed. |
| [uniqBy](#functions/uniqBy) | Returns a new array with duplicates removed, using a key function for comparison. |

### functions

  ### <a id="containsAll"></a>containsAll

[**@xylabs/array**](#../README)

***

```ts
function containsAll<T>(source: T[], target: T[]): boolean;
```

Checks whether the source array contains every element in the target array.

## Type Parameters

| Type Parameter |
| ------ |
| `T` |

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `source` | `T`[] | The array to search within |
| `target` | `T`[] | The elements that must all be present |

## Returns

`boolean`

True if every target element exists in source

  ### <a id="distinct"></a>distinct

[**@xylabs/array**](#../README)

***

```ts
function distinct<T>(
   value: T, 
   index: number, 
   array: T[]): boolean;
```

Array filter callback that removes duplicate values, with correct NaN handling.
Use with `array.filter(distinct)`.

## Type Parameters

| Type Parameter |
| ------ |
| `T` |

## Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `T` |
| `index` | `number` |
| `array` | `T`[] |

## Returns

`boolean`

  ### <a id="filterAs"></a>filterAs

[**@xylabs/array**](#../README)

***

```ts
function filterAs<In, Out>(x: In[], predicate: (a: In) => Out): NonNullable<Out>[];
```

Maps each element using the predicate and filters out nullish results.

## Type Parameters

| Type Parameter |
| ------ |
| `In` |
| `Out` |

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `x` | `In`[] | The input array |
| `predicate` | (`a`: `In`) => `Out` | Transform function applied to each element |

## Returns

`NonNullable`\<`Out`\>[]

Array of non-nullish transformed values

  ### <a id="filterAsync"></a>filterAsync

[**@xylabs/array**](#../README)

***

```ts
function filterAsync<T>(array: T[], predicate: (value: T, index: number, array: T[]) => Promise<boolean>): Promise<T[]>;
```

Returns the elements of an array that meet the condition specified in a callback function.

## Type Parameters

| Type Parameter |
| ------ |
| `T` |

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `array` | `T`[] | The array to filter. |
| `predicate` | (`value`: `T`, `index`: `number`, `array`: `T`[]) => `Promise`\<`boolean`\> | A function that accepts up to three arguments. The filter method calls the predicate function one time for each element in the array. |

## Returns

`Promise`\<`T`[]\>

The elements of an array that meet the condition specified in a callback function.

  ### <a id="findAs"></a>findAs

[**@xylabs/array**](#../README)

***

```ts
function findAs<In, Out>(x: In[], predicate: (a: In) => Out): NonNullable<Out> | undefined;
```

Maps each element using the predicate and returns the first non-nullish result.

## Type Parameters

| Type Parameter |
| ------ |
| `In` |
| `Out` |

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `x` | `In`[] | The input array |
| `predicate` | (`a`: `In`) => `Out` | Transform function applied to each element |

## Returns

`NonNullable`\<`Out`\> \| `undefined`

The first non-nullish transformed value, or undefined

  ### <a id="findLastAs"></a>findLastAs

[**@xylabs/array**](#../README)

***

```ts
function findLastAs<In, Out>(x: In[], predicate: (a: In) => Out): NonNullable<Out> | undefined;
```

Maps each element using the predicate and returns the last non-nullish result.

## Type Parameters

| Type Parameter |
| ------ |
| `In` |
| `Out` |

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `x` | `In`[] | The input array |
| `predicate` | (`a`: `In`) => `Out` | Transform function applied to each element |

## Returns

`NonNullable`\<`Out`\> \| `undefined`

The last non-nullish transformed value, or undefined

  ### <a id="flatten"></a>flatten

[**@xylabs/array**](#../README)

***

```ts
function flatten<T>(a?: T | ConcatArray<T>, b?: T | ConcatArray<T>): T[];
```

Concatenates two values or arrays into a single flat array, filtering out nullish entries.

## Type Parameters

| Type Parameter |
| ------ |
| `T` |

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `a?` | `T` \| `ConcatArray`\<`T`\> | First value or array |
| `b?` | `T` \| `ConcatArray`\<`T`\> | Second value or array |

## Returns

`T`[]

A flat array of non-nullish elements

  ### <a id="uniq"></a>uniq

[**@xylabs/array**](#../README)

***

```ts
function uniq<T>(arr: T[]): T[];
```

Returns a new array with duplicate values removed.

## Type Parameters

| Type Parameter |
| ------ |
| `T` |

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `arr` | `T`[] | The input array |

## Returns

`T`[]

A deduplicated array

  ### <a id="uniqBy"></a>uniqBy

[**@xylabs/array**](#../README)

***

```ts
function uniqBy<T, I>(arr: T[], iteratee: (item: T) => I): T[];
```

Returns a new array with duplicates removed, using a key function for comparison.

## Type Parameters

| Type Parameter |
| ------ |
| `T` |
| `I` |

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `arr` | `T`[] | The input array |
| `iteratee` | (`item`: `T`) => `I` | Function that returns the key to compare by |

## Returns

`T`[]

A deduplicated array keeping the first occurrence of each key


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
[npm-badge]: https://img.shields.io/npm/v/@xylabs/array.svg
[npm-link]: https://www.npmjs.com/package/@xylabs/array
[codacy-badge]: https://app.codacy.com/project/badge/Grade/c8e15e14f37741c18cfb47ac7245c698
[codacy-link]: https://www.codacy.com/gh/xylabs/sdk-js/dashboard?utm_source=github.com&utm_medium=referral&utm_content=xylabs/sdk-js&utm_campaign=Badge_Grade
[codeclimate-badge]: https://api.codeclimate.com/v1/badges/c5eb068f806f0b047ea7/maintainability
[codeclimate-link]: https://codeclimate.com/github/xylabs/sdk-js/maintainability
[snyk-badge]: https://snyk.io/test/github/xylabs/sdk-js/badge.svg?targetFile=package.json
[snyk-link]: https://snyk.io/test/github/xylabs/sdk-js?targetFile=package.json

[npm-downloads-badge]: https://img.shields.io/npm/dw/@xylabs/array
[npm-license-badge]: https://img.shields.io/npm/l/@xylabs/array

[jsdelivr-badge]: https://data.jsdelivr.com/v1/package/npm/@xylabs/array/badge
[jsdelivr-link]: https://www.jsdelivr.com/package/npm/@xylabs/array

[socket-badge]: https://socket.dev/api/badge/npm/package/@xylabs/array
[socket-link]: https://socket.dev/npm/package/@xylabs/array