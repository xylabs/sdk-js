import { describeIf } from '../describeIf.ts'
import { itIf } from '../itIf.ts'
import { testIf } from '../testIf.ts'
import { matchFilter } from './filter.ts'

// Based on https://www.npmjs.com/package/jest-tags/v/1.0.1

export function tags(...tagLabels: string[]) {
  const tagsParam = process.argv.indexOf('--tags')
  const passedTags = tagsParam > 0 ? process.argv[tagsParam + 1] : undefined
  const filter = matchFilter(passedTags)

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const chain: Record<string, any> = {}

  const filterMatch = filter(tagLabels)

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  chain.describeIf = filterMatch ? describeIf : (_param: any) => describe.skip
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  chain.itIf = filterMatch ? itIf : (_param: any) => it.skip
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  chain.testIf = filterMatch ? testIf : (_param: any) => test.skip
  chain.describe = filterMatch ? globalThis.describe : globalThis.xdescribe
  chain.it = filterMatch ? globalThis.it : globalThis.xit
  chain.test = filterMatch ? globalThis.test : globalThis.xtest
  chain.test.only = globalThis.test.only
  chain.test.skip = globalThis.test.skip
  chain.xtest = globalThis.xtest
  chain.xit = globalThis.xit

  return chain
}
