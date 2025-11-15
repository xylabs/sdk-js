import { Axios } from 'axios'

import { AxiosJson } from './AxiosJson.ts'

export * from './AxiosJson.ts'
export { gzip } from 'pako'

export const axios = new Axios(AxiosJson.axiosConfig())
