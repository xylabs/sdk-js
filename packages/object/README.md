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

## API Documentation

**@xylabs/object**

***

## Classes

- [IsObjectFactory](#classes/IsObjectFactory)
- [ObjectWrapper](#classes/ObjectWrapper)
- [ValidatorBase](#classes/ValidatorBase)

## Interfaces

- [ObjectTypeConfig](#interfaces/ObjectTypeConfig)
- [Validator](#interfaces/Validator)
- [TypeCheckConfig](#interfaces/TypeCheckConfig)
- [TypeCheckRequiredConfig](#interfaces/TypeCheckRequiredConfig)
- [TypeCheckOptionalConfig](#interfaces/TypeCheckOptionalConfig)

## Type Aliases

- [EmptyObject](#type-aliases/EmptyObject)
- [EmptyObjectOf](#type-aliases/EmptyObjectOf)
- [JsonValue](#type-aliases/JsonValue)
- [JsonObject](#type-aliases/JsonObject)
- [JsonArray](#type-aliases/JsonArray)
- [OmitStartsWith](#type-aliases/OmitStartsWith)
- [DeepOmitStartsWith](#type-aliases/DeepOmitStartsWith)
- [DeepRestrictToStringKeys](#type-aliases/DeepRestrictToStringKeys)
- [Optional](#type-aliases/Optional)
- [Override](#type-aliases/Override)
- [~~PartialRecord~~](#type-aliases/PartialRecord)
- [PickStartsWith](#type-aliases/PickStartsWith)
- [DeepPickStartsWith](#type-aliases/DeepPickStartsWith)
- [StringKeyObject](#type-aliases/StringKeyObject)
- [WithAdditional](#type-aliases/WithAdditional)
- [OmitByPredicate](#type-aliases/OmitByPredicate)
- [PickByPredicate](#type-aliases/PickByPredicate)
- [AnyObject](#type-aliases/AnyObject)
- [AsTypeFunction](#type-aliases/AsTypeFunction)
- [AsOptionalTypeFunction](#type-aliases/AsOptionalTypeFunction)
- [Compare](#type-aliases/Compare)
- [StringOrAlertFunction](#type-aliases/StringOrAlertFunction)
- [TypeCheck](#type-aliases/TypeCheck)

## Variables

- [AsObjectFactory](#variables/AsObjectFactory)
- [AsTypeFactory](#variables/AsTypeFactory)
- [asAnyObject](#variables/asAnyObject)
- [deepMerge](#variables/deepMerge)

## Functions

- [isJsonValue](#functions/isJsonValue)
- [isJsonArray](#functions/isJsonArray)
- [isValidJsonFieldPair](#functions/isValidJsonFieldPair)
- [isJsonObject](#functions/isJsonObject)
- [createDeepMerge](#functions/createDeepMerge)
- [isObject](#functions/isObject)
- [isType](#functions/isType)
- [omitBy](#functions/omitBy)
- [omitByPrefix](#functions/omitByPrefix)
- [pickBy](#functions/pickBy)
- [pickByPrefix](#functions/pickByPrefix)
- [removeFields](#functions/removeFields)
- [toJsonArray](#functions/toJsonArray)
- [toJsonObject](#functions/toJsonObject)
- [toJsonValue](#functions/toJsonValue)
- [toJsonString](#functions/toJsonString)
- [toJson](#functions/toJson)

### classes

  ### <a id="IsObjectFactory"></a>IsObjectFactory

[**@xylabs/object**](#../README)

***

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

### Parameters

#### shape?

`ObjectTypeShape`

#### additionalChecks?

[`TypeCheck`](#../type-aliases/TypeCheck)\<`TypedObject`\>[]

### Returns

[`TypeCheck`](#../type-aliases/TypeCheck)\<`T`\>

  ### <a id="ObjectWrapper"></a>ObjectWrapper

[**@xylabs/object**](#../README)

***

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

[**@xylabs/object**](#../README)

***

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

[**@xylabs/object**](#../README)

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

  ### <a id="isJsonArray"></a>isJsonArray

[**@xylabs/object**](#../README)

***

```ts
function isJsonArray(value): value is JsonArray;
```

## Parameters

### value

`unknown`

## Returns

`value is JsonArray`

  ### <a id="isJsonObject"></a>isJsonObject

[**@xylabs/object**](#../README)

***

```ts
function isJsonObject(value): value is JsonObject;
```

## Parameters

### value

`unknown`

## Returns

`value is JsonObject`

  ### <a id="isJsonValue"></a>isJsonValue

[**@xylabs/object**](#../README)

***

```ts
function isJsonValue(value): value is JsonValue;
```

## Parameters

### value

`unknown`

## Returns

`value is JsonValue`

  ### <a id="isObject"></a>isObject

[**@xylabs/object**](#../README)

***

```ts
function isObject<T>(value): value is T & object;
```

## Type Parameters

### T

`T`

## Parameters

### value

`T`

## Returns

`value is T & object`

  ### <a id="isType"></a>isType

[**@xylabs/object**](#../README)

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

  ### <a id="isValidJsonFieldPair"></a>isValidJsonFieldPair

[**@xylabs/object**](#../README)

***

```ts
function isValidJsonFieldPair(__namedParameters): boolean;
```

## Parameters

### \_\_namedParameters

\[`unknown`, `unknown`\]

## Returns

`boolean`

  ### <a id="omitBy"></a>omitBy

[**@xylabs/object**](#../README)

***

```ts
function omitBy<T>(
   obj, 
   predicate, 
maxDepth): Partial<T>;
```

## Type Parameters

### T

`T` *extends* `object`

## Parameters

### obj

`T`

### predicate

[`OmitByPredicate`](#../type-aliases/OmitByPredicate)

### maxDepth

`number` = `1`

## Returns

`Partial`\<`T`\>

  ### <a id="omitByPrefix"></a>omitByPrefix

[**@xylabs/object**](#../README)

***

```ts
function omitByPrefix<T, P>(
   payload, 
   prefix, 
maxDepth): DeepOmitStartsWith<T, P>;
```

## Type Parameters

### T

`T` *extends* `object`

### P

`P` *extends* `string`

## Parameters

### payload

`T`

### prefix

`P`

### maxDepth

`number` = `100`

## Returns

[`DeepOmitStartsWith`](#../type-aliases/DeepOmitStartsWith)\<`T`, `P`\>

  ### <a id="pickBy"></a>pickBy

[**@xylabs/object**](#../README)

***

```ts
function pickBy<T>(
   obj, 
   predicate, 
maxDepth): Partial<T>;
```

## Type Parameters

### T

`T` *extends* `object`

## Parameters

### obj

`T`

### predicate

[`PickByPredicate`](#../type-aliases/PickByPredicate)

### maxDepth

`number` = `1`

## Returns

`Partial`\<`T`\>

  ### <a id="pickByPrefix"></a>pickByPrefix

[**@xylabs/object**](#../README)

***

```ts
function pickByPrefix<T, P>(
   payload, 
   prefix, 
maxDepth): DeepPickStartsWith<T, P>;
```

## Type Parameters

### T

`T` *extends* `object`

### P

`P` *extends* `string`

## Parameters

### payload

`T`

### prefix

`P`

### maxDepth

`number` = `100`

## Returns

[`DeepPickStartsWith`](#../type-aliases/DeepPickStartsWith)\<`T`, `P`\>

  ### <a id="removeFields"></a>removeFields

[**@xylabs/object**](#../README)

***

```ts
function removeFields<T, K>(obj, fields): Omit<T, K>;
```

## Type Parameters

### T

`T` *extends* `object`

### K

`K` *extends* `string` \| `number` \| `symbol`

## Parameters

### obj

`T`

### fields

`K`[]

## Returns

`Omit`\<`T`, `K`\>

  ### <a id="toJson"></a>toJson

[**@xylabs/object**](#../README)

***

```ts
function toJson(value, maxDepth): JsonValue;
```

## Parameters

### value

`unknown`

### maxDepth

`number` = `3`

## Returns

[`JsonValue`](#../type-aliases/JsonValue)

  ### <a id="toJsonArray"></a>toJsonArray

[**@xylabs/object**](#../README)

***

```ts
function toJsonArray(
   value, 
   cycleList?, 
   maxDepth?): JsonArray;
```

## Parameters

### value

`unknown`[]

### cycleList?

`unknown`[]

### maxDepth?

`number` = `3`

## Returns

[`JsonArray`](#../type-aliases/JsonArray)

  ### <a id="toJsonObject"></a>toJsonObject

[**@xylabs/object**](#../README)

***

```ts
function toJsonObject(
   value, 
   cycleList?, 
   maxDepth?): JsonObject;
```

## Parameters

### value

`object`

### cycleList?

`unknown`[]

### maxDepth?

`number` = `3`

## Returns

[`JsonObject`](#../type-aliases/JsonObject)

  ### <a id="toJsonString"></a>toJsonString

[**@xylabs/object**](#../README)

***

```ts
function toJsonString(value, maxDepth): string;
```

## Parameters

### value

`unknown`

### maxDepth

`number` = `3`

## Returns

`string`

  ### <a id="toJsonValue"></a>toJsonValue

[**@xylabs/object**](#../README)

***

```ts
function toJsonValue(
   value, 
   cycleList?, 
   maxDepth?): JsonValue;
```

## Parameters

### value

`unknown`

### cycleList?

`unknown`[]

### maxDepth?

`number` = `3`

## Returns

[`JsonValue`](#../type-aliases/JsonValue)

### interfaces

  ### <a id="ObjectTypeConfig"></a>ObjectTypeConfig

[**@xylabs/object**](#../README)

***

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

[**@xylabs/object**](#../README)

***

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

[**@xylabs/object**](#../README)

***

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

[**@xylabs/object**](#../README)

***

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

[**@xylabs/object**](#../README)

***

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

[**@xylabs/object**](#../README)

***

```ts
type AnyObject = Record<TypedKey, unknown>;
```

Any object, which means that it does not enforce the set of fields that it has.  Extending from AnyObject
will result in a type that includes the universal set of field names

  ### <a id="AsOptionalTypeFunction"></a>AsOptionalTypeFunction

[**@xylabs/object**](#../README)

***

```ts
type AsOptionalTypeFunction<T> = <TType>(value) => undefined | TType;
```

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

`undefined` \| `TType`

  ### <a id="AsTypeFunction"></a>AsTypeFunction

[**@xylabs/object**](#../README)

***

```ts
type AsTypeFunction<T> = {
<TType>  (value): undefined | TType;
<TType>  (value, config): TType;
<TType>  (value, config): undefined | TType;
<TType>  (value, assert): undefined | TType;
<TType>  (value, assert, config): TType;
<TType>  (value, assert, config): undefined | TType;
};
```

## Type Parameters

### T

`T` *extends* `AnyNonPromise` = `AnyNonPromise`

## Call Signature

```ts
<TType>(value): undefined | TType;
```

### Type Parameters

### TType

`TType` *extends* `AnyNonPromise`

### Parameters

### value

`AnyNonPromise`

### Returns

`undefined` \| `TType`

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
<TType>(value, config): undefined | TType;
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

`undefined` \| `TType`

## Call Signature

```ts
<TType>(value, assert): undefined | TType;
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

`undefined` \| `TType`

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
   config): undefined | TType;
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

`undefined` \| `TType`

  ### <a id="Compare"></a>Compare

[**@xylabs/object**](#../README)

***

```ts
type Compare<T> = (a, b) => number;
```

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

[**@xylabs/object**](#../README)

***

```ts
type DeepOmitStartsWith<T, Prefix> = T extends infer U[] ? DeepOmitStartsWith<U, Prefix>[] : T extends object ? { [K in keyof T as K extends string ? K extends `${Prefix}${string}` ? never : K : K]: DeepOmitStartsWith<T[K], Prefix> } : T;
```

## Type Parameters

### T

`T`

### Prefix

`Prefix` *extends* `string`

  ### <a id="DeepPickStartsWith"></a>DeepPickStartsWith

[**@xylabs/object**](#../README)

***

```ts
type DeepPickStartsWith<T, Prefix> = T extends infer U[] ? DeepPickStartsWith<U, Prefix>[] : T extends object ? { [K in keyof T as K extends string ? K extends `${Prefix}${string}` ? K : never : K]: DeepPickStartsWith<T[K], Prefix> } : T;
```

## Type Parameters

### T

`T`

### Prefix

`Prefix` *extends* `string`

  ### <a id="DeepRestrictToStringKeys"></a>DeepRestrictToStringKeys

[**@xylabs/object**](#../README)

***

```ts
type DeepRestrictToStringKeys<T> = { [K in keyof T as K extends string ? K : never]: T[K] extends (infer U)[] ? DeepRestrictToStringKeys<U>[] : T[K] extends object ? DeepRestrictToStringKeys<T[K]> : T[K] };
```

## Type Parameters

### T

`T`

  ### <a id="EmptyObject"></a>EmptyObject

[**@xylabs/object**](#../README)

***

```ts
type EmptyObject<T> = { [K in keyof T]?: never };
```

An empty object, which means that it does enforce the set of field names, defaulting to an empty set until
extended from, which then adds only those additional fields

## Type Parameters

### T

`T` *extends* `object` = `object`

  ### <a id="EmptyObjectOf"></a>EmptyObjectOf

[**@xylabs/object**](#../README)

***

```ts
type EmptyObjectOf<T> = EmptyObject<T> extends T ? EmptyObject<T> : never;
```

## Type Parameters

### T

`T` *extends* `object`

  ### <a id="JsonArray"></a>JsonArray

[**@xylabs/object**](#../README)

***

```ts
type JsonArray = JsonValue[];
```

  ### <a id="JsonObject"></a>JsonObject

[**@xylabs/object**](#../README)

***

```ts
type JsonObject = object;
```

## Index Signature

```ts
[key: string]: JsonValue
```

  ### <a id="JsonValue"></a>JsonValue

[**@xylabs/object**](#../README)

***

```ts
type JsonValue = 
  | string
  | number
  | boolean
  | null
  | JsonObject
  | JsonArray;
```

  ### <a id="OmitByPredicate"></a>OmitByPredicate

[**@xylabs/object**](#../README)

***

```ts
type OmitByPredicate<T> = (value, key) => boolean;
```

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

[**@xylabs/object**](#../README)

***

```ts
type OmitStartsWith<T, Prefix> = { [K in keyof T as K extends `${Prefix}${string}` ? never : K]: T[K] };
```

## Type Parameters

### T

`T`

### Prefix

`Prefix` *extends* `string`

  ### <a id="Optional"></a>Optional

[**@xylabs/object**](#../README)

***

```ts
type Optional<T, F> = Omit<T, F> & Partial<Pick<T, F>>;
```

## Type Parameters

### T

`T` *extends* `object`

### F

`F` *extends* keyof `T`

  ### <a id="Override"></a>Override

[**@xylabs/object**](#../README)

***

```ts
type Override<T1, T2> = Omit<T1, keyof T2> & T2;
```

## Type Parameters

### T1

`T1`

### T2

`T2`

  ### <a id="PartialRecord"></a>PartialRecord

[**@xylabs/object**](#../README)

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

[**@xylabs/object**](#../README)

***

```ts
type PickByPredicate<T> = (value, key) => boolean;
```

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

[**@xylabs/object**](#../README)

***

```ts
type PickStartsWith<T, Prefix> = { [K in keyof T as K extends `${Prefix}${string}` ? K : never]: T[K] };
```

## Type Parameters

### T

`T`

### Prefix

`Prefix` *extends* `string`

  ### <a id="StringKeyObject"></a>StringKeyObject

[**@xylabs/object**](#../README)

***

```ts
type StringKeyObject<T> = object;
```

## Type Parameters

### T

`T` = `unknown`

## Index Signature

```ts
[key: string]: T
```

  ### <a id="StringOrAlertFunction"></a>StringOrAlertFunction

[**@xylabs/object**](#../README)

***

```ts
type StringOrAlertFunction<T> = string | AssertExMessageFunc<T>;
```

## Type Parameters

### T

`T` *extends* `AnyNonPromise`

  ### <a id="TypeCheck"></a>TypeCheck

[**@xylabs/object**](#../README)

***

```ts
type TypeCheck<T> = {
  (obj): obj is T;
  (obj, config): obj is T;
  (obj, config): obj is T;
};
```

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

`undefined` | `number` | [`TypeCheckConfig`](#../interfaces/TypeCheckConfig)

### Returns

`obj is T`

  ### <a id="WithAdditional"></a>WithAdditional

[**@xylabs/object**](#../README)

***

```ts
type WithAdditional<T, TAdditional> = TAdditional extends EmptyObject ? T & TAdditional : T;
```

## Type Parameters

### T

`T` *extends* [`EmptyObject`](#EmptyObject) \| `void`

### TAdditional

`TAdditional` *extends* [`EmptyObject`](#EmptyObject) \| `void` = `void`

### variables

  ### <a id="AsObjectFactory"></a>AsObjectFactory

[**@xylabs/object**](#../README)

***

```ts
const AsObjectFactory: object;
```

## Type declaration

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
createOptional: <T>(typeCheck) => (value) => undefined | T;
```

### Type Parameters

#### T

`T` *extends* `TypedObject`

### Parameters

#### typeCheck

[`TypeCheck`](#../type-aliases/TypeCheck)\<`T`\>

### Returns

```ts
(value): undefined | T;
```

#### Parameters

##### value

`AnyNonPromise`

#### Returns

`undefined` \| `T`

  ### <a id="AsTypeFactory"></a>AsTypeFactory

[**@xylabs/object**](#../README)

***

```ts
const AsTypeFactory: object;
```

## Type declaration

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
createOptional: <T>(typeCheck) => (value) => undefined | T;
```

### Type Parameters

#### T

`T` *extends* `AnyNonPromise`

### Parameters

#### typeCheck

[`TypeCheck`](#../type-aliases/TypeCheck)\<`T`\>

### Returns

```ts
(value): undefined | T;
```

#### Parameters

##### value

`AnyNonPromise`

#### Returns

`undefined` \| `T`

  ### <a id="asAnyObject"></a>asAnyObject

[**@xylabs/object**](#../README)

***

```ts
const asAnyObject: AsTypeFunction<AnyObject>;
```

  ### <a id="deepMerge"></a>deepMerge

[**@xylabs/object**](#../README)

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