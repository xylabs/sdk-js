import type { Express } from 'express-serve-static-core'

import type { RouteDefinition } from './RouteDefinition.ts'

/**
 * Registers an array of route definitions on an Express application.
 * @param app The Express application to register routes on.
 * @param routeDefinitions The route definitions to register.
 */
export const addRouteDefinitions = (app: Express, routeDefinitions: RouteDefinition[]) => {
  for (const definition of routeDefinitions) {
    app[definition.method](definition.path, definition.handlers)
  }
}
