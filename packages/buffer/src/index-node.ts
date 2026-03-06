import { Buffer, bufferPolyfill } from './node/index.ts'

const NodeBuffer = Buffer
const NodeBufferPolyfill = bufferPolyfill
export { NodeBuffer as Buffer, NodeBufferPolyfill as bufferPolyfill }
