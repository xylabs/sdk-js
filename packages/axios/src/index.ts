import { Axios } from 'axios'

import { axiosJsonConfig } from './axiosJsonConfig.ts'

export * from './AxiosJson.ts'
export { gzip } from 'pako'

export const axiosJson = new Axios(axiosJsonConfig())

/** @deprecated use axiosJson instead */
export const axios = axiosJson
