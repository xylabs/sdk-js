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

| Class | Description |
| ------ | ------ |
| [WrappedWinstonLogger](#classes/WrappedWinstonLogger) | Wrap Winston logger methods to adapt to familiar console logging methods |
| [Counters](#classes/Counters) | Static counter registry for tracking named numeric metrics. |
| [Profiler](#classes/Profiler) | Measures and records the execution duration of async operations by name. |

## Interfaces

| Interface | Description |
| ------ | ------ |
| [RouteDefinition](#interfaces/RouteDefinition) | Defines an Express route with its HTTP method, path, and handler(s). |
| [Empty](#interfaces/Empty) | Empty object type used as a default for request/response body generics. |
| [LoggerOptions](#interfaces/LoggerOptions) | Configuration options for creating a logger instance. |
| [ExpressError](#interfaces/ExpressError) | An Error with an optional HTTP status code for Express error handling. |
| [Source](#interfaces/Source) | An object containing references to the source of the error |
| [ApiError](#interfaces/ApiError) | - |
| [HrefWithMeta](#interfaces/HrefWithMeta) | A link with an href and associated metadata. |
| [IRelationshipSelfLink](#interfaces/IRelationshipSelfLink) | A relationship link pointing to the relationship itself. |
| [IRelationshipRelatedLink](#interfaces/IRelationshipRelatedLink) | A relationship link pointing to a related resource. |
| [IRelationshipLinks](#interfaces/IRelationshipLinks) | Contains the links for a JSON:API relationship. |
| [IRelationshipData](#interfaces/IRelationshipData) | Contains the resource linkage data for a JSON:API relationship. |
| [ApiResourceIdentifierObject](#interfaces/ApiResourceIdentifierObject) | Within a given API, each resource object's type and id pair MUST identify a single, unique resource. (The set of URIs controlled by a server, or multiple servers acting as one, constitute an API.) |
| [ApiResourceObject](#interfaces/ApiResourceObject) | A JSON:API resource object with optional attributes, links, meta, and relationships. |
| [JsonApi](#interfaces/JsonApi) | JSON:API version and metadata descriptor. |
| [ApiResponseBase](#interfaces/ApiResponseBase) | Base interface for all JSON:API responses, including optional links and metadata. |
| [ApiDataResponse](#interfaces/ApiDataResponse) | A successful JSON:API response containing primary data and optional included resources. |
| [ApiErrorResponse](#interfaces/ApiErrorResponse) | A JSON:API error response containing one or more error objects. |

## Type Aliases

| Type Alias | Description |
| ------ | ------ |
| [HttpMethod](#type-aliases/HttpMethod) | Supported HTTP methods for route definitions. |
| [NoReqParams](#type-aliases/NoReqParams) | Default type for request route parameters. |
| [NoResBody](#type-aliases/NoResBody) | Default type for response body when none is specified. |
| [NoReqBody](#type-aliases/NoReqBody) | Default type for request body when none is specified. |
| [NoReqQuery](#type-aliases/NoReqQuery) | Default type for request query parameters. |
| [NoLocals](#type-aliases/NoLocals) | Default type for response locals. |
| [LoggerMeta](#type-aliases/LoggerMeta) | Metadata key-value pairs attached to log entries. |
| [LoggerVerbosity](#type-aliases/LoggerVerbosity) | Application-level log verbosity levels. |
| [~~LogFunction~~](#type-aliases/LogFunction) | - |
| [~~Logger~~](#type-aliases/Logger) | - |
| [ParseFunc](#type-aliases/ParseFunc) | A function that parses a string value into the target type. |
| [ApiLink](#type-aliases/ApiLink) | A JSON:API link, either a simple URL string or an object with href and metadata. |
| [ApiLinks](#type-aliases/ApiLinks) | A collection of named JSON:API links. |
| [ResourceLinkage](#type-aliases/ResourceLinkage) | Resource linkage in a compound document allows a client to link together all of the included resource objects without having to GET any URLs via links. Resource linkage MUST be represented as one of the following: • null for empty to-one relationships. • an empty array ([]) for empty to-many relationships. • a single resource identifier object for non-empty to-one relationships. • an array of resource identifier objects for non-empty to-many relationships. |
| [RelationshipMeta](#type-aliases/RelationshipMeta) | Non-standard metadata associated with a JSON:API relationship. |
| [Relationship](#type-aliases/Relationship) | The value of the relationships key MUST be an object (a "relationships object"). Members of the relationships object ("relationships") represent references from the resource object in which it’s defined to other resource objects. Relationships may be to-one or to-many. |
| [ApiResponse](#type-aliases/ApiResponse) | A JSON:API response, either a data response or an error response. |

## Variables

| Variable | Description |
| ------ | ------ |
| [notImplemented](#variables/notImplemented) | Express request handler that responds with a 501 Not Implemented error. |
| [EmptyParamsZod](#variables/EmptyParamsZod) | Empty Zod schema for requests with no parameters. |
| [EmptyQueryParamsZod](#variables/EmptyQueryParamsZod) | Empty Zod schema for requests with no query parameters. |
| [ValidateRequestDefaults](#variables/ValidateRequestDefaults) | Default validation schemas for request handler validator. |
| [DefaultJsonBodyParserOptionsLimit](#variables/DefaultJsonBodyParserOptionsLimit) | The default maximum request body size for the JSON Body Parser |
| [DefaultJsonBodyParserOptionsTypes](#variables/DefaultJsonBodyParserOptionsTypes) | The default MIME types for the JSON Body Parser |
| [DefaultJsonBodyParserOptions](#variables/DefaultJsonBodyParserOptions) | The default options for the JSON Body Parser |
| [jsonBodyParser](#variables/jsonBodyParser) | A JSON Body Parser middleware handler initialized with the default options |
| [standardResponses](#variables/standardResponses) | Connect middleware to enable the transform of all responses to match the standard response format (compatible with JSON API) |

## Functions

| Function | Description |
| ------ | ------ |
| [addRouteDefinitions](#functions/addRouteDefinitions) | Registers an array of route definitions on an Express application. |
| [asyncHandler](#functions/asyncHandler) | Wraps an async Express request handler to forward rejected promises to the error handler. |
| [errorToJsonHandler](#functions/errorToJsonHandler) | Express error handler that logs the error and sends a JSON response with the error message and status code. |
| [getHttpHeader](#functions/getHttpHeader) | Since there can be multiple of certain HTTP headers or to prevent ugliness if someone did send us multiple instances of a header we only expect one of, this method grabs the 1st/only one of the desired header |
| [getDefaultLogger](#functions/getDefaultLogger) | Returns the singleton default logger instance, creating one if it does not exist. |
| [getLogger](#functions/getLogger) | Returns a cached Winston-backed logger at the specified verbosity level. |
| [compactObject](#functions/compactObject) | Returns a shallow copy of the object with all null and undefined values removed. |
| [~~tryParse~~](#functions/tryParse) | - |
| [requestHandlerValidator](#functions/requestHandlerValidator) | Factory for Express middleware that validates request and response objects using Zod schemas. |
| [enableCaseSensitiveRouting](#functions/enableCaseSensitiveRouting) | Enable case sensitivity. When enabled, "/Foo" and "/foo" are different routes. When disabled, "/Foo" and "/foo" are treated the same. |
| [disableCaseSensitiveRouting](#functions/disableCaseSensitiveRouting) | Disable case sensitivity. When enabled, "/Foo" and "/foo" are different routes. When disabled, "/Foo" and "/foo" are treated the same. |
| [enableExpressDefaultPoweredByHeader](#functions/enableExpressDefaultPoweredByHeader) | By default Express appends the `X-Powered-By: Express` header to all responses. Calling this method enables that behavior. |
| [disableExpressDefaultPoweredByHeader](#functions/disableExpressDefaultPoweredByHeader) | By default Express appends the `X-Powered-By: Express` header to all responses. Calling this method disables that behavior. |
| [customPoweredByHeader](#functions/customPoweredByHeader) | Express middleware that sets the X-Powered-By header to 'XYO'. |
| [getJsonBodyParserOptions](#functions/getJsonBodyParserOptions) | Gets the default JSON Body Parser options merged with the supplied options with the supplied options taking precedence |
| [getJsonBodyParser](#functions/getJsonBodyParser) | Get a JSON Body Parser connect middleware handler |
| [useRequestCounters](#functions/useRequestCounters) | Registers middleware that increments per-path request counters and exposes a /stats endpoint. |
| [responseProfiler](#functions/responseProfiler) | Connect middleware to enable profiling of response lifecycle timing. To effectively profile the response timing, this middleware needs to be called first when initializing your Express App |
| [getResponseMetadata](#functions/getResponseMetadata) | Extracts response metadata from res.locals, computing profile duration if profiling was started. |
| [standardErrors](#functions/standardErrors) | Express error handler that logs the error and sends a JSON:API-compliant error response. |
| [setRawResponseFormat](#functions/setRawResponseFormat) | Flags the response to forgo the standard response envelope and return the raw response body to the client |
| [clearRawResponseFormat](#functions/clearRawResponseFormat) | Clears any flags on the response, allowing the response to use the default standard response envelope |
| [isRawResponseFormatSet](#functions/isRawResponseFormatSet) | Checks if there are any flags on the response that would cause it to forgo the standard response envelope and return the raw response body to the client |

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

| Property | Modifier | Type | Default value |
| ------ | ------ | ------ | ------ |
| <a id="counters"></a> `counters` | `static` | `Record`\<`string`, `number`\> | `{}` |

## Methods

### inc()

```ts
static inc(name: string, count?: number): void;
```

### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `name` | `string` | `undefined` |
| `count` | `number` | `1` |

### Returns

`void`

***

### max()

```ts
static max(name: string, count: number): void;
```

### Parameters

| Parameter | Type |
| ------ | ------ |
| `name` | `string` |
| `count` | `number` |

### Returns

`void`

***

### min()

```ts
static min(name: string, count: number): void;
```

### Parameters

| Parameter | Type |
| ------ | ------ |
| `name` | `string` |
| `count` | `number` |

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

| Property | Type | Default value |
| ------ | ------ | ------ |
| <a id="stats"></a> `stats` | `Record`\<`string`, `number`\> | `{}` |

## Methods

### profile()

```ts
profile<T>(name: string, promise: Promise<T>): Promise<T>;
```

### Type Parameters

| Type Parameter |
| ------ |
| `T` |

### Parameters

| Parameter | Type |
| ------ | ------ |
| `name` | `string` |
| `promise` | `Promise`\<`T`\> |

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
new WrappedWinstonLogger(winston: Logger): WrappedWinstonLogger;
```

### Parameters

| Parameter | Type |
| ------ | ------ |
| `winston` | `Logger` |

### Returns

`WrappedWinstonLogger`

## Properties

| Property | Modifier | Type |
| ------ | ------ | ------ |
| <a id="winston"></a> `winston` | `readonly` | `Logger` |
| <a id="debug"></a> `debug` | `public` | `LogFunction` |
| <a id="error"></a> `error` | `public` | `LogFunction` |
| <a id="info"></a> `info` | `public` | `LogFunction` |
| <a id="log"></a> `log` | `public` | `LogFunction` |
| <a id="trace"></a> `trace` | `public` | `LogFunction` |
| <a id="warn"></a> `warn` | `public` | `LogFunction` |

### functions

  ### <a id="addRouteDefinitions"></a>addRouteDefinitions

[**@xylabs/express**](#../README)

***

```ts
function addRouteDefinitions(app: Express, routeDefinitions: RouteDefinition<RequestHandler<ParamsDictionary, any, any, ParsedQs, Record<string, any>>>[]): void;
```

Registers an array of route definitions on an Express application.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `app` | `Express` | The Express application to register routes on. |
| `routeDefinitions` | [`RouteDefinition`](#../interfaces/RouteDefinition)\<`RequestHandler`\<`ParamsDictionary`, `any`, `any`, `ParsedQs`, `Record`\<`string`, `any`\>\>\>[] | The route definitions to register. |

## Returns

`void`

  ### <a id="asyncHandler"></a>asyncHandler

[**@xylabs/express**](#../README)

***

```ts
function asyncHandler<P, ResBody, ReqBody, ReqQuery, Locals>(fn: RequestHandler<P, ResBody, ReqBody, ReqQuery, Locals>): (req: Request<P, ResBody, ReqBody, ReqQuery, Locals>, res: Response<ResBody, Locals>, next: NextFunction) => Promise<unknown>;
```

Wraps an async Express request handler to forward rejected promises to the error handler.

## Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `P` | `ParamsDictionary` |
| `ResBody` | [`Empty`](#../interfaces/Empty) |
| `ReqBody` | [`Empty`](#../interfaces/Empty) |
| `ReqQuery` | `ParsedQs` |
| `Locals` *extends* [`NoLocals`](#../type-aliases/NoLocals) | [`NoLocals`](#../type-aliases/NoLocals) |

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `fn` | `RequestHandler`\<`P`, `ResBody`, `ReqBody`, `ReqQuery`, `Locals`\> | The async request handler to wrap. |

## Returns

A request handler that catches async errors and passes them to next().

```ts
(
   req: Request<P, ResBody, ReqBody, ReqQuery, Locals>, 
   res: Response<ResBody, Locals>, 
next: NextFunction): Promise<unknown>;
```

### Parameters

| Parameter | Type |
| ------ | ------ |
| `req` | `Request`\<`P`, `ResBody`, `ReqBody`, `ReqQuery`, `Locals`\> |
| `res` | `Response`\<`ResBody`, `Locals`\> |
| `next` | `NextFunction` |

### Returns

`Promise`\<`unknown`\>

  ### <a id="clearRawResponseFormat"></a>clearRawResponseFormat

[**@xylabs/express**](#../README)

***

```ts
function clearRawResponseFormat(res: Response): void;
```

Clears any flags on the response, allowing the response to
use the default standard response envelope

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `res` | `Response` | The response to set to the standard response format |

## Returns

`void`

  ### <a id="compactObject"></a>compactObject

[**@xylabs/express**](#../README)

***

```ts
function compactObject<T>(obj: T): T;
```

Returns a shallow copy of the object with all null and undefined values removed.

## Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* `Record`\<`string`, `unknown`\> |

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `obj` | `T` | The object to compact. |

## Returns

`T`

A new object with only defined, non-null properties.

  ### <a id="customPoweredByHeader"></a>customPoweredByHeader

[**@xylabs/express**](#../README)

***

```ts
function customPoweredByHeader(
   req: Request, 
   res: Response, 
   next: NextFunction): void;
```

Express middleware that sets the X-Powered-By header to 'XYO'.

## Parameters

| Parameter | Type |
| ------ | ------ |
| `req` | `Request` |
| `res` | `Response` |
| `next` | `NextFunction` |

## Returns

`void`

  ### <a id="disableCaseSensitiveRouting"></a>disableCaseSensitiveRouting

[**@xylabs/express**](#../README)

***

```ts
function disableCaseSensitiveRouting(app: Express): void;
```

Disable case sensitivity. When enabled, "/Foo" and "/foo" are different
routes. When disabled, "/Foo" and "/foo" are treated the same.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `app` | `Express` | The Express app to disable the header on. |

## Returns

`void`

  ### <a id="disableExpressDefaultPoweredByHeader"></a>disableExpressDefaultPoweredByHeader

[**@xylabs/express**](#../README)

***

```ts
function disableExpressDefaultPoweredByHeader(app: Express): void;
```

By default Express appends the `X-Powered-By: Express` header to
all responses. Calling this method disables that behavior.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `app` | `Express` | The Express app to disable the header on. |

## Returns

`void`

  ### <a id="enableCaseSensitiveRouting"></a>enableCaseSensitiveRouting

[**@xylabs/express**](#../README)

***

```ts
function enableCaseSensitiveRouting(app: Express): void;
```

Enable case sensitivity. When enabled, "/Foo" and "/foo" are different
routes. When disabled, "/Foo" and "/foo" are treated the same.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `app` | `Express` | The Express app to disable the header on. |

## Returns

`void`

  ### <a id="enableExpressDefaultPoweredByHeader"></a>enableExpressDefaultPoweredByHeader

[**@xylabs/express**](#../README)

***

```ts
function enableExpressDefaultPoweredByHeader(app: Express): void;
```

By default Express appends the `X-Powered-By: Express` header to
all responses. Calling this method enables that behavior.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `app` | `Express` | The Express app to disable the header on. |

## Returns

`void`

  ### <a id="errorToJsonHandler"></a>errorToJsonHandler

[**@xylabs/express**](#../README)

***

```ts
function errorToJsonHandler(
   error: ExpressError, 
   req: Request, 
   res: Response, 
   next: NextFunction): void;
```

Express error handler that logs the error and sends a JSON response with the error message and status code.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `error` | [`ExpressError`](#../interfaces/ExpressError) | The Express error to handle. |
| `req` | `Request` | The incoming request. |
| `res` | `Response` | The outgoing response. |
| `next` | `NextFunction` | The next middleware function. |

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
function getHttpHeader(header: string, req: Request): string | undefined;
```

Since there can be multiple of certain HTTP headers or
to prevent ugliness if someone did send us multiple
instances of a header we only expect one of, this
method grabs the 1st/only one of the desired header

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `header` | `string` | The header to find |
| `req` | `Request` | The received HTTP request (with headers) |

## Returns

`string` \| `undefined`

The first or only occurrence of the specified HTTP header

  ### <a id="getJsonBodyParser"></a>getJsonBodyParser

[**@xylabs/express**](#../README)

***

```ts
function getJsonBodyParser(options?: OptionsJson): NextHandleFunction;
```

Get a JSON Body Parser connect middleware handler

## Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `options` | `OptionsJson` | `DefaultJsonBodyParserOptions` | The options for the JSON Body Parser |

## Returns

`NextHandleFunction`

A middleware function that parses JSON bodies

  ### <a id="getJsonBodyParserOptions"></a>getJsonBodyParserOptions

[**@xylabs/express**](#../README)

***

```ts
function getJsonBodyParserOptions(options?: Partial<OptionsJson>): OptionsJson;
```

Gets the default JSON Body Parser options merged with the supplied options
with the supplied options taking precedence

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `options?` | `Partial`\<`OptionsJson`\> | The options to override the default JSON Body Parser options with |

## Returns

`OptionsJson`

The combined JSON Body Parser options with the supplied values taking
precedence over the default

  ### <a id="getLogger"></a>getLogger

[**@xylabs/express**](#../README)

***

```ts
function getLogger(minVerbosity?: LoggerVerbosity): Logger;
```

Returns a cached Winston-backed logger at the specified verbosity level.

## Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `minVerbosity` | [`LoggerVerbosity`](#../type-aliases/LoggerVerbosity) | `'info'` | The minimum log level to output. Defaults to 'info'. |

## Returns

`Logger`

A logger instance configured for the given verbosity.

  ### <a id="getResponseMetadata"></a>getResponseMetadata

[**@xylabs/express**](#../README)

***

```ts
function getResponseMetadata(res: Response): Record<string, unknown>;
```

Extracts response metadata from res.locals, computing profile duration if profiling was started.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `res` | `Response` | The Express response to extract metadata from. |

## Returns

`Record`\<`string`, `unknown`\>

The metadata record including any profiling information.

  ### <a id="isRawResponseFormatSet"></a>isRawResponseFormatSet

[**@xylabs/express**](#../README)

***

```ts
function isRawResponseFormatSet(res: Response): boolean;
```

Checks if there are any flags on the response that would cause it
to forgo the standard response envelope and return the raw response
body to the client

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `res` | `Response` | - |

## Returns

`boolean`

True if there are any flags on the response, false otherwise

  ### <a id="requestHandlerValidator"></a>requestHandlerValidator

[**@xylabs/express**](#../README)

***

```ts
function requestHandlerValidator<TParams, TQuery, TBody, TResponse>(schemas?: Partial<{
  body: TBody;
  params: TParams;
  query: TQuery;
  response: TResponse;
}>): (handler: (req: Request<output<TParams>, output<TResponse>, output<TBody>, output<TQuery>>, res: Response<output<TResponse>>, next: NextFunction) => unknown) => RequestHandler;
```

Factory for Express middleware that validates request and response objects using Zod schemas.

## Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `TParams` *extends* \| `ZodObject`\<\{ \}, `$catchall`\<`ZodUnion`\<readonly \[`ZodString`, `ZodArray`\<`ZodString`\>\]\>\>\> \| `ZodType`\<`Record`\<`string`, `string`\>, `unknown`, `$ZodTypeInternals`\<`Record`\<`string`, `string`\>, `unknown`\>\> | `ZodObject`\<\{ \}, `$catchall`\<`ZodUnion`\<readonly \[`ZodString`, `ZodArray`\<`ZodString`\>\]\>\>\> |
| `TQuery` *extends* \| `ZodObject`\<\{ \}, `$catchall`\<`ZodUnion`\<readonly \[`ZodString`, `ZodArray`\<`ZodString`\>\]\>\>\> \| `ZodType`\<`Record`\<`string`, `string` \| `string`[]\>, `unknown`, `$ZodTypeInternals`\<`Record`\<`string`, `string` \| `string`[]\>, `unknown`\>\> | `ZodObject`\<\{ \}, `$catchall`\<`ZodUnion`\<readonly \[`ZodString`, `ZodArray`\<`ZodString`\>\]\>\>\> |
| `TBody` *extends* `ZodType`\<`unknown`, `unknown`, `$ZodTypeInternals`\<`unknown`, `unknown`\>\> | `ZodType`\<`unknown`, `unknown`, `$ZodTypeInternals`\<`unknown`, `unknown`\>\> |
| `TResponse` *extends* `ZodType`\<`unknown`, `unknown`, `$ZodTypeInternals`\<`unknown`, `unknown`\>\> | `ZodType`\<`unknown`, `unknown`, `$ZodTypeInternals`\<`unknown`, `unknown`\>\> |

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `schemas?` | `Partial`\<\{ `body`: `TBody`; `params`: `TParams`; `query`: `TQuery`; `response`: `TResponse`; \}\> | The Zod schemas to use for validation. |

## Returns

A middleware function for validating requests and responses.

```ts
(handler: (req: Request<output<TParams>, output<TResponse>, output<TBody>, output<TQuery>>, res: Response<output<TResponse>>, next: NextFunction) => unknown): RequestHandler;
```

### Parameters

| Parameter | Type |
| ------ | ------ |
| `handler` | (`req`: `Request`\<`output`\<`TParams`\>, `output`\<`TResponse`\>, `output`\<`TBody`\>, `output`\<`TQuery`\>\>, `res`: `Response`\<`output`\<`TResponse`\>\>, `next`: `NextFunction`) => `unknown` |

### Returns

`RequestHandler`

  ### <a id="responseProfiler"></a>responseProfiler

[**@xylabs/express**](#../README)

***

```ts
function responseProfiler(
   _req: Request, 
   res: Response, 
   next: NextFunction): void;
```

Connect middleware to enable profiling of response lifecycle timing. To effectively profile
the response timing, this middleware needs to be called first when initializing your Express
App

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `_req` | `Request` | The request |
| `res` | `Response` | The response |
| `next` | `NextFunction` | The next function |

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
function setRawResponseFormat(res: Response): void;
```

Flags the response to forgo the standard response envelope
and return the raw response body to the client

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `res` | `Response` | The response to disable the standard response format on |

## Returns

`void`

  ### <a id="standardErrors"></a>standardErrors

[**@xylabs/express**](#../README)

***

```ts
function standardErrors(
   err: ExpressError | undefined, 
   req: Request, 
   res: Response, 
   next: NextFunction): void;
```

Express error handler that logs the error and sends a JSON:API-compliant error response.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `err` | [`ExpressError`](#../interfaces/ExpressError) \| `undefined` | The error to handle, or undefined if no error. |
| `req` | `Request` | The incoming request. |
| `res` | `Response` | The outgoing response. |
| `next` | `NextFunction` | The next middleware function. |

## Returns

`void`

  ### <a id="tryParse"></a>tryParse

[**@xylabs/express**](#../README)

***

```ts
function tryParse<T>(func: ParseFunc<T>, value?: string): 
  | T & {
}
  | undefined;
```

## Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `T` | `number` |

## Parameters

| Parameter | Type |
| ------ | ------ |
| `func` | [`ParseFunc`](#../type-aliases/ParseFunc)\<`T`\> |
| `value?` | `string` |

## Returns

  \| `T` & \{
\}
  \| `undefined`

## Deprecated

use zod instead

  ### <a id="useRequestCounters"></a>useRequestCounters

[**@xylabs/express**](#../README)

***

```ts
function useRequestCounters(app: Application): void;
```

Registers middleware that increments per-path request counters and exposes a /stats endpoint.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `app` | `Application` | The Express application to attach counters to. |

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

| Type Parameter |
| ------ |
| `T` *extends* [`ApiResourceIdentifierObject`](#ApiResourceIdentifierObject) |

## Properties

| Property | Type | Inherited from |
| ------ | ------ | ------ |
| <a id="jsonapi"></a> `jsonapi?` | [`JsonApi`](#JsonApi) | [`ApiResponseBase`](#ApiResponseBase).[`jsonapi`](ApiResponseBase.md#jsonapi) |
| <a id="links"></a> `links?` | [`ApiLinks`](#../type-aliases/ApiLinks) | [`ApiResponseBase`](#ApiResponseBase).[`links`](ApiResponseBase.md#links) |
| <a id="meta"></a> `meta?` | `Record`\<`string`, `unknown`\> | [`ApiResponseBase`](#ApiResponseBase).[`meta`](ApiResponseBase.md#meta) |
| <a id="data"></a> `data` | `T` | - |
| <a id="included"></a> `included?` | [`ApiResourceObject`](#ApiResourceObject)[] | - |

  ### <a id="ApiError"></a>ApiError

[**@xylabs/express**](#../README)

***

## Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| <a id="code"></a> `code?` | `string` | An application-specific error code, expressed as a string value. |
| <a id="detail"></a> `detail?` | `string` | A human-readable explanation specific to this occurrence of the problem. Like title, this field's value can be localized. |
| <a id="id"></a> `id?` | `string` | A unique identifier for this particular occurrence of the problem. |
| <a id="links"></a> `links?` | [`ApiLinks`](#../type-aliases/ApiLinks) | A links object containing the following members: about: a link that leads to further details about this particular occurrence of the problem |
| <a id="meta"></a> `meta?` | `Record`\<`string`, `unknown`\> | A meta object containing non-standard meta-information about the error. |
| <a id="source"></a> `source?` | [`Source`](#Source) | An object containing references to the source of the error, optionally including any of the following members: |
| <a id="status"></a> `status?` | `string` | The HTTP status code applicable to this problem, expressed as a string value. |
| <a id="title"></a> `title?` | `string` | A short, human-readable summary of the problem that SHOULD NOT change from occurrence to occurrence of the problem, except for purposes of localization. |

  ### <a id="ApiErrorResponse"></a>ApiErrorResponse

[**@xylabs/express**](#../README)

***

A JSON:API error response containing one or more error objects.

## Extends

- [`ApiResponseBase`](#ApiResponseBase)

## Properties

| Property | Type | Inherited from |
| ------ | ------ | ------ |
| <a id="jsonapi"></a> `jsonapi?` | [`JsonApi`](#JsonApi) | [`ApiResponseBase`](#ApiResponseBase).[`jsonapi`](ApiResponseBase.md#jsonapi) |
| <a id="links"></a> `links?` | [`ApiLinks`](#../type-aliases/ApiLinks) | [`ApiResponseBase`](#ApiResponseBase).[`links`](ApiResponseBase.md#links) |
| <a id="meta"></a> `meta?` | `Record`\<`string`, `unknown`\> | [`ApiResponseBase`](#ApiResponseBase).[`meta`](ApiResponseBase.md#meta) |
| <a id="errors"></a> `errors` | [`ApiError`](#ApiError)[] | - |

  ### <a id="ApiResourceIdentifierObject"></a>ApiResourceIdentifierObject

[**@xylabs/express**](#../README)

***

Within a given API, each resource object's type and id pair MUST identify a single, unique resource.
(The set of URIs controlled by a server, or multiple servers acting as one, constitute an API.)

## Extended by

- [`ApiResourceObject`](#ApiResourceObject)

## Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| <a id="id"></a> `id` | `string` | The id member is not required when the resource object originates at the client and represents a new resource to be created on the server. |
| <a id="type"></a> `type` | `string` | The type member is used to describe resource objects that share common attributes and relationships. The values of type members MUST adhere to the same constraints as member names. |

  ### <a id="ApiResourceObject"></a>ApiResourceObject

[**@xylabs/express**](#../README)

***

A JSON:API resource object with optional attributes, links, meta, and relationships.

## Extends

- [`ApiResourceIdentifierObject`](#ApiResourceIdentifierObject)

## Properties

| Property | Type | Description | Inherited from |
| ------ | ------ | ------ | ------ |
| <a id="id"></a> `id` | `string` | The id member is not required when the resource object originates at the client and represents a new resource to be created on the server. | [`ApiResourceIdentifierObject`](#ApiResourceIdentifierObject).[`id`](ApiResourceIdentifierObject.md#id) |
| <a id="type"></a> `type` | `string` | The type member is used to describe resource objects that share common attributes and relationships. The values of type members MUST adhere to the same constraints as member names. | [`ApiResourceIdentifierObject`](#ApiResourceIdentifierObject).[`type`](ApiResourceIdentifierObject.md#type) |
| <a id="attributes"></a> `attributes?` | `Record`\<`string`, `unknown`\> | An attributes object representing some of the resource's data. | - |
| <a id="links"></a> `links?` | [`ApiLinks`](#../type-aliases/ApiLinks) | A links object containing links related to the resource. | - |
| <a id="meta"></a> `meta?` | `Record`\<`string`, `unknown`\> | A meta object containing non-standard meta-information about a resource that can not be represented as an attribute or relationship. | - |
| <a id="relationships"></a> `relationships?` | `Record`\<`string`, [`Relationship`](#../type-aliases/Relationship)\> | A relationships object describing relationships between the resource and other JSON:API resources. | - |

  ### <a id="ApiResponseBase"></a>ApiResponseBase

[**@xylabs/express**](#../README)

***

Base interface for all JSON:API responses, including optional links and metadata.

## Extended by

- [`ApiDataResponse`](#ApiDataResponse)
- [`ApiErrorResponse`](#ApiErrorResponse)

## Properties

| Property | Type |
| ------ | ------ |
| <a id="jsonapi"></a> `jsonapi?` | [`JsonApi`](#JsonApi) |
| <a id="links"></a> `links?` | [`ApiLinks`](#../type-aliases/ApiLinks) |
| <a id="meta"></a> `meta?` | `Record`\<`string`, `unknown`\> |

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

| Property | Type |
| ------ | ------ |
| <a id="statuscode"></a> `statusCode?` | `number` |

  ### <a id="HrefWithMeta"></a>HrefWithMeta

[**@xylabs/express**](#../README)

***

A link with an href and associated metadata.

## Properties

| Property | Type |
| ------ | ------ |
| <a id="href"></a> `href` | `string` |
| <a id="meta"></a> `meta` | `Record`\<`string`, `unknown`\> |

  ### <a id="IRelationshipData"></a>IRelationshipData

[**@xylabs/express**](#../README)

***

Contains the resource linkage data for a JSON:API relationship.

## Properties

| Property | Type |
| ------ | ------ |
| <a id="data"></a> `data` | [`ResourceLinkage`](#../type-aliases/ResourceLinkage) |

  ### <a id="IRelationshipLinks"></a>IRelationshipLinks

[**@xylabs/express**](#../README)

***

Contains the links for a JSON:API relationship.

## Properties

| Property | Type |
| ------ | ------ |
| <a id="links"></a> `links` | \| [`IRelationshipSelfLink`](#IRelationshipSelfLink) \| [`IRelationshipRelatedLink`](#IRelationshipRelatedLink) |

  ### <a id="IRelationshipRelatedLink"></a>IRelationshipRelatedLink

[**@xylabs/express**](#../README)

***

A relationship link pointing to a related resource.

## Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| <a id="related"></a> `related` | `string` | A related resource link |

  ### <a id="IRelationshipSelfLink"></a>IRelationshipSelfLink

[**@xylabs/express**](#../README)

***

A relationship link pointing to the relationship itself.

## Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| <a id="self"></a> `self` | `string` | A link for the relationship itself (a "relationship link"). This link allows the client to directly manipulate the relationship. For example, removing an author through an article’s relationship URL would disconnect the person from the article without deleting the people resource itself. When fetched successfully, this link returns the linkage for the related resources as its primary data. |

  ### <a id="JsonApi"></a>JsonApi

[**@xylabs/express**](#../README)

***

JSON:API version and metadata descriptor.

## Properties

| Property | Type |
| ------ | ------ |
| <a id="meta"></a> `meta?` | `Record`\<`string`, `unknown`\> |
| <a id="version"></a> `version?` | `"1.0"` \| `"1.1"` |

  ### <a id="LoggerOptions"></a>LoggerOptions

[**@xylabs/express**](#../README)

***

Configuration options for creating a logger instance.

## Properties

| Property | Type |
| ------ | ------ |
| <a id="defaultmeta"></a> `defaultMeta?` | [`LoggerMeta`](#../type-aliases/LoggerMeta) |
| <a id="level"></a> `level?` | [`LoggerVerbosity`](#../type-aliases/LoggerVerbosity) |

  ### <a id="RouteDefinition"></a>RouteDefinition

[**@xylabs/express**](#../README)

***

Defines an Express route with its HTTP method, path, and handler(s).

## Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `H` *extends* `RequestHandler` | `RequestHandler` |

## Properties

| Property | Type |
| ------ | ------ |
| <a id="handlers"></a> `handlers` | `H` \| `H`[] |
| <a id="method"></a> `method` | [`HttpMethod`](#../type-aliases/HttpMethod) |
| <a id="path"></a> `path` | `string` \| `RegExp` |

  ### <a id="Source"></a>Source

[**@xylabs/express**](#../README)

***

An object containing references to the source of the error

## Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| <a id="parameter"></a> `parameter?` | `string` | A string indicating which URI query parameter caused the error. |
| <a id="pointer"></a> `pointer?` | `string` | A JSON Pointer [RFC6901] to the associated entity in the request document [e.g. "/data" for a primary data object, or "/data/attributes/title" for a specific attribute]. |

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

| Type Parameter |
| ------ |
| `T` *extends* [`ApiResourceIdentifierObject`](#../interfaces/ApiResourceIdentifierObject) |

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
type ParseFunc<T> = (value: string) => T;
```

A function that parses a string value into the target type.

## Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `T` | `number` |

## Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `string` |

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
const ValidateRequestDefaults: {
  params: ZodObject<{
  }, $catchall<ZodString>>;
  query: ZodObject<{
  }, $catchall<ZodUnion<readonly [ZodString, ZodArray<ZodString>]>>>;
  body: ZodOptional<ZodJSONSchema>;
  response: ZodOptional<ZodJSONSchema>;
};
```

Default validation schemas for request handler validator.

## Type Declaration

| Name | Type | Default value |
| ------ | ------ | ------ |
| <a id="property-params"></a> `params` | `ZodObject`\<\{ \}, `$catchall`\<`ZodString`\>\> | `EmptyParamsZod` |
| <a id="property-query"></a> `query` | `ZodObject`\<\{ \}, `$catchall`\<`ZodUnion`\<readonly \[`ZodString`, `ZodArray`\<`ZodString`\>\]\>\>\> | `EmptyQueryParamsZod` |
| <a id="property-body"></a> `body` | `ZodOptional`\<`ZodJSONSchema`\> | - |
| <a id="property-response"></a> `response` | `ZodOptional`\<`ZodJSONSchema`\> | - |

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