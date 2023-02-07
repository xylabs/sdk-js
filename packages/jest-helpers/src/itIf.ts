/**
 * Conditionally runs or skips the it
 * @param expr The condition to evaluate
 * @returns If the condition is true, it, otherwise skips
 */
export const itIf = <T>(expr?: T | null) => (expr ? it : it.skip)
