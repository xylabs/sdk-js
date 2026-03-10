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

## Reference

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

Node.js extension of ForgetPromise that can terminate the process on exceptions or timeouts.

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

Number of currently active (unresolved) forgotten promises.

### Inherited from

```ts
ForgetPromise.activeForgets
```

***

### exceptedForgets

```ts
static exceptedForgets: number = 0;
```

Number of forgotten promises that threw exceptions.

### Inherited from

```ts
ForgetPromise.exceptedForgets
```

***

### logger

```ts
static logger: Logger = console;
```

Logger instance used for error and warning output.

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

Whether any forgotten promises are still active.

#### Returns

`boolean`

### Inherited from

```ts
ForgetPromise.active
```

## Methods

### awaitInactive()

```ts
static awaitInactive(interval?, timeout?): Promise<number>;
```

Waits until all forgotten promises have completed.

### Parameters

#### interval?

`number` = `100`

Polling interval in milliseconds.

#### timeout?

`number`

Optional maximum wait time in milliseconds.

### Returns

`Promise`\<`number`\>

The number of remaining active forgets (0 if all completed).

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

Handles exceptions, optionally terminating the process based on config.

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

Forgets a promise using Node.js-specific configuration with process termination support.

### Type Parameters

#### T

`T`

### Parameters

#### promise

`Promisable`\<`T`\>

#### config?

[`ForgetNodeConfig`](#../interfaces/ForgetNodeConfig)\<`T`\>

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

Handles timeouts, optionally terminating the process based on config.

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

Node.js variant of forget that can optionally terminate the process on exceptions or timeouts.

## Type Parameters

### T

`T`

## Parameters

### promise

`Promisable`\<`T`\>

The promise or promisable value to forget.

### config?

[`ForgetNodeConfig`](#../interfaces/ForgetNodeConfig)\<`T`\>

Optional Node.js-specific configuration including process termination options.

## Returns

`void`

### interfaces

  ### <a id="ForgetNodeConfig"></a>ForgetNodeConfig

[**@xylabs/forget**](#../README)

***

Node.js-specific forget configuration that extends ForgetConfig with process termination options.

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

Optional name for identifying the forgotten promise in logs.

### Inherited from

```ts
ForgetConfig.name
```

***

### onCancel()?

```ts
optional onCancel: () => void;
```

Called when the promise is cancelled due to timeout.

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

Called when the promise completes, with a tuple of [result, error].

### Parameters

#### result

\[`T` \| `undefined`, `Error` \| `undefined`\]

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

Called when an exception occurs outside the promise itself.

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

Timeout in milliseconds after which the promise is considered timed out.

### Inherited from

```ts
ForgetConfig.timeout
```

***

### terminateOnException?

```ts
optional terminateOnException: boolean;
```

Terminate the process on an exception that happens outside of the promise being forgotten.

***

### terminateOnTimeout?

```ts
optional terminateOnTimeout: boolean;
```

Terminate the process if the promise times out.

### variables

  ### <a id="defaultForgetNodeConfig"></a>defaultForgetNodeConfig

[**@xylabs/forget**](#../README)

***

```ts
const defaultForgetNodeConfig: ForgetNodeConfig<unknown>;
```

Default Node.js forget configuration with termination disabled.


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