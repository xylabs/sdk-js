# @xylabs/static-implements

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

**@xylabs/static-implements**

***

## Functions

- [staticImplements](#functions/staticImplements)

### functions

  ### <a id="staticImplements"></a>staticImplements

[**@xylabs/static-implements**](#../README)

***

```ts
function staticImplements<T>(): <U>(constructor) => void;
```

Annotation to decorate classes which implement static methods

## Type Parameters

### T

`T`

## Returns

The decorated class requiring it to implement
the members of the the type as static properties/methods

```ts
<U>(constructor): void;
```

### Type Parameters

### U

`U`

### Parameters

### constructor

`U`

### Returns

`void`


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
[npm-badge]: https://img.shields.io/npm/v/@xylabs/static-implements.svg
[npm-link]: https://www.npmjs.com/package/@xylabs/static-implements
[codacy-badge]: https://app.codacy.com/project/badge/Grade/c8e15e14f37741c18cfb47ac7245c698
[codacy-link]: https://www.codacy.com/gh/xylabs/sdk-js/dashboard?utm_source=github.com&utm_medium=referral&utm_content=xylabs/sdk-js&utm_campaign=Badge_Grade
[codeclimate-badge]: https://api.codeclimate.com/v1/badges/c5eb068f806f0b047ea7/maintainability
[codeclimate-link]: https://codeclimate.com/github/xylabs/sdk-js/maintainability
[snyk-badge]: https://snyk.io/test/github/xylabs/sdk-js/badge.svg?targetFile=package.json
[snyk-link]: https://snyk.io/test/github/xylabs/sdk-js?targetFile=package.json

[npm-downloads-badge]: https://img.shields.io/npm/dw/@xylabs/static-implements
[npm-license-badge]: https://img.shields.io/npm/l/@xylabs/static-implements

[jsdelivr-badge]: https://data.jsdelivr.com/v1/package/npm/@xylabs/static-implements/badge
[jsdelivr-link]: https://www.jsdelivr.com/package/npm/@xylabs/static-implements

[socket-badge]: https://socket.dev/api/badge/npm/package/@xylabs/static-implements
[socket-link]: https://socket.dev/npm/package/@xylabs/static-implements