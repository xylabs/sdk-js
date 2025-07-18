# @xylabs/express

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


SDK for base code for Api repos that use express and deploy on AWS ECS

## API Documentation

**@xylabs/express**

***

## Classes

- [WrappedWinstonLogger](#classes/WrappedWinstonLogger)
- [Counters](#classes/Counters)
- [Profiler](#classes/Profiler)

## Interfaces

- [Empty](#interfaces/Empty)
- [LoggerOptions](#interfaces/LoggerOptions)
- [ExpressError](#interfaces/ExpressError)
- [Source](#interfaces/Source)
- [ApiError](#interfaces/ApiError)
- [HrefWithMeta](#interfaces/HrefWithMeta)
- [IRelationshipSelfLink](#interfaces/IRelationshipSelfLink)
- [IRelationshipRelatedLink](#interfaces/IRelationshipRelatedLink)
- [IRelationshipLinks](#interfaces/IRelationshipLinks)
- [IRelationshipData](#interfaces/IRelationshipData)
- [ApiResourceIdentifierObject](#interfaces/ApiResourceIdentifierObject)
- [ApiResourceObject](#interfaces/ApiResourceObject)
- [JsonApi](#interfaces/JsonApi)
- [ApiResponseBase](#interfaces/ApiResponseBase)
- [ApiDataResponse](#interfaces/ApiDataResponse)
- [ApiErrorResponse](#interfaces/ApiErrorResponse)

## Type Aliases

- [NoReqParams](#type-aliases/NoReqParams)
- [NoResBody](#type-aliases/NoResBody)
- [NoReqBody](#type-aliases/NoReqBody)
- [NoReqQuery](#type-aliases/NoReqQuery)
- [NoLocals](#type-aliases/NoLocals)
- [LoggerMeta](#type-aliases/LoggerMeta)
- [LoggerVerbosity](#type-aliases/LoggerVerbosity)
- [~~LogFunction~~](#type-aliases/LogFunction)
- [~~Logger~~](#type-aliases/Logger)
- [ParseFunc](#type-aliases/ParseFunc)
- [ApiLink](#type-aliases/ApiLink)
- [ApiLinks](#type-aliases/ApiLinks)
- [ResourceLinkage](#type-aliases/ResourceLinkage)
- [RelationshipMeta](#type-aliases/RelationshipMeta)
- [Relationship](#type-aliases/Relationship)
- [ApiResponse](#type-aliases/ApiResponse)

## Variables

- [notImplemented](#variables/notImplemented)
- [DefaultJsonBodyParserOptionsLimit](#variables/DefaultJsonBodyParserOptionsLimit)
- [DefaultJsonBodyParserOptionsTypes](#variables/DefaultJsonBodyParserOptionsTypes)
- [DefaultJsonBodyParserOptions](#variables/DefaultJsonBodyParserOptions)
- [jsonBodyParser](#variables/jsonBodyParser)
- [standardResponses](#variables/standardResponses)

## Functions

- [asyncHandler](#functions/asyncHandler)
- [errorToJsonHandler](#functions/errorToJsonHandler)
- [getHttpHeader](#functions/getHttpHeader)
- [getDefaultLogger](#functions/getDefaultLogger)
- [getLogger](#functions/getLogger)
- [compactObject](#functions/compactObject)
- [tryParse](#functions/tryParse)
- [tryParseFloat](#functions/tryParseFloat)
- [tryParseInt](#functions/tryParseInt)
- [enableCaseSensitiveRouting](#functions/enableCaseSensitiveRouting)
- [disableCaseSensitiveRouting](#functions/disableCaseSensitiveRouting)
- [enableExpressDefaultPoweredByHeader](#functions/enableExpressDefaultPoweredByHeader)
- [disableExpressDefaultPoweredByHeader](#functions/disableExpressDefaultPoweredByHeader)
- [customPoweredByHeader](#functions/customPoweredByHeader)
- [getJsonBodyParserOptions](#functions/getJsonBodyParserOptions)
- [getJsonBodyParser](#functions/getJsonBodyParser)
- [useRequestCounters](#functions/useRequestCounters)
- [responseProfiler](#functions/responseProfiler)
- [getResponseMetadata](#functions/getResponseMetadata)
- [standardErrors](#functions/standardErrors)
- [setRawResponseFormat](#functions/setRawResponseFormat)
- [clearRawResponseFormat](#functions/clearRawResponseFormat)
- [isRawResponseFormatSet](#functions/isRawResponseFormatSet)

### classes

  ### <a id="Counters"></a>Counters

[**@xylabs/express**](#../README)

***

## Constructors

### Constructor

```ts
new Counters(): Counters;
```

### Returns

`Counters`

## Properties

### counters

```ts
static counters: Record<string, number> = {};
```

## Methods

### inc()

```ts
static inc(name, count): void;
```

### Parameters

#### name

`string`

#### count

`number` = `1`

### Returns

`void`

***

### max()

```ts
static max(name, count): void;
```

### Parameters

#### name

`string`

#### count

`number`

### Returns

`void`

***

### min()

```ts
static min(name, count): void;
```

### Parameters

#### name

`string`

#### count

`number`

### Returns

`void`

  ### <a id="Profiler"></a>Profiler

[**@xylabs/express**](#../README)

***

## Constructors

### Constructor

```ts
new Profiler(): Profiler;
```

### Returns

`Profiler`

## Properties

### stats

```ts
stats: Record<string, number> = {};
```

## Methods

### profile()

```ts
profile<T>(name, promise): Promise<T>;
```

### Type Parameters

#### T

`T`

### Parameters

#### name

`string`

#### promise

`Promise`\<`T`\>

### Returns

`Promise`\<`T`\>

  ### <a id="WrappedWinstonLogger"></a>WrappedWinstonLogger

[**@xylabs/express**](#../README)

***

Wrap Winston logger methods to adapt to familiar
console logging methods

## Implements

- `Logger`

## Constructors

### Constructor

```ts
new WrappedWinstonLogger(winston): WrappedWinstonLogger;
```

### Parameters

#### winston

`Logger`

### Returns

`WrappedWinstonLogger`

## Properties

### winston

```ts
protected readonly winston: Logger;
```

***

### debug

```ts
debug: LogFunction;
```

### Implementation of

```ts
Logger.debug
```

***

### error

```ts
error: LogFunction;
```

### Implementation of

```ts
Logger.error
```

***

### info

```ts
info: LogFunction;
```

### Implementation of

```ts
Logger.info
```

***

### log

```ts
log: LogFunction;
```

### Implementation of

```ts
Logger.log
```

***

### trace

```ts
trace: LogFunction;
```

### Implementation of

```ts
Logger.trace
```

***

### warn

```ts
warn: LogFunction;
```

### Implementation of

```ts
Logger.warn
```

### functions

  ### <a id="asyncHandler"></a>asyncHandler

[**@xylabs/express**](#../README)

***

```ts
function asyncHandler<P, ResBody, ReqBody, ReqQuery, Locals>(fn): (req, res, next) => Promise<void>;
```

## Type Parameters

### P

`P` = `ParamsDictionary`

### ResBody

`ResBody` = [`Empty`](#../interfaces/Empty)

### ReqBody

`ReqBody` = [`Empty`](#../interfaces/Empty)

### ReqQuery

`ReqQuery` = `ParsedQs`

### Locals

`Locals` *extends* [`NoLocals`](#../type-aliases/NoLocals) = [`NoLocals`](#../type-aliases/NoLocals)

## Parameters

### fn

`RequestHandler`\<`P`, `ResBody`, `ReqBody`, `ReqQuery`, `Locals`\>

## Returns

```ts
(
   req, 
   res, 
next): Promise<void>;
```

### Parameters

### req

`Request`\<`P`, `ResBody`, `ReqBody`, `ReqQuery`, `Locals`\>

### res

`Response`\<`ResBody`, `Locals`\>

### next

`NextFunction`

### Returns

`Promise`\<`void`\>

  ### <a id="clearRawResponseFormat"></a>clearRawResponseFormat

[**@xylabs/express**](#../README)

***

```ts
function clearRawResponseFormat(res): void;
```

Clears any flags on the response, allowing the response to
use the default standard response envelope

## Parameters

### res

`Response`

The response to set to the standard response format

## Returns

`void`

  ### <a id="compactObject"></a>compactObject

[**@xylabs/express**](#../README)

***

```ts
function compactObject<T>(obj): T;
```

## Type Parameters

### T

`T` *extends* `Record`\<`string`, `unknown`\>

## Parameters

### obj

`T`

## Returns

`T`

  ### <a id="customPoweredByHeader"></a>customPoweredByHeader

[**@xylabs/express**](#../README)

***

```ts
function customPoweredByHeader(
   req, 
   res, 
   next): void;
```

## Parameters

### req

`Request`

### res

`Response`

### next

`NextFunction`

## Returns

`void`

  ### <a id="disableCaseSensitiveRouting"></a>disableCaseSensitiveRouting

[**@xylabs/express**](#../README)

***

```ts
function disableCaseSensitiveRouting(app): void;
```

Disable case sensitivity. When enabled, "/Foo" and "/foo" are different
routes. When disabled, "/Foo" and "/foo" are treated the same.

## Parameters

### app

`Express`

The Express app to disable the header on.

## Returns

`void`

  ### <a id="disableExpressDefaultPoweredByHeader"></a>disableExpressDefaultPoweredByHeader

[**@xylabs/express**](#../README)

***

```ts
function disableExpressDefaultPoweredByHeader(app): void;
```

By default Express appends the `X-Powered-By: Express` header to
all responses. Calling this method disables that behavior.

## Parameters

### app

`Express`

The Express app to disable the header on.

## Returns

`void`

  ### <a id="enableCaseSensitiveRouting"></a>enableCaseSensitiveRouting

[**@xylabs/express**](#../README)

***

```ts
function enableCaseSensitiveRouting(app): void;
```

Enable case sensitivity. When enabled, "/Foo" and "/foo" are different
routes. When disabled, "/Foo" and "/foo" are treated the same.

## Parameters

### app

`Express`

The Express app to disable the header on.

## Returns

`void`

  ### <a id="enableExpressDefaultPoweredByHeader"></a>enableExpressDefaultPoweredByHeader

[**@xylabs/express**](#../README)

***

```ts
function enableExpressDefaultPoweredByHeader(app): void;
```

By default Express appends the `X-Powered-By: Express` header to
all responses. Calling this method enables that behavior.

## Parameters

### app

`Express`

The Express app to disable the header on.

## Returns

`void`

  ### <a id="errorToJsonHandler"></a>errorToJsonHandler

[**@xylabs/express**](#../README)

***

```ts
function errorToJsonHandler(
   error, 
   req, 
   res, 
   next): void;
```

## Parameters

### error

[`ExpressError`](#../interfaces/ExpressError)

### req

`Request`

### res

`Response`

### next

`NextFunction`

## Returns

`void`

  ### <a id="getDefaultLogger"></a>getDefaultLogger

[**@xylabs/express**](#../README)

***

```ts
function getDefaultLogger(): Logger;
```

## Returns

`Logger`

  ### <a id="getHttpHeader"></a>getHttpHeader

[**@xylabs/express**](#../README)

***

```ts
function getHttpHeader(header, req): undefined | string;
```

Since there can be multiple of certain HTTP headers or
to prevent ugliness if someone did send us multiple
instances of a header we only expect one of, this
method grabs the 1st/only one of the desired header

## Parameters

### header

`string`

The header to find

### req

`Request`

The received HTTP request (with headers)

## Returns

`undefined` \| `string`

The first or only occurrence of the specified HTTP header

  ### <a id="getJsonBodyParser"></a>getJsonBodyParser

[**@xylabs/express**](#../README)

***

```ts
function getJsonBodyParser(options): NextHandleFunction;
```

Get a JSON Body Parser connect middleware handler

## Parameters

### options

`OptionsJson` = `DefaultJsonBodyParserOptions`

The options for the JSON Body Parser

## Returns

`NextHandleFunction`

A middleware function that parses JSON bodies

  ### <a id="getJsonBodyParserOptions"></a>getJsonBodyParserOptions

[**@xylabs/express**](#../README)

***

```ts
function getJsonBodyParserOptions(options?): OptionsJson;
```

Gets the default JSON Body Parser options merged with the supplied options
with the supplied options taking precedence

## Parameters

### options?

`Partial`\<`OptionsJson`\>

The options to override the default JSON Body Parser options with

## Returns

`OptionsJson`

The combined JSON Body Parser options with the supplied values taking
precedence over the default

  ### <a id="getLogger"></a>getLogger

[**@xylabs/express**](#../README)

***

```ts
function getLogger(minVerbosity): Logger;
```

## Parameters

### minVerbosity

[`LoggerVerbosity`](#../type-aliases/LoggerVerbosity) = `'info'`

## Returns

`Logger`

  ### <a id="getResponseMetadata"></a>getResponseMetadata

[**@xylabs/express**](#../README)

***

```ts
function getResponseMetadata(res): Record<string, unknown>;
```

## Parameters

### res

`Response`

## Returns

`Record`\<`string`, `unknown`\>

  ### <a id="isRawResponseFormatSet"></a>isRawResponseFormatSet

[**@xylabs/express**](#../README)

***

```ts
function isRawResponseFormatSet(res): boolean;
```

Checks if there are any flags on the response that would cause it
to forgo the standard response envelope and return the raw response
body to the client

## Parameters

### res

`Response`

## Returns

`boolean`

True if there are any flags on the response, false otherwise

  ### <a id="responseProfiler"></a>responseProfiler

[**@xylabs/express**](#../README)

***

```ts
function responseProfiler(
   _req, 
   res, 
   next): void;
```

Connect middleware to enable profiling of response lifecycle timing. To effectively profile
the response timing, this middleware needs to be called first when initializing your Express
App

## Parameters

### \_req

`Request`

The request

### res

`Response`

The response

### next

`NextFunction`

The next function

## Returns

`void`

## Example

```ts
const app = express()
app.use(responseProfiler)
// other initialization ...
```

  ### <a id="setRawResponseFormat"></a>setRawResponseFormat

[**@xylabs/express**](#../README)

***

```ts
function setRawResponseFormat(res): void;
```

Flags the response to forgo the standard response envelope
and return the raw response body to the client

## Parameters

### res

`Response`

The response to disable the standard response format on

## Returns

`void`

  ### <a id="standardErrors"></a>standardErrors

[**@xylabs/express**](#../README)

***

```ts
function standardErrors(
   err, 
   req, 
   res, 
   next): void;
```

## Parameters

### err

`undefined` | [`ExpressError`](#../interfaces/ExpressError)

### req

`Request`

### res

`Response`

### next

`NextFunction`

## Returns

`void`

  ### <a id="tryParse"></a>tryParse

[**@xylabs/express**](#../README)

***

```ts
function tryParse<T>(func, value?): undefined | T & object;
```

## Type Parameters

### T

`T` = `number`

## Parameters

### func

[`ParseFunc`](#../type-aliases/ParseFunc)\<`T`\>

### value?

`string`

## Returns

`undefined` \| `T` & `object`

  ### <a id="tryParseFloat"></a>tryParseFloat

[**@xylabs/express**](#../README)

***

```ts
function tryParseFloat(value?): undefined | number;
```

## Parameters

### value?

`string`

## Returns

`undefined` \| `number`

  ### <a id="tryParseInt"></a>tryParseInt

[**@xylabs/express**](#../README)

***

```ts
function tryParseInt(value?): undefined | number;
```

## Parameters

### value?

`string`

## Returns

`undefined` \| `number`

  ### <a id="useRequestCounters"></a>useRequestCounters

[**@xylabs/express**](#../README)

***

```ts
function useRequestCounters(app): void;
```

## Parameters

### app

`Application`

## Returns

`void`

### interfaces

  ### <a id="ApiDataResponse"></a>ApiDataResponse

[**@xylabs/express**](#../README)

***

## Extends

- [`ApiResponseBase`](#ApiResponseBase)

## Type Parameters

### T

`T` *extends* [`ApiResourceIdentifierObject`](#ApiResourceIdentifierObject)

## Properties

### jsonapi?

```ts
optional jsonapi: JsonApi;
```

### Inherited from

[`ApiResponseBase`](#ApiResponseBase).[`jsonapi`](ApiResponseBase.md#jsonapi)

***

### links?

```ts
optional links: ApiLinks;
```

### Inherited from

[`ApiResponseBase`](#ApiResponseBase).[`links`](ApiResponseBase.md#links)

***

### meta?

```ts
optional meta: Record<string, unknown>;
```

### Inherited from

[`ApiResponseBase`](#ApiResponseBase).[`meta`](ApiResponseBase.md#meta)

***

### data

```ts
data: T;
```

***

### included?

```ts
optional included: ApiResourceObject[];
```

  ### <a id="ApiError"></a>ApiError

[**@xylabs/express**](#../README)

***

## Properties

### code?

```ts
optional code: string;
```

An application-specific error code, expressed as a string value.

***

### detail?

```ts
optional detail: string;
```

A human-readable explanation specific to this occurrence of the problem. Like title, this field's value can be localized.

***

### id?

```ts
optional id: string;
```

A unique identifier for this particular occurrence of the problem.

***

### links?

```ts
optional links: ApiLinks;
```

A links object containing the following members:
   about: a link that leads to further details about this particular occurrence of the problem

***

### meta?

```ts
optional meta: Record<string, unknown>;
```

A meta object containing non-standard meta-information about the error.

***

### source?

```ts
optional source: Source;
```

An object containing references to the source of the error, optionally including any of the following members:

***

### status?

```ts
optional status: string;
```

The HTTP status code applicable to this problem, expressed as a string value.

***

### title?

```ts
optional title: string;
```

A short, human-readable summary of the problem that SHOULD NOT change from occurrence to occurrence of the problem, except for purposes of localization.

  ### <a id="ApiErrorResponse"></a>ApiErrorResponse

[**@xylabs/express**](#../README)

***

## Extends

- [`ApiResponseBase`](#ApiResponseBase)

## Properties

### jsonapi?

```ts
optional jsonapi: JsonApi;
```

### Inherited from

[`ApiResponseBase`](#ApiResponseBase).[`jsonapi`](ApiResponseBase.md#jsonapi)

***

### links?

```ts
optional links: ApiLinks;
```

### Inherited from

[`ApiResponseBase`](#ApiResponseBase).[`links`](ApiResponseBase.md#links)

***

### meta?

```ts
optional meta: Record<string, unknown>;
```

### Inherited from

[`ApiResponseBase`](#ApiResponseBase).[`meta`](ApiResponseBase.md#meta)

***

### errors

```ts
errors: ApiError[];
```

  ### <a id="ApiResourceIdentifierObject"></a>ApiResourceIdentifierObject

[**@xylabs/express**](#../README)

***

Within a given API, each resource object's type and id pair MUST identify a single, unique resource.
(The set of URIs controlled by a server, or multiple servers acting as one, constitute an API.)

## Extended by

- [`ApiResourceObject`](#ApiResourceObject)

## Properties

### id

```ts
id: string;
```

The id member is not required when the resource object originates at the client and represents a new resource to be created on the server.

***

### type

```ts
type: string;
```

The type member is used to describe resource objects that share common attributes and relationships.
The values of type members MUST adhere to the same constraints as member names.

  ### <a id="ApiResourceObject"></a>ApiResourceObject

[**@xylabs/express**](#../README)

***

Within a given API, each resource object's type and id pair MUST identify a single, unique resource.
(The set of URIs controlled by a server, or multiple servers acting as one, constitute an API.)

## Extends

- [`ApiResourceIdentifierObject`](#ApiResourceIdentifierObject)

## Properties

### id

```ts
id: string;
```

The id member is not required when the resource object originates at the client and represents a new resource to be created on the server.

### Inherited from

[`ApiResourceIdentifierObject`](#ApiResourceIdentifierObject).[`id`](ApiResourceIdentifierObject.md#id)

***

### type

```ts
type: string;
```

The type member is used to describe resource objects that share common attributes and relationships.
The values of type members MUST adhere to the same constraints as member names.

### Inherited from

[`ApiResourceIdentifierObject`](#ApiResourceIdentifierObject).[`type`](ApiResourceIdentifierObject.md#type)

***

### attributes?

```ts
optional attributes: Record<string, unknown>;
```

An attributes object representing some of the resource's data.

***

### links?

```ts
optional links: ApiLinks;
```

A links object containing links related to the resource.

***

### meta?

```ts
optional meta: Record<string, unknown>;
```

A meta object containing non-standard meta-information about a resource that can not be represented as an attribute or relationship.

***

### relationships?

```ts
optional relationships: Record<string, Relationship>;
```

A relationships object describing relationships between the resource and other JSON:API resources.

  ### <a id="ApiResponseBase"></a>ApiResponseBase

[**@xylabs/express**](#../README)

***

## Extended by

- [`ApiDataResponse`](#ApiDataResponse)
- [`ApiErrorResponse`](#ApiErrorResponse)

## Properties

### jsonapi?

```ts
optional jsonapi: JsonApi;
```

***

### links?

```ts
optional links: ApiLinks;
```

***

### meta?

```ts
optional meta: Record<string, unknown>;
```

  ### <a id="Empty"></a>Empty

[**@xylabs/express**](#../README)

***

  ### <a id="ExpressError"></a>ExpressError

[**@xylabs/express**](#../README)

***

## Extends

- `Error`

## Properties

### statusCode?

```ts
optional statusCode: number;
```

  ### <a id="HrefWithMeta"></a>HrefWithMeta

[**@xylabs/express**](#../README)

***

## Properties

### href

```ts
href: string;
```

***

### meta

```ts
meta: Record<string, unknown>;
```

  ### <a id="IRelationshipData"></a>IRelationshipData

[**@xylabs/express**](#../README)

***

## Properties

### data

```ts
data: ResourceLinkage;
```

  ### <a id="IRelationshipLinks"></a>IRelationshipLinks

[**@xylabs/express**](#../README)

***

## Properties

### links

```ts
links: 
  | IRelationshipSelfLink
  | IRelationshipRelatedLink;
```

  ### <a id="IRelationshipRelatedLink"></a>IRelationshipRelatedLink

[**@xylabs/express**](#../README)

***

## Properties

### related

```ts
related: string;
```

A related resource link

  ### <a id="IRelationshipSelfLink"></a>IRelationshipSelfLink

[**@xylabs/express**](#../README)

***

## Properties

### self

```ts
self: string;
```

A link for the relationship itself (a "relationship link"). This link allows the client to directly manipulate the relationship.
For example, removing an author through an article’s relationship URL would disconnect the person from the article without
deleting the people resource itself. When fetched successfully, this link returns the linkage for the related resources as its primary data.

  ### <a id="JsonApi"></a>JsonApi

[**@xylabs/express**](#../README)

***

## Properties

### meta?

```ts
optional meta: Record<string, unknown>;
```

***

### version?

```ts
optional version: "1.0" | "1.1";
```

  ### <a id="LoggerOptions"></a>LoggerOptions

[**@xylabs/express**](#../README)

***

## Properties

### defaultMeta?

```ts
optional defaultMeta: LoggerMeta;
```

***

### level?

```ts
optional level: LoggerVerbosity;
```

  ### <a id="Source"></a>Source

[**@xylabs/express**](#../README)

***

An object containing references to the source of the error

## Properties

### parameter?

```ts
optional parameter: string;
```

A string indicating which URI query parameter caused the error.

***

### pointer?

```ts
optional pointer: string;
```

A JSON Pointer [RFC6901] to the associated entity in the request document [e.g. "/data" for a primary data object,
or "/data/attributes/title" for a specific attribute].

### type-aliases

  ### <a id="ApiLink"></a>ApiLink

[**@xylabs/express**](#../README)

***

```ts
type ApiLink = string | HrefWithMeta;
```

  ### <a id="ApiLinks"></a>ApiLinks

[**@xylabs/express**](#../README)

***

```ts
type ApiLinks = Record<string, ApiLink>;
```

  ### <a id="ApiResponse"></a>ApiResponse

[**@xylabs/express**](#../README)

***

```ts
type ApiResponse<T> = 
  | ApiDataResponse<T>
  | ApiErrorResponse;
```

## Type Parameters

### T

`T` *extends* [`ApiResourceIdentifierObject`](#../interfaces/ApiResourceIdentifierObject)

  ### <a id="LogFunction"></a>LogFunction

[**@xylabs/express**](#../README)

***

```ts
type LogFunction = XyLabsLogFunction;
```

## Deprecated

use from @xylabs/logger instead

  ### <a id="Logger"></a>Logger

[**@xylabs/express**](#../README)

***

```ts
type Logger = XyLabsLogger;
```

## Deprecated

use from @xylabs/logger instead

  ### <a id="LoggerMeta"></a>LoggerMeta

[**@xylabs/express**](#../README)

***

```ts
type LoggerMeta = Record<string, string | number>;
```

  ### <a id="LoggerVerbosity"></a>LoggerVerbosity

[**@xylabs/express**](#../README)

***

```ts
type LoggerVerbosity = "error" | "warn" | "info" | "debug" | "all";
```

  ### <a id="NoLocals"></a>NoLocals

[**@xylabs/express**](#../README)

***

```ts
type NoLocals = Record<string, any>;
```

  ### <a id="NoReqBody"></a>NoReqBody

[**@xylabs/express**](#../README)

***

```ts
type NoReqBody = Empty;
```

  ### <a id="NoReqParams"></a>NoReqParams

[**@xylabs/express**](#../README)

***

```ts
type NoReqParams = ParamsDictionary;
```

  ### <a id="NoReqQuery"></a>NoReqQuery

[**@xylabs/express**](#../README)

***

```ts
type NoReqQuery = Query;
```

  ### <a id="NoResBody"></a>NoResBody

[**@xylabs/express**](#../README)

***

```ts
type NoResBody = Empty;
```

  ### <a id="ParseFunc"></a>ParseFunc

[**@xylabs/express**](#../README)

***

```ts
type ParseFunc<T> = (value) => T;
```

## Type Parameters

### T

`T` = `number`

## Parameters

### value

`string`

## Returns

`T`

  ### <a id="Relationship"></a>Relationship

[**@xylabs/express**](#../README)

***

```ts
type Relationship = 
  | IRelationshipLinks
  | IRelationshipData
  | RelationshipMeta;
```

The value of the relationships key MUST be an object (a "relationships object"). Members of the relationships object ("relationships")
represent references from the resource object in which it’s defined to other resource objects.
Relationships may be to-one or to-many.

  ### <a id="RelationshipMeta"></a>RelationshipMeta

[**@xylabs/express**](#../README)

***

```ts
type RelationshipMeta = Record<string, unknown>;
```

  ### <a id="ResourceLinkage"></a>ResourceLinkage

[**@xylabs/express**](#../README)

***

```ts
type ResourceLinkage = 
  | null
  | []
  | ApiResourceIdentifierObject
  | ApiResourceIdentifierObject[];
```

Resource linkage in a compound document allows a client to link together all of the included resource objects without having to GET any URLs via links.
Resource linkage MUST be represented as one of the following:
   • null for empty to-one relationships.
   • an empty array ([]) for empty to-many relationships.
   • a single resource identifier object for non-empty to-one relationships.
   • an array of resource identifier objects for non-empty to-many relationships.

### variables

  ### <a id="DefaultJsonBodyParserOptions"></a>DefaultJsonBodyParserOptions

[**@xylabs/express**](#../README)

***

```ts
const DefaultJsonBodyParserOptions: OptionsJson;
```

The default options for the JSON Body Parser

  ### <a id="DefaultJsonBodyParserOptionsLimit"></a>DefaultJsonBodyParserOptionsLimit

[**@xylabs/express**](#../README)

***

```ts
const DefaultJsonBodyParserOptionsLimit: "100kb" = '100kb';
```

The default maximum request body size for the JSON Body Parser

  ### <a id="DefaultJsonBodyParserOptionsTypes"></a>DefaultJsonBodyParserOptionsTypes

[**@xylabs/express**](#../README)

***

```ts
const DefaultJsonBodyParserOptionsTypes: string[];
```

The default MIME types for the JSON Body Parser

  ### <a id="jsonBodyParser"></a>jsonBodyParser

[**@xylabs/express**](#../README)

***

```ts
const jsonBodyParser: NextHandleFunction;
```

A JSON Body Parser middleware handler initialized with the default options

  ### <a id="notImplemented"></a>notImplemented

[**@xylabs/express**](#../README)

***

```ts
const notImplemented: RequestHandler;
```

  ### <a id="standardResponses"></a>standardResponses

[**@xylabs/express**](#../README)

***

```ts
const standardResponses: RequestHandler;
```

Connect middleware to enable the transform of all responses to match
the standard response format (compatible with JSON API)


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
[npm-badge]: https://img.shields.io/npm/v/@xylabs/express.svg
[npm-link]: https://www.npmjs.com/package/@xylabs/express
[codacy-badge]: https://app.codacy.com/project/badge/Grade/c8e15e14f37741c18cfb47ac7245c698
[codacy-link]: https://www.codacy.com/gh/xylabs/sdk-js/dashboard?utm_source=github.com&utm_medium=referral&utm_content=xylabs/sdk-js&utm_campaign=Badge_Grade
[codeclimate-badge]: https://api.codeclimate.com/v1/badges/c5eb068f806f0b047ea7/maintainability
[codeclimate-link]: https://codeclimate.com/github/xylabs/sdk-js/maintainability
[snyk-badge]: https://snyk.io/test/github/xylabs/sdk-js/badge.svg?targetFile=package.json
[snyk-link]: https://snyk.io/test/github/xylabs/sdk-js?targetFile=package.json

[npm-downloads-badge]: https://img.shields.io/npm/dw/@xylabs/express
[npm-license-badge]: https://img.shields.io/npm/l/@xylabs/express

[jsdelivr-badge]: https://data.jsdelivr.com/v1/package/npm/@xylabs/express/badge
[jsdelivr-link]: https://www.jsdelivr.com/package/npm/@xylabs/express

[socket-badge]: https://socket.dev/api/badge/npm/package/@xylabs/express
[socket-link]: https://socket.dev/npm/package/@xylabs/express