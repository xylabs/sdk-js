# @xylabs/jest-helpers

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

**@xylabs/jest-helpers**

***

## Functions

- [describeIf](#functions/describeIf)
- [itIf](#functions/itIf)
- [tags](#functions/tags)
- [testIf](#functions/testIf)

### functions

  ### <a id="describeIf"></a>describeIf

[**@xylabs/jest-helpers**](#../README)

***

```ts
function describeIf<T>(expr?): any;
```

Conditionally runs or skips the describe

## Type Parameters

### T

`T`

## Parameters

### expr?

The condition to evaluate

`null` | `T`

## Returns

`any`

If the condition is true, describe, otherwise skips

  ### <a id="itIf"></a>itIf

[**@xylabs/jest-helpers**](#../README)

***

```ts
function itIf<T>(expr?): any;
```

Conditionally runs or skips the it

## Type Parameters

### T

`T`

## Parameters

### expr?

The condition to evaluate

`null` | `T`

## Returns

`any`

If the condition is true, it, otherwise skips

  ### <a id="tags"></a>tags

[**@xylabs/jest-helpers**](#../README)

***

```ts
function tags(...tagLabels): Record<string, any>;
```

## Parameters

### tagLabels

...`string`[]

## Returns

`Record`\<`string`, `any`\>

  ### <a id="testIf"></a>testIf

[**@xylabs/jest-helpers**](#../README)

***

```ts
function testIf<T>(expr?): any;
```

Conditionally runs or skips the test

## Type Parameters

### T

`T`

## Parameters

### expr?

The condition to evaluate

`null` | `T`

## Returns

`any`

If the condition is true, test, otherwise skips


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
[npm-badge]: https://img.shields.io/npm/v/@xylabs/jest-helpers.svg
[npm-link]: https://www.npmjs.com/package/@xylabs/jest-helpers
[codacy-badge]: https://app.codacy.com/project/badge/Grade/c8e15e14f37741c18cfb47ac7245c698
[codacy-link]: https://www.codacy.com/gh/xylabs/sdk-js/dashboard?utm_source=github.com&utm_medium=referral&utm_content=xylabs/sdk-js&utm_campaign=Badge_Grade
[codeclimate-badge]: https://api.codeclimate.com/v1/badges/c5eb068f806f0b047ea7/maintainability
[codeclimate-link]: https://codeclimate.com/github/xylabs/sdk-js/maintainability
[snyk-badge]: https://snyk.io/test/github/xylabs/sdk-js/badge.svg?targetFile=package.json
[snyk-link]: https://snyk.io/test/github/xylabs/sdk-js?targetFile=package.json

[npm-downloads-badge]: https://img.shields.io/npm/dw/@xylabs/jest-helpers
[npm-license-badge]: https://img.shields.io/npm/l/@xylabs/jest-helpers

[jsdelivr-badge]: https://data.jsdelivr.com/v1/package/npm/@xylabs/jest-helpers/badge
[jsdelivr-link]: https://www.jsdelivr.com/package/npm/@xylabs/jest-helpers

[socket-badge]: https://socket.dev/api/badge/npm/package/@xylabs/jest-helpers
[socket-link]: https://socket.dev/npm/package/@xylabs/jest-helpers