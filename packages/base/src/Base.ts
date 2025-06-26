import type {
  Meter,
  MeterProvider, Tracer, TracerProvider,
} from '@opentelemetry/api'
import { assertEx } from '@xylabs/assert'
import type { Logger } from '@xylabs/logger'
import type { EmptyObject } from '@xylabs/object'

import { globallyUnique } from './globallyUnique.ts'

const DEFAULT_HISTORY_INTERVAL = 1000 * 5
const DEFAULT_HISTORY_TIME = 60 * 60 * 1000
const MAX_GC_FREQUENCY = 1000 * 60
const MIN_GC_FREQUENCY = 1000
const MIN_HISTORY_INTERVAL = 1000

export type BaseClassName = Exclude<string, 'base-class-name-reserved-32546239486'>

export type BaseParamsFields = {
  logger?: Logger
  meterProvider?: MeterProvider
  traceProvider?: TracerProvider
}

export type BaseParams<TAdditionalParams extends EmptyObject = EmptyObject> = TAdditionalParams & BaseParamsFields

export abstract class Base<TParams extends BaseParams = BaseParams> {
  static defaultLogger?: Logger
  static readonly globalInstances: Record<BaseClassName, WeakRef<Base>[]> = {}
  static readonly globalInstancesCountHistory: Record<BaseClassName, number[]> = {}
  static readonly uniqueName = globallyUnique(this.name, this, 'xyo')
  private static _historyInterval = DEFAULT_HISTORY_INTERVAL
  private static _historyTime = DEFAULT_HISTORY_TIME
  private static _historyTimeout?: ReturnType<typeof setTimeout>
  private static _lastGC = 0
  private static _maxGcFrequency = MAX_GC_FREQUENCY
  private _params: BaseParams<TParams>

  constructor(params: BaseParams<TParams>) {
    this._params = params
    params?.logger?.debug(`Base constructed [${Object(this).name}]`)
    this.recordInstance()
  }

  static get historyInterval() {
    return this._historyInterval
  }

  static set historyInterval(value: number) {
    assertEx(value <= this.historyTime, () => `historyInterval [${value}] must be less than or equal to historyTime [${this.historyTime}]`)
    this._historyInterval = Math.max(value, MIN_HISTORY_INTERVAL)
  }

  static get historyTime() {
    return this._historyTime
  }

  static set historyTime(value: number) {
    assertEx(value >= this.historyInterval, () => `historyTime [${value}] must be greater than or equal to historyInterval [${this.historyInterval}]`)
    this._historyInterval = value
  }

  static get maxGcFrequency() {
    return this._maxGcFrequency
  }

  static set maxGcFrequency(value: number) {
    this._maxGcFrequency = Math.max(value, MIN_GC_FREQUENCY)
  }

  static get maxHistoryDepth() {
    return Math.floor(this.historyTime / this.historyInterval)
  }

  get logger() {
    return this.params?.logger ?? Base.defaultLogger
  }

  get meter(): Meter | undefined {
    return this.params?.meterProvider?.getMeter(this.constructor.name)
  }

  get params() {
    return this._params
  }

  get tracer(): Tracer | undefined {
    return this.params?.traceProvider?.getTracer(this.constructor.name)
  }

  static gc(force?: boolean): void
  static gc(className: string): void
  static gc(classNameOrForce: string | boolean = false): void {
    if (typeof classNameOrForce === 'string') {
      this.gcClass(classNameOrForce)
    } else {
      if (classNameOrForce || Date.now() - this._lastGC > this._maxGcFrequency) {
        this.gcAll()
      }
    }
  }

  static instanceCount(className: string): number {
    return this.globalInstances[className]?.length ?? 0
  }

  static instanceCounts(): Record<BaseClassName, number> {
    this.gc()
    const result: Record<BaseClassName, number> = {}
    for (const [className, instances] of Object.entries(this.globalInstances)) result[className] = instances.length
    return result
  }

  static startHistory(): void {
    if (this._historyTimeout) {
      this.stopHistory()
    }

    const timeoutHandler = () => {
      if (this._historyTimeout) {
        this.addToHistory()
        this._historyTimeout = setTimeout(timeoutHandler, this.historyInterval)
      }
    }

    this._historyTimeout = setTimeout(timeoutHandler, this.historyInterval)
  }

  static stopHistory(): void {
    if (this._historyTimeout) {
      clearTimeout(this._historyTimeout)
      this._historyTimeout = undefined
    }
  }

  private static addToHistory() {
    const counts = this.instanceCounts()
    for (const className of Object.keys(this.globalInstances)) {
      this.globalInstancesCountHistory[className] = this.globalInstancesCountHistory[className]?.slice(-this.maxHistoryDepth) ?? []
      this.globalInstancesCountHistory[className].push(counts[className])
    }
  }

  private static gcAll() {
    for (const className of Object.keys(this.globalInstances)) {
      this.gcClass(className)
    }
  }

  private static gcClass(className: BaseClassName) {
    // remove all the weak refs that are now empty
    this.globalInstances[className] = this.globalInstances[className]?.filter(ref => ref.deref() !== null) ?? []
  }

  private recordInstance() {
    const instanceArray = Base.globalInstances[this.constructor.name] ?? []
    instanceArray.push(new WeakRef(this))
    Base.globalInstances[this.constructor.name] = instanceArray
  }
}
