/* eslint-disable @typescript-eslint/no-explicit-any */
import type {
  JsonSerializable, Serializer, SerializerImplementation,
} from './serializers.ts'
import { DefaultSerializer, extendSerializer } from './serializers.ts'

declare global {
  var registeredSerializer: Serializer<JsonSerializable>
}

globalThis.registeredSerializer = globalThis.registeredSerializer ?? DefaultSerializer

/**
 * Register a custom serializer to extend the default serialization behavior for worker messages.
 * @param serializer - The serializer implementation to register.
 */
export function registerSerializer(serializer: SerializerImplementation<JsonSerializable>) {
  globalThis.registeredSerializer = extendSerializer(globalThis.registeredSerializer, serializer)
}

/**
 * Deserialize a message using the registered serializer.
 * @param message - The serialized message to deserialize.
 * @returns The deserialized value.
 */
export function deserialize(message: JsonSerializable): any {
  return globalThis.registeredSerializer.deserialize(message)
}

/**
 * Serialize an input value using the registered serializer.
 * @param input - The value to serialize.
 * @returns The serialized message.
 */
export function serialize(input: any): JsonSerializable {
  return globalThis.registeredSerializer.serialize(input)
}
