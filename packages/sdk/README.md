# @xylabs/sdk-js

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

**@xylabs/sdk-js**

***

## Classes

| Class | Description |
| ------ | ------ |
| [ApiClient](#classes/ApiClient) | Abstract base class for API clients that provides stage and token configuration. |
| [ApiEndpoint](#classes/ApiEndpoint) | Generic REST API endpoint wrapper that supports fetching and inserting typed data. |
| [~~AxiosJson~~](#classes/AxiosJson) | - |
| [Base](#classes/Base) | Abstract base class providing logging, telemetry, and global instance tracking with WeakRef-based GC. |
| [UniqueBase](#classes/UniqueBase) | Base class that registers itself as globally unique, preventing duplicate module instances. |
| [AbstractCreatable](#classes/AbstractCreatable) | Base class for objects that follow an asynchronous creation and lifecycle pattern. Instances must be created via the static `create` method rather than direct construction. Provides start/stop lifecycle management with status tracking and telemetry support. |
| [AbstractCreatableWithFactory](#classes/AbstractCreatableWithFactory) | Extends AbstractCreatable with a static `factory` method for creating pre-configured CreatableFactory instances. |
| [Factory](#classes/Factory) | A concrete factory that wraps a Creatable class with default parameters and labels. Instances are created by merging caller-provided params over the factory defaults. |
| [EthAddressWrapper](#classes/EthAddressWrapper) | Wrapper around an Ethereum address providing parsing, formatting, validation, and checksum support. |
| [BaseEmitter](#classes/BaseEmitter) | Base class that combines the Base utility class with typed event emission capabilities. Delegates all event operations to an internal Events instance. |
| [Events](#classes/Events) | Core typed event emitter implementation supporting named events, wildcard listeners, serial and concurrent emission, listener filtering, and debug logging. |
| [ForgetPromise](#classes/ForgetPromise) | Node.js extension of ForgetPromise that can terminate the process on exceptions or timeouts. |
| [ConsoleLogger](#classes/ConsoleLogger) | A LevelLogger that delegates to the global `console` object. |
| [IdLogger](#classes/IdLogger) | A logger wrapper that prefixes every log message with a bracketed identifier. Useful for distinguishing log output from different components or instances. |
| [LevelLogger](#classes/LevelLogger) | A logger that filters messages based on a configured log level. Methods for levels above the configured threshold return a no-op function. |
| [SilentLogger](#classes/SilentLogger) | A logger that does not log anything. This is useful when you want to disable logging like when running unit tests or in silent mode. It implements the `Logger` interface but all methods are no-op functions. |
| [IsObjectFactory](#classes/IsObjectFactory) | Factory class for creating type-guard functions that validate objects against a given shape and optional additional checks. |
| [ObjectWrapper](#classes/ObjectWrapper) | Abstract base class that wraps an object and provides typed access to it. |
| [ValidatorBase](#classes/ValidatorBase) | Abstract base class for validators that wraps a partial object and provides a validation method. |
| [PromiseEx](#classes/PromiseEx) | An extended Promise that carries an optional attached value and supports cancellation. The value can be inspected via the `then` or `value` methods to conditionally cancel. |
| [XyConsoleSpanExporter](#classes/XyConsoleSpanExporter) | A console span exporter that formats spans with color-coded durations using chalk. Spans are filtered by a configurable log level based on their duration. |

## Interfaces

| Interface | Description |
| ------ | ------ |
| [ApiConfig](#interfaces/ApiConfig) | Configuration for connecting to an API, including domain, authentication, and user identification. |
| [CreatableFactory](#interfaces/CreatableFactory) | A factory interface for creating instances of a Creatable with pre-configured parameters. Unlike the full Creatable, this only exposes the `create` method. |
| [Creatable](#interfaces/Creatable) | Static interface for classes that support asynchronous creation. Provides the `create`, `createHandler`, and `paramsHandler` static methods used to construct instances through the creatable lifecycle. |
| [CreatableWithFactory](#interfaces/CreatableWithFactory) | Extends Creatable with a `factory` method that produces pre-configured CreatableFactory instances. |
| [CreatableInstance](#interfaces/CreatableInstance) | Represents a created instance with a managed lifecycle (start/stop) and event emission. |
| [RequiredCreatableParams](#interfaces/RequiredCreatableParams) | The minimum required parameters for constructing a creatable. |
| [CreatableParams](#interfaces/CreatableParams) | Parameters for creating a creatable instance, combining required params with emitter params. |
| [CreatableStatusReporter](#interfaces/CreatableStatusReporter) | Reports status changes for a creatable, supporting progress tracking and error reporting. |
| [Labels](#interfaces/Labels) | Object used to represent labels identifying a resource. |
| [WithLabels](#interfaces/WithLabels) | Interface for objects that have labels. |
| [WithOptionalLabels](#interfaces/WithOptionalLabels) | Interface for objects that have labels. |
| [BaseEmitterParamsFields](#interfaces/BaseEmitterParamsFields) | Fields specific to BaseEmitter configuration parameters. |
| [EventEmitter](#interfaces/EventEmitter) | Interface for a typed event emitter that supports subscribing, unsubscribing, and emitting events. |
| [ForgetNodeConfig](#interfaces/ForgetNodeConfig) | Node.js-specific forget configuration that extends ForgetConfig with process termination options. |
| [HexConfig](#interfaces/HexConfig) | Configuration of validation and output format |
| [Logger](#interfaces/Logger) | Interface to handle overlap between Winston & `console` with as much congruency as possible. |
| [ObjectTypeConfig](#interfaces/ObjectTypeConfig) | Configuration options for object type checking. |
| [Validator](#interfaces/Validator) | Interface for validating objects and returning any errors found. |
| [TypeCheckConfig](#interfaces/TypeCheckConfig) | Configuration options for type check functions, with optional logging. |
| [TypeCheckRequiredConfig](#interfaces/TypeCheckRequiredConfig) | Type check configuration that marks the value as required, causing assertions on failure. |
| [TypeCheckOptionalConfig](#interfaces/TypeCheckOptionalConfig) | Type check configuration that marks the value as optional, returning undefined on failure. |
| [PromiseType](#interfaces/PromiseType) | An interface representing any thenable (promise-like) object. |
| [RetryConfig](#interfaces/RetryConfig) | Configuration for retry behavior. |
| [RetryConfigWithComplete](#interfaces/RetryConfigWithComplete) | Retry configuration extended with a custom completion check. |
| [ReadonlyKeyValueStore](#interfaces/ReadonlyKeyValueStore) | A readonly storage device. |
| [KeyValueStore](#interfaces/KeyValueStore) | A read/write storage device. |
| [SpanConfig](#interfaces/SpanConfig) | Configuration options for span creation and execution. |
| [ZodFactoryConfigObject](#interfaces/ZodFactoryConfigObject) | Configuration object for zod factory functions, providing a name for error messages. |

## Type Aliases

| Type Alias | Description |
| ------ | ------ |
| [ApiStage](#type-aliases/ApiStage) | A valid API stage value ('prod', 'beta', or 'local'). |
| [BaseClassName](#type-aliases/BaseClassName) | Branded string type representing a class name used for global instance tracking. |
| [BaseParamsFields](#type-aliases/BaseParamsFields) | Common parameter fields available to all Base instances (logger, meter, tracer). |
| [BaseParams](#type-aliases/BaseParams) | Parameters for constructing a Base instance, combining BaseParamsFields with optional additional params. |
| [CreatableName](#type-aliases/CreatableName) | A branded string type used as the name identifier for creatables. |
| [StandardCreatableStatus](#type-aliases/StandardCreatableStatus) | The standard lifecycle statuses a creatable can transition through. |
| [CreatableStatus](#type-aliases/CreatableStatus) | A creatable's status, optionally extended with additional custom status values. |
| [Enum](#type-aliases/Enum) | A utility type that, given a `Record<string, unknown>`, returns a readonly version of that record. This results in a type where all properties of `T` are readonly. |
| [EnumKey](#type-aliases/EnumKey) | A utility type that, given an `Enum` object, returns the union of its keys. |
| [EnumValue](#type-aliases/EnumValue) | A utility type that, given an `Enum` object, returns the union of its values. |
| [AssertConfig](#type-aliases/AssertConfig) | Configuration for assertion behavior: a static message string, a boolean toggle, or a callback. |
| [BaseEmitterParams](#type-aliases/BaseEmitterParams) | Parameters type for configuring a BaseEmitter instance. |
| [DebugLogger](#type-aliases/DebugLogger) | Emittery can collect and log debug information. |
| [EventListenerInfo](#type-aliases/EventListenerInfo) | Information about a registered event listener, including an optional filter for selective invocation. |
| [DebugOptions](#type-aliases/DebugOptions) | Configure debug options of an instance. |
| [MetaEventData](#type-aliases/MetaEventData) | Data shape for internal meta events that fire when listeners are added or removed. |
| [EventsParams](#type-aliases/EventsParams) | Parameters for constructing an Events instance, with optional debug configuration. |
| [EventName](#type-aliases/EventName) | A valid event name, which can be any property key (string, number, or symbol). |
| [EventArgs](#type-aliases/EventArgs) | The allowed types for event argument payloads. |
| [EventData](#type-aliases/EventData) | A mapping of event names to their corresponding event argument types. |
| [EventUnsubscribeFunction](#type-aliases/EventUnsubscribeFunction) | A function returned by event subscription methods that unsubscribes the listener when called. |
| [EventAnyListener](#type-aliases/EventAnyListener) | A listener that receives all events regardless of name. |
| [EventListener](#type-aliases/EventListener) | A listener for a specific event type. |
| [AddressTransformZodType](#type-aliases/AddressTransformZodType) | The output type of AddressTransformZod after parsing and transformation. |
| [AddressValidationZodType](#type-aliases/AddressValidationZodType) | The output type of AddressValidationZod after parsing. |
| [Address](#type-aliases/Address) | A validated 20-byte address string type, inferred from the AddressZod schema. |
| [EthAddress](#type-aliases/EthAddress) | Branded type representing a validated Ethereum address with 0x prefix. |
| [HashBitLength](#type-aliases/HashBitLength) | Valid bit lengths for hash values. |
| [BrandedHash](#type-aliases/BrandedHash) | Branded type representing a validated hash hex string. |
| [Hash](#type-aliases/Hash) | A validated hash string type, inferred from the HashZod schema. |
| [BrandedHex](#type-aliases/BrandedHex) | Branded type representing a validated lowercase hex string. |
| [Hex](#type-aliases/Hex) | A validated hex string type, inferred from the HexZod schema. |
| [LogFunction](#type-aliases/LogFunction) | A generic logging function that accepts any number of arguments. |
| [LogLevelKey](#type-aliases/LogLevelKey) | String key for a log level (e.g. 'error', 'warn', 'info'). |
| [LogVerbosity](#type-aliases/LogVerbosity) | Alias for LogLevelKey, representing the verbosity setting as a string. |
| [LogLevelValue](#type-aliases/LogLevelValue) | Numeric value of a log level (1 through 6). |
| [JsonValue](#type-aliases/JsonValue) | A recursive JSON value: string, number, boolean, null, array, or object. |
| [JsonObject](#type-aliases/JsonObject) | A JSON object with string keys and JSON values. |
| [JsonArray](#type-aliases/JsonArray) | A JSON array containing JSON values. |
| [OmitStartsWith](#type-aliases/OmitStartsWith) | Omits the keys of T that start with the given prefix. |
| [DeepOmitStartsWith](#type-aliases/DeepOmitStartsWith) | Recursively omits keys that start with the given prefix, including in nested objects and arrays. |
| [DeepRestrictToStringKeys](#type-aliases/DeepRestrictToStringKeys) | Recursively removes all non-string keys from an object type, including in nested objects and arrays. |
| [DeepRestrictToJson](#type-aliases/DeepRestrictToJson) | Recursively restricts an object type to only JSON-compatible values, excluding non-serializable types. |
| [Optional](#type-aliases/Optional) | Makes the specified fields of T optional while keeping the rest required. |
| [Override](#type-aliases/Override) | Overrides properties of T1 with those from T2. |
| [~~PartialRecord~~](#type-aliases/PartialRecord) | - |
| [PickStartsWith](#type-aliases/PickStartsWith) | Picks only the keys of T that start with the given prefix. |
| [DeepPickStartsWith](#type-aliases/DeepPickStartsWith) | Recursively picks only the keys that start with the given prefix, including in nested objects and arrays. |
| [Simplify](#type-aliases/Simplify) | Flattens an intersection or complex mapped type into a single object type for better readability. |
| [StringKeyObject](#type-aliases/StringKeyObject) | An object type with string keys and values of type T. |
| [WithAdditional](#type-aliases/WithAdditional) | Intersects T with TAdditional if TAdditional is an object, otherwise returns T unchanged. |
| [OmitByPredicate](#type-aliases/OmitByPredicate) | A predicate function used to determine which properties to omit from an object. |
| [PickByPredicate](#type-aliases/PickByPredicate) | A predicate function used to determine which properties to pick from an object. |
| [AnyObject](#type-aliases/AnyObject) | Any object, which means that it does not enforce the set of fields that it has. Extending from AnyObject will result in a type that includes the universal set of field names |
| [AsTypeFunction](#type-aliases/AsTypeFunction) | A type-narrowing function that attempts to cast a value to T, with optional assertion and configuration overloads. |
| [AsOptionalTypeFunction](#type-aliases/AsOptionalTypeFunction) | A simplified type-narrowing function that returns T or undefined, without assertion support. |
| [Compare](#type-aliases/Compare) | A comparator function that returns a negative number if a < b, zero if a == b, and a positive number if a > b. |
| [EmptyObject](#type-aliases/EmptyObject) | An empty object, which means that it does enforce the set of field names, defaulting to an empty set until extended from, which then adds only those additional fields |
| [StringOrAlertFunction](#type-aliases/StringOrAlertFunction) | A string message or function that produces an assertion error message for a failed type check. |
| [TypeCheck](#type-aliases/TypeCheck) | A type guard function that checks whether a value conforms to type T, with optional configuration. |
| [Profiler](#type-aliases/Profiler) | A record of named timing entries, where each key maps to an array of timestamps. |
| [PromiseExSubFunc](#type-aliases/PromiseExSubFunc) | A resolve/reject callback used within PromiseEx. |
| [PromiseExFunc](#type-aliases/PromiseExFunc) | The executor function passed to the PromiseEx constructor. |
| [PromiseExValueFunc](#type-aliases/PromiseExValueFunc) | A callback that inspects the attached value and returns whether to cancel the promise. |
| [Promisable](#type-aliases/Promisable) | A value that may be a Promise, PromiseEx, or a plain synchronous value. |
| [PromisableArray](#type-aliases/PromisableArray) | A Promisable that resolves to an array. |
| [OptionalPromisable](#type-aliases/OptionalPromisable) | A Promisable that may resolve to undefined. |
| [OptionalPromisableArray](#type-aliases/OptionalPromisableArray) | A Promisable array where elements may be undefined. |
| [NullablePromisable](#type-aliases/NullablePromisable) | A Promisable that may resolve to null. |
| [NullablePromisableArray](#type-aliases/NullablePromisableArray) | A Promisable array where elements may be null. |
| [AsyncMutex](#type-aliases/AsyncMutex) | - |
| [AnyNonPromise](#type-aliases/AnyNonPromise) | Any non-promise typed value, excluding thenables. |
| [Brand](#type-aliases/Brand) | Creates a branded type by intersecting base type T with brand type B, enabling nominal typing in TypeScript. |
| [IdentityFunction](#type-aliases/IdentityFunction) | A type guard function that narrows an unknown value to type T. |
| [FieldType](#type-aliases/FieldType) | Union of string literals representing the possible types of an object field. |
| [ObjectTypeShape](#type-aliases/ObjectTypeShape) | Describes the expected shape of an object by mapping each key to its expected field type. |
| [TypeOfTypes](#type-aliases/TypeOfTypes) | Union of string literals representing the possible results of the extended `typeOf` function. |
| [TypedValue](#type-aliases/TypedValue) | A value that can appear in a typed object tree (primitives, objects, arrays, functions, and symbols). |
| [TypedKey](#type-aliases/TypedKey) | A valid key for a typed object. Defaults to string | number | symbol unless narrowed by T. |
| [TypedObject](#type-aliases/TypedObject) | An object whose keys are TypedKey and whose values are TypedValue. |
| [TypedArray](#type-aliases/TypedArray) | An array of TypedValue elements. |
| [AnyFunction](#type-aliases/AnyFunction) | A function type that accepts any arguments and returns unknown. |
| [RecordKey](#type-aliases/RecordKey) | A union of valid object key types. |
| [ZodFactoryConfig](#type-aliases/ZodFactoryConfig) | Configuration for zod factory assertion behavior, either an AssertConfig or a named config object. |
| [AllZodFactories](#type-aliases/AllZodFactories) | - |

## Variables

| Variable | Description |
| ------ | ------ |
| [ApiStage](#variables/ApiStage) | Deployment stage identifiers for API environments. |
| [getApiStage](#variables/getApiStage) | Determines the API stage based on the hostname. |
| [containsAll](#variables/containsAll) | Checks whether the source array contains every element in the target array. |
| [distinct](#variables/distinct) | Array filter callback that removes duplicate values, with correct NaN handling. Use with `array.filter(distinct)`. |
| [filterAs](#variables/filterAs) | Maps each element using the predicate and filters out nullish results. |
| [filterAsync](#variables/filterAsync) | Returns the elements of an array that meet the condition specified in a callback function. |
| [findAs](#variables/findAs) | Maps each element using the predicate and returns the first non-nullish result. |
| [findLastAs](#variables/findLastAs) | Maps each element using the predicate and returns the last non-nullish result. |
| [flatten](#variables/flatten) | Concatenates two values or arrays into a single flat array, filtering out nullish entries. |
| [uniq](#variables/uniq) | Returns a new array with duplicate values removed. |
| [uniqBy](#variables/uniqBy) | Returns a new array with duplicates removed, using a key function for comparison. |
| [equalArrayBuffers](#variables/equalArrayBuffers) | Compares two ArrayBuffers for byte-level equality. |
| [axiosJson](#variables/axiosJson) | - |
| [~~axios~~](#variables/axios) | - |
| [disableGloballyUnique](#variables/disableGloballyUnique) | Disables global uniqueness checks, allowing duplicate registrations without throwing. |
| [globallyUnique](#variables/globallyUnique) | Registers a value as globally unique under the given name and domain. Throws if a different value is already registered under the same key. |
| [Buffer](#variables/Buffer) | - |
| [bufferPolyfill](#variables/bufferPolyfill) | - |
| [hasAllLabels](#variables/hasAllLabels) | Returns true if the source object has all the labels from the required set |
| [fromFixedPoint](#variables/fromFixedPoint) | Converts a fixed-point bigint back to a whole-number bigint by dividing out the decimal places. |
| [toDecimalPrecision](#variables/toDecimalPrecision) | Formats a number to the specified number of significant digits, returning a string with minimal trailing zeros. |
| [toFixedPoint](#variables/toFixedPoint) | Converts a bigint or decimal string to a fixed-point bigint representation. |
| [delay](#variables/delay) | Returns a promise that resolves after the specified number of milliseconds. |
| [Enum](#variables/Enum) | Transforms a given record object into a readonly "enum-like" structure while preserving the literal types of its values. This allows you to use the returned object both at runtime (for lookups) and at compile time (for strongly typed values). |
| [assertError](#variables/assertError) | Throws an Error based on the assert configuration when a value fails validation. |
| [handleError](#variables/handleError) | Invokes the handler if the value is an Error, otherwise re-throws it. |
| [handleErrorAsync](#variables/handleErrorAsync) | Async version of handleError. Invokes the async handler if the value is an Error, otherwise re-throws it. |
| [isEthAddressWrapper](#variables/isEthAddressWrapper) | Type guard that checks if the given object is an instance of EthAddressWrapper. |
| [ellipsize](#variables/ellipsize) | Truncates a string to show the first and last `length` characters separated by an ellipsis. |
| [padHex](#variables/padHex) | - |
| [exists](#variables/exists) | Used to type narrow an object which is possibly null or undefined. Works well with functional Array methods. For example: |
| [defaultForgetNodeConfig](#variables/defaultForgetNodeConfig) | Default Node.js forget configuration with termination disabled. |
| [forget](#variables/forget) | Node.js variant of forget that can optionally terminate the process on exceptions or timeouts. |
| [functionName](#variables/functionName) | Returns the name of the calling function by inspecting the stack trace. |
| [HexRegExMinMax](#variables/HexRegExMinMax) | Creates a RegExp matching lowercase hex strings with a byte length in the given range. |
| [HexRegExMinMaxMixedCaseWithPrefix](#variables/HexRegExMinMaxMixedCaseWithPrefix) | Creates a RegExp matching mixed-case hex strings with a 0x prefix and a byte length in the given range. |
| [HexRegEx](#variables/HexRegEx) | Regular expression matching a lowercase hex string without prefix. |
| [HexRegExWithPrefix](#variables/HexRegExWithPrefix) | Regular expression matching a lowercase hex string with a 0x prefix. |
| [AddressTransformZod](#variables/AddressTransformZod) | Zod schema that accepts a string, bigint, or number and transforms it into a validated Address. |
| [AddressValidationZod](#variables/AddressValidationZod) | Zod schema that validates a string is a properly formatted 40-character hex address. |
| [ZERO\_ADDRESS](#variables/ZERO_ADDRESS) | A 160-bit zero address constant. |
| [ADDRESS\_LENGTH](#variables/ADDRESS_LENGTH) | The character length of an address hex string (40 hex characters / 20 bytes). |
| [AddressRegEx](#variables/AddressRegEx) | Regular expression matching a 20-byte (40 hex character) address string. |
| [AddressZod](#variables/AddressZod) | Zod schema that validates and transforms a string into a branded Address type. |
| [isAddress](#variables/isAddress) | Type guard that checks whether a value is a valid 160-bit address. |
| [toAddress](#variables/toAddress) | Converts a value to a 160-bit Address hex string. |
| [EthAddressRegEx](#variables/EthAddressRegEx) | Regular expression matching a 20-byte Ethereum address with 0x prefix (mixed case). |
| [EthAddressToStringZod](#variables/EthAddressToStringZod) | Zod schema that validates a string is a properly formatted Ethereum address. |
| [~~EthAddressToStringSchema~~](#variables/EthAddressToStringSchema) | - |
| [EthAddressFromStringZod](#variables/EthAddressFromStringZod) | Zod schema that validates and transforms a string into an EthAddress type. |
| [~~EthAddressFromStringSchema~~](#variables/EthAddressFromStringSchema) | - |
| [ETH\_ZERO\_ADDRESS](#variables/ETH_ZERO_ADDRESS) | The zero Ethereum address constant (0x followed by 40 zero characters). |
| [toEthAddress](#variables/toEthAddress) | Converts a value to a 0x-prefixed Ethereum address string. |
| [isEthAddress](#variables/isEthAddress) | Type guard that checks whether a value is a valid 0x-prefixed Ethereum address. |
| [EthAddressZod](#variables/EthAddressZod) | Zod schema that validates a string as a properly formatted Ethereum address using regex and type guard. |
| [HASH\_LENGTH](#variables/HASH_LENGTH) | The byte length of a standard hash (32 bytes / 256 bits). |
| [HashRegEx](#variables/HashRegEx) | Regular expression matching a 32-byte (64 hex character) hash string. |
| [ZERO\_HASH](#variables/ZERO_HASH) | A 256-bit zero hash constant. |
| [HashBitLength](#variables/HashBitLength) | Array of all valid hash bit lengths for runtime validation. |
| [isHashBitLength](#variables/isHashBitLength) | Type guard that checks whether a value is a valid hash bit length. |
| [HashZod](#variables/HashZod) | Zod schema that validates and transforms a string into a branded Hash type. |
| [isHash](#variables/isHash) | Type guard that checks whether a value is a valid hash of the specified bit length. |
| [HashToJsonZod](#variables/HashToJsonZod) | Zod schema that transforms a Hash to a plain string for JSON serialization. |
| [JsonToHashZod](#variables/JsonToHashZod) | Zod schema that parses a JSON string into a validated Hash, throwing on invalid input. |
| [hexFrom](#variables/hexFrom) | Takes unknown value and tries our best to convert it to a hex string |
| [hexFromArrayBuffer](#variables/hexFromArrayBuffer) | Convert an ArrayBuffer to a hex string |
| [hexFromBigInt](#variables/hexFromBigInt) | Convert a bigint to a hex string |
| [hexFromHexString](#variables/hexFromHexString) | Normalizes a hex string by stripping an optional 0x prefix, lowercasing, and padding to byte/bit boundaries. |
| [hexFromNumber](#variables/hexFromNumber) | Converts a number to a hex string by converting to BigInt first. |
| [HexZod](#variables/HexZod) | Zod schema that validates and transforms a string into a branded Hex type. |
| [isHex](#variables/isHex) | Type guard that checks whether a value is a valid hex string. |
| [isHexZero](#variables/isHexZero) | Checks whether a hex string represents a zero value. |
| [toHexLegacy](#variables/toHexLegacy) | Converts an ArrayBuffer to a hex string without padding or normalization. |
| [bitsToNibbles](#variables/bitsToNibbles) | Converts a bit count to the equivalent number of hex nibbles (4 bits each). |
| [nibblesToBits](#variables/nibblesToBits) | Converts a nibble count to the equivalent number of bits. |
| [toHex](#variables/toHex) | takes any value and tries our best to convert it to a hex string |
| [BigIntToJsonZod](#variables/BigIntToJsonZod) | Zod schema that transforms a non-negative BigInt into a hex string for JSON serialization. |
| [JsonToBigIntZod](#variables/JsonToBigIntZod) | Zod schema that parses a JSON hex string into a BigInt. |
| [LogLevel](#variables/LogLevel) | Numeric log level values, from least verbose (error=1) to most verbose (trace=6). |
| [NoOpLogFunction](#variables/NoOpLogFunction) | A log function that silently discards all arguments. |
| [getFunctionName](#variables/getFunctionName) | Retrieves the name of the calling function by inspecting the stack trace. |
| [AsObjectFactory](#variables/AsObjectFactory) | Factory for creating type-narrowing functions for TypedObject types. |
| [AsTypeFactory](#variables/AsTypeFactory) | Factory for creating type-narrowing 'as' functions that cast a value to T or return undefined. Supports optional assertion messages and configuration for required/optional behavior. |
| [JsonObjectZod](#variables/JsonObjectZod) | Zod schema for a JSON object with string keys and recursive JSON values. |
| [isJsonValue](#variables/isJsonValue) | Type guard that checks if a value is a valid JSON value. |
| [asJsonValue](#variables/asJsonValue) | Casts a value to JsonValue or returns undefined if it does not conform. |
| [toJsonValue](#variables/toJsonValue) | Parses a value into a JsonValue, throwing if it does not conform. |
| [isJsonArray](#variables/isJsonArray) | Type guard that checks if a value is a valid JSON array. |
| [asJsonArray](#variables/asJsonArray) | Casts a value to JsonArray or returns undefined if it does not conform. |
| [toJsonArray](#variables/toJsonArray) | Parses a value into a JsonArray, throwing if it does not conform. |
| [isJsonObject](#variables/isJsonObject) | Type guard that checks if a value is a valid JSON object. |
| [asJsonObject](#variables/asJsonObject) | Casts a value to JsonObject or returns undefined if it does not conform. |
| [toJsonObject](#variables/toJsonObject) | Parses a value into a JsonObject, throwing if it does not conform. |
| [asAnyObject](#variables/asAnyObject) | Type-narrowing function that casts a value to AnyObject if it is a plain object, or returns undefined. |
| [deepMerge](#variables/deepMerge) | Deeply merges multiple objects into a new object. |
| [omitBy](#variables/omitBy) | Creates a new object excluding properties that satisfy the predicate, with optional recursive depth. |
| [omitByPrefix](#variables/omitByPrefix) | Omits all properties whose keys start with the given prefix, recursively through nested objects. |
| [pickBy](#variables/pickBy) | Creates a new object containing only the properties that satisfy the predicate, with optional recursive depth. |
| [pickByPrefix](#variables/pickByPrefix) | Picks all properties whose keys start with the given prefix, recursively through nested objects. |
| [removeFields](#variables/removeFields) | Returns a shallow copy of the object with the specified fields removed. |
| [toSafeJsonArray](#variables/toSafeJsonArray) | Converts an array to a JSON-safe array, handling circular references and depth limits. |
| [toSafeJsonObject](#variables/toSafeJsonObject) | Converts an object to a JSON-safe object, handling circular references and depth limits. |
| [toSafeJsonValue](#variables/toSafeJsonValue) | Converts an unknown value to a JSON-safe value, replacing circular references with '[Circular]' and non-JSON types with descriptive placeholder strings. |
| [toSafeJsonString](#variables/toSafeJsonString) | Converts a value to a pretty-printed JSON string, safely handling circular references and non-JSON types. |
| [toSafeJson](#variables/toSafeJson) | Converts a value to a JSON-safe representation, handling circular references and non-serializable types. |
| [isBrowser](#variables/isBrowser) | Returns whether the current environment is a browser. Always returns false in Node.js. |
| [isWebworker](#variables/isWebworker) | Returns whether the current environment is a web worker. Always returns false in Node.js. |
| [isNode](#variables/isNode) | Returns whether the current environment is Node.js. Always returns true in this entry point. |
| [createProfiler](#variables/createProfiler) | Creates a new empty profiler instance. |
| [profile](#variables/profile) | Records a timestamp for the given profile name. |
| [profileReport](#variables/profileReport) | Generates a report of elapsed times for each profiled entry. |
| [fulfilled](#variables/fulfilled) | For use with Promise.allSettled to filter only successful results |
| [fulfilledValues](#variables/fulfilledValues) | For use with Promise.allSettled to reduce to only successful result values |
| [rejected](#variables/rejected) | For use with Promise.allSettled to filter only rejected results |
| [retry](#variables/retry) | Retries an async function with exponential backoff until it completes or retries are exhausted. |
| [difference](#variables/difference) | Returns a new set containing elements in `a` that are not in `b`. |
| [intersection](#variables/intersection) | Returns a new set containing only elements present in both `a` and `b`. |
| [union](#variables/union) | Returns a new set containing all elements from both `a` and `b`. |
| [setTimeoutEx](#variables/setTimeoutEx) | Sets a timeout using an optimized internal timer that coalesces multiple timeouts into a single native timer. |
| [clearTimeoutEx](#variables/clearTimeoutEx) | Cancels a timeout previously created with setTimeoutEx. |
| [isTypedKey](#variables/isTypedKey) | Type guard that checks whether a value is a valid TypedKey (string, bigint, number, or symbol). |
| [isTypedValue](#variables/isTypedValue) | Type guard that checks whether a value is a valid TypedValue. |
| [isTypedArray](#variables/isTypedArray) | Type guard that checks whether a value is a TypedArray (an array where every element is a TypedValue). |
| [isValidTypedFieldPair](#variables/isValidTypedFieldPair) | Type guard that checks whether a key-value pair has a valid TypedKey and TypedValue. |
| [isTypedObject](#variables/isTypedObject) | Type guard that checks whether a value is a TypedObject (an object with TypedKey keys and TypedValue values). |
| [ifDefined](#variables/ifDefined) | Invokes the callback only if the value is neither null nor undefined. |
| [ifTypeOf](#variables/ifTypeOf) | Invokes the callback if the value matches the specified type, with an optional additional predicate. |
| [isType](#variables/isType) | Checks whether a value matches the expected field type, with correct handling for arrays and nulls. |
| [typeOf](#variables/typeOf) | Extended typeof that distinguishes arrays from objects (unlike native `typeof`). |
| [validateType](#variables/validateType) | Validates that a value matches the expected type, returning the value and any errors. |
| [URL](#variables/URL) | Node.js-specific URL class, imported from the `node:url` module. |
| [isLocalhost](#variables/isLocalhost) | Checks whether a hostname refers to the local machine (localhost, 127.0.0.1, ::1, or *.localhost). |

## Functions

| Function | Description |
| ------ | ------ |
| [isArrayBuffer](#functions/isArrayBuffer) | Type guard that checks if a value is an ArrayBuffer instance. |
| [isArrayBufferLike](#functions/isArrayBufferLike) | Type guard that checks if a value conforms to the ArrayBufferLike interface (has byteLength and slice). |
| [toArrayBuffer](#functions/toArrayBuffer) | Converts a string, bigint, or ArrayBufferLike to an ArrayBufferLike, with optional zero-padding. |
| [toUint8Array](#functions/toUint8Array) | Converts a string, bigint, or ArrayBufferLike to a Uint8Array, with optional zero-padding. |
| [assertDefinedEx](#functions/assertDefinedEx) | Asserts that a value is defined (not undefined) and returns the value. Throws an error if the value is undefined. |
| [assertEx](#functions/assertEx) | Asserts that an expression is truthy and returns the value. Throws an error if the expression is falsy. |
| [axiosJsonConfig](#functions/axiosJsonConfig) | Creates an Axios config preconfigured for JSON requests with optional gzip compression. Request bodies exceeding `compressLength` (default 1024 bytes) are automatically gzip-compressed. |
| [creatable](#functions/creatable) | Class annotation to be used to decorate Modules which support an asynchronous creation pattern |
| [creatableFactory](#functions/creatableFactory) | Class annotation to be used to decorate Modules which support an asynchronous creation factory pattern |
| [asAddress](#functions/asAddress) | Attempts to coerce a value into an Address type, returning undefined or throwing based on the assert config. |
| [asAddressV2](#functions/asAddressV2) | - |
| [isAddressV2](#functions/isAddressV2) | - |
| [toAddressV2](#functions/toAddressV2) | - |
| [asEthAddress](#functions/asEthAddress) | Attempts to coerce a value into an EthAddress, returning undefined or throwing based on the assert config. |
| [asHash](#functions/asHash) | Attempts to coerce a value into a Hash type, returning undefined or throwing based on the assert config. |
| [asHex](#functions/asHex) | Attempts to coerce a value into a Hex type, returning undefined or throwing based on the assert config. |
| [hexToBigInt](#functions/hexToBigInt) | Converts a Hex string to a BigInt. |
| [createDeepMerge](#functions/createDeepMerge) | Creates a deep merge function with the specified options. |
| [toPromise](#functions/toPromise) | Wraps a value in a Promise if it is not already one. |
| [staticImplements](#functions/staticImplements) | Annotation to decorate classes which implement static methods |
| [cloneContextWithoutSpan](#functions/cloneContextWithoutSpan) | Creates a new OpenTelemetry context that preserves baggage and custom keys but has no active span. |
| [span](#functions/span) | Executes a synchronous function within an OpenTelemetry span, recording status and exceptions. |
| [spanRoot](#functions/spanRoot) | Executes a synchronous function within a new root span that has no parent, even if a span is already active. |
| [spanAsync](#functions/spanAsync) | Executes an async function within an OpenTelemetry span, with optional time budget monitoring. |
| [spanRootAsync](#functions/spanRootAsync) | Executes an async function within a new root span (no parent), with optional time budget monitoring. |
| [timeBudget](#functions/timeBudget) | Executes an async function and logs a warning if it exceeds the given time budget. |
| [spanDurationInMillis](#functions/spanDurationInMillis) | Calculates the duration of a span in milliseconds from its high-resolution time tuple. |
| [isUndefined](#functions/isUndefined) | Type guard that checks whether a value is undefined. |
| [isDefined](#functions/isDefined) | Type guard that checks whether a value is not undefined. |
| [isNull](#functions/isNull) | Type guard that checks whether a value is null. |
| [isDefinedNotNull](#functions/isDefinedNotNull) | Type guard that checks whether a value is neither undefined nor null. |
| [isUndefinedOrNull](#functions/isUndefinedOrNull) | Type guard that checks whether a value is undefined or null. |
| [isBigInt](#functions/isBigInt) | Type guard that checks whether a value is a bigint. |
| [isString](#functions/isString) | Type guard that checks whether a value is a string. |
| [isNumber](#functions/isNumber) | Type guard that checks whether a value is a number. |
| [isObject](#functions/isObject) | Type guard that checks whether a value is a plain object (not null and not an array). |
| [isArray](#functions/isArray) | Type guard that checks whether a value is an array. |
| [isFunction](#functions/isFunction) | Type guard that checks whether a value is a function. |
| [isSymbol](#functions/isSymbol) | Type guard that checks whether a value is a symbol. |
| [isEmptyObject](#functions/isEmptyObject) | Type guard that checks whether a value is an object with no own keys. |
| [isEmptyString](#functions/isEmptyString) | Type guard that checks whether a value is an empty string. |
| [isEmptyArray](#functions/isEmptyArray) | Type guard that checks whether a value is an empty array. |
| [isPopulatedArray](#functions/isPopulatedArray) | Type guard that checks whether a value is a non-empty array. |
| [isEmpty](#functions/isEmpty) | Type guard that checks whether a value is empty (empty string, empty array, or empty object). |
| [isFalsy](#functions/isFalsy) | Type guard that checks whether a value is falsy (0, null, undefined, false, '', or 0n). |
| [isTruthy](#functions/isTruthy) | Type guard that checks whether a value is truthy (not 0, null, undefined, false, '', or 0n). |
| [isBoolean](#functions/isBoolean) | Type guard that checks whether a value is a boolean. |
| [isDateString](#functions/isDateString) | Type guard that checks whether a value is a string that can be parsed as a valid date. |
| [isDate](#functions/isDate) | Type guard that checks whether a value is a Date instance. |
| [isRegExp](#functions/isRegExp) | Type guard that checks whether a value is a RegExp instance. |
| [isError](#functions/isError) | Type guard that checks whether a value is an Error instance. |
| [isPromise](#functions/isPromise) | Type guard that checks whether a value is a Promise instance. |
| [isPromiseLike](#functions/isPromiseLike) | Type guard that checks whether a value is promise-like (has a `then` method). |
| [isMap](#functions/isMap) | Type guard that checks whether a value is a Map instance. |
| [isArrayBufferView](#functions/isArrayBufferView) | Type guard that checks whether a value is an ArrayBufferView (e.g., TypedArray or DataView). |
| [isSet](#functions/isSet) | Type guard that checks whether a value is a Set instance. |
| [isWeakMap](#functions/isWeakMap) | Type guard that checks whether a value is a WeakMap instance. |
| [isWeakSet](#functions/isWeakSet) | Type guard that checks whether a value is a WeakSet instance. |
| [isDataView](#functions/isDataView) | Type guard that checks whether a value is a DataView instance. |
| [isBlob](#functions/isBlob) | Type guard that checks whether a value is a Blob instance. |
| [isFile](#functions/isFile) | Type guard that checks whether a value is a File instance. |
| [zodAllFactory](#functions/zodAllFactory) | Creates a bundle of `is`, `as`, and `to` factory functions for a given zod schema. |
| [zodAsAsyncFactory](#functions/zodAsAsyncFactory) | Creates an async function that validates a value against a zod schema and returns it with a narrowed type. Uses `safeParseAsync` for schemas with async refinements. When called without an assert config, returns undefined on failure. |
| [zodAsFactory](#functions/zodAsFactory) | Creates a function that validates a value against a zod schema and returns it with a narrowed type. When called without an assert config, returns undefined on failure. When called with an assert config, throws on failure. |
| [zodIsFactory](#functions/zodIsFactory) | Creates a type guard function that checks if a value matches a zod schema. |
| [zodToAsyncFactory](#functions/zodToAsyncFactory) | Creates an async function that converts a value to the zod schema type, delegating to `zodAsAsyncFactory` internally. Provides overloads for optional assertion: without assert config resolves to undefined on failure, with assert config throws on failure. |
| [zodToFactory](#functions/zodToFactory) | Creates a function that converts a value to the zod schema type, delegating to `zodAsFactory` internally. Provides overloads for optional assertion: without assert config returns undefined on failure, with assert config throws on failure. |

### classes

  ### <a id="AbstractCreatable"></a>AbstractCreatable

[**@xylabs/sdk-js**](#../README)

***

Base class for objects that follow an asynchronous creation and lifecycle pattern.
Instances must be created via the static `create` method rather than direct construction.
Provides start/stop lifecycle management with status tracking and telemetry support.

## Extends

- [`BaseEmitter`](#BaseEmitter)\<`Partial`\<`TParams` & [`RequiredCreatableParams`](#../interfaces/RequiredCreatableParams)\>, `TEventData`\>

## Extended by

- [`AbstractCreatableWithFactory`](#AbstractCreatableWithFactory)

## Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `TParams` *extends* [`CreatableParams`](#../interfaces/CreatableParams) | [`CreatableParams`](#../interfaces/CreatableParams) |
| `TEventData` *extends* [`EventData`](#../type-aliases/EventData) | [`EventData`](#../type-aliases/EventData) |

## Constructors

### Constructor

```ts
new AbstractCreatable<TParams, TEventData>(key: unknown, params: Partial<TParams & RequiredCreatableParams>): AbstractCreatable<TParams, TEventData>;
```

### Parameters

| Parameter | Type |
| ------ | ------ |
| `key` | `unknown` |
| `params` | `Partial`\<`TParams` & [`RequiredCreatableParams`](#../interfaces/RequiredCreatableParams)\> |

### Returns

`AbstractCreatable`\<`TParams`, `TEventData`\>

### Overrides

[`BaseEmitter`](#BaseEmitter).[`constructor`](BaseEmitter.md#constructor)

## Properties

| Property | Modifier | Type | Description | Inherited from |
| ------ | ------ | ------ | ------ | ------ |
| <a id="defaultlogger"></a> `defaultLogger?` | `static` | [`Logger`](#../interfaces/Logger) | - | [`BaseEmitter`](#BaseEmitter).[`defaultLogger`](BaseEmitter.md#defaultlogger) |
| <a id="globalinstances"></a> `globalInstances` | `readonly` | `Record`\<[`BaseClassName`](#../type-aliases/BaseClassName), `WeakRef`\<[`Base`](#Base)\>[]\> | - | [`BaseEmitter`](#BaseEmitter).[`globalInstances`](BaseEmitter.md#globalinstances) |
| <a id="globalinstancescounthistory"></a> `globalInstancesCountHistory` | `readonly` | `Record`\<[`BaseClassName`](#../type-aliases/BaseClassName), `number`[]\> | - | [`BaseEmitter`](#BaseEmitter).[`globalInstancesCountHistory`](BaseEmitter.md#globalinstancescounthistory) |
| <a id="defaultlogger-1"></a> `defaultLogger?` | `public` | [`Logger`](#../interfaces/Logger) | Optional default logger for this instance. | - |
| <a id="_startpromise"></a> `_startPromise` | `protected` | [`Promisable`](#../type-aliases/Promisable)\<`boolean`\> \| `undefined` | - | - |
| <a id="eventdata"></a> `eventData` | `public` | `TEventData` | Type-level reference to the event data shape for external type queries. | [`BaseEmitter`](#BaseEmitter).[`eventData`](BaseEmitter.md#eventdata) |

## Accessors

### historyInterval

### Get Signature

```ts
get static historyInterval(): number;
```

#### Returns

`number`

### Set Signature

```ts
set static historyInterval(value: number): void;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `number` |

#### Returns

`void`

### Inherited from

[`BaseEmitter`](#BaseEmitter).[`historyInterval`](BaseEmitter.md#historyinterval)

***

### historyTime

### Get Signature

```ts
get static historyTime(): number;
```

#### Returns

`number`

### Set Signature

```ts
set static historyTime(value: number): void;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `number` |

#### Returns

`void`

### Inherited from

[`BaseEmitter`](#BaseEmitter).[`historyTime`](BaseEmitter.md#historytime)

***

### maxGcFrequency

### Get Signature

```ts
get static maxGcFrequency(): number;
```

#### Returns

`number`

### Set Signature

```ts
set static maxGcFrequency(value: number): void;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `number` |

#### Returns

`void`

### Inherited from

[`BaseEmitter`](#BaseEmitter).[`maxGcFrequency`](BaseEmitter.md#maxgcfrequency)

***

### maxHistoryDepth

### Get Signature

```ts
get static maxHistoryDepth(): number;
```

#### Returns

`number`

### Inherited from

[`BaseEmitter`](#BaseEmitter).[`maxHistoryDepth`](BaseEmitter.md#maxhistorydepth)

***

### logger

### Get Signature

```ts
get logger(): Logger | undefined;
```

#### Returns

[`Logger`](#../interfaces/Logger) \| `undefined`

### Inherited from

[`BaseEmitter`](#BaseEmitter).[`logger`](BaseEmitter.md#logger)

***

### meter

### Get Signature

```ts
get meter(): Meter | undefined;
```

#### Returns

`Meter` \| `undefined`

### Inherited from

[`BaseEmitter`](#BaseEmitter).[`meter`](BaseEmitter.md#meter)

***

### tracer

### Get Signature

```ts
get tracer(): Tracer | undefined;
```

#### Returns

`Tracer` \| `undefined`

### Inherited from

[`BaseEmitter`](#BaseEmitter).[`tracer`](BaseEmitter.md#tracer)

***

### name

### Get Signature

```ts
get name(): CreatableName;
```

The name identifier for this creatable instance.

#### Returns

[`CreatableName`](#../type-aliases/CreatableName)

***

### params

### Get Signature

```ts
get params(): TParams & RequiredCreatableParams<void>;
```

The validated and merged parameters for this instance.

#### Returns

`TParams` & [`RequiredCreatableParams`](#../interfaces/RequiredCreatableParams)\<`void`\>

### Overrides

[`BaseEmitter`](#BaseEmitter).[`params`](BaseEmitter.md#params)

***

### startable

### Get Signature

```ts
get startable(): boolean;
```

Whether this instance can be started (must be in 'created' or 'stopped' status).

#### Returns

`boolean`

***

### status

### Get Signature

```ts
get status(): CreatableStatus | null;
```

The current lifecycle status of this instance, or null if not yet initialized.

#### Returns

[`CreatableStatus`](#../type-aliases/CreatableStatus) \| `null`

***

### statusReporter

### Get Signature

```ts
get statusReporter(): 
  | CreatableStatusReporter<void>
  | undefined;
```

The status reporter used to broadcast lifecycle changes.

#### Returns

  \| [`CreatableStatusReporter`](#../interfaces/CreatableStatusReporter)\<`void`\>
  \| `undefined`

## Methods

### gc()

### Call Signature

```ts
static gc(force?: boolean): void;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `force?` | `boolean` |

#### Returns

`void`

#### Inherited from

[`BaseEmitter`](#BaseEmitter).[`gc`](BaseEmitter.md#gc)

### Call Signature

```ts
static gc(className: BaseClassName): void;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `className` | [`BaseClassName`](#../type-aliases/BaseClassName) |

#### Returns

`void`

#### Inherited from

[`BaseEmitter`](#BaseEmitter).[`gc`](BaseEmitter.md#gc)

***

### instanceCount()

```ts
static instanceCount(className: BaseClassName): number;
```

### Parameters

| Parameter | Type |
| ------ | ------ |
| `className` | [`BaseClassName`](#../type-aliases/BaseClassName) |

### Returns

`number`

### Inherited from

[`BaseEmitter`](#BaseEmitter).[`instanceCount`](BaseEmitter.md#instancecount)

***

### instanceCounts()

```ts
static instanceCounts(): Record<BaseClassName, number>;
```

### Returns

`Record`\<[`BaseClassName`](#../type-aliases/BaseClassName), `number`\>

### Inherited from

[`BaseEmitter`](#BaseEmitter).[`instanceCounts`](BaseEmitter.md#instancecounts)

***

### startHistory()

```ts
static startHistory(): void;
```

### Returns

`void`

### Inherited from

[`BaseEmitter`](#BaseEmitter).[`startHistory`](BaseEmitter.md#starthistory)

***

### stopHistory()

```ts
static stopHistory(): void;
```

### Returns

`void`

### Inherited from

[`BaseEmitter`](#BaseEmitter).[`stopHistory`](BaseEmitter.md#stophistory)

***

### create()

```ts
static create<T>(this: Creatable<T>, inParams?: Partial<T["params"]>): Promise<T>;
```

Asynchronously creates a new instance by processing params, constructing,
and running both static and instance createHandlers.

### Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* [`CreatableInstance`](#../interfaces/CreatableInstance)\<[`CreatableParams`](#../interfaces/CreatableParams), [`EventData`](#../type-aliases/EventData)\> |

### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `this` | [`Creatable`](#../interfaces/Creatable)\<`T`\> | - |
| `inParams?` | `Partial`\<`T`\[`"params"`\]\> | Optional partial parameters to configure the instance |

### Returns

`Promise`\<`T`\>

The fully initialized instance

***

### createHandler()

```ts
static createHandler<T>(this: Creatable<T>, instance: T): Promisable<T>;
```

Static hook called during creation to perform additional initialization.
Override in subclasses to customize post-construction setup.

### Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* [`CreatableInstance`](#../interfaces/CreatableInstance)\<[`CreatableParams`](#../interfaces/CreatableParams), [`EventData`](#../type-aliases/EventData)\> |

### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `this` | [`Creatable`](#../interfaces/Creatable)\<`T`\> | - |
| `instance` | `T` | The newly constructed instance |

### Returns

[`Promisable`](#../type-aliases/Promisable)\<`T`\>

The instance, potentially modified

***

### paramsHandler()

```ts
static paramsHandler<T>(this: Creatable<T>, params?: Partial<T["params"]>): Promisable<T["params"]>;
```

Static hook called during creation to validate and transform params.
Override in subclasses to add default values or validation.

### Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* [`CreatableInstance`](#../interfaces/CreatableInstance)\<[`CreatableParams`](#../interfaces/CreatableParams), [`EventData`](#../type-aliases/EventData)\> |

### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `this` | [`Creatable`](#../interfaces/Creatable)\<`T`\> | - |
| `params?` | `Partial`\<`T`\[`"params"`\]\> | The raw partial params provided to `create` |

### Returns

[`Promisable`](#../type-aliases/Promisable)\<`T`\[`"params"`\]\>

The processed params ready for construction

***

### createHandler()

```ts
createHandler(): Promisable<void>;
```

Instance-level creation hook. Override in subclasses to perform setup after construction.

### Returns

[`Promisable`](#../type-aliases/Promisable)\<`void`\>

***

### paramsValidator()

```ts
paramsValidator(params: Partial<TParams & RequiredCreatableParams>): TParams & RequiredCreatableParams<void>;
```

Validates and returns the merged params, ensuring required fields are present.
Override in subclasses to add custom validation logic.

### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `params` | `Partial`\<`TParams` & [`RequiredCreatableParams`](#../interfaces/RequiredCreatableParams)\> | The raw partial params to validate |

### Returns

`TParams` & [`RequiredCreatableParams`](#../interfaces/RequiredCreatableParams)\<`void`\>

The validated params

***

### span()

```ts
span<T>(name: string, fn: () => T): T;
```

Executes a function within a telemetry span.

### Type Parameters

| Type Parameter |
| ------ |
| `T` |

### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `name` | `string` | The span name |
| `fn` | () => `T` | The function to execute within the span |

### Returns

`T`

***

### spanAsync()

```ts
spanAsync<T>(
   name: string, 
   fn: () => Promise<T>, 
config?: SpanConfig): Promise<T>;
```

Executes an async function within a telemetry span.

### Type Parameters

| Type Parameter |
| ------ |
| `T` |

### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `name` | `string` | The span name |
| `fn` | () => `Promise`\<`T`\> | The async function to execute within the span |
| `config?` | [`SpanConfig`](#../interfaces/SpanConfig) | Optional span configuration |

### Returns

`Promise`\<`T`\>

***

### start()

```ts
start(): Promise<boolean>;
```

Starts the instance, transitioning through 'starting' to 'started' status.
Thread-safe via mutex. Returns true if already started or started successfully.

### Returns

`Promise`\<`boolean`\>

***

### started()

```ts
started(notStartedAction?: "error" | "throw" | "warn" | "log" | "none"): boolean;
```

Checks whether this instance is currently started.
Takes an action if not started, based on the notStartedAction parameter.

### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `notStartedAction?` | `"error"` \| `"throw"` \| `"warn"` \| `"log"` \| `"none"` | What to do if not started: 'error'/'throw' throws, 'warn'/'log' logs, 'none' is silent |

### Returns

`boolean`

True if started, false otherwise

***

### startedAsync()

```ts
startedAsync(notStartedAction?: "error" | "throw" | "warn" | "log" | "none", tryStart?: boolean): Promise<boolean>;
```

Async version of `started` that can optionally auto-start the instance.

### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `notStartedAction?` | `"error"` \| `"throw"` \| `"warn"` \| `"log"` \| `"none"` | What to do if not started and auto-start is disabled |
| `tryStart?` | `boolean` | If true, attempts to start the instance automatically |

### Returns

`Promise`\<`boolean`\>

True if the instance is or becomes started

***

### stop()

```ts
stop(): Promise<boolean>;
```

Stops the instance, transitioning through 'stopping' to 'stopped' status.
Thread-safe via mutex. Returns true if already stopped or stopped successfully.

### Returns

`Promise`\<`boolean`\>

***

### \_noOverride()

```ts
protected _noOverride(functionName?: string): void;
```

Asserts that the given function has not been overridden in a subclass.
Used to enforce the handler pattern (override `startHandler` not `start`).

### Parameters

| Parameter | Type |
| ------ | ------ |
| `functionName?` | `string` |

### Returns

`void`

***

### setStatus()

### Call Signature

```ts
protected setStatus(value: "creating" | "created" | "starting" | "started" | "stopping" | "stopped", progress?: number): void;
```

Sets the lifecycle status and reports it via the status reporter.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `"creating"` \| `"created"` \| `"starting"` \| `"started"` \| `"stopping"` \| `"stopped"` |
| `progress?` | `number` |

#### Returns

`void`

### Call Signature

```ts
protected setStatus(value: "error", error?: Error): void;
```

Sets the lifecycle status and reports it via the status reporter.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `"error"` |
| `error?` | `Error` |

#### Returns

`void`

***

### startHandler()

```ts
protected startHandler(): Promisable<void>;
```

Override in subclasses to define start behavior. Throw an error on failure.

### Returns

[`Promisable`](#../type-aliases/Promisable)\<`void`\>

***

### stopHandler()

```ts
protected stopHandler(): Promisable<void>;
```

Override in subclasses to define stop behavior. Throw an error on failure.

### Returns

[`Promisable`](#../type-aliases/Promisable)\<`void`\>

***

### clearListeners()

```ts
clearListeners(eventNames: keyof TEventData | keyof TEventData[]): this;
```

Removes all listeners for the specified event name(s).

### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `eventNames` | keyof `TEventData` \| keyof `TEventData`[] | One or more event names to clear listeners for. |

### Returns

`this`

This instance for chaining.

### Inherited from

[`BaseEmitter`](#BaseEmitter).[`clearListeners`](BaseEmitter.md#clearlisteners)

***

### emit()

```ts
emit<TEventName, TEventArgs>(eventName: TEventName, eventArgs: TEventArgs): Promise<void>;
```

Emits an event, invoking all registered listeners concurrently.

### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `TEventName` *extends* `string` \| `number` \| `symbol` | keyof `TEventData` |
| `TEventArgs` *extends* [`EventArgs`](#../type-aliases/EventArgs) | `TEventData`\[`TEventName`\] |

### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `eventName` | `TEventName` | The event to emit. |
| `eventArgs` | `TEventArgs` | The data to pass to listeners. |

### Returns

`Promise`\<`void`\>

### Inherited from

[`BaseEmitter`](#BaseEmitter).[`emit`](BaseEmitter.md#emit)

***

### emitSerial()

```ts
emitSerial<TEventName, TEventArgs>(eventName: TEventName, eventArgs: TEventArgs): Promise<void>;
```

Emits an event, invoking all registered listeners sequentially in order.

### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `TEventName` *extends* `string` \| `number` \| `symbol` | keyof `TEventData` |
| `TEventArgs` *extends* [`EventArgs`](#../type-aliases/EventArgs) | `TEventData`\[`TEventName`\] |

### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `eventName` | `TEventName` | The event to emit. |
| `eventArgs` | `TEventArgs` | The data to pass to listeners. |

### Returns

`Promise`\<`void`\>

### Inherited from

[`BaseEmitter`](#BaseEmitter).[`emitSerial`](BaseEmitter.md#emitserial)

***

### listenerCount()

```ts
listenerCount(eventNames: keyof TEventData | keyof TEventData[]): number;
```

Returns the total number of listeners registered for the specified event name(s).

### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `eventNames` | keyof `TEventData` \| keyof `TEventData`[] | One or more event names to count listeners for. |

### Returns

`number`

The total listener count.

### Inherited from

[`BaseEmitter`](#BaseEmitter).[`listenerCount`](BaseEmitter.md#listenercount)

***

### off()

```ts
off<TEventName>(eventNames: TEventName | TEventName[], listener: EventListener<TEventData[TEventName]>): void;
```

Removes a specific listener from the specified event name(s).

### Type Parameters

| Type Parameter |
| ------ |
| `TEventName` *extends* `string` \| `number` \| `symbol` |

### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `eventNames` | `TEventName` \| `TEventName`[] | One or more event names to unsubscribe from. |
| `listener` | [`EventListener`](#../type-aliases/EventListener)\<`TEventData`\[`TEventName`\]\> | The listener to remove. |

### Returns

`void`

### Inherited from

[`BaseEmitter`](#BaseEmitter).[`off`](BaseEmitter.md#off)

***

### offAny()

```ts
offAny(listener: EventAnyListener): void;
```

Removes a wildcard listener that was receiving all events.

### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `listener` | [`EventAnyListener`](#../type-aliases/EventAnyListener) | The wildcard listener to remove. |

### Returns

`void`

### Inherited from

[`BaseEmitter`](#BaseEmitter).[`offAny`](BaseEmitter.md#offany)

***

### on()

```ts
on<TEventName>(eventNames: TEventName | TEventName[], listener: EventListener<TEventData[TEventName]>): () => void;
```

Subscribes a listener to the specified event name(s).

### Type Parameters

| Type Parameter |
| ------ |
| `TEventName` *extends* `string` \| `number` \| `symbol` |

### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `eventNames` | `TEventName` \| `TEventName`[] | One or more event names to listen for. |
| `listener` | [`EventListener`](#../type-aliases/EventListener)\<`TEventData`\[`TEventName`\]\> | The callback to invoke when the event fires. |

### Returns

An unsubscribe function.

```ts
(): void;
```

#### Returns

`void`

### Inherited from

[`BaseEmitter`](#BaseEmitter).[`on`](BaseEmitter.md#on)

***

### onAny()

```ts
onAny(listener: EventAnyListener): () => void;
```

Subscribes a wildcard listener that receives all events.

### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `listener` | [`EventAnyListener`](#../type-aliases/EventAnyListener) | The callback to invoke for any event. |

### Returns

An unsubscribe function.

```ts
(): void;
```

#### Returns

`void`

### Inherited from

[`BaseEmitter`](#BaseEmitter).[`onAny`](BaseEmitter.md#onany)

***

### once()

```ts
once<TEventName>(eventName: TEventName, listener: EventListener<TEventData[TEventName]>): () => void;
```

Subscribes a listener that will be invoked only once for the specified event, then automatically removed.

### Type Parameters

| Type Parameter |
| ------ |
| `TEventName` *extends* `string` \| `number` \| `symbol` |

### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `eventName` | `TEventName` | The event to listen for. |
| `listener` | [`EventListener`](#../type-aliases/EventListener)\<`TEventData`\[`TEventName`\]\> | The callback to invoke once. |

### Returns

An unsubscribe function.

```ts
(): void;
```

#### Returns

`void`

### Inherited from

[`BaseEmitter`](#BaseEmitter).[`once`](BaseEmitter.md#once)

  ### <a id="AbstractCreatableWithFactory"></a>AbstractCreatableWithFactory

[**@xylabs/sdk-js**](#../README)

***

Extends AbstractCreatable with a static `factory` method for creating
pre-configured CreatableFactory instances.

## Extends

- [`AbstractCreatable`](#AbstractCreatable)\<`TParams`, `TEventData`\>

## Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `TParams` *extends* [`CreatableParams`](#../interfaces/CreatableParams) | [`CreatableParams`](#../interfaces/CreatableParams) |
| `TEventData` *extends* [`EventData`](#../type-aliases/EventData) | [`EventData`](#../type-aliases/EventData) |

## Constructors

### Constructor

```ts
new AbstractCreatableWithFactory<TParams, TEventData>(key: unknown, params: Partial<TParams & RequiredCreatableParams>): AbstractCreatableWithFactory<TParams, TEventData>;
```

### Parameters

| Parameter | Type |
| ------ | ------ |
| `key` | `unknown` |
| `params` | `Partial`\<`TParams` & [`RequiredCreatableParams`](#../interfaces/RequiredCreatableParams)\> |

### Returns

`AbstractCreatableWithFactory`\<`TParams`, `TEventData`\>

### Inherited from

[`AbstractCreatable`](#AbstractCreatable).[`constructor`](AbstractCreatable.md#constructor)

## Properties

| Property | Modifier | Type | Description | Inherited from |
| ------ | ------ | ------ | ------ | ------ |
| <a id="defaultlogger"></a> `defaultLogger?` | `static` | [`Logger`](#../interfaces/Logger) | - | [`AbstractCreatable`](#AbstractCreatable).[`defaultLogger`](AbstractCreatable.md#defaultlogger) |
| <a id="globalinstances"></a> `globalInstances` | `readonly` | `Record`\<[`BaseClassName`](#../type-aliases/BaseClassName), `WeakRef`\<[`Base`](#Base)\>[]\> | - | [`AbstractCreatable`](#AbstractCreatable).[`globalInstances`](AbstractCreatable.md#globalinstances) |
| <a id="globalinstancescounthistory"></a> `globalInstancesCountHistory` | `readonly` | `Record`\<[`BaseClassName`](#../type-aliases/BaseClassName), `number`[]\> | - | [`AbstractCreatable`](#AbstractCreatable).[`globalInstancesCountHistory`](AbstractCreatable.md#globalinstancescounthistory) |
| <a id="defaultlogger-1"></a> `defaultLogger?` | `public` | [`Logger`](#../interfaces/Logger) | Optional default logger for this instance. | [`AbstractCreatable`](#AbstractCreatable).[`defaultLogger`](AbstractCreatable.md#defaultlogger-1) |
| <a id="_startpromise"></a> `_startPromise` | `protected` | [`Promisable`](#../type-aliases/Promisable)\<`boolean`\> \| `undefined` | - | [`AbstractCreatable`](#AbstractCreatable).[`_startPromise`](AbstractCreatable.md#_startpromise) |
| <a id="eventdata"></a> `eventData` | `public` | `TEventData` | Type-level reference to the event data shape for external type queries. | [`AbstractCreatable`](#AbstractCreatable).[`eventData`](AbstractCreatable.md#eventdata) |

## Accessors

### historyInterval

### Get Signature

```ts
get static historyInterval(): number;
```

#### Returns

`number`

### Set Signature

```ts
set static historyInterval(value: number): void;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `number` |

#### Returns

`void`

### Inherited from

[`AbstractCreatable`](#AbstractCreatable).[`historyInterval`](AbstractCreatable.md#historyinterval)

***

### historyTime

### Get Signature

```ts
get static historyTime(): number;
```

#### Returns

`number`

### Set Signature

```ts
set static historyTime(value: number): void;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `number` |

#### Returns

`void`

### Inherited from

[`AbstractCreatable`](#AbstractCreatable).[`historyTime`](AbstractCreatable.md#historytime)

***

### maxGcFrequency

### Get Signature

```ts
get static maxGcFrequency(): number;
```

#### Returns

`number`

### Set Signature

```ts
set static maxGcFrequency(value: number): void;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `number` |

#### Returns

`void`

### Inherited from

[`AbstractCreatable`](#AbstractCreatable).[`maxGcFrequency`](AbstractCreatable.md#maxgcfrequency)

***

### maxHistoryDepth

### Get Signature

```ts
get static maxHistoryDepth(): number;
```

#### Returns

`number`

### Inherited from

[`AbstractCreatable`](#AbstractCreatable).[`maxHistoryDepth`](AbstractCreatable.md#maxhistorydepth)

***

### logger

### Get Signature

```ts
get logger(): Logger | undefined;
```

#### Returns

[`Logger`](#../interfaces/Logger) \| `undefined`

### Inherited from

[`AbstractCreatable`](#AbstractCreatable).[`logger`](AbstractCreatable.md#logger)

***

### meter

### Get Signature

```ts
get meter(): Meter | undefined;
```

#### Returns

`Meter` \| `undefined`

### Inherited from

[`AbstractCreatable`](#AbstractCreatable).[`meter`](AbstractCreatable.md#meter)

***

### tracer

### Get Signature

```ts
get tracer(): Tracer | undefined;
```

#### Returns

`Tracer` \| `undefined`

### Inherited from

[`AbstractCreatable`](#AbstractCreatable).[`tracer`](AbstractCreatable.md#tracer)

***

### name

### Get Signature

```ts
get name(): CreatableName;
```

The name identifier for this creatable instance.

#### Returns

[`CreatableName`](#../type-aliases/CreatableName)

### Inherited from

[`AbstractCreatable`](#AbstractCreatable).[`name`](AbstractCreatable.md#name)

***

### params

### Get Signature

```ts
get params(): TParams & RequiredCreatableParams<void>;
```

The validated and merged parameters for this instance.

#### Returns

`TParams` & [`RequiredCreatableParams`](#../interfaces/RequiredCreatableParams)\<`void`\>

### Inherited from

[`AbstractCreatable`](#AbstractCreatable).[`params`](AbstractCreatable.md#params)

***

### startable

### Get Signature

```ts
get startable(): boolean;
```

Whether this instance can be started (must be in 'created' or 'stopped' status).

#### Returns

`boolean`

### Inherited from

[`AbstractCreatable`](#AbstractCreatable).[`startable`](AbstractCreatable.md#startable)

***

### status

### Get Signature

```ts
get status(): CreatableStatus | null;
```

The current lifecycle status of this instance, or null if not yet initialized.

#### Returns

[`CreatableStatus`](#../type-aliases/CreatableStatus) \| `null`

### Inherited from

[`AbstractCreatable`](#AbstractCreatable).[`status`](AbstractCreatable.md#status)

***

### statusReporter

### Get Signature

```ts
get statusReporter(): 
  | CreatableStatusReporter<void>
  | undefined;
```

The status reporter used to broadcast lifecycle changes.

#### Returns

  \| [`CreatableStatusReporter`](#../interfaces/CreatableStatusReporter)\<`void`\>
  \| `undefined`

### Inherited from

[`AbstractCreatable`](#AbstractCreatable).[`statusReporter`](AbstractCreatable.md#statusreporter)

## Methods

### gc()

### Call Signature

```ts
static gc(force?: boolean): void;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `force?` | `boolean` |

#### Returns

`void`

#### Inherited from

[`AbstractCreatable`](#AbstractCreatable).[`gc`](AbstractCreatable.md#gc)

### Call Signature

```ts
static gc(className: BaseClassName): void;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `className` | [`BaseClassName`](#../type-aliases/BaseClassName) |

#### Returns

`void`

#### Inherited from

[`AbstractCreatable`](#AbstractCreatable).[`gc`](AbstractCreatable.md#gc)

***

### instanceCount()

```ts
static instanceCount(className: BaseClassName): number;
```

### Parameters

| Parameter | Type |
| ------ | ------ |
| `className` | [`BaseClassName`](#../type-aliases/BaseClassName) |

### Returns

`number`

### Inherited from

[`AbstractCreatable`](#AbstractCreatable).[`instanceCount`](AbstractCreatable.md#instancecount)

***

### instanceCounts()

```ts
static instanceCounts(): Record<BaseClassName, number>;
```

### Returns

`Record`\<[`BaseClassName`](#../type-aliases/BaseClassName), `number`\>

### Inherited from

[`AbstractCreatable`](#AbstractCreatable).[`instanceCounts`](AbstractCreatable.md#instancecounts)

***

### startHistory()

```ts
static startHistory(): void;
```

### Returns

`void`

### Inherited from

[`AbstractCreatable`](#AbstractCreatable).[`startHistory`](AbstractCreatable.md#starthistory)

***

### stopHistory()

```ts
static stopHistory(): void;
```

### Returns

`void`

### Inherited from

[`AbstractCreatable`](#AbstractCreatable).[`stopHistory`](AbstractCreatable.md#stophistory)

***

### create()

```ts
static create<T>(this: Creatable<T>, inParams?: Partial<T["params"]>): Promise<T>;
```

Asynchronously creates a new instance by processing params, constructing,
and running both static and instance createHandlers.

### Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* [`CreatableInstance`](#../interfaces/CreatableInstance)\<[`CreatableParams`](#../interfaces/CreatableParams), [`EventData`](#../type-aliases/EventData)\> |

### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `this` | [`Creatable`](#../interfaces/Creatable)\<`T`\> | - |
| `inParams?` | `Partial`\<`T`\[`"params"`\]\> | Optional partial parameters to configure the instance |

### Returns

`Promise`\<`T`\>

The fully initialized instance

### Inherited from

[`AbstractCreatable`](#AbstractCreatable).[`create`](AbstractCreatable.md#create)

***

### createHandler()

```ts
static createHandler<T>(this: Creatable<T>, instance: T): Promisable<T>;
```

Static hook called during creation to perform additional initialization.
Override in subclasses to customize post-construction setup.

### Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* [`CreatableInstance`](#../interfaces/CreatableInstance)\<[`CreatableParams`](#../interfaces/CreatableParams), [`EventData`](#../type-aliases/EventData)\> |

### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `this` | [`Creatable`](#../interfaces/Creatable)\<`T`\> | - |
| `instance` | `T` | The newly constructed instance |

### Returns

[`Promisable`](#../type-aliases/Promisable)\<`T`\>

The instance, potentially modified

### Inherited from

[`AbstractCreatable`](#AbstractCreatable).[`createHandler`](AbstractCreatable.md#createhandler)

***

### paramsHandler()

```ts
static paramsHandler<T>(this: Creatable<T>, params?: Partial<T["params"]>): Promisable<T["params"]>;
```

Static hook called during creation to validate and transform params.
Override in subclasses to add default values or validation.

### Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* [`CreatableInstance`](#../interfaces/CreatableInstance)\<[`CreatableParams`](#../interfaces/CreatableParams), [`EventData`](#../type-aliases/EventData)\> |

### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `this` | [`Creatable`](#../interfaces/Creatable)\<`T`\> | - |
| `params?` | `Partial`\<`T`\[`"params"`\]\> | The raw partial params provided to `create` |

### Returns

[`Promisable`](#../type-aliases/Promisable)\<`T`\[`"params"`\]\>

The processed params ready for construction

### Inherited from

[`AbstractCreatable`](#AbstractCreatable).[`paramsHandler`](AbstractCreatable.md#paramshandler)

***

### createHandler()

```ts
createHandler(): Promisable<void>;
```

Instance-level creation hook. Override in subclasses to perform setup after construction.

### Returns

[`Promisable`](#../type-aliases/Promisable)\<`void`\>

### Inherited from

[`AbstractCreatable`](#AbstractCreatable).[`createHandler`](AbstractCreatable.md#createhandler-1)

***

### paramsValidator()

```ts
paramsValidator(params: Partial<TParams & RequiredCreatableParams>): TParams & RequiredCreatableParams<void>;
```

Validates and returns the merged params, ensuring required fields are present.
Override in subclasses to add custom validation logic.

### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `params` | `Partial`\<`TParams` & [`RequiredCreatableParams`](#../interfaces/RequiredCreatableParams)\> | The raw partial params to validate |

### Returns

`TParams` & [`RequiredCreatableParams`](#../interfaces/RequiredCreatableParams)\<`void`\>

The validated params

### Inherited from

[`AbstractCreatable`](#AbstractCreatable).[`paramsValidator`](AbstractCreatable.md#paramsvalidator)

***

### span()

```ts
span<T>(name: string, fn: () => T): T;
```

Executes a function within a telemetry span.

### Type Parameters

| Type Parameter |
| ------ |
| `T` |

### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `name` | `string` | The span name |
| `fn` | () => `T` | The function to execute within the span |

### Returns

`T`

### Inherited from

[`AbstractCreatable`](#AbstractCreatable).[`span`](AbstractCreatable.md#span)

***

### spanAsync()

```ts
spanAsync<T>(
   name: string, 
   fn: () => Promise<T>, 
config?: SpanConfig): Promise<T>;
```

Executes an async function within a telemetry span.

### Type Parameters

| Type Parameter |
| ------ |
| `T` |

### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `name` | `string` | The span name |
| `fn` | () => `Promise`\<`T`\> | The async function to execute within the span |
| `config?` | [`SpanConfig`](#../interfaces/SpanConfig) | Optional span configuration |

### Returns

`Promise`\<`T`\>

### Inherited from

[`AbstractCreatable`](#AbstractCreatable).[`spanAsync`](AbstractCreatable.md#spanasync)

***

### start()

```ts
start(): Promise<boolean>;
```

Starts the instance, transitioning through 'starting' to 'started' status.
Thread-safe via mutex. Returns true if already started or started successfully.

### Returns

`Promise`\<`boolean`\>

### Inherited from

[`AbstractCreatable`](#AbstractCreatable).[`start`](AbstractCreatable.md#start)

***

### started()

```ts
started(notStartedAction?: "error" | "throw" | "warn" | "log" | "none"): boolean;
```

Checks whether this instance is currently started.
Takes an action if not started, based on the notStartedAction parameter.

### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `notStartedAction?` | `"error"` \| `"throw"` \| `"warn"` \| `"log"` \| `"none"` | What to do if not started: 'error'/'throw' throws, 'warn'/'log' logs, 'none' is silent |

### Returns

`boolean`

True if started, false otherwise

### Inherited from

[`AbstractCreatable`](#AbstractCreatable).[`started`](AbstractCreatable.md#started)

***

### startedAsync()

```ts
startedAsync(notStartedAction?: "error" | "throw" | "warn" | "log" | "none", tryStart?: boolean): Promise<boolean>;
```

Async version of `started` that can optionally auto-start the instance.

### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `notStartedAction?` | `"error"` \| `"throw"` \| `"warn"` \| `"log"` \| `"none"` | What to do if not started and auto-start is disabled |
| `tryStart?` | `boolean` | If true, attempts to start the instance automatically |

### Returns

`Promise`\<`boolean`\>

True if the instance is or becomes started

### Inherited from

[`AbstractCreatable`](#AbstractCreatable).[`startedAsync`](AbstractCreatable.md#startedasync)

***

### stop()

```ts
stop(): Promise<boolean>;
```

Stops the instance, transitioning through 'stopping' to 'stopped' status.
Thread-safe via mutex. Returns true if already stopped or stopped successfully.

### Returns

`Promise`\<`boolean`\>

### Inherited from

[`AbstractCreatable`](#AbstractCreatable).[`stop`](AbstractCreatable.md#stop)

***

### \_noOverride()

```ts
protected _noOverride(functionName?: string): void;
```

Asserts that the given function has not been overridden in a subclass.
Used to enforce the handler pattern (override `startHandler` not `start`).

### Parameters

| Parameter | Type |
| ------ | ------ |
| `functionName?` | `string` |

### Returns

`void`

### Inherited from

[`AbstractCreatable`](#AbstractCreatable).[`_noOverride`](AbstractCreatable.md#_nooverride)

***

### setStatus()

### Call Signature

```ts
protected setStatus(value: "creating" | "created" | "starting" | "started" | "stopping" | "stopped", progress?: number): void;
```

Sets the lifecycle status and reports it via the status reporter.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `"creating"` \| `"created"` \| `"starting"` \| `"started"` \| `"stopping"` \| `"stopped"` |
| `progress?` | `number` |

#### Returns

`void`

#### Inherited from

[`AbstractCreatable`](#AbstractCreatable).[`setStatus`](AbstractCreatable.md#setstatus)

### Call Signature

```ts
protected setStatus(value: "error", error?: Error): void;
```

Sets the lifecycle status and reports it via the status reporter.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `"error"` |
| `error?` | `Error` |

#### Returns

`void`

#### Inherited from

[`AbstractCreatable`](#AbstractCreatable).[`setStatus`](AbstractCreatable.md#setstatus)

***

### startHandler()

```ts
protected startHandler(): Promisable<void>;
```

Override in subclasses to define start behavior. Throw an error on failure.

### Returns

[`Promisable`](#../type-aliases/Promisable)\<`void`\>

### Inherited from

[`AbstractCreatable`](#AbstractCreatable).[`startHandler`](AbstractCreatable.md#starthandler)

***

### stopHandler()

```ts
protected stopHandler(): Promisable<void>;
```

Override in subclasses to define stop behavior. Throw an error on failure.

### Returns

[`Promisable`](#../type-aliases/Promisable)\<`void`\>

### Inherited from

[`AbstractCreatable`](#AbstractCreatable).[`stopHandler`](AbstractCreatable.md#stophandler)

***

### factory()

```ts
static factory<T>(
   this: Creatable<T>, 
   params?: Partial<T["params"]>, 
labels?: Labels): CreatableFactory<T>;
```

Creates a factory that produces instances of this class with pre-configured params and labels.

### Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* [`CreatableInstance`](#../interfaces/CreatableInstance)\<[`CreatableParams`](#../interfaces/CreatableParams), [`EventData`](#../type-aliases/EventData)\> |

### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `this` | [`Creatable`](#../interfaces/Creatable)\<`T`\> | - |
| `params?` | `Partial`\<`T`\[`"params"`\]\> | Default parameters for instances created by the factory |
| `labels?` | [`Labels`](#../interfaces/Labels) | Labels to assign to created instances |

### Returns

[`CreatableFactory`](#../interfaces/CreatableFactory)\<`T`\>

***

### clearListeners()

```ts
clearListeners(eventNames: keyof TEventData | keyof TEventData[]): this;
```

Removes all listeners for the specified event name(s).

### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `eventNames` | keyof `TEventData` \| keyof `TEventData`[] | One or more event names to clear listeners for. |

### Returns

`this`

This instance for chaining.

### Inherited from

[`AbstractCreatable`](#AbstractCreatable).[`clearListeners`](AbstractCreatable.md#clearlisteners)

***

### emit()

```ts
emit<TEventName, TEventArgs>(eventName: TEventName, eventArgs: TEventArgs): Promise<void>;
```

Emits an event, invoking all registered listeners concurrently.

### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `TEventName` *extends* `string` \| `number` \| `symbol` | keyof `TEventData` |
| `TEventArgs` *extends* [`EventArgs`](#../type-aliases/EventArgs) | `TEventData`\[`TEventName`\] |

### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `eventName` | `TEventName` | The event to emit. |
| `eventArgs` | `TEventArgs` | The data to pass to listeners. |

### Returns

`Promise`\<`void`\>

### Inherited from

[`AbstractCreatable`](#AbstractCreatable).[`emit`](AbstractCreatable.md#emit)

***

### emitSerial()

```ts
emitSerial<TEventName, TEventArgs>(eventName: TEventName, eventArgs: TEventArgs): Promise<void>;
```

Emits an event, invoking all registered listeners sequentially in order.

### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `TEventName` *extends* `string` \| `number` \| `symbol` | keyof `TEventData` |
| `TEventArgs` *extends* [`EventArgs`](#../type-aliases/EventArgs) | `TEventData`\[`TEventName`\] |

### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `eventName` | `TEventName` | The event to emit. |
| `eventArgs` | `TEventArgs` | The data to pass to listeners. |

### Returns

`Promise`\<`void`\>

### Inherited from

[`AbstractCreatable`](#AbstractCreatable).[`emitSerial`](AbstractCreatable.md#emitserial)

***

### listenerCount()

```ts
listenerCount(eventNames: keyof TEventData | keyof TEventData[]): number;
```

Returns the total number of listeners registered for the specified event name(s).

### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `eventNames` | keyof `TEventData` \| keyof `TEventData`[] | One or more event names to count listeners for. |

### Returns

`number`

The total listener count.

### Inherited from

[`AbstractCreatable`](#AbstractCreatable).[`listenerCount`](AbstractCreatable.md#listenercount)

***

### off()

```ts
off<TEventName>(eventNames: TEventName | TEventName[], listener: EventListener<TEventData[TEventName]>): void;
```

Removes a specific listener from the specified event name(s).

### Type Parameters

| Type Parameter |
| ------ |
| `TEventName` *extends* `string` \| `number` \| `symbol` |

### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `eventNames` | `TEventName` \| `TEventName`[] | One or more event names to unsubscribe from. |
| `listener` | [`EventListener`](#../type-aliases/EventListener)\<`TEventData`\[`TEventName`\]\> | The listener to remove. |

### Returns

`void`

### Inherited from

[`AbstractCreatable`](#AbstractCreatable).[`off`](AbstractCreatable.md#off)

***

### offAny()

```ts
offAny(listener: EventAnyListener): void;
```

Removes a wildcard listener that was receiving all events.

### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `listener` | [`EventAnyListener`](#../type-aliases/EventAnyListener) | The wildcard listener to remove. |

### Returns

`void`

### Inherited from

[`AbstractCreatable`](#AbstractCreatable).[`offAny`](AbstractCreatable.md#offany)

***

### on()

```ts
on<TEventName>(eventNames: TEventName | TEventName[], listener: EventListener<TEventData[TEventName]>): () => void;
```

Subscribes a listener to the specified event name(s).

### Type Parameters

| Type Parameter |
| ------ |
| `TEventName` *extends* `string` \| `number` \| `symbol` |

### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `eventNames` | `TEventName` \| `TEventName`[] | One or more event names to listen for. |
| `listener` | [`EventListener`](#../type-aliases/EventListener)\<`TEventData`\[`TEventName`\]\> | The callback to invoke when the event fires. |

### Returns

An unsubscribe function.

```ts
(): void;
```

#### Returns

`void`

### Inherited from

[`AbstractCreatable`](#AbstractCreatable).[`on`](AbstractCreatable.md#on)

***

### onAny()

```ts
onAny(listener: EventAnyListener): () => void;
```

Subscribes a wildcard listener that receives all events.

### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `listener` | [`EventAnyListener`](#../type-aliases/EventAnyListener) | The callback to invoke for any event. |

### Returns

An unsubscribe function.

```ts
(): void;
```

#### Returns

`void`

### Inherited from

[`AbstractCreatable`](#AbstractCreatable).[`onAny`](AbstractCreatable.md#onany)

***

### once()

```ts
once<TEventName>(eventName: TEventName, listener: EventListener<TEventData[TEventName]>): () => void;
```

Subscribes a listener that will be invoked only once for the specified event, then automatically removed.

### Type Parameters

| Type Parameter |
| ------ |
| `TEventName` *extends* `string` \| `number` \| `symbol` |

### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `eventName` | `TEventName` | The event to listen for. |
| `listener` | [`EventListener`](#../type-aliases/EventListener)\<`TEventData`\[`TEventName`\]\> | The callback to invoke once. |

### Returns

An unsubscribe function.

```ts
(): void;
```

#### Returns

`void`

### Inherited from

[`AbstractCreatable`](#AbstractCreatable).[`once`](AbstractCreatable.md#once)

  ### <a id="ApiClient"></a>ApiClient

[**@xylabs/sdk-js**](#../README)

***

Abstract base class for API clients that provides stage and token configuration.

## Constructors

### Constructor

```ts
new ApiClient(token?: string | null, stage?: ApiStage): ApiClient;
```

### Parameters

| Parameter | Type |
| ------ | ------ |
| `token?` | `string` \| `null` |
| `stage?` | [`ApiStage`](#../type-aliases/ApiStage) |

### Returns

`ApiClient`

## Properties

| Property | Modifier | Type |
| ------ | ------ | ------ |
| <a id="stage"></a> `stage?` | `protected` | [`ApiStage`](#../type-aliases/ApiStage) |
| <a id="token"></a> `token?` | `protected` | `string` \| `null` |

## Methods

### endPoint()

```ts
abstract endPoint(): string;
```

### Returns

`string`

  ### <a id="ApiEndpoint"></a>ApiEndpoint

[**@xylabs/sdk-js**](#../README)

***

Generic REST API endpoint wrapper that supports fetching and inserting typed data.

## Type Parameters

| Type Parameter | Description |
| ------ | ------ |
| `T` | The type of data returned by the endpoint |

## Constructors

### Constructor

```ts
new ApiEndpoint<T>(config: ApiConfig, path: string): ApiEndpoint<T>;
```

### Parameters

| Parameter | Type |
| ------ | ------ |
| `config` | [`ApiConfig`](#../interfaces/ApiConfig) |
| `path` | `string` |

### Returns

`ApiEndpoint`\<`T`\>

## Accessors

### value

### Get Signature

```ts
get value(): T | undefined;
```

#### Returns

`T` \| `undefined`

## Methods

### fetch()

```ts
fetch(): Promise<T>;
```

### Returns

`Promise`\<`T`\>

***

### get()

```ts
get(): Promise<T | NonNullable<T>>;
```

### Returns

`Promise`\<`T` \| `NonNullable`\<`T`\>\>

***

### insert()

```ts
insert(value: T): Promise<T>;
```

### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `T` |

### Returns

`Promise`\<`T`\>

  ### <a id="AxiosJson"></a>AxiosJson

[**@xylabs/sdk-js**](#../README)

***

## Deprecated

use axiosJsonConfig instead

## Extends

- `Axios`

## Constructors

### Constructor

```ts
new AxiosJson(config?: RawAxiosJsonRequestConfig): AxiosJson;
```

### Parameters

| Parameter | Type |
| ------ | ------ |
| `config?` | `RawAxiosJsonRequestConfig` |

### Returns

`AxiosJson`

### Overrides

```ts
Axios.constructor
```

## Methods

### ~~axiosConfig()~~

```ts
static axiosConfig(config?: RawAxiosJsonRequestConfig): RawAxiosJsonRequestConfig;
```

### Parameters

| Parameter | Type |
| ------ | ------ |
| `config?` | `RawAxiosJsonRequestConfig` |

### Returns

`RawAxiosJsonRequestConfig`

***

### ~~create()~~

```ts
static create(config?: RawAxiosJsonRequestConfig): Axios;
```

### Parameters

| Parameter | Type |
| ------ | ------ |
| `config?` | `RawAxiosJsonRequestConfig` |

### Returns

`Axios`

  ### <a id="Base"></a>Base

[**@xylabs/sdk-js**](#../README)

***

Abstract base class providing logging, telemetry, and global instance tracking with WeakRef-based GC.

## Extended by

- [`UniqueBase`](#UniqueBase)
- [`BaseEmitter`](#BaseEmitter)
- [`Events`](#Events)

## Type Parameters

| Type Parameter | Default type | Description |
| ------ | ------ | ------ |
| `TParams` *extends* [`BaseParams`](#../type-aliases/BaseParams) | [`BaseParams`](#../type-aliases/BaseParams) | The parameter type, extending BaseParams |

## Constructors

### Constructor

```ts
new Base<TParams>(params: BaseParams<TParams>): Base<TParams>;
```

### Parameters

| Parameter | Type |
| ------ | ------ |
| `params` | [`BaseParams`](#../type-aliases/BaseParams)\<`TParams`\> |

### Returns

`Base`\<`TParams`\>

## Properties

| Property | Modifier | Type |
| ------ | ------ | ------ |
| <a id="defaultlogger"></a> `defaultLogger?` | `static` | [`Logger`](#../interfaces/Logger) |
| <a id="globalinstances"></a> `globalInstances` | `readonly` | `Record`\<[`BaseClassName`](#../type-aliases/BaseClassName), `WeakRef`\<`Base`\>[]\> |
| <a id="globalinstancescounthistory"></a> `globalInstancesCountHistory` | `readonly` | `Record`\<[`BaseClassName`](#../type-aliases/BaseClassName), `number`[]\> |

## Accessors

### historyInterval

### Get Signature

```ts
get static historyInterval(): number;
```

#### Returns

`number`

### Set Signature

```ts
set static historyInterval(value: number): void;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `number` |

#### Returns

`void`

***

### historyTime

### Get Signature

```ts
get static historyTime(): number;
```

#### Returns

`number`

### Set Signature

```ts
set static historyTime(value: number): void;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `number` |

#### Returns

`void`

***

### maxGcFrequency

### Get Signature

```ts
get static maxGcFrequency(): number;
```

#### Returns

`number`

### Set Signature

```ts
set static maxGcFrequency(value: number): void;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `number` |

#### Returns

`void`

***

### maxHistoryDepth

### Get Signature

```ts
get static maxHistoryDepth(): number;
```

#### Returns

`number`

***

### logger

### Get Signature

```ts
get logger(): Logger | undefined;
```

#### Returns

[`Logger`](#../interfaces/Logger) \| `undefined`

***

### meter

### Get Signature

```ts
get meter(): Meter | undefined;
```

#### Returns

`Meter` \| `undefined`

***

### params

### Get Signature

```ts
get params(): BaseParams<TParams>;
```

#### Returns

[`BaseParams`](#../type-aliases/BaseParams)\<`TParams`\>

***

### tracer

### Get Signature

```ts
get tracer(): Tracer | undefined;
```

#### Returns

`Tracer` \| `undefined`

## Methods

### gc()

### Call Signature

```ts
static gc(force?: boolean): void;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `force?` | `boolean` |

#### Returns

`void`

### Call Signature

```ts
static gc(className: BaseClassName): void;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `className` | [`BaseClassName`](#../type-aliases/BaseClassName) |

#### Returns

`void`

***

### instanceCount()

```ts
static instanceCount(className: BaseClassName): number;
```

### Parameters

| Parameter | Type |
| ------ | ------ |
| `className` | [`BaseClassName`](#../type-aliases/BaseClassName) |

### Returns

`number`

***

### instanceCounts()

```ts
static instanceCounts(): Record<BaseClassName, number>;
```

### Returns

`Record`\<[`BaseClassName`](#../type-aliases/BaseClassName), `number`\>

***

### startHistory()

```ts
static startHistory(): void;
```

### Returns

`void`

***

### stopHistory()

```ts
static stopHistory(): void;
```

### Returns

`void`

  ### <a id="BaseEmitter"></a>BaseEmitter

[**@xylabs/sdk-js**](#../README)

***

Base class that combines the Base utility class with typed event emission capabilities.
Delegates all event operations to an internal Events instance.

## Extends

- [`Base`](#Base)\<`TParams`\>

## Extended by

- [`AbstractCreatable`](#AbstractCreatable)

## Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `TParams` *extends* [`BaseParams`](#../type-aliases/BaseParams) | [`BaseParams`](#../type-aliases/BaseParams) |
| `TEventData` *extends* [`EventData`](#../type-aliases/EventData) | [`EventData`](#../type-aliases/EventData) |

## Implements

- [`EventEmitter`](#../interfaces/EventEmitter)\<`TEventData`\>

## Constructors

### Constructor

```ts
new BaseEmitter<TParams, TEventData>(params: BaseParams<TParams>): BaseEmitter<TParams, TEventData>;
```

### Parameters

| Parameter | Type |
| ------ | ------ |
| `params` | [`BaseParams`](#../type-aliases/BaseParams)\<`TParams`\> |

### Returns

`BaseEmitter`\<`TParams`, `TEventData`\>

### Overrides

[`Base`](#Base).[`constructor`](Base.md#constructor)

## Properties

| Property | Modifier | Type | Description | Inherited from |
| ------ | ------ | ------ | ------ | ------ |
| <a id="defaultlogger"></a> `defaultLogger?` | `static` | [`Logger`](#../interfaces/Logger) | - | [`Base`](#Base).[`defaultLogger`](Base.md#defaultlogger) |
| <a id="globalinstances"></a> `globalInstances` | `readonly` | `Record`\<[`BaseClassName`](#../type-aliases/BaseClassName), `WeakRef`\<[`Base`](#Base)\>[]\> | - | [`Base`](#Base).[`globalInstances`](Base.md#globalinstances) |
| <a id="globalinstancescounthistory"></a> `globalInstancesCountHistory` | `readonly` | `Record`\<[`BaseClassName`](#../type-aliases/BaseClassName), `number`[]\> | - | [`Base`](#Base).[`globalInstancesCountHistory`](Base.md#globalinstancescounthistory) |
| <a id="eventdata"></a> `eventData` | `public` | `TEventData` | Type-level reference to the event data shape for external type queries. | - |

## Accessors

### historyInterval

### Get Signature

```ts
get static historyInterval(): number;
```

#### Returns

`number`

### Set Signature

```ts
set static historyInterval(value: number): void;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `number` |

#### Returns

`void`

### Inherited from

[`Base`](#Base).[`historyInterval`](Base.md#historyinterval)

***

### historyTime

### Get Signature

```ts
get static historyTime(): number;
```

#### Returns

`number`

### Set Signature

```ts
set static historyTime(value: number): void;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `number` |

#### Returns

`void`

### Inherited from

[`Base`](#Base).[`historyTime`](Base.md#historytime)

***

### maxGcFrequency

### Get Signature

```ts
get static maxGcFrequency(): number;
```

#### Returns

`number`

### Set Signature

```ts
set static maxGcFrequency(value: number): void;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `number` |

#### Returns

`void`

### Inherited from

[`Base`](#Base).[`maxGcFrequency`](Base.md#maxgcfrequency)

***

### maxHistoryDepth

### Get Signature

```ts
get static maxHistoryDepth(): number;
```

#### Returns

`number`

### Inherited from

[`Base`](#Base).[`maxHistoryDepth`](Base.md#maxhistorydepth)

***

### logger

### Get Signature

```ts
get logger(): Logger | undefined;
```

#### Returns

[`Logger`](#../interfaces/Logger) \| `undefined`

### Inherited from

[`Base`](#Base).[`logger`](Base.md#logger)

***

### meter

### Get Signature

```ts
get meter(): Meter | undefined;
```

#### Returns

`Meter` \| `undefined`

### Inherited from

[`Base`](#Base).[`meter`](Base.md#meter)

***

### params

### Get Signature

```ts
get params(): BaseParams<TParams>;
```

#### Returns

[`BaseParams`](#../type-aliases/BaseParams)\<`TParams`\>

### Inherited from

[`Base`](#Base).[`params`](Base.md#params)

***

### tracer

### Get Signature

```ts
get tracer(): Tracer | undefined;
```

#### Returns

`Tracer` \| `undefined`

### Inherited from

[`Base`](#Base).[`tracer`](Base.md#tracer)

## Methods

### gc()

### Call Signature

```ts
static gc(force?: boolean): void;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `force?` | `boolean` |

#### Returns

`void`

#### Inherited from

[`Base`](#Base).[`gc`](Base.md#gc)

### Call Signature

```ts
static gc(className: BaseClassName): void;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `className` | [`BaseClassName`](#../type-aliases/BaseClassName) |

#### Returns

`void`

#### Inherited from

[`Base`](#Base).[`gc`](Base.md#gc)

***

### instanceCount()

```ts
static instanceCount(className: BaseClassName): number;
```

### Parameters

| Parameter | Type |
| ------ | ------ |
| `className` | [`BaseClassName`](#../type-aliases/BaseClassName) |

### Returns

`number`

### Inherited from

[`Base`](#Base).[`instanceCount`](Base.md#instancecount)

***

### instanceCounts()

```ts
static instanceCounts(): Record<BaseClassName, number>;
```

### Returns

`Record`\<[`BaseClassName`](#../type-aliases/BaseClassName), `number`\>

### Inherited from

[`Base`](#Base).[`instanceCounts`](Base.md#instancecounts)

***

### startHistory()

```ts
static startHistory(): void;
```

### Returns

`void`

### Inherited from

[`Base`](#Base).[`startHistory`](Base.md#starthistory)

***

### stopHistory()

```ts
static stopHistory(): void;
```

### Returns

`void`

### Inherited from

[`Base`](#Base).[`stopHistory`](Base.md#stophistory)

***

### clearListeners()

```ts
clearListeners(eventNames: keyof TEventData | keyof TEventData[]): this;
```

Removes all listeners for the specified event name(s).

### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `eventNames` | keyof `TEventData` \| keyof `TEventData`[] | One or more event names to clear listeners for. |

### Returns

`this`

This instance for chaining.

### Implementation of

[`EventEmitter`](#../interfaces/EventEmitter).[`clearListeners`](../interfaces/EventEmitter.md#clearlisteners)

***

### emit()

```ts
emit<TEventName, TEventArgs>(eventName: TEventName, eventArgs: TEventArgs): Promise<void>;
```

Emits an event, invoking all registered listeners concurrently.

### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `TEventName` *extends* `string` \| `number` \| `symbol` | keyof `TEventData` |
| `TEventArgs` *extends* [`EventArgs`](#../type-aliases/EventArgs) | `TEventData`\[`TEventName`\] |

### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `eventName` | `TEventName` | The event to emit. |
| `eventArgs` | `TEventArgs` | The data to pass to listeners. |

### Returns

`Promise`\<`void`\>

### Implementation of

[`EventEmitter`](#../interfaces/EventEmitter).[`emit`](../interfaces/EventEmitter.md#emit)

***

### emitSerial()

```ts
emitSerial<TEventName, TEventArgs>(eventName: TEventName, eventArgs: TEventArgs): Promise<void>;
```

Emits an event, invoking all registered listeners sequentially in order.

### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `TEventName` *extends* `string` \| `number` \| `symbol` | keyof `TEventData` |
| `TEventArgs` *extends* [`EventArgs`](#../type-aliases/EventArgs) | `TEventData`\[`TEventName`\] |

### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `eventName` | `TEventName` | The event to emit. |
| `eventArgs` | `TEventArgs` | The data to pass to listeners. |

### Returns

`Promise`\<`void`\>

### Implementation of

[`EventEmitter`](#../interfaces/EventEmitter).[`emitSerial`](../interfaces/EventEmitter.md#emitserial)

***

### listenerCount()

```ts
listenerCount(eventNames: keyof TEventData | keyof TEventData[]): number;
```

Returns the total number of listeners registered for the specified event name(s).

### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `eventNames` | keyof `TEventData` \| keyof `TEventData`[] | One or more event names to count listeners for. |

### Returns

`number`

The total listener count.

### Implementation of

[`EventEmitter`](#../interfaces/EventEmitter).[`listenerCount`](../interfaces/EventEmitter.md#listenercount)

***

### off()

```ts
off<TEventName>(eventNames: TEventName | TEventName[], listener: EventListener<TEventData[TEventName]>): void;
```

Removes a specific listener from the specified event name(s).

### Type Parameters

| Type Parameter |
| ------ |
| `TEventName` *extends* `string` \| `number` \| `symbol` |

### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `eventNames` | `TEventName` \| `TEventName`[] | One or more event names to unsubscribe from. |
| `listener` | [`EventListener`](#../type-aliases/EventListener)\<`TEventData`\[`TEventName`\]\> | The listener to remove. |

### Returns

`void`

### Implementation of

[`EventEmitter`](#../interfaces/EventEmitter).[`off`](../interfaces/EventEmitter.md#off)

***

### offAny()

```ts
offAny(listener: EventAnyListener): void;
```

Removes a wildcard listener that was receiving all events.

### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `listener` | [`EventAnyListener`](#../type-aliases/EventAnyListener) | The wildcard listener to remove. |

### Returns

`void`

### Implementation of

[`EventEmitter`](#../interfaces/EventEmitter).[`offAny`](../interfaces/EventEmitter.md#offany)

***

### on()

```ts
on<TEventName>(eventNames: TEventName | TEventName[], listener: EventListener<TEventData[TEventName]>): () => void;
```

Subscribes a listener to the specified event name(s).

### Type Parameters

| Type Parameter |
| ------ |
| `TEventName` *extends* `string` \| `number` \| `symbol` |

### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `eventNames` | `TEventName` \| `TEventName`[] | One or more event names to listen for. |
| `listener` | [`EventListener`](#../type-aliases/EventListener)\<`TEventData`\[`TEventName`\]\> | The callback to invoke when the event fires. |

### Returns

An unsubscribe function.

```ts
(): void;
```

#### Returns

`void`

### Implementation of

[`EventEmitter`](#../interfaces/EventEmitter).[`on`](../interfaces/EventEmitter.md#on)

***

### onAny()

```ts
onAny(listener: EventAnyListener): () => void;
```

Subscribes a wildcard listener that receives all events.

### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `listener` | [`EventAnyListener`](#../type-aliases/EventAnyListener) | The callback to invoke for any event. |

### Returns

An unsubscribe function.

```ts
(): void;
```

#### Returns

`void`

### Implementation of

[`EventEmitter`](#../interfaces/EventEmitter).[`onAny`](../interfaces/EventEmitter.md#onany)

***

### once()

```ts
once<TEventName>(eventName: TEventName, listener: EventListener<TEventData[TEventName]>): () => void;
```

Subscribes a listener that will be invoked only once for the specified event, then automatically removed.

### Type Parameters

| Type Parameter |
| ------ |
| `TEventName` *extends* `string` \| `number` \| `symbol` |

### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `eventName` | `TEventName` | The event to listen for. |
| `listener` | [`EventListener`](#../type-aliases/EventListener)\<`TEventData`\[`TEventName`\]\> | The callback to invoke once. |

### Returns

An unsubscribe function.

```ts
(): void;
```

#### Returns

`void`

### Implementation of

[`EventEmitter`](#../interfaces/EventEmitter).[`once`](../interfaces/EventEmitter.md#once)

  ### <a id="ConsoleLogger"></a>ConsoleLogger

[**@xylabs/sdk-js**](#../README)

***

A LevelLogger that delegates to the global `console` object.

## Extends

- [`LevelLogger`](#LevelLogger)

## Constructors

### Constructor

```ts
new ConsoleLogger(level?: LogLevelValue): ConsoleLogger;
```

### Parameters

| Parameter | Type |
| ------ | ------ |
| `level?` | [`LogLevelValue`](#../type-aliases/LogLevelValue) |

### Returns

`ConsoleLogger`

### Overrides

[`LevelLogger`](#LevelLogger).[`constructor`](LevelLogger.md#constructor)

## Properties

| Property | Modifier | Type | Inherited from |
| ------ | ------ | ------ | ------ |
| <a id="level"></a> `level` | `readonly` | [`LogLevelValue`](#../type-aliases/LogLevelValue) | [`LevelLogger`](#LevelLogger).[`level`](LevelLogger.md#level) |
| <a id="logger"></a> `logger` | `readonly` | [`Logger`](#../interfaces/Logger) | [`LevelLogger`](#LevelLogger).[`logger`](LevelLogger.md#logger) |

## Accessors

### debug

### Get Signature

```ts
get debug(): LogFunction;
```

#### Returns

[`LogFunction`](#../type-aliases/LogFunction)

### Inherited from

[`LevelLogger`](#LevelLogger).[`debug`](LevelLogger.md#debug)

***

### error

### Get Signature

```ts
get error(): LogFunction;
```

#### Returns

[`LogFunction`](#../type-aliases/LogFunction)

### Inherited from

[`LevelLogger`](#LevelLogger).[`error`](LevelLogger.md#error)

***

### info

### Get Signature

```ts
get info(): LogFunction;
```

#### Returns

[`LogFunction`](#../type-aliases/LogFunction)

### Inherited from

[`LevelLogger`](#LevelLogger).[`info`](LevelLogger.md#info)

***

### log

### Get Signature

```ts
get log(): LogFunction;
```

#### Returns

[`LogFunction`](#../type-aliases/LogFunction)

### Inherited from

[`LevelLogger`](#LevelLogger).[`log`](LevelLogger.md#log)

***

### trace

### Get Signature

```ts
get trace(): LogFunction;
```

#### Returns

[`LogFunction`](#../type-aliases/LogFunction)

### Inherited from

[`LevelLogger`](#LevelLogger).[`trace`](LevelLogger.md#trace)

***

### warn

### Get Signature

```ts
get warn(): LogFunction;
```

#### Returns

[`LogFunction`](#../type-aliases/LogFunction)

### Inherited from

[`LevelLogger`](#LevelLogger).[`warn`](LevelLogger.md#warn)

  ### <a id="EthAddressWrapper"></a>EthAddressWrapper

[**@xylabs/sdk-js**](#../README)

***

Wrapper around an Ethereum address providing parsing, formatting, validation, and checksum support.

## Constructors

### Constructor

```ts
protected new EthAddressWrapper(address: bigint): EthAddressWrapper;
```

### Parameters

| Parameter | Type |
| ------ | ------ |
| `address` | `bigint` |

### Returns

`EthAddressWrapper`

## Methods

### fromString()

```ts
static fromString(value?: string, base?: number): EthAddressWrapper | undefined;
```

### Parameters

| Parameter | Type |
| ------ | ------ |
| `value?` | `string` |
| `base?` | `number` |

### Returns

`EthAddressWrapper` \| `undefined`

***

### parse()

```ts
static parse(value: unknown, base?: number): EthAddressWrapper | undefined;
```

### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `unknown` |
| `base?` | `number` |

### Returns

`EthAddressWrapper` \| `undefined`

***

### validate()

```ts
static validate(address: string): boolean;
```

### Parameters

| Parameter | Type |
| ------ | ------ |
| `address` | `string` |

### Returns

`boolean`

***

### equals()

```ts
equals(address?: string | EthAddressWrapper | null): boolean;
```

### Parameters

| Parameter | Type |
| ------ | ------ |
| `address?` | `string` \| `EthAddressWrapper` \| `null` |

### Returns

`boolean`

***

### toBigNumber()

```ts
toBigNumber(): bigint;
```

### Returns

`bigint`

***

### toHex()

```ts
toHex(): string;
```

### Returns

`string`

***

### toJSON()

```ts
toJSON(): string;
```

### Returns

`string`

***

### toLowerCaseString()

```ts
toLowerCaseString(): string;
```

### Returns

`string`

***

### toShortString()

```ts
toShortString(length?: number): string;
```

### Parameters

| Parameter | Type |
| ------ | ------ |
| `length?` | `number` |

### Returns

`string`

***

### toString()

```ts
toString(checksum?: boolean, chainId?: string): string;
```

### Parameters

| Parameter | Type |
| ------ | ------ |
| `checksum?` | `boolean` |
| `chainId?` | `string` |

### Returns

`string`

***

### validate()

```ts
validate(): boolean;
```

### Returns

`boolean`

  ### <a id="Events"></a>Events

[**@xylabs/sdk-js**](#../README)

***

Core typed event emitter implementation supporting named events, wildcard listeners,
serial and concurrent emission, listener filtering, and debug logging.

## Extends

- [`Base`](#Base)\<[`EventsParams`](#../type-aliases/EventsParams)\>

## Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `TEventData` *extends* [`EventData`](#../type-aliases/EventData) | [`EventData`](#../type-aliases/EventData) |

## Implements

- [`EventEmitter`](#../interfaces/EventEmitter)\<`TEventData`\>

## Constructors

### Constructor

```ts
new Events<TEventData>(params?: EventsParams): Events<TEventData>;
```

### Parameters

| Parameter | Type |
| ------ | ------ |
| `params?` | [`EventsParams`](#../type-aliases/EventsParams) |

### Returns

`Events`\<`TEventData`\>

### Overrides

[`Base`](#Base).[`constructor`](Base.md#constructor)

## Properties

| Property | Modifier | Type | Description | Inherited from |
| ------ | ------ | ------ | ------ | ------ |
| <a id="defaultlogger"></a> `defaultLogger?` | `static` | [`Logger`](#../interfaces/Logger) | - | [`Base`](#Base).[`defaultLogger`](Base.md#defaultlogger) |
| <a id="globalinstances"></a> `globalInstances` | `readonly` | `Record`\<[`BaseClassName`](#../type-aliases/BaseClassName), `WeakRef`\<[`Base`](#Base)\>[]\> | - | [`Base`](#Base).[`globalInstances`](Base.md#globalinstances) |
| <a id="globalinstancescounthistory"></a> `globalInstancesCountHistory` | `readonly` | `Record`\<[`BaseClassName`](#../type-aliases/BaseClassName), `number`[]\> | - | [`Base`](#Base).[`globalInstancesCountHistory`](Base.md#globalinstancescounthistory) |
| <a id="anymap"></a> `anyMap` | `static` | `WeakMap`\<`object`, `Set`\<[`EventAnyListener`](#../type-aliases/EventAnyListener)\>\> | - | - |
| <a id="eventsmap"></a> `eventsMap` | `static` | `WeakMap`\<`object`, `Map`\<`PropertyKey`, `Set`\<[`EventListenerInfo`](#../type-aliases/EventListenerInfo)\<[`EventArgs`](#../type-aliases/EventArgs)\>\>\>\> | - | - |
| <a id="eventdata"></a> `eventData` | `public` | `TEventData` | Type-level reference to the event data shape for external type queries. | - |

## Accessors

### historyInterval

### Get Signature

```ts
get static historyInterval(): number;
```

#### Returns

`number`

### Set Signature

```ts
set static historyInterval(value: number): void;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `number` |

#### Returns

`void`

### Inherited from

[`Base`](#Base).[`historyInterval`](Base.md#historyinterval)

***

### historyTime

### Get Signature

```ts
get static historyTime(): number;
```

#### Returns

`number`

### Set Signature

```ts
set static historyTime(value: number): void;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `number` |

#### Returns

`void`

### Inherited from

[`Base`](#Base).[`historyTime`](Base.md#historytime)

***

### maxGcFrequency

### Get Signature

```ts
get static maxGcFrequency(): number;
```

#### Returns

`number`

### Set Signature

```ts
set static maxGcFrequency(value: number): void;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `number` |

#### Returns

`void`

### Inherited from

[`Base`](#Base).[`maxGcFrequency`](Base.md#maxgcfrequency)

***

### maxHistoryDepth

### Get Signature

```ts
get static maxHistoryDepth(): number;
```

#### Returns

`number`

### Inherited from

[`Base`](#Base).[`maxHistoryDepth`](Base.md#maxhistorydepth)

***

### logger

### Get Signature

```ts
get logger(): Logger | undefined;
```

#### Returns

[`Logger`](#../interfaces/Logger) \| `undefined`

### Inherited from

[`Base`](#Base).[`logger`](Base.md#logger)

***

### meter

### Get Signature

```ts
get meter(): Meter | undefined;
```

#### Returns

`Meter` \| `undefined`

### Inherited from

[`Base`](#Base).[`meter`](Base.md#meter)

***

### params

### Get Signature

```ts
get params(): BaseParams<TParams>;
```

#### Returns

[`BaseParams`](#../type-aliases/BaseParams)\<`TParams`\>

### Inherited from

[`Base`](#Base).[`params`](Base.md#params)

***

### tracer

### Get Signature

```ts
get tracer(): Tracer | undefined;
```

#### Returns

`Tracer` \| `undefined`

### Inherited from

[`Base`](#Base).[`tracer`](Base.md#tracer)

***

### isDebugEnabled

### Get Signature

```ts
get static isDebugEnabled(): boolean;
```

Whether debug mode is enabled globally or via the DEBUG environment variable.

#### Returns

`boolean`

### Set Signature

```ts
set static isDebugEnabled(newValue: boolean): void;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `newValue` | `boolean` |

#### Returns

`void`

***

### debug

### Get Signature

```ts
get debug(): DebugOptions | undefined;
```

The debug configuration for this instance, if provided.

#### Returns

[`DebugOptions`](#../type-aliases/DebugOptions) \| `undefined`

## Methods

### gc()

### Call Signature

```ts
static gc(force?: boolean): void;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `force?` | `boolean` |

#### Returns

`void`

#### Inherited from

[`Base`](#Base).[`gc`](Base.md#gc)

### Call Signature

```ts
static gc(className: BaseClassName): void;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `className` | [`BaseClassName`](#../type-aliases/BaseClassName) |

#### Returns

`void`

#### Inherited from

[`Base`](#Base).[`gc`](Base.md#gc)

***

### instanceCount()

```ts
static instanceCount(className: BaseClassName): number;
```

### Parameters

| Parameter | Type |
| ------ | ------ |
| `className` | [`BaseClassName`](#../type-aliases/BaseClassName) |

### Returns

`number`

### Inherited from

[`Base`](#Base).[`instanceCount`](Base.md#instancecount)

***

### instanceCounts()

```ts
static instanceCounts(): Record<BaseClassName, number>;
```

### Returns

`Record`\<[`BaseClassName`](#../type-aliases/BaseClassName), `number`\>

### Inherited from

[`Base`](#Base).[`instanceCounts`](Base.md#instancecounts)

***

### startHistory()

```ts
static startHistory(): void;
```

### Returns

`void`

### Inherited from

[`Base`](#Base).[`startHistory`](Base.md#starthistory)

***

### stopHistory()

```ts
static stopHistory(): void;
```

### Returns

`void`

### Inherited from

[`Base`](#Base).[`stopHistory`](Base.md#stophistory)

***

### clearListeners()

```ts
clearListeners(eventNames: keyof TEventData | keyof TEventData[]): void;
```

Removes all listeners for the specified event name(s).

### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `eventNames` | keyof `TEventData` \| keyof `TEventData`[] | One or more event names to clear listeners for. |

### Returns

`void`

### Implementation of

[`EventEmitter`](#../interfaces/EventEmitter).[`clearListeners`](../interfaces/EventEmitter.md#clearlisteners)

***

### emit()

```ts
emit<TEventName>(eventName: TEventName, eventArgs: TEventData[TEventName]): Promise<void>;
```

Emits an event, invoking all registered listeners concurrently.

### Type Parameters

| Type Parameter |
| ------ |
| `TEventName` *extends* `string` \| `number` \| `symbol` |

### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `eventName` | `TEventName` | The event to emit. |
| `eventArgs` | `TEventData`\[`TEventName`\] | The data to pass to listeners. |

### Returns

`Promise`\<`void`\>

### Implementation of

[`EventEmitter`](#../interfaces/EventEmitter).[`emit`](../interfaces/EventEmitter.md#emit)

***

### emitMetaEvent()

```ts
emitMetaEvent<TEventName>(eventName: TEventName, eventArgs: MetaEventData<TEventData>[TEventName]): Promise<boolean | undefined>;
```

Emits an internal meta event (listenerAdded or listenerRemoved).

### Type Parameters

| Type Parameter |
| ------ |
| `TEventName` *extends* keyof [`MetaEventData`](#../type-aliases/MetaEventData)\<`TEventData`\> |

### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `eventName` | `TEventName` | The meta event name. |
| `eventArgs` | [`MetaEventData`](#../type-aliases/MetaEventData)\<`TEventData`\>\[`TEventName`\] | The meta event data containing listener and event information. |

### Returns

`Promise`\<`boolean` \| `undefined`\>

True if the meta event was emitted successfully.

***

### emitSerial()

```ts
emitSerial<TEventName>(eventName: TEventName, eventArgs: TEventData[TEventName]): Promise<void>;
```

Emits an event, invoking all registered listeners sequentially in order.

### Type Parameters

| Type Parameter |
| ------ |
| `TEventName` *extends* `string` \| `number` \| `symbol` |

### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `eventName` | `TEventName` | The event to emit. |
| `eventArgs` | `TEventData`\[`TEventName`\] | The data to pass to listeners. |

### Returns

`Promise`\<`void`\>

### Implementation of

[`EventEmitter`](#../interfaces/EventEmitter).[`emitSerial`](../interfaces/EventEmitter.md#emitserial)

***

### listenerCount()

```ts
listenerCount(eventNames?: keyof TEventData | keyof TEventData[]): number;
```

Returns the total number of listeners registered for the specified event name(s).

### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `eventNames?` | keyof `TEventData` \| keyof `TEventData`[] | One or more event names to count listeners for. |

### Returns

`number`

The total listener count.

### Implementation of

[`EventEmitter`](#../interfaces/EventEmitter).[`listenerCount`](../interfaces/EventEmitter.md#listenercount)

***

### logIfDebugEnabled()

```ts
logIfDebugEnabled<TEventName>(
   type: string, 
   eventName?: TEventName, 
   eventArgs?: EventArgs): void;
```

Logs debug information if debug mode is enabled.

### Type Parameters

| Type Parameter |
| ------ |
| `TEventName` *extends* `PropertyKey` |

### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `type` | `string` | The type of operation being logged. |
| `eventName?` | `TEventName` | The event name, if applicable. |
| `eventArgs?` | [`EventArgs`](#../type-aliases/EventArgs) | The event data, if applicable. |

### Returns

`void`

***

### off()

```ts
off<TEventName, TEventListener>(eventNames: TEventName | TEventName[], listener: TEventListener): void;
```

Removes a specific listener from the specified event name(s).

### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `TEventName` *extends* `string` \| `number` \| `symbol` | - |
| `TEventListener` | [`EventListener`](#../type-aliases/EventListener)\<`TEventData`\[`TEventName`\]\> |

### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `eventNames` | `TEventName` \| `TEventName`[] | One or more event names to unsubscribe from. |
| `listener` | `TEventListener` | The listener to remove. |

### Returns

`void`

### Implementation of

[`EventEmitter`](#../interfaces/EventEmitter).[`off`](../interfaces/EventEmitter.md#off)

***

### offAny()

```ts
offAny(listener: EventAnyListener): void;
```

Removes a wildcard listener that was receiving all events.

### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `listener` | [`EventAnyListener`](#../type-aliases/EventAnyListener) | The wildcard listener to remove. |

### Returns

`void`

### Implementation of

[`EventEmitter`](#../interfaces/EventEmitter).[`offAny`](../interfaces/EventEmitter.md#offany)

***

### on()

```ts
on<TEventName>(
   eventNames: TEventName | TEventName[], 
   listener: EventListener<TEventData[TEventName]>, 
   filter?: TEventData[TEventName]): () => void;
```

Subscribes a listener to the specified event name(s).

### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `TEventName` *extends* `string` \| `number` \| `symbol` | keyof `TEventData` |

### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `eventNames` | `TEventName` \| `TEventName`[] | One or more event names to listen for. |
| `listener` | [`EventListener`](#../type-aliases/EventListener)\<`TEventData`\[`TEventName`\]\> | The callback to invoke when the event fires. |
| `filter?` | `TEventData`\[`TEventName`\] | Optional filter to selectively invoke the listener based on event data. |

### Returns

An unsubscribe function.

```ts
(): void;
```

#### Returns

`void`

### Implementation of

[`EventEmitter`](#../interfaces/EventEmitter).[`on`](../interfaces/EventEmitter.md#on)

***

### onAny()

```ts
onAny(listener: EventAnyListener): () => void;
```

Subscribes a wildcard listener that receives all events.

### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `listener` | [`EventAnyListener`](#../type-aliases/EventAnyListener) | The callback to invoke for any event. |

### Returns

An unsubscribe function.

```ts
(): void;
```

#### Returns

`void`

### Implementation of

[`EventEmitter`](#../interfaces/EventEmitter).[`onAny`](../interfaces/EventEmitter.md#onany)

***

### once()

```ts
once<TEventName>(eventName: TEventName, listener: EventListener<TEventData[TEventName]>): () => void;
```

Subscribes a listener that will be invoked only once for the specified event, then automatically removed.

### Type Parameters

| Type Parameter |
| ------ |
| `TEventName` *extends* `string` \| `number` \| `symbol` |

### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `eventName` | `TEventName` | The event to listen for. |
| `listener` | [`EventListener`](#../type-aliases/EventListener)\<`TEventData`\[`TEventName`\]\> | The callback to invoke once. |

### Returns

An unsubscribe function.

```ts
(): void;
```

#### Returns

`void`

### Implementation of

[`EventEmitter`](#../interfaces/EventEmitter).[`once`](../interfaces/EventEmitter.md#once)

  ### <a id="Factory"></a>Factory

[**@xylabs/sdk-js**](#../README)

***

A concrete factory that wraps a Creatable class with default parameters and labels.
Instances are created by merging caller-provided params over the factory defaults.

## Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `T` *extends* [`CreatableInstance`](#../interfaces/CreatableInstance) | [`CreatableInstance`](#../interfaces/CreatableInstance) |

## Implements

- [`CreatableFactory`](#../interfaces/CreatableFactory)\<`T`\>

## Constructors

### Constructor

```ts
new Factory<T>(
   creatable: Creatable<T>, 
   params?: Partial<T["params"]>, 
labels?: Labels): Factory<T>;
```

### Parameters

| Parameter | Type |
| ------ | ------ |
| `creatable` | [`Creatable`](#../interfaces/Creatable)\<`T`\> |
| `params?` | `Partial`\<`T`\[`"params"`\]\> |
| `labels?` | [`Labels`](#../interfaces/Labels) |

### Returns

`Factory`\<`T`\>

## Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| <a id="creatable"></a> `creatable` | [`Creatable`](#../interfaces/Creatable)\<`T`\> | The Creatable class this factory delegates creation to. |
| <a id="defaultparams"></a> `defaultParams?` | `Partial`\<`T`\[`"params"`\]\> | Default parameters merged into every `create` call. |
| <a id="labels"></a> `labels?` | [`Labels`](#../interfaces/Labels) | Labels identifying resources created by this factory. |

## Methods

### withParams()

```ts
static withParams<T>(
   creatableModule: Creatable<T>, 
   params?: Partial<T["params"]>, 
labels?: Labels): Factory<T>;
```

Creates a new Factory instance with the given default params and labels.

### Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* [`CreatableInstance`](#../interfaces/CreatableInstance)\<[`CreatableParams`](#../interfaces/CreatableParams), [`EventData`](#../type-aliases/EventData)\> |

### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `creatableModule` | [`Creatable`](#../interfaces/Creatable)\<`T`\> | The Creatable class to wrap |
| `params?` | `Partial`\<`T`\[`"params"`\]\> | Default parameters for new instances |
| `labels?` | [`Labels`](#../interfaces/Labels) | Labels to assign to created instances |

### Returns

`Factory`\<`T`\>

***

### create()

```ts
create(params?: Partial<T["params"]>): Promise<T>;
```

Creates a new instance, merging the provided params over the factory defaults.

### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `params?` | `Partial`\<`T`\[`"params"`\]\> | Optional parameters to override the factory defaults |

### Returns

`Promise`\<`T`\>

### Implementation of

[`CreatableFactory`](#../interfaces/CreatableFactory).[`create`](../interfaces/CreatableFactory.md#create)

  ### <a id="ForgetPromise"></a>ForgetPromise

[**@xylabs/sdk-js**](#../README)

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

| Property | Modifier | Type | Description | Inherited from |
| ------ | ------ | ------ | ------ | ------ |
| <a id="activeforgets"></a> `activeForgets` | `static` | `number` | Number of currently active (unresolved) forgotten promises. | `ForgetPromise.activeForgets` |
| <a id="exceptedforgets"></a> `exceptedForgets` | `static` | `number` | Number of forgotten promises that threw exceptions. | `ForgetPromise.exceptedForgets` |
| <a id="logger"></a> `logger` | `static` | [`Logger`](#../interfaces/Logger) | Logger instance used for error and warning output. | `ForgetPromise.logger` |

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
static awaitInactive(interval?: number, timeout?: number): Promise<number>;
```

Waits until all forgotten promises have completed.

### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `interval?` | `number` | Polling interval in milliseconds. |
| `timeout?` | `number` | Optional maximum wait time in milliseconds. |

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
   error: Error, 
   config: ForgetNodeConfig, 
   externalStackTrace?: string): void;
```

Handles exceptions, optionally terminating the process based on config.

### Parameters

| Parameter | Type |
| ------ | ------ |
| `error` | `Error` |
| `config` | [`ForgetNodeConfig`](#../interfaces/ForgetNodeConfig) |
| `externalStackTrace?` | `string` |

### Returns

`void`

### Overrides

```ts
ForgetPromise.exceptionHandler
```

***

### forget()

```ts
static forget<T>(promise: Promisable<T>, config?: ForgetNodeConfig<T>): void;
```

Forgets a promise using Node.js-specific configuration with process termination support.

### Type Parameters

| Type Parameter |
| ------ |
| `T` |

### Parameters

| Parameter | Type |
| ------ | ------ |
| `promise` | [`Promisable`](#../type-aliases/Promisable)\<`T`\> |
| `config?` | [`ForgetNodeConfig`](#../interfaces/ForgetNodeConfig)\<`T`\> |

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
   time: number, 
   config: ForgetNodeConfig, 
   externalStackTrace?: string): void;
```

Handles timeouts, optionally terminating the process based on config.

### Parameters

| Parameter | Type |
| ------ | ------ |
| `time` | `number` |
| `config` | [`ForgetNodeConfig`](#../interfaces/ForgetNodeConfig) |
| `externalStackTrace?` | `string` |

### Returns

`void`

### Overrides

```ts
ForgetPromise.timeoutHandler
```

  ### <a id="IdLogger"></a>IdLogger

[**@xylabs/sdk-js**](#../README)

***

A logger wrapper that prefixes every log message with a bracketed identifier.
Useful for distinguishing log output from different components or instances.

## Implements

- [`Logger`](#../interfaces/Logger)

## Constructors

### Constructor

```ts
new IdLogger(logger: Logger, id?: () => string): IdLogger;
```

### Parameters

| Parameter | Type |
| ------ | ------ |
| `logger` | [`Logger`](#../interfaces/Logger) |
| `id?` | () => `string` |

### Returns

`IdLogger`

## Accessors

### id

### Set Signature

```ts
set id(id: string): void;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `id` | `string` |

#### Returns

`void`

## Methods

### debug()

```ts
debug(...data: unknown[]): void;
```

### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`data` | `unknown`[] |

### Returns

`void`

### Implementation of

```ts
Logger.debug
```

***

### error()

```ts
error(...data: unknown[]): void;
```

### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`data` | `unknown`[] |

### Returns

`void`

### Implementation of

```ts
Logger.error
```

***

### info()

```ts
info(...data: unknown[]): void;
```

### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`data` | `unknown`[] |

### Returns

`void`

### Implementation of

```ts
Logger.info
```

***

### log()

```ts
log(...data: unknown[]): void;
```

### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`data` | `unknown`[] |

### Returns

`void`

### Implementation of

```ts
Logger.log
```

***

### trace()

```ts
trace(...data: unknown[]): void;
```

### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`data` | `unknown`[] |

### Returns

`void`

### Implementation of

```ts
Logger.trace
```

***

### warn()

```ts
warn(...data: unknown[]): void;
```

### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`data` | `unknown`[] |

### Returns

`void`

### Implementation of

```ts
Logger.warn
```

  ### <a id="IsObjectFactory"></a>IsObjectFactory

[**@xylabs/sdk-js**](#../README)

***

Factory class for creating type-guard functions that validate objects against a given shape and optional additional checks.

## Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* [`TypedObject`](#../type-aliases/TypedObject) |

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
| `shape?` | [`ObjectTypeShape`](#../type-aliases/ObjectTypeShape) | An optional map of property names to expected types. |
| `additionalChecks?` | [`TypeCheck`](#../type-aliases/TypeCheck)\<[`TypedObject`](#../type-aliases/TypedObject)\>[] | Optional extra type-check functions to run after shape validation. |

### Returns

[`TypeCheck`](#../type-aliases/TypeCheck)\<`T`\>

A type-guard function for type T.

  ### <a id="LevelLogger"></a>LevelLogger

[**@xylabs/sdk-js**](#../README)

***

A logger that filters messages based on a configured log level.
Methods for levels above the configured threshold return a no-op function.

## Extended by

- [`ConsoleLogger`](#ConsoleLogger)

## Implements

- [`Logger`](#../interfaces/Logger)

## Constructors

### Constructor

```ts
new LevelLogger(logger: Logger, level?: LogLevelValue): LevelLogger;
```

### Parameters

| Parameter | Type |
| ------ | ------ |
| `logger` | [`Logger`](#../interfaces/Logger) |
| `level?` | [`LogLevelValue`](#../type-aliases/LogLevelValue) |

### Returns

`LevelLogger`

## Properties

| Property | Modifier | Type |
| ------ | ------ | ------ |
| <a id="level"></a> `level` | `readonly` | [`LogLevelValue`](#../type-aliases/LogLevelValue) |
| <a id="logger"></a> `logger` | `readonly` | [`Logger`](#../interfaces/Logger) |

## Accessors

### debug

### Get Signature

```ts
get debug(): LogFunction;
```

#### Returns

[`LogFunction`](#../type-aliases/LogFunction)

### Implementation of

[`Logger`](#../interfaces/Logger).[`debug`](../interfaces/Logger.md#debug)

***

### error

### Get Signature

```ts
get error(): LogFunction;
```

#### Returns

[`LogFunction`](#../type-aliases/LogFunction)

### Implementation of

[`Logger`](#../interfaces/Logger).[`error`](../interfaces/Logger.md#error)

***

### info

### Get Signature

```ts
get info(): LogFunction;
```

#### Returns

[`LogFunction`](#../type-aliases/LogFunction)

### Implementation of

[`Logger`](#../interfaces/Logger).[`info`](../interfaces/Logger.md#info)

***

### log

### Get Signature

```ts
get log(): LogFunction;
```

#### Returns

[`LogFunction`](#../type-aliases/LogFunction)

### Implementation of

[`Logger`](#../interfaces/Logger).[`log`](../interfaces/Logger.md#log)

***

### trace

### Get Signature

```ts
get trace(): LogFunction;
```

#### Returns

[`LogFunction`](#../type-aliases/LogFunction)

### Implementation of

[`Logger`](#../interfaces/Logger).[`trace`](../interfaces/Logger.md#trace)

***

### warn

### Get Signature

```ts
get warn(): LogFunction;
```

#### Returns

[`LogFunction`](#../type-aliases/LogFunction)

### Implementation of

[`Logger`](#../interfaces/Logger).[`warn`](../interfaces/Logger.md#warn)

  ### <a id="ObjectWrapper"></a>ObjectWrapper

[**@xylabs/sdk-js**](#../README)

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

  ### <a id="PromiseEx"></a>PromiseEx

[**@xylabs/sdk-js**](#../README)

***

An extended Promise that carries an optional attached value and supports cancellation.
The value can be inspected via the `then` or `value` methods to conditionally cancel.

## Extends

- `Promise`\<`T`\>

## Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `T` | - |
| `V` | `void` |

## Constructors

### Constructor

```ts
new PromiseEx<T, V>(func: PromiseExFunc<T>, value?: V): PromiseEx<T, V>;
```

### Parameters

| Parameter | Type |
| ------ | ------ |
| `func` | [`PromiseExFunc`](#../type-aliases/PromiseExFunc)\<`T`\> |
| `value?` | `V` |

### Returns

`PromiseEx`\<`T`, `V`\>

### Overrides

```ts
Promise<T>.constructor
```

## Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| <a id="cancelled"></a> `cancelled?` | `boolean` | Whether the promise has been cancelled via a value callback. |

## Methods

### then()

```ts
then<TResult1, TResult2>(
   onfulfilled?: (value: T) => TResult1 | PromiseLike<TResult1> | null, 
   onrejected?: 
  | (reason: unknown) => TResult2 | PromiseLike<TResult2>
  | null, 
onvalue?: (value?: V) => boolean): Promise<TResult1 | TResult2>;
```

Attaches callbacks for the resolution and/or rejection of the Promise.

### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `TResult1` | `T` |
| `TResult2` | `never` |

### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `onfulfilled?` | (`value`: `T`) => `TResult1` \| `PromiseLike`\<`TResult1`\> \| `null` | The callback to execute when the Promise is resolved. |
| `onrejected?` | \| (`reason`: `unknown`) => `TResult2` \| `PromiseLike`\<`TResult2`\> \| `null` | The callback to execute when the Promise is rejected. |
| `onvalue?` | (`value?`: `V`) => `boolean` | - |

### Returns

`Promise`\<`TResult1` \| `TResult2`\>

A Promise for the completion of which ever callback is executed.

### Overrides

```ts
Promise.then
```

***

### value()

```ts
value(onvalue?: (value?: V) => boolean): this;
```

Inspects the attached value via the callback; if it returns true, marks the promise as cancelled.

### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `onvalue?` | (`value?`: `V`) => `boolean` | A callback that receives the attached value and returns whether to cancel. |

### Returns

`this`

This instance for chaining.

  ### <a id="SilentLogger"></a>SilentLogger

[**@xylabs/sdk-js**](#../README)

***

A logger that does not log anything.
This is useful when you want to disable logging
like when running unit tests or in silent mode.
It implements the `Logger` interface but all methods
are no-op functions.

## Implements

- [`Logger`](#../interfaces/Logger)

## Constructors

### Constructor

```ts
new SilentLogger(): SilentLogger;
```

### Returns

`SilentLogger`

## Properties

| Property | Modifier | Type |
| ------ | ------ | ------ |
| <a id="debug"></a> `debug` | `readonly` | (...`_data`: `unknown`[]) => `undefined` |
| <a id="error"></a> `error` | `readonly` | (...`_data`: `unknown`[]) => `undefined` |
| <a id="info"></a> `info` | `readonly` | (...`_data`: `unknown`[]) => `undefined` |
| <a id="log"></a> `log` | `readonly` | (...`_data`: `unknown`[]) => `undefined` |
| <a id="trace"></a> `trace` | `readonly` | (...`_data`: `unknown`[]) => `undefined` |
| <a id="warn"></a> `warn` | `readonly` | (...`_data`: `unknown`[]) => `undefined` |

  ### <a id="UniqueBase"></a>UniqueBase

[**@xylabs/sdk-js**](#../README)

***

Base class that registers itself as globally unique, preventing duplicate module instances.

## Extends

- [`Base`](#Base)\<`TParams`\>

## Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `TParams` *extends* [`BaseParams`](#../type-aliases/BaseParams) | [`BaseParams`](#../type-aliases/BaseParams) |

## Constructors

### Constructor

```ts
new UniqueBase<TParams>(params: BaseParams<TParams>): UniqueBase<TParams>;
```

### Parameters

| Parameter | Type |
| ------ | ------ |
| `params` | [`BaseParams`](#../type-aliases/BaseParams)\<`TParams`\> |

### Returns

`UniqueBase`\<`TParams`\>

### Overrides

[`Base`](#Base).[`constructor`](Base.md#constructor)

## Properties

| Property | Modifier | Type | Default value | Inherited from |
| ------ | ------ | ------ | ------ | ------ |
| <a id="defaultlogger"></a> `defaultLogger?` | `static` | [`Logger`](#../interfaces/Logger) | `undefined` | [`Base`](#Base).[`defaultLogger`](Base.md#defaultlogger) |
| <a id="globalinstances"></a> `globalInstances` | `readonly` | `Record`\<[`BaseClassName`](#../type-aliases/BaseClassName), `WeakRef`\<[`Base`](#Base)\>[]\> | `undefined` | [`Base`](#Base).[`globalInstances`](Base.md#globalinstances) |
| <a id="globalinstancescounthistory"></a> `globalInstancesCountHistory` | `readonly` | `Record`\<[`BaseClassName`](#../type-aliases/BaseClassName), `number`[]\> | `undefined` | [`Base`](#Base).[`globalInstancesCountHistory`](Base.md#globalinstancescounthistory) |
| <a id="uniquedomain"></a> `uniqueDomain` | `readonly` | `"xy"` | `"xy"` | - |
| <a id="uniquename"></a> `uniqueName` | `readonly` | `string` | `undefined` | - |
| <a id="uniquenamexyo"></a> `uniqueNameXyo` | `readonly` | `string` | `undefined` | - |

## Accessors

### historyInterval

### Get Signature

```ts
get static historyInterval(): number;
```

#### Returns

`number`

### Set Signature

```ts
set static historyInterval(value: number): void;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `number` |

#### Returns

`void`

### Inherited from

[`Base`](#Base).[`historyInterval`](Base.md#historyinterval)

***

### historyTime

### Get Signature

```ts
get static historyTime(): number;
```

#### Returns

`number`

### Set Signature

```ts
set static historyTime(value: number): void;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `number` |

#### Returns

`void`

### Inherited from

[`Base`](#Base).[`historyTime`](Base.md#historytime)

***

### maxGcFrequency

### Get Signature

```ts
get static maxGcFrequency(): number;
```

#### Returns

`number`

### Set Signature

```ts
set static maxGcFrequency(value: number): void;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `number` |

#### Returns

`void`

### Inherited from

[`Base`](#Base).[`maxGcFrequency`](Base.md#maxgcfrequency)

***

### maxHistoryDepth

### Get Signature

```ts
get static maxHistoryDepth(): number;
```

#### Returns

`number`

### Inherited from

[`Base`](#Base).[`maxHistoryDepth`](Base.md#maxhistorydepth)

***

### logger

### Get Signature

```ts
get logger(): Logger | undefined;
```

#### Returns

[`Logger`](#../interfaces/Logger) \| `undefined`

### Inherited from

[`Base`](#Base).[`logger`](Base.md#logger)

***

### meter

### Get Signature

```ts
get meter(): Meter | undefined;
```

#### Returns

`Meter` \| `undefined`

### Inherited from

[`Base`](#Base).[`meter`](Base.md#meter)

***

### params

### Get Signature

```ts
get params(): BaseParams<TParams>;
```

#### Returns

[`BaseParams`](#../type-aliases/BaseParams)\<`TParams`\>

### Inherited from

[`Base`](#Base).[`params`](Base.md#params)

***

### tracer

### Get Signature

```ts
get tracer(): Tracer | undefined;
```

#### Returns

`Tracer` \| `undefined`

### Inherited from

[`Base`](#Base).[`tracer`](Base.md#tracer)

## Methods

### gc()

### Call Signature

```ts
static gc(force?: boolean): void;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `force?` | `boolean` |

#### Returns

`void`

#### Inherited from

[`Base`](#Base).[`gc`](Base.md#gc)

### Call Signature

```ts
static gc(className: BaseClassName): void;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `className` | [`BaseClassName`](#../type-aliases/BaseClassName) |

#### Returns

`void`

#### Inherited from

[`Base`](#Base).[`gc`](Base.md#gc)

***

### instanceCount()

```ts
static instanceCount(className: BaseClassName): number;
```

### Parameters

| Parameter | Type |
| ------ | ------ |
| `className` | [`BaseClassName`](#../type-aliases/BaseClassName) |

### Returns

`number`

### Inherited from

[`Base`](#Base).[`instanceCount`](Base.md#instancecount)

***

### instanceCounts()

```ts
static instanceCounts(): Record<BaseClassName, number>;
```

### Returns

`Record`\<[`BaseClassName`](#../type-aliases/BaseClassName), `number`\>

### Inherited from

[`Base`](#Base).[`instanceCounts`](Base.md#instancecounts)

***

### startHistory()

```ts
static startHistory(): void;
```

### Returns

`void`

### Inherited from

[`Base`](#Base).[`startHistory`](Base.md#starthistory)

***

### stopHistory()

```ts
static stopHistory(): void;
```

### Returns

`void`

### Inherited from

[`Base`](#Base).[`stopHistory`](Base.md#stophistory)

  ### <a id="ValidatorBase"></a>ValidatorBase

[**@xylabs/sdk-js**](#../README)

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

[`Promisable`](#../type-aliases/Promisable)\<`Error`[]\>

### Implementation of

[`Validator`](#../interfaces/Validator).[`validate`](../interfaces/Validator.md#validate)

  ### <a id="XyConsoleSpanExporter"></a>XyConsoleSpanExporter

[**@xylabs/sdk-js**](#../README)

***

A console span exporter that formats spans with color-coded durations using chalk.
Spans are filtered by a configurable log level based on their duration.

## Extends

- `ConsoleSpanExporter`

## Constructors

### Constructor

```ts
new XyConsoleSpanExporter(logLevel?: number, logger?: Logger): XyConsoleSpanExporter;
```

### Parameters

| Parameter | Type |
| ------ | ------ |
| `logLevel?` | `number` |
| `logger?` | [`Logger`](#../interfaces/Logger) |

### Returns

`XyConsoleSpanExporter`

### Overrides

```ts
ConsoleSpanExporter.constructor
```

## Properties

| Property | Modifier | Type | Description |
| ------ | ------ | ------ | ------ |
| <a id="durationtologlevel"></a> `durationToLogLevel` | `readonly` | `number`[] | Duration thresholds (in ms) that map to increasing log levels. |
| <a id="logleveltochalkcolor"></a> `logLevelToChalkColor` | `readonly` | `ChalkInstance`[] | Chalk color functions corresponding to each log level. |
| <a id="logger"></a> `logger` | `public` | [`Logger`](#../interfaces/Logger) | - |

## Accessors

### logLevel

### Get Signature

```ts
get logLevel(): number;
```

The minimum log level required for a span to be exported.

#### Returns

`number`

## Methods

### export()

```ts
export(spans: ReadableSpan[]): void;
```

Export spans.

### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `spans` | `ReadableSpan`[] | - |

### Returns

`void`

### Overrides

```ts
ConsoleSpanExporter.export
```

***

### logColor()

```ts
logColor(level: number): ChalkInstance;
```

Returns the chalk color function for the given log level.

### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `level` | `number` | The log level index. |

### Returns

`ChalkInstance`

A chalk color function.

***

### spanLevel()

```ts
spanLevel(span: ReadableSpan): number;
```

Determines the log level of a span based on its duration.

### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `span` | `ReadableSpan` | The span to evaluate. |

### Returns

`number`

The numeric log level (index into durationToLogLevel).

### functions

  ### <a id="asAddress"></a>asAddress

[**@xylabs/sdk-js**](#../README)

***

## Call Signature

```ts
function asAddress(value: unknown): BrandedAddress | undefined;
```

Attempts to coerce a value into an Address type, returning undefined or throwing based on the assert config.

### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `value` | `unknown` | The value to coerce (must be a string) |

### Returns

`BrandedAddress` \| `undefined`

The value as Address, or undefined if coercion fails and assert is not set

## Call Signature

```ts
function asAddress(value: unknown, assert: AssertConfig): BrandedAddress;
```

Attempts to coerce a value into an Address type, returning undefined or throwing based on the assert config.

### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `value` | `unknown` | The value to coerce (must be a string) |
| `assert` | [`AssertConfig`](#../type-aliases/AssertConfig) | If provided, throws on failure instead of returning undefined |

### Returns

`BrandedAddress`

The value as Address, or undefined if coercion fails and assert is not set

  ### <a id="asAddressV2"></a>asAddressV2

[**@xylabs/sdk-js**](#../README)

***

```ts
function asAddressV2(value: unknown, assert?: boolean): BrandedAddress | undefined;
```

**`Alpha`**

## Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `unknown` |
| `assert?` | `boolean` |

## Returns

`BrandedAddress` \| `undefined`

  ### <a id="asEthAddress"></a>asEthAddress

[**@xylabs/sdk-js**](#../README)

***

## Call Signature

```ts
function asEthAddress(value: unknown): EthAddress | undefined;
```

Attempts to coerce a value into an EthAddress, returning undefined or throwing based on the assert config.

### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `value` | `unknown` | The value to coerce (must be a string) |

### Returns

[`EthAddress`](#../type-aliases/EthAddress) \| `undefined`

The value as EthAddress, or undefined if coercion fails and assert is not set

## Call Signature

```ts
function asEthAddress(value: unknown, assert: AssertConfig): EthAddress;
```

Attempts to coerce a value into an EthAddress, returning undefined or throwing based on the assert config.

### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `value` | `unknown` | The value to coerce (must be a string) |
| `assert` | [`AssertConfig`](#../type-aliases/AssertConfig) | If provided, throws on failure instead of returning undefined |

### Returns

[`EthAddress`](#../type-aliases/EthAddress)

The value as EthAddress, or undefined if coercion fails and assert is not set

  ### <a id="asHash"></a>asHash

[**@xylabs/sdk-js**](#../README)

***

## Call Signature

```ts
function asHash(value: unknown): BrandedHash | undefined;
```

Attempts to coerce a value into a Hash type, returning undefined or throwing based on the assert config.

### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `value` | `unknown` | The value to coerce (must be a string) |

### Returns

[`BrandedHash`](#../type-aliases/BrandedHash) \| `undefined`

The value as Hash, or undefined if coercion fails and assert is not set

## Call Signature

```ts
function asHash(value: unknown, assert: AssertConfig): BrandedHash;
```

Attempts to coerce a value into a Hash type, returning undefined or throwing based on the assert config.

### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `value` | `unknown` | The value to coerce (must be a string) |
| `assert` | [`AssertConfig`](#../type-aliases/AssertConfig) | If provided, throws on failure instead of returning undefined |

### Returns

[`BrandedHash`](#../type-aliases/BrandedHash)

The value as Hash, or undefined if coercion fails and assert is not set

  ### <a id="asHex"></a>asHex

[**@xylabs/sdk-js**](#../README)

***

## Call Signature

```ts
function asHex(value: unknown): BrandedHex | undefined;
```

Attempts to coerce a value into a Hex type, returning undefined or throwing based on the assert config.

### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `value` | `unknown` | The value to coerce (must be a string) |

### Returns

[`BrandedHex`](#../type-aliases/BrandedHex) \| `undefined`

The value as Hex, or undefined if coercion fails and assert is not set

## Call Signature

```ts
function asHex(value: unknown, assert: AssertConfig): BrandedHex;
```

Attempts to coerce a value into a Hex type, returning undefined or throwing based on the assert config.

### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `value` | `unknown` | The value to coerce (must be a string) |
| `assert` | [`AssertConfig`](#../type-aliases/AssertConfig) | If provided, throws on failure instead of returning undefined |

### Returns

[`BrandedHex`](#../type-aliases/BrandedHex)

The value as Hex, or undefined if coercion fails and assert is not set

  ### <a id="assertDefinedEx"></a>assertDefinedEx

[**@xylabs/sdk-js**](#../README)

***

## Call Signature

```ts
function assertDefinedEx<T>(expr: T | undefined, messageFunc?: AssertExMessageFunc<T>): T;
```

Asserts that a value is defined (not undefined) and returns the value.
Throws an error if the value is undefined.

### Type Parameters

| Type Parameter | Description |
| ------ | ------ |
| `T` | The type of value to check |

### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `expr` | `T` \| `undefined` | Expression to be evaluated for being defined |
| `messageFunc?` | `AssertExMessageFunc`\<`T`\> | Function that returns a message for the error if expression is undefined |

### Returns

`T`

The value of the expression (guaranteed to be defined)

### Throws

Error with the message returned by messageFunc

### Example

```typescript
// Simple usage with a message function
const value = assertDefinedEx(possiblyUndefined, () => 'Value must be defined')

// Using with type narrowing
const config: Config | undefined = loadConfig()
const safeConfig = assertDefinedEx(config, () => 'Config failed to load')
// safeConfig is now type Config (not Config | undefined)
```

## Call Signature

```ts
function assertDefinedEx<T, R>(expr: T | undefined, errorFunc?: AssertExErrorFunc<T, R>): T;
```

Asserts that a value is defined (not undefined) and returns the value.
Throws a custom error if the value is undefined.

### Type Parameters

| Type Parameter | Description |
| ------ | ------ |
| `T` | The type of value to check |
| `R` *extends* `Error` | The type of error to throw |

### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `expr` | `T` \| `undefined` | Expression to be evaluated for being defined |
| `errorFunc?` | `AssertExErrorFunc`\<`T`, `R`\> | Function that returns a custom error instance if expression is undefined |

### Returns

`T`

The value of the expression (guaranteed to be defined)

### Throws

Custom error returned by errorFunc

### Example

```typescript
// Using with a custom error
const user = assertDefinedEx(getUser(), () => new UserNotFoundError('User not found'))
```

  ### <a id="assertEx"></a>assertEx

[**@xylabs/sdk-js**](#../README)

***

## Call Signature

```ts
function assertEx<T>(expr: T | null | undefined, messageFunc?: AssertExMessageFunc<T>): T;
```

Asserts that an expression is truthy and returns the value.
Throws an error if the expression is falsy.

### Type Parameters

| Type Parameter | Description |
| ------ | ------ |
| `T` | The type of value to check |

### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `expr` | `T` \| `null` \| `undefined` | Expression to be evaluated for truthiness |
| `messageFunc?` | `AssertExMessageFunc`\<`T`\> | Function that returns a message for the error if expression is falsy |

### Returns

`T`

The value of the expression (guaranteed to be truthy)

### Throws

Error with the message returned by messageFunc

### Example

```typescript
// Simple usage with a message function
const value = assertEx(possiblyFalsy, () => 'Value must be truthy')

// Using with type narrowing
const config: Config | null = loadConfig()
const safeConfig = assertEx(config, () => 'Config failed to load')
// safeConfig is now type Config (not Config | null)
```

## Call Signature

```ts
function assertEx<T, R>(expr: T | null | undefined, errorFunc?: AssertExErrorFunc<T, R>): T;
```

Asserts that an expression is truthy and returns the value.
Throws a custom error if the expression is falsy.

### Type Parameters

| Type Parameter | Description |
| ------ | ------ |
| `T` | The type of value to check |
| `R` *extends* `Error` | The type of error to throw |

### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `expr` | `T` \| `null` \| `undefined` | Expression to be evaluated for truthiness |
| `errorFunc?` | `AssertExErrorFunc`\<`T`, `R`\> | Function that returns a custom error instance if expression is falsy |

### Returns

`T`

The value of the expression (guaranteed to be truthy)

### Throws

Custom error returned by errorFunc

### Example

```typescript
// Using with a custom error
const user = assertEx(getUser(), () => new UserNotFoundError('User not found'))
```

  ### <a id="axiosJsonConfig"></a>axiosJsonConfig

[**@xylabs/sdk-js**](#../README)

***

```ts
function axiosJsonConfig(config?: RawAxiosJsonRequestConfig<any>): RawAxiosJsonRequestConfig;
```

Creates an Axios config preconfigured for JSON requests with optional gzip compression.
Request bodies exceeding `compressLength` (default 1024 bytes) are automatically gzip-compressed.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `config?` | `RawAxiosJsonRequestConfig`\<`any`\> | Base Axios config, optionally including a `compressLength` threshold |

## Returns

`RawAxiosJsonRequestConfig`

A fully configured Axios request config with JSON transforms

  ### <a id="cloneContextWithoutSpan"></a>cloneContextWithoutSpan

[**@xylabs/sdk-js**](#../README)

***

```ts
function cloneContextWithoutSpan(activeCtx: Context, configKeys?: symbol[]): Context;
```

Creates a new OpenTelemetry context that preserves baggage and custom keys but has no active span.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `activeCtx` | `Context` | The context to clone from. |
| `configKeys?` | `symbol`[] | Additional context keys to copy. |

## Returns

`Context`

A new context with baggage but no parent span.

  ### <a id="creatable"></a>creatable

[**@xylabs/sdk-js**](#../README)

***

```ts
function creatable<T>(): <U>(constructor: U) => void;
```

Class annotation to be used to decorate Modules which support
an asynchronous creation pattern

## Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* [`CreatableInstance`](#../interfaces/CreatableInstance)\<[`CreatableParams`](#../interfaces/CreatableParams), [`EventData`](#../type-aliases/EventData)\> |

## Returns

The decorated Module requiring it implement the members
of the CreatableModule as statics properties/methods

```ts
<U>(constructor: U): void;
```

### Type Parameters

| Type Parameter |
| ------ |
| `U` *extends* [`Creatable`](#../interfaces/Creatable)\<`T`\> |

### Parameters

| Parameter | Type |
| ------ | ------ |
| `constructor` | `U` |

### Returns

`void`

  ### <a id="creatableFactory"></a>creatableFactory

[**@xylabs/sdk-js**](#../README)

***

```ts
function creatableFactory(): <U>(constructor: U) => void;
```

Class annotation to be used to decorate Modules which support
an asynchronous creation factory pattern

## Returns

The decorated Module requiring it implement the members
of the CreatableModule as statics properties/methods

```ts
<U>(constructor: U): void;
```

### Type Parameters

| Type Parameter |
| ------ |
| `U` *extends* [`CreatableFactory`](#../interfaces/CreatableFactory)\<[`CreatableInstance`](#../interfaces/CreatableInstance)\<[`CreatableParams`](#../interfaces/CreatableParams), [`EventData`](#../type-aliases/EventData)\>\> |

### Parameters

| Parameter | Type |
| ------ | ------ |
| `constructor` | `U` |

### Returns

`void`

  ### <a id="createDeepMerge"></a>createDeepMerge

[**@xylabs/sdk-js**](#../README)

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

  ### <a id="hexToBigInt"></a>hexToBigInt

[**@xylabs/sdk-js**](#../README)

***

```ts
function hexToBigInt(hex: BrandedHex): bigint;
```

Converts a Hex string to a BigInt.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `hex` | [`BrandedHex`](#../type-aliases/BrandedHex) | The hex string to convert |

## Returns

`bigint`

The BigInt representation of the hex value

  ### <a id="isAddressV2"></a>isAddressV2

[**@xylabs/sdk-js**](#../README)

***

```ts
function isAddressV2(value: unknown): value is BrandedAddress;
```

**`Alpha`**

## Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `unknown` |

## Returns

`value is BrandedAddress`

  ### <a id="isArray"></a>isArray

[**@xylabs/sdk-js**](#../README)

***

## Call Signature

```ts
function isArray(value: unknown): value is readonly unknown[];
```

Type guard that checks whether a value is an array.

### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `unknown` |

### Returns

`value is readonly unknown[]`

## Call Signature

```ts
function isArray<T>(value: T): value is Extract<T, readonly unknown[]>;
```

Type guard that checks whether a value is an array.

### Type Parameters

| Type Parameter |
| ------ |
| `T` |

### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `T` |

### Returns

`value is Extract<T, readonly unknown[]>`

  ### <a id="isArrayBuffer"></a>isArrayBuffer

[**@xylabs/sdk-js**](#../README)

***

## Call Signature

```ts
function isArrayBuffer(value: unknown): value is ArrayBuffer;
```

Type guard that checks if a value is an ArrayBuffer instance.

### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `unknown` |

### Returns

`value is ArrayBuffer`

## Call Signature

```ts
function isArrayBuffer<T>(value: T): value is Extract<T, ArrayBuffer>;
```

Type guard that checks if a value is an ArrayBuffer instance.

### Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* `ArrayBuffer` |

### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `T` |

### Returns

`value is Extract<T, ArrayBuffer>`

  ### <a id="isArrayBufferLike"></a>isArrayBufferLike

[**@xylabs/sdk-js**](#../README)

***

## Call Signature

```ts
function isArrayBufferLike(value: unknown): value is ArrayBufferLike;
```

Type guard that checks if a value conforms to the ArrayBufferLike interface (has byteLength and slice).

### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `unknown` |

### Returns

`value is ArrayBufferLike`

## Call Signature

```ts
function isArrayBufferLike<T>(value: T): value is Extract<T, ArrayBufferLike>;
```

Type guard that checks if a value conforms to the ArrayBufferLike interface (has byteLength and slice).

### Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* `ArrayBufferLike` |

### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `T` |

### Returns

`value is Extract<T, ArrayBufferLike>`

  ### <a id="isArrayBufferView"></a>isArrayBufferView

[**@xylabs/sdk-js**](#../README)

***

## Call Signature

```ts
function isArrayBufferView(value: unknown): value is ArrayBufferView<ArrayBufferLike>;
```

Type guard that checks whether a value is an ArrayBufferView (e.g., TypedArray or DataView).

### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `unknown` |

### Returns

`value is ArrayBufferView<ArrayBufferLike>`

## Call Signature

```ts
function isArrayBufferView<T>(value: T): value is Extract<T, ArrayBufferView<ArrayBufferLike>>;
```

Type guard that checks whether a value is an ArrayBufferView (e.g., TypedArray or DataView).

### Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* `ArrayBufferView`\<`ArrayBufferLike`\> |

### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `T` |

### Returns

`value is Extract<T, ArrayBufferView<ArrayBufferLike>>`

  ### <a id="isBigInt"></a>isBigInt

[**@xylabs/sdk-js**](#../README)

***

## Call Signature

```ts
function isBigInt(value: unknown): value is bigint;
```

Type guard that checks whether a value is a bigint.

### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `unknown` |

### Returns

`value is bigint`

## Call Signature

```ts
function isBigInt<T>(value: T): value is Extract<T, bigint>;
```

Type guard that checks whether a value is a bigint.

### Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* `bigint` |

### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `T` |

### Returns

`value is Extract<T, bigint>`

  ### <a id="isBlob"></a>isBlob

[**@xylabs/sdk-js**](#../README)

***

## Call Signature

```ts
function isBlob(value: unknown): value is Blob;
```

Type guard that checks whether a value is a Blob instance.

### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `unknown` |

### Returns

`value is Blob`

## Call Signature

```ts
function isBlob<T>(value: T): value is Extract<T, Blob>;
```

Type guard that checks whether a value is a Blob instance.

### Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* `Blob` |

### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `T` |

### Returns

`value is Extract<T, Blob>`

  ### <a id="isBoolean"></a>isBoolean

[**@xylabs/sdk-js**](#../README)

***

## Call Signature

```ts
function isBoolean(value: unknown): value is boolean;
```

Type guard that checks whether a value is a boolean.

### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `unknown` |

### Returns

`value is boolean`

## Call Signature

```ts
function isBoolean<T>(value: T): value is Extract<T, boolean>;
```

Type guard that checks whether a value is a boolean.

### Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* `boolean` |

### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `T` |

### Returns

`value is Extract<T, boolean>`

  ### <a id="isDataView"></a>isDataView

[**@xylabs/sdk-js**](#../README)

***

## Call Signature

```ts
function isDataView(value: unknown): value is DataView<ArrayBufferLike>;
```

Type guard that checks whether a value is a DataView instance.

### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `unknown` |

### Returns

`value is DataView<ArrayBufferLike>`

## Call Signature

```ts
function isDataView<T>(value: T): value is Extract<T, DataView<ArrayBufferLike>>;
```

Type guard that checks whether a value is a DataView instance.

### Type Parameters

| Type Parameter |
| ------ |
| `T` |

### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `T` |

### Returns

`value is Extract<T, DataView<ArrayBufferLike>>`

  ### <a id="isDate"></a>isDate

[**@xylabs/sdk-js**](#../README)

***

## Call Signature

```ts
function isDate(value: unknown): value is Date;
```

Type guard that checks whether a value is a Date instance.

### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `unknown` |

### Returns

`value is Date`

## Call Signature

```ts
function isDate<T>(value: T): value is Extract<T, Date>;
```

Type guard that checks whether a value is a Date instance.

### Type Parameters

| Type Parameter |
| ------ |
| `T` |

### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `T` |

### Returns

`value is Extract<T, Date>`

  ### <a id="isDateString"></a>isDateString

[**@xylabs/sdk-js**](#../README)

***

## Call Signature

```ts
function isDateString(value: unknown): value is string;
```

Type guard that checks whether a value is a string that can be parsed as a valid date.

### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `unknown` |

### Returns

`value is string`

## Call Signature

```ts
function isDateString<T>(value: T): value is Extract<T, string>;
```

Type guard that checks whether a value is a string that can be parsed as a valid date.

### Type Parameters

| Type Parameter |
| ------ |
| `T` |

### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `T` |

### Returns

`value is Extract<T, string>`

  ### <a id="isDefined"></a>isDefined

[**@xylabs/sdk-js**](#../README)

***

```ts
function isDefined<T>(value: T): value is Exclude<T, undefined>;
```

Type guard that checks whether a value is not undefined.

## Type Parameters

| Type Parameter |
| ------ |
| `T` |

## Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `T` |

## Returns

`value is Exclude<T, undefined>`

  ### <a id="isDefinedNotNull"></a>isDefinedNotNull

[**@xylabs/sdk-js**](#../README)

***

```ts
function isDefinedNotNull<T>(value: T): value is Exclude<T, null | undefined>;
```

Type guard that checks whether a value is neither undefined nor null.

## Type Parameters

| Type Parameter |
| ------ |
| `T` |

## Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `T` |

## Returns

value is Exclude\<T, null \| undefined\>

  ### <a id="isEmpty"></a>isEmpty

[**@xylabs/sdk-js**](#../README)

***

## Call Signature

```ts
function isEmpty<T>(value: unknown): value is T;
```

Type guard that checks whether a value is empty (empty string, empty array, or empty object).

### Type Parameters

| Type Parameter |
| ------ |
| `T` |

### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `unknown` |

### Returns

`value is T`

## Call Signature

```ts
function isEmpty<K, V, T>(value: T): value is Extract<T, Record<K, never>>;
```

Type guard that checks whether a value is empty (empty string, empty array, or empty object).

### Type Parameters

| Type Parameter |
| ------ |
| `K` *extends* [`RecordKey`](#../type-aliases/RecordKey) |
| `V` |
| `T` *extends* `Record`\<`K`, `V`\> |

### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `T` |

### Returns

`value is Extract<T, Record<K, never>>`

## Call Signature

```ts
function isEmpty<T>(value: T): value is Extract<T, never[]>;
```

Type guard that checks whether a value is empty (empty string, empty array, or empty object).

### Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* `unknown`[] |

### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `T` |

### Returns

`value is Extract<T, never[]>`

  ### <a id="isEmptyArray"></a>isEmptyArray

[**@xylabs/sdk-js**](#../README)

***

## Call Signature

```ts
function isEmptyArray(value: unknown): value is [];
```

Type guard that checks whether a value is an empty array.

### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `unknown` |

### Returns

`value is []`

## Call Signature

```ts
function isEmptyArray<T>(value: T): value is Extract<T, unknown[]>;
```

Type guard that checks whether a value is an empty array.

### Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* `unknown`[] |

### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `T` |

### Returns

`value is Extract<T, unknown[]>`

  ### <a id="isEmptyObject"></a>isEmptyObject

[**@xylabs/sdk-js**](#../README)

***

## Call Signature

```ts
function isEmptyObject(value: unknown): value is {};
```

Type guard that checks whether a value is an object with no own keys.

### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `unknown` |

### Returns

`value is {}`

## Call Signature

```ts
function isEmptyObject<K, V, T>(value: T): value is Extract<T, Record<K, never>>;
```

Type guard that checks whether a value is an object with no own keys.

### Type Parameters

| Type Parameter |
| ------ |
| `K` *extends* [`RecordKey`](#../type-aliases/RecordKey) |
| `V` |
| `T` *extends* `Record`\<`K`, `V`\> |

### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `T` |

### Returns

`value is Extract<T, Record<K, never>>`

  ### <a id="isEmptyString"></a>isEmptyString

[**@xylabs/sdk-js**](#../README)

***

## Call Signature

```ts
function isEmptyString(value: unknown): value is "";
```

Type guard that checks whether a value is an empty string.

### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `unknown` |

### Returns

`value is ""`

## Call Signature

```ts
function isEmptyString<T>(value: T): value is Extract<T, "">;
```

Type guard that checks whether a value is an empty string.

### Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* `string` |

### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `T` |

### Returns

`value is Extract<T, "">`

  ### <a id="isError"></a>isError

[**@xylabs/sdk-js**](#../README)

***

## Call Signature

```ts
function isError(value: unknown): value is Error;
```

Type guard that checks whether a value is an Error instance.

### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `unknown` |

### Returns

`value is Error`

## Call Signature

```ts
function isError<T>(value: T): value is Extract<T, Error>;
```

Type guard that checks whether a value is an Error instance.

### Type Parameters

| Type Parameter |
| ------ |
| `T` |

### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `T` |

### Returns

`value is Extract<T, Error>`

  ### <a id="isFalsy"></a>isFalsy

[**@xylabs/sdk-js**](#../README)

***

## Call Signature

```ts
function isFalsy<T>(value: T): value is Extract<T, false | "" | 0 | 0n | null | undefined>;
```

Type guard that checks whether a value is falsy (0, null, undefined, false, '', or 0n).

### Type Parameters

| Type Parameter |
| ------ |
| `T` |

### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `T` |

### Returns

value is Extract\<T, false \| "" \| 0 \| 0n \| null \| undefined\>

## Call Signature

```ts
function isFalsy<T>(value: T): value is Extract<T, false>;
```

Type guard that checks whether a value is falsy (0, null, undefined, false, '', or 0n).

### Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* `boolean` |

### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `T` |

### Returns

`value is Extract<T, false>`

## Call Signature

```ts
function isFalsy<T>(value: T): value is Extract<T, 0>;
```

Type guard that checks whether a value is falsy (0, null, undefined, false, '', or 0n).

### Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* `number` |

### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `T` |

### Returns

`value is Extract<T, 0>`

## Call Signature

```ts
function isFalsy<T>(value: T): value is Extract<T, 0n>;
```

Type guard that checks whether a value is falsy (0, null, undefined, false, '', or 0n).

### Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* `bigint` |

### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `T` |

### Returns

`value is Extract<T, 0n>`

## Call Signature

```ts
function isFalsy<T>(value: T): value is Extract<T, null>;
```

Type guard that checks whether a value is falsy (0, null, undefined, false, '', or 0n).

### Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* `null` |

### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `T` |

### Returns

`value is Extract<T, null>`

## Call Signature

```ts
function isFalsy<T>(value: T): value is Extract<T, undefined>;
```

Type guard that checks whether a value is falsy (0, null, undefined, false, '', or 0n).

### Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* `undefined` |

### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `T` |

### Returns

`value is Extract<T, undefined>`

## Call Signature

```ts
function isFalsy<T>(value: T): value is Extract<T, "">;
```

Type guard that checks whether a value is falsy (0, null, undefined, false, '', or 0n).

### Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* `string` |

### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `T` |

### Returns

`value is Extract<T, "">`

  ### <a id="isFile"></a>isFile

[**@xylabs/sdk-js**](#../README)

***

## Call Signature

```ts
function isFile(value: unknown): value is File;
```

Type guard that checks whether a value is a File instance.

### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `unknown` |

### Returns

`value is File`

## Call Signature

```ts
function isFile<T>(value: T): value is Extract<T, File>;
```

Type guard that checks whether a value is a File instance.

### Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* `File` |

### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `T` |

### Returns

`value is Extract<T, File>`

  ### <a id="isFunction"></a>isFunction

[**@xylabs/sdk-js**](#../README)

***

## Call Signature

```ts
function isFunction(value: unknown): value is AnyFunction;
```

Type guard that checks whether a value is a function.

### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `unknown` |

### Returns

`value is AnyFunction`

## Call Signature

```ts
function isFunction<T>(value: T): value is Extract<T, AnyFunction>;
```

Type guard that checks whether a value is a function.

### Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* [`AnyFunction`](#../type-aliases/AnyFunction) |

### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `T` |

### Returns

`value is Extract<T, AnyFunction>`

  ### <a id="isMap"></a>isMap

[**@xylabs/sdk-js**](#../README)

***

## Call Signature

```ts
function isMap(value: unknown): value is Map<unknown, unknown>;
```

Type guard that checks whether a value is a Map instance.

### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `unknown` |

### Returns

`value is Map<unknown, unknown>`

## Call Signature

```ts
function isMap<K, V, T>(value: T): value is Extract<T, Map<K, V>>;
```

Type guard that checks whether a value is a Map instance.

### Type Parameters

| Type Parameter |
| ------ |
| `K` |
| `V` |
| `T` *extends* `Map`\<`K`, `V`\> |

### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `T` |

### Returns

`value is Extract<T, Map<K, V>>`

  ### <a id="isNull"></a>isNull

[**@xylabs/sdk-js**](#../README)

***

## Call Signature

```ts
function isNull(value: unknown): value is null;
```

Type guard that checks whether a value is null.

### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `unknown` |

### Returns

`value is null`

## Call Signature

```ts
function isNull<T>(value: T): value is Extract<T, null>;
```

Type guard that checks whether a value is null.

### Type Parameters

| Type Parameter |
| ------ |
| `T` |

### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `T` |

### Returns

`value is Extract<T, null>`

  ### <a id="isNumber"></a>isNumber

[**@xylabs/sdk-js**](#../README)

***

## Call Signature

```ts
function isNumber(value: unknown): value is number;
```

Type guard that checks whether a value is a number.

### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `unknown` |

### Returns

`value is number`

## Call Signature

```ts
function isNumber<T>(value: T): value is Extract<T, number>;
```

Type guard that checks whether a value is a number.

### Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* `number` |

### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `T` |

### Returns

`value is Extract<T, number>`

  ### <a id="isObject"></a>isObject

[**@xylabs/sdk-js**](#../README)

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

  ### <a id="isPopulatedArray"></a>isPopulatedArray

[**@xylabs/sdk-js**](#../README)

***

## Call Signature

```ts
function isPopulatedArray(value: unknown): value is readonly unknown[];
```

Type guard that checks whether a value is a non-empty array.

### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `unknown` |

### Returns

`value is readonly unknown[]`

## Call Signature

```ts
function isPopulatedArray<T>(value: T): value is Extract<T, readonly unknown[]>;
```

Type guard that checks whether a value is a non-empty array.

### Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* `unknown`[] |

### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `T` |

### Returns

`value is Extract<T, readonly unknown[]>`

  ### <a id="isPromise"></a>isPromise

[**@xylabs/sdk-js**](#../README)

***

## Call Signature

```ts
function isPromise(value: unknown): value is Promise<unknown>;
```

Type guard that checks whether a value is a Promise instance.

### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `unknown` |

### Returns

`value is Promise<unknown>`

## Call Signature

```ts
function isPromise<T>(value: T): value is Extract<T, Promise<unknown>>;
```

Type guard that checks whether a value is a Promise instance.

### Type Parameters

| Type Parameter |
| ------ |
| `T` |

### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `T` |

### Returns

`value is Extract<T, Promise<unknown>>`

  ### <a id="isPromiseLike"></a>isPromiseLike

[**@xylabs/sdk-js**](#../README)

***

## Call Signature

```ts
function isPromiseLike(value: unknown): value is Promise<unknown>;
```

Type guard that checks whether a value is promise-like (has a `then` method).

### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `unknown` |

### Returns

`value is Promise<unknown>`

## Call Signature

```ts
function isPromiseLike<T>(value: T): value is Extract<T, Promise<unknown>>;
```

Type guard that checks whether a value is promise-like (has a `then` method).

### Type Parameters

| Type Parameter |
| ------ |
| `T` |

### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `T` |

### Returns

`value is Extract<T, Promise<unknown>>`

  ### <a id="isRegExp"></a>isRegExp

[**@xylabs/sdk-js**](#../README)

***

## Call Signature

```ts
function isRegExp(value: unknown): value is RegExp;
```

Type guard that checks whether a value is a RegExp instance.

### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `unknown` |

### Returns

`value is RegExp`

## Call Signature

```ts
function isRegExp<T>(value: T): value is Extract<T, RegExp>;
```

Type guard that checks whether a value is a RegExp instance.

### Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* `RegExp` |

### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `T` |

### Returns

`value is Extract<T, RegExp>`

  ### <a id="isSet"></a>isSet

[**@xylabs/sdk-js**](#../README)

***

## Call Signature

```ts
function isSet(value: unknown): value is Set<unknown>;
```

Type guard that checks whether a value is a Set instance.

### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `unknown` |

### Returns

`value is Set<unknown>`

## Call Signature

```ts
function isSet<T>(value: unknown): value is Extract<T, Set<unknown>>;
```

Type guard that checks whether a value is a Set instance.

### Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* `Set`\<`unknown`\> |

### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `unknown` |

### Returns

`value is Extract<T, Set<unknown>>`

  ### <a id="isString"></a>isString

[**@xylabs/sdk-js**](#../README)

***

## Call Signature

```ts
function isString(value: unknown): value is string;
```

Type guard that checks whether a value is a string.

### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `unknown` |

### Returns

`value is string`

## Call Signature

```ts
function isString<T>(value: T): value is Extract<T, string>;
```

Type guard that checks whether a value is a string.

### Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* `string` |

### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `T` |

### Returns

`value is Extract<T, string>`

  ### <a id="isSymbol"></a>isSymbol

[**@xylabs/sdk-js**](#../README)

***

## Call Signature

```ts
function isSymbol(value: unknown): value is symbol;
```

Type guard that checks whether a value is a symbol.

### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `unknown` |

### Returns

`value is symbol`

## Call Signature

```ts
function isSymbol<T>(value: T): value is Extract<T, symbol>;
```

Type guard that checks whether a value is a symbol.

### Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* `symbol` |

### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `T` |

### Returns

`value is Extract<T, symbol>`

  ### <a id="isTruthy"></a>isTruthy

[**@xylabs/sdk-js**](#../README)

***

## Call Signature

```ts
function isTruthy<T>(value: T): value is Exclude<T, false | "" | 0 | 0n | null | undefined>;
```

Type guard that checks whether a value is truthy (not 0, null, undefined, false, '', or 0n).

### Type Parameters

| Type Parameter |
| ------ |
| `T` |

### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `T` |

### Returns

value is Exclude\<T, false \| "" \| 0 \| 0n \| null \| undefined\>

## Call Signature

```ts
function isTruthy<T>(value: T): value is Extract<T, true>;
```

Type guard that checks whether a value is truthy (not 0, null, undefined, false, '', or 0n).

### Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* `boolean` |

### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `T` |

### Returns

`value is Extract<T, true>`

## Call Signature

```ts
function isTruthy<T>(value: T): value is Extract<T, number>;
```

Type guard that checks whether a value is truthy (not 0, null, undefined, false, '', or 0n).

### Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* `number` |

### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `T` |

### Returns

`value is Extract<T, number>`

## Call Signature

```ts
function isTruthy<T>(value: T): value is Extract<T, bigint>;
```

Type guard that checks whether a value is truthy (not 0, null, undefined, false, '', or 0n).

### Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* `bigint` |

### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `T` |

### Returns

`value is Extract<T, bigint>`

## Call Signature

```ts
function isTruthy<T>(value: T): value is Extract<T, null>;
```

Type guard that checks whether a value is truthy (not 0, null, undefined, false, '', or 0n).

### Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* `null` |

### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `T` |

### Returns

`value is Extract<T, null>`

## Call Signature

```ts
function isTruthy<T>(value: T): value is Extract<T, undefined>;
```

Type guard that checks whether a value is truthy (not 0, null, undefined, false, '', or 0n).

### Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* `undefined` |

### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `T` |

### Returns

`value is Extract<T, undefined>`

## Call Signature

```ts
function isTruthy<T>(value: T): value is Extract<T, string>;
```

Type guard that checks whether a value is truthy (not 0, null, undefined, false, '', or 0n).

### Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* `string` |

### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `T` |

### Returns

`value is Extract<T, string>`

  ### <a id="isUndefined"></a>isUndefined

[**@xylabs/sdk-js**](#../README)

***

## Call Signature

```ts
function isUndefined(value: unknown): value is undefined;
```

Type guard that checks whether a value is undefined.

### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `unknown` |

### Returns

`value is undefined`

## Call Signature

```ts
function isUndefined<T>(value: T): value is Extract<T, undefined>;
```

Type guard that checks whether a value is undefined.

### Type Parameters

| Type Parameter |
| ------ |
| `T` |

### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `T` |

### Returns

`value is Extract<T, undefined>`

  ### <a id="isUndefinedOrNull"></a>isUndefinedOrNull

[**@xylabs/sdk-js**](#../README)

***

## Call Signature

```ts
function isUndefinedOrNull(value: unknown): value is null | undefined;
```

Type guard that checks whether a value is undefined or null.

### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `unknown` |

### Returns

value is null \| undefined

## Call Signature

```ts
function isUndefinedOrNull<T>(value: T): value is Extract<T, null | undefined>;
```

Type guard that checks whether a value is undefined or null.

### Type Parameters

| Type Parameter |
| ------ |
| `T` |

### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `T` |

### Returns

value is Extract\<T, null \| undefined\>

  ### <a id="isWeakMap"></a>isWeakMap

[**@xylabs/sdk-js**](#../README)

***

## Call Signature

```ts
function isWeakMap(value: unknown): value is WeakMap<WeakKey, unknown>;
```

Type guard that checks whether a value is a WeakMap instance.

### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `unknown` |

### Returns

`value is WeakMap<WeakKey, unknown>`

## Call Signature

```ts
function isWeakMap<K, V, T>(value: T): value is Extract<T, WeakMap<K, V>>;
```

Type guard that checks whether a value is a WeakMap instance.

### Type Parameters

| Type Parameter |
| ------ |
| `K` *extends* `WeakKey` |
| `V` |
| `T` *extends* `WeakMap`\<`K`, `V`\> |

### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `T` |

### Returns

`value is Extract<T, WeakMap<K, V>>`

  ### <a id="isWeakSet"></a>isWeakSet

[**@xylabs/sdk-js**](#../README)

***

## Call Signature

```ts
function isWeakSet(value: unknown): value is WeakSet<WeakKey>;
```

Type guard that checks whether a value is a WeakSet instance.

### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `unknown` |

### Returns

`value is WeakSet<WeakKey>`

## Call Signature

```ts
function isWeakSet<K, T>(value: T): value is Extract<T, WeakSet<K>>;
```

Type guard that checks whether a value is a WeakSet instance.

### Type Parameters

| Type Parameter |
| ------ |
| `K` *extends* `WeakKey` |
| `T` *extends* `WeakSet`\<`K`\> |

### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `T` |

### Returns

`value is Extract<T, WeakSet<K>>`

  ### <a id="span"></a>span

[**@xylabs/sdk-js**](#../README)

***

```ts
function span<T>(
   name: string, 
   fn: () => T, 
   tracer?: Tracer): T;
```

Executes a synchronous function within an OpenTelemetry span, recording status and exceptions.

## Type Parameters

| Type Parameter |
| ------ |
| `T` |

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `name` | `string` | The span name. |
| `fn` | () => `T` | The function to execute. |
| `tracer?` | `Tracer` | Optional tracer to use. |

## Returns

`T`

The return value of `fn`.

  ### <a id="spanAsync"></a>spanAsync

[**@xylabs/sdk-js**](#../README)

***

```ts
function spanAsync<T>(
   name: string, 
   fn: () => Promise<T>, 
config?: SpanConfig): Promise<T>;
```

Executes an async function within an OpenTelemetry span, with optional time budget monitoring.

## Type Parameters

| Type Parameter |
| ------ |
| `T` |

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `name` | `string` | The span name. |
| `fn` | () => `Promise`\<`T`\> | The async function to execute. |
| `config?` | [`SpanConfig`](#../interfaces/SpanConfig) | Optional span configuration (tracer, logger, time budget). |

## Returns

`Promise`\<`T`\>

The resolved value of `fn`.

  ### <a id="spanDurationInMillis"></a>spanDurationInMillis

[**@xylabs/sdk-js**](#../README)

***

```ts
function spanDurationInMillis(span: ReadableSpan): number;
```

Calculates the duration of a span in milliseconds from its high-resolution time tuple.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `span` | `ReadableSpan` | The span to measure. |

## Returns

`number`

The span duration in milliseconds.

  ### <a id="spanRoot"></a>spanRoot

[**@xylabs/sdk-js**](#../README)

***

```ts
function spanRoot<T>(
   name: string, 
   fn: () => T, 
   tracer?: Tracer): T;
```

Executes a synchronous function within a new root span that has no parent, even if a span is already active.

## Type Parameters

| Type Parameter |
| ------ |
| `T` |

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `name` | `string` | The span name. |
| `fn` | () => `T` | The function to execute. |
| `tracer?` | `Tracer` | Optional tracer to use. |

## Returns

`T`

The return value of `fn`.

  ### <a id="spanRootAsync"></a>spanRootAsync

[**@xylabs/sdk-js**](#../README)

***

```ts
function spanRootAsync<T>(
   name: string, 
   fn: () => Promise<T>, 
config?: SpanConfig): Promise<T>;
```

Executes an async function within a new root span (no parent), with optional time budget monitoring.

## Type Parameters

| Type Parameter |
| ------ |
| `T` |

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `name` | `string` | The span name. |
| `fn` | () => `Promise`\<`T`\> | The async function to execute. |
| `config?` | [`SpanConfig`](#../interfaces/SpanConfig) | Optional span configuration (tracer, logger, time budget). |

## Returns

`Promise`\<`T`\>

The resolved value of `fn`.

  ### <a id="staticImplements"></a>staticImplements

[**@xylabs/sdk-js**](#../README)

***

```ts
function staticImplements<T>(): <U>(constructor: U) => void;
```

Annotation to decorate classes which implement static methods

## Type Parameters

| Type Parameter |
| ------ |
| `T` |

## Returns

The decorated class requiring it to implement
the members of the the type as static properties/methods

```ts
<U>(constructor: U): void;
```

### Type Parameters

| Type Parameter |
| ------ |
| `U` |

### Parameters

| Parameter | Type |
| ------ | ------ |
| `constructor` | `U` |

### Returns

`void`

  ### <a id="timeBudget"></a>timeBudget

[**@xylabs/sdk-js**](#../README)

***

```ts
function timeBudget<TResult>(
   name: string, 
   logger: Logger | undefined, 
   func: () => Promise<TResult>, 
   budget: number, 
status?: boolean): Promise<TResult>;
```

Executes an async function and logs a warning if it exceeds the given time budget.

## Type Parameters

| Type Parameter |
| ------ |
| `TResult` |

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `name` | `string` | A label for the function, used in warning messages. |
| `logger` | [`Logger`](#../interfaces/Logger) \| `undefined` | The logger to use for budget-exceeded warnings. |
| `func` | () => `Promise`\<`TResult`\> | The async function to execute. |
| `budget` | `number` | The time budget in milliseconds. |
| `status?` | `boolean` | If true, logs periodic warnings while the function is still running. |

## Returns

`Promise`\<`TResult`\>

The result of the executed function.

  ### <a id="toAddressV2"></a>toAddressV2

[**@xylabs/sdk-js**](#../README)

***

```ts
function toAddressV2(value: unknown, assert?: boolean): BrandedAddress | undefined;
```

**`Alpha`**

## Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `unknown` |
| `assert?` | `boolean` |

## Returns

`BrandedAddress` \| `undefined`

  ### <a id="toArrayBuffer"></a>toArrayBuffer

[**@xylabs/sdk-js**](#../README)

***

## Call Signature

```ts
function toArrayBuffer(
   value: undefined, 
   padLength?: number, 
   base?: number): undefined;
```

Converts a string, bigint, or ArrayBufferLike to an ArrayBufferLike, with optional zero-padding.

### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `value` | `undefined` | The value to convert (hex string, bigint, or existing buffer) |
| `padLength?` | `number` | Minimum byte length, left-padded with zeros if needed |
| `base?` | `number` | Numeric base for string parsing (default 16) |

### Returns

`undefined`

The resulting ArrayBufferLike, or undefined if value is undefined

## Call Signature

```ts
function toArrayBuffer(
   value: string | bigint | ArrayBufferLike, 
   padLength?: number, 
   base?: number): ArrayBufferLike;
```

Converts a string, bigint, or ArrayBufferLike to an ArrayBufferLike, with optional zero-padding.

### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `value` | `string` \| `bigint` \| `ArrayBufferLike` | The value to convert (hex string, bigint, or existing buffer) |
| `padLength?` | `number` | Minimum byte length, left-padded with zeros if needed |
| `base?` | `number` | Numeric base for string parsing (default 16) |

### Returns

`ArrayBufferLike`

The resulting ArrayBufferLike, or undefined if value is undefined

## Call Signature

```ts
function toArrayBuffer(
   value: string | bigint | ArrayBufferLike | undefined, 
   padLength?: number, 
   base?: number): ArrayBufferLike | undefined;
```

Converts a string, bigint, or ArrayBufferLike to an ArrayBufferLike, with optional zero-padding.

### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `value` | `string` \| `bigint` \| `ArrayBufferLike` \| `undefined` | The value to convert (hex string, bigint, or existing buffer) |
| `padLength?` | `number` | Minimum byte length, left-padded with zeros if needed |
| `base?` | `number` | Numeric base for string parsing (default 16) |

### Returns

`ArrayBufferLike` \| `undefined`

The resulting ArrayBufferLike, or undefined if value is undefined

  ### <a id="toPromise"></a>toPromise

[**@xylabs/sdk-js**](#../README)

***

```ts
function toPromise<T>(value: Promisable<T>): Promise<T>;
```

Wraps a value in a Promise if it is not already one.

## Type Parameters

| Type Parameter |
| ------ |
| `T` |

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `value` | [`Promisable`](#../type-aliases/Promisable)\<`T`\> | A value that may or may not be a Promise. |

## Returns

`Promise`\<`T`\>

A Promise resolving to the value.

  ### <a id="toUint8Array"></a>toUint8Array

[**@xylabs/sdk-js**](#../README)

***

## Call Signature

```ts
function toUint8Array(
   value: undefined, 
   padLength?: number, 
   base?: number): undefined;
```

Converts a string, bigint, or ArrayBufferLike to a Uint8Array, with optional zero-padding.

### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `value` | `undefined` | The value to convert |
| `padLength?` | `number` | Minimum byte length, left-padded with zeros if needed |
| `base?` | `number` | Numeric base for string parsing (default 16) |

### Returns

`undefined`

The resulting Uint8Array, or undefined if value is undefined

## Call Signature

```ts
function toUint8Array(
   value: string | bigint | ArrayBufferLike, 
   padLength?: number, 
   base?: number): Uint8Array;
```

Converts a string, bigint, or ArrayBufferLike to a Uint8Array, with optional zero-padding.

### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `value` | `string` \| `bigint` \| `ArrayBufferLike` | The value to convert |
| `padLength?` | `number` | Minimum byte length, left-padded with zeros if needed |
| `base?` | `number` | Numeric base for string parsing (default 16) |

### Returns

`Uint8Array`

The resulting Uint8Array, or undefined if value is undefined

## Call Signature

```ts
function toUint8Array(
   value: string | bigint | ArrayBufferLike | undefined, 
   padLength?: number, 
   base?: number): Uint8Array<ArrayBufferLike> | undefined;
```

Converts a string, bigint, or ArrayBufferLike to a Uint8Array, with optional zero-padding.

### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `value` | `string` \| `bigint` \| `ArrayBufferLike` \| `undefined` | The value to convert |
| `padLength?` | `number` | Minimum byte length, left-padded with zeros if needed |
| `base?` | `number` | Numeric base for string parsing (default 16) |

### Returns

`Uint8Array`\<`ArrayBufferLike`\> \| `undefined`

The resulting Uint8Array, or undefined if value is undefined

  ### <a id="zodAllFactory"></a>zodAllFactory

[**@xylabs/sdk-js**](#../README)

***

```ts
function zodAllFactory<T, TName>(zod: ZodType<T>, name: TName): {
[x: string]: {
<T_1>  (value: T_1): T_1 & T | undefined;
<T_1>  (value: T_1, assert: ZodFactoryConfig): T_1 & T;
};
};
```

**`Alpha`**

Creates a bundle of `is`, `as`, and `to` factory functions for a given zod schema.

## Type Parameters

| Type Parameter |
| ------ |
| `T` |
| `TName` *extends* `string` |

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `zod` | `ZodType`\<`T`\> | The zod schema to validate against |
| `name` | `TName` | The name used to suffix the generated function names (e.g. 'Address' produces `isAddress`, `asAddress`, `toAddress`) |

## Returns

```ts
{
[x: string]: {
<T_1>  (value: T_1): T_1 & T | undefined;
<T_1>  (value: T_1, assert: ZodFactoryConfig): T_1 & T;
};
}
```

An object containing `is<Name>`, `as<Name>`, and `to<Name>` functions

  ### <a id="zodAsAsyncFactory"></a>zodAsAsyncFactory

[**@xylabs/sdk-js**](#../README)

***

```ts
function zodAsAsyncFactory<TZod>(zod: ZodType<TZod>, name: string): {
<T>  (value: T): Promise<T & TZod | undefined>;
<T>  (value: T, assert: ZodFactoryConfig): Promise<T & TZod>;
};
```

Creates an async function that validates a value against a zod schema and returns it with a narrowed type.
Uses `safeParseAsync` for schemas with async refinements. When called without an assert config, returns undefined on failure.

## Type Parameters

| Type Parameter |
| ------ |
| `TZod` |

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `zod` | `ZodType`\<`TZod`\> | The zod schema to validate against |
| `name` | `string` | A name used in error messages for identification |

## Returns

An async function that validates and narrows the type of a value

```ts
<T>(value: T): Promise<T & TZod | undefined>;
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

`Promise`\<`T` & `TZod` \| `undefined`\>

```ts
<T>(value: T, assert: ZodFactoryConfig): Promise<T & TZod>;
```

### Type Parameters

| Type Parameter |
| ------ |
| `T` |

### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `T` |
| `assert` | [`ZodFactoryConfig`](#../type-aliases/ZodFactoryConfig) |

### Returns

`Promise`\<`T` & `TZod`\>

  ### <a id="zodAsFactory"></a>zodAsFactory

[**@xylabs/sdk-js**](#../README)

***

```ts
function zodAsFactory<TZod>(zod: ZodType<TZod>, name: string): {
<T>  (value: T): T & TZod | undefined;
<T>  (value: T, assert: ZodFactoryConfig): T & TZod;
};
```

Creates a function that validates a value against a zod schema and returns it with a narrowed type.
When called without an assert config, returns undefined on failure. When called with an assert config, throws on failure.

## Type Parameters

| Type Parameter |
| ------ |
| `TZod` |

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `zod` | `ZodType`\<`TZod`\> | The zod schema to validate against |
| `name` | `string` | A name used in error messages for identification |

## Returns

A function that validates and narrows the type of a value

```ts
<T>(value: T): T & TZod | undefined;
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

`T` & `TZod` \| `undefined`

```ts
<T>(value: T, assert: ZodFactoryConfig): T & TZod;
```

### Type Parameters

| Type Parameter |
| ------ |
| `T` |

### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `T` |
| `assert` | [`ZodFactoryConfig`](#../type-aliases/ZodFactoryConfig) |

### Returns

`T` & `TZod`

  ### <a id="zodIsFactory"></a>zodIsFactory

[**@xylabs/sdk-js**](#../README)

***

```ts
function zodIsFactory<TZod>(zod: ZodType<TZod>): <T>(value: T) => value is T & TZod;
```

Creates a type guard function that checks if a value matches a zod schema.

## Type Parameters

| Type Parameter |
| ------ |
| `TZod` |

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `zod` | `ZodType`\<`TZod`\> | The zod schema to validate against |

## Returns

A type guard function that returns true if the value passes validation

```ts
<T>(value: T): value is T & TZod;
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

`value is T & TZod`

  ### <a id="zodToAsyncFactory"></a>zodToAsyncFactory

[**@xylabs/sdk-js**](#../README)

***

```ts
function zodToAsyncFactory<TZod>(zod: ZodType<TZod>, name: string): {
<T>  (value: T): Promise<T & TZod | undefined>;
<T>  (value: T, assert: ZodFactoryConfig): Promise<T & TZod>;
};
```

Creates an async function that converts a value to the zod schema type, delegating to `zodAsAsyncFactory` internally.
Provides overloads for optional assertion: without assert config resolves to undefined on failure, with assert config throws on failure.

## Type Parameters

| Type Parameter |
| ------ |
| `TZod` |

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `zod` | `ZodType`\<`TZod`\> | The zod schema to validate against |
| `name` | `string` | A name used in error messages for identification |

## Returns

An async function that validates and converts a value to the schema type

```ts
<T>(value: T): Promise<T & TZod | undefined>;
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

`Promise`\<`T` & `TZod` \| `undefined`\>

```ts
<T>(value: T, assert: ZodFactoryConfig): Promise<T & TZod>;
```

### Type Parameters

| Type Parameter |
| ------ |
| `T` |

### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `T` |
| `assert` | [`ZodFactoryConfig`](#../type-aliases/ZodFactoryConfig) |

### Returns

`Promise`\<`T` & `TZod`\>

  ### <a id="zodToFactory"></a>zodToFactory

[**@xylabs/sdk-js**](#../README)

***

```ts
function zodToFactory<TZod>(zod: ZodType<TZod>, name: string): {
<T>  (value: T): T & TZod | undefined;
<T>  (value: T, assert: ZodFactoryConfig): T & TZod;
};
```

Creates a function that converts a value to the zod schema type, delegating to `zodAsFactory` internally.
Provides overloads for optional assertion: without assert config returns undefined on failure, with assert config throws on failure.

## Type Parameters

| Type Parameter |
| ------ |
| `TZod` |

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `zod` | `ZodType`\<`TZod`\> | The zod schema to validate against |
| `name` | `string` | A name used in error messages for identification |

## Returns

A function that validates and converts a value to the schema type

```ts
<T>(value: T): T & TZod | undefined;
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

`T` & `TZod` \| `undefined`

```ts
<T>(value: T, assert: ZodFactoryConfig): T & TZod;
```

### Type Parameters

| Type Parameter |
| ------ |
| `T` |

### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `T` |
| `assert` | [`ZodFactoryConfig`](#../type-aliases/ZodFactoryConfig) |

### Returns

`T` & `TZod`

### interfaces

  ### <a id="ApiConfig"></a>ApiConfig

[**@xylabs/sdk-js**](#../README)

***

Configuration for connecting to an API, including domain, authentication, and user identification.

## Properties

| Property | Type |
| ------ | ------ |
| <a id="apidomain"></a> `apiDomain` | `string` |
| <a id="apikey"></a> `apiKey?` | `string` |
| <a id="jwttoken"></a> `jwtToken?` | `string` |
| <a id="userid"></a> `userid?` | `string` |

  ### <a id="BaseEmitterParamsFields"></a>BaseEmitterParamsFields

[**@xylabs/sdk-js**](#../README)

***

Fields specific to BaseEmitter configuration parameters.

  ### <a id="Creatable"></a>Creatable

[**@xylabs/sdk-js**](#../README)

***

Static interface for classes that support asynchronous creation.
Provides the `create`, `createHandler`, and `paramsHandler` static methods
used to construct instances through the creatable lifecycle.

## Extended by

- [`CreatableWithFactory`](#CreatableWithFactory)

## Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `T` *extends* [`CreatableInstance`](#CreatableInstance) | [`CreatableInstance`](#CreatableInstance) |

## Constructors

### Constructor

```ts
new Creatable(key: unknown, params: Partial<CreatableParams>): T & AbstractCreatable<T["params"], EventData>;
```

Constructs a new raw instance. Should not be called directly; use `create` instead.

### Parameters

| Parameter | Type |
| ------ | ------ |
| `key` | `unknown` |
| `params` | `Partial`\<[`CreatableParams`](#CreatableParams)\> |

### Returns

`T` & [`AbstractCreatable`](#../classes/AbstractCreatable)\<`T`\[`"params"`\], [`EventData`](#../type-aliases/EventData)\>

## Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| <a id="defaultlogger"></a> `defaultLogger?` | [`Logger`](#Logger) | Optional default logger shared across instances created by this class. |

## Methods

### create()

```ts
create<T>(this: Creatable<T>, params?: Partial<T["params"]>): Promise<T>;
```

Asynchronously creates and initializes a new instance with the given params.

### Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* [`CreatableInstance`](#CreatableInstance)\<[`CreatableParams`](#CreatableParams), [`EventData`](#../type-aliases/EventData)\> |

### Parameters

| Parameter | Type |
| ------ | ------ |
| `this` | `Creatable`\<`T`\> |
| `params?` | `Partial`\<`T`\[`"params"`\]\> |

### Returns

`Promise`\<`T`\>

***

### createHandler()

```ts
createHandler<T>(this: Creatable<T>, instance: T): Promisable<T>;
```

Hook called after construction to perform additional initialization on the instance.

### Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* [`CreatableInstance`](#CreatableInstance)\<[`CreatableParams`](#CreatableParams), [`EventData`](#../type-aliases/EventData)\> |

### Parameters

| Parameter | Type |
| ------ | ------ |
| `this` | `Creatable`\<`T`\> |
| `instance` | `T` |

### Returns

[`Promisable`](#../type-aliases/Promisable)\<`T`\>

***

### paramsHandler()

```ts
paramsHandler<T>(this: Creatable<T>, params?: Partial<T["params"]>): Promisable<T["params"] & RequiredCreatableParams<void>>;
```

Hook called to validate and transform params before instance construction.

### Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* [`CreatableInstance`](#CreatableInstance)\<[`CreatableParams`](#CreatableParams), [`EventData`](#../type-aliases/EventData)\> |

### Parameters

| Parameter | Type |
| ------ | ------ |
| `this` | `Creatable`\<`T`\> |
| `params?` | `Partial`\<`T`\[`"params"`\]\> |

### Returns

[`Promisable`](#../type-aliases/Promisable)\<`T`\[`"params"`\] & [`RequiredCreatableParams`](#RequiredCreatableParams)\<`void`\>\>

  ### <a id="CreatableFactory"></a>CreatableFactory

[**@xylabs/sdk-js**](#../README)

***

A factory interface for creating instances of a Creatable with pre-configured parameters.
Unlike the full Creatable, this only exposes the `create` method.

## Extends

- `Omit`\<[`Creatable`](#Creatable)\<`T`\>, 
  \| `"create"`
  \| `"createHandler"`
  \| `"paramsHandler"`
  \| `"defaultLogger"`
  \| `"factory"`\>

## Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `T` *extends* [`CreatableInstance`](#CreatableInstance) | [`CreatableInstance`](#CreatableInstance) |

## Methods

### create()

```ts
create(this: CreatableFactory<T>, params?: Partial<T["params"]>): Promise<T>;
```

Creates a new instance, merging the provided params with the factory's defaults.

### Parameters

| Parameter | Type |
| ------ | ------ |
| `this` | `CreatableFactory`\<`T`\> |
| `params?` | `Partial`\<`T`\[`"params"`\]\> |

### Returns

`Promise`\<`T`\>

  ### <a id="CreatableInstance"></a>CreatableInstance

[**@xylabs/sdk-js**](#../README)

***

Represents a created instance with a managed lifecycle (start/stop) and event emission.

## Extends

- [`EventEmitter`](#EventEmitter)\<`TEventData`\>

## Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `TParams` *extends* [`CreatableParams`](#CreatableParams) | [`CreatableParams`](#CreatableParams) |
| `TEventData` *extends* [`EventData`](#../type-aliases/EventData) | [`EventData`](#../type-aliases/EventData) |

## Properties

| Property | Type | Description | Overrides |
| ------ | ------ | ------ | ------ |
| <a id="eventdata"></a> `eventData` | `TEventData` | The event data type associated with this instance. | [`EventEmitter`](#EventEmitter).[`eventData`](EventEmitter.md#eventdata) |
| <a id="name"></a> `name` | [`CreatableName`](#../type-aliases/CreatableName) | The name identifier for this instance. | - |
| <a id="params"></a> `params` | `TParams` | The parameters used to configure this instance. | - |
| <a id="start"></a> `start` | () => `Promise`\<`boolean`\> | Starts the instance. Resolves to true if started successfully. | - |
| <a id="stop"></a> `stop` | () => `Promise`\<`boolean`\> | Stops the instance. Resolves to true if stopped successfully. | - |

## Methods

### clearListeners()

```ts
clearListeners(eventNames: keyof TEventData | keyof TEventData[]): void;
```

Removes all listeners for the specified event name(s).

### Parameters

| Parameter | Type |
| ------ | ------ |
| `eventNames` | keyof `TEventData` \| keyof `TEventData`[] |

### Returns

`void`

### Inherited from

[`EventEmitter`](#EventEmitter).[`clearListeners`](EventEmitter.md#clearlisteners)

***

### emit()

```ts
emit<TEventName>(eventName: TEventName, eventArgs: TEventData[TEventName]): Promise<void>;
```

Emits an event, invoking all registered listeners concurrently.

### Type Parameters

| Type Parameter |
| ------ |
| `TEventName` *extends* `string` \| `number` \| `symbol` |

### Parameters

| Parameter | Type |
| ------ | ------ |
| `eventName` | `TEventName` |
| `eventArgs` | `TEventData`\[`TEventName`\] |

### Returns

`Promise`\<`void`\>

### Inherited from

[`EventEmitter`](#EventEmitter).[`emit`](EventEmitter.md#emit)

***

### emitSerial()

```ts
emitSerial<TEventName>(eventName: TEventName, eventArgs: TEventData[TEventName]): Promise<void>;
```

Emits an event, invoking all registered listeners sequentially in order.

### Type Parameters

| Type Parameter |
| ------ |
| `TEventName` *extends* `string` \| `number` \| `symbol` |

### Parameters

| Parameter | Type |
| ------ | ------ |
| `eventName` | `TEventName` |
| `eventArgs` | `TEventData`\[`TEventName`\] |

### Returns

`Promise`\<`void`\>

### Inherited from

[`EventEmitter`](#EventEmitter).[`emitSerial`](EventEmitter.md#emitserial)

***

### listenerCount()

```ts
listenerCount(eventNames: keyof TEventData | keyof TEventData[]): number;
```

Returns the total number of listeners registered for the specified event name(s).

### Parameters

| Parameter | Type |
| ------ | ------ |
| `eventNames` | keyof `TEventData` \| keyof `TEventData`[] |

### Returns

`number`

### Inherited from

[`EventEmitter`](#EventEmitter).[`listenerCount`](EventEmitter.md#listenercount)

***

### off()

```ts
off<TEventName>(eventNames: TEventName | TEventName[], listener: EventListener<TEventData[TEventName]>): void;
```

Removes a specific listener from the specified event name(s).

### Type Parameters

| Type Parameter |
| ------ |
| `TEventName` *extends* `string` \| `number` \| `symbol` |

### Parameters

| Parameter | Type |
| ------ | ------ |
| `eventNames` | `TEventName` \| `TEventName`[] |
| `listener` | [`EventListener`](#../type-aliases/EventListener)\<`TEventData`\[`TEventName`\]\> |

### Returns

`void`

### Inherited from

[`EventEmitter`](#EventEmitter).[`off`](EventEmitter.md#off)

***

### offAny()

```ts
offAny(listener: 
  | Promise<void>
  | EventAnyListener): void;
```

Removes a wildcard listener that was receiving all events.

### Parameters

| Parameter | Type |
| ------ | ------ |
| `listener` | \| `Promise`\<`void`\> \| [`EventAnyListener`](#../type-aliases/EventAnyListener) |

### Returns

`void`

### Inherited from

[`EventEmitter`](#EventEmitter).[`offAny`](EventEmitter.md#offany)

***

### on()

```ts
on<TEventName>(eventNames: TEventName | TEventName[], listener: EventListener<TEventData[TEventName]>): EventUnsubscribeFunction;
```

Subscribes a listener to the specified event name(s) and returns an unsubscribe function.

### Type Parameters

| Type Parameter |
| ------ |
| `TEventName` *extends* `string` \| `number` \| `symbol` |

### Parameters

| Parameter | Type |
| ------ | ------ |
| `eventNames` | `TEventName` \| `TEventName`[] |
| `listener` | [`EventListener`](#../type-aliases/EventListener)\<`TEventData`\[`TEventName`\]\> |

### Returns

[`EventUnsubscribeFunction`](#../type-aliases/EventUnsubscribeFunction)

### Inherited from

[`EventEmitter`](#EventEmitter).[`on`](EventEmitter.md#on)

***

### onAny()

```ts
onAny(listener: EventAnyListener): EventUnsubscribeFunction;
```

Subscribes a wildcard listener that receives all events and returns an unsubscribe function.

### Parameters

| Parameter | Type |
| ------ | ------ |
| `listener` | [`EventAnyListener`](#../type-aliases/EventAnyListener) |

### Returns

[`EventUnsubscribeFunction`](#../type-aliases/EventUnsubscribeFunction)

### Inherited from

[`EventEmitter`](#EventEmitter).[`onAny`](EventEmitter.md#onany)

***

### once()

```ts
once<TEventName>(eventName: TEventName, listener: EventListener<TEventData[TEventName]>): EventUnsubscribeFunction;
```

Subscribes a listener that will be invoked only once for the specified event, then automatically removed.

### Type Parameters

| Type Parameter |
| ------ |
| `TEventName` *extends* `string` \| `number` \| `symbol` |

### Parameters

| Parameter | Type |
| ------ | ------ |
| `eventName` | `TEventName` |
| `listener` | [`EventListener`](#../type-aliases/EventListener)\<`TEventData`\[`TEventName`\]\> |

### Returns

[`EventUnsubscribeFunction`](#../type-aliases/EventUnsubscribeFunction)

### Inherited from

[`EventEmitter`](#EventEmitter).[`once`](EventEmitter.md#once)

  ### <a id="CreatableParams"></a>CreatableParams

[**@xylabs/sdk-js**](#../README)

***

Parameters for creating a creatable instance, combining required params with emitter params.

## Extends

- [`RequiredCreatableParams`](#RequiredCreatableParams).[`BaseEmitterParams`](#../type-aliases/BaseEmitterParams)

## Properties

| Property | Type | Description | Inherited from |
| ------ | ------ | ------ | ------ |
| <a id="logger"></a> `logger?` | [`Logger`](#Logger) | - | [`RequiredCreatableParams`](#RequiredCreatableParams).[`logger`](RequiredCreatableParams.md#logger) |
| <a id="meterprovider"></a> `meterProvider?` | `MeterProvider` | - | [`RequiredCreatableParams`](#RequiredCreatableParams).[`meterProvider`](RequiredCreatableParams.md#meterprovider) |
| <a id="traceprovider"></a> `traceProvider?` | `TracerProvider` | - | [`RequiredCreatableParams`](#RequiredCreatableParams).[`traceProvider`](RequiredCreatableParams.md#traceprovider) |
| <a id="name"></a> `name?` | [`CreatableName`](#../type-aliases/CreatableName) | Optional name identifying this creatable instance. | [`RequiredCreatableParams`](#RequiredCreatableParams).[`name`](RequiredCreatableParams.md#name) |
| <a id="statusreporter"></a> `statusReporter?` | [`CreatableStatusReporter`](#CreatableStatusReporter)\<`void`\> | Optional reporter for broadcasting status changes. | [`RequiredCreatableParams`](#RequiredCreatableParams).[`statusReporter`](RequiredCreatableParams.md#statusreporter) |

  ### <a id="CreatableStatusReporter"></a>CreatableStatusReporter

[**@xylabs/sdk-js**](#../README)

***

Reports status changes for a creatable, supporting progress tracking and error reporting.

## Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `TAdditionalStatus` *extends* `void` \| `string` | `void` |

## Methods

### report()

### Call Signature

```ts
report(
   name: BaseClassName, 
   status: 
  | "creating"
  | "created"
  | "starting"
  | "started"
  | "stopping"
  | "stopped"
  | Exclude<TAdditionalStatus extends void ? StandardCreatableStatus : TAdditionalStatus, "error">, 
   progress: number): void;
```

Report a non-error status with a numeric progress value.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `name` | [`BaseClassName`](#../type-aliases/BaseClassName) |
| `status` | \| `"creating"` \| `"created"` \| `"starting"` \| `"started"` \| `"stopping"` \| `"stopped"` \| `Exclude`\<`TAdditionalStatus` *extends* `void` ? [`StandardCreatableStatus`](#../type-aliases/StandardCreatableStatus) : `TAdditionalStatus`, `"error"`\> |
| `progress` | `number` |

#### Returns

`void`

### Call Signature

```ts
report(
   name: BaseClassName, 
   status: 
  | "error"
  | Extract<TAdditionalStatus extends void ? StandardCreatableStatus : TAdditionalStatus, "error">, 
   error: Error): void;
```

Report an error status with the associated Error.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `name` | [`BaseClassName`](#../type-aliases/BaseClassName) |
| `status` | \| `"error"` \| `Extract`\<`TAdditionalStatus` *extends* `void` ? [`StandardCreatableStatus`](#../type-aliases/StandardCreatableStatus) : `TAdditionalStatus`, `"error"`\> |
| `error` | `Error` |

#### Returns

`void`

### Call Signature

```ts
report(name: BaseClassName, status: CreatableStatus<TAdditionalStatus>): void;
```

Report a status change without progress or error details.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `name` | [`BaseClassName`](#../type-aliases/BaseClassName) |
| `status` | [`CreatableStatus`](#../type-aliases/CreatableStatus)\<`TAdditionalStatus`\> |

#### Returns

`void`

  ### <a id="CreatableWithFactory"></a>CreatableWithFactory

[**@xylabs/sdk-js**](#../README)

***

Extends Creatable with a `factory` method that produces pre-configured CreatableFactory instances.

## Extends

- [`Creatable`](#Creatable)\<`T`\>

## Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `T` *extends* [`CreatableInstance`](#CreatableInstance) | [`CreatableInstance`](#CreatableInstance) |

## Constructors

### Constructor

```ts
new CreatableWithFactory(key: unknown, params: Partial<CreatableParams>): T & AbstractCreatable<T["params"], EventData>;
```

Constructs a new raw instance. Should not be called directly; use `create` instead.

### Parameters

| Parameter | Type |
| ------ | ------ |
| `key` | `unknown` |
| `params` | `Partial`\<[`CreatableParams`](#CreatableParams)\> |

### Returns

`T` & [`AbstractCreatable`](#../classes/AbstractCreatable)\<`T`\[`"params"`\], [`EventData`](#../type-aliases/EventData)\>

### Inherited from

[`Creatable`](#Creatable).[`constructor`](Creatable.md#constructor)

## Properties

| Property | Type | Description | Inherited from |
| ------ | ------ | ------ | ------ |
| <a id="defaultlogger"></a> `defaultLogger?` | [`Logger`](#Logger) | Optional default logger shared across instances created by this class. | [`Creatable`](#Creatable).[`defaultLogger`](Creatable.md#defaultlogger) |

## Methods

### create()

```ts
create<T>(this: Creatable<T>, params?: Partial<T["params"]>): Promise<T>;
```

Asynchronously creates and initializes a new instance with the given params.

### Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* [`CreatableInstance`](#CreatableInstance)\<[`CreatableParams`](#CreatableParams), [`EventData`](#../type-aliases/EventData)\> |

### Parameters

| Parameter | Type |
| ------ | ------ |
| `this` | [`Creatable`](#Creatable)\<`T`\> |
| `params?` | `Partial`\<`T`\[`"params"`\]\> |

### Returns

`Promise`\<`T`\>

### Inherited from

[`Creatable`](#Creatable).[`create`](Creatable.md#create)

***

### createHandler()

```ts
createHandler<T>(this: Creatable<T>, instance: T): Promisable<T>;
```

Hook called after construction to perform additional initialization on the instance.

### Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* [`CreatableInstance`](#CreatableInstance)\<[`CreatableParams`](#CreatableParams), [`EventData`](#../type-aliases/EventData)\> |

### Parameters

| Parameter | Type |
| ------ | ------ |
| `this` | [`Creatable`](#Creatable)\<`T`\> |
| `instance` | `T` |

### Returns

[`Promisable`](#../type-aliases/Promisable)\<`T`\>

### Inherited from

[`Creatable`](#Creatable).[`createHandler`](Creatable.md#createhandler)

***

### paramsHandler()

```ts
paramsHandler<T>(this: Creatable<T>, params?: Partial<T["params"]>): Promisable<T["params"] & RequiredCreatableParams<void>>;
```

Hook called to validate and transform params before instance construction.

### Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* [`CreatableInstance`](#CreatableInstance)\<[`CreatableParams`](#CreatableParams), [`EventData`](#../type-aliases/EventData)\> |

### Parameters

| Parameter | Type |
| ------ | ------ |
| `this` | [`Creatable`](#Creatable)\<`T`\> |
| `params?` | `Partial`\<`T`\[`"params"`\]\> |

### Returns

[`Promisable`](#../type-aliases/Promisable)\<`T`\[`"params"`\] & [`RequiredCreatableParams`](#RequiredCreatableParams)\<`void`\>\>

### Inherited from

[`Creatable`](#Creatable).[`paramsHandler`](Creatable.md#paramshandler)

***

### factory()

```ts
factory<T>(
   this: Creatable<T>, 
   params?: Partial<T["params"]>, 
labels?: Labels): CreatableFactory<T>;
```

Creates a factory with the given default params and labels.

### Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* [`CreatableInstance`](#CreatableInstance)\<[`CreatableParams`](#CreatableParams), [`EventData`](#../type-aliases/EventData)\> |

### Parameters

| Parameter | Type |
| ------ | ------ |
| `this` | [`Creatable`](#Creatable)\<`T`\> |
| `params?` | `Partial`\<`T`\[`"params"`\]\> |
| `labels?` | [`Labels`](#Labels) |

### Returns

[`CreatableFactory`](#CreatableFactory)\<`T`\>

  ### <a id="EventEmitter"></a>EventEmitter

[**@xylabs/sdk-js**](#../README)

***

Interface for a typed event emitter that supports subscribing, unsubscribing, and emitting events.

## Extended by

- [`CreatableInstance`](#CreatableInstance)

## Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* [`EventData`](#../type-aliases/EventData) |

## Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| <a id="eventdata"></a> `eventData` | `T` | Type-level reference to the event data shape for external type queries. |

## Methods

### clearListeners()

```ts
clearListeners(eventNames: keyof T | keyof T[]): void;
```

Removes all listeners for the specified event name(s).

### Parameters

| Parameter | Type |
| ------ | ------ |
| `eventNames` | keyof `T` \| keyof `T`[] |

### Returns

`void`

***

### emit()

```ts
emit<TEventName>(eventName: TEventName, eventArgs: T[TEventName]): Promise<void>;
```

Emits an event, invoking all registered listeners concurrently.

### Type Parameters

| Type Parameter |
| ------ |
| `TEventName` *extends* `string` \| `number` \| `symbol` |

### Parameters

| Parameter | Type |
| ------ | ------ |
| `eventName` | `TEventName` |
| `eventArgs` | `T`\[`TEventName`\] |

### Returns

`Promise`\<`void`\>

***

### emitSerial()

```ts
emitSerial<TEventName>(eventName: TEventName, eventArgs: T[TEventName]): Promise<void>;
```

Emits an event, invoking all registered listeners sequentially in order.

### Type Parameters

| Type Parameter |
| ------ |
| `TEventName` *extends* `string` \| `number` \| `symbol` |

### Parameters

| Parameter | Type |
| ------ | ------ |
| `eventName` | `TEventName` |
| `eventArgs` | `T`\[`TEventName`\] |

### Returns

`Promise`\<`void`\>

***

### listenerCount()

```ts
listenerCount(eventNames: keyof T | keyof T[]): number;
```

Returns the total number of listeners registered for the specified event name(s).

### Parameters

| Parameter | Type |
| ------ | ------ |
| `eventNames` | keyof `T` \| keyof `T`[] |

### Returns

`number`

***

### off()

```ts
off<TEventName>(eventNames: TEventName | TEventName[], listener: EventListener<T[TEventName]>): void;
```

Removes a specific listener from the specified event name(s).

### Type Parameters

| Type Parameter |
| ------ |
| `TEventName` *extends* `string` \| `number` \| `symbol` |

### Parameters

| Parameter | Type |
| ------ | ------ |
| `eventNames` | `TEventName` \| `TEventName`[] |
| `listener` | [`EventListener`](#../type-aliases/EventListener)\<`T`\[`TEventName`\]\> |

### Returns

`void`

***

### offAny()

```ts
offAny(listener: 
  | Promise<void>
  | EventAnyListener): void;
```

Removes a wildcard listener that was receiving all events.

### Parameters

| Parameter | Type |
| ------ | ------ |
| `listener` | \| `Promise`\<`void`\> \| [`EventAnyListener`](#../type-aliases/EventAnyListener) |

### Returns

`void`

***

### on()

```ts
on<TEventName>(eventNames: TEventName | TEventName[], listener: EventListener<T[TEventName]>): EventUnsubscribeFunction;
```

Subscribes a listener to the specified event name(s) and returns an unsubscribe function.

### Type Parameters

| Type Parameter |
| ------ |
| `TEventName` *extends* `string` \| `number` \| `symbol` |

### Parameters

| Parameter | Type |
| ------ | ------ |
| `eventNames` | `TEventName` \| `TEventName`[] |
| `listener` | [`EventListener`](#../type-aliases/EventListener)\<`T`\[`TEventName`\]\> |

### Returns

[`EventUnsubscribeFunction`](#../type-aliases/EventUnsubscribeFunction)

***

### onAny()

```ts
onAny(listener: EventAnyListener): EventUnsubscribeFunction;
```

Subscribes a wildcard listener that receives all events and returns an unsubscribe function.

### Parameters

| Parameter | Type |
| ------ | ------ |
| `listener` | [`EventAnyListener`](#../type-aliases/EventAnyListener) |

### Returns

[`EventUnsubscribeFunction`](#../type-aliases/EventUnsubscribeFunction)

***

### once()

```ts
once<TEventName>(eventName: TEventName, listener: EventListener<T[TEventName]>): EventUnsubscribeFunction;
```

Subscribes a listener that will be invoked only once for the specified event, then automatically removed.

### Type Parameters

| Type Parameter |
| ------ |
| `TEventName` *extends* `string` \| `number` \| `symbol` |

### Parameters

| Parameter | Type |
| ------ | ------ |
| `eventName` | `TEventName` |
| `listener` | [`EventListener`](#../type-aliases/EventListener)\<`T`\[`TEventName`\]\> |

### Returns

[`EventUnsubscribeFunction`](#../type-aliases/EventUnsubscribeFunction)

  ### <a id="ForgetNodeConfig"></a>ForgetNodeConfig

[**@xylabs/sdk-js**](#../README)

***

Node.js-specific forget configuration that extends ForgetConfig with process termination options.

## Extends

- `ForgetConfig`\<`T`\>

## Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `T` | `any` |

## Properties

| Property | Type | Description | Inherited from |
| ------ | ------ | ------ | ------ |
| <a id="name"></a> `name?` | `string` | Optional name for identifying the forgotten promise in logs. | `ForgetConfig.name` |
| <a id="oncancel"></a> `onCancel?` | () => `void` | Called when the promise is cancelled due to timeout. | `ForgetConfig.onCancel` |
| <a id="oncomplete"></a> `onComplete?` | (`result`: \[`T` \| `undefined`, `Error` \| `undefined`\]) => `void` | Called when the promise completes, with a tuple of [result, error]. | `ForgetConfig.onComplete` |
| <a id="onexception"></a> `onException?` | (`error`: `Error`) => `void` | Called when an exception occurs outside the promise itself. | `ForgetConfig.onException` |
| <a id="timeout"></a> `timeout?` | `number` | Timeout in milliseconds after which the promise is considered timed out. | `ForgetConfig.timeout` |
| <a id="terminateonexception"></a> `terminateOnException?` | `boolean` | Terminate the process on an exception that happens outside of the promise being forgotten. | - |
| <a id="terminateontimeout"></a> `terminateOnTimeout?` | `boolean` | Terminate the process if the promise times out. | - |

  ### <a id="HexConfig"></a>HexConfig

[**@xylabs/sdk-js**](#../README)

***

Configuration of validation and output format

## Properties

| Property | Type |
| ------ | ------ |
| <a id="bitlength"></a> `bitLength?` | `number` |
| <a id="bytesize"></a> `byteSize?` | `number` |
| <a id="prefix"></a> `prefix?` | `boolean` |

  ### <a id="KeyValueStore"></a>KeyValueStore

[**@xylabs/sdk-js**](#../README)

***

A read/write storage device.

## Extends

- [`ReadonlyKeyValueStore`](#ReadonlyKeyValueStore)\<`TValue`, `TKey`\>

## Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `TValue` | - |
| `TKey` | `string` |

## Methods

### get()

```ts
get(key: TKey): Promisable<TValue | undefined>;
```

Returns a promise that resolves to the value for the given key.

### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `key` | `TKey` | The key to get the value for. |

### Returns

[`Promisable`](#../type-aliases/Promisable)\<`TValue` \| `undefined`\>

### Inherited from

[`ReadonlyKeyValueStore`](#ReadonlyKeyValueStore).[`get`](ReadonlyKeyValueStore.md#get)

***

### keys()?

```ts
optional keys(): Promisable<TKey[]>;
```

The keys an array of keys.

### Returns

[`Promisable`](#../type-aliases/Promisable)\<`TKey`[]\>

### Inherited from

[`ReadonlyKeyValueStore`](#ReadonlyKeyValueStore).[`keys`](ReadonlyKeyValueStore.md#keys)

***

### clear()?

```ts
optional clear(): Promisable<void>;
```

Removes all entries from the store.

### Returns

[`Promisable`](#../type-aliases/Promisable)\<`void`\>

***

### delete()

```ts
delete(key: TKey): Promisable<void>;
```

Deletes the entry with the given key.

### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `key` | `TKey` | The key of the entry to delete |

### Returns

[`Promisable`](#../type-aliases/Promisable)\<`void`\>

***

### set()

```ts
set(key: TKey, value: TValue): Promisable<void>;
```

Sets a value for the given key, creating or updating the entry.

### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `key` | `TKey` | The key to set |
| `value` | `TValue` | The value to store |

### Returns

[`Promisable`](#../type-aliases/Promisable)\<`void`\>

  ### <a id="Labels"></a>Labels

[**@xylabs/sdk-js**](#../README)

***

Object used to represent labels identifying a resource.

## Indexable

```ts
[key: string]: string | undefined
```

  ### <a id="Logger"></a>Logger

[**@xylabs/sdk-js**](#../README)

***

Interface to handle overlap between Winston &
`console` with as much congruency as possible.

## Properties

| Property | Type |
| ------ | ------ |
| <a id="debug"></a> `debug` | [`LogFunction`](#../type-aliases/LogFunction) |
| <a id="error"></a> `error` | [`LogFunction`](#../type-aliases/LogFunction) |
| <a id="info"></a> `info` | [`LogFunction`](#../type-aliases/LogFunction) |
| <a id="log"></a> `log` | [`LogFunction`](#../type-aliases/LogFunction) |
| <a id="trace"></a> `trace` | [`LogFunction`](#../type-aliases/LogFunction) |
| <a id="warn"></a> `warn` | [`LogFunction`](#../type-aliases/LogFunction) |

  ### <a id="ObjectTypeConfig"></a>ObjectTypeConfig

[**@xylabs/sdk-js**](#../README)

***

Configuration options for object type checking.

## Extends

- [`TypeCheckConfig`](#TypeCheckConfig)

## Properties

| Property | Type | Inherited from |
| ------ | ------ | ------ |
| <a id="log"></a> `log?` | `boolean` \| [`Logger`](#Logger) | [`TypeCheckConfig`](#TypeCheckConfig).[`log`](TypeCheckConfig.md#log) |

  ### <a id="PromiseType"></a>PromiseType

[**@xylabs/sdk-js**](#../README)

***

An interface representing any thenable (promise-like) object.

## Properties

| Property | Type |
| ------ | ------ |
| <a id="then"></a> `then` | () => `unknown` |

  ### <a id="ReadonlyKeyValueStore"></a>ReadonlyKeyValueStore

[**@xylabs/sdk-js**](#../README)

***

A readonly storage device.

## Extended by

- [`KeyValueStore`](#KeyValueStore)

## Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `TValue` | - |
| `TKey` | `string` |

## Methods

### get()

```ts
get(key: TKey): Promisable<TValue | undefined>;
```

Returns a promise that resolves to the value for the given key.

### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `key` | `TKey` | The key to get the value for. |

### Returns

[`Promisable`](#../type-aliases/Promisable)\<`TValue` \| `undefined`\>

***

### keys()?

```ts
optional keys(): Promisable<TKey[]>;
```

The keys an array of keys.

### Returns

[`Promisable`](#../type-aliases/Promisable)\<`TKey`[]\>

  ### <a id="RequiredCreatableParams"></a>RequiredCreatableParams

[**@xylabs/sdk-js**](#../README)

***

The minimum required parameters for constructing a creatable.

## Extends

- [`BaseEmitterParams`](#../type-aliases/BaseEmitterParams)

## Extended by

- [`CreatableParams`](#CreatableParams)

## Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `TAdditionalStatus` *extends* [`CreatableStatus`](#../type-aliases/CreatableStatus) \| `void` | `void` |

## Properties

| Property | Type | Description | Inherited from |
| ------ | ------ | ------ | ------ |
| <a id="logger"></a> `logger?` | [`Logger`](#Logger) | - | `BaseEmitterParams.logger` |
| <a id="meterprovider"></a> `meterProvider?` | `MeterProvider` | - | `BaseEmitterParams.meterProvider` |
| <a id="traceprovider"></a> `traceProvider?` | `TracerProvider` | - | `BaseEmitterParams.traceProvider` |
| <a id="name"></a> `name?` | [`CreatableName`](#../type-aliases/CreatableName) | Optional name identifying this creatable instance. | - |
| <a id="statusreporter"></a> `statusReporter?` | [`CreatableStatusReporter`](#CreatableStatusReporter)\<`TAdditionalStatus`\> | Optional reporter for broadcasting status changes. | - |

  ### <a id="RetryConfig"></a>RetryConfig

[**@xylabs/sdk-js**](#../README)

***

Configuration for retry behavior.

## Extended by

- [`RetryConfigWithComplete`](#RetryConfigWithComplete)

## Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| <a id="backoff"></a> `backoff?` | `number` | Multiplier applied to the interval after each retry. Defaults to 2. |
| <a id="interval"></a> `interval?` | `number` | Initial delay in milliseconds between retries. Defaults to 100. |
| <a id="retries"></a> `retries?` | `number` | Maximum number of retry attempts. Defaults to 0 (no retries). |

  ### <a id="RetryConfigWithComplete"></a>RetryConfigWithComplete

[**@xylabs/sdk-js**](#../README)

***

Retry configuration extended with a custom completion check.

## Extends

- [`RetryConfig`](#RetryConfig)

## Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `T` | `unknown` |

## Properties

| Property | Type | Description | Inherited from |
| ------ | ------ | ------ | ------ |
| <a id="backoff"></a> `backoff?` | `number` | Multiplier applied to the interval after each retry. Defaults to 2. | [`RetryConfig`](#RetryConfig).[`backoff`](RetryConfig.md#backoff) |
| <a id="interval"></a> `interval?` | `number` | Initial delay in milliseconds between retries. Defaults to 100. | [`RetryConfig`](#RetryConfig).[`interval`](RetryConfig.md#interval) |
| <a id="retries"></a> `retries?` | `number` | Maximum number of retry attempts. Defaults to 0 (no retries). | [`RetryConfig`](#RetryConfig).[`retries`](RetryConfig.md#retries) |
| <a id="complete"></a> `complete?` | (`result?`: `T`) => `boolean` | Determines whether the result is considered complete. Defaults to checking for a defined value. | - |

  ### <a id="SpanConfig"></a>SpanConfig

[**@xylabs/sdk-js**](#../README)

***

Configuration options for span creation and execution.

## Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| <a id="logger"></a> `logger?` | [`Logger`](#Logger) \| `null` | Optional logger for time budget warnings. Falls back to console if not provided. |
| <a id="timebudgetlimit"></a> `timeBudgetLimit?` | `number` | Maximum allowed execution time in milliseconds before logging a warning. |
| <a id="tracer"></a> `tracer?` | `Tracer` | OpenTelemetry tracer to use. Defaults to a tracer named after the span. |

  ### <a id="TypeCheckConfig"></a>TypeCheckConfig

[**@xylabs/sdk-js**](#../README)

***

Configuration options for type check functions, with optional logging.

## Extended by

- [`ObjectTypeConfig`](#ObjectTypeConfig)
- [`TypeCheckRequiredConfig`](#TypeCheckRequiredConfig)
- [`TypeCheckOptionalConfig`](#TypeCheckOptionalConfig)

## Properties

| Property | Type |
| ------ | ------ |
| <a id="log"></a> `log?` | `boolean` \| [`Logger`](#Logger) |

  ### <a id="TypeCheckOptionalConfig"></a>TypeCheckOptionalConfig

[**@xylabs/sdk-js**](#../README)

***

Type check configuration that marks the value as optional, returning undefined on failure.

## Extends

- [`TypeCheckConfig`](#TypeCheckConfig)

## Properties

| Property | Type | Inherited from |
| ------ | ------ | ------ |
| <a id="log"></a> `log?` | `boolean` \| [`Logger`](#Logger) | [`TypeCheckConfig`](#TypeCheckConfig).[`log`](TypeCheckConfig.md#log) |
| <a id="required"></a> `required` | `false` | - |

  ### <a id="TypeCheckRequiredConfig"></a>TypeCheckRequiredConfig

[**@xylabs/sdk-js**](#../README)

***

Type check configuration that marks the value as required, causing assertions on failure.

## Extends

- [`TypeCheckConfig`](#TypeCheckConfig)

## Properties

| Property | Type | Inherited from |
| ------ | ------ | ------ |
| <a id="log"></a> `log?` | `boolean` \| [`Logger`](#Logger) | [`TypeCheckConfig`](#TypeCheckConfig).[`log`](TypeCheckConfig.md#log) |
| <a id="required"></a> `required` | `true` | - |

  ### <a id="Validator"></a>Validator

[**@xylabs/sdk-js**](#../README)

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

[`Promisable`](#../type-aliases/Promisable)\<`Error`[]\>

  ### <a id="WithLabels"></a>WithLabels

[**@xylabs/sdk-js**](#../README)

***

Interface for objects that have labels.

## Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `T` *extends* [`Labels`](#Labels) | [`Labels`](#Labels) |

## Properties

| Property | Type |
| ------ | ------ |
| <a id="labels"></a> `labels` | `T` |

  ### <a id="WithOptionalLabels"></a>WithOptionalLabels

[**@xylabs/sdk-js**](#../README)

***

Interface for objects that have labels.

## Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `T` *extends* [`Labels`](#Labels) | [`Labels`](#Labels) |

## Properties

| Property | Type |
| ------ | ------ |
| <a id="labels"></a> `labels?` | `T` |

  ### <a id="ZodFactoryConfigObject"></a>ZodFactoryConfigObject

[**@xylabs/sdk-js**](#../README)

***

Configuration object for zod factory functions, providing a name for error messages.

## Properties

| Property | Type |
| ------ | ------ |
| <a id="name"></a> `name` | `string` |

### type-aliases

  ### <a id="Address"></a>Address

[**@xylabs/sdk-js**](#../README)

***

```ts
type Address = z.infer<typeof AddressZod>;
```

A validated 20-byte address string type, inferred from the AddressZod schema.

  ### <a id="AddressTransformZodType"></a>AddressTransformZodType

[**@xylabs/sdk-js**](#../README)

***

```ts
type AddressTransformZodType = z.infer<typeof AddressTransformZod>;
```

The output type of AddressTransformZod after parsing and transformation.

  ### <a id="AddressValidationZodType"></a>AddressValidationZodType

[**@xylabs/sdk-js**](#../README)

***

```ts
type AddressValidationZodType = z.infer<typeof AddressValidationZod>;
```

The output type of AddressValidationZod after parsing.

  ### <a id="AllZodFactories"></a>AllZodFactories

[**@xylabs/sdk-js**](#../README)

***

```ts
type AllZodFactories<TType, TName> = { [K in `is${TName}`]: ReturnType<typeof zodIsFactory> } & { [K in `as${TName}`]: ReturnType<typeof zodAsFactory> } & { [K in `to${TName}`]: ReturnType<typeof zodToFactory> };
```

**`Alpha`**

## Type Parameters

| Type Parameter |
| ------ |
| `TType` |
| `TName` *extends* `string` |

  ### <a id="AnyFunction"></a>AnyFunction

[**@xylabs/sdk-js**](#../README)

***

```ts
type AnyFunction = (...args: unknown[]) => unknown;
```

A function type that accepts any arguments and returns unknown.

## Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | `unknown`[] |

## Returns

`unknown`

  ### <a id="AnyNonPromise"></a>AnyNonPromise

[**@xylabs/sdk-js**](#../README)

***

```ts
type AnyNonPromise = Exclude<TypedValue, PromiseType>;
```

Any non-promise typed value, excluding thenables.

  ### <a id="AnyObject"></a>AnyObject

[**@xylabs/sdk-js**](#../README)

***

```ts
type AnyObject = EmptyObject & Partial<Record<TypedKey, unknown>>;
```

Any object, which means that it does not enforce the set of fields that it has.  Extending from AnyObject
will result in a type that includes the universal set of field names

  ### <a id="ApiStage"></a>ApiStage

[**@xylabs/sdk-js**](#../README)

***

```ts
type ApiStage = EnumValue<typeof ApiStage>;
```

A valid API stage value ('prod', 'beta', or 'local').

  ### <a id="AsOptionalTypeFunction"></a>AsOptionalTypeFunction

[**@xylabs/sdk-js**](#../README)

***

```ts
type AsOptionalTypeFunction<T> = <TType>(value: AnyNonPromise) => TType | undefined;
```

A simplified type-narrowing function that returns T or undefined, without assertion support.

## Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `T` *extends* [`AnyNonPromise`](#AnyNonPromise) | [`AnyNonPromise`](#AnyNonPromise) |

## Type Parameters

| Type Parameter |
| ------ |
| `TType` *extends* [`AnyNonPromise`](#AnyNonPromise) |

## Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | [`AnyNonPromise`](#AnyNonPromise) |

## Returns

`TType` \| `undefined`

  ### <a id="AsTypeFunction"></a>AsTypeFunction

[**@xylabs/sdk-js**](#../README)

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
| `T` *extends* [`AnyNonPromise`](#AnyNonPromise) | [`AnyNonPromise`](#AnyNonPromise) |

## Call Signature

```ts
<TType>(value: AnyNonPromise): TType | undefined;
```

### Type Parameters

| Type Parameter |
| ------ |
| `TType` *extends* [`AnyNonPromise`](#AnyNonPromise) |

### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | [`AnyNonPromise`](#AnyNonPromise) |

### Returns

`TType` \| `undefined`

## Call Signature

```ts
<TType>(value: AnyNonPromise, config: TypeCheckRequiredConfig): TType;
```

### Type Parameters

| Type Parameter |
| ------ |
| `TType` *extends* [`AnyNonPromise`](#AnyNonPromise) |

### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | [`AnyNonPromise`](#AnyNonPromise) |
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
| `TType` *extends* [`AnyNonPromise`](#AnyNonPromise) |

### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | [`AnyNonPromise`](#AnyNonPromise) |
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
| `TType` *extends* [`AnyNonPromise`](#AnyNonPromise) |

### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | [`AnyNonPromise`](#AnyNonPromise) |
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
| `TType` *extends* [`AnyNonPromise`](#AnyNonPromise) |

### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | [`AnyNonPromise`](#AnyNonPromise) |
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
| `TType` *extends* [`AnyNonPromise`](#AnyNonPromise) |

### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | [`AnyNonPromise`](#AnyNonPromise) |
| `assert` | [`StringOrAlertFunction`](#StringOrAlertFunction)\<`TType`\> |
| `config` | \| [`TypeCheckConfig`](#../interfaces/TypeCheckConfig) \| [`TypeCheckOptionalConfig`](#../interfaces/TypeCheckOptionalConfig) |

### Returns

`TType` \| `undefined`

  ### <a id="AssertConfig"></a>AssertConfig

[**@xylabs/sdk-js**](#../README)

***

```ts
type AssertConfig = string | AssertCallback | boolean;
```

Configuration for assertion behavior: a static message string, a boolean toggle, or a callback.

  ### <a id="AsyncMutex"></a>AsyncMutex

[**@xylabs/sdk-js**](#../README)

***

```ts
type AsyncMutex<T> = Promise<T>;
```

## Type Parameters

| Type Parameter |
| ------ |
| `T` |

## Description

Used to document promises that are being used as Mutexes

  ### <a id="BaseClassName"></a>BaseClassName

[**@xylabs/sdk-js**](#../README)

***

```ts
type BaseClassName = string & {
  __baseClassName: true;
};
```

Branded string type representing a class name used for global instance tracking.

## Type Declaration

| Name | Type |
| ------ | ------ |
| `__baseClassName` | `true` |

  ### <a id="BaseEmitterParams"></a>BaseEmitterParams

[**@xylabs/sdk-js**](#../README)

***

```ts
type BaseEmitterParams<T> = BaseParams<T & BaseEmitterParamsFields & T>;
```

Parameters type for configuring a BaseEmitter instance.

## Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `T` *extends* [`EmptyObject`](#EmptyObject) | [`EmptyObject`](#EmptyObject) |

  ### <a id="BaseParams"></a>BaseParams

[**@xylabs/sdk-js**](#../README)

***

```ts
type BaseParams<TAdditionalParams> = TAdditionalParams & BaseParamsFields;
```

Parameters for constructing a Base instance, combining BaseParamsFields with optional additional params.

## Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `TAdditionalParams` *extends* [`EmptyObject`](#EmptyObject) | [`EmptyObject`](#EmptyObject) |

  ### <a id="BaseParamsFields"></a>BaseParamsFields

[**@xylabs/sdk-js**](#../README)

***

```ts
type BaseParamsFields = {
  logger?: Logger;
  meterProvider?: MeterProvider;
  traceProvider?: TracerProvider;
};
```

Common parameter fields available to all Base instances (logger, meter, tracer).

## Properties

| Property | Type |
| ------ | ------ |
| <a id="logger"></a> `logger?` | [`Logger`](#../interfaces/Logger) |
| <a id="meterprovider"></a> `meterProvider?` | `MeterProvider` |
| <a id="traceprovider"></a> `traceProvider?` | `TracerProvider` |

  ### <a id="Brand"></a>Brand

[**@xylabs/sdk-js**](#../README)

***

```ts
type Brand<T, B> = T & { [K in keyof B]: B[K] };
```

Creates a branded type by intersecting base type T with brand type B, enabling nominal typing in TypeScript.

## Type Parameters

| Type Parameter |
| ------ |
| `T` |
| `B` |

  ### <a id="BrandedHash"></a>BrandedHash

[**@xylabs/sdk-js**](#../README)

***

```ts
type BrandedHash = Brand<Hex, {
  __hash: true;
}>;
```

Branded type representing a validated hash hex string.

  ### <a id="BrandedHex"></a>BrandedHex

[**@xylabs/sdk-js**](#../README)

***

```ts
type BrandedHex = Brand<Lowercase<string>, {
  __hex: true;
}>;
```

Branded type representing a validated lowercase hex string.

  ### <a id="Compare"></a>Compare

[**@xylabs/sdk-js**](#../README)

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

  ### <a id="CreatableName"></a>CreatableName

[**@xylabs/sdk-js**](#../README)

***

```ts
type CreatableName = Exclude<string, "creatable-name-reserved-32546239486"> & BaseClassName;
```

A branded string type used as the name identifier for creatables.

  ### <a id="CreatableStatus"></a>CreatableStatus

[**@xylabs/sdk-js**](#../README)

***

```ts
type CreatableStatus<TAdditionalStatus> = 
  | StandardCreatableStatus
  | TAdditionalStatus extends void ? StandardCreatableStatus : TAdditionalStatus;
```

A creatable's status, optionally extended with additional custom status values.

## Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `TAdditionalStatus` *extends* `void` \| `string` | `void` |

  ### <a id="DebugLogger"></a>DebugLogger

[**@xylabs/sdk-js**](#../README)

***

```ts
type DebugLogger = (type: string, debugName: string, eventName?: EventName, eventData?: EventArgs) => void;
```

Emittery can collect and log debug information.

To enable this feature set the `DEBUG` environment variable to `emittery` or `*`. Additionally, you can set the static `isDebugEnabled` variable to true
on the Emittery class, or `myEmitter.debug.enabled` on an instance of it for debugging a single instance.

See API for more information on how debugging works.

## Parameters

| Parameter | Type |
| ------ | ------ |
| `type` | `string` |
| `debugName` | `string` |
| `eventName?` | [`EventName`](#EventName) |
| `eventData?` | [`EventArgs`](#EventArgs) |

## Returns

`void`

  ### <a id="DebugOptions"></a>DebugOptions

[**@xylabs/sdk-js**](#../README)

***

```ts
type DebugOptions = {
  enabled?: boolean;
  logger?: DebugLogger;
  name: string;
};
```

Configure debug options of an instance.

## Properties

| Property | Modifier | Type |
| ------ | ------ | ------ |
| <a id="enabled"></a> `enabled?` | `public` | `boolean` |
| <a id="logger"></a> `logger?` | `public` | [`DebugLogger`](#DebugLogger) |
| <a id="name"></a> `name` | `readonly` | `string` |

  ### <a id="DeepOmitStartsWith"></a>DeepOmitStartsWith

[**@xylabs/sdk-js**](#../README)

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

[**@xylabs/sdk-js**](#../README)

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

[**@xylabs/sdk-js**](#../README)

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

[**@xylabs/sdk-js**](#../README)

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

[**@xylabs/sdk-js**](#../README)

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

  ### <a id="Enum"></a>Enum

[**@xylabs/sdk-js**](#../README)

***

```ts
type Enum<T> = { readonly [K in keyof T]: T[K] };
```

A utility type that, given a `Record<string, unknown>`, returns a readonly version
of that record. This results in a type where all properties of `T` are readonly.

## Type Parameters

| Type Parameter | Description |
| ------ | ------ |
| `T` *extends* `Readonly`\<`Record`\<`string` \| `number` \| `symbol`, `unknown`\>\> | The record type to make readonly. |

## Example

```typescript
// Given a record:
export const DnsRecordType = Enum({
  A: 1,
  AAAA: 28,
  CAA: 257,
  CNAME: 5,
  DNAME: 39,
  MX: 15,
  NS: 2,
  PTR: 12,
  SOA: 6,
  SPF: 99,
  SRV: 33,
  TXT: 16,
})

// Now the type inference will preserve the literal types:
export type DnsRecordType = Enum<typeof DnsRecordType>
```

  ### <a id="EnumKey"></a>EnumKey

[**@xylabs/sdk-js**](#../README)

***

```ts
type EnumKey<T, K> = keyof K;
```

A utility type that, given an `Enum` object, returns the union of its keys.

## Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `T` *extends* `Record`\<`string` \| `number` \| `symbol`, `unknown`\> | - |
| `K` | [`Enum`](#Enum)\<`T`\> |

  ### <a id="EnumValue"></a>EnumValue

[**@xylabs/sdk-js**](#../README)

***

```ts
type EnumValue<T, K> = K[keyof K];
```

A utility type that, given an `Enum` object, returns the union of its values.

## Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `T` *extends* `Record`\<`string` \| `number` \| `symbol`, `unknown`\> | - |
| `K` | [`Enum`](#Enum)\<`T`\> |

  ### <a id="EthAddress"></a>EthAddress

[**@xylabs/sdk-js**](#../README)

***

```ts
type EthAddress = Brand<string, {
  __eth_address: true;
}>;
```

Branded type representing a validated Ethereum address with 0x prefix.

  ### <a id="EventAnyListener"></a>EventAnyListener

[**@xylabs/sdk-js**](#../README)

***

```ts
type EventAnyListener<TEventArgs> = (eventName: EventName, eventData: TEventArgs) => Promisable<void>;
```

A listener that receives all events regardless of name.

## Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `TEventArgs` *extends* [`EventArgs`](#EventArgs) | [`EventArgs`](#EventArgs) |

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `eventName` | [`EventName`](#EventName) | The name of the emitted event. |
| `eventData` | `TEventArgs` | The data associated with the event. |

## Returns

[`Promisable`](#Promisable)\<`void`\>

  ### <a id="EventArgs"></a>EventArgs

[**@xylabs/sdk-js**](#../README)

***

```ts
type EventArgs = string | number | object;
```

The allowed types for event argument payloads.

  ### <a id="EventData"></a>EventData

[**@xylabs/sdk-js**](#../README)

***

```ts
type EventData = {
[key: string | number | symbol]: EventArgs;
};
```

A mapping of event names to their corresponding event argument types.

## Index Signature

```ts
[key: string | number | symbol]: EventArgs
```

  ### <a id="EventListener"></a>EventListener

[**@xylabs/sdk-js**](#../README)

***

```ts
type EventListener<TEventArgs> = (eventData: TEventArgs) => Promisable<void>;
```

A listener for a specific event type.

## Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `TEventArgs` *extends* [`EventArgs`](#EventArgs) | [`EventArgs`](#EventArgs) |

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `eventData` | `TEventArgs` | The data associated with the event. |

## Returns

[`Promisable`](#Promisable)\<`void`\>

  ### <a id="EventListenerInfo"></a>EventListenerInfo

[**@xylabs/sdk-js**](#../README)

***

```ts
type EventListenerInfo<TEventArgs> = {
  filter?: TEventArgs;
  listener: EventListener<TEventArgs>;
};
```

Information about a registered event listener, including an optional filter for selective invocation.

## Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `TEventArgs` *extends* [`EventArgs`](#EventArgs) | [`EventArgs`](#EventArgs) |

## Properties

| Property | Type |
| ------ | ------ |
| <a id="filter"></a> `filter?` | `TEventArgs` |
| <a id="listener"></a> `listener` | [`EventListener`](#EventListener)\<`TEventArgs`\> |

  ### <a id="EventName"></a>EventName

[**@xylabs/sdk-js**](#../README)

***

```ts
type EventName = PropertyKey;
```

A valid event name, which can be any property key (string, number, or symbol).

  ### <a id="EventUnsubscribeFunction"></a>EventUnsubscribeFunction

[**@xylabs/sdk-js**](#../README)

***

```ts
type EventUnsubscribeFunction = () => void;
```

A function returned by event subscription methods that unsubscribes the listener when called.

## Returns

`void`

  ### <a id="EventsParams"></a>EventsParams

[**@xylabs/sdk-js**](#../README)

***

```ts
type EventsParams = BaseParams<{
  debug?: DebugOptions;
}>;
```

Parameters for constructing an Events instance, with optional debug configuration.

  ### <a id="FieldType"></a>FieldType

[**@xylabs/sdk-js**](#../README)

***

```ts
type FieldType = 
  | "string"
  | "number"
  | "object"
  | "symbol"
  | "undefined"
  | "null"
  | "array"
  | "function";
```

Union of string literals representing the possible types of an object field.

  ### <a id="Hash"></a>Hash

[**@xylabs/sdk-js**](#../README)

***

```ts
type Hash = z.infer<typeof HashZod>;
```

A validated hash string type, inferred from the HashZod schema.

  ### <a id="HashBitLength"></a>HashBitLength

[**@xylabs/sdk-js**](#../README)

***

```ts
type HashBitLength = 32 | 64 | 128 | 256 | 512 | 1024 | 2048 | 4096;
```

Valid bit lengths for hash values.

  ### <a id="Hex"></a>Hex

[**@xylabs/sdk-js**](#../README)

***

```ts
type Hex = z.infer<typeof HexZod>;
```

A validated hex string type, inferred from the HexZod schema.

  ### <a id="IdentityFunction"></a>IdentityFunction

[**@xylabs/sdk-js**](#../README)

***

```ts
type IdentityFunction<T> = (value: unknown) => value is T;
```

A type guard function that narrows an unknown value to type T.

## Type Parameters

| Type Parameter |
| ------ |
| `T` |

## Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `unknown` |

## Returns

`value is T`

  ### <a id="JsonArray"></a>JsonArray

[**@xylabs/sdk-js**](#../README)

***

```ts
type JsonArray = z.infer<typeof JsonArrayZod>;
```

A JSON array containing JSON values.

  ### <a id="JsonObject"></a>JsonObject

[**@xylabs/sdk-js**](#../README)

***

```ts
type JsonObject = z.infer<typeof JsonObjectZod>;
```

A JSON object with string keys and JSON values.

  ### <a id="JsonValue"></a>JsonValue

[**@xylabs/sdk-js**](#../README)

***

```ts
type JsonValue = z.infer<typeof JsonValueZod>;
```

A recursive JSON value: string, number, boolean, null, array, or object.

  ### <a id="LogFunction"></a>LogFunction

[**@xylabs/sdk-js**](#../README)

***

```ts
type LogFunction = (...data: unknown[]) => void;
```

A generic logging function that accepts any number of arguments.

## Parameters

| Parameter | Type |
| ------ | ------ |
| ...`data` | `unknown`[] |

## Returns

`void`

  ### <a id="LogLevelKey"></a>LogLevelKey

[**@xylabs/sdk-js**](#../README)

***

```ts
type LogLevelKey = EnumKey<typeof LogLevel>;
```

String key for a log level (e.g. 'error', 'warn', 'info').

  ### <a id="LogLevelValue"></a>LogLevelValue

[**@xylabs/sdk-js**](#../README)

***

```ts
type LogLevelValue = EnumValue<typeof LogLevel>;
```

Numeric value of a log level (1 through 6).

  ### <a id="LogVerbosity"></a>LogVerbosity

[**@xylabs/sdk-js**](#../README)

***

```ts
type LogVerbosity = LogLevelKey;
```

Alias for LogLevelKey, representing the verbosity setting as a string.

  ### <a id="MetaEventData"></a>MetaEventData

[**@xylabs/sdk-js**](#../README)

***

```ts
type MetaEventData<TEventData> = {
  listenerAdded: {
     eventName?: keyof TEventData;
     listener:   | EventListener<TEventData[keyof TEventData]>
        | EventAnyListener<TEventData[keyof TEventData]>;
  };
  listenerRemoved: {
     eventName?: keyof TEventData;
     listener:   | EventListener<TEventData[keyof TEventData]>
        | EventAnyListener<TEventData[keyof TEventData]>;
  };
};
```

Data shape for internal meta events that fire when listeners are added or removed.

## Type Parameters

| Type Parameter |
| ------ |
| `TEventData` *extends* [`EventData`](#EventData) |

## Properties

| Property | Type |
| ------ | ------ |
| <a id="listeneradded"></a> `listenerAdded` | \{ `eventName?`: keyof `TEventData`; `listener`: \| [`EventListener`](#EventListener)\<`TEventData`\[keyof `TEventData`\]\> \| [`EventAnyListener`](#EventAnyListener)\<`TEventData`\[keyof `TEventData`\]\>; \} |
| `listenerAdded.eventName?` | keyof `TEventData` |
| `listenerAdded.listener` | \| [`EventListener`](#EventListener)\<`TEventData`\[keyof `TEventData`\]\> \| [`EventAnyListener`](#EventAnyListener)\<`TEventData`\[keyof `TEventData`\]\> |
| <a id="listenerremoved"></a> `listenerRemoved` | \{ `eventName?`: keyof `TEventData`; `listener`: \| [`EventListener`](#EventListener)\<`TEventData`\[keyof `TEventData`\]\> \| [`EventAnyListener`](#EventAnyListener)\<`TEventData`\[keyof `TEventData`\]\>; \} |
| `listenerRemoved.eventName?` | keyof `TEventData` |
| `listenerRemoved.listener` | \| [`EventListener`](#EventListener)\<`TEventData`\[keyof `TEventData`\]\> \| [`EventAnyListener`](#EventAnyListener)\<`TEventData`\[keyof `TEventData`\]\> |

  ### <a id="NullablePromisable"></a>NullablePromisable

[**@xylabs/sdk-js**](#../README)

***

```ts
type NullablePromisable<T, V> = Promisable<T | null, V>;
```

A Promisable that may resolve to null.

## Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `T` | - |
| `V` | `never` |

  ### <a id="NullablePromisableArray"></a>NullablePromisableArray

[**@xylabs/sdk-js**](#../README)

***

```ts
type NullablePromisableArray<T, V> = PromisableArray<T | null, V>;
```

A Promisable array where elements may be null.

## Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `T` | - |
| `V` | `never` |

  ### <a id="ObjectTypeShape"></a>ObjectTypeShape

[**@xylabs/sdk-js**](#../README)

***

```ts
type ObjectTypeShape = Record<string | number | symbol, FieldType>;
```

Describes the expected shape of an object by mapping each key to its expected field type.

  ### <a id="OmitByPredicate"></a>OmitByPredicate

[**@xylabs/sdk-js**](#../README)

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

[**@xylabs/sdk-js**](#../README)

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

[**@xylabs/sdk-js**](#../README)

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

  ### <a id="OptionalPromisable"></a>OptionalPromisable

[**@xylabs/sdk-js**](#../README)

***

```ts
type OptionalPromisable<T, V> = Promisable<T | undefined, V>;
```

A Promisable that may resolve to undefined.

## Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `T` | - |
| `V` | `never` |

  ### <a id="OptionalPromisableArray"></a>OptionalPromisableArray

[**@xylabs/sdk-js**](#../README)

***

```ts
type OptionalPromisableArray<T, V> = PromisableArray<T | undefined, V>;
```

A Promisable array where elements may be undefined.

## Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `T` | - |
| `V` | `never` |

  ### <a id="Override"></a>Override

[**@xylabs/sdk-js**](#../README)

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

[**@xylabs/sdk-js**](#../README)

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

[**@xylabs/sdk-js**](#../README)

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

[**@xylabs/sdk-js**](#../README)

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

  ### <a id="Profiler"></a>Profiler

[**@xylabs/sdk-js**](#../README)

***

```ts
type Profiler = Record<string, number[]>;
```

A record of named timing entries, where each key maps to an array of timestamps.

  ### <a id="Promisable"></a>Promisable

[**@xylabs/sdk-js**](#../README)

***

```ts
type Promisable<T, V> = PromiseEx<T, V> | Promise<T> | T;
```

A value that may be a Promise, PromiseEx, or a plain synchronous value.

## Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `T` | - |
| `V` | `never` |

  ### <a id="PromisableArray"></a>PromisableArray

[**@xylabs/sdk-js**](#../README)

***

```ts
type PromisableArray<T, V> = Promisable<T[], V>;
```

A Promisable that resolves to an array.

## Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `T` | - |
| `V` | `never` |

  ### <a id="PromiseExFunc"></a>PromiseExFunc

[**@xylabs/sdk-js**](#../README)

***

```ts
type PromiseExFunc<T> = (resolve?: PromiseExSubFunc<T, void>, reject?: PromiseExSubFunc<T, void>) => void;
```

The executor function passed to the PromiseEx constructor.

## Type Parameters

| Type Parameter |
| ------ |
| `T` |

## Parameters

| Parameter | Type |
| ------ | ------ |
| `resolve?` | [`PromiseExSubFunc`](#PromiseExSubFunc)\<`T`, `void`\> |
| `reject?` | [`PromiseExSubFunc`](#PromiseExSubFunc)\<`T`, `void`\> |

## Returns

`void`

  ### <a id="PromiseExSubFunc"></a>PromiseExSubFunc

[**@xylabs/sdk-js**](#../README)

***

```ts
type PromiseExSubFunc<T, TResult> = (value: T) => TResult;
```

A resolve/reject callback used within PromiseEx.

## Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `T` | - |
| `TResult` | `T` |

## Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `T` |

## Returns

`TResult`

  ### <a id="PromiseExValueFunc"></a>PromiseExValueFunc

[**@xylabs/sdk-js**](#../README)

***

```ts
type PromiseExValueFunc<V> = (value?: V) => boolean;
```

A callback that inspects the attached value and returns whether to cancel the promise.

## Type Parameters

| Type Parameter |
| ------ |
| `V` |

## Parameters

| Parameter | Type |
| ------ | ------ |
| `value?` | `V` |

## Returns

`boolean`

  ### <a id="RecordKey"></a>RecordKey

[**@xylabs/sdk-js**](#../README)

***

```ts
type RecordKey = string | number | symbol;
```

A union of valid object key types.

  ### <a id="Simplify"></a>Simplify

[**@xylabs/sdk-js**](#../README)

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

  ### <a id="StandardCreatableStatus"></a>StandardCreatableStatus

[**@xylabs/sdk-js**](#../README)

***

```ts
type StandardCreatableStatus = 
  | "creating"
  | "created"
  | "starting"
  | "started"
  | "stopping"
  | "stopped"
  | "error";
```

The standard lifecycle statuses a creatable can transition through.

  ### <a id="StringKeyObject"></a>StringKeyObject

[**@xylabs/sdk-js**](#../README)

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

[**@xylabs/sdk-js**](#../README)

***

```ts
type StringOrAlertFunction<T> = string | AssertExMessageFunc<T>;
```

A string message or function that produces an assertion error message for a failed type check.

## Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* [`AnyNonPromise`](#AnyNonPromise) |

  ### <a id="TypeCheck"></a>TypeCheck

[**@xylabs/sdk-js**](#../README)

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
| `T` *extends* [`TypedValue`](#TypedValue) |

## Call Signature

```ts
(obj: AnyNonPromise): obj is T;
```

### Parameters

| Parameter | Type |
| ------ | ------ |
| `obj` | [`AnyNonPromise`](#AnyNonPromise) |

### Returns

`obj is T`

## Call Signature

```ts
(obj: AnyNonPromise, config: TypeCheckConfig): obj is T;
```

### Parameters

| Parameter | Type |
| ------ | ------ |
| `obj` | [`AnyNonPromise`](#AnyNonPromise) |
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
| `obj` | [`AnyNonPromise`](#AnyNonPromise) |
| `config` | \| `number` \| [`TypeCheckConfig`](#../interfaces/TypeCheckConfig) \| `undefined` |

### Returns

`obj is T`

  ### <a id="TypeOfTypes"></a>TypeOfTypes

[**@xylabs/sdk-js**](#../README)

***

```ts
type TypeOfTypes = 
  | "string"
  | "number"
  | "object"
  | "array"
  | "buffer"
  | "null"
  | "undefined"
  | "bigint"
  | "boolean"
  | "function"
  | "symbol";
```

Union of string literals representing the possible results of the extended `typeOf` function.

  ### <a id="TypedArray"></a>TypedArray

[**@xylabs/sdk-js**](#../README)

***

```ts
type TypedArray = TypedValue[];
```

An array of TypedValue elements.

  ### <a id="TypedKey"></a>TypedKey

[**@xylabs/sdk-js**](#../README)

***

```ts
type TypedKey<T> = T extends string ? T : string | number | symbol;
```

A valid key for a typed object. Defaults to string | number | symbol unless narrowed by T.

## Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `T` *extends* `string` \| `void` | `void` |

  ### <a id="TypedObject"></a>TypedObject

[**@xylabs/sdk-js**](#../README)

***

```ts
type TypedObject = 
  | {
[key: string | number | symbol]: TypedValue;
}
  | object;
```

An object whose keys are TypedKey and whose values are TypedValue.

  ### <a id="TypedValue"></a>TypedValue

[**@xylabs/sdk-js**](#../README)

***

```ts
type TypedValue = 
  | bigint
  | string
  | number
  | boolean
  | null
  | TypedObject
  | TypedArray
  | Function
  | symbol
  | undefined;
```

A value that can appear in a typed object tree (primitives, objects, arrays, functions, and symbols).

  ### <a id="WithAdditional"></a>WithAdditional

[**@xylabs/sdk-js**](#../README)

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

  ### <a id="ZodFactoryConfig"></a>ZodFactoryConfig

[**@xylabs/sdk-js**](#../README)

***

```ts
type ZodFactoryConfig = 
  | AssertConfig
  | ZodFactoryConfigObject;
```

Configuration for zod factory assertion behavior, either an AssertConfig or a named config object.

### variables

  ### <a id="ADDRESS_LENGTH"></a>ADDRESS_LENGTH

[**@xylabs/sdk-js**](#../README)

***

```ts
const ADDRESS_LENGTH: 40;
```

The character length of an address hex string (40 hex characters / 20 bytes).

  ### <a id="AddressRegEx"></a>AddressRegEx

[**@xylabs/sdk-js**](#../README)

***

```ts
const AddressRegEx: RegExp;
```

Regular expression matching a 20-byte (40 hex character) address string.

  ### <a id="AddressTransformZod"></a>AddressTransformZod

[**@xylabs/sdk-js**](#../README)

***

```ts
const AddressTransformZod: z.ZodPipe<z.ZodPipe<z.ZodUnion<readonly [z.ZodString, z.ZodBigInt, z.ZodNumber]>, z.ZodTransform<string, string | number | bigint>>, z.ZodTransform<Lowercase<string> & {
  __hex: true;
} & {
  __address: true;
}, string>>;
```

Zod schema that accepts a string, bigint, or number and transforms it into a validated Address.

  ### <a id="AddressValidationZod"></a>AddressValidationZod

[**@xylabs/sdk-js**](#../README)

***

```ts
const AddressValidationZod: z.ZodPipe<z.ZodString, z.ZodTransform<Lowercase<string> & {
  __hex: true;
} & {
  __address: true;
}, string>>;
```

Zod schema that validates a string is a properly formatted 40-character hex address.

  ### <a id="AddressZod"></a>AddressZod

[**@xylabs/sdk-js**](#../README)

***

```ts
const AddressZod: z.ZodPipe<z.ZodString, z.ZodTransform<BrandedAddress, string>>;
```

Zod schema that validates and transforms a string into a branded Address type.

  ### <a id="ApiStage"></a>ApiStage

[**@xylabs/sdk-js**](#../README)

***

```ts
const ApiStage: Enum<{
  Beta: "beta";
  Local: "local";
  Prod: "prod";
}>;
```

Deployment stage identifiers for API environments.

  ### <a id="AsObjectFactory"></a>AsObjectFactory

[**@xylabs/sdk-js**](#../README)

***

```ts
const AsObjectFactory: {
  create: <T>(typeCheck: TypeCheck<T>) => AsTypeFunction;
  createOptional: <T>(typeCheck: TypeCheck<T>) => (value: AnyNonPromise) => T | undefined;
};
```

Factory for creating type-narrowing functions for TypedObject types.

## Type Declaration

| Name | Type |
| ------ | ------ |
| <a id="property-create"></a> `create()` | \<`T`\>(`typeCheck`: [`TypeCheck`](#../type-aliases/TypeCheck)\<`T`\>) => [`AsTypeFunction`](#../type-aliases/AsTypeFunction) |
| <a id="property-createoptional"></a> `createOptional()` | \<`T`\>(`typeCheck`: [`TypeCheck`](#../type-aliases/TypeCheck)\<`T`\>) => (`value`: [`AnyNonPromise`](#../type-aliases/AnyNonPromise)) => `T` \| `undefined` |

  ### <a id="AsTypeFactory"></a>AsTypeFactory

[**@xylabs/sdk-js**](#../README)

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
| <a id="property-createoptional"></a> `createOptional()` | \<`T`\>(`typeCheck`: [`TypeCheck`](#../type-aliases/TypeCheck)\<`T`\>) => (`value`: [`AnyNonPromise`](#../type-aliases/AnyNonPromise)) => `T` \| `undefined` |

  ### <a id="BigIntToJsonZod"></a>BigIntToJsonZod

[**@xylabs/sdk-js**](#../README)

***

```ts
const BigIntToJsonZod: z.ZodPipe<z.ZodBigInt, z.ZodTransform<BrandedHex, bigint>>;
```

Zod schema that transforms a non-negative BigInt into a hex string for JSON serialization.

  ### <a id="Buffer"></a>Buffer

[**@xylabs/sdk-js**](#../README)

***

```ts
const Buffer: BufferConstructor;
```

  ### <a id="ETH_ZERO_ADDRESS"></a>ETH_ZERO_ADDRESS

[**@xylabs/sdk-js**](#../README)

***

```ts
const ETH_ZERO_ADDRESS: EthAddress;
```

The zero Ethereum address constant (0x followed by 40 zero characters).

  ### <a id="Enum"></a>Enum

[**@xylabs/sdk-js**](#../README)

***

```ts
const Enum: <T>(obj: Readonly<T>) => Enum<T>;
```

Transforms a given record object into a readonly "enum-like" structure while preserving
the literal types of its values. This allows you to use the returned object both at runtime
(for lookups) and at compile time (for strongly typed values).

To maintain literal types (i.e., prevent them from being widened to `string`, `number`, etc.),
ensure you annotate your object with `as const` before passing it to `Enum`.

## Type Parameters

| Type Parameter | Description |
| ------ | ------ |
| `T` *extends* `Record`\<`string` \| `number` \| `symbol`, `unknown`\> | A record type with string keys and any kind of values. |

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `obj` | `Readonly`\<`T`\> | A readonly record object annotated with `as const`. |

## Returns

[`Enum`](#../type-aliases/Enum)\<`T`\>

A readonly version of the provided record, preserving exact literal value types.

## Example

```typescript
// Defining a record with literal types using as const:
const DnsRecordType = Enum({
  A: 1,
  AAAA: 28,
  CAA: 257,
  CNAME: 5,
  DNAME: 39,
  MX: 15,
  NS: 2,
  PTR: 12,
  SOA: 6,
  SPF: 99,
  SRV: 33,
  TXT: 16,
} as const);

// DnsRecordType is now a readonly object:
// {
//   readonly A: 1;
//   readonly AAAA: 28;
//   readonly CAA: 257;
//   readonly CNAME: 5;
//   readonly DNAME: 39;
//   readonly MX: 15;
//   readonly NS: 2;
//   readonly PTR: 12;
//   readonly SOA: 6;
//   readonly SPF: 99;
//   readonly SRV: 33;
//   readonly TXT: 16;
// }
```

  ### <a id="EthAddressFromStringSchema"></a>EthAddressFromStringSchema

[**@xylabs/sdk-js**](#../README)

***

```ts
const EthAddressFromStringSchema: z.ZodPipe<z.ZodString, z.ZodTransform<EthAddress, string>>;
```

## Deprecated

use EthAddressFromStringZod

  ### <a id="EthAddressFromStringZod"></a>EthAddressFromStringZod

[**@xylabs/sdk-js**](#../README)

***

```ts
const EthAddressFromStringZod: z.ZodPipe<z.ZodString, z.ZodTransform<EthAddress, string>>;
```

Zod schema that validates and transforms a string into an EthAddress type.

  ### <a id="EthAddressRegEx"></a>EthAddressRegEx

[**@xylabs/sdk-js**](#../README)

***

```ts
const EthAddressRegEx: RegExp;
```

Regular expression matching a 20-byte Ethereum address with 0x prefix (mixed case).

  ### <a id="EthAddressToStringSchema"></a>EthAddressToStringSchema

[**@xylabs/sdk-js**](#../README)

***

```ts
const EthAddressToStringSchema: z.ZodString;
```

## Deprecated

use EthAddressToStringZod

  ### <a id="EthAddressToStringZod"></a>EthAddressToStringZod

[**@xylabs/sdk-js**](#../README)

***

```ts
const EthAddressToStringZod: z.ZodString;
```

Zod schema that validates a string is a properly formatted Ethereum address.

  ### <a id="EthAddressZod"></a>EthAddressZod

[**@xylabs/sdk-js**](#../README)

***

```ts
const EthAddressZod: z.ZodString & z.ZodType<EthAddress, string, z.core.$ZodTypeInternals<EthAddress, string>>;
```

Zod schema that validates a string as a properly formatted Ethereum address using regex and type guard.

  ### <a id="HASH_LENGTH"></a>HASH_LENGTH

[**@xylabs/sdk-js**](#../README)

***

```ts
const HASH_LENGTH: 32;
```

The byte length of a standard hash (32 bytes / 256 bits).

  ### <a id="HashBitLength"></a>HashBitLength

[**@xylabs/sdk-js**](#../README)

***

```ts
HashBitLength: HashBitLength[];
```

Array of all valid hash bit lengths for runtime validation.

  ### <a id="HashRegEx"></a>HashRegEx

[**@xylabs/sdk-js**](#../README)

***

```ts
const HashRegEx: RegExp;
```

Regular expression matching a 32-byte (64 hex character) hash string.

  ### <a id="HashToJsonZod"></a>HashToJsonZod

[**@xylabs/sdk-js**](#../README)

***

```ts
const HashToJsonZod: z.ZodPipe<z.ZodPipe<z.ZodString, z.ZodTransform<BrandedHash, string>>, z.ZodTransform<string, BrandedHash>>;
```

Zod schema that transforms a Hash to a plain string for JSON serialization.

  ### <a id="HashZod"></a>HashZod

[**@xylabs/sdk-js**](#../README)

***

```ts
const HashZod: z.ZodPipe<z.ZodString, z.ZodTransform<BrandedHash, string>>;
```

Zod schema that validates and transforms a string into a branded Hash type.

  ### <a id="HexRegEx"></a>HexRegEx

[**@xylabs/sdk-js**](#../README)

***

```ts
const HexRegEx: RegExp;
```

Regular expression matching a lowercase hex string without prefix.

  ### <a id="HexRegExMinMax"></a>HexRegExMinMax

[**@xylabs/sdk-js**](#../README)

***

```ts
const HexRegExMinMax: (minBytes?: number, maxBytes?: number) => RegExp;
```

Creates a RegExp matching lowercase hex strings with a byte length in the given range.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `minBytes?` | `number` | Minimum number of bytes (default 0) |
| `maxBytes?` | `number` | Maximum number of bytes |

## Returns

`RegExp`

A RegExp for validating hex strings within the byte range

  ### <a id="HexRegExMinMaxMixedCaseWithPrefix"></a>HexRegExMinMaxMixedCaseWithPrefix

[**@xylabs/sdk-js**](#../README)

***

```ts
const HexRegExMinMaxMixedCaseWithPrefix: (minBytes?: number, maxBytes?: number) => RegExp;
```

Creates a RegExp matching mixed-case hex strings with a 0x prefix and a byte length in the given range.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `minBytes?` | `number` | Minimum number of bytes (default 0) |
| `maxBytes?` | `number` | Maximum number of bytes |

## Returns

`RegExp`

A RegExp for validating prefixed hex strings within the byte range

  ### <a id="HexRegExWithPrefix"></a>HexRegExWithPrefix

[**@xylabs/sdk-js**](#../README)

***

```ts
const HexRegExWithPrefix: RegExp;
```

Regular expression matching a lowercase hex string with a 0x prefix.

  ### <a id="HexZod"></a>HexZod

[**@xylabs/sdk-js**](#../README)

***

```ts
const HexZod: z.ZodPipe<z.ZodString, z.ZodTransform<BrandedHex, string>>;
```

Zod schema that validates and transforms a string into a branded Hex type.

  ### <a id="JsonObjectZod"></a>JsonObjectZod

[**@xylabs/sdk-js**](#../README)

***

```ts
const JsonObjectZod: z.ZodRecord<z.ZodString, z.ZodType<unknown, unknown, z.core.$ZodTypeInternals<unknown, unknown>>>;
```

Zod schema for a JSON object with string keys and recursive JSON values.

  ### <a id="JsonToBigIntZod"></a>JsonToBigIntZod

[**@xylabs/sdk-js**](#../README)

***

```ts
const JsonToBigIntZod: z.ZodPipe<z.ZodPipe<z.ZodString, z.ZodTransform<BrandedHex, string>>, z.ZodTransform<bigint, BrandedHex>>;
```

Zod schema that parses a JSON hex string into a BigInt.

  ### <a id="JsonToHashZod"></a>JsonToHashZod

[**@xylabs/sdk-js**](#../README)

***

```ts
const JsonToHashZod: z.ZodPipe<z.ZodString, z.ZodTransform<BrandedHash, string>>;
```

Zod schema that parses a JSON string into a validated Hash, throwing on invalid input.

  ### <a id="LogLevel"></a>LogLevel

[**@xylabs/sdk-js**](#../README)

***

```ts
const LogLevel: Enum<{
  error: 1;
  warn: 2;
  info: 3;
  log: 4;
  debug: 5;
  trace: 6;
}>;
```

Numeric log level values, from least verbose (error=1) to most verbose (trace=6).

  ### <a id="NoOpLogFunction"></a>NoOpLogFunction

[**@xylabs/sdk-js**](#../README)

***

```ts
const NoOpLogFunction: (..._data: unknown[]) => undefined;
```

A log function that silently discards all arguments.

## Parameters

| Parameter | Type |
| ------ | ------ |
| ...`_data` | `unknown`[] |

## Returns

`undefined`

  ### <a id="URL"></a>URL

[**@xylabs/sdk-js**](#../README)

***

```ts
const URL: {
(url: string | URL, base?: string | URL): URL;
  prototype: URL;
  canParse: boolean;
  createObjectURL: string;
  parse: URL | null;
  revokeObjectURL: void;
};
```

Node.js-specific URL class, imported from the `node:url` module.

## Type Declaration

## Parameters

| Parameter | Type |
| ------ | ------ |
| `url` | `string` \| `URL` |
| `base?` | `string` \| `URL` |

## Returns

`URL`

| Name | Type |
| ------ | ------ |
| <a id="property-prototype"></a> `prototype` | `URL` |
| `canParse()` | (`input`: `string` \| `URL`, `base?`: `string` \| `URL`) => `boolean` |
| `createObjectURL()` | (`blob`: `Blob`) => `string` |
| `parse()` | (`input`: `string` \| `URL`, `base?`: `string` \| `URL`) => `URL` \| `null` |
| `revokeObjectURL()` | (`id`: `string`) => `void` |

  ### <a id="ZERO_ADDRESS"></a>ZERO_ADDRESS

[**@xylabs/sdk-js**](#../README)

***

```ts
const ZERO_ADDRESS: Address;
```

A 160-bit zero address constant.

  ### <a id="ZERO_HASH"></a>ZERO_HASH

[**@xylabs/sdk-js**](#../README)

***

```ts
const ZERO_HASH: Hash;
```

A 256-bit zero hash constant.

  ### <a id="asAnyObject"></a>asAnyObject

[**@xylabs/sdk-js**](#../README)

***

```ts
const asAnyObject: AsTypeFunction;
```

Type-narrowing function that casts a value to AnyObject if it is a plain object, or returns undefined.

  ### <a id="asJsonArray"></a>asJsonArray

[**@xylabs/sdk-js**](#../README)

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
| `assert` | [`ZodFactoryConfig`](#../type-aliases/ZodFactoryConfig) |

### Returns

`T` & `unknown`[]

  ### <a id="asJsonObject"></a>asJsonObject

[**@xylabs/sdk-js**](#../README)

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
| `assert` | [`ZodFactoryConfig`](#../type-aliases/ZodFactoryConfig) |

### Returns

`T` & `Record`\<`string`, `unknown`\>

  ### <a id="asJsonValue"></a>asJsonValue

[**@xylabs/sdk-js**](#../README)

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
| `assert` | [`ZodFactoryConfig`](#../type-aliases/ZodFactoryConfig) |

### Returns

`T`

  ### <a id="assertError"></a>assertError

[**@xylabs/sdk-js**](#../README)

***

```ts
const assertError: (value: unknown, assert: AssertConfig | undefined, defaultMessage: string) => undefined;
```

Throws an Error based on the assert configuration when a value fails validation.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `value` | `unknown` | The value being validated |
| `assert` | [`AssertConfig`](#../type-aliases/AssertConfig) \| `undefined` | Assertion config controlling the error message |
| `defaultMessage` | `string` | Fallback message if no custom message is provided |

## Returns

`undefined`

  ### <a id="axios"></a>axios

[**@xylabs/sdk-js**](#../README)

***

```ts
const axios: Axios;
```

## Deprecated

use axiosJson instead

  ### <a id="axiosJson"></a>axiosJson

[**@xylabs/sdk-js**](#../README)

***

```ts
const axiosJson: Axios;
```

  ### <a id="bitsToNibbles"></a>bitsToNibbles

[**@xylabs/sdk-js**](#../README)

***

```ts
const bitsToNibbles: (value: number) => number;
```

Converts a bit count to the equivalent number of hex nibbles (4 bits each).

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `value` | `number` | The number of bits (must be a multiple of 4) |

## Returns

`number`

The number of nibbles

  ### <a id="bufferPolyfill"></a>bufferPolyfill

[**@xylabs/sdk-js**](#../README)

***

```ts
const bufferPolyfill: () => void;
```

## Returns

`void`

  ### <a id="clearTimeoutEx"></a>clearTimeoutEx

[**@xylabs/sdk-js**](#../README)

***

```ts
const clearTimeoutEx: (id: string) => void;
```

Cancels a timeout previously created with setTimeoutEx.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `id` | `string` | The timeout ID returned by setTimeoutEx. |

## Returns

`void`

  ### <a id="containsAll"></a>containsAll

[**@xylabs/sdk-js**](#../README)

***

```ts
const containsAll: <T>(source: T[], target: T[]) => boolean;
```

Checks whether the source array contains every element in the target array.

## Type Parameters

| Type Parameter |
| ------ |
| `T` |

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `source` | `T`[] | The array to search within |
| `target` | `T`[] | The elements that must all be present |

## Returns

`boolean`

True if every target element exists in source

  ### <a id="createProfiler"></a>createProfiler

[**@xylabs/sdk-js**](#../README)

***

```ts
const createProfiler: () => Profiler;
```

Creates a new empty profiler instance.

## Returns

[`Profiler`](#../type-aliases/Profiler)

  ### <a id="deepMerge"></a>deepMerge

[**@xylabs/sdk-js**](#../README)

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

  ### <a id="defaultForgetNodeConfig"></a>defaultForgetNodeConfig

[**@xylabs/sdk-js**](#../README)

***

```ts
const defaultForgetNodeConfig: ForgetNodeConfig<unknown>;
```

Default Node.js forget configuration with termination disabled.

  ### <a id="delay"></a>delay

[**@xylabs/sdk-js**](#../README)

***

```ts
const delay: (ms: number) => Promise<unknown>;
```

Returns a promise that resolves after the specified number of milliseconds.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `ms` | `number` | The number of milliseconds to delay. |

## Returns

`Promise`\<`unknown`\>

A promise that resolves after the delay.

  ### <a id="difference"></a>difference

[**@xylabs/sdk-js**](#../README)

***

```ts
const difference: <TKey>(a: Set<TKey>, b: Set<TKey>) => Set<TKey>;
```

Returns a new set containing elements in `a` that are not in `b`.

## Type Parameters

| Type Parameter |
| ------ |
| `TKey` |

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `a` | `Set`\<`TKey`\> | The source set |
| `b` | `Set`\<`TKey`\> | The set of elements to exclude |

## Returns

`Set`\<`TKey`\>

A new set representing the difference of `a` and `b`

  ### <a id="disableGloballyUnique"></a>disableGloballyUnique

[**@xylabs/sdk-js**](#../README)

***

```ts
const disableGloballyUnique: () => void;
```

Disables global uniqueness checks, allowing duplicate registrations without throwing.

## Returns

`void`

  ### <a id="distinct"></a>distinct

[**@xylabs/sdk-js**](#../README)

***

```ts
const distinct: <T>(value: T, index: number, array: T[]) => boolean;
```

Array filter callback that removes duplicate values, with correct NaN handling.
Use with `array.filter(distinct)`.

## Type Parameters

| Type Parameter |
| ------ |
| `T` |

## Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `T` |
| `index` | `number` |
| `array` | `T`[] |

## Returns

`boolean`

  ### <a id="ellipsize"></a>ellipsize

[**@xylabs/sdk-js**](#../README)

***

```ts
const ellipsize: (value: string, length?: number) => string;
```

Truncates a string to show the first and last `length` characters separated by an ellipsis.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `value` | `string` | The string to ellipsize |
| `length?` | `number` | Number of characters to keep at each end (default 2) |

## Returns

`string`

The ellipsized string

  ### <a id="equalArrayBuffers"></a>equalArrayBuffers

[**@xylabs/sdk-js**](#../README)

***

```ts
const equalArrayBuffers: (a1: ArrayBufferLike, a2: ArrayBufferLike) => boolean;
```

Compares two ArrayBuffers for byte-level equality.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `a1` | `ArrayBufferLike` | First buffer |
| `a2` | `ArrayBufferLike` | Second buffer |

## Returns

`boolean`

True if the buffers have the same length and identical bytes

  ### <a id="exists"></a>exists

[**@xylabs/sdk-js**](#../README)

***

```ts
const exists: <T>(x?: T | null) => x is NonNullable<T>;
```

Used to type narrow an object which is possibly null or undefined. Works well
with functional Array methods. For example:

## Type Parameters

| Type Parameter |
| ------ |
| `T` |

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `x?` | `T` \| `null` | The object which is potentially undefined or null |

## Returns

`x is NonNullable<T>`

False if the object is null/undefined, true otherwise

## Example

```ts
const payloads: XyoPayload[] = boundWitness._payloads?.filter(exists) || []
```

  ### <a id="filterAs"></a>filterAs

[**@xylabs/sdk-js**](#../README)

***

```ts
const filterAs: <In, Out>(x: In[], predicate: (a: In) => Out) => NonNullable<Out>[];
```

Maps each element using the predicate and filters out nullish results.

## Type Parameters

| Type Parameter |
| ------ |
| `In` |
| `Out` |

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `x` | `In`[] | The input array |
| `predicate` | (`a`: `In`) => `Out` | Transform function applied to each element |

## Returns

`NonNullable`\<`Out`\>[]

Array of non-nullish transformed values

  ### <a id="filterAsync"></a>filterAsync

[**@xylabs/sdk-js**](#../README)

***

```ts
const filterAsync: <T>(array: T[], predicate: (value: T, index: number, array: T[]) => Promise<boolean>) => Promise<T[]>;
```

Returns the elements of an array that meet the condition specified in a callback function.

## Type Parameters

| Type Parameter |
| ------ |
| `T` |

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `array` | `T`[] | The array to filter. |
| `predicate` | (`value`: `T`, `index`: `number`, `array`: `T`[]) => `Promise`\<`boolean`\> | A function that accepts up to three arguments. The filter method calls the predicate function one time for each element in the array. |

## Returns

`Promise`\<`T`[]\>

The elements of an array that meet the condition specified in a callback function.

  ### <a id="findAs"></a>findAs

[**@xylabs/sdk-js**](#../README)

***

```ts
const findAs: <In, Out>(x: In[], predicate: (a: In) => Out) => NonNullable<Out> | undefined;
```

Maps each element using the predicate and returns the first non-nullish result.

## Type Parameters

| Type Parameter |
| ------ |
| `In` |
| `Out` |

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `x` | `In`[] | The input array |
| `predicate` | (`a`: `In`) => `Out` | Transform function applied to each element |

## Returns

`NonNullable`\<`Out`\> \| `undefined`

The first non-nullish transformed value, or undefined

  ### <a id="findLastAs"></a>findLastAs

[**@xylabs/sdk-js**](#../README)

***

```ts
const findLastAs: <In, Out>(x: In[], predicate: (a: In) => Out) => NonNullable<Out> | undefined;
```

Maps each element using the predicate and returns the last non-nullish result.

## Type Parameters

| Type Parameter |
| ------ |
| `In` |
| `Out` |

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `x` | `In`[] | The input array |
| `predicate` | (`a`: `In`) => `Out` | Transform function applied to each element |

## Returns

`NonNullable`\<`Out`\> \| `undefined`

The last non-nullish transformed value, or undefined

  ### <a id="flatten"></a>flatten

[**@xylabs/sdk-js**](#../README)

***

```ts
const flatten: <T>(a?: T | ConcatArray<T>, b?: T | ConcatArray<T>) => T[];
```

Concatenates two values or arrays into a single flat array, filtering out nullish entries.

## Type Parameters

| Type Parameter |
| ------ |
| `T` |

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `a?` | `T` \| `ConcatArray`\<`T`\> | First value or array |
| `b?` | `T` \| `ConcatArray`\<`T`\> | Second value or array |

## Returns

`T`[]

A flat array of non-nullish elements

  ### <a id="forget"></a>forget

[**@xylabs/sdk-js**](#../README)

***

```ts
const forget: <T>(promise: Promisable<T>, config?: ForgetNodeConfig<T>) => void;
```

Node.js variant of forget that can optionally terminate the process on exceptions or timeouts.

## Type Parameters

| Type Parameter |
| ------ |
| `T` |

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `promise` | [`Promisable`](#../type-aliases/Promisable)\<`T`\> | The promise or promisable value to forget. |
| `config?` | [`ForgetNodeConfig`](#../interfaces/ForgetNodeConfig)\<`T`\> | Optional Node.js-specific configuration including process termination options. |

## Returns

`void`

  ### <a id="fromFixedPoint"></a>fromFixedPoint

[**@xylabs/sdk-js**](#../README)

***

```ts
const fromFixedPoint: (value: bigint, places?: number) => bigint;
```

Converts a fixed-point bigint back to a whole-number bigint by dividing out the decimal places.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `value` | `bigint` | The fixed-point bigint value to convert |
| `places?` | `number` | Number of decimal places (default 18) |

## Returns

`bigint`

The whole-number bigint result

  ### <a id="fulfilled"></a>fulfilled

[**@xylabs/sdk-js**](#../README)

***

```ts
const fulfilled: <T>(val: PromiseSettledResult<T>) => val is PromiseFulfilledResult<T>;
```

For use with Promise.allSettled to filter only successful results

## Type Parameters

| Type Parameter |
| ------ |
| `T` |

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `val` | `PromiseSettledResult`\<`T`\> | - |

## Returns

`val is PromiseFulfilledResult<T>`

  ### <a id="fulfilledValues"></a>fulfilledValues

[**@xylabs/sdk-js**](#../README)

***

```ts
const fulfilledValues: <T>(previousValue: T[], currentValue: PromiseSettledResult<T>) => T[];
```

For use with Promise.allSettled to reduce to only successful result values

## Type Parameters

| Type Parameter |
| ------ |
| `T` |

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `previousValue` | `T`[] | - |
| `currentValue` | `PromiseSettledResult`\<`T`\> | - |

## Returns

`T`[]

## Examples

```ts
const resolved = Promise.resolve('resolved')
const rejected = Promise.reject('rejected')
const settled = await Promise.allSettled([resolved, rejected])
const results = settled.reduce(fulfilledValues, [] as string[])
// results === [ 'resolved' ]
```

```ts
const resolved = Promise.resolve('resolved')
const rejected = Promise.reject('rejected')
const settled = await Promise.allSettled([resolved, rejected])
const results = settled.reduce<string[]>(fulfilledValues, [])
// results === [ 'resolved' ]
```

  ### <a id="functionName"></a>functionName

[**@xylabs/sdk-js**](#../README)

***

```ts
const functionName: (depth?: number) => string;
```

Returns the name of the calling function by inspecting the stack trace.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `depth?` | `number` | The stack frame depth to read the function name from (default: 2). |

## Returns

`string`

The function name, or '<unknown>' if it cannot be determined.

  ### <a id="getApiStage"></a>getApiStage

[**@xylabs/sdk-js**](#../README)

***

```ts
const getApiStage: (hostname: string) => "beta" | "local" | "prod";
```

Determines the API stage based on the hostname.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `hostname` | `string` | The hostname to evaluate |

## Returns

`"beta"` \| `"local"` \| `"prod"`

The corresponding ApiStage (Local, Beta, or Prod)

  ### <a id="getFunctionName"></a>getFunctionName

[**@xylabs/sdk-js**](#../README)

***

```ts
const getFunctionName: (depth?: number) => string;
```

Retrieves the name of the calling function by inspecting the stack trace.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `depth?` | `number` | The stack frame depth to inspect (default: 2, the caller's caller). |

## Returns

`string`

The function name, or '<unknown>' if it cannot be determined.

  ### <a id="globallyUnique"></a>globallyUnique

[**@xylabs/sdk-js**](#../README)

***

```ts
const globallyUnique: (name: string | symbol, value: unknown, domain?: string) => string;
```

Registers a value as globally unique under the given name and domain.
Throws if a different value is already registered under the same key.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `name` | `string` \| `symbol` | The unique name or symbol |
| `value` | `unknown` | The value to register |
| `domain?` | `string` | The namespace domain (default 'global') |

## Returns

`string`

The fully qualified unique name

  ### <a id="handleError"></a>handleError

[**@xylabs/sdk-js**](#../README)

***

```ts
const handleError: <T>(error: any, handler: (error: Error) => T) => T;
```

Invokes the handler if the value is an Error, otherwise re-throws it.

## Type Parameters

| Type Parameter |
| ------ |
| `T` |

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `error` | `any` | The caught value to inspect |
| `handler` | (`error`: `Error`) => `T` | Callback invoked with the Error if it is one |

## Returns

`T`

The handler's return value

  ### <a id="handleErrorAsync"></a>handleErrorAsync

[**@xylabs/sdk-js**](#../README)

***

```ts
const handleErrorAsync: <T>(error: any, handler: (error: Error) => Promise<T>) => Promise<T>;
```

Async version of handleError. Invokes the async handler if the value is an Error, otherwise re-throws it.

## Type Parameters

| Type Parameter |
| ------ |
| `T` |

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `error` | `any` | The caught value to inspect |
| `handler` | (`error`: `Error`) => `Promise`\<`T`\> | Async callback invoked with the Error if it is one |

## Returns

`Promise`\<`T`\>

The handler's resolved return value

  ### <a id="hasAllLabels"></a>hasAllLabels

[**@xylabs/sdk-js**](#../README)

***

```ts
const hasAllLabels: (source?: Labels, required?: Labels) => boolean;
```

Returns true if the source object has all the labels from the required set

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `source?` | [`Labels`](#../interfaces/Labels) | Source object to check against |
| `required?` | [`Labels`](#../interfaces/Labels) | Set of labels to check for in source |

## Returns

`boolean`

True of the source object has all the labels from the required set

  ### <a id="hexFrom"></a>hexFrom

[**@xylabs/sdk-js**](#../README)

***

```ts
const hexFrom: (value: string | number | bigint | ArrayBufferLike, config?: HexConfig) => Hex;
```

Takes unknown value and tries our best to convert it to a hex string

## Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `string` \| `number` \| `bigint` \| `ArrayBufferLike` |
| `config?` | [`HexConfig`](#../interfaces/HexConfig) |

## Returns

[`Hex`](#../type-aliases/Hex)

  ### <a id="hexFromArrayBuffer"></a>hexFromArrayBuffer

[**@xylabs/sdk-js**](#../README)

***

```ts
const hexFromArrayBuffer: (buffer: ArrayBufferLike, config?: HexConfig) => Hex;
```

Convert an ArrayBuffer to a hex string

## Parameters

| Parameter | Type |
| ------ | ------ |
| `buffer` | `ArrayBufferLike` |
| `config?` | [`HexConfig`](#../interfaces/HexConfig) |

## Returns

[`Hex`](#../type-aliases/Hex)

  ### <a id="hexFromBigInt"></a>hexFromBigInt

[**@xylabs/sdk-js**](#../README)

***

```ts
const hexFromBigInt: (value: bigint, config?: HexConfig) => Hex;
```

Convert a bigint to a hex string

## Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `bigint` |
| `config?` | [`HexConfig`](#../interfaces/HexConfig) |

## Returns

[`Hex`](#../type-aliases/Hex)

  ### <a id="hexFromHexString"></a>hexFromHexString

[**@xylabs/sdk-js**](#../README)

***

```ts
const hexFromHexString: (value: string, config?: HexConfig) => Hex;
```

Normalizes a hex string by stripping an optional 0x prefix, lowercasing, and padding to byte/bit boundaries.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `value` | `string` | The hex string to normalize (with or without 0x prefix) |
| `config?` | [`HexConfig`](#../interfaces/HexConfig) | Configuration for prefix, byteSize, and bitLength padding |

## Returns

[`Hex`](#../type-aliases/Hex)

The normalized Hex string

  ### <a id="hexFromNumber"></a>hexFromNumber

[**@xylabs/sdk-js**](#../README)

***

```ts
const hexFromNumber: (value: number, config?: HexConfig) => Hex;
```

Converts a number to a hex string by converting to BigInt first.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `value` | `number` | The number to convert |
| `config?` | [`HexConfig`](#../interfaces/HexConfig) | Optional hex output configuration |

## Returns

[`Hex`](#../type-aliases/Hex)

The hex string representation

  ### <a id="ifDefined"></a>ifDefined

[**@xylabs/sdk-js**](#../README)

***

```ts
const ifDefined: <T>(value: T, func: (value: T) => void) => T | undefined;
```

Invokes the callback only if the value is neither null nor undefined.

## Type Parameters

| Type Parameter |
| ------ |
| `T` |

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `value` | `T` | The value to check. |
| `func` | (`value`: `T`) => `void` | The callback to invoke with the value if it is defined. |

## Returns

`T` \| `undefined`

The value if defined, or undefined otherwise.

  ### <a id="ifTypeOf"></a>ifTypeOf

[**@xylabs/sdk-js**](#../README)

***

```ts
const ifTypeOf: <T, R>(typeName: TypeOfTypes, value: unknown, trueFunc: (value: T) => R, isFunc?: (value: T) => boolean) => R | undefined;
```

Invokes the callback if the value matches the specified type, with an optional additional predicate.

## Type Parameters

| Type Parameter |
| ------ |
| `T` |
| `R` |

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `typeName` | [`TypeOfTypes`](#../type-aliases/TypeOfTypes) | The expected type name to match against. |
| `value` | `unknown` | The value to check. |
| `trueFunc` | (`value`: `T`) => `R` | The callback to invoke if the type matches. |
| `isFunc?` | (`value`: `T`) => `boolean` | Optional additional predicate that must also return true. |

## Returns

`R` \| `undefined`

The result of trueFunc if the type matches (and isFunc passes), or undefined.

  ### <a id="intersection"></a>intersection

[**@xylabs/sdk-js**](#../README)

***

```ts
const intersection: <TKey>(a: Set<TKey>, b: Set<TKey>) => Set<TKey>;
```

Returns a new set containing only elements present in both `a` and `b`.

## Type Parameters

| Type Parameter |
| ------ |
| `TKey` |

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `a` | `Set`\<`TKey`\> | The first set |
| `b` | `Set`\<`TKey`\> | The second set |

## Returns

`Set`\<`TKey`\>

A new set representing the intersection of `a` and `b`

  ### <a id="isAddress"></a>isAddress

[**@xylabs/sdk-js**](#../README)

***

```ts
const isAddress: (value: unknown, config?: HexConfig) => value is Address;
```

Type guard that checks whether a value is a valid 160-bit address.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `value` | `unknown` | The value to check |
| `config?` | [`HexConfig`](#../interfaces/HexConfig) | Optional hex config (defaults to 160-bit, no prefix) |

## Returns

`value is Address`

True if the value is a valid Address

  ### <a id="isBrowser"></a>isBrowser

[**@xylabs/sdk-js**](#../README)

***

```ts
const isBrowser: () => boolean;
```

Returns whether the current environment is a browser. Always returns false in Node.js.

## Returns

`boolean`

  ### <a id="isEthAddress"></a>isEthAddress

[**@xylabs/sdk-js**](#../README)

***

```ts
const isEthAddress: (value: unknown, config?: HexConfig) => value is EthAddress;
```

Type guard that checks whether a value is a valid 0x-prefixed Ethereum address.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `value` | `unknown` | The value to check |
| `config?` | [`HexConfig`](#../interfaces/HexConfig) | Optional hex config (defaults to 160-bit with prefix) |

## Returns

`value is EthAddress`

True if the value is a valid EthAddress

  ### <a id="isEthAddressWrapper"></a>isEthAddressWrapper

[**@xylabs/sdk-js**](#../README)

***

```ts
const isEthAddressWrapper: (obj: {
  type: string;
}) => obj is { type: string } & EthAddressWrapper;
```

Type guard that checks if the given object is an instance of EthAddressWrapper.

## Parameters

| Parameter | Type |
| ------ | ------ |
| `obj` | \{ `type`: `string`; \} |
| `obj.type` | `string` |

## Returns

`obj is { type: string } & EthAddressWrapper`

  ### <a id="isHash"></a>isHash

[**@xylabs/sdk-js**](#../README)

***

```ts
const isHash: (value: unknown, bitLength?: HashBitLength) => value is Hash;
```

Type guard that checks whether a value is a valid hash of the specified bit length.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `value` | `unknown` | The value to check |
| `bitLength?` | [`HashBitLength`](#../type-aliases/HashBitLength) | The expected bit length of the hash (defaults to 256) |

## Returns

`value is Hash`

True if the value is a valid Hash

  ### <a id="isHashBitLength"></a>isHashBitLength

[**@xylabs/sdk-js**](#../README)

***

```ts
const isHashBitLength: (value: unknown) => value is HashBitLength;
```

Type guard that checks whether a value is a valid hash bit length.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `value` | `unknown` | The value to check |

## Returns

`value is HashBitLength`

True if the value is one of the supported HashBitLength values

  ### <a id="isHex"></a>isHex

[**@xylabs/sdk-js**](#../README)

***

```ts
const isHex: (value: unknown, config?: HexConfig) => value is Hex;
```

Type guard that checks whether a value is a valid hex string.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `value` | `unknown` | The value to check |
| `config?` | [`HexConfig`](#../interfaces/HexConfig) | Optional configuration for prefix and bit length validation |

## Returns

`value is Hex`

True if the value is a valid Hex string

  ### <a id="isHexZero"></a>isHexZero

[**@xylabs/sdk-js**](#../README)

***

```ts
const isHexZero: (value?: string) => boolean | undefined;
```

Checks whether a hex string represents a zero value.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `value?` | `string` | The hex string to check |

## Returns

`boolean` \| `undefined`

True if zero, false if non-zero, or undefined if the input is not a string

  ### <a id="isJsonArray"></a>isJsonArray

[**@xylabs/sdk-js**](#../README)

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

[**@xylabs/sdk-js**](#../README)

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

[**@xylabs/sdk-js**](#../README)

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

  ### <a id="isLocalhost"></a>isLocalhost

[**@xylabs/sdk-js**](#../README)

***

```ts
const isLocalhost: (hostname: string) => boolean;
```

Checks whether a hostname refers to the local machine (localhost, 127.0.0.1, ::1, or *.localhost).

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `hostname` | `string` | The hostname to check |

## Returns

`boolean`

`true` if the hostname is a localhost address

  ### <a id="isNode"></a>isNode

[**@xylabs/sdk-js**](#../README)

***

```ts
const isNode: () => boolean;
```

Returns whether the current environment is Node.js. Always returns true in this entry point.

## Returns

`boolean`

  ### <a id="isType"></a>isType

[**@xylabs/sdk-js**](#../README)

***

```ts
const isType: (value: unknown, expectedType: FieldType) => boolean;
```

Checks whether a value matches the expected field type, with correct handling for arrays and nulls.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `value` | `unknown` | The value to check. |
| `expectedType` | [`FieldType`](#../type-aliases/FieldType) | The expected type string. |

## Returns

`boolean`

True if the value matches the expected type.

  ### <a id="isTypedArray"></a>isTypedArray

[**@xylabs/sdk-js**](#../README)

***

```ts
const isTypedArray: (value: unknown) => value is TypedArray;
```

Type guard that checks whether a value is a TypedArray (an array where every element is a TypedValue).

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `value` | `unknown` | The value to check. |

## Returns

`value is TypedArray`

True if the value is an array of TypedValue elements.

  ### <a id="isTypedKey"></a>isTypedKey

[**@xylabs/sdk-js**](#../README)

***

```ts
const isTypedKey: (value: unknown) => value is TypedKey;
```

Type guard that checks whether a value is a valid TypedKey (string, bigint, number, or symbol).

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `value` | `unknown` | The value to check. |

## Returns

`value is TypedKey`

True if the value is a valid TypedKey.

  ### <a id="isTypedObject"></a>isTypedObject

[**@xylabs/sdk-js**](#../README)

***

```ts
const isTypedObject: (value: unknown) => value is TypedObject;
```

Type guard that checks whether a value is a TypedObject (an object with TypedKey keys and TypedValue values).

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `value` | `unknown` | The value to check. |

## Returns

`value is TypedObject`

True if the value is a valid TypedObject.

  ### <a id="isTypedValue"></a>isTypedValue

[**@xylabs/sdk-js**](#../README)

***

```ts
const isTypedValue: (value: unknown) => value is TypedValue;
```

Type guard that checks whether a value is a valid TypedValue.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `value` | `unknown` | The value to check. |

## Returns

`value is TypedValue`

True if the value is a string, number, boolean, null, TypedObject, or TypedArray.

  ### <a id="isValidTypedFieldPair"></a>isValidTypedFieldPair

[**@xylabs/sdk-js**](#../README)

***

```ts
const isValidTypedFieldPair: (pair: [unknown, unknown]) => pair is [key: TypedKey, value: TypedValue];
```

Type guard that checks whether a key-value pair has a valid TypedKey and TypedValue.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `pair` | \[`unknown`, `unknown`\] | A tuple of [key, value] to validate. |

## Returns

`pair is [key: TypedKey, value: TypedValue]`

True if the key is a TypedKey and the value is a TypedValue.

  ### <a id="isWebworker"></a>isWebworker

[**@xylabs/sdk-js**](#../README)

***

```ts
const isWebworker: () => boolean;
```

Returns whether the current environment is a web worker. Always returns false in Node.js.

## Returns

`boolean`

  ### <a id="nibblesToBits"></a>nibblesToBits

[**@xylabs/sdk-js**](#../README)

***

```ts
const nibblesToBits: (value: number) => number;
```

Converts a nibble count to the equivalent number of bits.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `value` | `number` | The number of nibbles |

## Returns

`number`

The number of bits

  ### <a id="omitBy"></a>omitBy

[**@xylabs/sdk-js**](#../README)

***

```ts
const omitBy: <T>(obj: T, predicate: OmitByPredicate, maxDepth?: number) => Partial<T>;
```

Creates a new object excluding properties that satisfy the predicate, with optional recursive depth.

## Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* [`EmptyObject`](#../type-aliases/EmptyObject) |

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `obj` | `T` | The source object to omit properties from. |
| `predicate` | [`OmitByPredicate`](#../type-aliases/OmitByPredicate) | A function that returns true for properties to exclude. |
| `maxDepth?` | `number` | Maximum recursion depth for nested objects. |

## Returns

`Partial`\<`T`\>

A partial copy of the object without matching properties.

  ### <a id="omitByPrefix"></a>omitByPrefix

[**@xylabs/sdk-js**](#../README)

***

```ts
const omitByPrefix: <T, P>(payload: T, prefix: P, maxDepth?: number) => DeepOmitStartsWith<T, P>;
```

Omits all properties whose keys start with the given prefix, recursively through nested objects.

## Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* [`EmptyObject`](#../type-aliases/EmptyObject) |
| `P` *extends* `string` |

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `payload` | `T` | The source object. |
| `prefix` | `P` | The string prefix to match keys against. |
| `maxDepth?` | `number` | Maximum recursion depth. |

## Returns

[`DeepOmitStartsWith`](#../type-aliases/DeepOmitStartsWith)\<`T`, `P`\>

A new object without properties that have matching prefixed keys.

  ### <a id="padHex"></a>padHex

[**@xylabs/sdk-js**](#../README)

***

```ts
const padHex: (hex: string, byteCount?: number) => string;
```

## Parameters

| Parameter | Type |
| ------ | ------ |
| `hex` | `string` |
| `byteCount?` | `number` |

## Returns

`string`

  ### <a id="pickBy"></a>pickBy

[**@xylabs/sdk-js**](#../README)

***

```ts
const pickBy: <T>(obj: T, predicate: PickByPredicate, maxDepth?: number) => Partial<T>;
```

Creates a new object containing only the properties that satisfy the predicate, with optional recursive depth.

## Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* [`EmptyObject`](#../type-aliases/EmptyObject) |

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `obj` | `T` | The source object to pick properties from. |
| `predicate` | [`PickByPredicate`](#../type-aliases/PickByPredicate) | A function that returns true for properties to include. |
| `maxDepth?` | `number` | Maximum recursion depth for nested objects. |

## Returns

`Partial`\<`T`\>

A partial copy of the object with only matching properties.

  ### <a id="pickByPrefix"></a>pickByPrefix

[**@xylabs/sdk-js**](#../README)

***

```ts
const pickByPrefix: <T, P>(payload: T, prefix: P, maxDepth?: number) => DeepPickStartsWith<T, P>;
```

Picks all properties whose keys start with the given prefix, recursively through nested objects.

## Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* [`EmptyObject`](#../type-aliases/EmptyObject) |
| `P` *extends* `string` |

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `payload` | `T` | The source object. |
| `prefix` | `P` | The string prefix to match keys against. |
| `maxDepth?` | `number` | Maximum recursion depth. |

## Returns

[`DeepPickStartsWith`](#../type-aliases/DeepPickStartsWith)\<`T`, `P`\>

A new object containing only properties with matching prefixed keys.

  ### <a id="profile"></a>profile

[**@xylabs/sdk-js**](#../README)

***

```ts
const profile: (profiler: Profiler, name: string) => void;
```

Records a timestamp for the given profile name.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `profiler` | [`Profiler`](#../type-aliases/Profiler) | The profiler instance to record into. |
| `name` | `string` | The name of the timing entry. |

## Returns

`void`

  ### <a id="profileReport"></a>profileReport

[**@xylabs/sdk-js**](#../README)

***

```ts
const profileReport: (profiler: Profiler) => Record<string, number>;
```

Generates a report of elapsed times for each profiled entry.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `profiler` | [`Profiler`](#../type-aliases/Profiler) | The profiler instance to report on. |

## Returns

`Record`\<`string`, `number`\>

A record mapping each profile name to its elapsed time in milliseconds, plus a '-all-' total.

  ### <a id="rejected"></a>rejected

[**@xylabs/sdk-js**](#../README)

***

```ts
const rejected: <T>(val: PromiseSettledResult<T>) => val is PromiseRejectedResult;
```

For use with Promise.allSettled to filter only rejected results

## Type Parameters

| Type Parameter |
| ------ |
| `T` |

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `val` | `PromiseSettledResult`\<`T`\> | - |

## Returns

`val is PromiseRejectedResult`

  ### <a id="removeFields"></a>removeFields

[**@xylabs/sdk-js**](#../README)

***

```ts
const removeFields: <T, K>(obj: T, fields: K[]) => Omit<T, K>;
```

Returns a shallow copy of the object with the specified fields removed.

## Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* [`EmptyObject`](#../type-aliases/EmptyObject) |
| `K` *extends* keyof `T` |

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `obj` | `T` | The source object. |
| `fields` | `K`[] | An array of keys to remove. |

## Returns

`Omit`\<`T`, `K`\>

A new object without the specified fields.

  ### <a id="retry"></a>retry

[**@xylabs/sdk-js**](#../README)

***

```ts
const retry: <T>(func: () => Promisable<T | undefined>, config?: RetryConfigWithComplete<T>) => Promise<T | undefined>;
```

Retries an async function with exponential backoff until it completes or retries are exhausted.

## Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `T` | `unknown` |

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `func` | () => [`Promisable`](#../type-aliases/Promisable)\<`T` \| `undefined`\> | The function to retry. |
| `config?` | [`RetryConfigWithComplete`](#../interfaces/RetryConfigWithComplete)\<`T`\> | Optional retry configuration including backoff, interval, retries, and completion check. |

## Returns

`Promise`\<`T` \| `undefined`\>

The result of the function, or undefined if all retries were exhausted.

  ### <a id="setTimeoutEx"></a>setTimeoutEx

[**@xylabs/sdk-js**](#../README)

***

```ts
const setTimeoutEx: (func: Function, delay: number) => string;
```

Sets a timeout using an optimized internal timer that coalesces multiple timeouts into a single native timer.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `func` | `Function` | The function to call after the delay. |
| `delay` | `number` | The delay in milliseconds (must be >= 0). |

## Returns

`string`

A unique string ID that can be used with clearTimeoutEx to cancel the timeout.

  ### <a id="toAddress"></a>toAddress

[**@xylabs/sdk-js**](#../README)

***

```ts
const toAddress: (value: string | number | bigint | ArrayBufferLike, config?: HexConfig) => Address;
```

Converts a value to a 160-bit Address hex string.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `value` | `string` \| `number` \| `bigint` \| `ArrayBufferLike` | The value to convert (string, number, bigint, or ArrayBuffer) |
| `config?` | [`HexConfig`](#../interfaces/HexConfig) | Optional hex config (defaults to 160-bit, no prefix) |

## Returns

[`Address`](#../type-aliases/Address)

The value as an Address

  ### <a id="toDecimalPrecision"></a>toDecimalPrecision

[**@xylabs/sdk-js**](#../README)

***

```ts
const toDecimalPrecision: (value: number, digits: number) => string;
```

Formats a number to the specified number of significant digits, returning a string with minimal trailing zeros.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `value` | `number` | The number to format |
| `digits` | `number` | The number of significant digits |

## Returns

`string`

A string representation of the number with the specified precision

  ### <a id="toEthAddress"></a>toEthAddress

[**@xylabs/sdk-js**](#../README)

***

```ts
const toEthAddress: (value: string | number | bigint | ArrayBufferLike, config?: HexConfig) => EthAddress;
```

Converts a value to a 0x-prefixed Ethereum address string.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `value` | `string` \| `number` \| `bigint` \| `ArrayBufferLike` | The value to convert (string, number, bigint, or ArrayBuffer) |
| `config?` | [`HexConfig`](#../interfaces/HexConfig) | Optional hex config (defaults to 160-bit, no inner prefix) |

## Returns

[`EthAddress`](#../type-aliases/EthAddress)

The value as an EthAddress

  ### <a id="toFixedPoint"></a>toFixedPoint

[**@xylabs/sdk-js**](#../README)

***

```ts
const toFixedPoint: (value: bigint | string, places?: number) => bigint;
```

Converts a bigint or decimal string to a fixed-point bigint representation.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `value` | `bigint` \| `string` | The value to convert (bigint or string with optional decimal point) |
| `places?` | `number` | Number of decimal places (default 18) |

## Returns

`bigint`

A bigint representing the value scaled by 10^places

  ### <a id="toHex"></a>toHex

[**@xylabs/sdk-js**](#../README)

***

```ts
const toHex: (value: string | number | bigint | ArrayBufferLike, config?: HexConfig) => BrandedHex;
```

takes any value and tries our best to convert it to a hex string

## Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `string` \| `number` \| `bigint` \| `ArrayBufferLike` |
| `config?` | [`HexConfig`](#../interfaces/HexConfig) |

## Returns

[`BrandedHex`](#../type-aliases/BrandedHex)

  ### <a id="toHexLegacy"></a>toHexLegacy

[**@xylabs/sdk-js**](#../README)

***

```ts
const toHexLegacy: (buffer: ArrayBuffer) => string;
```

Converts an ArrayBuffer to a hex string without padding or normalization.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `buffer` | `ArrayBuffer` | The ArrayBuffer to convert |

## Returns

`string`

A lowercase hex string representation of the buffer

  ### <a id="toJsonArray"></a>toJsonArray

[**@xylabs/sdk-js**](#../README)

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
| `assert` | [`ZodFactoryConfig`](#../type-aliases/ZodFactoryConfig) |

### Returns

`T` & `unknown`[]

  ### <a id="toJsonObject"></a>toJsonObject

[**@xylabs/sdk-js**](#../README)

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
| `assert` | [`ZodFactoryConfig`](#../type-aliases/ZodFactoryConfig) |

### Returns

`T` & `Record`\<`string`, `unknown`\>

  ### <a id="toJsonValue"></a>toJsonValue

[**@xylabs/sdk-js**](#../README)

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
| `assert` | [`ZodFactoryConfig`](#../type-aliases/ZodFactoryConfig) |

### Returns

`T`

  ### <a id="toSafeJson"></a>toSafeJson

[**@xylabs/sdk-js**](#../README)

***

```ts
const toSafeJson: (value: unknown, maxDepth?: number) => JsonValue;
```

Converts a value to a JSON-safe representation, handling circular references and non-serializable types.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `value` | `unknown` | The value to convert. |
| `maxDepth?` | `number` | Maximum recursion depth. |

## Returns

[`JsonValue`](#../type-aliases/JsonValue)

A JSON-safe value.

  ### <a id="toSafeJsonArray"></a>toSafeJsonArray

[**@xylabs/sdk-js**](#../README)

***

```ts
const toSafeJsonArray: (value: unknown[], cycleList?: unknown[], maxDepth?: number) => any[];
```

Converts an array to a JSON-safe array, handling circular references and depth limits.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `value` | `unknown`[] | The array to convert. |
| `cycleList?` | `unknown`[] | Tracks visited objects to detect circular references. |
| `maxDepth?` | `number` | Maximum recursion depth before truncating. |

## Returns

`any`[]

A JSON-safe array representation.

  ### <a id="toSafeJsonObject"></a>toSafeJsonObject

[**@xylabs/sdk-js**](#../README)

***

```ts
const toSafeJsonObject: (value: object, cycleList?: unknown[], maxDepth?: number) => JsonObject;
```

Converts an object to a JSON-safe object, handling circular references and depth limits.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `value` | `object` | The object to convert. |
| `cycleList?` | `unknown`[] | Tracks visited objects to detect circular references. |
| `maxDepth?` | `number` | Maximum recursion depth before truncating. |

## Returns

[`JsonObject`](#../type-aliases/JsonObject)

A JSON-safe object representation.

  ### <a id="toSafeJsonString"></a>toSafeJsonString

[**@xylabs/sdk-js**](#../README)

***

```ts
const toSafeJsonString: (value: unknown, maxDepth?: number) => string;
```

Converts a value to a pretty-printed JSON string, safely handling circular references and non-JSON types.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `value` | `unknown` | The value to serialize. |
| `maxDepth?` | `number` | Maximum recursion depth. |

## Returns

`string`

A formatted JSON string.

  ### <a id="toSafeJsonValue"></a>toSafeJsonValue

[**@xylabs/sdk-js**](#../README)

***

```ts
const toSafeJsonValue: (value: unknown, cycleList?: unknown[], maxDepth?: number) => JsonValue;
```

Converts an unknown value to a JSON-safe value, replacing circular references with '[Circular]' and
non-JSON types with descriptive placeholder strings.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `value` | `unknown` | The value to convert. |
| `cycleList?` | `unknown`[] | Tracks visited objects to detect circular references. |
| `maxDepth?` | `number` | Maximum recursion depth before truncating with '[MaxDepth]'. |

## Returns

[`JsonValue`](#../type-aliases/JsonValue)

A JSON-safe representation of the value.

  ### <a id="typeOf"></a>typeOf

[**@xylabs/sdk-js**](#../README)

***

```ts
const typeOf: <T>(item: T) => TypeOfTypes;
```

Extended typeof that distinguishes arrays from objects (unlike native `typeof`).

## Type Parameters

| Type Parameter |
| ------ |
| `T` |

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `item` | `T` | The value to check. |

## Returns

[`TypeOfTypes`](#../type-aliases/TypeOfTypes)

The type of the item as a TypeOfTypes string.

  ### <a id="union"></a>union

[**@xylabs/sdk-js**](#../README)

***

```ts
const union: <TKey>(a: Set<TKey>, b: Set<TKey>) => Set<TKey>;
```

Returns a new set containing all elements from both `a` and `b`.

## Type Parameters

| Type Parameter |
| ------ |
| `TKey` |

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `a` | `Set`\<`TKey`\> | The first set |
| `b` | `Set`\<`TKey`\> | The second set |

## Returns

`Set`\<`TKey`\>

A new set representing the union of `a` and `b`

  ### <a id="uniq"></a>uniq

[**@xylabs/sdk-js**](#../README)

***

```ts
const uniq: <T>(arr: T[]) => T[];
```

Returns a new array with duplicate values removed.

## Type Parameters

| Type Parameter |
| ------ |
| `T` |

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `arr` | `T`[] | The input array |

## Returns

`T`[]

A deduplicated array

  ### <a id="uniqBy"></a>uniqBy

[**@xylabs/sdk-js**](#../README)

***

```ts
const uniqBy: <T, I>(arr: T[], iteratee: (item: T) => I) => T[];
```

Returns a new array with duplicates removed, using a key function for comparison.

## Type Parameters

| Type Parameter |
| ------ |
| `T` |
| `I` |

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `arr` | `T`[] | The input array |
| `iteratee` | (`item`: `T`) => `I` | Function that returns the key to compare by |

## Returns

`T`[]

A deduplicated array keeping the first occurrence of each key

  ### <a id="validateType"></a>validateType

[**@xylabs/sdk-js**](#../README)

***

```ts
const validateType: <T>(typeName: TypeOfTypes, value: T, optional?: boolean) => [T | undefined, Error[]];
```

Validates that a value matches the expected type, returning the value and any errors.

## Type Parameters

| Type Parameter |
| ------ |
| `T` |

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `typeName` | [`TypeOfTypes`](#../type-aliases/TypeOfTypes) | The expected type name. |
| `value` | `T` | The value to validate. |
| `optional?` | `boolean` | If true, undefined values are accepted without error. |

## Returns

\[`T` \| `undefined`, `Error`[]\]

A tuple of [value or undefined, array of errors].


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
[npm-badge]: https://img.shields.io/npm/v/@xylabs/sdk-js.svg
[npm-link]: https://www.npmjs.com/package/@xylabs/sdk-js
[codacy-badge]: https://app.codacy.com/project/badge/Grade/c8e15e14f37741c18cfb47ac7245c698
[codacy-link]: https://www.codacy.com/gh/xylabs/sdk-js/dashboard?utm_source=github.com&utm_medium=referral&utm_content=xylabs/sdk-js&utm_campaign=Badge_Grade
[codeclimate-badge]: https://api.codeclimate.com/v1/badges/c5eb068f806f0b047ea7/maintainability
[codeclimate-link]: https://codeclimate.com/github/xylabs/sdk-js/maintainability
[snyk-badge]: https://snyk.io/test/github/xylabs/sdk-js/badge.svg?targetFile=package.json
[snyk-link]: https://snyk.io/test/github/xylabs/sdk-js?targetFile=package.json

[npm-downloads-badge]: https://img.shields.io/npm/dw/@xylabs/sdk-js
[npm-license-badge]: https://img.shields.io/npm/l/@xylabs/sdk-js

[jsdelivr-badge]: https://data.jsdelivr.com/v1/package/npm/@xylabs/sdk-js/badge
[jsdelivr-link]: https://www.jsdelivr.com/package/npm/@xylabs/sdk-js

[socket-badge]: https://socket.dev/api/badge/npm/package/@xylabs/sdk-js
[socket-link]: https://socket.dev/npm/package/@xylabs/sdk-js