[![logo][]](https://xylabs.com)

# @xylabs/assert

[![npm-badge][]][npm-link]
[![npm-downloads-badge][]][npm-link]
[![jsdelivr-badge][]][jsdelivr-link]
[![npm-license-badge][]](LICENSE)
[![socket-badge][]][socket-link]

> XY Labs generalized Javascript library 

## Table of Contents

-   [Description](#description)
-   [Install](#install)
-   [Maintainers](#maintainers)
-   [License](#license)
-   [Credits](#credits)

## Description

Common Javascript code that is used throughout XYO projects that use React.

## Install

Using npm:

```sh
npm i --save @xylabs/assert
```

Using yarn:

```sh
yarn add @xylabs/assert
```

## Usage

The `assertEx` function is a utility function for simple null/undefined checks for variables. It evaluates an expression for truthiness and throws an error if the expression is false.

Here are some examples of how to use `assertEx` in different scenarios:

- Basic usage:

  ```javascript
  import { assertEx } from '@xylabs/assert';

  const value = getValue(); // This is a function that may return null or undefined
  assertEx(value); // Throws an AssertExError with a default message if value is null or undefined
  ```

- Using with a custom error message:

  ```javascript
  import { assertEx } from '@xylabs/assert';

  const value = getValue(); // This function may return null or undefined
  assertEx(value, () => 'Dynamic error message based on some conditions'); // Throws an AssertExError with a dynamic message if value is null or undefined

## Maintainers
-   [Arie Trouw](https://github.com/arietrouw) ([arietrouw.com](https://arietrouw.com))
-   [Joel Carter](https://github.com/JoelBCarter)
-   [Matt Jones](https://github.com/jonesmac)
-   [Jordan Trouw](https://github.com/jordantrouw)

## License

See the [LICENSE](LICENSE) file for license details

## Credits

[Made with 🔥and ❄️ by XY Labs](https://xylabs.com)

[logo]: https://cdn.xy.company/img/brand/XYPersistentCompany_Logo_Icon_Colored.svg

[npm-badge]: https://img.shields.io/npm/v/@xylabs/assert.svg
[npm-link]: https://www.npmjs.com/package/@xylabs/assert

[npm-downloads-badge]: https://img.shields.io/npm/dw/@xylabs/assert
[npm-license-badge]: https://img.shields.io/npm/l/@xylabs/assert

[jsdelivr-badge]: https://data.jsdelivr.com/v1/package/npm/@xylabs/assert/badge
[jsdelivr-link]: https://www.jsdelivr.com/package/npm/@xylabs/assert

[socket-badge]: https://socket.dev/api/badge/npm/package/@xylabs/assert
[socket-link]: https://socket.dev/npm/package/@xylabs/assert