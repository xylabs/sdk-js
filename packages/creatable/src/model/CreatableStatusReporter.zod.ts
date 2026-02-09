import { z } from 'zod'

export const CreatableStatusSuccessZod = z.enum(['creating', 'created', 'starting', 'started', 'stopping', 'stopped'])

export const CreatableStatusErrorZod = z.enum(['error'])

export const CreatableStatusZod = z.union([CreatableStatusSuccessZod, CreatableStatusErrorZod])

export const CreatableStatusReporterV2Zod = z.object({
  report: z.union([
    z.function({
      input: z.union([
        z.tuple([
          z.string(),
          CreatableStatusSuccessZod,
          z.number().optional(),
        ]),
        z.tuple([
          z.string(),
          CreatableStatusErrorZod,
          z.instanceof(Error),
        ]),
        z.tuple([
          z.string(),
          CreatableStatusZod,
        ]),
      ]),
      output: z.void(),
    }),
  ]),
})
