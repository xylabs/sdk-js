import type { Express } from 'express'

import type { RouteDefinition } from './RouteDefinition.ts'

export const addRouteDefinitions = (app: Express, routeDefinitions: RouteDefinition[]) => {
  for (const definition of routeDefinitions) {
    app[definition.method](definition.path, definition.handlers)
  }
}
