import { isString } from '@xylabs/typeof'
import type { CheerioAPI } from 'cheerio'
import { load } from 'cheerio'

import { getMetaAsDict } from '../lib/index.ts'
import type { Meta } from '../models/index.ts'

/* test change */

/**
 * Adds or replaces a meta tag in the document head.
 * @param $ - The Cheerio API instance for the document.
 * @param name - The meta property name.
 * @param value - The meta content value (string, array, or nested object).
 */
export const addMetaToHead = ($: CheerioAPI, name: string, value: string | object) => {
  if (typeof value === 'string') {
    const newMeta = `<meta property="${name}" content="${value}" />`
    const existingMeta = $(`head meta[property="${name}"]`)
    if ((existingMeta?.length ?? 0) > 0) {
      existingMeta.replaceWith(newMeta)
    } else {
      $('head').append(newMeta)
    }
  } else if (Array.isArray(value)) {
    for (const item of value) addMetaToHead($, `${name}`, item)
  } else if (typeof value === 'object') {
    for (let [key, v] of Object.entries(value)) {
      if (key === 'url') {
        addMetaToHead($, name, v)
      } else {
        addMetaToHead($, `${name}:${key}`, v)
      }
    }
  } else {
    throw new TypeError(`Invalid item type [${name}, ${typeof value}]`)
  }
}

/**
 * Injects meta properties, title, and description into an HTML string.
 * @param html - The base HTML string to modify.
 * @param meta - The metadata to inject.
 * @param handler - Optional meta-handler property value to include.
 * @returns The modified HTML string with injected metadata.
 */
export const metaBuilder = (html: string, meta: Meta, handler?: string) => {
  const $ = load(html)
  // NOTE: This assumes unique meta properties (no duplicates)
  // which is generally the case, but not always (you can have
  // multiple og:video:tag tags, for example)
  const metaProperties = getMetaAsDict(meta)
  for (const [key, value] of Object.entries(metaProperties)) {
    addMetaToHead($, key, value)
  }
  if (isString(meta.description)) {
    addMetaToHead($, 'description', meta.description)
  }
  if (isString(meta.title)) {
    $('title').text(meta.title)
  }
  if (isString(handler)) {
    addMetaToHead($, 'meta-handler', handler)
  }
  return $.html()
}
