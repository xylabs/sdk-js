import { format } from 'winston'

const {
  combine, timestamp, json,
} = format

/** Winston log format for production with structured JSON output and timestamps. */
export const logFormatStructured = combine(timestamp(), json())
