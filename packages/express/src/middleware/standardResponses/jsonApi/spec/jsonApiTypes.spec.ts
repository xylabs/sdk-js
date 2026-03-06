import {
  describe, expect, it,
} from 'vitest'

import type { ApiError, Source } from '../error.ts'
import type {
  ApiLink, ApiLinks, HrefWithMeta,
} from '../links.ts'
import type {
  IRelationshipData,
  IRelationshipLinks,
  IRelationshipRelatedLink,
  IRelationshipSelfLink,
  ResourceLinkage,
} from '../relationship.ts'
import type { ApiResourceIdentifierObject } from '../resourceIdentifier.ts'
import type {
  ApiDataResponse,
  ApiErrorResponse,
  ApiResourceObject,
  ApiResponse,
  ApiResponseBase,
  JsonApi,
} from '../response.ts'

describe('JSON API Types', () => {
  describe('ApiError', () => {
    it('should allow creating a minimal error', () => {
      const error: ApiError = {}
      expect(error).toBeDefined()
    })

    it('should allow creating a fully populated error', () => {
      const error: ApiError = {
        code: 'ERR_001',
        detail: 'Something went wrong',
        id: '123',
        links: { about: 'https://example.com/errors/ERR_001' },
        meta: { timestamp: Date.now() },
        source: { pointer: '/data/attributes/name', parameter: 'filter' },
        status: '500',
        title: 'Internal Server Error',
      }
      expect(error.code).toBe('ERR_001')
      expect(error.detail).toBe('Something went wrong')
      expect(error.id).toBe('123')
      expect(error.status).toBe('500')
      expect(error.title).toBe('Internal Server Error')
      expect(error.source?.pointer).toBe('/data/attributes/name')
      expect(error.source?.parameter).toBe('filter')
    })

    it('should allow Source with only pointer', () => {
      const source: Source = { pointer: '/data' }
      expect(source.pointer).toBe('/data')
      expect(source.parameter).toBeUndefined()
    })

    it('should allow Source with only parameter', () => {
      const source: Source = { parameter: 'sort' }
      expect(source.parameter).toBe('sort')
      expect(source.pointer).toBeUndefined()
    })
  })

  describe('ApiLinks', () => {
    it('should allow string links', () => {
      const link: ApiLink = 'https://example.com'
      expect(link).toBe('https://example.com')
    })

    it('should allow HrefWithMeta links', () => {
      const link: HrefWithMeta = { href: 'https://example.com', meta: { count: 10 } }
      expect(link.href).toBe('https://example.com')
      expect(link.meta.count).toBe(10)
    })

    it('should allow a record of links', () => {
      const links: ApiLinks = {
        self: 'https://example.com/articles/1',
        related: { href: 'https://example.com/articles/1/author', meta: {} },
      }
      expect(links.self).toBe('https://example.com/articles/1')
      expect(typeof links.related).toBe('object')
    })
  })

  describe('ApiResourceIdentifierObject', () => {
    it('should require id and type', () => {
      const resource: ApiResourceIdentifierObject = { id: '1', type: 'articles' }
      expect(resource.id).toBe('1')
      expect(resource.type).toBe('articles')
    })
  })

  describe('Relationship types', () => {
    it('should allow self link relationships', () => {
      const rel: IRelationshipSelfLink = { self: '/articles/1/relationships/author' }
      expect(rel.self).toBeDefined()
    })

    it('should allow related link relationships', () => {
      const rel: IRelationshipRelatedLink = { related: '/articles/1/author' }
      expect(rel.related).toBeDefined()
    })

    it('should allow links-based relationship', () => {
      const rel: IRelationshipLinks = { links: { self: '/test' } }
      expect(rel.links).toBeDefined()
    })

    it('should allow data-based relationship with null linkage', () => {
      const linkage: ResourceLinkage = null
      const rel: IRelationshipData = { data: linkage }
      expect(rel.data).toBeNull()
    })

    it('should allow data-based relationship with empty array linkage', () => {
      const linkage: ResourceLinkage = []
      const rel: IRelationshipData = { data: linkage }
      expect(rel.data).toEqual([])
    })

    it('should allow data-based relationship with single identifier', () => {
      const linkage: ResourceLinkage = { id: '1', type: 'people' }
      const rel: IRelationshipData = { data: linkage }
      expect((rel.data as ApiResourceIdentifierObject).id).toBe('1')
    })

    it('should allow data-based relationship with array of identifiers', () => {
      const linkage: ResourceLinkage = [{ id: '1', type: 'tags' }, { id: '2', type: 'tags' }]
      const rel: IRelationshipData = { data: linkage }
      expect((rel.data as ApiResourceIdentifierObject[]).length).toBe(2)
    })
  })

  describe('ApiResponse types', () => {
    it('should allow a minimal ApiResponseBase', () => {
      const response: ApiResponseBase = {}
      expect(response).toBeDefined()
    })

    it('should allow JsonApi version info', () => {
      const jsonapi: JsonApi = { version: '1.0' }
      expect(jsonapi.version).toBe('1.0')
    })

    it('should allow ApiResourceObject with attributes', () => {
      const resource: ApiResourceObject = {
        id: '1',
        type: 'articles',
        attributes: { title: 'Test' },
        links: { self: '/articles/1' },
        meta: { created: '2024-01-01' },
        relationships: {},
      }
      expect(resource.attributes?.title).toBe('Test')
    })

    it('should allow ApiDataResponse', () => {
      const response: ApiDataResponse<ApiResourceIdentifierObject> = {
        data: { id: '1', type: 'articles' },
        jsonapi: { version: '1.0' },
      }
      expect(response.data.id).toBe('1')
    })

    it('should allow ApiDataResponse with included resources', () => {
      const response: ApiDataResponse<ApiResourceObject> = {
        data: { id: '1', type: 'articles' },
        included: [{
          id: '2', type: 'people', attributes: { name: 'Author' },
        }],
      }
      expect(response.included?.length).toBe(1)
    })

    it('should allow ApiErrorResponse', () => {
      const response: ApiErrorResponse = { errors: [{ status: '404', title: 'Not Found' }] }
      expect(response.errors.length).toBe(1)
    })

    it('should allow ApiResponse union type', () => {
      const dataResponse: ApiResponse<ApiResourceIdentifierObject> = { data: { id: '1', type: 'articles' } }
      const errorResponse: ApiResponse<ApiResourceIdentifierObject> = { errors: [{ status: '500' }] }
      expect(dataResponse).toBeDefined()
      expect(errorResponse).toBeDefined()
    })
  })
})
