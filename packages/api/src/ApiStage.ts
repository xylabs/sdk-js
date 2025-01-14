import type { EnumValue } from '@xylabs/enum'
import { Enum } from '@xylabs/enum'

export const ApiStage = Enum({
  Beta: 'beta',
  Local: 'local',
  Prod: 'prod',
})

export type ApiStage = EnumValue<typeof ApiStage>
