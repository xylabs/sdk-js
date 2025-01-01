import type { EnumValue } from '@xylabs/object'
import { Enum } from '@xylabs/object'

export const ApiStage = Enum({
  Beta: 'beta',
  Local: 'local',
  Prod: 'prod',
})

export type ApiStage = EnumValue<typeof ApiStage>
