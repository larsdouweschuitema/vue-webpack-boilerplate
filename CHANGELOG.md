# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [1.2.0] - 2019-11-03
- Add basic end-to-end testing configuration using `Nightwatch and include an example

## [1.1.0] - 2019-11-03
- Unit testing using `jest`
- Add editor configuration
- Add `eslint` configuration and ignore file
- Use `output.filename` substitutions setting to define name of output files using `[contenthash]` in `webpack` configuration
- Extract boilerplate by creating single runtime bundle for all chunks using `optimization.runtimeChunk` in `webpack` configuration
- Use module identifiers using `moduleIds` in `webpack` configuration
- Minify JavaScript in production using `uglifyjs-webpack-plugin` optimization in `webpack` production configuration

## [1.0.0] - 2019-11-03

### Added

- `webpack` setup with split development and production configurations using `webpack-merge`
- `@babel/core` and `babel-loader` JavaScript transpiler to convert edge JavaScript into plain JavaScript that can run in any browser
- `vue-loader` to allow authoring of Vue components
- `html-webpack-plugin` to simplify creation of HTML file
- `html-webpack-root-plugin` to add tag to generated HTML for a mount point
- `style-loader` to insert CSS into the page
- `css-loader` to allow `import` of CSS from within a JavaScript module
- `mini-css-extract-plugin` to extract CSS into separate file
- `eslint` and `eslint-loader` to lint code for identifying and reporting on patterns in JavaScript

## [Releases]

- https://github.com/larsdouweschuitema/vue-webpack-boilerplate/releases/tag/1.0.0
