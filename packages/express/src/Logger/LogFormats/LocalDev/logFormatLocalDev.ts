import { format } from 'winston'

const {
  colorize, combine, timestamp, printf,
} = format

/** Winston log format for local development with colorized output and timestamps. */
export const logFormatLocalDev = combine(
  colorize(),
  timestamp(),
  printf(info => `[${info.timestamp} ${info.level}] ${info.message}`),
)
