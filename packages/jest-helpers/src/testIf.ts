/**
 * Conditionally runs or skips the test
 * @param condition The condition to evaluate
 * @returns If the condition is true, test, otherwise skips
 */
export const testIf = (condition: boolean) => (condition ? test : test.skip)
