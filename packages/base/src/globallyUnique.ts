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

/** Disables global uniqueness checks, allowing duplicate registrations without throwing. */
export const disableGloballyUnique = () => {
  xyoGlobal().uniqueDisabled = true
}

/**
 * Registers a value as globally unique under the given name and domain.
 * Throws if a different value is already registered under the same key.
 * @param name - The unique name or symbol
 * @param value - The value to register
 * @param domain - The namespace domain (default 'global')
 * @returns The fully qualified unique name
 */
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
