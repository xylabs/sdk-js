import type { AssertConfig } from '@xylabs/error'

export interface ZodFactoryConfigObject {
  name: string
}

export type ZodFactoryConfig = AssertConfig | ZodFactoryConfigObject
