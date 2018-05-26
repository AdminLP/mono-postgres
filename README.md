# mono-postgres

PostreSQL module for Mono

[![npm version](https://img.shields.io/npm/v/mono-postgres.svg)](https://www.npmjs.com/package/mono-postgres)
[![Travis](https://img.shields.io/travis/Vasiliy/mono-postgres/master.svg)](https://travis-ci.org/Vasiliy/mono-postgres)
[![Coverage](https://img.shields.io/codecov/c/github/Vasiliy/mono-postgres/master.svg)](https://codecov.io/gh/Vasiliy/mono-postgres)
[![license](https://img.shields.io/github/license/Vasiliy/mono-postgres.svg)](https://github.com/Vasiliy/mono-postgres/blob/master/LICENSE)

## Installation

```bash
npm install --save mono-postgres
```

Then, in your configuration file of your Mono application (example: `conf/application.js`):

```js
module.exports = {
  mono: {
    modules: ['mono-postgres']
  }
}
```

## Configuration

`mono-postgres` will use the `mono.postgres` property of your configuration (example: `conf/development.js`):

```js
module.exports = {
  mono: {
    postgres: {
      /* Module options */
    }
  }
}
```

## Usage

In your `src/` files of your Mono project, you can access `hello` like this:

```js
const { hello } = require('mono-postgres')

hello()
```

## Development / Contribution

See the [contribution guidelines](CONTRIBUTING.md) of this project.

## License

Apache-2.0 &copy; Vasiliy
