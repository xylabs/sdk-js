/* eslint-disable @typescript-eslint/no-explicit-any */
import type {
  JsonSerializable, Serializer, SerializerImplementation,
} from './serializers.ts'
import { DefaultSerializer, extendSerializer } from './serializers.ts'

declare global {
  var registeredSerializer: Serializer<JsonSerializable>
}

globalThis.registeredSerializer = globalThis.registeredSerializer ?? DefaultSerializer

export function registerSerializer(serializer: SerializerImplementation<JsonSerializable>) {
  globalThis.registeredSerializer = extendSerializer(globalThis.registeredSerializer, serializer)
}

export function deserialize(message: JsonSerializable): any {
  return globalThis.registeredSerializer.deserialize(message)
}

export function serialize(input: any): JsonSerializable {
  return globalThis.registeredSerializer.serialize(input)
}
