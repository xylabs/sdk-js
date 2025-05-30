export type Profiler = Record<string, number[]>

export const createProfiler = (): Profiler => {
  return {}
}

export const profile = (profiler: Profiler, name: string) => {
  const timeData = profiler[name] ?? []
  timeData.push(Date.now())
  profiler[name] = timeData
}

export const profileReport = (profiler: Profiler) => {
  let lowest = Date.now()
  let highest = 0
  // eslint-disable-next-line unicorn/no-array-reduce
  const results = Object.entries(profiler).reduce<Record<string, number>>((prev, [name, readings]) => {
    const start = readings.at(0)
    if (start !== undefined) {
      if (start < lowest) {
        lowest = start
      }
      const end = readings.at(-1) ?? Date.now()
      if (end > highest) {
        highest = end
      }
      prev[name] = end - start
    }
    return prev
  }, {})
  if (highest > 0) {
    results['-all-'] = highest - lowest
  }
  return results
}
