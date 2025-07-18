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

## API Documentation

**@xylabs/sdk-meta**

***

## Interfaces

- [Meta](#interfaces/Meta)
- [OpenGraphMeta](#interfaces/OpenGraphMeta)
- [OpenGraphStructured](#interfaces/OpenGraphStructured)
- [TwitterMeta](#interfaces/TwitterMeta)
- [TwitterApp](#interfaces/TwitterApp)
- [TwitterPlayer](#interfaces/TwitterPlayer)

## Type Aliases

- [StringIndexable](#type-aliases/StringIndexable)
- [OpenGraphStructuredProperty](#type-aliases/OpenGraphStructuredProperty)

## Functions

- [mergeDocumentHead](#functions/mergeDocumentHead)
- [getMetaAsDict](#functions/getMetaAsDict)
- [metaBuilder](#functions/metaBuilder)

### functions

  ### <a id="getMetaAsDict"></a>getMetaAsDict

[**@xylabs/sdk-meta**](#../README)

***

```ts
function getMetaAsDict(obj, parentKey?): Record<string, string>;
```

## Parameters

### obj

[`StringIndexable`](#../type-aliases/StringIndexable)

### parentKey?

`string`

## Returns

`Record`\<`string`, `string`\>

  ### <a id="mergeDocumentHead"></a>mergeDocumentHead

[**@xylabs/sdk-meta**](#../README)

***

```ts
function mergeDocumentHead(destination, source): string;
```

## Parameters

### destination

`string`

### source

`string`

## Returns

`string`

  ### <a id="metaBuilder"></a>metaBuilder

[**@xylabs/sdk-meta**](#../README)

***

```ts
function metaBuilder(
   html, 
   meta, 
   handler?): string;
```

## Parameters

### html

`string`

### meta

[`Meta`](#../interfaces/Meta)

### handler?

`string`

## Returns

`string`

### interfaces

  ### <a id="Meta"></a>Meta

[**@xylabs/sdk-meta**](#../README)

***

## Properties

### description?

```ts
optional description: string;
```

***

### og?

```ts
optional og: OpenGraphMeta;
```

***

### title?

```ts
optional title: string;
```

***

### twitter?

```ts
optional twitter: TwitterMeta;
```

  ### <a id="OpenGraphMeta"></a>OpenGraphMeta

[**@xylabs/sdk-meta**](#../README)

***

## Properties

### audio?

```ts
optional audio: OpenGraphStructuredProperty;
```

***

### description?

```ts
optional description: string;
```

***

### determiner?

```ts
optional determiner: string;
```

***

### image?

```ts
optional image: OpenGraphStructuredProperty;
```

***

### locale?

```ts
optional locale: string | string[];
```

***

### site\_name?

```ts
optional site_name: string;
```

***

### title?

```ts
optional title: string;
```

***

### type?

```ts
optional type: string;
```

***

### url?

```ts
optional url: string;
```

***

### video?

```ts
optional video: OpenGraphStructuredProperty;
```

  ### <a id="OpenGraphStructured"></a>OpenGraphStructured

[**@xylabs/sdk-meta**](#../README)

***

## Properties

### ?

```ts
optional : string;
```

***

### alt?

```ts
optional alt: string;
```

***

### height?

```ts
optional height: number;
```

***

### secure\_url?

```ts
optional secure_url: string;
```

***

### type?

```ts
optional type: string;
```

***

### url?

```ts
optional url: string;
```

***

### width?

```ts
optional width: number;
```

  ### <a id="TwitterApp"></a>TwitterApp

[**@xylabs/sdk-meta**](#../README)

***

## Properties

### id?

```ts
optional id: object;
```

### googleplay?

```ts
optional googleplay: string;
```

### ipad?

```ts
optional ipad: string;
```

### iphone?

```ts
optional iphone: string;
```

***

### name?

```ts
optional name: object;
```

### googleplay?

```ts
optional googleplay: string;
```

### ipad?

```ts
optional ipad: string;
```

### iphone?

```ts
optional iphone: string;
```

***

### url?

```ts
optional url: object;
```

### googleplay?

```ts
optional googleplay: string;
```

### ipad?

```ts
optional ipad: string;
```

### iphone?

```ts
optional iphone: string;
```

  ### <a id="TwitterMeta"></a>TwitterMeta

[**@xylabs/sdk-meta**](#../README)

***

https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/markup

## Properties

### app?

```ts
optional app: TwitterApp;
```

***

### card?

```ts
optional card: "summary" | "summary_large_image" | "app" | "player";
```

The card type. Used with all cards. Fallback: og:type.
If an og:type, og:title and og:description exist in the markup but
twitter:card is absent, then a summary card may be rendered.

***

### creator?

```ts
optional creator: object;
```

### ?

```ts
optional : string;
```

The

#### Username

of content creator. Used with summary_large_image cards

### id?

```ts
optional id: string;
```

Twitter user ID of content creator. Used with summary,
summary_large_image cards

***

### description?

```ts
optional description: string;
```

Description of content (maximum 200 characters). Used with summary,
summary_large_image, player cards. Fallback: og:description.

***

### image?

```ts
optional image: object;
```

### ?

```ts
optional : string;
```

URL of image to use in the card. Images must be less than 5MB in size.
JPG, PNG, WEBP and GIF formats are supported. Only the first frame of
an animated GIF will be used. SVG is not supported. Used with summary,
summary_large_image, player cards. Fallback: og:image

### alt?

```ts
optional alt: string;
```

A text description of the image conveying the essential nature of
an image to users who are visually impaired. Maximum 420
characters. Used with summary, summary_large_image, player cards

***

### player?

```ts
optional player: TwitterPlayer;
```

***

### site?

```ts
optional site: object;
```

The

### ?

```ts
optional : string;
```

### id?

```ts
optional id: string;
```

Same as twitter:site, but the user’s Twitter ID. Either
twitter:site or twitter:site:id is required. Used with
summary, summary_large_image, player cards

### Username

of website. Either twitter:site or twitter:site:id is
required. Used with summary, summary_large_image, app, player
cards

***

### title?

```ts
optional title: string;
```

Title of content (max 70 characters). Used with summary,
summary_large_image, player cards. Fallback: og:title.

  ### <a id="TwitterPlayer"></a>TwitterPlayer

[**@xylabs/sdk-meta**](#../README)

***

https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/player-card

## Properties

### 

```ts
: string;
```

HTTPS URL to iFrame player. This must be a HTTPS URL which does not
generate active mixed content warnings in a web browser. The audio or
video player must not require plugins such as Adobe Flash.

***

### height?

```ts
optional height: number;
```

Height of iframe in pixels. Used with player card

***

### stream?

```ts
optional stream: string;
```

URL to raw video or audio stream. Used with player card

***

### width?

```ts
optional width: number;
```

Width of iframe in pixels. Used with player card

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

  ### <a id="StringIndexable"></a>StringIndexable

[**@xylabs/sdk-meta**](#../README)

***

```ts
type StringIndexable = object;
```

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