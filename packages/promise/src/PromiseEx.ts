/** A resolve/reject callback used within PromiseEx. */
export type PromiseExSubFunc<T, TResult = T> = (value: T) => TResult

/** The executor function passed to the PromiseEx constructor. */
export type PromiseExFunc<T> = (resolve?: PromiseExSubFunc<T, void>, reject?: PromiseExSubFunc<T, void>) => void

/** A callback that inspects the attached value and returns whether to cancel the promise. */
export type PromiseExValueFunc<V> = (value?: V) => boolean

/**
 * An extended Promise that carries an optional attached value and supports cancellation.
 * The value can be inspected via the `then` or `value` methods to conditionally cancel.
 */
export class PromiseEx<T, V = void> extends Promise<T> {
  /** Whether the promise has been cancelled via a value callback. */
  cancelled?: boolean
  private _value?: V

  constructor(func: PromiseExFunc<T>, value?: V) {
    super(func)
    this._value = value
  }

  // eslint-disable-next-line unicorn/no-thenable
  override then<TResult1 = T, TResult2 = never>(
    onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | null | undefined,
    onrejected?: ((reason: unknown) => TResult2 | PromiseLike<TResult2>) | null | undefined,
    onvalue?: (value?: V) => boolean,
  ): Promise<TResult1 | TResult2> {
    if (onvalue?.(this._value)) {
      this.cancelled = true
    }
    return super.then(onfulfilled, onrejected)
  }

  /**
   * Inspects the attached value via the callback; if it returns true, marks the promise as cancelled.
   * @param onvalue - A callback that receives the attached value and returns whether to cancel.
   * @returns This instance for chaining.
   */
  value(onvalue?: (value?: V) => boolean) {
    if (onvalue?.(this._value)) {
      this.cancelled = true
    }
    return this
  }
}
