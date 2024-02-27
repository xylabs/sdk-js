/* eslint-disable @typescript-eslint/no-explicit-any */
export type SettlementResult<T> =
  | {
      status: 'fulfilled'
      value: T
    }
  | {
      reason: any
      status: 'rejected'
    }

// Based on <https://github.com/es-shims/Promise.allSettled/blob/master/implementation.js>
export function allSettled<T>(values: T[]): Promise<Array<SettlementResult<T>>> {
  return Promise.all(
    values.map((item) => {
      const onFulfill = (value: T) => {
        return { status: 'fulfilled', value } as const
      }
      const onReject = (reason: any) => {
        return { reason, status: 'rejected' } as const
      }

      const itemPromise = Promise.resolve(item)
      try {
        return itemPromise.then(onFulfill, onReject)
      } catch (error) {
        return Promise.reject(error)
      }
    }),
  )
}
