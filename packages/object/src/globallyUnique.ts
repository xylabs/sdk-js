interface XylabsGlobalThis {
  xylabs: {
    unique: Record<string, unknown>
    uniqueDisabled?: boolean
  }
}

const xyoGlobal = () => {
  return ((globalThis as unknown as XylabsGlobalThis).xylabs = (globalThis as unknown as XylabsGlobalThis).xylabs ?? {})
}

export const disableGloballyUnique = () => {
  xyoGlobal().uniqueDisabled = true
}

export const globallyUnique = (name: string, value: unknown, domain = 'global') => {
  const uniqueName = [domain, name].join(':')
  if (!xyoGlobal().uniqueDisabled) {
    const xyo = ((globalThis as unknown as XylabsGlobalThis).xylabs = (globalThis as unknown as XylabsGlobalThis).xylabs ?? {})
    const unique = (xyo.unique = xyo.unique ?? {})
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
