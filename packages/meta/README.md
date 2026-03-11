# @xylabs/sdk-meta

[![logo][]](https://xylabs.com)

[![main-build][]][main-build-link]
[![npm-badge][]][npm-link]
[![npm-downloads-badge][]][npm-link]
[![jsdelivr-badge][]][jsdelivr-link]
[![npm-license-badge][]](LICENSE)
[![codacy-badge][]][codacy-link]
[![codeclimate-badge][]][codeclimate-link]
[![snyk-badge][]][snyk-link]
[![socket-badge][]][socket-link]


Base functionality used throughout XYO TypeScript/JavaScript libraries



## Reference

**@xylabs/sdk-meta**

***

## Interfaces

| Interface | Description |
| ------ | ------ |
| [Meta](#interfaces/Meta) | Represents page metadata including Open Graph and Twitter card properties. |
| [OpenGraphMeta](#interfaces/OpenGraphMeta) | Open Graph protocol metadata for rich link previews. |
| [OpenGraphStructured](#interfaces/OpenGraphStructured) | Structured properties for an Open Graph media object (image, video, or audio). |
| [TwitterMeta](#interfaces/TwitterMeta) | https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/markup |
| [TwitterApp](#interfaces/TwitterApp) | Twitter App Card metadata containing app store identifiers, names, and URLs per platform. |
| [TwitterPlayer](#interfaces/TwitterPlayer) | https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/player-card |

## Type Aliases

| Type Alias | Description |
| ------ | ------ |
| [StringIndexable](#type-aliases/StringIndexable) | An object with string keys and arbitrary values, used for recursive meta flattening. |
| [OpenGraphStructuredProperty](#type-aliases/OpenGraphStructuredProperty) | A structured Open Graph property value: a URL string, a structured object, or an array of either. |

## Functions

| Function | Description |
| ------ | ------ |
| [mergeDocumentHead](#functions/mergeDocumentHead) | Merges meta tags from the source HTML head into the destination HTML head. Existing meta tags with matching property attributes are replaced; others are appended. |
| [getMetaAsDict](#functions/getMetaAsDict) | Recursively flattens a nested meta object into a flat dictionary with colon-delimited keys. |
| [addMetaToHead](#functions/addMetaToHead) | Adds or replaces a meta tag in the document head. |
| [metaBuilder](#functions/metaBuilder) | Injects meta properties, title, and description into an HTML string. |

### functions

  ### <a id="addMetaToHead"></a>addMetaToHead

[**@xylabs/sdk-meta**](#../README)

***

```ts
function addMetaToHead(
   $: CheerioAPI, 
   name: string, 
   value: string | object): void;
```

Adds or replaces a meta tag in the document head.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `$` | `CheerioAPI` | The Cheerio API instance for the document. |
| `name` | `string` | The meta property name. |
| `value` | `string` \| `object` | The meta content value (string, array, or nested object). |

## Returns

`void`

  ### <a id="getMetaAsDict"></a>getMetaAsDict

[**@xylabs/sdk-meta**](#../README)

***

```ts
function getMetaAsDict(obj: StringIndexable, parentKey?: string): Record<string, string>;
```

Recursively flattens a nested meta object into a flat dictionary with colon-delimited keys.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `obj` | [`StringIndexable`](#../type-aliases/StringIndexable) | The nested object to flatten. |
| `parentKey?` | `string` | The accumulated key prefix from parent levels. |

## Returns

`Record`\<`string`, `string`\>

A flat record mapping colon-delimited property names to string values.

  ### <a id="mergeDocumentHead"></a>mergeDocumentHead

[**@xylabs/sdk-meta**](#../README)

***

```ts
function mergeDocumentHead(destination: string, source: string): string;
```

Merges meta tags from the source HTML head into the destination HTML head.
Existing meta tags with matching property attributes are replaced; others are appended.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `destination` | `string` | The base HTML string to merge into. |
| `source` | `string` | The HTML string whose head meta tags will be merged. |

## Returns

`string`

The merged HTML string.

  ### <a id="metaBuilder"></a>metaBuilder

[**@xylabs/sdk-meta**](#../README)

***

```ts
function metaBuilder(
   html: string, 
   meta: Meta, 
   handler?: string): string;
```

Injects meta properties, title, and description into an HTML string.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `html` | `string` | The base HTML string to modify. |
| `meta` | [`Meta`](#../interfaces/Meta) | The metadata to inject. |
| `handler?` | `string` | Optional meta-handler property value to include. |

## Returns

`string`

The modified HTML string with injected metadata.

### interfaces

  ### <a id="Meta"></a>Meta

[**@xylabs/sdk-meta**](#../README)

***

Represents page metadata including Open Graph and Twitter card properties.

## Properties

| Property | Type |
| ------ | ------ |
| <a id="description"></a> `description?` | `string` |
| <a id="og"></a> `og?` | [`OpenGraphMeta`](#OpenGraphMeta) |
| <a id="title"></a> `title?` | `string` |
| <a id="twitter"></a> `twitter?` | [`TwitterMeta`](#TwitterMeta) |

  ### <a id="OpenGraphMeta"></a>OpenGraphMeta

[**@xylabs/sdk-meta**](#../README)

***

Open Graph protocol metadata for rich link previews.

## Properties

| Property | Type |
| ------ | ------ |
| <a id="audio"></a> `audio?` | [`OpenGraphStructuredProperty`](#../type-aliases/OpenGraphStructuredProperty) |
| <a id="description"></a> `description?` | `string` |
| <a id="determiner"></a> `determiner?` | `string` |
| <a id="image"></a> `image?` | [`OpenGraphStructuredProperty`](#../type-aliases/OpenGraphStructuredProperty) |
| <a id="locale"></a> `locale?` | `string` \| `string`[] |
| <a id="site_name"></a> `site_name?` | `string` |
| <a id="title"></a> `title?` | `string` |
| <a id="type"></a> `type?` | `string` |
| <a id="url"></a> `url?` | `string` |
| <a id="video"></a> `video?` | [`OpenGraphStructuredProperty`](#../type-aliases/OpenGraphStructuredProperty) |

  ### <a id="OpenGraphStructured"></a>OpenGraphStructured

[**@xylabs/sdk-meta**](#../README)

***

Structured properties for an Open Graph media object (image, video, or audio).

## Properties

| Property | Type |
| ------ | ------ |
| <a id="_"></a> `?` | `string` |
| <a id="alt"></a> `alt?` | `string` |
| <a id="height"></a> `height?` | `number` |
| <a id="secure_url"></a> `secure_url?` | `string` |
| <a id="type"></a> `type?` | `string` |
| <a id="url"></a> `url?` | `string` |
| <a id="width"></a> `width?` | `number` |

  ### <a id="TwitterApp"></a>TwitterApp

[**@xylabs/sdk-meta**](#../README)

***

Twitter App Card metadata containing app store identifiers, names, and URLs per platform.

## Properties

| Property | Type |
| ------ | ------ |
| <a id="id"></a> `id?` | \{ `googleplay?`: `string`; `ipad?`: `string`; `iphone?`: `string`; \} |
| `id.googleplay?` | `string` |
| `id.ipad?` | `string` |
| `id.iphone?` | `string` |
| <a id="name"></a> `name?` | \{ `googleplay?`: `string`; `ipad?`: `string`; `iphone?`: `string`; \} |
| `name.googleplay?` | `string` |
| `name.ipad?` | `string` |
| `name.iphone?` | `string` |
| <a id="url"></a> `url?` | \{ `googleplay?`: `string`; `ipad?`: `string`; `iphone?`: `string`; \} |
| `url.googleplay?` | `string` |
| `url.ipad?` | `string` |
| `url.iphone?` | `string` |

  ### <a id="TwitterMeta"></a>TwitterMeta

[**@xylabs/sdk-meta**](#../README)

***

https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/markup

## Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| <a id="app"></a> `app?` | [`TwitterApp`](#TwitterApp) | - |
| <a id="card"></a> `card?` | `"summary"` \| `"summary_large_image"` \| `"app"` \| `"player"` | The card type. Used with all cards. Fallback: og:type. If an og:type, og:title and og:description exist in the markup but twitter:card is absent, then a summary card may be rendered. |
| <a id="creator"></a> `creator?` | \{ `?`: `string`; `id?`: `string`; \} | - |
| `creator.?` | `string` | The **Username** of content creator. Used with summary_large_image cards |
| `creator.id?` | `string` | Twitter user ID of content creator. Used with summary, summary_large_image cards |
| <a id="description"></a> `description?` | `string` | Description of content (maximum 200 characters). Used with summary, summary_large_image, player cards. Fallback: og:description. |
| <a id="image"></a> `image?` | \{ `?`: `string`; `alt?`: `string`; \} | - |
| `image.?` | `string` | URL of image to use in the card. Images must be less than 5MB in size. JPG, PNG, WEBP and GIF formats are supported. Only the first frame of an animated GIF will be used. SVG is not supported. Used with summary, summary_large_image, player cards. Fallback: og:image |
| `image.alt?` | `string` | A text description of the image conveying the essential nature of an image to users who are visually impaired. Maximum 420 characters. Used with summary, summary_large_image, player cards |
| <a id="player"></a> `player?` | [`TwitterPlayer`](#TwitterPlayer) | - |
| <a id="site"></a> `site?` | \{ `?`: `string`; `id?`: `string`; \} | The **Username** of website. Either twitter:site or twitter:site:id is required. Used with summary, summary_large_image, app, player cards |
| `site.?` | `string` | - |
| `site.id?` | `string` | Same as twitter:site, but the user’s Twitter ID. Either twitter:site or twitter:site:id is required. Used with summary, summary_large_image, player cards |
| <a id="title"></a> `title?` | `string` | Title of content (max 70 characters). Used with summary, summary_large_image, player cards. Fallback: og:title. |

  ### <a id="TwitterPlayer"></a>TwitterPlayer

[**@xylabs/sdk-meta**](#../README)

***

https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/player-card

## Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| <a id="_"></a> `` | `string` | HTTPS URL to iFrame player. This must be a HTTPS URL which does not generate active mixed content warnings in a web browser. The audio or video player must not require plugins such as Adobe Flash. |
| <a id="height"></a> `height?` | `number` | Height of iframe in pixels. Used with player card |
| <a id="stream"></a> `stream?` | `string` | URL to raw video or audio stream. Used with player card |
| <a id="width"></a> `width?` | `number` | Width of iframe in pixels. Used with player card |

### type-aliases

  ### <a id="OpenGraphStructuredProperty"></a>OpenGraphStructuredProperty

[**@xylabs/sdk-meta**](#../README)

***

```ts
type OpenGraphStructuredProperty = 
  | string
  | OpenGraphStructured
  | (string | OpenGraphStructured)[];
```

A structured Open Graph property value: a URL string, a structured object, or an array of either.

  ### <a id="StringIndexable"></a>StringIndexable

[**@xylabs/sdk-meta**](#../README)

***

```ts
type StringIndexable = {
[key: string]: any;
};
```

An object with string keys and arbitrary values, used for recursive meta flattening.

## Index Signature

```ts
[key: string]: any
```


Part of [sdk-js](https://www.npmjs.com/package/@xyo-network/sdk-js)

## Maintainers

-   [Arie Trouw](https://github.com/arietrouw) ([arietrouw.com](https://arietrouw.com))
-   [Matt Jones](https://github.com/jonesmac)
-   [Joel Carter](https://github.com/JoelBCarter)
-   [Jordan Trouw](https://github.com/jordantrouw)

## License

> See the [LICENSE](LICENSE) file for license details

## Credits

[Made with 🔥 and ❄️ by XYLabs](https://xylabs.com)

[logo]: https://cdn.xy.company/img/brand/XYPersistentCompany_Logo_Icon_Colored.svg

[main-build]: https://github.com/xylabs/sdk-js/actions/workflows/build.yml/badge.svg
[main-build-link]: https://github.com/xylabs/sdk-js/actions/workflows/build.yml
[npm-badge]: https://img.shields.io/npm/v/@xylabs/sdk-meta.svg
[npm-link]: https://www.npmjs.com/package/@xylabs/sdk-meta
[codacy-badge]: https://app.codacy.com/project/badge/Grade/c8e15e14f37741c18cfb47ac7245c698
[codacy-link]: https://www.codacy.com/gh/xylabs/sdk-js/dashboard?utm_source=github.com&utm_medium=referral&utm_content=xylabs/sdk-js&utm_campaign=Badge_Grade
[codeclimate-badge]: https://api.codeclimate.com/v1/badges/c5eb068f806f0b047ea7/maintainability
[codeclimate-link]: https://codeclimate.com/github/xylabs/sdk-js/maintainability
[snyk-badge]: https://snyk.io/test/github/xylabs/sdk-js/badge.svg?targetFile=package.json
[snyk-link]: https://snyk.io/test/github/xylabs/sdk-js?targetFile=package.json

[npm-downloads-badge]: https://img.shields.io/npm/dw/@xylabs/sdk-meta
[npm-license-badge]: https://img.shields.io/npm/l/@xylabs/sdk-meta

[jsdelivr-badge]: https://data.jsdelivr.com/v1/package/npm/@xylabs/sdk-meta/badge
[jsdelivr-link]: https://www.jsdelivr.com/package/npm/@xylabs/sdk-meta

[socket-badge]: https://socket.dev/api/badge/npm/package/@xylabs/sdk-meta
[socket-link]: https://socket.dev/npm/package/@xylabs/sdk-meta