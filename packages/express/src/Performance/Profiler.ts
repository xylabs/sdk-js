export class Profiler {
  stats: Record<string, number> = {}

  async profile<T>(name: string, promise: Promise<T>) {
    const start = Date.now()
    const result = await promise
    this.stats[name] = Date.now() - start
    return result
  }
}
