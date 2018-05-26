# mono-postgres

PostreSQL module for Mono

[![npm version](https://img.shields.io/npm/v/mono-postgres.svg)](https://www.npmjs.com/package/mono-postgres)
[![Travis](https://img.shields.io/travis/AdminLP/mono-postgres/master.svg)](https://travis-ci.org/AdminLP/mono-postgres)
[![Coverage](https://img.shields.io/codecov/c/github/AdminLP/mono-postgres/master.svg)](https://codecov.io/gh/AdminLP/mono-postgres)
[![license](https://img.shields.io/github/license/AdminLP/mono-postgres.svg)](https://github.com/AdminLP/mono-postgres/blob/master/LICENSE)

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

Apache-2.0 &copy; AdminLP
