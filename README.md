[![version](https://img.shields.io/badge/version-1.0.0-green.svg)](https://semver.org)

<h1 align="center">
  Vue Webpack Boilerplate
</h1>

A webpack boilerplate for Vue including hot-reloading, linting, unit testing and css extraction.

## Table of contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Testing](#testing)
- [Tech stack](#tech-stack)
- [Features](#features)
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

Install dependencies

```
$ yarn install
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

## Tech stack

- Package manager `yarn`
- Module bundler `webpack`
- Client-side framework `vue`
- Linter `eslint`

## Features

- Single file components using `vue-loader`
- Linting on save using `eslint`
- Hot reloading
- Source maps
- Auto generated file including root element using `html-webpack-plugin` and `html-webpack-root-plugin`
- Split development and production `webpack` configurations achieved through `webpack-merge`

## Contributing

To contribute to this repository see the [CONTRIBUTING.md](CONTRIBUTING.md) file for details

## Licenses

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
