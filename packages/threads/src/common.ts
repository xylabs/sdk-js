/* eslint-disable @typescript-eslint/no-explicit-any */
import type { JsonSerializable, Serializer, SerializerImplementation } from './serializers'
import { DefaultSerializer, extendSerializer } from './serializers'

let registeredSerializer: Serializer<JsonSerializable> = DefaultSerializer

export function registerSerializer(serializer: SerializerImplementation<JsonSerializable>) {
  registeredSerializer = extendSerializer(registeredSerializer, serializer)
}

export function deserialize(message: JsonSerializable): any {
  return registeredSerializer.deserialize(message)
}

export function serialize(input: any): JsonSerializable {
  return registeredSerializer.serialize(input)
}
