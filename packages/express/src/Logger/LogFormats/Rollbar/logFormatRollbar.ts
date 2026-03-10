import { format } from 'winston'

const { simple } = format

/** Winston log format for Rollbar using simple text output. */
export const logFormatRollbar = simple()
