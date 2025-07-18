# @xylabs/threads

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


Web workers & worker threads as simple as a function call

## Reference

**@xylabs/threads**

***

## Modules

- [index-browser](#index-browser/README)
- [index-node](#index-node/README)

### index-browser

  ### functions

    ### <a id="Transfer"></a>Transfer

[**@xylabs/threads**](#../../README)

***

## Call Signature

```ts
function Transfer(transferable): TransferDescriptor;
```

Mark a transferable object as such, so it will no be serialized and
deserialized on messaging with the main thread, but to transfer
ownership of it to the receiving thread.

Only works with array buffers, message ports and few more special
types of objects, but it's much faster than serializing and
deserializing them.

Note:
The transferable object cannot be accessed by this thread again
unless the receiving thread transfers it back again!

### Parameters

### transferable

`Transferable`

Array buffer, message port or similar.

### Returns

[`TransferDescriptor`](#../interfaces/TransferDescriptor)

### See

<https://developers.google.com/web/updates/2011/12/Transferable-Objects-Lightning-Fast>

## Call Signature

```ts
function Transfer<T>(payload, transferables): TransferDescriptor;
```

Mark transferable objects within an arbitrary object or array as
being a transferable object. They will then not be serialized
and deserialized on messaging with the main thread, but ownership
of them will be tranferred to the receiving thread.

Only array buffers, message ports and few more special types of
objects can be transferred, but it's much faster than serializing and
deserializing them.

Note:
The transferable object cannot be accessed by this thread again
unless the receiving thread transfers it back again!

### Type Parameters

### T

`T`

### Parameters

### payload

`T`

### transferables

`Transferable`[]

### Returns

[`TransferDescriptor`](#../interfaces/TransferDescriptor)

### See

<https://developers.google.com/web/updates/2011/12/Transferable-Objects-Lightning-Fast>

    ### <a id="isWorkerRuntime"></a>isWorkerRuntime

[**@xylabs/threads**](#../../README)

***

```ts
function isWorkerRuntime(): boolean;
```

## Returns

`boolean`

    ### <a id="registerSerializer"></a>registerSerializer

[**@xylabs/threads**](#../../README)

***

```ts
function registerSerializer(serializer): void;
```

## Parameters

### serializer

[`SerializerImplementation`](#../interfaces/SerializerImplementation)\<[`JsonSerializable`](#../type-aliases/JsonSerializable)\>

## Returns

`void`

    ### <a id="spawn"></a>spawn

[**@xylabs/threads**](#../../README)

***

```ts
function spawn<Exposed>(worker, options?): Promise<ExposedAs<Exposed>>;
```

Spawn a new thread. Takes a fresh worker instance, wraps it in a thin
abstraction layer to provide the transparent API and verifies that
the worker has initialized successfully.

## Type Parameters

### Exposed

`Exposed` *extends* `WorkerFunction` \| `WorkerModule`\<`any`\> = `ArbitraryWorkerInterface`

## Parameters

### worker

`Worker`

Instance of `Worker`. Either a web worker, `worker_threads` worker or `tiny-worker` worker.

### options?

### timeout?

`number`

Init message timeout. Default: 10000 or set by environment variable.

## Returns

`Promise`\<[`ExposedAs`](#../type-aliases/ExposedAs)\<`Exposed`\>\>

  ### interfaces

    ### <a id="Pool"></a>Pool

[**@xylabs/threads**](#../../README)

***

Thread pool managing a set of worker threads.
Use it to queue tasks that are run on those threads with limited
concurrency.

## Type Parameters

### ThreadType

`ThreadType` *extends* [`Thread`](#../type-aliases/Thread)

## Methods

### completed()

```ts
completed(allowResolvingImmediately?): Promise<any>;
```

Returns a promise that resolves once the task queue is emptied.
Promise will be rejected if any task fails.

### Parameters

#### allowResolvingImmediately?

`boolean`

Set to `true` to resolve immediately if task queue is currently empty.

### Returns

`Promise`\<`any`\>

***

### settled()

```ts
settled(allowResolvingImmediately?): Promise<Error[]>;
```

Returns a promise that resolves once the task queue is emptied.
Failing tasks will not cause the promise to be rejected.

### Parameters

#### allowResolvingImmediately?

`boolean`

Set to `true` to resolve immediately if task queue is currently empty.

### Returns

`Promise`\<`Error`[]\>

***

### events()

```ts
events(): Observable<PoolEvent<ThreadType>>;
```

Returns an observable that yields pool events.

### Returns

`Observable`\<`PoolEvent`\<`ThreadType`\>\>

***

### queue()

```ts
queue<Return>(task): QueuedTask<ThreadType, Return>;
```

Queue a task and return a promise that resolves once the task has been dequeued,
started and finished.

### Type Parameters

#### Return

`Return`

### Parameters

#### task

`TaskRunFunction`\<`ThreadType`, `Return`\>

An async function that takes a thread instance and invokes it.

### Returns

[`QueuedTask`](#QueuedTask)\<`ThreadType`, `Return`\>

***

### terminate()

```ts
terminate(force?): Promise<void>;
```

Terminate all pool threads.

### Parameters

#### force?

`boolean`

Set to `true` to kill the thread even if it cannot be stopped gracefully.

### Returns

`Promise`\<`void`\>

    ### <a id="QueuedTask"></a>QueuedTask

[**@xylabs/threads**](#../../README)

***

Task that has been `pool.queued()`-ed.

## Type Parameters

### ThreadType

`ThreadType` *extends* [`Thread`](#../type-aliases/Thread)

### Return

`Return`

## Properties

### then()

```ts
then: <TResult1, TResult2>(onfulfilled?, onrejected?) => Promise<TResult1 | TResult2>;
```

`QueuedTask` is thenable, so you can `await` it.
Resolves when the task has successfully been executed. Rejects if the task fails.

Attaches callbacks for the resolution and/or rejection of the Promise.

### Type Parameters

#### TResult1

`TResult1` = `Return`

#### TResult2

`TResult2` = `never`

### Parameters

#### onfulfilled?

The callback to execute when the Promise is resolved.

`null` | (`value`) => `TResult1` \| `PromiseLike`\<`TResult1`\>

#### onrejected?

The callback to execute when the Promise is rejected.

`null` | (`reason`) => `TResult2` \| `PromiseLike`\<`TResult2`\>

### Returns

`Promise`\<`TResult1` \| `TResult2`\>

A Promise for the completion of which ever callback is executed.

## Methods

### cancel()

```ts
cancel(): void;
```

Queued tasks can be cancelled until the pool starts running them on a worker thread.

### Returns

`void`

    ### <a id="Serializer"></a>Serializer

[**@xylabs/threads**](#../../README)

***

## Type Parameters

### Msg

`Msg` = [`JsonSerializable`](#../type-aliases/JsonSerializable)

### Input

`Input` = `any`

## Methods

### deserialize()

```ts
deserialize(message): Input;
```

### Parameters

#### message

`Msg`

### Returns

`Input`

***

### serialize()

```ts
serialize(input): Msg;
```

### Parameters

#### input

`Input`

### Returns

`Msg`

    ### <a id="SerializerImplementation"></a>SerializerImplementation

[**@xylabs/threads**](#../../README)

***

## Type Parameters

### Msg

`Msg` = [`JsonSerializable`](#../type-aliases/JsonSerializable)

### Input

`Input` = `any`

## Methods

### deserialize()

```ts
deserialize(message, defaultDeserialize): Input;
```

### Parameters

#### message

`Msg`

#### defaultDeserialize

(`msg`) => `Input`

### Returns

`Input`

***

### serialize()

```ts
serialize(input, defaultSerialize): Msg;
```

### Parameters

#### input

`Input`

#### defaultSerialize

(`inp`) => `Msg`

### Returns

`Msg`

    ### <a id="TransferDescriptor"></a>TransferDescriptor

[**@xylabs/threads**](#../../README)

***

## Type Parameters

### T

`T` = `any`

## Properties

### \[$transferable\]

```ts
[$transferable]: true;
```

***

### send

```ts
send: T;
```

***

### transferables

```ts
transferables: Transferable[];
```

  ### namespaces

    ### Pool

      ### type-aliases

        ### <a id="Event"></a>Event

[**@xylabs/threads**](#../../../../README)

***

```ts
type Event<ThreadType> = PoolEvent<ThreadType>;
```

## Type Parameters

### ThreadType

`ThreadType` *extends* [`Thread`](#../../../type-aliases/Thread) = `any`

        ### <a id="EventType"></a>EventType

[**@xylabs/threads**](#../../../../README)

***

```ts
type EventType = PoolEventType;
```

  ### type-aliases

    ### <a id="BlobWorker"></a>BlobWorker

[**@xylabs/threads**](#../../README)

***

```ts
type BlobWorker = typeof BlobWorkerClass;
```

    ### <a id="ExposedAs"></a>ExposedAs

[**@xylabs/threads**](#../../README)

***

```ts
type ExposedAs<Exposed> = Exposed extends ArbitraryWorkerInterface ? ArbitraryThreadType : Exposed extends WorkerFunction ? FunctionThread<Parameters<Exposed>, StripAsync<ReturnType<Exposed>>> : Exposed extends WorkerModule<any> ? ModuleThread<Exposed> : never;
```

## Type Parameters

### Exposed

`Exposed` *extends* `WorkerFunction` \| `WorkerModule`\<`any`\>

    ### <a id="FunctionThread"></a>FunctionThread

[**@xylabs/threads**](#../../README)

***

```ts
type FunctionThread<Args, ReturnType> = ProxyableFunction<Args, ReturnType> & PrivateThreadProps;
```

## Type Parameters

### Args

`Args` *extends* `any`[] = `any`[]

### ReturnType

`ReturnType` = `any`

    ### <a id="JsonSerializable"></a>JsonSerializable

[**@xylabs/threads**](#../../README)

***

```ts
type JsonSerializable = 
  | JsonSerializablePrimitive
  | JsonSerializablePrimitive[]
  | JsonSerializableObject
  | JsonSerializableObject[];
```

    ### <a id="ModuleThread"></a>ModuleThread

[**@xylabs/threads**](#../../README)

***

```ts
type ModuleThread<Methods> = ModuleProxy<Methods> & PrivateThreadProps;
```

## Type Parameters

### Methods

`Methods` *extends* `ModuleMethods` = `any`

    ### <a id="Thread"></a>Thread

[**@xylabs/threads**](#../../README)

***

```ts
type Thread = ThreadType;
```

    ### <a id="Worker"></a>Worker

[**@xylabs/threads**](#../../README)

***

```ts
type Worker = WorkerType;
```

  ### variables

    ### <a id="BlobWorker"></a>BlobWorker

[**@xylabs/threads**](#../../README)

***

```ts
BlobWorker: typeof BlobWorker;
```

Separate class to spawn workers from source code blobs or strings.

    ### <a id="DefaultSerializer"></a>DefaultSerializer

[**@xylabs/threads**](#../../README)

***

```ts
const DefaultSerializer: Serializer<JsonSerializable>;
```

    ### <a id="Pool"></a>Pool

[**@xylabs/threads**](#../../README)

***

```ts
Pool: <ThreadType>(spawnWorker, optionsOrSize?) => WorkerPool<ThreadType> & object;
```

Thread pool constructor. Creates a new pool and spawns its worker threads.

## Type declaration

### EventType

```ts
EventType: typeof PoolEventType;
```

    ### <a id="Thread"></a>Thread

[**@xylabs/threads**](#../../README)

***

```ts
Thread: object;
```

Thread utility functions. Use them to manage or inspect a `spawn()`-ed thread.

## Type declaration

### errors()

```ts
errors<ThreadT>(thread): Observable<Error>;
```

Return an observable that can be used to subscribe to all errors happening in the thread.

### Type Parameters

#### ThreadT

`ThreadT` *extends* `Thread`

### Parameters

#### thread

`ThreadT`

### Returns

`Observable`\<`Error`\>

### events()

```ts
events<ThreadT>(thread): Observable<WorkerEvent>;
```

Return an observable that can be used to subscribe to internal events happening in the thread. Useful for debugging.

### Type Parameters

#### ThreadT

`ThreadT` *extends* `Thread`

### Parameters

#### thread

`ThreadT`

### Returns

`Observable`\<`WorkerEvent`\>

### terminate()

```ts
terminate<ThreadT>(thread): Promise<void>;
```

Terminate a thread. Remember to terminate every thread when you are done using it.

### Type Parameters

#### ThreadT

`ThreadT` *extends* `Thread`

### Parameters

#### thread

`ThreadT`

### Returns

`Promise`\<`void`\>

    ### <a id="Worker"></a>Worker

[**@xylabs/threads**](#../../README)

***

```ts
Worker: typeof WorkerImplementation;
```

Worker implementation. Either web worker or a node.js Worker class.

### index-node

  ### functions

    ### <a id="isWorkerRuntime"></a>isWorkerRuntime

[**@xylabs/threads**](#../../README)

***

```ts
function isWorkerRuntime(): boolean;
```

## Returns

`boolean`

  ### type-aliases

    ### <a id="BlobWorker"></a>BlobWorker

[**@xylabs/threads**](#../../README)

***

```ts
type BlobWorker = typeof BlobWorkerClass;
```

    ### <a id="Worker"></a>Worker

[**@xylabs/threads**](#../../README)

***

```ts
type Worker = WorkerType;
```

  ### variables

    ### <a id="BlobWorker"></a>BlobWorker

[**@xylabs/threads**](#../../README)

***

```ts
BlobWorker: typeof BlobWorker;
```

Separate class to spawn workers from source code blobs or strings.

    ### <a id="Worker"></a>Worker

[**@xylabs/threads**](#../../README)

***

```ts
Worker: typeof WorkerImplementation;
```

Worker implementation. Either web worker or a node.js Worker class.


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
[npm-badge]: https://img.shields.io/npm/v/@xylabs/threads.svg
[npm-link]: https://www.npmjs.com/package/@xylabs/threads
[codacy-badge]: https://app.codacy.com/project/badge/Grade/c8e15e14f37741c18cfb47ac7245c698
[codacy-link]: https://www.codacy.com/gh/xylabs/sdk-js/dashboard?utm_source=github.com&utm_medium=referral&utm_content=xylabs/sdk-js&utm_campaign=Badge_Grade
[codeclimate-badge]: https://api.codeclimate.com/v1/badges/c5eb068f806f0b047ea7/maintainability
[codeclimate-link]: https://codeclimate.com/github/xylabs/sdk-js/maintainability
[snyk-badge]: https://snyk.io/test/github/xylabs/sdk-js/badge.svg?targetFile=package.json
[snyk-link]: https://snyk.io/test/github/xylabs/sdk-js?targetFile=package.json

[npm-downloads-badge]: https://img.shields.io/npm/dw/@xylabs/threads
[npm-license-badge]: https://img.shields.io/npm/l/@xylabs/threads

[jsdelivr-badge]: https://data.jsdelivr.com/v1/package/npm/@xylabs/threads/badge
[jsdelivr-link]: https://www.jsdelivr.com/package/npm/@xylabs/threads

[socket-badge]: https://socket.dev/api/badge/npm/package/@xylabs/threads
[socket-link]: https://socket.dev/npm/package/@xylabs/threads