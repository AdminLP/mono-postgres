# mono-sequelize

PostreSQL module for Mono

[![npm version](https://img.shields.io/npm/v/mono-sequelize.svg)](https://www.npmjs.com/package/mono-sequelize)
[![Travis](https://img.shields.io/travis/AdminLP/mono-sequelize/master.svg)](https://travis-ci.org/AdminLP/mono-sequelize)
[![Coverage](https://img.shields.io/codecov/c/github/AdminLP/mono-sequelize/master.svg)](https://codecov.io/gh/AdminLP/mono-sequelize)
[![license](https://img.shields.io/github/license/AdminLP/mono-sequelize.svg)](https://github.com/AdminLP/mono-sequelize/blob/master/LICENSE)

## Installation

```bash
npm install --save mono-sequelize
```

Then, in your configuration file of your Mono application (example: `conf/application.js`):

```js
module.exports = {
  mono: {
    modules: ['mono-sequelize']
  }
}
```

## Configuration

`mono-sequelize` will use the `mono.sequelize` property of your configuration (example: `conf/development.js`):

```js
module.exports = {
  mono: {
    sequelize: {
      /* Module options */
    }
  }
}
```

## Usage

In your `src/` files of your Mono project, you can access `hello` like this:

```js
const { db } = require('mono-sequelize')

db()
```

## Development / Contribution

See the [contribution guidelines](CONTRIBUTING.md) of this project.

## License

Apache-2.0 &copy; AdminLP
