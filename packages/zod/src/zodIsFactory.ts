import type z from 'zod'

export function zodIsFactory<TZod extends z.ZodTypeAny>(zod: TZod) {
  return <T>(value: T): value is T & z.output<TZod> => zod.safeParse(value).success
}
