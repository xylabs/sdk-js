import { URL } from 'node:url'

/** Node.js-specific URL class, imported from the `node:url` module. */
const NodeUrl = URL
export { NodeUrl as URL }
export * from './lib/index.ts'
