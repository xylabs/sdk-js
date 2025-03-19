/* eslint-disable import-x/no-internal-modules */
export { registerSerializer } from './common.ts'
export * from './master/index.ts'
export type { QueuedTask } from './master/pool.ts'
export type { ExposedToThreadType as ExposedAs } from './master/spawn.ts'
export type {
  JsonSerializable, Serializer, SerializerImplementation,
} from './serializers.ts'
export { DefaultSerializer } from './serializers.ts'
export type { TransferDescriptor } from './transferable.ts'
export { Transfer } from './transferable.ts'
