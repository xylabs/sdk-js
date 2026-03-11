# @xylabs/object

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

**@xylabs/object**

***

## Modules

| Module | Description |
| ------ | ------ |
| [index-deprecated](#index-deprecated/README) | - |
| [index-un-deprecated](#index-un-deprecated/README) | - |
| [index](#index/README) | - |

### index

### index-deprecated

  ### classes

    ### <a id="IsObjectFactory"></a>IsObjectFactory

[**@xylabs/object**](#../../README)

***

Factory class for creating type-guard functions that validate objects against a given shape and optional additional checks.

## Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* `TypedObject` |

## Constructors

### Constructor

```ts
new IsObjectFactory<T>(): IsObjectFactory<T>;
```

### Returns

`IsObjectFactory`\<`T`\>

## Methods

### create()

```ts
create(shape?: ObjectTypeShape, additionalChecks?: TypeCheck<TypedObject>[]): TypeCheck<T>;
```

Creates a type-guard function that validates an object matches the given shape and passes additional checks.

### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `shape?` | `ObjectTypeShape` | An optional map of property names to expected types. |
| `additionalChecks?` | [`TypeCheck`](#../type-aliases/TypeCheck)\<`TypedObject`\>[] | Optional extra type-check functions to run after shape validation. |

### Returns

[`TypeCheck`](#../type-aliases/TypeCheck)\<`T`\>

A type-guard function for type T.

    ### <a id="ObjectWrapper"></a>ObjectWrapper

[**@xylabs/object**](#../../README)

***

Abstract base class that wraps an object and provides typed access to it.

## Extended by

- [`ValidatorBase`](#ValidatorBase)

## Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `T` *extends* [`EmptyObject`](#../type-aliases/EmptyObject) | [`EmptyObject`](#../type-aliases/EmptyObject) |

## Constructors

### Constructor

```ts
new ObjectWrapper<T>(obj: T): ObjectWrapper<T>;
```

### Parameters

| Parameter | Type |
| ------ | ------ |
| `obj` | `T` |

### Returns

`ObjectWrapper`\<`T`\>

## Properties

| Property | Modifier | Type |
| ------ | ------ | ------ |
| <a id="obj"></a> `obj` | `readonly` | `T` |

## Accessors

### stringKeyObj

### Get Signature

```ts
get protected stringKeyObj(): StringKeyObject;
```

#### Returns

[`StringKeyObject`](#../type-aliases/StringKeyObject)

    ### <a id="ValidatorBase"></a>ValidatorBase

[**@xylabs/object**](#../../README)

***

Abstract base class for validators that wraps a partial object and provides a validation method.

## Extends

- [`ObjectWrapper`](#ObjectWrapper)\<`Partial`\<`T`\>\>

## Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `T` *extends* [`EmptyObject`](#../type-aliases/EmptyObject) | [`AnyObject`](#../type-aliases/AnyObject) |

## Implements

- [`Validator`](#../interfaces/Validator)\<`T`\>

## Constructors

### Constructor

```ts
new ValidatorBase<T>(obj: T): ValidatorBase<T>;
```

### Parameters

| Parameter | Type |
| ------ | ------ |
| `obj` | `T` |

### Returns

`ValidatorBase`\<`T`\>

### Inherited from

[`ObjectWrapper`](#ObjectWrapper).[`constructor`](ObjectWrapper.md#constructor)

## Properties

| Property | Modifier | Type | Inherited from |
| ------ | ------ | ------ | ------ |
| <a id="obj"></a> `obj` | `readonly` | `T` | [`ObjectWrapper`](#ObjectWrapper).[`obj`](ObjectWrapper.md#obj) |

## Accessors

### stringKeyObj

### Get Signature

```ts
get protected stringKeyObj(): StringKeyObject;
```

#### Returns

[`StringKeyObject`](#../type-aliases/StringKeyObject)

### Inherited from

[`ObjectWrapper`](#ObjectWrapper).[`stringKeyObj`](ObjectWrapper.md#stringkeyobj)

## Methods

### validate()

```ts
abstract validate(payload: T): Promisable<Error[]>;
```

### Parameters

| Parameter | Type |
| ------ | ------ |
| `payload` | `T` |

### Returns

`Promisable`\<`Error`[]\>

### Implementation of

[`Validator`](#../interfaces/Validator).[`validate`](../interfaces/Validator.md#validate)

  ### functions

    ### <a id="createDeepMerge"></a>createDeepMerge

[**@xylabs/object**](#../../README)

***

```ts
function createDeepMerge(options: MergeOptions): <T>(...objects: T) => MergeAll<T>;
```

Creates a deep merge function with the specified options.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `options` | `MergeOptions` | Options for merging. |

## Returns

A deep merge function configured for the specified options.

```ts
<T>(...objects: T): MergeAll<T>;
```

### Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* [`AnyObject`](#../type-aliases/AnyObject)[] |

### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`objects` | `T` |

### Returns

`MergeAll`\<`T`\>

    ### <a id="isObject"></a>isObject

[**@xylabs/object**](#../../README)

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

    ### <a id="isType"></a>isType

[**@xylabs/object**](#../../README)

***

```ts
function isType(value: unknown, expectedType: FieldType): boolean;
```

## Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `unknown` |
| `expectedType` | `FieldType` |

## Returns

`boolean`

## Deprecated

use from @xylabs/typeof instead

    ### <a id="omitBy"></a>omitBy

[**@xylabs/object**](#../../README)

***

```ts
function omitBy<T>(
   obj: T, 
   predicate: OmitByPredicate, 
maxDepth?: number): Partial<T>;
```

Creates a new object excluding properties that satisfy the predicate, with optional recursive depth.

## Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* `object` |

## Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `obj` | `T` | `undefined` | The source object to omit properties from. |
| `predicate` | [`OmitByPredicate`](#../type-aliases/OmitByPredicate) | `undefined` | A function that returns true for properties to exclude. |
| `maxDepth` | `number` | `1` | Maximum recursion depth for nested objects. |

## Returns

`Partial`\<`T`\>

A partial copy of the object without matching properties.

    ### <a id="omitByPrefix"></a>omitByPrefix

[**@xylabs/object**](#../../README)

***

```ts
function omitByPrefix<T, P>(
   payload: T, 
   prefix: P, 
maxDepth?: number): DeepOmitStartsWith<T, P>;
```

Omits all properties whose keys start with the given prefix, recursively through nested objects.

## Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* `object` |
| `P` *extends* `string` |

## Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `payload` | `T` | `undefined` | The source object. |
| `prefix` | `P` | `undefined` | The string prefix to match keys against. |
| `maxDepth` | `number` | `100` | Maximum recursion depth. |

## Returns

[`DeepOmitStartsWith`](#../type-aliases/DeepOmitStartsWith)\<`T`, `P`\>

A new object without properties that have matching prefixed keys.

    ### <a id="pickBy"></a>pickBy

[**@xylabs/object**](#../../README)

***

```ts
function pickBy<T>(
   obj: T, 
   predicate: PickByPredicate, 
maxDepth?: number): Partial<T>;
```

Creates a new object containing only the properties that satisfy the predicate, with optional recursive depth.

## Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* `object` |

## Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `obj` | `T` | `undefined` | The source object to pick properties from. |
| `predicate` | [`PickByPredicate`](#../type-aliases/PickByPredicate) | `undefined` | A function that returns true for properties to include. |
| `maxDepth` | `number` | `1` | Maximum recursion depth for nested objects. |

## Returns

`Partial`\<`T`\>

A partial copy of the object with only matching properties.

    ### <a id="pickByPrefix"></a>pickByPrefix

[**@xylabs/object**](#../../README)

***

```ts
function pickByPrefix<T, P>(
   payload: T, 
   prefix: P, 
maxDepth?: number): DeepPickStartsWith<T, P>;
```

Picks all properties whose keys start with the given prefix, recursively through nested objects.

## Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* `object` |
| `P` *extends* `string` |

## Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `payload` | `T` | `undefined` | The source object. |
| `prefix` | `P` | `undefined` | The string prefix to match keys against. |
| `maxDepth` | `number` | `100` | Maximum recursion depth. |

## Returns

[`DeepPickStartsWith`](#../type-aliases/DeepPickStartsWith)\<`T`, `P`\>

A new object containing only properties with matching prefixed keys.

    ### <a id="removeFields"></a>removeFields

[**@xylabs/object**](#../../README)

***

```ts
function removeFields<T, K>(obj: T, fields: K[]): Omit<T, K>;
```

Returns a shallow copy of the object with the specified fields removed.

## Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* `object` |
| `K` *extends* `string` \| `number` \| `symbol` |

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `obj` | `T` | The source object. |
| `fields` | `K`[] | An array of keys to remove. |

## Returns

`Omit`\<`T`, `K`\>

A new object without the specified fields.

    ### <a id="toSafeJson"></a>toSafeJson

[**@xylabs/object**](#../../README)

***

```ts
function toSafeJson(value: unknown, maxDepth?: number): unknown;
```

Converts a value to a JSON-safe representation, handling circular references and non-serializable types.

## Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `value` | `unknown` | `undefined` | The value to convert. |
| `maxDepth` | `number` | `3` | Maximum recursion depth. |

## Returns

`unknown`

A JSON-safe value.

    ### <a id="toSafeJsonArray"></a>toSafeJsonArray

[**@xylabs/object**](#../../README)

***

```ts
function toSafeJsonArray(
   value: unknown[], 
   cycleList?: unknown[], 
   maxDepth?: number): unknown[];
```

Converts an array to a JSON-safe array, handling circular references and depth limits.

## Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `value` | `unknown`[] | `undefined` | The array to convert. |
| `cycleList?` | `unknown`[] | `undefined` | Tracks visited objects to detect circular references. |
| `maxDepth?` | `number` | `3` | Maximum recursion depth before truncating. |

## Returns

`unknown`[]

A JSON-safe array representation.

    ### <a id="toSafeJsonObject"></a>toSafeJsonObject

[**@xylabs/object**](#../../README)

***

```ts
function toSafeJsonObject(
   value: object, 
   cycleList?: unknown[], 
   maxDepth?: number): JsonObject;
```

Converts an object to a JSON-safe object, handling circular references and depth limits.

## Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `value` | `object` | `undefined` | The object to convert. |
| `cycleList?` | `unknown`[] | `undefined` | Tracks visited objects to detect circular references. |
| `maxDepth?` | `number` | `3` | Maximum recursion depth before truncating. |

## Returns

[`JsonObject`](#../type-aliases/JsonObject)

A JSON-safe object representation.

    ### <a id="toSafeJsonString"></a>toSafeJsonString

[**@xylabs/object**](#../../README)

***

```ts
function toSafeJsonString(value: unknown, maxDepth?: number): string;
```

Converts a value to a pretty-printed JSON string, safely handling circular references and non-JSON types.

## Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `value` | `unknown` | `undefined` | The value to serialize. |
| `maxDepth` | `number` | `3` | Maximum recursion depth. |

## Returns

`string`

A formatted JSON string.

    ### <a id="toSafeJsonValue"></a>toSafeJsonValue

[**@xylabs/object**](#../../README)

***

```ts
function toSafeJsonValue(
   value: unknown, 
   cycleList?: unknown[], 
   maxDepth?: number): unknown;
```

Converts an unknown value to a JSON-safe value, replacing circular references with '[Circular]' and
non-JSON types with descriptive placeholder strings.

## Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `value` | `unknown` | `undefined` | The value to convert. |
| `cycleList?` | `unknown`[] | `undefined` | Tracks visited objects to detect circular references. |
| `maxDepth?` | `number` | `3` | Maximum recursion depth before truncating with '[MaxDepth]'. |

## Returns

`unknown`

A JSON-safe representation of the value.

  ### interfaces

    ### <a id="ObjectTypeConfig"></a>ObjectTypeConfig

[**@xylabs/object**](#../../README)

***

Configuration options for object type checking.

## Extends

- [`TypeCheckConfig`](#TypeCheckConfig)

## Properties

| Property | Type | Inherited from |
| ------ | ------ | ------ |
| <a id="log"></a> `log?` | `boolean` \| `Logger` | [`TypeCheckConfig`](#TypeCheckConfig).[`log`](TypeCheckConfig.md#log) |

    ### <a id="TypeCheckConfig"></a>TypeCheckConfig

[**@xylabs/object**](#../../README)

***

Configuration options for type check functions, with optional logging.

## Extended by

- [`ObjectTypeConfig`](#ObjectTypeConfig)
- [`TypeCheckRequiredConfig`](#TypeCheckRequiredConfig)
- [`TypeCheckOptionalConfig`](#TypeCheckOptionalConfig)

## Properties

| Property | Type |
| ------ | ------ |
| <a id="log"></a> `log?` | `boolean` \| `Logger` |

    ### <a id="TypeCheckOptionalConfig"></a>TypeCheckOptionalConfig

[**@xylabs/object**](#../../README)

***

Type check configuration that marks the value as optional, returning undefined on failure.

## Extends

- [`TypeCheckConfig`](#TypeCheckConfig)

## Properties

| Property | Type | Inherited from |
| ------ | ------ | ------ |
| <a id="log"></a> `log?` | `boolean` \| `Logger` | [`TypeCheckConfig`](#TypeCheckConfig).[`log`](TypeCheckConfig.md#log) |
| <a id="required"></a> `required` | `false` | - |

    ### <a id="TypeCheckRequiredConfig"></a>TypeCheckRequiredConfig

[**@xylabs/object**](#../../README)

***

Type check configuration that marks the value as required, causing assertions on failure.

## Extends

- [`TypeCheckConfig`](#TypeCheckConfig)

## Properties

| Property | Type | Inherited from |
| ------ | ------ | ------ |
| <a id="log"></a> `log?` | `boolean` \| `Logger` | [`TypeCheckConfig`](#TypeCheckConfig).[`log`](TypeCheckConfig.md#log) |
| <a id="required"></a> `required` | `true` | - |

    ### <a id="Validator"></a>Validator

[**@xylabs/object**](#../../README)

***

Interface for validating objects and returning any errors found.

## Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `T` *extends* [`EmptyObject`](#../type-aliases/EmptyObject) | [`AnyObject`](#../type-aliases/AnyObject) |

## Methods

### validate()

```ts
validate(payload: T): Promisable<Error[]>;
```

### Parameters

| Parameter | Type |
| ------ | ------ |
| `payload` | `T` |

### Returns

`Promisable`\<`Error`[]\>

  ### type-aliases

    ### <a id="AnyObject"></a>AnyObject

[**@xylabs/object**](#../../README)

***

```ts
type AnyObject = EmptyObject & Partial<Record<TypedKey, unknown>>;
```

Any object, which means that it does not enforce the set of fields that it has.  Extending from AnyObject
will result in a type that includes the universal set of field names

    ### <a id="AsOptionalTypeFunction"></a>AsOptionalTypeFunction

[**@xylabs/object**](#../../README)

***

```ts
type AsOptionalTypeFunction<T> = <TType>(value: AnyNonPromise) => TType | undefined;
```

A simplified type-narrowing function that returns T or undefined, without assertion support.

## Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `T` *extends* `AnyNonPromise` | `AnyNonPromise` |

## Type Parameters

| Type Parameter |
| ------ |
| `TType` *extends* `AnyNonPromise` |

## Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `AnyNonPromise` |

## Returns

`TType` \| `undefined`

    ### <a id="AsTypeFunction"></a>AsTypeFunction

[**@xylabs/object**](#../../README)

***

```ts
type AsTypeFunction<T> = {
<TType>  (value: AnyNonPromise): TType | undefined;
<TType>  (value: AnyNonPromise, config: TypeCheckRequiredConfig): TType;
<TType>  (value: AnyNonPromise, config: 
  | TypeCheckConfig
  | TypeCheckOptionalConfig): TType | undefined;
<TType>  (value: AnyNonPromise, assert: StringOrAlertFunction<TType>): TType | undefined;
<TType>  (value: AnyNonPromise, assert: StringOrAlertFunction<TType>, config: TypeCheckRequiredConfig): TType;
<TType>  (value: AnyNonPromise, assert: StringOrAlertFunction<TType>, config: 
  | TypeCheckConfig
  | TypeCheckOptionalConfig): TType | undefined;
};
```

A type-narrowing function that attempts to cast a value to T, with optional assertion and configuration overloads.

## Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `T` *extends* `AnyNonPromise` | `AnyNonPromise` |

## Call Signature

```ts
<TType>(value: AnyNonPromise): TType | undefined;
```

### Type Parameters

| Type Parameter |
| ------ |
| `TType` *extends* `AnyNonPromise` |

### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `AnyNonPromise` |

### Returns

`TType` \| `undefined`

## Call Signature

```ts
<TType>(value: AnyNonPromise, config: TypeCheckRequiredConfig): TType;
```

### Type Parameters

| Type Parameter |
| ------ |
| `TType` *extends* `AnyNonPromise` |

### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `AnyNonPromise` |
| `config` | [`TypeCheckRequiredConfig`](#../interfaces/TypeCheckRequiredConfig) |

### Returns

`TType`

## Call Signature

```ts
<TType>(value: AnyNonPromise, config: 
  | TypeCheckConfig
  | TypeCheckOptionalConfig): TType | undefined;
```

### Type Parameters

| Type Parameter |
| ------ |
| `TType` *extends* `AnyNonPromise` |

### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `AnyNonPromise` |
| `config` | \| [`TypeCheckConfig`](#../interfaces/TypeCheckConfig) \| [`TypeCheckOptionalConfig`](#../interfaces/TypeCheckOptionalConfig) |

### Returns

`TType` \| `undefined`

## Call Signature

```ts
<TType>(value: AnyNonPromise, assert: StringOrAlertFunction<TType>): TType | undefined;
```

### Type Parameters

| Type Parameter |
| ------ |
| `TType` *extends* `AnyNonPromise` |

### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `AnyNonPromise` |
| `assert` | [`StringOrAlertFunction`](#StringOrAlertFunction)\<`TType`\> |

### Returns

`TType` \| `undefined`

## Call Signature

```ts
<TType>(
   value: AnyNonPromise, 
   assert: StringOrAlertFunction<TType>, 
   config: TypeCheckRequiredConfig): TType;
```

### Type Parameters

| Type Parameter |
| ------ |
| `TType` *extends* `AnyNonPromise` |

### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `AnyNonPromise` |
| `assert` | [`StringOrAlertFunction`](#StringOrAlertFunction)\<`TType`\> |
| `config` | [`TypeCheckRequiredConfig`](#../interfaces/TypeCheckRequiredConfig) |

### Returns

`TType`

## Call Signature

```ts
<TType>(
   value: AnyNonPromise, 
   assert: StringOrAlertFunction<TType>, 
   config: 
  | TypeCheckConfig
  | TypeCheckOptionalConfig): TType | undefined;
```

### Type Parameters

| Type Parameter |
| ------ |
| `TType` *extends* `AnyNonPromise` |

### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `AnyNonPromise` |
| `assert` | [`StringOrAlertFunction`](#StringOrAlertFunction)\<`TType`\> |
| `config` | \| [`TypeCheckConfig`](#../interfaces/TypeCheckConfig) \| [`TypeCheckOptionalConfig`](#../interfaces/TypeCheckOptionalConfig) |

### Returns

`TType` \| `undefined`

    ### <a id="Compare"></a>Compare

[**@xylabs/object**](#../../README)

***

```ts
type Compare<T> = (a: T, b: T) => number;
```

A comparator function that returns a negative number if a < b, zero if a == b, and a positive number if a > b.

## Type Parameters

| Type Parameter |
| ------ |
| `T` |

## Parameters

| Parameter | Type |
| ------ | ------ |
| `a` | `T` |
| `b` | `T` |

## Returns

`number`

    ### <a id="DeepOmitStartsWith"></a>DeepOmitStartsWith

[**@xylabs/object**](#../../README)

***

```ts
type DeepOmitStartsWith<T, Prefix> = T extends infer U[] ? DeepOmitStartsWith<U, Prefix>[] : T extends object ? { [K in keyof T as K extends string ? K extends `${Prefix}${string}` ? never : K : K]: DeepOmitStartsWith<T[K], Prefix> } : T;
```

Recursively omits keys that start with the given prefix, including in nested objects and arrays.

## Type Parameters

| Type Parameter |
| ------ |
| `T` |
| `Prefix` *extends* `string` |

    ### <a id="DeepPickStartsWith"></a>DeepPickStartsWith

[**@xylabs/object**](#../../README)

***

```ts
type DeepPickStartsWith<T, Prefix> = T extends infer U[] ? DeepPickStartsWith<U, Prefix>[] : T extends object ? { [K in keyof T as K extends string ? K extends `${Prefix}${string}` ? K : never : K]: DeepPickStartsWith<T[K], Prefix> } : T;
```

Recursively picks only the keys that start with the given prefix, including in nested objects and arrays.

## Type Parameters

| Type Parameter |
| ------ |
| `T` |
| `Prefix` *extends* `string` |

    ### <a id="DeepRestrictToJson"></a>DeepRestrictToJson

[**@xylabs/object**](#../../README)

***

```ts
type DeepRestrictToJson<T> = { [K in keyof T as K extends string ? K : never]: T[K] extends (infer U)[] ? DeepRestrictToJson<U>[] : T[K] extends object ? DeepRestrictToJson<T[K]> : T[K] extends JsonValue ? T[K] : never };
```

Recursively restricts an object type to only JSON-compatible values, excluding non-serializable types.

## Type Parameters

| Type Parameter |
| ------ |
| `T` |

    ### <a id="DeepRestrictToStringKeys"></a>DeepRestrictToStringKeys

[**@xylabs/object**](#../../README)

***

```ts
type DeepRestrictToStringKeys<T> = { [K in keyof T as K extends string ? K : never]: T[K] extends (infer U)[] ? DeepRestrictToStringKeys<U>[] : T[K] extends object ? DeepRestrictToStringKeys<T[K]> : T[K] };
```

Recursively removes all non-string keys from an object type, including in nested objects and arrays.

## Type Parameters

| Type Parameter |
| ------ |
| `T` |

    ### <a id="EmptyObject"></a>EmptyObject

[**@xylabs/object**](#../../README)

***

```ts
type EmptyObject<T> = Exclude<{ [K in keyof T]?: never }, unknown[] | (...args: unknown[]) => unknown | null>;
```

An empty object, which means that it does enforce the set of field names, defaulting to an empty set until
extended from, which then adds only those additional fields

## Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `T` *extends* `object` | `object` |

    ### <a id="JsonArray"></a>JsonArray

[**@xylabs/object**](#../../README)

***

```ts
type JsonArray = z.infer<typeof JsonArrayZod>;
```

A JSON array containing JSON values.

    ### <a id="JsonObject"></a>JsonObject

[**@xylabs/object**](#../../README)

***

```ts
type JsonObject = z.infer<typeof JsonObjectZod>;
```

A JSON object with string keys and JSON values.

    ### <a id="JsonValue"></a>JsonValue

[**@xylabs/object**](#../../README)

***

```ts
type JsonValue = z.infer<typeof JsonValueZod>;
```

A recursive JSON value: string, number, boolean, null, array, or object.

    ### <a id="OmitByPredicate"></a>OmitByPredicate

[**@xylabs/object**](#../../README)

***

```ts
type OmitByPredicate<T> = (value: T[keyof T], key: keyof T) => boolean;
```

A predicate function used to determine which properties to omit from an object.

## Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `T` *extends* [`EmptyObject`](#EmptyObject) | `Record`\<`string`, `unknown`\> |

## Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `T`\[keyof `T`\] |
| `key` | keyof `T` |

## Returns

`boolean`

    ### <a id="OmitStartsWith"></a>OmitStartsWith

[**@xylabs/object**](#../../README)

***

```ts
type OmitStartsWith<T, Prefix> = { [K in keyof T as K extends `${Prefix}${string}` ? never : K]: T[K] };
```

Omits the keys of T that start with the given prefix.

## Type Parameters

| Type Parameter |
| ------ |
| `T` |
| `Prefix` *extends* `string` |

    ### <a id="Optional"></a>Optional

[**@xylabs/object**](#../../README)

***

```ts
type Optional<T, F> = Omit<T, F> & Partial<Pick<T, F>>;
```

Makes the specified fields of T optional while keeping the rest required.

## Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* `object` |
| `F` *extends* keyof `T` |

    ### <a id="Override"></a>Override

[**@xylabs/object**](#../../README)

***

```ts
type Override<T1, T2> = Omit<T1, keyof T2> & T2;
```

Overrides properties of T1 with those from T2.

## Type Parameters

| Type Parameter |
| ------ |
| `T1` |
| `T2` |

    ### <a id="PartialRecord"></a>PartialRecord

[**@xylabs/object**](#../../README)

***

```ts
type PartialRecord<K, T> = { [P in K]?: T };
```

## Type Parameters

| Type Parameter |
| ------ |
| `K` *extends* keyof `any` |
| `T` |

## Deprecated

use Partial<Record<>> instead

    ### <a id="PickByPredicate"></a>PickByPredicate

[**@xylabs/object**](#../../README)

***

```ts
type PickByPredicate<T> = (value: T[keyof T], key: keyof T) => boolean;
```

A predicate function used to determine which properties to pick from an object.

## Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `T` *extends* [`EmptyObject`](#EmptyObject) | `Record`\<`string`, `unknown`\> |

## Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `T`\[keyof `T`\] |
| `key` | keyof `T` |

## Returns

`boolean`

    ### <a id="PickStartsWith"></a>PickStartsWith

[**@xylabs/object**](#../../README)

***

```ts
type PickStartsWith<T, Prefix> = { [K in keyof T as K extends `${Prefix}${string}` ? K : never]: T[K] };
```

Picks only the keys of T that start with the given prefix.

## Type Parameters

| Type Parameter |
| ------ |
| `T` |
| `Prefix` *extends* `string` |

    ### <a id="Simplify"></a>Simplify

[**@xylabs/object**](#../../README)

***

```ts
type Simplify<T> = { [K in keyof T]: T[K] } & {
};
```

Flattens an intersection or complex mapped type into a single object type for better readability.

## Type Parameters

| Type Parameter |
| ------ |
| `T` |

    ### <a id="StringKeyObject"></a>StringKeyObject

[**@xylabs/object**](#../../README)

***

```ts
type StringKeyObject<T> = {
[key: string]: T;
};
```

An object type with string keys and values of type T.

## Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `T` | `unknown` |

## Index Signature

```ts
[key: string]: T
```

    ### <a id="StringOrAlertFunction"></a>StringOrAlertFunction

[**@xylabs/object**](#../../README)

***

```ts
type StringOrAlertFunction<T> = string | AssertExMessageFunc<T>;
```

A string message or function that produces an assertion error message for a failed type check.

## Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* `AnyNonPromise` |

    ### <a id="TypeCheck"></a>TypeCheck

[**@xylabs/object**](#../../README)

***

```ts
type TypeCheck<T> = {
  (obj: AnyNonPromise): obj is T;
  (obj: AnyNonPromise, config: TypeCheckConfig): obj is T;
  (obj: AnyNonPromise, config: 
  | number
  | TypeCheckConfig
  | undefined): obj is T;
};
```

A type guard function that checks whether a value conforms to type T, with optional configuration.

## Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* `TypedValue` |

## Call Signature

```ts
(obj: AnyNonPromise): obj is T;
```

### Parameters

| Parameter | Type |
| ------ | ------ |
| `obj` | `AnyNonPromise` |

### Returns

`obj is T`

## Call Signature

```ts
(obj: AnyNonPromise, config: TypeCheckConfig): obj is T;
```

### Parameters

| Parameter | Type |
| ------ | ------ |
| `obj` | `AnyNonPromise` |
| `config` | [`TypeCheckConfig`](#../interfaces/TypeCheckConfig) |

### Returns

`obj is T`

## Call Signature

```ts
(obj: AnyNonPromise, config: 
  | number
  | TypeCheckConfig
  | undefined): obj is T;
```

### Parameters

| Parameter | Type |
| ------ | ------ |
| `obj` | `AnyNonPromise` |
| `config` | \| `number` \| [`TypeCheckConfig`](#../interfaces/TypeCheckConfig) \| `undefined` |

### Returns

`obj is T`

    ### <a id="WithAdditional"></a>WithAdditional

[**@xylabs/object**](#../../README)

***

```ts
type WithAdditional<T, TAdditional> = TAdditional extends EmptyObject ? T & TAdditional : T;
```

Intersects T with TAdditional if TAdditional is an object, otherwise returns T unchanged.

## Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `T` *extends* [`EmptyObject`](#EmptyObject) \| `void` | - |
| `TAdditional` *extends* [`EmptyObject`](#EmptyObject) \| `void` | `void` |

  ### variables

    ### <a id="AsObjectFactory"></a>AsObjectFactory

[**@xylabs/object**](#../../README)

***

```ts
const AsObjectFactory: {
  create: <T>(typeCheck: TypeCheck<T>) => AsTypeFunction<T>;
  createOptional: <T>(typeCheck: TypeCheck<T>) => (value: AnyNonPromise) => T | undefined;
};
```

Factory for creating type-narrowing functions for TypedObject types.

## Type Declaration

| Name | Type |
| ------ | ------ |
| <a id="property-create"></a> `create()` | \<`T`\>(`typeCheck`: [`TypeCheck`](#../type-aliases/TypeCheck)\<`T`\>) => [`AsTypeFunction`](#../type-aliases/AsTypeFunction)\<`T`\> |
| <a id="property-createoptional"></a> `createOptional()` | \<`T`\>(`typeCheck`: [`TypeCheck`](#../type-aliases/TypeCheck)\<`T`\>) => (`value`: `AnyNonPromise`) => `T` \| `undefined` |

    ### <a id="AsTypeFactory"></a>AsTypeFactory

[**@xylabs/object**](#../../README)

***

```ts
const AsTypeFactory: {
  create: <T>(typeCheck: TypeCheck<T>) => AsTypeFunction<T>;
  createOptional: <T>(typeCheck: TypeCheck<T>) => (value: AnyNonPromise) => T | undefined;
};
```

Factory for creating type-narrowing 'as' functions that cast a value to T or return undefined.
Supports optional assertion messages and configuration for required/optional behavior.

## Type Declaration

| Name | Type |
| ------ | ------ |
| <a id="property-create"></a> `create()` | \<`T`\>(`typeCheck`: [`TypeCheck`](#../type-aliases/TypeCheck)\<`T`\>) => [`AsTypeFunction`](#../type-aliases/AsTypeFunction)\<`T`\> |
| <a id="property-createoptional"></a> `createOptional()` | \<`T`\>(`typeCheck`: [`TypeCheck`](#../type-aliases/TypeCheck)\<`T`\>) => (`value`: `AnyNonPromise`) => `T` \| `undefined` |

    ### <a id="JsonObjectZod"></a>JsonObjectZod

[**@xylabs/object**](#../../README)

***

```ts
const JsonObjectZod: ZodRecord<ZodString, ZodType<unknown, unknown, $ZodTypeInternals<unknown, unknown>>>;
```

Zod schema for a JSON object with string keys and recursive JSON values.

    ### <a id="asAnyObject"></a>asAnyObject

[**@xylabs/object**](#../../README)

***

```ts
const asAnyObject: AsTypeFunction<AnyObject>;
```

Type-narrowing function that casts a value to AnyObject if it is a plain object, or returns undefined.

    ### <a id="asJsonArray"></a>asJsonArray

[**@xylabs/object**](#../../README)

***

```ts
const asJsonArray: {
<T>  (value: T): T & unknown[] | undefined;
<T>  (value: T, assert: ZodFactoryConfig): T & unknown[];
};
```

Casts a value to JsonArray or returns undefined if it does not conform.

## Call Signature

```ts
<T>(value: T): T & unknown[] | undefined;
```

### Type Parameters

| Type Parameter |
| ------ |
| `T` |

### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `T` |

### Returns

`T` & `unknown`[] \| `undefined`

## Call Signature

```ts
<T>(value: T, assert: ZodFactoryConfig): T & unknown[];
```

### Type Parameters

| Type Parameter |
| ------ |
| `T` |

### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `T` |
| `assert` | `ZodFactoryConfig` |

### Returns

`T` & `unknown`[]

    ### <a id="asJsonObject"></a>asJsonObject

[**@xylabs/object**](#../../README)

***

```ts
const asJsonObject: {
<T>  (value: T): T & Record<string, unknown> | undefined;
<T>  (value: T, assert: ZodFactoryConfig): T & Record<string, unknown>;
};
```

Casts a value to JsonObject or returns undefined if it does not conform.

## Call Signature

```ts
<T>(value: T): T & Record<string, unknown> | undefined;
```

### Type Parameters

| Type Parameter |
| ------ |
| `T` |

### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `T` |

### Returns

`T` & `Record`\<`string`, `unknown`\> \| `undefined`

## Call Signature

```ts
<T>(value: T, assert: ZodFactoryConfig): T & Record<string, unknown>;
```

### Type Parameters

| Type Parameter |
| ------ |
| `T` |

### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `T` |
| `assert` | `ZodFactoryConfig` |

### Returns

`T` & `Record`\<`string`, `unknown`\>

    ### <a id="asJsonValue"></a>asJsonValue

[**@xylabs/object**](#../../README)

***

```ts
const asJsonValue: {
<T>  (value: T): T | undefined;
<T>  (value: T, assert: ZodFactoryConfig): T;
};
```

Casts a value to JsonValue or returns undefined if it does not conform.

## Call Signature

```ts
<T>(value: T): T | undefined;
```

### Type Parameters

| Type Parameter |
| ------ |
| `T` |

### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `T` |

### Returns

`T` \| `undefined`

## Call Signature

```ts
<T>(value: T, assert: ZodFactoryConfig): T;
```

### Type Parameters

| Type Parameter |
| ------ |
| `T` |

### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `T` |
| `assert` | `ZodFactoryConfig` |

### Returns

`T`

    ### <a id="deepMerge"></a>deepMerge

[**@xylabs/object**](#../../README)

***

```ts
const deepMerge: <T>(...objects: T) => MergeAll<T>;
```

Deeply merges multiple objects into a new object.

## Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* [`AnyObject`](#../type-aliases/AnyObject)[] |

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| ...`objects` | `T` | Multiple objects to merge deeply. The function merges properties from all objects into a new object. If a property exists in multiple objects, the last object's value will be used. If a property is an object, it will be merged recursively. If a property is an array, it will be overwritten by the last object's value. If a property is a primitive value, it will be overwritten by the last object's value. If a property is undefined in the source, it will be skipped. If a property is a symbol, it will be merged as well. |

## Returns

`MergeAll`\<`T`\>

A new object with the merged properties.

    ### <a id="isJsonArray"></a>isJsonArray

[**@xylabs/object**](#../../README)

***

```ts
const isJsonArray: <T>(value: T) => value is T & unknown[];
```

Type guard that checks if a value is a valid JSON array.

## Type Parameters

| Type Parameter |
| ------ |
| `T` |

## Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `T` |

## Returns

`value is T & unknown[]`

    ### <a id="isJsonObject"></a>isJsonObject

[**@xylabs/object**](#../../README)

***

```ts
const isJsonObject: <T>(value: T) => value is T & Record<string, unknown>;
```

Type guard that checks if a value is a valid JSON object.

## Type Parameters

| Type Parameter |
| ------ |
| `T` |

## Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `T` |

## Returns

`value is T & Record<string, unknown>`

    ### <a id="isJsonValue"></a>isJsonValue

[**@xylabs/object**](#../../README)

***

```ts
const isJsonValue: <T>(value: T) => value is T;
```

Type guard that checks if a value is a valid JSON value.

## Type Parameters

| Type Parameter |
| ------ |
| `T` |

## Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `T` |

## Returns

`value is T`

    ### <a id="toJsonArray"></a>toJsonArray

[**@xylabs/object**](#../../README)

***

```ts
const toJsonArray: {
<T>  (value: T): T & unknown[] | undefined;
<T>  (value: T, assert: ZodFactoryConfig): T & unknown[];
};
```

Parses a value into a JsonArray, throwing if it does not conform.

## Call Signature

```ts
<T>(value: T): T & unknown[] | undefined;
```

### Type Parameters

| Type Parameter |
| ------ |
| `T` |

### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `T` |

### Returns

`T` & `unknown`[] \| `undefined`

## Call Signature

```ts
<T>(value: T, assert: ZodFactoryConfig): T & unknown[];
```

### Type Parameters

| Type Parameter |
| ------ |
| `T` |

### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `T` |
| `assert` | `ZodFactoryConfig` |

### Returns

`T` & `unknown`[]

    ### <a id="toJsonObject"></a>toJsonObject

[**@xylabs/object**](#../../README)

***

```ts
const toJsonObject: {
<T>  (value: T): T & Record<string, unknown> | undefined;
<T>  (value: T, assert: ZodFactoryConfig): T & Record<string, unknown>;
};
```

Parses a value into a JsonObject, throwing if it does not conform.

## Call Signature

```ts
<T>(value: T): T & Record<string, unknown> | undefined;
```

### Type Parameters

| Type Parameter |
| ------ |
| `T` |

### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `T` |

### Returns

`T` & `Record`\<`string`, `unknown`\> \| `undefined`

## Call Signature

```ts
<T>(value: T, assert: ZodFactoryConfig): T & Record<string, unknown>;
```

### Type Parameters

| Type Parameter |
| ------ |
| `T` |

### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `T` |
| `assert` | `ZodFactoryConfig` |

### Returns

`T` & `Record`\<`string`, `unknown`\>

    ### <a id="toJsonValue"></a>toJsonValue

[**@xylabs/object**](#../../README)

***

```ts
const toJsonValue: {
<T>  (value: T): T | undefined;
<T>  (value: T, assert: ZodFactoryConfig): T;
};
```

Parses a value into a JsonValue, throwing if it does not conform.

## Call Signature

```ts
<T>(value: T): T | undefined;
```

### Type Parameters

| Type Parameter |
| ------ |
| `T` |

### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `T` |

### Returns

`T` \| `undefined`

## Call Signature

```ts
<T>(value: T, assert: ZodFactoryConfig): T;
```

### Type Parameters

| Type Parameter |
| ------ |
| `T` |

### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `T` |
| `assert` | `ZodFactoryConfig` |

### Returns

`T`

### index-un-deprecated


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
[npm-badge]: https://img.shields.io/npm/v/@xylabs/object.svg
[npm-link]: https://www.npmjs.com/package/@xylabs/object
[codacy-badge]: https://app.codacy.com/project/badge/Grade/c8e15e14f37741c18cfb47ac7245c698
[codacy-link]: https://www.codacy.com/gh/xylabs/sdk-js/dashboard?utm_source=github.com&utm_medium=referral&utm_content=xylabs/sdk-js&utm_campaign=Badge_Grade
[codeclimate-badge]: https://api.codeclimate.com/v1/badges/c5eb068f806f0b047ea7/maintainability
[codeclimate-link]: https://codeclimate.com/github/xylabs/sdk-js/maintainability
[snyk-badge]: https://snyk.io/test/github/xylabs/sdk-js/badge.svg?targetFile=package.json
[snyk-link]: https://snyk.io/test/github/xylabs/sdk-js?targetFile=package.json

[npm-downloads-badge]: https://img.shields.io/npm/dw/@xylabs/object
[npm-license-badge]: https://img.shields.io/npm/l/@xylabs/object

[jsdelivr-badge]: https://data.jsdelivr.com/v1/package/npm/@xylabs/object/badge
[jsdelivr-link]: https://www.jsdelivr.com/package/npm/@xylabs/object

[socket-badge]: https://socket.dev/api/badge/npm/package/@xylabs/object
[socket-link]: https://socket.dev/npm/package/@xylabs/object