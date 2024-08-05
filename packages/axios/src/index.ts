import { AxiosJson } from './AxiosJson.ts'

export * from './AxiosJson.ts'
export { gzip } from 'pako'

export const axios = new AxiosJson()
