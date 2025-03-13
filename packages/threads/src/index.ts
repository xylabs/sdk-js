/* eslint-disable import-x/no-internal-modules */
export { registerSerializer } from './common.ts'
export * from './master/index.ts'
export type { QueuedTask } from './master/pool.ts'
export type { ExposedToThreadType as ExposedAs } from './master/spawn.ts'
export {
  DefaultSerializer, type JsonSerializable, type Serializer, type SerializerImplementation,
} from './serializers.ts'
export { Transfer, type TransferDescriptor } from './transferable.ts'
export { expose } from './worker/index.ts'
