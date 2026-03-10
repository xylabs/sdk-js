import type { EnumValue } from '@xylabs/enum'
import { Enum } from '@xylabs/enum'

/** Deployment stage identifiers for API environments. */
export const ApiStage = Enum({
  Beta: 'beta',
  Local: 'local',
  Prod: 'prod',
})

/** A valid API stage value ('prod', 'beta', or 'local'). */
export type ApiStage = EnumValue<typeof ApiStage>
