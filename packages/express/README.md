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

## Reference

**@xylabs/express**

***

## Classes

- [WrappedWinstonLogger](#classes/WrappedWinstonLogger)
- [Counters](#classes/Counters)
- [Profiler](#classes/Profiler)

## Interfaces

- [RouteDefinition](#interfaces/RouteDefinition)
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

- [HttpMethod](#type-aliases/HttpMethod)
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
- [EmptyParamsZod](#variables/EmptyParamsZod)
- [EmptyQueryParamsZod](#variables/EmptyQueryParamsZod)
- [ValidateRequestDefaults](#variables/ValidateRequestDefaults)
- [DefaultJsonBodyParserOptionsLimit](#variables/DefaultJsonBodyParserOptionsLimit)
- [DefaultJsonBodyParserOptionsTypes](#variables/DefaultJsonBodyParserOptionsTypes)
- [DefaultJsonBodyParserOptions](#variables/DefaultJsonBodyParserOptions)
- [jsonBodyParser](#variables/jsonBodyParser)
- [standardResponses](#variables/standardResponses)

## Functions

- [addRouteDefinitions](#functions/addRouteDefinitions)
- [asyncHandler](#functions/asyncHandler)
- [errorToJsonHandler](#functions/errorToJsonHandler)
- [getHttpHeader](#functions/getHttpHeader)
- [getDefaultLogger](#functions/getDefaultLogger)
- [getLogger](#functions/getLogger)
- [compactObject](#functions/compactObject)
- [~~tryParse~~](#functions/tryParse)
- [requestHandlerValidator](#functions/requestHandlerValidator)
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

Static counter registry for tracking named numeric metrics.

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
static inc(name, count?): void;
```

### Parameters

#### name

`string`

#### count?

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

Measures and records the execution duration of async operations by name.

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

  ### <a id="addRouteDefinitions"></a>addRouteDefinitions

[**@xylabs/express**](#../README)

***

```ts
function addRouteDefinitions(app, routeDefinitions): void;
```

Registers an array of route definitions on an Express application.

## Parameters

### app

`Express`

The Express application to register routes on.

### routeDefinitions

[`RouteDefinition`](#../interfaces/RouteDefinition)\<`RequestHandler`\<`ParamsDictionary`, `any`, `any`, `ParsedQs`, `Record`\<`string`, `any`\>\>\>[]

The route definitions to register.

## Returns

`void`

  ### <a id="asyncHandler"></a>asyncHandler

[**@xylabs/express**](#../README)

***

```ts
function asyncHandler<P, ResBody, ReqBody, ReqQuery, Locals>(fn): (req, res, next) => Promise<unknown>;
```

Wraps an async Express request handler to forward rejected promises to the error handler.

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

The async request handler to wrap.

## Returns

A request handler that catches async errors and passes them to next().

```ts
(
   req, 
   res, 
next): Promise<unknown>;
```

### Parameters

### req

`Request`\<`P`, `ResBody`, `ReqBody`, `ReqQuery`, `Locals`\>

### res

`Response`\<`ResBody`, `Locals`\>

### next

`NextFunction`

### Returns

`Promise`\<`unknown`\>

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

Returns a shallow copy of the object with all null and undefined values removed.

## Type Parameters

### T

`T` *extends* `Record`\<`string`, `unknown`\>

## Parameters

### obj

`T`

The object to compact.

## Returns

`T`

A new object with only defined, non-null properties.

  ### <a id="customPoweredByHeader"></a>customPoweredByHeader

[**@xylabs/express**](#../README)

***

```ts
function customPoweredByHeader(
   req, 
   res, 
   next): void;
```

Express middleware that sets the X-Powered-By header to 'XYO'.

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

Express error handler that logs the error and sends a JSON response with the error message and status code.

## Parameters

### error

[`ExpressError`](#../interfaces/ExpressError)

The Express error to handle.

### req

`Request`

The incoming request.

### res

`Response`

The outgoing response.

### next

`NextFunction`

The next middleware function.

## Returns

`void`

  ### <a id="getDefaultLogger"></a>getDefaultLogger

[**@xylabs/express**](#../README)

***

```ts
function getDefaultLogger(): Logger;
```

Returns the singleton default logger instance, creating one if it does not exist.

## Returns

`Logger`

The default logger.

  ### <a id="getHttpHeader"></a>getHttpHeader

[**@xylabs/express**](#../README)

***

```ts
function getHttpHeader(header, req): string | undefined;
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

`string` \| `undefined`

The first or only occurrence of the specified HTTP header

  ### <a id="getJsonBodyParser"></a>getJsonBodyParser

[**@xylabs/express**](#../README)

***

```ts
function getJsonBodyParser(options?): NextHandleFunction;
```

Get a JSON Body Parser connect middleware handler

## Parameters

### options?

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
function getLogger(minVerbosity?): Logger;
```

Returns a cached Winston-backed logger at the specified verbosity level.

## Parameters

### minVerbosity?

[`LoggerVerbosity`](#../type-aliases/LoggerVerbosity) = `'info'`

The minimum log level to output. Defaults to 'info'.

## Returns

`Logger`

A logger instance configured for the given verbosity.

  ### <a id="getResponseMetadata"></a>getResponseMetadata

[**@xylabs/express**](#../README)

***

```ts
function getResponseMetadata(res): Record<string, unknown>;
```

Extracts response metadata from res.locals, computing profile duration if profiling was started.

## Parameters

### res

`Response`

The Express response to extract metadata from.

## Returns

`Record`\<`string`, `unknown`\>

The metadata record including any profiling information.

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

  ### <a id="requestHandlerValidator"></a>requestHandlerValidator

[**@xylabs/express**](#../README)

***

```ts
function requestHandlerValidator<TParams, TQuery, TBody, TResponse>(schemas?): (handler) => RequestHandler;
```

Factory for Express middleware that validates request and response objects using Zod schemas.

## Type Parameters

### TParams

`TParams` *extends* 
  \| `ZodObject`\<\{
\}, `$catchall`\<`ZodUnion`\<readonly \[`ZodString`, `ZodArray`\<`ZodString`\>\]\>\>\>
  \| `ZodType`\<`Record`\<`string`, `string`\>, `unknown`, `$ZodTypeInternals`\<`Record`\<`string`, `string`\>, `unknown`\>\> = `ZodObject`\<\{
\}, `$catchall`\<`ZodUnion`\<readonly \[`ZodString`, `ZodArray`\<`ZodString`\>\]\>\>\>

### TQuery

`TQuery` *extends* 
  \| `ZodObject`\<\{
\}, `$catchall`\<`ZodUnion`\<readonly \[`ZodString`, `ZodArray`\<`ZodString`\>\]\>\>\>
  \| `ZodType`\<`Record`\<`string`, `string` \| `string`[]\>, `unknown`, `$ZodTypeInternals`\<`Record`\<`string`, `string` \| `string`[]\>, `unknown`\>\> = `ZodObject`\<\{
\}, `$catchall`\<`ZodUnion`\<readonly \[`ZodString`, `ZodArray`\<`ZodString`\>\]\>\>\>

### TBody

`TBody` *extends* `ZodType`\<`unknown`, `unknown`, `$ZodTypeInternals`\<`unknown`, `unknown`\>\> = `ZodType`\<`unknown`, `unknown`, `$ZodTypeInternals`\<`unknown`, `unknown`\>\>

### TResponse

`TResponse` *extends* `ZodType`\<`unknown`, `unknown`, `$ZodTypeInternals`\<`unknown`, `unknown`\>\> = `ZodType`\<`unknown`, `unknown`, `$ZodTypeInternals`\<`unknown`, `unknown`\>\>

## Parameters

### schemas?

`Partial`\<\{
  `body`: `TBody`;
  `params`: `TParams`;
  `query`: `TQuery`;
  `response`: `TResponse`;
\}\>

The Zod schemas to use for validation.

## Returns

A middleware function for validating requests and responses.

```ts
(handler): RequestHandler;
```

### Parameters

### handler

(`req`, `res`, `next`) => `unknown`

### Returns

`RequestHandler`

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

Express error handler that logs the error and sends a JSON:API-compliant error response.

## Parameters

### err

The error to handle, or undefined if no error.

[`ExpressError`](#../interfaces/ExpressError) | `undefined`

### req

`Request`

The incoming request.

### res

`Response`

The outgoing response.

### next

`NextFunction`

The next middleware function.

## Returns

`void`

  ### <a id="tryParse"></a>tryParse

[**@xylabs/express**](#../README)

***

```ts
function tryParse<T>(func, value?): T & object | undefined;
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

`T` & `object` \| `undefined`

## Deprecated

use zod instead

  ### <a id="useRequestCounters"></a>useRequestCounters

[**@xylabs/express**](#../README)

***

```ts
function useRequestCounters(app): void;
```

Registers middleware that increments per-path request counters and exposes a /stats endpoint.

## Parameters

### app

`Application`

The Express application to attach counters to.

## Returns

`void`

### interfaces

  ### <a id="ApiDataResponse"></a>ApiDataResponse

[**@xylabs/express**](#../README)

***

A successful JSON:API response containing primary data and optional included resources.

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

A JSON:API error response containing one or more error objects.

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

A JSON:API resource object with optional attributes, links, meta, and relationships.

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

Base interface for all JSON:API responses, including optional links and metadata.

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

Empty object type used as a default for request/response body generics.

  ### <a id="ExpressError"></a>ExpressError

[**@xylabs/express**](#../README)

***

An Error with an optional HTTP status code for Express error handling.

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

A link with an href and associated metadata.

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

Contains the resource linkage data for a JSON:API relationship.

## Properties

### data

```ts
data: ResourceLinkage;
```

  ### <a id="IRelationshipLinks"></a>IRelationshipLinks

[**@xylabs/express**](#../README)

***

Contains the links for a JSON:API relationship.

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

A relationship link pointing to a related resource.

## Properties

### related

```ts
related: string;
```

A related resource link

  ### <a id="IRelationshipSelfLink"></a>IRelationshipSelfLink

[**@xylabs/express**](#../README)

***

A relationship link pointing to the relationship itself.

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

JSON:API version and metadata descriptor.

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

Configuration options for creating a logger instance.

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

  ### <a id="RouteDefinition"></a>RouteDefinition

[**@xylabs/express**](#../README)

***

Defines an Express route with its HTTP method, path, and handler(s).

## Type Parameters

### H

`H` *extends* `RequestHandler` = `RequestHandler`

## Properties

### handlers

```ts
handlers: H | H[];
```

***

### method

```ts
method: HttpMethod;
```

***

### path

```ts
path: string | RegExp;
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

A JSON:API link, either a simple URL string or an object with href and metadata.

  ### <a id="ApiLinks"></a>ApiLinks

[**@xylabs/express**](#../README)

***

```ts
type ApiLinks = Record<string, ApiLink>;
```

A collection of named JSON:API links.

  ### <a id="ApiResponse"></a>ApiResponse

[**@xylabs/express**](#../README)

***

```ts
type ApiResponse<T> = 
  | ApiDataResponse<T>
  | ApiErrorResponse;
```

A JSON:API response, either a data response or an error response.

## Type Parameters

### T

`T` *extends* [`ApiResourceIdentifierObject`](#../interfaces/ApiResourceIdentifierObject)

  ### <a id="HttpMethod"></a>HttpMethod

[**@xylabs/express**](#../README)

***

```ts
type HttpMethod = "get" | "post" | "put" | "patch" | "delete" | "options" | "head";
```

Supported HTTP methods for route definitions.

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

Metadata key-value pairs attached to log entries.

  ### <a id="LoggerVerbosity"></a>LoggerVerbosity

[**@xylabs/express**](#../README)

***

```ts
type LoggerVerbosity = "error" | "warn" | "info" | "debug" | "all";
```

Application-level log verbosity levels.

  ### <a id="NoLocals"></a>NoLocals

[**@xylabs/express**](#../README)

***

```ts
type NoLocals = Record<string, any>;
```

Default type for response locals.

  ### <a id="NoReqBody"></a>NoReqBody

[**@xylabs/express**](#../README)

***

```ts
type NoReqBody = Empty;
```

Default type for request body when none is specified.

  ### <a id="NoReqParams"></a>NoReqParams

[**@xylabs/express**](#../README)

***

```ts
type NoReqParams = ParamsDictionary;
```

Default type for request route parameters.

  ### <a id="NoReqQuery"></a>NoReqQuery

[**@xylabs/express**](#../README)

***

```ts
type NoReqQuery = Query;
```

Default type for request query parameters.

  ### <a id="NoResBody"></a>NoResBody

[**@xylabs/express**](#../README)

***

```ts
type NoResBody = Empty;
```

Default type for response body when none is specified.

  ### <a id="ParseFunc"></a>ParseFunc

[**@xylabs/express**](#../README)

***

```ts
type ParseFunc<T> = (value) => T;
```

A function that parses a string value into the target type.

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

Non-standard metadata associated with a JSON:API relationship.

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

  ### <a id="EmptyParamsZod"></a>EmptyParamsZod

[**@xylabs/express**](#../README)

***

```ts
const EmptyParamsZod: ZodObject<{
}, $catchall<ZodString>>;
```

Empty Zod schema for requests with no parameters.

  ### <a id="EmptyQueryParamsZod"></a>EmptyQueryParamsZod

[**@xylabs/express**](#../README)

***

```ts
const EmptyQueryParamsZod: ZodObject<{
}, $catchall<ZodUnion<readonly [ZodString, ZodArray<ZodString>]>>>;
```

Empty Zod schema for requests with no query parameters.

  ### <a id="ValidateRequestDefaults"></a>ValidateRequestDefaults

[**@xylabs/express**](#../README)

***

```ts
const ValidateRequestDefaults: object;
```

Default validation schemas for request handler validator.

## Type Declaration

### params

```ts
params: ZodObject<{
}, $catchall<ZodString>> = EmptyParamsZod;
```

### query

```ts
query: ZodObject<{
}, $catchall<ZodUnion<readonly [ZodString, ZodArray<ZodString>]>>> = EmptyQueryParamsZod;
```

### body

```ts
body: ZodOptional<ZodJSONSchema>;
```

### response

```ts
response: ZodOptional<ZodJSONSchema>;
```

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

Express request handler that responds with a 501 Not Implemented error.

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