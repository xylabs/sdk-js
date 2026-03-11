# @xylabs/typeof

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

**@xylabs/typeof**

***

## Type Aliases

| Type Alias | Description |
| ------ | ------ |
| [Brand](#type-aliases/Brand) | Creates a branded type by intersecting base type T with brand type B, enabling nominal typing in TypeScript. |
| [IdentityFunction](#type-aliases/IdentityFunction) | A type guard function that narrows an unknown value to type T. |
| [FieldType](#type-aliases/FieldType) | Union of string literals representing the possible types of an object field. |
| [ObjectTypeShape](#type-aliases/ObjectTypeShape) | Describes the expected shape of an object by mapping each key to its expected field type. |
| [TypeOfTypes](#type-aliases/TypeOfTypes) | Union of string literals representing the possible results of the extended `typeOf` function. |
| [TypedValue](#type-aliases/TypedValue) | A value that can appear in a typed object tree (primitives, objects, arrays, functions, and symbols). |
| [TypedKey](#type-aliases/TypedKey) | A valid key for a typed object. Defaults to string | number | symbol unless narrowed by T. |
| [TypedObject](#type-aliases/TypedObject) | An object whose keys are TypedKey and whose values are TypedValue. |
| [TypedArray](#type-aliases/TypedArray) | An array of TypedValue elements. |
| [AnyFunction](#type-aliases/AnyFunction) | A function type that accepts any arguments and returns unknown. |
| [RecordKey](#type-aliases/RecordKey) | A union of valid object key types. |

## Functions

| Function | Description |
| ------ | ------ |
| [isTypedKey](#functions/isTypedKey) | Type guard that checks whether a value is a valid TypedKey (string, bigint, number, or symbol). |
| [isTypedValue](#functions/isTypedValue) | Type guard that checks whether a value is a valid TypedValue. |
| [isTypedArray](#functions/isTypedArray) | Type guard that checks whether a value is a TypedArray (an array where every element is a TypedValue). |
| [isValidTypedFieldPair](#functions/isValidTypedFieldPair) | Type guard that checks whether a key-value pair has a valid TypedKey and TypedValue. |
| [isTypedObject](#functions/isTypedObject) | Type guard that checks whether a value is a TypedObject (an object with TypedKey keys and TypedValue values). |
| [ifDefined](#functions/ifDefined) | Invokes the callback only if the value is neither null nor undefined. |
| [ifTypeOf](#functions/ifTypeOf) | Invokes the callback if the value matches the specified type, with an optional additional predicate. |
| [isUndefined](#functions/isUndefined) | Type guard that checks whether a value is undefined. |
| [isDefined](#functions/isDefined) | Type guard that checks whether a value is not undefined. |
| [isNull](#functions/isNull) | Type guard that checks whether a value is null. |
| [isDefinedNotNull](#functions/isDefinedNotNull) | Type guard that checks whether a value is neither undefined nor null. |
| [isUndefinedOrNull](#functions/isUndefinedOrNull) | Type guard that checks whether a value is undefined or null. |
| [isBigInt](#functions/isBigInt) | Type guard that checks whether a value is a bigint. |
| [isString](#functions/isString) | Type guard that checks whether a value is a string. |
| [isNumber](#functions/isNumber) | Type guard that checks whether a value is a number. |
| [isObject](#functions/isObject) | Type guard that checks whether a value is a plain object (not null and not an array). |
| [isArray](#functions/isArray) | Type guard that checks whether a value is an array. |
| [isFunction](#functions/isFunction) | Type guard that checks whether a value is a function. |
| [isSymbol](#functions/isSymbol) | Type guard that checks whether a value is a symbol. |
| [isEmptyObject](#functions/isEmptyObject) | Type guard that checks whether a value is an object with no own keys. |
| [isEmptyString](#functions/isEmptyString) | Type guard that checks whether a value is an empty string. |
| [isEmptyArray](#functions/isEmptyArray) | Type guard that checks whether a value is an empty array. |
| [isPopulatedArray](#functions/isPopulatedArray) | Type guard that checks whether a value is a non-empty array. |
| [isEmpty](#functions/isEmpty) | Type guard that checks whether a value is empty (empty string, empty array, or empty object). |
| [isFalsy](#functions/isFalsy) | Type guard that checks whether a value is falsy (0, null, undefined, false, '', or 0n). |
| [isTruthy](#functions/isTruthy) | Type guard that checks whether a value is truthy (not 0, null, undefined, false, '', or 0n). |
| [isBoolean](#functions/isBoolean) | Type guard that checks whether a value is a boolean. |
| [isDateString](#functions/isDateString) | Type guard that checks whether a value is a string that can be parsed as a valid date. |
| [isDate](#functions/isDate) | Type guard that checks whether a value is a Date instance. |
| [isRegExp](#functions/isRegExp) | Type guard that checks whether a value is a RegExp instance. |
| [isError](#functions/isError) | Type guard that checks whether a value is an Error instance. |
| [isPromise](#functions/isPromise) | Type guard that checks whether a value is a Promise instance. |
| [isPromiseLike](#functions/isPromiseLike) | Type guard that checks whether a value is promise-like (has a `then` method). |
| [isMap](#functions/isMap) | Type guard that checks whether a value is a Map instance. |
| [isArrayBufferView](#functions/isArrayBufferView) | Type guard that checks whether a value is an ArrayBufferView (e.g., TypedArray or DataView). |
| [isSet](#functions/isSet) | Type guard that checks whether a value is a Set instance. |
| [isWeakMap](#functions/isWeakMap) | Type guard that checks whether a value is a WeakMap instance. |
| [isWeakSet](#functions/isWeakSet) | Type guard that checks whether a value is a WeakSet instance. |
| [isDataView](#functions/isDataView) | Type guard that checks whether a value is a DataView instance. |
| [isBlob](#functions/isBlob) | Type guard that checks whether a value is a Blob instance. |
| [isFile](#functions/isFile) | Type guard that checks whether a value is a File instance. |
| [isType](#functions/isType) | Checks whether a value matches the expected field type, with correct handling for arrays and nulls. |
| [typeOf](#functions/typeOf) | Extended typeof that distinguishes arrays from objects (unlike native `typeof`). |
| [validateType](#functions/validateType) | Validates that a value matches the expected type, returning the value and any errors. |

### functions

  ### <a id="ifDefined"></a>ifDefined

[**@xylabs/typeof**](#../README)

***

```ts
function ifDefined<T>(value: T, func: (value: T) => void): T | undefined;
```

Invokes the callback only if the value is neither null nor undefined.

## Type Parameters

| Type Parameter |
| ------ |
| `T` |

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `value` | `T` | The value to check. |
| `func` | (`value`: `T`) => `void` | The callback to invoke with the value if it is defined. |

## Returns

`T` \| `undefined`

The value if defined, or undefined otherwise.

  ### <a id="ifTypeOf"></a>ifTypeOf

[**@xylabs/typeof**](#../README)

***

```ts
function ifTypeOf<T, R>(
   typeName: TypeOfTypes, 
   value: unknown, 
   trueFunc: (value: T) => R, 
   isFunc?: (value: T) => boolean): R | undefined;
```

Invokes the callback if the value matches the specified type, with an optional additional predicate.

## Type Parameters

| Type Parameter |
| ------ |
| `T` |
| `R` |

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `typeName` | [`TypeOfTypes`](#../type-aliases/TypeOfTypes) | The expected type name to match against. |
| `value` | `unknown` | The value to check. |
| `trueFunc` | (`value`: `T`) => `R` | The callback to invoke if the type matches. |
| `isFunc?` | (`value`: `T`) => `boolean` | Optional additional predicate that must also return true. |

## Returns

`R` \| `undefined`

The result of trueFunc if the type matches (and isFunc passes), or undefined.

  ### <a id="isArray"></a>isArray

[**@xylabs/typeof**](#../README)

***

## Call Signature

```ts
function isArray(value: unknown): value is readonly unknown[];
```

Type guard that checks whether a value is an array.

### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `unknown` |

### Returns

`value is readonly unknown[]`

## Call Signature

```ts
function isArray<T>(value: T): value is Extract<T, readonly unknown[]>;
```

Type guard that checks whether a value is an array.

### Type Parameters

| Type Parameter |
| ------ |
| `T` |

### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `T` |

### Returns

`value is Extract<T, readonly unknown[]>`

  ### <a id="isArrayBufferView"></a>isArrayBufferView

[**@xylabs/typeof**](#../README)

***

## Call Signature

```ts
function isArrayBufferView(value: unknown): value is ArrayBufferView<ArrayBufferLike>;
```

Type guard that checks whether a value is an ArrayBufferView (e.g., TypedArray or DataView).

### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `unknown` |

### Returns

`value is ArrayBufferView<ArrayBufferLike>`

## Call Signature

```ts
function isArrayBufferView<T>(value: T): value is Extract<T, ArrayBufferView<ArrayBufferLike>>;
```

Type guard that checks whether a value is an ArrayBufferView (e.g., TypedArray or DataView).

### Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* `ArrayBufferView`\<`ArrayBufferLike`\> |

### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `T` |

### Returns

`value is Extract<T, ArrayBufferView<ArrayBufferLike>>`

  ### <a id="isBigInt"></a>isBigInt

[**@xylabs/typeof**](#../README)

***

## Call Signature

```ts
function isBigInt(value: unknown): value is bigint;
```

Type guard that checks whether a value is a bigint.

### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `unknown` |

### Returns

`value is bigint`

## Call Signature

```ts
function isBigInt<T>(value: T): value is Extract<T, bigint>;
```

Type guard that checks whether a value is a bigint.

### Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* `bigint` |

### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `T` |

### Returns

`value is Extract<T, bigint>`

  ### <a id="isBlob"></a>isBlob

[**@xylabs/typeof**](#../README)

***

## Call Signature

```ts
function isBlob(value: unknown): value is Blob;
```

Type guard that checks whether a value is a Blob instance.

### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `unknown` |

### Returns

`value is Blob`

## Call Signature

```ts
function isBlob<T>(value: T): value is Extract<T, Blob>;
```

Type guard that checks whether a value is a Blob instance.

### Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* `Blob` |

### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `T` |

### Returns

`value is Extract<T, Blob>`

  ### <a id="isBoolean"></a>isBoolean

[**@xylabs/typeof**](#../README)

***

## Call Signature

```ts
function isBoolean(value: unknown): value is boolean;
```

Type guard that checks whether a value is a boolean.

### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `unknown` |

### Returns

`value is boolean`

## Call Signature

```ts
function isBoolean<T>(value: T): value is Extract<T, boolean>;
```

Type guard that checks whether a value is a boolean.

### Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* `boolean` |

### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `T` |

### Returns

`value is Extract<T, boolean>`

  ### <a id="isDataView"></a>isDataView

[**@xylabs/typeof**](#../README)

***

## Call Signature

```ts
function isDataView(value: unknown): value is DataView<ArrayBufferLike>;
```

Type guard that checks whether a value is a DataView instance.

### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `unknown` |

### Returns

`value is DataView<ArrayBufferLike>`

## Call Signature

```ts
function isDataView<T>(value: T): value is Extract<T, DataView<ArrayBufferLike>>;
```

Type guard that checks whether a value is a DataView instance.

### Type Parameters

| Type Parameter |
| ------ |
| `T` |

### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `T` |

### Returns

`value is Extract<T, DataView<ArrayBufferLike>>`

  ### <a id="isDate"></a>isDate

[**@xylabs/typeof**](#../README)

***

## Call Signature

```ts
function isDate(value: unknown): value is Date;
```

Type guard that checks whether a value is a Date instance.

### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `unknown` |

### Returns

`value is Date`

## Call Signature

```ts
function isDate<T>(value: T): value is Extract<T, Date>;
```

Type guard that checks whether a value is a Date instance.

### Type Parameters

| Type Parameter |
| ------ |
| `T` |

### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `T` |

### Returns

`value is Extract<T, Date>`

  ### <a id="isDateString"></a>isDateString

[**@xylabs/typeof**](#../README)

***

## Call Signature

```ts
function isDateString(value: unknown): value is string;
```

Type guard that checks whether a value is a string that can be parsed as a valid date.

### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `unknown` |

### Returns

`value is string`

## Call Signature

```ts
function isDateString<T>(value: T): value is Extract<T, string>;
```

Type guard that checks whether a value is a string that can be parsed as a valid date.

### Type Parameters

| Type Parameter |
| ------ |
| `T` |

### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `T` |

### Returns

`value is Extract<T, string>`

  ### <a id="isDefined"></a>isDefined

[**@xylabs/typeof**](#../README)

***

```ts
function isDefined<T>(value: T): value is Exclude<T, undefined>;
```

Type guard that checks whether a value is not undefined.

## Type Parameters

| Type Parameter |
| ------ |
| `T` |

## Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `T` |

## Returns

`value is Exclude<T, undefined>`

  ### <a id="isDefinedNotNull"></a>isDefinedNotNull

[**@xylabs/typeof**](#../README)

***

```ts
function isDefinedNotNull<T>(value: T): value is Exclude<T, null | undefined>;
```

Type guard that checks whether a value is neither undefined nor null.

## Type Parameters

| Type Parameter |
| ------ |
| `T` |

## Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `T` |

## Returns

value is Exclude\<T, null \| undefined\>

  ### <a id="isEmpty"></a>isEmpty

[**@xylabs/typeof**](#../README)

***

## Call Signature

```ts
function isEmpty<T>(value: unknown): value is T;
```

Type guard that checks whether a value is empty (empty string, empty array, or empty object).

### Type Parameters

| Type Parameter |
| ------ |
| `T` |

### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `unknown` |

### Returns

`value is T`

## Call Signature

```ts
function isEmpty<K, V, T>(value: T): value is Extract<T, Record<K, never>>;
```

Type guard that checks whether a value is empty (empty string, empty array, or empty object).

### Type Parameters

| Type Parameter |
| ------ |
| `K` *extends* [`RecordKey`](#../type-aliases/RecordKey) |
| `V` |
| `T` *extends* `Record`\<`K`, `V`\> |

### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `T` |

### Returns

`value is Extract<T, Record<K, never>>`

## Call Signature

```ts
function isEmpty<T>(value: T): value is Extract<T, never[]>;
```

Type guard that checks whether a value is empty (empty string, empty array, or empty object).

### Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* `unknown`[] |

### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `T` |

### Returns

`value is Extract<T, never[]>`

  ### <a id="isEmptyArray"></a>isEmptyArray

[**@xylabs/typeof**](#../README)

***

## Call Signature

```ts
function isEmptyArray(value: unknown): value is [];
```

Type guard that checks whether a value is an empty array.

### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `unknown` |

### Returns

`value is []`

## Call Signature

```ts
function isEmptyArray<T>(value: T): value is Extract<T, unknown[]>;
```

Type guard that checks whether a value is an empty array.

### Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* `unknown`[] |

### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `T` |

### Returns

`value is Extract<T, unknown[]>`

  ### <a id="isEmptyObject"></a>isEmptyObject

[**@xylabs/typeof**](#../README)

***

## Call Signature

```ts
function isEmptyObject(value: unknown): value is {};
```

Type guard that checks whether a value is an object with no own keys.

### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `unknown` |

### Returns

`value is {}`

## Call Signature

```ts
function isEmptyObject<K, V, T>(value: T): value is Extract<T, Record<K, never>>;
```

Type guard that checks whether a value is an object with no own keys.

### Type Parameters

| Type Parameter |
| ------ |
| `K` *extends* [`RecordKey`](#../type-aliases/RecordKey) |
| `V` |
| `T` *extends* `Record`\<`K`, `V`\> |

### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `T` |

### Returns

`value is Extract<T, Record<K, never>>`

  ### <a id="isEmptyString"></a>isEmptyString

[**@xylabs/typeof**](#../README)

***

## Call Signature

```ts
function isEmptyString(value: unknown): value is "";
```

Type guard that checks whether a value is an empty string.

### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `unknown` |

### Returns

`value is ""`

## Call Signature

```ts
function isEmptyString<T>(value: T): value is Extract<T, "">;
```

Type guard that checks whether a value is an empty string.

### Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* `string` |

### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `T` |

### Returns

`value is Extract<T, "">`

  ### <a id="isError"></a>isError

[**@xylabs/typeof**](#../README)

***

## Call Signature

```ts
function isError(value: unknown): value is Error;
```

Type guard that checks whether a value is an Error instance.

### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `unknown` |

### Returns

`value is Error`

## Call Signature

```ts
function isError<T>(value: T): value is Extract<T, Error>;
```

Type guard that checks whether a value is an Error instance.

### Type Parameters

| Type Parameter |
| ------ |
| `T` |

### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `T` |

### Returns

`value is Extract<T, Error>`

  ### <a id="isFalsy"></a>isFalsy

[**@xylabs/typeof**](#../README)

***

## Call Signature

```ts
function isFalsy<T>(value: T): value is Extract<T, false | "" | 0 | 0n | null | undefined>;
```

Type guard that checks whether a value is falsy (0, null, undefined, false, '', or 0n).

### Type Parameters

| Type Parameter |
| ------ |
| `T` |

### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `T` |

### Returns

value is Extract\<T, false \| "" \| 0 \| 0n \| null \| undefined\>

## Call Signature

```ts
function isFalsy<T>(value: T): value is Extract<T, false>;
```

Type guard that checks whether a value is falsy (0, null, undefined, false, '', or 0n).

### Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* `boolean` |

### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `T` |

### Returns

`value is Extract<T, false>`

## Call Signature

```ts
function isFalsy<T>(value: T): value is Extract<T, 0>;
```

Type guard that checks whether a value is falsy (0, null, undefined, false, '', or 0n).

### Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* `number` |

### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `T` |

### Returns

`value is Extract<T, 0>`

## Call Signature

```ts
function isFalsy<T>(value: T): value is Extract<T, 0n>;
```

Type guard that checks whether a value is falsy (0, null, undefined, false, '', or 0n).

### Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* `bigint` |

### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `T` |

### Returns

`value is Extract<T, 0n>`

## Call Signature

```ts
function isFalsy<T>(value: T): value is Extract<T, null>;
```

Type guard that checks whether a value is falsy (0, null, undefined, false, '', or 0n).

### Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* `null` |

### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `T` |

### Returns

`value is Extract<T, null>`

## Call Signature

```ts
function isFalsy<T>(value: T): value is Extract<T, undefined>;
```

Type guard that checks whether a value is falsy (0, null, undefined, false, '', or 0n).

### Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* `undefined` |

### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `T` |

### Returns

`value is Extract<T, undefined>`

## Call Signature

```ts
function isFalsy<T>(value: T): value is Extract<T, "">;
```

Type guard that checks whether a value is falsy (0, null, undefined, false, '', or 0n).

### Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* `string` |

### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `T` |

### Returns

`value is Extract<T, "">`

  ### <a id="isFile"></a>isFile

[**@xylabs/typeof**](#../README)

***

## Call Signature

```ts
function isFile(value: unknown): value is File;
```

Type guard that checks whether a value is a File instance.

### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `unknown` |

### Returns

`value is File`

## Call Signature

```ts
function isFile<T>(value: T): value is Extract<T, File>;
```

Type guard that checks whether a value is a File instance.

### Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* `File` |

### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `T` |

### Returns

`value is Extract<T, File>`

  ### <a id="isFunction"></a>isFunction

[**@xylabs/typeof**](#../README)

***

## Call Signature

```ts
function isFunction(value: unknown): value is AnyFunction;
```

Type guard that checks whether a value is a function.

### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `unknown` |

### Returns

`value is AnyFunction`

## Call Signature

```ts
function isFunction<T>(value: T): value is Extract<T, AnyFunction>;
```

Type guard that checks whether a value is a function.

### Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* [`AnyFunction`](#../type-aliases/AnyFunction) |

### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `T` |

### Returns

`value is Extract<T, AnyFunction>`

  ### <a id="isMap"></a>isMap

[**@xylabs/typeof**](#../README)

***

## Call Signature

```ts
function isMap(value: unknown): value is Map<unknown, unknown>;
```

Type guard that checks whether a value is a Map instance.

### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `unknown` |

### Returns

`value is Map<unknown, unknown>`

## Call Signature

```ts
function isMap<K, V, T>(value: T): value is Extract<T, Map<K, V>>;
```

Type guard that checks whether a value is a Map instance.

### Type Parameters

| Type Parameter |
| ------ |
| `K` |
| `V` |
| `T` *extends* `Map`\<`K`, `V`\> |

### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `T` |

### Returns

`value is Extract<T, Map<K, V>>`

  ### <a id="isNull"></a>isNull

[**@xylabs/typeof**](#../README)

***

## Call Signature

```ts
function isNull(value: unknown): value is null;
```

Type guard that checks whether a value is null.

### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `unknown` |

### Returns

`value is null`

## Call Signature

```ts
function isNull<T>(value: T): value is Extract<T, null>;
```

Type guard that checks whether a value is null.

### Type Parameters

| Type Parameter |
| ------ |
| `T` |

### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `T` |

### Returns

`value is Extract<T, null>`

  ### <a id="isNumber"></a>isNumber

[**@xylabs/typeof**](#../README)

***

## Call Signature

```ts
function isNumber(value: unknown): value is number;
```

Type guard that checks whether a value is a number.

### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `unknown` |

### Returns

`value is number`

## Call Signature

```ts
function isNumber<T>(value: T): value is Extract<T, number>;
```

Type guard that checks whether a value is a number.

### Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* `number` |

### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `T` |

### Returns

`value is Extract<T, number>`

  ### <a id="isObject"></a>isObject

[**@xylabs/typeof**](#../README)

***

## Call Signature

```ts
function isObject(value: unknown): value is object;
```

Type guard that checks whether a value is a plain object (not null and not an array).

### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `unknown` |

### Returns

`value is object`

## Call Signature

```ts
function isObject<T>(value: T): value is Extract<T, object>;
```

Type guard that checks whether a value is a plain object (not null and not an array).

### Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* `object` |

### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `T` |

### Returns

`value is Extract<T, object>`

  ### <a id="isPopulatedArray"></a>isPopulatedArray

[**@xylabs/typeof**](#../README)

***

## Call Signature

```ts
function isPopulatedArray(value: unknown): value is readonly unknown[];
```

Type guard that checks whether a value is a non-empty array.

### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `unknown` |

### Returns

`value is readonly unknown[]`

## Call Signature

```ts
function isPopulatedArray<T>(value: T): value is Extract<T, readonly unknown[]>;
```

Type guard that checks whether a value is a non-empty array.

### Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* `unknown`[] |

### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `T` |

### Returns

`value is Extract<T, readonly unknown[]>`

  ### <a id="isPromise"></a>isPromise

[**@xylabs/typeof**](#../README)

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

  ### <a id="isPromiseLike"></a>isPromiseLike

[**@xylabs/typeof**](#../README)

***

## Call Signature

```ts
function isPromiseLike(value: unknown): value is Promise<unknown>;
```

Type guard that checks whether a value is promise-like (has a `then` method).

### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `unknown` |

### Returns

`value is Promise<unknown>`

## Call Signature

```ts
function isPromiseLike<T>(value: T): value is Extract<T, Promise<unknown>>;
```

Type guard that checks whether a value is promise-like (has a `then` method).

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

  ### <a id="isRegExp"></a>isRegExp

[**@xylabs/typeof**](#../README)

***

## Call Signature

```ts
function isRegExp(value: unknown): value is RegExp;
```

Type guard that checks whether a value is a RegExp instance.

### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `unknown` |

### Returns

`value is RegExp`

## Call Signature

```ts
function isRegExp<T>(value: T): value is Extract<T, RegExp>;
```

Type guard that checks whether a value is a RegExp instance.

### Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* `RegExp` |

### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `T` |

### Returns

`value is Extract<T, RegExp>`

  ### <a id="isSet"></a>isSet

[**@xylabs/typeof**](#../README)

***

## Call Signature

```ts
function isSet(value: unknown): value is Set<unknown>;
```

Type guard that checks whether a value is a Set instance.

### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `unknown` |

### Returns

`value is Set<unknown>`

## Call Signature

```ts
function isSet<T>(value: unknown): value is Extract<T, Set<unknown>>;
```

Type guard that checks whether a value is a Set instance.

### Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* `Set`\<`unknown`\> |

### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `unknown` |

### Returns

`value is Extract<T, Set<unknown>>`

  ### <a id="isString"></a>isString

[**@xylabs/typeof**](#../README)

***

## Call Signature

```ts
function isString(value: unknown): value is string;
```

Type guard that checks whether a value is a string.

### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `unknown` |

### Returns

`value is string`

## Call Signature

```ts
function isString<T>(value: T): value is Extract<T, string>;
```

Type guard that checks whether a value is a string.

### Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* `string` |

### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `T` |

### Returns

`value is Extract<T, string>`

  ### <a id="isSymbol"></a>isSymbol

[**@xylabs/typeof**](#../README)

***

## Call Signature

```ts
function isSymbol(value: unknown): value is symbol;
```

Type guard that checks whether a value is a symbol.

### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `unknown` |

### Returns

`value is symbol`

## Call Signature

```ts
function isSymbol<T>(value: T): value is Extract<T, symbol>;
```

Type guard that checks whether a value is a symbol.

### Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* `symbol` |

### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `T` |

### Returns

`value is Extract<T, symbol>`

  ### <a id="isTruthy"></a>isTruthy

[**@xylabs/typeof**](#../README)

***

## Call Signature

```ts
function isTruthy<T>(value: T): value is Exclude<T, false | "" | 0 | 0n | null | undefined>;
```

Type guard that checks whether a value is truthy (not 0, null, undefined, false, '', or 0n).

### Type Parameters

| Type Parameter |
| ------ |
| `T` |

### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `T` |

### Returns

value is Exclude\<T, false \| "" \| 0 \| 0n \| null \| undefined\>

## Call Signature

```ts
function isTruthy<T>(value: T): value is Extract<T, true>;
```

Type guard that checks whether a value is truthy (not 0, null, undefined, false, '', or 0n).

### Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* `boolean` |

### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `T` |

### Returns

`value is Extract<T, true>`

## Call Signature

```ts
function isTruthy<T>(value: T): value is Extract<T, number>;
```

Type guard that checks whether a value is truthy (not 0, null, undefined, false, '', or 0n).

### Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* `number` |

### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `T` |

### Returns

`value is Extract<T, number>`

## Call Signature

```ts
function isTruthy<T>(value: T): value is Extract<T, bigint>;
```

Type guard that checks whether a value is truthy (not 0, null, undefined, false, '', or 0n).

### Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* `bigint` |

### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `T` |

### Returns

`value is Extract<T, bigint>`

## Call Signature

```ts
function isTruthy<T>(value: T): value is Extract<T, null>;
```

Type guard that checks whether a value is truthy (not 0, null, undefined, false, '', or 0n).

### Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* `null` |

### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `T` |

### Returns

`value is Extract<T, null>`

## Call Signature

```ts
function isTruthy<T>(value: T): value is Extract<T, undefined>;
```

Type guard that checks whether a value is truthy (not 0, null, undefined, false, '', or 0n).

### Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* `undefined` |

### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `T` |

### Returns

`value is Extract<T, undefined>`

## Call Signature

```ts
function isTruthy<T>(value: T): value is Extract<T, string>;
```

Type guard that checks whether a value is truthy (not 0, null, undefined, false, '', or 0n).

### Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* `string` |

### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `T` |

### Returns

`value is Extract<T, string>`

  ### <a id="isType"></a>isType

[**@xylabs/typeof**](#../README)

***

```ts
function isType(value: unknown, expectedType: FieldType): boolean;
```

Checks whether a value matches the expected field type, with correct handling for arrays and nulls.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `value` | `unknown` | The value to check. |
| `expectedType` | [`FieldType`](#../type-aliases/FieldType) | The expected type string. |

## Returns

`boolean`

True if the value matches the expected type.

  ### <a id="isTypedArray"></a>isTypedArray

[**@xylabs/typeof**](#../README)

***

```ts
function isTypedArray(value: unknown): value is TypedArray;
```

Type guard that checks whether a value is a TypedArray (an array where every element is a TypedValue).

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `value` | `unknown` | The value to check. |

## Returns

`value is TypedArray`

True if the value is an array of TypedValue elements.

  ### <a id="isTypedKey"></a>isTypedKey

[**@xylabs/typeof**](#../README)

***

```ts
function isTypedKey(value: unknown): value is string | number | symbol;
```

Type guard that checks whether a value is a valid TypedKey (string, bigint, number, or symbol).

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `value` | `unknown` | The value to check. |

## Returns

value is string \| number \| symbol

True if the value is a valid TypedKey.

  ### <a id="isTypedObject"></a>isTypedObject

[**@xylabs/typeof**](#../README)

***

```ts
function isTypedObject(value: unknown): value is TypedObject;
```

Type guard that checks whether a value is a TypedObject (an object with TypedKey keys and TypedValue values).

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `value` | `unknown` | The value to check. |

## Returns

`value is TypedObject`

True if the value is a valid TypedObject.

  ### <a id="isTypedValue"></a>isTypedValue

[**@xylabs/typeof**](#../README)

***

```ts
function isTypedValue(value: unknown): value is TypedValue;
```

Type guard that checks whether a value is a valid TypedValue.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `value` | `unknown` | The value to check. |

## Returns

`value is TypedValue`

True if the value is a string, number, boolean, null, TypedObject, or TypedArray.

  ### <a id="isUndefined"></a>isUndefined

[**@xylabs/typeof**](#../README)

***

## Call Signature

```ts
function isUndefined(value: unknown): value is undefined;
```

Type guard that checks whether a value is undefined.

### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `unknown` |

### Returns

`value is undefined`

## Call Signature

```ts
function isUndefined<T>(value: T): value is Extract<T, undefined>;
```

Type guard that checks whether a value is undefined.

### Type Parameters

| Type Parameter |
| ------ |
| `T` |

### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `T` |

### Returns

`value is Extract<T, undefined>`

  ### <a id="isUndefinedOrNull"></a>isUndefinedOrNull

[**@xylabs/typeof**](#../README)

***

## Call Signature

```ts
function isUndefinedOrNull(value: unknown): value is null | undefined;
```

Type guard that checks whether a value is undefined or null.

### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `unknown` |

### Returns

value is null \| undefined

## Call Signature

```ts
function isUndefinedOrNull<T>(value: T): value is Extract<T, null | undefined>;
```

Type guard that checks whether a value is undefined or null.

### Type Parameters

| Type Parameter |
| ------ |
| `T` |

### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `T` |

### Returns

value is Extract\<T, null \| undefined\>

  ### <a id="isValidTypedFieldPair"></a>isValidTypedFieldPair

[**@xylabs/typeof**](#../README)

***

```ts
function isValidTypedFieldPair(pair: [unknown, unknown]): pair is [key: string | number | symbol, value: TypedValue];
```

Type guard that checks whether a key-value pair has a valid TypedKey and TypedValue.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `pair` | \[`unknown`, `unknown`\] | A tuple of [key, value] to validate. |

## Returns

pair is \[key: string \| number \| symbol, value: TypedValue\]

True if the key is a TypedKey and the value is a TypedValue.

  ### <a id="isWeakMap"></a>isWeakMap

[**@xylabs/typeof**](#../README)

***

## Call Signature

```ts
function isWeakMap(value: unknown): value is WeakMap<WeakKey, unknown>;
```

Type guard that checks whether a value is a WeakMap instance.

### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `unknown` |

### Returns

`value is WeakMap<WeakKey, unknown>`

## Call Signature

```ts
function isWeakMap<K, V, T>(value: T): value is Extract<T, WeakMap<K, V>>;
```

Type guard that checks whether a value is a WeakMap instance.

### Type Parameters

| Type Parameter |
| ------ |
| `K` *extends* `WeakKey` |
| `V` |
| `T` *extends* `WeakMap`\<`K`, `V`\> |

### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `T` |

### Returns

`value is Extract<T, WeakMap<K, V>>`

  ### <a id="isWeakSet"></a>isWeakSet

[**@xylabs/typeof**](#../README)

***

## Call Signature

```ts
function isWeakSet(value: unknown): value is WeakSet<WeakKey>;
```

Type guard that checks whether a value is a WeakSet instance.

### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `unknown` |

### Returns

`value is WeakSet<WeakKey>`

## Call Signature

```ts
function isWeakSet<K, T>(value: T): value is Extract<T, WeakSet<K>>;
```

Type guard that checks whether a value is a WeakSet instance.

### Type Parameters

| Type Parameter |
| ------ |
| `K` *extends* `WeakKey` |
| `T` *extends* `WeakSet`\<`K`\> |

### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `T` |

### Returns

`value is Extract<T, WeakSet<K>>`

  ### <a id="typeOf"></a>typeOf

[**@xylabs/typeof**](#../README)

***

```ts
function typeOf<T>(item: T): TypeOfTypes;
```

Extended typeof that distinguishes arrays from objects (unlike native `typeof`).

## Type Parameters

| Type Parameter |
| ------ |
| `T` |

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `item` | `T` | The value to check. |

## Returns

[`TypeOfTypes`](#../type-aliases/TypeOfTypes)

The type of the item as a TypeOfTypes string.

  ### <a id="validateType"></a>validateType

[**@xylabs/typeof**](#../README)

***

```ts
function validateType<T>(
   typeName: TypeOfTypes, 
   value: T, 
   optional?: boolean): [T | undefined, Error[]];
```

Validates that a value matches the expected type, returning the value and any errors.

## Type Parameters

| Type Parameter |
| ------ |
| `T` |

## Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `typeName` | [`TypeOfTypes`](#../type-aliases/TypeOfTypes) | `undefined` | The expected type name. |
| `value` | `T` | `undefined` | The value to validate. |
| `optional` | `boolean` | `false` | If true, undefined values are accepted without error. |

## Returns

\[`T` \| `undefined`, `Error`[]\]

A tuple of [value or undefined, array of errors].

### type-aliases

  ### <a id="AnyFunction"></a>AnyFunction

[**@xylabs/typeof**](#../README)

***

```ts
type AnyFunction = (...args: unknown[]) => unknown;
```

A function type that accepts any arguments and returns unknown.

## Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | `unknown`[] |

## Returns

`unknown`

  ### <a id="Brand"></a>Brand

[**@xylabs/typeof**](#../README)

***

```ts
type Brand<T, B> = T & { [K in keyof B]: B[K] };
```

Creates a branded type by intersecting base type T with brand type B, enabling nominal typing in TypeScript.

## Type Parameters

| Type Parameter |
| ------ |
| `T` |
| `B` |

  ### <a id="FieldType"></a>FieldType

[**@xylabs/typeof**](#../README)

***

```ts
type FieldType = 
  | "string"
  | "number"
  | "object"
  | "symbol"
  | "undefined"
  | "null"
  | "array"
  | "function";
```

Union of string literals representing the possible types of an object field.

  ### <a id="IdentityFunction"></a>IdentityFunction

[**@xylabs/typeof**](#../README)

***

```ts
type IdentityFunction<T> = (value: unknown) => value is T;
```

A type guard function that narrows an unknown value to type T.

## Type Parameters

| Type Parameter |
| ------ |
| `T` |

## Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `unknown` |

## Returns

`value is T`

  ### <a id="ObjectTypeShape"></a>ObjectTypeShape

[**@xylabs/typeof**](#../README)

***

```ts
type ObjectTypeShape = Record<string | number | symbol, FieldType>;
```

Describes the expected shape of an object by mapping each key to its expected field type.

  ### <a id="RecordKey"></a>RecordKey

[**@xylabs/typeof**](#../README)

***

```ts
type RecordKey = string | number | symbol;
```

A union of valid object key types.

  ### <a id="TypeOfTypes"></a>TypeOfTypes

[**@xylabs/typeof**](#../README)

***

```ts
type TypeOfTypes = 
  | "string"
  | "number"
  | "object"
  | "array"
  | "buffer"
  | "null"
  | "undefined"
  | "bigint"
  | "boolean"
  | "function"
  | "symbol";
```

Union of string literals representing the possible results of the extended `typeOf` function.

  ### <a id="TypedArray"></a>TypedArray

[**@xylabs/typeof**](#../README)

***

```ts
type TypedArray = TypedValue[];
```

An array of TypedValue elements.

  ### <a id="TypedKey"></a>TypedKey

[**@xylabs/typeof**](#../README)

***

```ts
type TypedKey<T> = T extends string ? T : string | number | symbol;
```

A valid key for a typed object. Defaults to string | number | symbol unless narrowed by T.

## Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `T` *extends* `string` \| `void` | `void` |

  ### <a id="TypedObject"></a>TypedObject

[**@xylabs/typeof**](#../README)

***

```ts
type TypedObject = 
  | {
[key: string | number | symbol]: TypedValue;
}
  | object;
```

An object whose keys are TypedKey and whose values are TypedValue.

  ### <a id="TypedValue"></a>TypedValue

[**@xylabs/typeof**](#../README)

***

```ts
type TypedValue = 
  | bigint
  | string
  | number
  | boolean
  | null
  | TypedObject
  | TypedArray
  | Function
  | symbol
  | undefined;
```

A value that can appear in a typed object tree (primitives, objects, arrays, functions, and symbols).


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
[npm-badge]: https://img.shields.io/npm/v/@xylabs/typeof.svg
[npm-link]: https://www.npmjs.com/package/@xylabs/typeof
[codacy-badge]: https://app.codacy.com/project/badge/Grade/c8e15e14f37741c18cfb47ac7245c698
[codacy-link]: https://www.codacy.com/gh/xylabs/sdk-js/dashboard?utm_source=github.com&utm_medium=referral&utm_content=xylabs/sdk-js&utm_campaign=Badge_Grade
[codeclimate-badge]: https://api.codeclimate.com/v1/badges/c5eb068f806f0b047ea7/maintainability
[codeclimate-link]: https://codeclimate.com/github/xylabs/sdk-js/maintainability
[snyk-badge]: https://snyk.io/test/github/xylabs/sdk-js/badge.svg?targetFile=package.json
[snyk-link]: https://snyk.io/test/github/xylabs/sdk-js?targetFile=package.json

[npm-downloads-badge]: https://img.shields.io/npm/dw/@xylabs/typeof
[npm-license-badge]: https://img.shields.io/npm/l/@xylabs/typeof

[jsdelivr-badge]: https://data.jsdelivr.com/v1/package/npm/@xylabs/typeof/badge
[jsdelivr-link]: https://www.jsdelivr.com/package/npm/@xylabs/typeof

[socket-badge]: https://socket.dev/api/badge/npm/package/@xylabs/typeof
[socket-link]: https://socket.dev/npm/package/@xylabs/typeof