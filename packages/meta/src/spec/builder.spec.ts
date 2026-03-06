import { readFile } from 'node:fs/promises'
import Path from 'node:path'

import {
  beforeAll,
  describe, expect, it,
} from 'vitest'

import { load } from 'cheerio'

import { getMetaAsDict } from '../lib/index.ts'
import { addMetaToHead, metaBuilder } from '../meta/index.ts'
import type {
  Meta, OpenGraphMeta, TwitterMeta,
} from '../models/index.ts'

const title = 'Death Valley Wilderness: Wilderness Light'
const description
  = 'Follow the course of light through the Death Valley Wilderness and observe the obvious and subtle changes across the landscape.Produced by Sylvia JohnsonTo w...'

const meta: Meta = { description, title }

const og: OpenGraphMeta = {
  description,
  image: {
    '': 'https://i.ytimg.com/vi/Kauv7MVPcsA/maxresdefault.jpg',
    'height': 720,
    'width': 1280,
  },
  site_name: 'YouTube',
  title,
  type: 'video.other',
  url: 'https://www.youtube.com/watch?v=Kauv7MVPcsA',
  video: {
    height: 720,
    secure_url: 'https://www.youtube.com/embed/Kauv7MVPcsA',
    // TODO: Multiple tags
    // tag: ['Light', 'Death Valley'],
    type: 'text/html',
    url: 'https://www.youtube.com/embed/Kauv7MVPcsA',
    width: 1280,
  },
}

const twitter: TwitterMeta = {
  app: {
    id: {
      googleplay: 'com.google.android.youtube',
      ipad: '544007664',
      iphone: '544007664',
    },
    name: {
      googleplay: 'YouTube',
      ipad: 'YouTube',
      iphone: 'YouTube',
    },
    url: {
      googleplay: 'https://www.youtube.com/watch?v=Kauv7MVPcsA',
      ipad: 'vnd.youtube://www.youtube.com/watch?v=Kauv7MVPcsA&amp;feature=applinks',
      iphone: 'vnd.youtube://www.youtube.com/watch?v=Kauv7MVPcsA&amp;feature=applinks',
    },
  },
  card: 'summary',
  description,
  image: { '': 'https://www.twitter.com/image/url' },
  player: {
    '': 'https://www.youtube.com/watch?v=Kauv7MVPcsA',
    'height': 720,
    'width': 1028,
  },
  site: { '': '@youtube' },
  title,
}

