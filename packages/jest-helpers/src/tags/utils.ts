import { RESERVED_COMMANDS } from './config.js'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getJestPassedParams = (argv: any) => {
  return [...argv, '-i'].filter((prop) => {
    return prop.startsWith('-') && RESERVED_COMMANDS.every((command) => command !== prop)
  })
}
