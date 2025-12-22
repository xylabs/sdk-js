import type * as z from 'zod'

export function zodIsFactory<TZod>(zod: z.ZodType<TZod>) {
  return <T>(value: T): value is T & TZod => zod.safeParse(value).success
}
