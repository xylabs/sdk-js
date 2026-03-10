# @xylabs/pixel

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


Event Client for xylabs ESB

## Reference

**@xylabs/pixel**

***

## Classes

- [PixelApi](#classes/PixelApi)
- [XyPixel](#classes/XyPixel)
- [Referrer](#classes/Referrer)
- [UniqueUserId](#classes/UniqueUserId)
- [UserEventHandler](#classes/UserEventHandler)
- [UtmFields](#classes/UtmFields)
- [XyUserEventHandler](#classes/XyUserEventHandler)

## Interfaces

- [UserEvent](#interfaces/UserEvent)
- [CommonFields](#interfaces/CommonFields)
- [FunnelStartedFields](#interfaces/FunnelStartedFields)
- [PurchaseFields](#interfaces/PurchaseFields)
- [TestStartedFields](#interfaces/TestStartedFields)
- [UserClickFields](#interfaces/UserClickFields)
- [ViewContentFields](#interfaces/ViewContentFields)
- [XyLabsTrackingEventJson](#interfaces/XyLabsTrackingEventJson)

## Type Aliases

- [UserEventSystem](#type-aliases/UserEventSystem)

### classes

  ### <a id="PixelApi"></a>PixelApi

[**@xylabs/pixel**](#../README)

***

HTTP client for sending tracking events to the XY Labs pixel API.

## Constructors

### Constructor

```ts
new PixelApi(baseUri?): PixelApi;
```

### Parameters

#### baseUri?

`string` = `'prod'`

### Returns

`PixelApi`

## Methods

### trackEvents()

```ts
trackEvents(events): Promise<any>;
```

Sends an array of user events to the tracking API.

### Parameters

#### events

[`UserEvent`](#../interfaces/UserEvent)[]

The events to submit

### Returns

`Promise`\<`any`\>

The response data from the API

  ### <a id="Referrer"></a>Referrer

[**@xylabs/pixel**](#../README)

***

Tracks and persists the document referrer in both session and local storage.

## Constructors

### Constructor

```ts
new Referrer(): Referrer;
```

### Returns

`Referrer`

## Properties

### local

```ts
local: string;
```

***

### session

```ts
session: string;
```

## Methods

### toJson()

```ts
toJson(): 
  | {
  local: string;
  session: string;
}
  | undefined;
```

Returns the referrer data as a JSON object, or undefined if both values are empty.

### Returns

  \| \{
  `local`: `string`;
  `session`: `string`;
\}
  \| `undefined`

An object with local and session referrer strings, or undefined

  ### <a id="UniqueUserId"></a>UniqueUserId

[**@xylabs/pixel**](#../README)

***

Generates and persists a unique user identifier in localStorage.

## Constructors

### Constructor

```ts
new UniqueUserId(): UniqueUserId;
```

### Returns

`UniqueUserId`

## Properties

### id

```ts
id: string;
```

## Methods

### toString()

```ts
toString(): string;
```

Returns the unique user ID as a string.

### Returns

`string`

  ### <a id="UserEventHandler"></a>UserEventHandler

[**@xylabs/pixel**](#../README)

***

Abstract base class for handling user tracking events.

## Extended by

- [`XyUserEventHandler`](#XyUserEventHandler)

## Type Parameters

### TData

`TData` *extends* `EmptyObject`

## Constructors

### Constructor

```ts
new UserEventHandler<TData>(): UserEventHandler<TData>;
```

### Returns

`UserEventHandler`\<`TData`\>

## Methods

### funnelStarted()

```ts
abstract funnelStarted<T>(fields): Promisable<void>;
```

Tracks a funnel-started event.

### Type Parameters

#### T

`T` *extends* `object`

### Parameters

#### fields

[`FunnelStartedFields`](#../interfaces/FunnelStartedFields) | `T`

### Returns

`Promisable`\<`void`\>

***

### testStarted()

```ts
abstract testStarted<T>(fields): Promisable<void>;
```

Tracks a test-started event.

### Type Parameters

#### T

`T` *extends* `object`

### Parameters

#### fields

[`TestStartedFields`](#../interfaces/TestStartedFields) | `T`

### Returns

`Promisable`\<`void`\>

***

### userClick()

```ts
abstract userClick<T>(fields): Promisable<void>;
```

Tracks a user click event.

### Type Parameters

#### T

`T` *extends* `object`

### Parameters

#### fields

[`UserClickFields`](#../interfaces/UserClickFields) | `T`

### Returns

`Promisable`\<`void`\>

***

### viewContent()

```ts
abstract viewContent<T>(fields): Promisable<void>;
```

Tracks a view-content event.

### Type Parameters

#### T

`T` *extends* `object`

### Parameters

#### fields

`T` | [`ViewContentFields`](#../interfaces/ViewContentFields)

### Returns

`Promisable`\<`void`\>

  ### <a id="UtmFields"></a>UtmFields

[**@xylabs/pixel**](#../README)

***

Tracks UTM campaign parameters from query strings, persisting history in localStorage.

## Constructors

### Constructor

```ts
new UtmFields(): UtmFields;
```

### Returns

`UtmFields`

## Properties

### fields

```ts
fields: Record<string, string>[] = [];
```

## Methods

### getUtmRecord()

```ts
getUtmRecord(): Record<string, string> | null;
```

Parses UTM parameters from the current URL query string.

### Returns

`Record`\<`string`, `string`\> \| `null`

A record of UTM key-value pairs, or null if none are present

***

### toString()

```ts
toString(): string;
```

Returns the UTM fields history as a JSON string.

### Returns

`string`

***

### update()

```ts
update(): Record<string, string>[];
```

Checks the query string for new UTM values and appends them to the history if changed.

### Returns

`Record`\<`string`, `string`\>[]

The current UTM fields array, or undefined if empty

  ### <a id="XyPixel"></a>XyPixel

[**@xylabs/pixel**](#../README)

***

Singleton pixel tracker that queues and sends user events to the XY Labs tracking API.

## Properties

### api

```ts
static api: PixelApi;
```

***

### cid

```ts
cid: string;
```

***

### email?

```ts
optional email: string;
```

***

### email\_hash?

```ts
optional email_hash: string | null;
```

***

### exids?

```ts
optional exids: ExIds;
```

***

### pixelId?

```ts
optional pixelId: string;
```

***

### queue

```ts
queue: UserEvent[] = [];
```

## Accessors

### instance

### Get Signature

```ts
get static instance(): XyPixel;
```

Returns the singleton XyPixel instance, throwing if not yet initialized.

#### Returns

`XyPixel`

## Methods

### init()

```ts
static init(pixelId): XyPixel;
```

Initializes the XyPixel singleton with the given pixel ID.

### Parameters

#### pixelId

`string`

The pixel identifier for this tracking instance

### Returns

`XyPixel`

The newly created XyPixel instance

***

### selectApi()

```ts
static selectApi(api): void;
```

Replaces the default PixelApi instance used for sending events.

### Parameters

#### api

[`PixelApi`](#PixelApi)

The PixelApi instance to use

### Returns

`void`

***

### identify()

```ts
identify(email?): void;
```

Associates an email address with this pixel instance, hashing it for privacy.

### Parameters

#### email?

`string`

The email address to identify the user with

### Returns

`void`

***

### send()

```ts
send<T>(
   event, 
   fields?, 
eventId?): Promise<void>;
```

Queues a tracking event and attempts to flush the queue to the API.

### Type Parameters

#### T

`T` *extends* `Record`\<`string`, `unknown`\>

### Parameters

#### event

`string`

The event name

#### fields?

`T`

Optional event-specific fields

#### eventId?

`string`

Optional unique event identifier

### Returns

`Promise`\<`void`\>

  ### <a id="XyUserEventHandler"></a>XyUserEventHandler

[**@xylabs/pixel**](#../README)

***

Concrete event handler that sends tracking events through the XyPixel singleton.

## Extends

- [`UserEventHandler`](#UserEventHandler)\<`T`\>

## Type Parameters

### T

`T` *extends* `EmptyObject` = `EmptyObject`

## Constructors

### Constructor

```ts
new XyUserEventHandler<T>(): XyUserEventHandler<T>;
```

### Returns

`XyUserEventHandler`\<`T`\>

### Overrides

[`UserEventHandler`](#UserEventHandler).[`constructor`](UserEventHandler.md#constructor)

## Methods

### funnelStarted()

```ts
funnelStarted(fields): Promise<void>;
```

Sends a funnel-started event via the pixel API.

### Parameters

#### fields

[`FunnelStartedFields`](#../interfaces/FunnelStartedFields) | `T`

### Returns

`Promise`\<`void`\>

### Overrides

[`UserEventHandler`](#UserEventHandler).[`funnelStarted`](UserEventHandler.md#funnelstarted)

***

### purchase()

```ts
purchase(fields): Promise<void>;
```

Sends a purchase event via the pixel API.

### Parameters

#### fields

[`PurchaseFields`](#../interfaces/PurchaseFields) | `T`

### Returns

`Promise`\<`void`\>

***

### testStarted()

```ts
testStarted(fields): Promise<void>;
```

Sends a test-started event via the pixel API.

### Parameters

#### fields

[`TestStartedFields`](#../interfaces/TestStartedFields) | `T`

### Returns

`Promise`\<`void`\>

### Overrides

[`UserEventHandler`](#UserEventHandler).[`testStarted`](UserEventHandler.md#teststarted)

***

### userClick()

```ts
userClick(fields): Promise<void>;
```

Sends a user click event via the pixel API.

### Parameters

#### fields

[`UserClickFields`](#../interfaces/UserClickFields) | `T`

### Returns

`Promise`\<`void`\>

### Overrides

[`UserEventHandler`](#UserEventHandler).[`userClick`](UserEventHandler.md#userclick)

***

### viewContent()

```ts
viewContent(fields): Promise<void>;
```

Sends a view-content event via the pixel API.

### Parameters

#### fields

[`ViewContentFields`](#../interfaces/ViewContentFields) | `T`

### Returns

`Promise`\<`void`\>

### Overrides

[`UserEventHandler`](#UserEventHandler).[`viewContent`](UserEventHandler.md#viewcontent)

### interfaces

  ### <a id="CommonFields"></a>CommonFields

[**@xylabs/pixel**](#../README)

***

Common fields shared across all tracking event types.

## Extended by

- [`FunnelStartedFields`](#FunnelStartedFields)
- [`PurchaseFields`](#PurchaseFields)
- [`TestStartedFields`](#TestStartedFields)
- [`UserClickFields`](#UserClickFields)
- [`ViewContentFields`](#ViewContentFields)

## Properties

### funnel?

```ts
optional funnel: string;
```

***

### testData?

```ts
optional testData: string;
```

  ### <a id="FunnelStartedFields"></a>FunnelStartedFields

[**@xylabs/pixel**](#../README)

***

Fields for a funnel-started tracking event.

## Extends

- [`CommonFields`](#CommonFields)

## Properties

### funnel?

```ts
optional funnel: string;
```

### Inherited from

[`CommonFields`](#CommonFields).[`funnel`](CommonFields.md#funnel)

***

### testData?

```ts
optional testData: string;
```

### Inherited from

[`CommonFields`](#CommonFields).[`testData`](CommonFields.md#testdata)

***

### name

```ts
name: string;
```

  ### <a id="PurchaseFields"></a>PurchaseFields

[**@xylabs/pixel**](#../README)

***

Fields for a purchase tracking event.

## Extends

- [`CommonFields`](#CommonFields)

## Properties

### funnel?

```ts
optional funnel: string;
```

### Inherited from

[`CommonFields`](#CommonFields).[`funnel`](CommonFields.md#funnel)

***

### testData?

```ts
optional testData: string;
```

### Inherited from

[`CommonFields`](#CommonFields).[`testData`](CommonFields.md#testdata)

***

### id

```ts
id: string;
```

***

### name?

```ts
optional name: string;
```

***

### price?

```ts
optional price: number;
```

***

### value?

```ts
optional value: number;
```

  ### <a id="TestStartedFields"></a>TestStartedFields

[**@xylabs/pixel**](#../README)

***

Fields for a test-started tracking event (e.g. A/B test).

## Extends

- [`CommonFields`](#CommonFields)

## Properties

### funnel?

```ts
optional funnel: string;
```

### Inherited from

[`CommonFields`](#CommonFields).[`funnel`](CommonFields.md#funnel)

***

### testData?

```ts
optional testData: string;
```

### Inherited from

[`CommonFields`](#CommonFields).[`testData`](CommonFields.md#testdata)

***

### name

```ts
name: string;
```

  ### <a id="UserClickFields"></a>UserClickFields

[**@xylabs/pixel**](#../README)

***

Fields for a user click tracking event.

## Extends

- [`CommonFields`](#CommonFields)

## Properties

### funnel?

```ts
optional funnel: string;
```

### Inherited from

[`CommonFields`](#CommonFields).[`funnel`](CommonFields.md#funnel)

***

### testData?

```ts
optional testData: string;
```

### Inherited from

[`CommonFields`](#CommonFields).[`testData`](CommonFields.md#testdata)

***

### elementName

```ts
elementName: string;
```

***

### elementType

```ts
elementType: string;
```

***

### intent?

```ts
optional intent: string;
```

***

### placement?

```ts
optional placement: string;
```

  ### <a id="UserEvent"></a>UserEvent

[**@xylabs/pixel**](#../README)

***

Represents a single user tracking event to be sent to the pixel API.

## Properties

### cid

```ts
cid: string;
```

***

### create\_time?

```ts
optional create_time: number;
```

***

### email?

```ts
optional email: string;
```

***

### email\_hash?

```ts
optional email_hash: string;
```

***

### event?

```ts
optional event: string;
```

***

### event\_id?

```ts
optional event_id: string;
```

***

### exids?

```ts
optional exids: ExIds;
```

***

### fields?

```ts
optional fields: Record<string, unknown>;
```

***

### host?

```ts
optional host: string;
```

***

### pathname?

```ts
optional pathname: string;
```

***

### pixel?

```ts
optional pixel: string;
```

***

### receive\_time?

```ts
optional receive_time: number;
```

***

### referrer?

```ts
optional referrer: object;
```

### local

```ts
local: string;
```

### session

```ts
session: string;
```

***

### rid?

```ts
optional rid: string;
```

***

### system?

```ts
optional system: ParsedResult;
```

***

### uid?

```ts
optional uid: string;
```

***

### utm?

```ts
optional utm: Record<string, string>[] | Record<string, string[]>;
```

  ### <a id="ViewContentFields"></a>ViewContentFields

[**@xylabs/pixel**](#../README)

***

Fields for a view-content tracking event.

## Extends

- [`CommonFields`](#CommonFields)

## Properties

### funnel?

```ts
optional funnel: string;
```

### Inherited from

[`CommonFields`](#CommonFields).[`funnel`](CommonFields.md#funnel)

***

### testData?

```ts
optional testData: string;
```

### Inherited from

[`CommonFields`](#CommonFields).[`testData`](CommonFields.md#testdata)

***

### name

```ts
name: string;
```

***

### path

```ts
path: string;
```

  ### <a id="XyLabsTrackingEventJson"></a>XyLabsTrackingEventJson

[**@xylabs/pixel**](#../README)

***

JSON structure for an XY Labs tracking event as stored or transmitted.

## Properties

### cid

```ts
cid: string;
```

***

### create\_time?

```ts
optional create_time: number;
```

***

### email?

```ts
optional email: string;
```

***

### email\_hash?

```ts
optional email_hash: string;
```

***

### event?

```ts
optional event: string;
```

***

### event\_id?

```ts
optional event_id: string;
```

***

### exids?

```ts
optional exids: Record<string, string>;
```

***

### fields?

```ts
optional fields: Record<string, unknown>;
```

***

### host?

```ts
optional host: string;
```

***

### ip?

```ts
optional ip: string;
```

***

### pathname?

```ts
optional pathname: string;
```

***

### pixel?

```ts
optional pixel: string;
```

***

### receive\_time?

```ts
optional receive_time: number;
```

***

### rid?

```ts
optional rid: string;
```

***

### system?

```ts
optional system: unknown;
```

***

### ua?

```ts
optional ua: string;
```

***

### uid?

```ts
optional uid: string;
```

***

### utm?

```ts
optional utm: Record<string, string>[] | Record<string, string[]>;
```

### type-aliases

  ### <a id="UserEventSystem"></a>UserEventSystem

[**@xylabs/pixel**](#../README)

***

```ts
type UserEventSystem = Bowser.Parser.ParsedResult;
```

Parsed browser/OS/engine information from the user agent string.


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
[npm-badge]: https://img.shields.io/npm/v/@xylabs/pixel.svg
[npm-link]: https://www.npmjs.com/package/@xylabs/pixel
[codacy-badge]: https://app.codacy.com/project/badge/Grade/c8e15e14f37741c18cfb47ac7245c698
[codacy-link]: https://www.codacy.com/gh/xylabs/sdk-js/dashboard?utm_source=github.com&utm_medium=referral&utm_content=xylabs/sdk-js&utm_campaign=Badge_Grade
[codeclimate-badge]: https://api.codeclimate.com/v1/badges/c5eb068f806f0b047ea7/maintainability
[codeclimate-link]: https://codeclimate.com/github/xylabs/sdk-js/maintainability
[snyk-badge]: https://snyk.io/test/github/xylabs/sdk-js/badge.svg?targetFile=package.json
[snyk-link]: https://snyk.io/test/github/xylabs/sdk-js?targetFile=package.json

[npm-downloads-badge]: https://img.shields.io/npm/dw/@xylabs/pixel
[npm-license-badge]: https://img.shields.io/npm/l/@xylabs/pixel

[jsdelivr-badge]: https://data.jsdelivr.com/v1/package/npm/@xylabs/pixel/badge
[jsdelivr-link]: https://www.jsdelivr.com/package/npm/@xylabs/pixel

[socket-badge]: https://socket.dev/api/badge/npm/package/@xylabs/pixel
[socket-link]: https://socket.dev/npm/package/@xylabs/pixel