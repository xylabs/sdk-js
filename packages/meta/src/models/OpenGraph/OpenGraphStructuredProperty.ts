import type { OpenGraphStructured } from './OpenGraphStructured.ts'

/** A structured Open Graph property value: a URL string, a structured object, or an array of either. */
export type OpenGraphStructuredProperty = string | OpenGraphStructured | (string | OpenGraphStructured)[]
