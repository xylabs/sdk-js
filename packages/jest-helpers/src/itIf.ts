/**
 * Conditionally runs or skips the it
 * @param condition The condition to evaluate
 * @returns If the condition is true, it, otherwise skips
 */
export const itIf = (condition: boolean) => (condition ? it : it.skip)
