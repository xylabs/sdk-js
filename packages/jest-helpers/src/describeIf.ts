/**
 * Conditionally runs or skips the describe
 * @param condition The condition to evaluate
 * @returns If the condition is true, describe, otherwise skips
 */
export const describeIf = (condition: boolean) => (condition ? describe : describe.skip)
