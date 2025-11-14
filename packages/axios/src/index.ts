import { AxiosJson } from './AxiosJson.ts'
import { AxiosJsonUncompressed } from './AxiosJsonUncompressed.ts'

export * from './AxiosClassType.ts'
export * from './AxiosJson.ts'
export * from './AxiosJsonUncompressed.ts'
export { gzip } from 'pako'

export const axios = new AxiosJson()
export const axiosUncompressed = new AxiosJsonUncompressed()
