# @xylabs/geo

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


Base functionality used throughout XY Labs TypeScript/JavaScript libraries

## API Documentation

**@xylabs/geo**

***

## Classes

- [GeoJson](#classes/GeoJson)
- [LayerBase](#classes/LayerBase)
- [MercatorBoundingBox](#classes/MercatorBoundingBox)
- [MercatorLngLat](#classes/MercatorLngLat)

## Type Aliases

- [MercatorTile](#type-aliases/MercatorTile)
- [MercatorBoundary](#type-aliases/MercatorBoundary)

## Variables

- [d2r](#variables/d2r)
- [r2d](#variables/r2d)

## Functions

- [boundingBoxToBoundary](#functions/boundingBoxToBoundary)
- [boundingBoxToCenter](#functions/boundingBoxToCenter)
- [boundingBoxToPolygon](#functions/boundingBoxToPolygon)
- [tileFromPoint](#functions/tileFromPoint)
- [tileFromQuadkey](#functions/tileFromQuadkey)
- [tileToBoundingBox](#functions/tileToBoundingBox)
- [tileToChildren](#functions/tileToChildren)
- [tileToGeoJson](#functions/tileToGeoJson)
- [tileToParent](#functions/tileToParent)
- [tileToPoint](#functions/tileToPoint)
- [tileToQuadkey](#functions/tileToQuadkey)
- [tileToSiblings](#functions/tileToSiblings)
- [tilesEqual](#functions/tilesEqual)
- [tilesFromBoundingBox](#functions/tilesFromBoundingBox)
- [hasSiblings](#functions/hasSiblings)
- [tilesHasTile](#functions/tilesHasTile)

### classes

  ### <a id="GeoJson"></a>GeoJson

[**@xylabs/geo**](#../README)

***

## Constructors

### Constructor

```ts
new GeoJson(quadkey): GeoJson;
```

### Parameters

#### quadkey

`string`

### Returns

`GeoJson`

## Methods

### featureCollection()

```ts
static featureCollection(features): FeatureCollection;
```

### Parameters

#### features

`Feature`\<`Geometry`, `GeoJsonProperties`\>[]

### Returns

`FeatureCollection`

***

### featuresSource()

```ts
static featuresSource(data): GeoJSONSourceSpecification;
```

### Parameters

#### data

`FeatureCollection`

### Returns

`GeoJSONSourceSpecification`

***

### geometryFeature()

```ts
static geometryFeature(geometry): Feature;
```

### Parameters

#### geometry

`Geometry`

### Returns

`Feature`

***

### center()

```ts
center(): LngLat;
```

### Returns

`LngLat`

***

### point()

```ts
point(): Point;
```

### Returns

`Point`

***

### pointFeature()

```ts
pointFeature(): Feature;
```

### Returns

`Feature`

***

### pointFeatureCollection()

```ts
pointFeatureCollection(): FeatureCollection;
```

### Returns

`FeatureCollection`

***

### pointSource()

```ts
pointSource(): GeoJSONSourceSpecification;
```

### Returns

`GeoJSONSourceSpecification`

***

### polygon()

```ts
polygon(): Polygon;
```

### Returns

`Polygon`

***

### polygonFeature()

```ts
polygonFeature(): Feature;
```

### Returns

`Feature`

***

### polygonFeatureCollection()

```ts
polygonFeatureCollection(): FeatureCollection;
```

### Returns

`FeatureCollection`

***

### polygonSource()

```ts
polygonSource(): GeoJSONSourceSpecification;
```

### Returns

`GeoJSONSourceSpecification`

***

### zoom()

```ts
zoom(): number;
```

### Returns

`number`

  ### <a id="LayerBase"></a>LayerBase

[**@xylabs/geo**](#../README)

***

## Type Parameters

### T

`T` *extends* `MapBox.Layer`

## Constructors

### Constructor

```ts
new LayerBase<T>(id, source): LayerBase<T>;
```

### Parameters

#### id

`string`

#### source

`string`

### Returns

`LayerBase`\<`T`\>

## Properties

### id

```ts
id: string;
```

***

### source

```ts
source: string;
```

## Methods

### update()

```ts
update(map, show): void;
```

### Parameters

#### map

`Map$1`

#### show

`boolean` = `true`

### Returns

`void`

***

### buildLayer()

```ts
abstract buildLayer(): T;
```

### Returns

`T`

  ### <a id="MercatorBoundingBox"></a>MercatorBoundingBox

[**@xylabs/geo**](#../README)

***

## Extends

- `LngLatBounds`

## Constructors

### Constructor

```ts
new MercatorBoundingBox(sw?, ne?): MercatorBoundingBox;
```

### Parameters

#### sw?

\[`number`, `number`, `number`, `number`\] | `LngLatLike` | \[`LngLatLike`, `LngLatLike`\]

#### ne?

`LngLatLike`

### Returns

`MercatorBoundingBox`

### Inherited from

```ts
MapBox.LngLatBounds.constructor
```

  ### <a id="MercatorLngLat"></a>MercatorLngLat

[**@xylabs/geo**](#../README)

***

## Extends

- `LngLat`

## Constructors

### Constructor

```ts
new MercatorLngLat(lng, lat): MercatorLngLat;
```

### Parameters

#### lng

`number`

#### lat

`number`

### Returns

`MercatorLngLat`

### Inherited from

```ts
MapBox.LngLat.constructor
```

### functions

  ### <a id="boundingBoxToBoundary"></a>boundingBoxToBoundary

[**@xylabs/geo**](#../README)

***

```ts
function boundingBoxToBoundary(box): MercatorBoundary;
```

## Parameters

### box

[`MercatorBoundingBox`](#../classes/MercatorBoundingBox)

## Returns

[`MercatorBoundary`](#../type-aliases/MercatorBoundary)

  ### <a id="boundingBoxToCenter"></a>boundingBoxToCenter

[**@xylabs/geo**](#../README)

***

```ts
function boundingBoxToCenter(boundingBox, decimal): number[];
```

## Parameters

### boundingBox

[`MercatorBoundingBox`](#../classes/MercatorBoundingBox)

### decimal

`number` = `6`

## Returns

`number`[]

  ### <a id="boundingBoxToPolygon"></a>boundingBoxToPolygon

[**@xylabs/geo**](#../README)

***

```ts
function boundingBoxToPolygon(box): Polygon;
```

## Parameters

### box

[`MercatorBoundingBox`](#../classes/MercatorBoundingBox)

## Returns

`Polygon`

  ### <a id="hasSiblings"></a>hasSiblings

[**@xylabs/geo**](#../README)

***

```ts
function hasSiblings(tiles, tile): boolean;
```

## Parameters

### tiles

[`MercatorTile`](#../type-aliases/MercatorTile)[]

### tile

[`MercatorTile`](#../type-aliases/MercatorTile)

## Returns

`boolean`

  ### <a id="tileFromPoint"></a>tileFromPoint

[**@xylabs/geo**](#../README)

***

```ts
function tileFromPoint(point, z): number[];
```

## Parameters

### point

[`MercatorLngLat`](#../classes/MercatorLngLat)

### z

`number`

## Returns

`number`[]

  ### <a id="tileFromQuadkey"></a>tileFromQuadkey

[**@xylabs/geo**](#../README)

***

```ts
function tileFromQuadkey(quadkey): number[];
```

## Parameters

### quadkey

`string`

## Returns

`number`[]

  ### <a id="tileToBoundingBox"></a>tileToBoundingBox

[**@xylabs/geo**](#../README)

***

```ts
function tileToBoundingBox(tile): MercatorBoundingBox;
```

## Parameters

### tile

[`MercatorTile`](#../type-aliases/MercatorTile)

## Returns

[`MercatorBoundingBox`](#../classes/MercatorBoundingBox)

  ### <a id="tileToChildren"></a>tileToChildren

[**@xylabs/geo**](#../README)

***

```ts
function tileToChildren(tile): number[][];
```

## Parameters

### tile

[`MercatorTile`](#../type-aliases/MercatorTile)

## Returns

`number`[][]

  ### <a id="tileToGeoJson"></a>tileToGeoJson

[**@xylabs/geo**](#../README)

***

```ts
function tileToGeoJson(tile): Polygon;
```

## Parameters

### tile

[`MercatorTile`](#../type-aliases/MercatorTile)

## Returns

`Polygon`

  ### <a id="tileToParent"></a>tileToParent

[**@xylabs/geo**](#../README)

***

```ts
function tileToParent(tile): MercatorTile;
```

## Parameters

### tile

[`MercatorTile`](#../type-aliases/MercatorTile)

## Returns

[`MercatorTile`](#../type-aliases/MercatorTile)

  ### <a id="tileToPoint"></a>tileToPoint

[**@xylabs/geo**](#../README)

***

```ts
function tileToPoint(tile): MercatorLngLat;
```

## Parameters

### tile

[`MercatorTile`](#../type-aliases/MercatorTile)

## Returns

[`MercatorLngLat`](#../classes/MercatorLngLat)

  ### <a id="tileToQuadkey"></a>tileToQuadkey

[**@xylabs/geo**](#../README)

***

```ts
function tileToQuadkey(tile): string;
```

## Parameters

### tile

[`MercatorTile`](#../type-aliases/MercatorTile)

## Returns

`string`

  ### <a id="tileToSiblings"></a>tileToSiblings

[**@xylabs/geo**](#../README)

***

```ts
function tileToSiblings(tile): MercatorTile[];
```

## Parameters

### tile

[`MercatorTile`](#../type-aliases/MercatorTile)

## Returns

[`MercatorTile`](#../type-aliases/MercatorTile)[]

  ### <a id="tilesEqual"></a>tilesEqual

[**@xylabs/geo**](#../README)

***

```ts
function tilesEqual(tile1, tile2): boolean;
```

## Parameters

### tile1

[`MercatorTile`](#../type-aliases/MercatorTile)

### tile2

[`MercatorTile`](#../type-aliases/MercatorTile)

## Returns

`boolean`

  ### <a id="tilesFromBoundingBox"></a>tilesFromBoundingBox

[**@xylabs/geo**](#../README)

***

```ts
function tilesFromBoundingBox(box, zoom): MercatorTile[];
```

## Parameters

### box

[`MercatorBoundingBox`](#../classes/MercatorBoundingBox)

### zoom

`number`

## Returns

[`MercatorTile`](#../type-aliases/MercatorTile)[]

  ### <a id="tilesHasTile"></a>tilesHasTile

[**@xylabs/geo**](#../README)

***

```ts
function tilesHasTile(tiles, tile): boolean;
```

## Parameters

### tiles

[`MercatorTile`](#../type-aliases/MercatorTile)[]

### tile

[`MercatorTile`](#../type-aliases/MercatorTile)

## Returns

`boolean`

### type-aliases

  ### <a id="MercatorBoundary"></a>MercatorBoundary

[**@xylabs/geo**](#../README)

***

```ts
type MercatorBoundary = MercatorLngLat[];
```

  ### <a id="MercatorTile"></a>MercatorTile

[**@xylabs/geo**](#../README)

***

```ts
type MercatorTile = number[];
```

### variables

  ### <a id="d2r"></a>d2r

[**@xylabs/geo**](#../README)

***

```ts
const d2r: number;
```

  ### <a id="r2d"></a>r2d

[**@xylabs/geo**](#../README)

***

```ts
const r2d: number;
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
[npm-badge]: https://img.shields.io/npm/v/@xylabs/geo.svg
[npm-link]: https://www.npmjs.com/package/@xylabs/geo
[codacy-badge]: https://app.codacy.com/project/badge/Grade/c8e15e14f37741c18cfb47ac7245c698
[codacy-link]: https://www.codacy.com/gh/xylabs/sdk-js/dashboard?utm_source=github.com&utm_medium=referral&utm_content=xylabs/sdk-js&utm_campaign=Badge_Grade
[codeclimate-badge]: https://api.codeclimate.com/v1/badges/c5eb068f806f0b047ea7/maintainability
[codeclimate-link]: https://codeclimate.com/github/xylabs/sdk-js/maintainability
[snyk-badge]: https://snyk.io/test/github/xylabs/sdk-js/badge.svg?targetFile=package.json
[snyk-link]: https://snyk.io/test/github/xylabs/sdk-js?targetFile=package.json

[npm-downloads-badge]: https://img.shields.io/npm/dw/@xylabs/geo
[npm-license-badge]: https://img.shields.io/npm/l/@xylabs/geo

[jsdelivr-badge]: https://data.jsdelivr.com/v1/package/npm/@xylabs/geo/badge
[jsdelivr-link]: https://www.jsdelivr.com/package/npm/@xylabs/geo

[socket-badge]: https://socket.dev/api/badge/npm/package/@xylabs/geo
[socket-link]: https://socket.dev/npm/package/@xylabs/geo