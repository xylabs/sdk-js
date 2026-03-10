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

- [index-deprecated](#index-deprecated/README)
- [index-un-deprecated](#index-un-deprecated/README)
- [index](#index/README)

### index

### index-deprecated

  ### classes

    ### <a id="IsObjectFactory"></a>IsObjectFactory

[**@xylabs/object**](#../../README)

***

Factory class for creating type-guard functions that validate objects against a given shape and optional additional checks.

## Type Parameters

### T

`T` *extends* `TypedObject`

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
create(shape?, additionalChecks?): TypeCheck<T>;
```

Creates a type-guard function that validates an object matches the given shape and passes additional checks.

### Parameters

#### shape?

`ObjectTypeShape`

An optional map of property names to expected types.

#### additionalChecks?

[`TypeCheck`](#../type-aliases/TypeCheck)\<`TypedObject`\>[]

Optional extra type-check functions to run after shape validation.

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

### T

`T` *extends* [`EmptyObject`](#../type-aliases/EmptyObject) = [`EmptyObject`](#../type-aliases/EmptyObject)

## Constructors

### Constructor

```ts
new ObjectWrapper<T>(obj): ObjectWrapper<T>;
```

### Parameters

#### obj

`T`

### Returns

`ObjectWrapper`\<`T`\>

## Properties

### obj

```ts
readonly obj: T;
```

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

### T

`T` *extends* [`EmptyObject`](#../type-aliases/EmptyObject) = [`AnyObject`](#../type-aliases/AnyObject)

## Implements

- [`Validator`](#../interfaces/Validator)\<`T`\>

## Constructors

### Constructor

```ts
new ValidatorBase<T>(obj): ValidatorBase<T>;
```

### Parameters

#### obj

`T`

### Returns

`ValidatorBase`\<`T`\>

### Inherited from

[`ObjectWrapper`](#ObjectWrapper).[`constructor`](ObjectWrapper.md#constructor)

## Properties

### obj

```ts
readonly obj: T;
```

### Inherited from

[`ObjectWrapper`](#ObjectWrapper).[`obj`](ObjectWrapper.md#obj)

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
abstract validate(payload): Promisable<Error[]>;
```

### Parameters

#### payload

`T`

### Returns

`Promisable`\<`Error`[]\>

### Implementation of

[`Validator`](#../interfaces/Validator).[`validate`](../interfaces/Validator.md#validate)

  ### functions

    ### <a id="createDeepMerge"></a>createDeepMerge

[**@xylabs/object**](#../../README)

***

```ts
function createDeepMerge(options): <T>(...objects) => MergeAll<T>;
```

Creates a deep merge function with the specified options.

## Parameters

### options

`MergeOptions`

Options for merging.

## Returns

A deep merge function configured for the specified options.

```ts
<T>(...objects): MergeAll<T>;
```

### Type Parameters

### T

`T` *extends* [`AnyObject`](#../type-aliases/AnyObject)[]

### Parameters

### objects

...`T`

### Returns

`MergeAll`\<`T`\>

    ### <a id="isObject"></a>isObject

[**@xylabs/object**](#../../README)

***

## Call Signature

```ts
function isObject(value): value is object;
```

Type guard that checks whether a value is a plain object (not null and not an array).

### Parameters

### value

`unknown`

### Returns

`value is object`

## Call Signature

```ts
function isObject<T>(value): value is Extract<T, object>;
```

Type guard that checks whether a value is a plain object (not null and not an array).

### Type Parameters

### T

`T` *extends* `object`

### Parameters

### value

`T`

### Returns

`value is Extract<T, object>`

    ### <a id="isType"></a>isType

[**@xylabs/object**](#../../README)

***

```ts
function isType(value, expectedType): boolean;
```

## Parameters

### value

`unknown`

### expectedType

`FieldType`

## Returns

`boolean`

## Deprecated

use from @xylabs/typeof instead

    ### <a id="omitBy"></a>omitBy

[**@xylabs/object**](#../../README)

***

```ts
function omitBy<T>(
   obj, 
   predicate, 
maxDepth?): Partial<T>;
```

Creates a new object excluding properties that satisfy the predicate, with optional recursive depth.

## Type Parameters

### T

`T` *extends* `object`

## Parameters

### obj

`T`

The source object to omit properties from.

### predicate

[`OmitByPredicate`](#../type-aliases/OmitByPredicate)

A function that returns true for properties to exclude.

### maxDepth?

`number` = `1`

Maximum recursion depth for nested objects.

## Returns

`Partial`\<`T`\>

A partial copy of the object without matching properties.

    ### <a id="omitByPrefix"></a>omitByPrefix

[**@xylabs/object**](#../../README)

***

```ts
function omitByPrefix<T, P>(
   payload, 
   prefix, 
maxDepth?): DeepOmitStartsWith<T, P>;
```

Omits all properties whose keys start with the given prefix, recursively through nested objects.

## Type Parameters

### T

`T` *extends* `object`

### P

`P` *extends* `string`

## Parameters

### payload

`T`

The source object.

### prefix

`P`

The string prefix to match keys against.

### maxDepth?

`number` = `100`

Maximum recursion depth.

## Returns

[`DeepOmitStartsWith`](#../type-aliases/DeepOmitStartsWith)\<`T`, `P`\>

A new object without properties that have matching prefixed keys.

    ### <a id="pickBy"></a>pickBy

[**@xylabs/object**](#../../README)

***

```ts
function pickBy<T>(
   obj, 
   predicate, 
maxDepth?): Partial<T>;
```

Creates a new object containing only the properties that satisfy the predicate, with optional recursive depth.

## Type Parameters

### T

`T` *extends* `object`

## Parameters

### obj

`T`

The source object to pick properties from.

### predicate

[`PickByPredicate`](#../type-aliases/PickByPredicate)

A function that returns true for properties to include.

### maxDepth?

`number` = `1`

Maximum recursion depth for nested objects.

## Returns

`Partial`\<`T`\>

A partial copy of the object with only matching properties.

    ### <a id="pickByPrefix"></a>pickByPrefix

[**@xylabs/object**](#../../README)

***

```ts
function pickByPrefix<T, P>(
   payload, 
   prefix, 
maxDepth?): DeepPickStartsWith<T, P>;
```

Picks all properties whose keys start with the given prefix, recursively through nested objects.

## Type Parameters

### T

`T` *extends* `object`

### P

`P` *extends* `string`

## Parameters

### payload

`T`

The source object.

### prefix

`P`

The string prefix to match keys against.

### maxDepth?

`number` = `100`

Maximum recursion depth.

## Returns

[`DeepPickStartsWith`](#../type-aliases/DeepPickStartsWith)\<`T`, `P`\>

A new object containing only properties with matching prefixed keys.

    ### <a id="removeFields"></a>removeFields

[**@xylabs/object**](#../../README)

***

```ts
function removeFields<T, K>(obj, fields): Omit<T, K>;
```

Returns a shallow copy of the object with the specified fields removed.

## Type Parameters

### T

`T` *extends* `object`

### K

`K` *extends* `string` \| `number` \| `symbol`

## Parameters

### obj

`T`

The source object.

### fields

`K`[]

An array of keys to remove.

## Returns

`Omit`\<`T`, `K`\>

A new object without the specified fields.

    ### <a id="toSafeJson"></a>toSafeJson

[**@xylabs/object**](#../../README)

***

```ts
function toSafeJson(value, maxDepth?): unknown;
```

Converts a value to a JSON-safe representation, handling circular references and non-serializable types.

## Parameters

### value

`unknown`

The value to convert.

### maxDepth?

`number` = `3`

Maximum recursion depth.

## Returns

`unknown`

A JSON-safe value.

    ### <a id="toSafeJsonArray"></a>toSafeJsonArray

[**@xylabs/object**](#../../README)

***

```ts
function toSafeJsonArray(
   value, 
   cycleList?, 
   maxDepth?): unknown[];
```

Converts an array to a JSON-safe array, handling circular references and depth limits.

## Parameters

### value

`unknown`[]

The array to convert.

### cycleList?

`unknown`[]

Tracks visited objects to detect circular references.

### maxDepth?

`number` = `3`

Maximum recursion depth before truncating.

## Returns

`unknown`[]

A JSON-safe array representation.

    ### <a id="toSafeJsonObject"></a>toSafeJsonObject

[**@xylabs/object**](#../../README)

***

```ts
function toSafeJsonObject(
   value, 
   cycleList?, 
   maxDepth?): JsonObject;
```

Converts an object to a JSON-safe object, handling circular references and depth limits.

## Parameters

### value

`object`

The object to convert.

### cycleList?

`unknown`[]

Tracks visited objects to detect circular references.

### maxDepth?

`number` = `3`

Maximum recursion depth before truncating.

## Returns

[`JsonObject`](#../type-aliases/JsonObject)

A JSON-safe object representation.

    ### <a id="toSafeJsonString"></a>toSafeJsonString

[**@xylabs/object**](#../../README)

***

```ts
function toSafeJsonString(value, maxDepth?): string;
```

Converts a value to a pretty-printed JSON string, safely handling circular references and non-JSON types.

## Parameters

### value

`unknown`

The value to serialize.

### maxDepth?

`number` = `3`

Maximum recursion depth.

## Returns

`string`

A formatted JSON string.

    ### <a id="toSafeJsonValue"></a>toSafeJsonValue

[**@xylabs/object**](#../../README)

***

```ts
function toSafeJsonValue(
   value, 
   cycleList?, 
   maxDepth?): unknown;
```

Converts an unknown value to a JSON-safe value, replacing circular references with '[Circular]' and
non-JSON types with descriptive placeholder strings.

## Parameters

### value

`unknown`

The value to convert.

### cycleList?

`unknown`[]

Tracks visited objects to detect circular references.

### maxDepth?

`number` = `3`

Maximum recursion depth before truncating with '[MaxDepth]'.

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

### log?

```ts
optional log: boolean | Logger;
```

### Inherited from

[`TypeCheckConfig`](#TypeCheckConfig).[`log`](TypeCheckConfig.md#log)

    ### <a id="TypeCheckConfig"></a>TypeCheckConfig

[**@xylabs/object**](#../../README)

***

Configuration options for type check functions, with optional logging.

## Extended by

- [`ObjectTypeConfig`](#ObjectTypeConfig)
- [`TypeCheckRequiredConfig`](#TypeCheckRequiredConfig)
- [`TypeCheckOptionalConfig`](#TypeCheckOptionalConfig)

## Properties

### log?

```ts
optional log: boolean | Logger;
```

    ### <a id="TypeCheckOptionalConfig"></a>TypeCheckOptionalConfig

[**@xylabs/object**](#../../README)

***

Type check configuration that marks the value as optional, returning undefined on failure.

## Extends

- [`TypeCheckConfig`](#TypeCheckConfig)

## Properties

### log?

```ts
optional log: boolean | Logger;
```

### Inherited from

[`TypeCheckConfig`](#TypeCheckConfig).[`log`](TypeCheckConfig.md#log)

***

### required

```ts
required: false;
```

    ### <a id="TypeCheckRequiredConfig"></a>TypeCheckRequiredConfig

[**@xylabs/object**](#../../README)

***

Type check configuration that marks the value as required, causing assertions on failure.

## Extends

- [`TypeCheckConfig`](#TypeCheckConfig)

## Properties

### log?

```ts
optional log: boolean | Logger;
```

### Inherited from

[`TypeCheckConfig`](#TypeCheckConfig).[`log`](TypeCheckConfig.md#log)

***

### required

```ts
required: true;
```

    ### <a id="Validator"></a>Validator

[**@xylabs/object**](#../../README)

***

Interface for validating objects and returning any errors found.

## Type Parameters

### T

`T` *extends* [`EmptyObject`](#../type-aliases/EmptyObject) = [`AnyObject`](#../type-aliases/AnyObject)

## Methods

### validate()

```ts
validate(payload): Promisable<Error[]>;
```

### Parameters

#### payload

`T`

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
type AsOptionalTypeFunction<T> = <TType>(value) => TType | undefined;
```

A simplified type-narrowing function that returns T or undefined, without assertion support.

## Type Parameters

### T

`T` *extends* `AnyNonPromise` = `AnyNonPromise`

## Type Parameters

### TType

`TType` *extends* `AnyNonPromise`

## Parameters

### value

`AnyNonPromise`

## Returns

`TType` \| `undefined`

    ### <a id="AsTypeFunction"></a>AsTypeFunction

[**@xylabs/object**](#../../README)

***

```ts
type AsTypeFunction<T> = {
<TType>  (value): TType | undefined;
<TType>  (value, config): TType;
<TType>  (value, config): TType | undefined;
<TType>  (value, assert): TType | undefined;
<TType>  (value, assert, config): TType;
<TType>  (value, assert, config): TType | undefined;
};
```

A type-narrowing function that attempts to cast a value to T, with optional assertion and configuration overloads.

## Type Parameters

### T

`T` *extends* `AnyNonPromise` = `AnyNonPromise`

## Call Signature

```ts
<TType>(value): TType | undefined;
```

### Type Parameters

### TType

`TType` *extends* `AnyNonPromise`

### Parameters

### value

`AnyNonPromise`

### Returns

`TType` \| `undefined`

## Call Signature

```ts
<TType>(value, config): TType;
```

### Type Parameters

### TType

`TType` *extends* `AnyNonPromise`

### Parameters

### value

`AnyNonPromise`

### config

[`TypeCheckRequiredConfig`](#../interfaces/TypeCheckRequiredConfig)

### Returns

`TType`

## Call Signature

```ts
<TType>(value, config): TType | undefined;
```

### Type Parameters

### TType

`TType` *extends* `AnyNonPromise`

### Parameters

### value

`AnyNonPromise`

### config

[`TypeCheckConfig`](#../interfaces/TypeCheckConfig) | [`TypeCheckOptionalConfig`](#../interfaces/TypeCheckOptionalConfig)

### Returns

`TType` \| `undefined`

## Call Signature

```ts
<TType>(value, assert): TType | undefined;
```

### Type Parameters

### TType

`TType` *extends* `AnyNonPromise`

### Parameters

### value

`AnyNonPromise`

### assert

[`StringOrAlertFunction`](#StringOrAlertFunction)\<`TType`\>

### Returns

`TType` \| `undefined`

## Call Signature

```ts
<TType>(
   value, 
   assert, 
   config): TType;
```

### Type Parameters

### TType

`TType` *extends* `AnyNonPromise`

### Parameters

### value

`AnyNonPromise`

### assert

[`StringOrAlertFunction`](#StringOrAlertFunction)\<`TType`\>

### config

[`TypeCheckRequiredConfig`](#../interfaces/TypeCheckRequiredConfig)

### Returns

`TType`

## Call Signature

```ts
<TType>(
   value, 
   assert, 
   config): TType | undefined;
```

### Type Parameters

### TType

`TType` *extends* `AnyNonPromise`

### Parameters

### value

`AnyNonPromise`

### assert

[`StringOrAlertFunction`](#StringOrAlertFunction)\<`TType`\>

### config

[`TypeCheckConfig`](#../interfaces/TypeCheckConfig) | [`TypeCheckOptionalConfig`](#../interfaces/TypeCheckOptionalConfig)

### Returns

`TType` \| `undefined`

    ### <a id="Compare"></a>Compare

[**@xylabs/object**](#../../README)

***

```ts
type Compare<T> = (a, b) => number;
```

A comparator function that returns a negative number if a < b, zero if a == b, and a positive number if a > b.

## Type Parameters

### T

`T`

## Parameters

### a

`T`

### b

`T`

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

### T

`T`

### Prefix

`Prefix` *extends* `string`

    ### <a id="DeepPickStartsWith"></a>DeepPickStartsWith

[**@xylabs/object**](#../../README)

***

```ts
type DeepPickStartsWith<T, Prefix> = T extends infer U[] ? DeepPickStartsWith<U, Prefix>[] : T extends object ? { [K in keyof T as K extends string ? K extends `${Prefix}${string}` ? K : never : K]: DeepPickStartsWith<T[K], Prefix> } : T;
```

Recursively picks only the keys that start with the given prefix, including in nested objects and arrays.

## Type Parameters

### T

`T`

### Prefix

`Prefix` *extends* `string`

    ### <a id="DeepRestrictToJson"></a>DeepRestrictToJson

[**@xylabs/object**](#../../README)

***

```ts
type DeepRestrictToJson<T> = { [K in keyof T as K extends string ? K : never]: T[K] extends (infer U)[] ? DeepRestrictToJson<U>[] : T[K] extends object ? DeepRestrictToJson<T[K]> : T[K] extends JsonValue ? T[K] : never };
```

Recursively restricts an object type to only JSON-compatible values, excluding non-serializable types.

## Type Parameters

### T

`T`

    ### <a id="DeepRestrictToStringKeys"></a>DeepRestrictToStringKeys

[**@xylabs/object**](#../../README)

***

```ts
type DeepRestrictToStringKeys<T> = { [K in keyof T as K extends string ? K : never]: T[K] extends (infer U)[] ? DeepRestrictToStringKeys<U>[] : T[K] extends object ? DeepRestrictToStringKeys<T[K]> : T[K] };
```

Recursively removes all non-string keys from an object type, including in nested objects and arrays.

## Type Parameters

### T

`T`

    ### <a id="EmptyObject"></a>EmptyObject

[**@xylabs/object**](#../../README)

***

```ts
type EmptyObject<T> = Exclude<{ [K in keyof T]?: never }, unknown[] | (...args) => unknown | null>;
```

An empty object, which means that it does enforce the set of field names, defaulting to an empty set until
extended from, which then adds only those additional fields

## Type Parameters

### T

`T` *extends* `object` = `object`

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
type OmitByPredicate<T> = (value, key) => boolean;
```

A predicate function used to determine which properties to omit from an object.

## Type Parameters

### T

`T` *extends* [`EmptyObject`](#EmptyObject) = `Record`\<`string`, `unknown`\>

## Parameters

### value

`T`\[keyof `T`\]

### key

keyof `T`

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

### T

`T`

### Prefix

`Prefix` *extends* `string`

    ### <a id="Optional"></a>Optional

[**@xylabs/object**](#../../README)

***

```ts
type Optional<T, F> = Omit<T, F> & Partial<Pick<T, F>>;
```

Makes the specified fields of T optional while keeping the rest required.

## Type Parameters

### T

`T` *extends* `object`

### F

`F` *extends* keyof `T`

    ### <a id="Override"></a>Override

[**@xylabs/object**](#../../README)

***

```ts
type Override<T1, T2> = Omit<T1, keyof T2> & T2;
```

Overrides properties of T1 with those from T2.

## Type Parameters

### T1

`T1`

### T2

`T2`

    ### <a id="PartialRecord"></a>PartialRecord

[**@xylabs/object**](#../../README)

***

```ts
type PartialRecord<K, T> = { [P in K]?: T };
```

## Type Parameters

### K

`K` *extends* keyof `any`

### T

`T`

## Deprecated

use Partial<Record<>> instead

    ### <a id="PickByPredicate"></a>PickByPredicate

[**@xylabs/object**](#../../README)

***

```ts
type PickByPredicate<T> = (value, key) => boolean;
```

A predicate function used to determine which properties to pick from an object.

## Type Parameters

### T

`T` *extends* [`EmptyObject`](#EmptyObject) = `Record`\<`string`, `unknown`\>

## Parameters

### value

`T`\[keyof `T`\]

### key

keyof `T`

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

### T

`T`

### Prefix

`Prefix` *extends* `string`

    ### <a id="Simplify"></a>Simplify

[**@xylabs/object**](#../../README)

***

```ts
type Simplify<T> = { [K in keyof T]: T[K] } & object;
```

Flattens an intersection or complex mapped type into a single object type for better readability.

## Type Parameters

### T

`T`

    ### <a id="StringKeyObject"></a>StringKeyObject

[**@xylabs/object**](#../../README)

***

```ts
type StringKeyObject<T> = object;
```

An object type with string keys and values of type T.

## Type Parameters

### T

`T` = `unknown`

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

### T

`T` *extends* `AnyNonPromise`

    ### <a id="TypeCheck"></a>TypeCheck

[**@xylabs/object**](#../../README)

***

```ts
type TypeCheck<T> = {
  (obj): obj is T;
  (obj, config): obj is T;
  (obj, config): obj is T;
};
```

A type guard function that checks whether a value conforms to type T, with optional configuration.

## Type Parameters

### T

`T` *extends* `TypedValue`

## Call Signature

```ts
(obj): obj is T;
```

### Parameters

### obj

`AnyNonPromise`

### Returns

`obj is T`

## Call Signature

```ts
(obj, config): obj is T;
```

### Parameters

### obj

`AnyNonPromise`

### config

[`TypeCheckConfig`](#../interfaces/TypeCheckConfig)

### Returns

`obj is T`

## Call Signature

```ts
(obj, config): obj is T;
```

### Parameters

### obj

`AnyNonPromise`

### config

`number` | [`TypeCheckConfig`](#../interfaces/TypeCheckConfig) | `undefined`

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

### T

`T` *extends* [`EmptyObject`](#EmptyObject) \| `void`

### TAdditional

`TAdditional` *extends* [`EmptyObject`](#EmptyObject) \| `void` = `void`

  ### variables

    ### <a id="AsObjectFactory"></a>AsObjectFactory

[**@xylabs/object**](#../../README)

***

```ts
const AsObjectFactory: object;
```

Factory for creating type-narrowing functions for TypedObject types.

## Type Declaration

### create()

```ts
create: <T>(typeCheck) => AsTypeFunction<T>;
```

### Type Parameters

#### T

`T` *extends* `TypedObject`

### Parameters

#### typeCheck

[`TypeCheck`](#../type-aliases/TypeCheck)\<`T`\>

### Returns

[`AsTypeFunction`](#../type-aliases/AsTypeFunction)\<`T`\>

### createOptional()

```ts
createOptional: <T>(typeCheck) => (value) => T | undefined;
```

### Type Parameters

#### T

`T` *extends* `TypedObject`

### Parameters

#### typeCheck

[`TypeCheck`](#../type-aliases/TypeCheck)\<`T`\>

### Returns

```ts
(value): T | undefined;
```

#### Parameters

##### value

`AnyNonPromise`

#### Returns

`T` \| `undefined`

    ### <a id="AsTypeFactory"></a>AsTypeFactory

[**@xylabs/object**](#../../README)

***

```ts
const AsTypeFactory: object;
```

Factory for creating type-narrowing 'as' functions that cast a value to T or return undefined.
Supports optional assertion messages and configuration for required/optional behavior.

## Type Declaration

### create()

```ts
create: <T>(typeCheck) => AsTypeFunction<T>;
```

### Type Parameters

#### T

`T` *extends* `AnyNonPromise`

### Parameters

#### typeCheck

[`TypeCheck`](#../type-aliases/TypeCheck)\<`T`\>

### Returns

[`AsTypeFunction`](#../type-aliases/AsTypeFunction)\<`T`\>

### createOptional()

```ts
createOptional: <T>(typeCheck) => (value) => T | undefined;
```

### Type Parameters

#### T

`T` *extends* `AnyNonPromise`

### Parameters

#### typeCheck

[`TypeCheck`](#../type-aliases/TypeCheck)\<`T`\>

### Returns

```ts
(value): T | undefined;
```

#### Parameters

##### value

`AnyNonPromise`

#### Returns

`T` \| `undefined`

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
<T>  (value): T & unknown[] | undefined;
<T>  (value, assert): T & unknown[];
};
```

Casts a value to JsonArray or returns undefined if it does not conform.

## Call Signature

```ts
<T>(value): T & unknown[] | undefined;
```

### Type Parameters

### T

`T`

### Parameters

### value

`T`

### Returns

`T` & `unknown`[] \| `undefined`

## Call Signature

```ts
<T>(value, assert): T & unknown[];
```

### Type Parameters

### T

`T`

### Parameters

### value

`T`

### assert

`ZodFactoryConfig`

### Returns

`T` & `unknown`[]

    ### <a id="asJsonObject"></a>asJsonObject

[**@xylabs/object**](#../../README)

***

```ts
const asJsonObject: {
<T>  (value): T & Record<string, unknown> | undefined;
<T>  (value, assert): T & Record<string, unknown>;
};
```

Casts a value to JsonObject or returns undefined if it does not conform.

## Call Signature

```ts
<T>(value): T & Record<string, unknown> | undefined;
```

### Type Parameters

### T

`T`

### Parameters

### value

`T`

### Returns

`T` & `Record`\<`string`, `unknown`\> \| `undefined`

## Call Signature

```ts
<T>(value, assert): T & Record<string, unknown>;
```

### Type Parameters

### T

`T`

### Parameters

### value

`T`

### assert

`ZodFactoryConfig`

### Returns

`T` & `Record`\<`string`, `unknown`\>

    ### <a id="asJsonValue"></a>asJsonValue

[**@xylabs/object**](#../../README)

***

```ts
const asJsonValue: {
<T>  (value): T | undefined;
<T>  (value, assert): T;
};
```

Casts a value to JsonValue or returns undefined if it does not conform.

## Call Signature

```ts
<T>(value): T | undefined;
```

### Type Parameters

### T

`T`

### Parameters

### value

`T`

### Returns

`T` \| `undefined`

## Call Signature

```ts
<T>(value, assert): T;
```

### Type Parameters

### T

`T`

### Parameters

### value

`T`

### assert

`ZodFactoryConfig`

### Returns

`T`

    ### <a id="deepMerge"></a>deepMerge

[**@xylabs/object**](#../../README)

***

```ts
const deepMerge: <T>(...objects) => MergeAll<T>;
```

Deeply merges multiple objects into a new object.

## Type Parameters

### T

`T` *extends* [`AnyObject`](#../type-aliases/AnyObject)[]

## Parameters

### objects

...`T`

Multiple objects to merge deeply.
The function merges properties from all objects into a new object.
If a property exists in multiple objects, the last object's value will be used.
If a property is an object, it will be merged recursively.
If a property is an array, it will be overwritten by the last object's value.
If a property is a primitive value, it will be overwritten by the last object's value.
If a property is undefined in the source, it will be skipped.
If a property is a symbol, it will be merged as well.

## Returns

`MergeAll`\<`T`\>

A new object with the merged properties.

    ### <a id="isJsonArray"></a>isJsonArray

[**@xylabs/object**](#../../README)

***

```ts
const isJsonArray: <T>(value) => value is T & unknown[];
```

Type guard that checks if a value is a valid JSON array.

## Type Parameters

### T

`T`

## Parameters

### value

`T`

## Returns

`value is T & unknown[]`

    ### <a id="isJsonObject"></a>isJsonObject

[**@xylabs/object**](#../../README)

***

```ts
const isJsonObject: <T>(value) => value is T & Record<string, unknown>;
```

Type guard that checks if a value is a valid JSON object.

## Type Parameters

### T

`T`

## Parameters

### value

`T`

## Returns

`value is T & Record<string, unknown>`

    ### <a id="isJsonValue"></a>isJsonValue

[**@xylabs/object**](#../../README)

***

```ts
const isJsonValue: <T>(value) => value is T;
```

Type guard that checks if a value is a valid JSON value.

## Type Parameters

### T

`T`

## Parameters

### value

`T`

## Returns

`value is T`

    ### <a id="toJsonArray"></a>toJsonArray

[**@xylabs/object**](#../../README)

***

```ts
const toJsonArray: {
<T>  (value): T & unknown[] | undefined;
<T>  (value, assert): T & unknown[];
};
```

Parses a value into a JsonArray, throwing if it does not conform.

## Call Signature

```ts
<T>(value): T & unknown[] | undefined;
```

### Type Parameters

### T

`T`

### Parameters

### value

`T`

### Returns

`T` & `unknown`[] \| `undefined`

## Call Signature

```ts
<T>(value, assert): T & unknown[];
```

### Type Parameters

### T

`T`

### Parameters

### value

`T`

### assert

`ZodFactoryConfig`

### Returns

`T` & `unknown`[]

    ### <a id="toJsonObject"></a>toJsonObject

[**@xylabs/object**](#../../README)

***

```ts
const toJsonObject: {
<T>  (value): T & Record<string, unknown> | undefined;
<T>  (value, assert): T & Record<string, unknown>;
};
```

Parses a value into a JsonObject, throwing if it does not conform.

## Call Signature

```ts
<T>(value): T & Record<string, unknown> | undefined;
```

### Type Parameters

### T

`T`

### Parameters

### value

`T`

### Returns

`T` & `Record`\<`string`, `unknown`\> \| `undefined`

## Call Signature

```ts
<T>(value, assert): T & Record<string, unknown>;
```

### Type Parameters

### T

`T`

### Parameters

### value

`T`

### assert

`ZodFactoryConfig`

### Returns

`T` & `Record`\<`string`, `unknown`\>

    ### <a id="toJsonValue"></a>toJsonValue

[**@xylabs/object**](#../../README)

***

```ts
const toJsonValue: {
<T>  (value): T | undefined;
<T>  (value, assert): T;
};
```

Parses a value into a JsonValue, throwing if it does not conform.

## Call Signature

```ts
<T>(value): T | undefined;
```

### Type Parameters

### T

`T`

### Parameters

### value

`T`

### Returns

`T` \| `undefined`

## Call Signature

```ts
<T>(value, assert): T;
```

### Type Parameters

### T

`T`

### Parameters

### value

`T`

### assert

`ZodFactoryConfig`

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