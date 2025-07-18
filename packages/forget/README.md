# @xylabs/forget

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

**@xylabs/forget**

***

## Classes

- [ForgetPromise](#classes/ForgetPromise)

## Interfaces

- [ForgetNodeConfig](#interfaces/ForgetNodeConfig)

## Variables

- [defaultForgetNodeConfig](#variables/defaultForgetNodeConfig)

## Functions

- [forget](#functions/forget)

### classes

  ### <a id="ForgetPromise"></a>ForgetPromise

[**@xylabs/forget**](#../README)

***

## Extends

- `ForgetPromise`

## Constructors

### Constructor

```ts
new ForgetPromise(): ForgetPromiseNode;
```

### Returns

`ForgetPromiseNode`

### Inherited from

```ts
ForgetPromise.constructor
```

## Properties

### activeForgets

```ts
static activeForgets: number = 0;
```

### Inherited from

```ts
ForgetPromise.activeForgets
```

***

### exceptedForgets

```ts
static exceptedForgets: number = 0;
```

### Inherited from

```ts
ForgetPromise.exceptedForgets
```

***

### logger

```ts
static logger: Logger = console;
```

### Inherited from

```ts
ForgetPromise.logger
```

## Accessors

### active

### Get Signature

```ts
get static active(): boolean;
```

#### Returns

`boolean`

### Inherited from

```ts
ForgetPromise.active
```

## Methods

### awaitInactive()

```ts
static awaitInactive(interval, timeout?): Promise<number>;
```

### Parameters

#### interval

`number` = `100`

#### timeout?

`number`

### Returns

`Promise`\<`number`\>

### Inherited from

```ts
ForgetPromise.awaitInactive
```

***

### exceptionHandler()

```ts
static exceptionHandler(
   error, 
   config, 
   externalStackTrace?): void;
```

### Parameters

#### error

`Error`

#### config

[`ForgetNodeConfig`](#../interfaces/ForgetNodeConfig)

#### externalStackTrace?

`string`

### Returns

`void`

### Overrides

```ts
ForgetPromise.exceptionHandler
```

***

### forget()

```ts
static forget<T>(promise, config?): void;
```

Used to explicitly launch an async function (or Promise) with awaiting it

### Type Parameters

#### T

`T`

### Parameters

#### promise

`Promisable`\<`T`\>

The promise to forget

#### config?

[`ForgetNodeConfig`](#../interfaces/ForgetNodeConfig)\<`T`\>

Configuration of forget settings

### Returns

`void`

### Overrides

```ts
ForgetPromise.forget
```

***

### timeoutHandler()

```ts
static timeoutHandler(
   time, 
   config, 
   externalStackTrace?): void;
```

### Parameters

#### time

`number`

#### config

[`ForgetNodeConfig`](#../interfaces/ForgetNodeConfig)

#### externalStackTrace?

`string`

### Returns

`void`

### Overrides

```ts
ForgetPromise.timeoutHandler
```

### functions

  ### <a id="forget"></a>forget

[**@xylabs/forget**](#../README)

***

```ts
function forget<T>(promise, config?): void;
```

## Type Parameters

### T

`T`

## Parameters

### promise

`Promisable`\<`T`\>

### config?

[`ForgetNodeConfig`](#../interfaces/ForgetNodeConfig)\<`T`\>

## Returns

`void`

### interfaces

  ### <a id="ForgetNodeConfig"></a>ForgetNodeConfig

[**@xylabs/forget**](#../README)

***

## Extends

- `ForgetConfig`\<`T`\>

## Type Parameters

### T

`T` = `any`

## Properties

### name?

```ts
optional name: string;
```

### Inherited from

```ts
ForgetConfig.name
```

***

### onCancel()?

```ts
optional onCancel: () => void;
```

### Returns

`void`

### Inherited from

```ts
ForgetConfig.onCancel
```

***

### onComplete()?

```ts
optional onComplete: (result) => void;
```

### Parameters

#### result

\[`undefined` \| `T`, `undefined` \| `Error`\]

### Returns

`void`

### Inherited from

```ts
ForgetConfig.onComplete
```

***

### onException()?

```ts
optional onException: (error) => void;
```

### Parameters

#### error

`Error`

### Returns

`void`

### Inherited from

```ts
ForgetConfig.onException
```

***

### timeout?

```ts
optional timeout: number;
```

### Inherited from

```ts
ForgetConfig.timeout
```

***

### terminateOnException?

```ts
optional terminateOnException: boolean;
```

***

### terminateOnTimeout?

```ts
optional terminateOnTimeout: boolean;
```

### variables

  ### <a id="defaultForgetNodeConfig"></a>defaultForgetNodeConfig

[**@xylabs/forget**](#../README)

***

```ts
const defaultForgetNodeConfig: ForgetNodeConfig<unknown>;
```


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
[npm-badge]: https://img.shields.io/npm/v/@xylabs/forget.svg
[npm-link]: https://www.npmjs.com/package/@xylabs/forget
[codacy-badge]: https://app.codacy.com/project/badge/Grade/c8e15e14f37741c18cfb47ac7245c698
[codacy-link]: https://www.codacy.com/gh/xylabs/sdk-js/dashboard?utm_source=github.com&utm_medium=referral&utm_content=xylabs/sdk-js&utm_campaign=Badge_Grade
[codeclimate-badge]: https://api.codeclimate.com/v1/badges/c5eb068f806f0b047ea7/maintainability
[codeclimate-link]: https://codeclimate.com/github/xylabs/sdk-js/maintainability
[snyk-badge]: https://snyk.io/test/github/xylabs/sdk-js/badge.svg?targetFile=package.json
[snyk-link]: https://snyk.io/test/github/xylabs/sdk-js?targetFile=package.json

[npm-downloads-badge]: https://img.shields.io/npm/dw/@xylabs/forget
[npm-license-badge]: https://img.shields.io/npm/l/@xylabs/forget

[jsdelivr-badge]: https://data.jsdelivr.com/v1/package/npm/@xylabs/forget/badge
[jsdelivr-link]: https://www.jsdelivr.com/package/npm/@xylabs/forget

[socket-badge]: https://socket.dev/api/badge/npm/package/@xylabs/forget
[socket-link]: https://socket.dev/npm/package/@xylabs/forget