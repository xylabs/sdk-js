import type { AssertConfig } from '@xylabs/error'

/** Configuration object for zod factory functions, providing a name for error messages. */
export interface ZodFactoryConfigObject {
  name: string
}

/** Configuration for zod factory assertion behavior, either an AssertConfig or a named config object. */
export type ZodFactoryConfig = AssertConfig | ZodFactoryConfigObject
