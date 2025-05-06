/**
 * Conditionally runs or skips the describe
 * @param expr The condition to evaluate
 * @returns If the condition is true, describe, otherwise skips
 */
// eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
export const describeIf = <T>(expr?: T | null) => (expr ? describe : describe.skip)
