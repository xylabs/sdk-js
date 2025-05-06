/**
 * Conditionally runs or skips the test
 * @param expr The condition to evaluate
 * @returns If the condition is true, test, otherwise skips
 */
// eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
export const testIf = <T>(expr?: T | null) => (expr ? test : test.skip)
