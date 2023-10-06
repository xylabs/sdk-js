// eslint-disable-next-line @typescript-eslint/no-var-requires
const argv = require('minimist')(process.argv.slice(2))

import { matchFilter } from './filter'

//Based on https://www.npmjs.com/package/jest-tags/v/1.0.1

export const args = argv(process.argv.slice(2))

export function tags(...tagLabels: string[]) {
  const filter = matchFilter(args.tags)
  const thisGlobal = global

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const chain: Record<string, any> = {}

  const filterMatch = filter(tagLabels)

  chain.test = filterMatch ? thisGlobal.test : thisGlobal.xtest
  chain.test.only = thisGlobal.test.only
  chain.test.skip = thisGlobal.test.skip
  chain.xtest = thisGlobal.xtest

  return chain
}
