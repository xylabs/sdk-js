import type {
  Application, NextFunction, Request, Response,
} from 'express-serve-static-core'

import { Counters } from '../../Performance/index.ts'

/**
 * Registers middleware that increments per-path request counters and exposes a /stats endpoint.
 * @param app The Express application to attach counters to.
 */
export const useRequestCounters = (app: Application): void => {
  // Configure Global counters
  app.use((req: Request, res: Response, next: NextFunction) => {
    Counters.inc(req.path)
    Counters.inc('_calls')
    next()
  })

  app.get('/stats', (req: Request, res: Response, next: NextFunction) => {
    /* #swagger.tags = ['Metrics'] */
    /* #swagger.summary = 'Get the counters for single instance of diviner' */
    res.json({
      alive: true,
      avgTime: `${((Counters.counters._totalTime ?? 0) / (Counters.counters._calls ?? 1)).toFixed(2)}ms`,
      counters: Counters.counters,
    })
    next()
  })
}
