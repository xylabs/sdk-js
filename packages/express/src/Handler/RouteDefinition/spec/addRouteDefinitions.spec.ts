import type { Express } from 'express-serve-static-core'
import {
  describe, expect, it, vi,
} from 'vitest'

import { addRouteDefinitions } from '../addRouteDefinitions.ts'
import type { RouteDefinition } from '../RouteDefinition.ts'

describe('addRouteDefinitions', () => {
  it('should register routes on the app for each definition', () => {
    const handler1 = vi.fn()
    const handler2 = vi.fn()

    const app = {
      get: vi.fn(),
      post: vi.fn(),
    } as unknown as Express

    const routes: RouteDefinition[] = [
      {
        method: 'get', path: '/foo', handlers: handler1,
      },
      {
        method: 'post', path: '/bar', handlers: [handler2],
      },
    ]

    addRouteDefinitions(app, routes)

    expect(app.get).toHaveBeenCalledWith('/foo', handler1)
    expect(app.post).toHaveBeenCalledWith('/bar', [handler2])
  })

  it('should handle an empty array of route definitions', () => {
    const app = { get: vi.fn() } as unknown as Express
    addRouteDefinitions(app, [])
    expect(app.get).not.toHaveBeenCalled()
  })

  it('should register put, patch, delete, options, and head methods', () => {
    const handler = vi.fn()
    const app = {
      put: vi.fn(),
      patch: vi.fn(),
      delete: vi.fn(),
      options: vi.fn(),
      head: vi.fn(),
    } as unknown as Express

    const routes: RouteDefinition[] = [
      {
        method: 'put', path: '/a', handlers: handler,
      },
      {
        method: 'patch', path: '/b', handlers: handler,
      },
      {
        method: 'delete', path: '/c', handlers: handler,
      },
      {
        method: 'options', path: '/d', handlers: handler,
      },
      {
        method: 'head', path: '/e', handlers: handler,
      },
    ]

    addRouteDefinitions(app, routes)

    expect(app.put).toHaveBeenCalledWith('/a', handler)
    expect(app.patch).toHaveBeenCalledWith('/b', handler)
    expect(app.delete).toHaveBeenCalledWith('/c', handler)
    expect(app.options).toHaveBeenCalledWith('/d', handler)
    expect(app.head).toHaveBeenCalledWith('/e', handler)
  })

  it('should support RegExp paths', () => {
    const handler = vi.fn()
    const pattern = /^\/api\/.*/
    const app = { get: vi.fn() } as unknown as Express

    const routes: RouteDefinition[] = [
      {
        method: 'get', path: pattern, handlers: handler,
      },
    ]

    addRouteDefinitions(app, routes)

    expect(app.get).toHaveBeenCalledWith(pattern, handler)
  })

  it('should support multiple handlers in an array', () => {
    const h1 = vi.fn()
    const h2 = vi.fn()
    const h3 = vi.fn()
    const app = { get: vi.fn() } as unknown as Express

    const routes: RouteDefinition[] = [
      {
        method: 'get', path: '/multi', handlers: [h1, h2, h3],
      },
    ]

    addRouteDefinitions(app, routes)

    expect(app.get).toHaveBeenCalledWith('/multi', [h1, h2, h3])
  })
})
