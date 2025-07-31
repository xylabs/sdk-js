import type { BaseParams } from './Base.ts'
import { Base } from './Base.ts'
import { globallyUnique } from './globallyUnique.ts'

export abstract class UniqueBase<TParams extends BaseParams = BaseParams> extends Base<TParams> {
  static readonly uniqueDomain = 'xy'
  static readonly uniqueName = globallyUnique(this.name, this, this.uniqueDomain)
  // TODO: Remove xyo domain version when old xyo versions are no longer needed
  static readonly uniqueNameXyo = globallyUnique(this.name, this, 'xyo')
  constructor(params: BaseParams<TParams>) {
    super(params)
  }
}
