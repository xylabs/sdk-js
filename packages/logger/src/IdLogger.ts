import { getFunctionName } from './getFunctionName.ts'
import { Logger } from './Logger.ts'

export class IdLogger implements Logger {
  private _id?: () => string
  private _logger: Logger

  constructor(logger: Logger, id?: () => string) {
    this._logger = logger
    this._id = id
  }

  set id(id: string) {
    this._id = () => id
  }

  debug(...data: unknown[]) {
    this._logger?.debug(this.prefix(), ...data)
  }
  error(...data: unknown[]) {
    this._logger?.error(this.prefix(), ...data)
  }
  info(...data: unknown[]) {
    this._logger?.info(this.prefix(), ...data)
  }
  log(...data: unknown[]) {
    this._logger?.log(this.prefix(), ...data)
  }
  warn(...data: unknown[]) {
    this._logger?.warn(this.prefix(), ...data)
  }

  private prefix() {
    return `[${this._id?.()}|${getFunctionName(4)}]`
  }
}
