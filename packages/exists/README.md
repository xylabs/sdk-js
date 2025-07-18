# @xylabs/exists

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

**@xylabs/exists**

***

## Functions

- [exists](#functions/exists)

### functions

  ### <a id="exists"></a>exists

[**@xylabs/exists**](#../README)

***

```ts
function exists<T>(x?): x is NonNullable<T>;
```

Used to type narrow an object which is possibly null or undefined. Works well
with functional Array methods. For example:

## Type Parameters

### T

`T`

## Parameters

### x?

The object which is potentially undefined or null

`null` | `T`

## Returns

`x is NonNullable<T>`

False if the object is null/undefined, true otherwise

## Example

```ts
const payloads: XyoPayload[] = boundWitness._payloads?.filter(exists) || []
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
[npm-badge]: https://img.shields.io/npm/v/@xylabs/exists.svg
[npm-link]: https://www.npmjs.com/package/@xylabs/exists
[codacy-badge]: https://app.codacy.com/project/badge/Grade/c8e15e14f37741c18cfb47ac7245c698
[codacy-link]: https://www.codacy.com/gh/xylabs/sdk-js/dashboard?utm_source=github.com&utm_medium=referral&utm_content=xylabs/sdk-js&utm_campaign=Badge_Grade
[codeclimate-badge]: https://api.codeclimate.com/v1/badges/c5eb068f806f0b047ea7/maintainability
[codeclimate-link]: https://codeclimate.com/github/xylabs/sdk-js/maintainability
[snyk-badge]: https://snyk.io/test/github/xylabs/sdk-js/badge.svg?targetFile=package.json
[snyk-link]: https://snyk.io/test/github/xylabs/sdk-js?targetFile=package.json

[npm-downloads-badge]: https://img.shields.io/npm/dw/@xylabs/exists
[npm-license-badge]: https://img.shields.io/npm/l/@xylabs/exists

[jsdelivr-badge]: https://data.jsdelivr.com/v1/package/npm/@xylabs/exists/badge
[jsdelivr-link]: https://www.jsdelivr.com/package/npm/@xylabs/exists

[socket-badge]: https://socket.dev/api/badge/npm/package/@xylabs/exists
[socket-link]: https://socket.dev/npm/package/@xylabs/exists