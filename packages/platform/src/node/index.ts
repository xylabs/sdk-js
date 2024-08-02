export { subtle } from 'node:crypto'

export const isBrowser = () => {
  return false
}

export const isWebworker = () => {
  return false
}

export const getGlobal = <T extends object>() =>
  isBrowser()
    ? (window as unknown as T)
    : isWebworker()
      ? (self as unknown as T)
      : globalThis
