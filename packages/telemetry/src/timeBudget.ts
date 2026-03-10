import type { Logger } from '@xylabs/logger'

/**
 * Executes an async function and logs a warning if it exceeds the given time budget.
 * @param name - A label for the function, used in warning messages.
 * @param logger - The logger to use for budget-exceeded warnings.
 * @param func - The async function to execute.
 * @param budget - The time budget in milliseconds.
 * @param status - If true, logs periodic warnings while the function is still running.
 * @returns The result of the executed function.
 */
export async function timeBudget<TResult>(
  name: string,
  logger: Logger | undefined,
  func: () => Promise<TResult>,
  budget: number,
  status = false,
): Promise<TResult> {
  const start = Date.now()
  const timer = status
    ? setInterval(() => {
        const duration = Date.now() - start
        if ((budget > 0) && (duration > budget)) {
          logger?.warn(`Function [${name}] execution is exceeding budget: ${duration}ms > ${budget}ms`)
        }
      }, Math.max(100, budget))
    : undefined

  const result = await func()
  const duration = Date.now() - start

  if (!timer && (budget > 0) && (duration > budget)) {
    logger?.warn(`Function [${name}] execution exceeded budget: ${duration}ms > ${budget}ms`)
  }
  if (timer) {
    clearInterval(timer)
  }
  return result
}
