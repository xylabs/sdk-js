import type { ApiResourceIdentifierObject } from './resourceIdentifier.ts'

/** A relationship link pointing to the relationship itself. */
export interface IRelationshipSelfLink {
  /**
   * A link for the relationship itself (a "relationship link"). This link allows the client to directly manipulate the relationship.
   * For example, removing an author through an article’s relationship URL would disconnect the person from the article without
   * deleting the people resource itself. When fetched successfully, this link returns the linkage for the related resources as its primary data.
   */
  self: string
}

/** A relationship link pointing to a related resource. */
export interface IRelationshipRelatedLink {
  /**
   * A related resource link
   */
  related: string
}

/** Contains the links for a JSON:API relationship. */
export interface IRelationshipLinks {
  links: IRelationshipRelatedLink | IRelationshipSelfLink
}

/**
 * Resource linkage in a compound document allows a client to link together all of the included resource objects without having to GET any URLs via links.
 * Resource linkage MUST be represented as one of the following:
 *    • null for empty to-one relationships.
 *    • an empty array ([]) for empty to-many relationships.
 *    • a single resource identifier object for non-empty to-one relationships.
 *    • an array of resource identifier objects for non-empty to-many relationships.
 */
export type ResourceLinkage = null | [] | ApiResourceIdentifierObject | ApiResourceIdentifierObject[]
/** Contains the resource linkage data for a JSON:API relationship. */
export interface IRelationshipData {
  data: ResourceLinkage
}

/** Non-standard metadata associated with a JSON:API relationship. */
export type RelationshipMeta = Record<string, unknown>

/**
 * The value of the relationships key MUST be an object (a "relationships object"). Members of the relationships object ("relationships")
 * represent references from the resource object in which it’s defined to other resource objects.
 * Relationships may be to-one or to-many.
 */
export type Relationship = IRelationshipLinks | IRelationshipData | RelationshipMeta
