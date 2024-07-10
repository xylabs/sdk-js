import { describeIf } from '../describeIf.js'
import { itIf } from '../itIf.js'
import { testIf } from '../testIf.js'
import { matchFilter } from './filter.js'

//Based on https://www.npmjs.com/package/jest-tags/v/1.0.1

export function tags(...tagLabels: string[]) {
  const tagsParam = process.argv.indexOf('--tags')
  const passedTags = tagsParam > 0 ? process.argv[tagsParam + 1] : undefined
  const filter = matchFilter(passedTags)
  const thisGlobal = global

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const chain: Record<string, any> = {}

  const filterMatch = filter(tagLabels)

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  chain.describeIf = filterMatch ? describeIf : (_param: any) => describe.skip
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  chain.itIf = filterMatch ? itIf : (_param: any) => it.skip
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  chain.testIf = filterMatch ? testIf : (_param: any) => test.skip
  chain.describe = filterMatch ? thisGlobal.describe : thisGlobal.xdescribe
  chain.it = filterMatch ? thisGlobal.it : thisGlobal.xit
  chain.test = filterMatch ? thisGlobal.test : thisGlobal.xtest
  chain.test.only = thisGlobal.test.only
  chain.test.skip = thisGlobal.test.skip
  chain.xtest = thisGlobal.xtest
  chain.xit = thisGlobal.xit

  return chain
}
