import type z from 'zod'

import { zodAsAsyncFactory } from './zodAsAsyncFactory.ts'

export function zodToAsyncFactory<T>(zod: z.ZodType<T>, name: string) {
  return zodAsAsyncFactory<T>(zod, name)
}
