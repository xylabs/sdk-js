import type * as z from 'zod'

/**
 * Creates a type guard function that checks if a value matches a zod schema.
 * @param zod - The zod schema to validate against
 * @returns A type guard function that returns true if the value passes validation
 */
export function zodIsFactory<TZod>(zod: z.ZodType<TZod>) {
  return <T>(value: T): value is T & TZod => zod.safeParse(value).success
}
