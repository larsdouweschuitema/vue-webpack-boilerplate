<div align="center">
  <img width="200" height="200" src="https://vuejs.org/images/logo.png">
  <img width="200" height="200" src="https://webpack.js.org/assets/icon-square-big.svg">
  <h1>Vue Webpack Boilerplate</h1>
</div>

[![version](https://img.shields.io/badge/version-1.2.4-green.svg)](https://semver.org)
[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square)](#contributors)
<img src="https://img.shields.io/github/issues/larsdouweschuitema/vue-webpack-boilerplate" />
<img src="https://img.shields.io/github/stars/larsdouweschuitema/vue-webpack-boilerplate" />
<img src="https://img.shields.io/github/license/larsdouweschuitema/vue-webpack-boilerplate" />

A lean webpack boilerplate for Vue including hot-reloading, linting, unit testing and end-to-end testing. By lean we mean that we still want to give you the freedom in configuring your project. Think about choices like:
- Router e.g. `vue-router`
- State management e.g. `vuex`

## Table of contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Testing](#testing)
- [Tech stack](#tech-stack)
- [Features](#features)
- [Contributing](#contributing)
- [Licenses](#licenses)

## Prerequisites

Make sure you have installed all of the following prerequisites on your development machine:

- Node.js - [Download & Install Node.js](https://nodejs.org/en/download/)
- Yarn package manager - [Download & Install Yarn](https://yarnpkg.com/en/docs/install#mac-stable)

## Installation

Clone the repository and change the directory

```bash
$ git clone https://github.com/larsdouweschuitema/vue-webpack-boilerplate && cd vue-webpack-boilerplate
```

Install dependencies using `npm` or `yarn`
```
$ yarn install
```
```
$ npm install
```

Run app in development mode

```
$ yarn start
```

Create production build

```
$ yarn build
```

## Testing
Unit testing using `jest`

```
$ yarn run unit
```

End-to-end testing using `nightwatch`
```
$ yarn run e2e
```

End-to-end testing with a different environment
```
$ yarn run e2e --env production
```

Run all tests
```
$ yarn run test
```


## Tech stack

- Package manager `yarn`
- Module bundler `webpack`
- Client-side framework `vue`
- Linter `eslint`
- Unit testing `jest`
- End-to-end testing using `nightwatch`
- Pre-processor `sass` for styling components

## Features

- Single file components using `vue-loader`
- Linting on save using `eslint`
- CSS extraction on production using `mini-css-extract-plugin`
- Hot reloading
- Source maps
- Auto generated file including root element using `html-webpack-plugin` and `html-webpack-root-plugin`
- Split development and production `webpack` configurations achieved through `webpack-merge`
- Minified JavaScript in production using `uglifyjs-webpack-plugin`

## Contributing

To contribute to this repository see the [CONTRIBUTING.md](CONTRIBUTING.md) file for details

## Licenses

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore -->
<table>
  <tr>
    <td align="center"><a href="http://www.larsschuitema.nl"><img src="https://avatars3.githubusercontent.com/u/8817968?v=4" width="100px;" alt="Lars Douwe Schuitema"/><br /><sub><b>Lars Douwe Schuitema</b></sub></a><br /><a href="https://github.com/larsdouweschuitema/vue-webpack-boilerplate/commits?author=larsdouweschuitema" title="Code">💻</a></td>
  </tr>
</table>

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!
