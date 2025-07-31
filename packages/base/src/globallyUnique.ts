declare global {
  var xylabs: {
    unique: Record<string, unknown>
    uniqueDisabled?: boolean
  }
}

const xyoGlobal = () => {
  globalThis.xylabs = globalThis.xylabs ?? {}
  return globalThis.xylabs
}

export const disableGloballyUnique = () => {
  xyoGlobal().uniqueDisabled = true
}

export const globallyUnique = (name: string | symbol, value: unknown, domain = 'global') => {
  const uniqueName = domain === 'bundle' ? [domain, name].join(':') : [domain, import.meta.url, name].join(':')
  if (!xyoGlobal().uniqueDisabled) {
    const xylabs = globalThis.xylabs = globalThis.xylabs ?? {}
    const unique = (xylabs.unique = xylabs.unique ?? {})
    if (unique[uniqueName] === undefined) {
      unique[uniqueName] = value
    } else {
      if (unique[uniqueName] !== value) {
        throw new Error(
          `Global unique item ${uniqueName} already defined.  Make sure you are not importing two versions of the package that contains this item`,
        )
      }
    }
  }
  return uniqueName
}
