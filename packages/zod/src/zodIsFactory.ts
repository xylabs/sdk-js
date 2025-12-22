import type { ZodType } from 'zod'

export function zodIsFactory<TZod>(zod: ZodType<TZod>) {
  return <T>(value: T): value is T & TZod => zod.safeParse(value).success
}
