/**
 * @internal
 * A function that takes a possibly null or undefined value and returns an error message string.
 * Used in assertion functions to provide custom error messages.
 *
 * @internal
 * @template T - The type of value being asserted
 * @param value - The value being asserted (may be null or undefined)
 * @returns A string message to be used in the error thrown by the assertion
 * @example
 * ```typescript
 * const messageFunc: AssertExMessageFunc<User> = (user) =>
 *   `User ${user ? user.id : 'unknown'} is not valid or accessible`
 * ```
 */
export type AssertExMessageFunc<T> = (value?: T | null) => string

/**
 * A function that takes a possibly null or undefined value and returns a custom error instance.
 * Used in assertion functions to provide specific error types with custom properties.
 *
 * @internal
 * @template T - The type of value being asserted
 * @template R - The specific error type to be returned, must extend Error
 * @param value - The value being asserted (may be null or undefined)
 * @returns An instance of the custom error type
 * @example
 * ```typescript
 * const errorFunc: AssertExErrorFunc<User, UserNotFoundError> = (user) =>
 *   new UserNotFoundError(`User ${user?.id || 'unknown'} not found`, {
 *     userId: user?.id,
 *     timestamp: new Date()
 *   })
 * ```
 */
export type AssertExErrorFunc<T, R extends Error> = (value?: T | null) => R