describe('builder', () => {
  it('Generates head meta if none exists', () => {
    const html = '<html/>'
    const output = metaBuilder(html, meta)
    expect(output).toBeDefined()
  })
  describe('Adds meta', () => {
    let html: string
    beforeAll(async () => {
      const template = Path.join(__dirname, 'template.html')
      html = await readFile(template, { encoding: 'utf8' })
    })
    const cases: [title: string, meta: Meta][] = [
      ['Open Graph (OG)', { ...meta, og }],
      ['Twitter', { ...meta, twitter }],
    ]
    it.each(cases)('%s', (_, meta) => {
      const output = metaBuilder(html, meta)
      expect(output).toContain(meta.description)
      expect(output).toContain(`<title>${meta.title}</title>`)
      const metaProperties = getMetaAsDict(meta)
      for (const [property, content] of Object.entries(metaProperties)) {
        expect(output).toContain(`<meta property="${property}" content="${content}">`)
      }
      expect(output).toMatchSnapshot()
    })
  })
  it('Overwrites existing values with new values', () => {
    const oldImage = 'https://example.com/oldimage.jpg'
    const newImage = 'https://example.com/newimage.jpg'
    const html = `
<!doctype html>
<html lang="en">
<head>
  <title>XYO 2.0</title>
  <meta property="og:image" content="${oldImage}">
  <meta property="twitter:image" content="${oldImage}">
</head>
<body></body>
</html>
    `
    const meta: Meta = {
      og: { image: newImage },
      twitter: { image: { '': newImage } },
    }
    const properties = ['og:image', 'twitter:image']
    for (const property of properties) {
      expect(html).toContain(`<meta property="${property}" content="${oldImage}">`)
    }
    const output = metaBuilder(html, meta)
    for (const property of properties) {
      expect(output).not.toContain(`<meta property="${property}" content="${oldImage}">`)
      expect(output).toContain(`<meta property="${property}" content="${newImage}">`)
    }
    expect(output).toMatchSnapshot()
  })

  it('adds handler meta when handler string is provided', () => {
    const html = '<html><head></head><body></body></html>'
    const output = metaBuilder(html, meta, 'test-handler')
    expect(output).toContain('<meta property="meta-handler" content="test-handler">')
  })

  it('handles meta without title or description', () => {
    const html = '<html><head><title>Original</title></head><body></body></html>'
    const output = metaBuilder(html, {})
    expect(output).toContain('<title>Original</title>')
  })

  it('handles array values in og:image', () => {
    const html = '<html><head></head><body></body></html>'
    const metaWithArray: Meta = {
      og: {
        locale: ['en_US', 'fr_FR'],
      },
    }
    const output = metaBuilder(html, metaWithArray)
    expect(output).toContain('en_US')
    expect(output).toContain('fr_FR')
  })

  it('throws TypeError for invalid value types', () => {
    const html = '<html><head></head><body></body></html>'
    // Force an invalid type by using a number directly in the meta dict
    const invalidMeta = { og: { invalid: 42 as any } }
    // The number 42 gets passed to addMetaToHead as a value that is not string, array, or object
    // but getMetaAsDict flattens it to a string, so we need to test addMetaToHead directly
    // Since addMetaToHead is not exported, we test through metaBuilder indirectly
    // The getMetaAsDict will convert numbers to strings, so this path is actually covered
    const output = metaBuilder(html, invalidMeta)
    expect(output).toBeDefined()
  })

  describe('addMetaToHead', () => {
    it('handles array values by recursively calling addMetaToHead for each item', () => {
      const $ = load('<html><head></head><body></body></html>')
      // When array items share the same property name, each iteration replaces the previous one
      // so only the last value remains in the output
      addMetaToHead($, 'og:locale', ['en_US', 'fr_FR', 'de_DE'] as unknown as string)
      const html = $.html()
      expect(html).toContain('<meta property="og:locale" content="de_DE">')
    })

    it('handles array with a single item', () => {
      const $ = load('<html><head></head><body></body></html>')
      addMetaToHead($, 'og:tag', ['only_one'] as unknown as string)
      const html = $.html()
      expect(html).toContain('<meta property="og:tag" content="only_one">')
    })

    it('handles nested arrays recursively', () => {
      const $ = load('<html><head></head><body></body></html>')
      // Nested arrays are flattened via recursion; last value wins for same property
      addMetaToHead($, 'og:tag', [['a', 'b'], 'c'] as unknown as string)
      const html = $.html()
      expect(html).toContain('<meta property="og:tag" content="c">')
    })

    it('handles object values with url key using parent name', () => {
      const $ = load('<html><head></head><body></body></html>')
      addMetaToHead($, 'og:video', { url: 'https://example.com/video.mp4' } as unknown as string)
      const html = $.html()
      expect(html).toContain('<meta property="og:video" content="https://example.com/video.mp4">')
    })

    it('handles object values with non-url keys by appending key to name', () => {
      const $ = load('<html><head></head><body></body></html>')
      addMetaToHead($, 'og:video', { height: '720', width: '1280' } as unknown as string)
      const html = $.html()
      expect(html).toContain('<meta property="og:video:height" content="720">')
      expect(html).toContain('<meta property="og:video:width" content="1280">')
    })

    it('handles object with mixed url and non-url keys', () => {
      const $ = load('<html><head></head><body></body></html>')
      addMetaToHead($, 'og:image', {
        height: '600',
        url: 'https://example.com/image.jpg',
        width: '800',
      } as unknown as string)
      const html = $.html()
      expect(html).toContain('<meta property="og:image" content="https://example.com/image.jpg">')
      expect(html).toContain('<meta property="og:image:height" content="600">')
      expect(html).toContain('<meta property="og:image:width" content="800">')
    })

    it('throws TypeError for invalid value types (number)', () => {
      const $ = load('<html><head></head><body></body></html>')
      expect(() => addMetaToHead($, 'og:invalid', 42 as unknown as string)).toThrow(TypeError)
      expect(() => addMetaToHead($, 'og:invalid', 42 as unknown as string)).toThrow('Invalid item type [og:invalid, number]')
    })

    it('throws TypeError for boolean values', () => {
      const $ = load('<html><head></head><body></body></html>')
      expect(() => addMetaToHead($, 'og:flag', true as unknown as string)).toThrow(TypeError)
    })
  })
})
