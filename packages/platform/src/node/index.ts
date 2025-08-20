export { subtle } from 'node:crypto'

export const isBrowser = () => {
  return false
}

export const isWebworker = () => {
  return false
}

export const isNode = () => {
  return true
}
