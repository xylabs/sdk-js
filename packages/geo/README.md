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



## Reference

**@xylabs/geo**

***

## Classes

| Class | Description |
| ------ | ------ |
| [GeoJson](#classes/GeoJson) | Provides GeoJSON geometry and MapBox source generation from a quadkey. |
| [LayerBase](#classes/LayerBase) | Abstract base class for managing MapBox map layers with add/remove lifecycle. |
| [MercatorBoundingBox](#classes/MercatorBoundingBox) | A Mercator bounding box extending MapBox LngLatBounds. |
| [MercatorLngLat](#classes/MercatorLngLat) | A Mercator coordinate extending MapBox LngLat. |

## Type Aliases

| Type Alias | Description |
| ------ | ------ |
| [MercatorTile](#type-aliases/MercatorTile) | A Mercator tile represented as [x, y, zoom]. |
| [MercatorBoundary](#type-aliases/MercatorBoundary) | An ordered array of MercatorLngLat points forming a boundary. |

## Variables

| Variable | Description |
| ------ | ------ |
| [d2r](#variables/d2r) | Conversion factor from degrees to radians. |
| [r2d](#variables/r2d) | Conversion factor from radians to degrees. |

## Functions

| Function | Description |
| ------ | ------ |
| [boundingBoxToBoundary](#functions/boundingBoxToBoundary) | Converts a bounding box to an ordered boundary polygon (closed ring of corner points). |
| [boundingBoxToCenter](#functions/boundingBoxToCenter) | Computes the center point of a bounding box as [lng, lat], rounded to the specified decimal places. |
| [boundingBoxToPolygon](#functions/boundingBoxToPolygon) | Converts a bounding box to a GeoJSON Polygon geometry. |
| [tileFromPoint](#functions/tileFromPoint) | Converts a geographic point to the integer Mercator tile containing it at the given zoom level. |
| [tileFromQuadkey](#functions/tileFromQuadkey) | Converts a quadkey string to a Mercator tile [x, y, zoom]. |
| [tileToBoundingBox](#functions/tileToBoundingBox) | Converts a Mercator tile to its geographic bounding box. |
| [tileToChildren](#functions/tileToChildren) | Returns the four child tiles at one zoom level higher. |
| [tileToGeoJson](#functions/tileToGeoJson) | Converts a Mercator tile to a GeoJSON Polygon geometry. |
| [tileToParent](#functions/tileToParent) | Returns the parent tile at one zoom level lower. |
| [tileToPoint](#functions/tileToPoint) | Returns the center point of a Mercator tile. |
| [tileToQuadkey](#functions/tileToQuadkey) | Converts a Mercator tile to its quadkey string representation. |
| [tileToSiblings](#functions/tileToSiblings) | Returns the four sibling tiles (children of the parent tile) for the given tile. |
| [tilesEqual](#functions/tilesEqual) | Checks whether two Mercator tiles are equal by comparing their x, y, and zoom values. |
| [tilesFromBoundingBox](#functions/tilesFromBoundingBox) | Returns all Mercator tiles that intersect the given bounding box at the specified zoom level. |
| [hasSiblings](#functions/hasSiblings) | Checks whether all four siblings of the given tile exist in the tile array. |
| [tilesHasTile](#functions/tilesHasTile) | Checks whether a specific tile exists in the given tile array. |

### classes

  ### <a id="GeoJson"></a>GeoJson

[**@xylabs/geo**](#../README)

***

Provides GeoJSON geometry and MapBox source generation from a quadkey.

## Constructors

### Constructor

```ts
new GeoJson(quadkey: string): GeoJson;
```

### Parameters

| Parameter | Type |
| ------ | ------ |
| `quadkey` | `string` |

### Returns

`GeoJson`

## Methods

### featureCollection()

```ts
static featureCollection(features: Feature<Geometry, GeoJsonProperties>[]): FeatureCollection;
```

Creates a GeoJSON FeatureCollection from an array of features.

### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `features` | `Feature`\<`Geometry`, `GeoJsonProperties`\>[] | The features to include |

### Returns

`FeatureCollection`

A GeoJSON FeatureCollection

***

### featuresSource()

```ts
static featuresSource(data: FeatureCollection): GeoJSONSourceSpecification;
```

Creates a MapBox GeoJSON source specification from a FeatureCollection.

### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `data` | `FeatureCollection` | The FeatureCollection to use as the source data |

### Returns

`GeoJSONSourceSpecification`

A MapBox GeoJSON source specification

***

### geometryFeature()

```ts
static geometryFeature(geometry: Geometry): Feature;
```

Wraps a geometry object in a GeoJSON Feature.

### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `geometry` | `Geometry` | The geometry to wrap |

### Returns

`Feature`

A GeoJSON Feature containing the geometry

***

### center()

```ts
center(): LngLat;
```

Computes and caches the center point of the quadkey's bounding box as a MapBox LngLat.

### Returns

`LngLat`

***

### point()

```ts
point(): Point;
```

Returns a GeoJSON Point geometry at the center of the quadkey's bounding box.

### Returns

`Point`

***

### pointFeature()

```ts
pointFeature(): Feature;
```

Returns a GeoJSON Feature containing the center point geometry.

### Returns

`Feature`

***

### pointFeatureCollection()

```ts
pointFeatureCollection(): FeatureCollection;
```

Returns a GeoJSON FeatureCollection containing the center point feature.

### Returns

`FeatureCollection`

***

### pointSource()

```ts
pointSource(): GeoJSONSourceSpecification;
```

Returns a MapBox GeoJSON source specification for the center point.

### Returns

`GeoJSONSourceSpecification`

***

### polygon()

```ts
polygon(): Polygon;
```

Returns a GeoJSON Polygon geometry representing the quadkey's bounding box.

### Returns

`Polygon`

***

### polygonFeature()

```ts
polygonFeature(): Feature;
```

Returns a GeoJSON Feature containing the polygon geometry.

### Returns

`Feature`

***

### polygonFeatureCollection()

```ts
polygonFeatureCollection(): FeatureCollection;
```

Returns a GeoJSON FeatureCollection containing the polygon feature.

### Returns

`FeatureCollection`

***

### polygonSource()

```ts
polygonSource(): GeoJSONSourceSpecification;
```

Returns a MapBox GeoJSON source specification for the polygon.

### Returns

`GeoJSONSourceSpecification`

***

### zoom()

```ts
zoom(): number;
```

Returns the zoom level derived from the quadkey length.

### Returns

`number`

  ### <a id="LayerBase"></a>LayerBase

[**@xylabs/geo**](#../README)

***

Abstract base class for managing MapBox map layers with add/remove lifecycle.

## Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* `MapBox.Layer` |

## Constructors

### Constructor

```ts
new LayerBase<T>(id: string, source: string): LayerBase<T>;
```

### Parameters

| Parameter | Type |
| ------ | ------ |
| `id` | `string` |
| `source` | `string` |

### Returns

`LayerBase`\<`T`\>

## Properties

| Property | Type |
| ------ | ------ |
| <a id="id"></a> `id` | `string` |
| <a id="source"></a> `source` | `string` |

## Methods

### update()

```ts
update(map: Map$1, show?: boolean): void;
```

Removes and re-adds the layer on the map, optionally hiding it.

### Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `map` | `Map$1` | `undefined` | The MapBox map instance |
| `show` | `boolean` | `true` | Whether to show the layer after updating (default true) |

### Returns

`void`

***

### buildLayer()

```ts
abstract buildLayer(): T;
```

Builds the MapBox layer configuration object.

### Returns

`T`

  ### <a id="MercatorBoundingBox"></a>MercatorBoundingBox

[**@xylabs/geo**](#../README)

***

A Mercator bounding box extending MapBox LngLatBounds.

## Extends

- `LngLatBounds`

## Constructors

### Constructor

```ts
new MercatorBoundingBox(sw?: 
  | [number, number, number, number]
  | LngLatLike
  | [LngLatLike, LngLatLike], ne?: LngLatLike): MercatorBoundingBox;
```

### Parameters

| Parameter | Type |
| ------ | ------ |
| `sw?` | \| \[`number`, `number`, `number`, `number`\] \| `LngLatLike` \| \[`LngLatLike`, `LngLatLike`\] |
| `ne?` | `LngLatLike` |

### Returns

`MercatorBoundingBox`

### Inherited from

```ts
MapBox.LngLatBounds.constructor
```

  ### <a id="MercatorLngLat"></a>MercatorLngLat

[**@xylabs/geo**](#../README)

***

A Mercator coordinate extending MapBox LngLat.

## Extends

- `LngLat`

## Constructors

### Constructor

```ts
new MercatorLngLat(lng: number, lat: number): MercatorLngLat;
```

### Parameters

| Parameter | Type |
| ------ | ------ |
| `lng` | `number` |
| `lat` | `number` |

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
function boundingBoxToBoundary(box: MercatorBoundingBox): MercatorBoundary;
```

Converts a bounding box to an ordered boundary polygon (closed ring of corner points).

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `box` | [`MercatorBoundingBox`](#../classes/MercatorBoundingBox) | The bounding box to convert |

## Returns

[`MercatorBoundary`](#../type-aliases/MercatorBoundary)

An array of corner points forming a closed boundary

  ### <a id="boundingBoxToCenter"></a>boundingBoxToCenter

[**@xylabs/geo**](#../README)

***

```ts
function boundingBoxToCenter(boundingBox: MercatorBoundingBox, decimal?: number): number[];
```

Computes the center point of a bounding box as [lng, lat], rounded to the specified decimal places.

## Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `boundingBox` | [`MercatorBoundingBox`](#../classes/MercatorBoundingBox) | `undefined` | The bounding box to find the center of |
| `decimal` | `number` | `6` | Number of decimal places for rounding (default 6) |

## Returns

`number`[]

A [longitude, latitude] tuple representing the center

  ### <a id="boundingBoxToPolygon"></a>boundingBoxToPolygon

[**@xylabs/geo**](#../README)

***

```ts
function boundingBoxToPolygon(box: MercatorBoundingBox): Polygon;
```

Converts a bounding box to a GeoJSON Polygon geometry.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `box` | [`MercatorBoundingBox`](#../classes/MercatorBoundingBox) | The bounding box to convert |

## Returns

`Polygon`

A GeoJSON Polygon representing the bounding box

  ### <a id="hasSiblings"></a>hasSiblings

[**@xylabs/geo**](#../README)

***

```ts
function hasSiblings(tiles: MercatorTile[], tile: MercatorTile): boolean;
```

Checks whether all four siblings of the given tile exist in the tile array.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `tiles` | [`MercatorTile`](#../type-aliases/MercatorTile)[] | The array of tiles to search |
| `tile` | [`MercatorTile`](#../type-aliases/MercatorTile) | The tile whose siblings to check for |

## Returns

`boolean`

True if all siblings are present in the array

  ### <a id="tileFromPoint"></a>tileFromPoint

[**@xylabs/geo**](#../README)

***

```ts
function tileFromPoint(point: MercatorLngLat, z: number): MercatorTile;
```

Converts a geographic point to the integer Mercator tile containing it at the given zoom level.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `point` | [`MercatorLngLat`](#../classes/MercatorLngLat) | The geographic coordinate |
| `z` | `number` | The zoom level |

## Returns

[`MercatorTile`](#../type-aliases/MercatorTile)

The tile as [x, y, zoom]

  ### <a id="tileFromQuadkey"></a>tileFromQuadkey

[**@xylabs/geo**](#../README)

***

```ts
function tileFromQuadkey(quadkey: string): MercatorTile;
```

Converts a quadkey string to a Mercator tile [x, y, zoom].

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `quadkey` | `string` | The quadkey string to decode |

## Returns

[`MercatorTile`](#../type-aliases/MercatorTile)

The tile as [x, y, zoom]

  ### <a id="tileToBoundingBox"></a>tileToBoundingBox

[**@xylabs/geo**](#../README)

***

```ts
function tileToBoundingBox(tile: MercatorTile): MercatorBoundingBox;
```

Converts a Mercator tile to its geographic bounding box.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `tile` | [`MercatorTile`](#../type-aliases/MercatorTile) | The tile as [x, y, zoom] |

## Returns

[`MercatorBoundingBox`](#../classes/MercatorBoundingBox)

The bounding box covering the tile's geographic extent

  ### <a id="tileToChildren"></a>tileToChildren

[**@xylabs/geo**](#../README)

***

```ts
function tileToChildren(tile: MercatorTile): MercatorTile[];
```

Returns the four child tiles at one zoom level higher.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `tile` | [`MercatorTile`](#../type-aliases/MercatorTile) | The parent tile as [x, y, zoom] |

## Returns

[`MercatorTile`](#../type-aliases/MercatorTile)[]

An array of four child tiles at zoom + 1

  ### <a id="tileToGeoJson"></a>tileToGeoJson

[**@xylabs/geo**](#../README)

***

```ts
function tileToGeoJson(tile: MercatorTile): Polygon;
```

Converts a Mercator tile to a GeoJSON Polygon geometry.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `tile` | [`MercatorTile`](#../type-aliases/MercatorTile) | The tile as [x, y, zoom] |

## Returns

`Polygon`

A GeoJSON Polygon representing the tile's geographic extent

  ### <a id="tileToParent"></a>tileToParent

[**@xylabs/geo**](#../README)

***

```ts
function tileToParent(tile: MercatorTile): MercatorTile;
```

Returns the parent tile at one zoom level lower.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `tile` | [`MercatorTile`](#../type-aliases/MercatorTile) | The tile as [x, y, zoom] |

## Returns

[`MercatorTile`](#../type-aliases/MercatorTile)

The parent tile at zoom - 1

  ### <a id="tileToPoint"></a>tileToPoint

[**@xylabs/geo**](#../README)

***

```ts
function tileToPoint(tile: MercatorTile): MercatorLngLat;
```

Returns the center point of a Mercator tile.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `tile` | [`MercatorTile`](#../type-aliases/MercatorTile) | The tile as [x, y, zoom] |

## Returns

[`MercatorLngLat`](#../classes/MercatorLngLat)

The center coordinate as a MercatorLngLat

  ### <a id="tileToQuadkey"></a>tileToQuadkey

[**@xylabs/geo**](#../README)

***

```ts
function tileToQuadkey(param0: MercatorTile): string;
```

Converts a Mercator tile to its quadkey string representation.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `param0` | [`MercatorTile`](#../type-aliases/MercatorTile) | The tile as [tileX, tileY, tileZoom] |

## Returns

`string`

The quadkey string encoding the tile's position and zoom

  ### <a id="tileToSiblings"></a>tileToSiblings

[**@xylabs/geo**](#../README)

***

```ts
function tileToSiblings(tile: MercatorTile): MercatorTile[];
```

Returns the four sibling tiles (children of the parent tile) for the given tile.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `tile` | [`MercatorTile`](#../type-aliases/MercatorTile) | The tile as [x, y, zoom] |

## Returns

[`MercatorTile`](#../type-aliases/MercatorTile)[]

An array of four sibling tiles at the same zoom level

  ### <a id="tilesEqual"></a>tilesEqual

[**@xylabs/geo**](#../README)

***

```ts
function tilesEqual(param0: MercatorTile, param1: MercatorTile): boolean;
```

Checks whether two Mercator tiles are equal by comparing their x, y, and zoom values.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `param0` | [`MercatorTile`](#../type-aliases/MercatorTile) | The first tile as [x, y, zoom] |
| `param1` | [`MercatorTile`](#../type-aliases/MercatorTile) | The second tile as [x, y, zoom] |

## Returns

`boolean`

True if both tiles have identical coordinates and zoom

  ### <a id="tilesFromBoundingBox"></a>tilesFromBoundingBox

[**@xylabs/geo**](#../README)

***

```ts
function tilesFromBoundingBox(box: MercatorBoundingBox, zoom: number): MercatorTile[];
```

Returns all Mercator tiles that intersect the given bounding box at the specified zoom level.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `box` | [`MercatorBoundingBox`](#../classes/MercatorBoundingBox) | The geographic bounding box |
| `zoom` | `number` | The zoom level |

## Returns

[`MercatorTile`](#../type-aliases/MercatorTile)[]

An array of tiles covering the bounding box

  ### <a id="tilesHasTile"></a>tilesHasTile

[**@xylabs/geo**](#../README)

***

```ts
function tilesHasTile(tiles: MercatorTile[], tile: MercatorTile): boolean;
```

Checks whether a specific tile exists in the given tile array.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `tiles` | [`MercatorTile`](#../type-aliases/MercatorTile)[] | The array of tiles to search |
| `tile` | [`MercatorTile`](#../type-aliases/MercatorTile) | The tile to look for |

## Returns

`boolean`

True if the tile is found in the array

### type-aliases

  ### <a id="MercatorBoundary"></a>MercatorBoundary

[**@xylabs/geo**](#../README)

***

```ts
type MercatorBoundary = MercatorLngLat[];
```

An ordered array of MercatorLngLat points forming a boundary.

  ### <a id="MercatorTile"></a>MercatorTile

[**@xylabs/geo**](#../README)

***

```ts
type MercatorTile = readonly [number, number, number];
```

A Mercator tile represented as [x, y, zoom].

### variables

  ### <a id="d2r"></a>d2r

[**@xylabs/geo**](#../README)

***

```ts
const d2r: number;
```

Conversion factor from degrees to radians.

  ### <a id="r2d"></a>r2d

[**@xylabs/geo**](#../README)

***

```ts
const r2d: number;
```

Conversion factor from radians to degrees.


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