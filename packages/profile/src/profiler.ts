/** A record of named timing entries, where each key maps to an array of timestamps. */
export type Profiler = Record<string, number[]>

/** Creates a new empty profiler instance. */
export const createProfiler = (): Profiler => {
  return {}
}

/**
 * Records a timestamp for the given profile name.
 * @param profiler - The profiler instance to record into.
 * @param name - The name of the timing entry.
 */
export const profile = (profiler: Profiler, name: string) => {
  const timeData = profiler[name] ?? []
  timeData.push(Date.now())
  profiler[name] = timeData
}

/**
 * Generates a report of elapsed times for each profiled entry.
 * @param profiler - The profiler instance to report on.
 * @returns A record mapping each profile name to its elapsed time in milliseconds, plus a '-all-' total.
 */
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
