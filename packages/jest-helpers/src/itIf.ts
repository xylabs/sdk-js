/**
 * Conditionally runs or skips the it
 * @param expr The condition to evaluate
 * @returns If the condition is true, it, otherwise skips
 */
// eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
export const itIf = <T>(expr?: T | null) => (expr ? it : it.skip)
