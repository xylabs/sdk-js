export class Counters {
  static counters: Record<string, number> = {}

  static inc(name: string, count = 1) {
    this.catchError(name, (name: string) => {
      this.counters[name] = (this.counters[name] ?? 0) + count
    })
  }

  static max(name: string, count: number) {
    this.catchError(name, (name: string) => {
      const currentValue = this.counters[name]
      if (currentValue === undefined || count > currentValue) {
        this.counters[name] = count
      }
    })
  }

  static min(name: string, count: number) {
    this.catchError(name, (name: string) => {
      const currentValue = this.counters[name]
      if (currentValue === undefined || count < currentValue) {
        this.counters[name] = count
      }
    })
  }

  private static catchError = (name: string, func: (name: string) => void) => {
    try {
      func(name)
    } catch {
      this.counters[name] = 0
      this.inc('CountersErrors')
    }
  }
}
