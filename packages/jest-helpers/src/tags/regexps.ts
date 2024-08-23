import {
  AND_SYMBOL, NOT_SYMBOL, OR_SYMBOL,
} from './config.ts'

export const escape = (str: string) => [...str].map(symbol => `\\${symbol}`).join('')

export const AND_REGX = new RegExp(`\\s*${escape(AND_SYMBOL)}\\s*`)

export const OR_REGX = new RegExp(`\\s*${escape(OR_SYMBOL)}\\s*`)

export const PLAIN_REGX = new RegExp(String.raw`\s+`)

export const BAD_REGX = new RegExp(`^${escape(NOT_SYMBOL)}.*$`)

export const GOOD_REGX = new RegExp(`^[^${escape(NOT_SYMBOL)}].*$`)
