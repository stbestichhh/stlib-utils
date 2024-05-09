[![Node.js CI](https://github.com/stbestichhh/stlib-utils/actions/workflows/node.js.yml/badge.svg)](https://github.com/stbestichhh/stlib-utils/actions/workflows/node.js.yml)
[![NPM Version](https://img.shields.io/npm/v/@stlib/utils)](https://www.npmjs.com/package/@stlib/utils)
[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)
[![Open Source Love](https://badges.frapsoft.com/os/v1/open-source.svg?v=103)](https://github.com/ellerbrock/open-source-badges/)

# @stlib/utils

## Table of contents

* [Description](#about)
* [Getting started](#getting-started)
  * [Instalation](#installation)
  * [Usage](#usage)
* [Contributing](#contributing)
* [Changelog](#changelog)
* [Authors](#authors)
* [License](#license)

## About

**stlib** - is a library with utilities and functions which makes developing easier. This library
also provides types for every utility and their params.

## Getting started

### Installation

```shell
$ yarn add @stlib/utils
```

> [!IMPORTANT]
> **Node.js 18.x+** version must be installed in your OS.

### Usage

#### Error utilities:
```TypeScript
isError(error: unknown): boolean;

// checks object or param to be instance of error
```

```TypeScript
handleErrorSync(error: unknown, options?: HandleErrorOptions,): void;

// Handles error synchronously.
// It can log error to console, throw error and write it to log file.
```

```TypeScript
handleErrorSync(error: unknown, callback: () => void | Promise<void>, options?: HandleErrorOptions,): Promise<void>;

// Handles error asynchronously.
// It can log error to console, throw error, write it to log file and calls a callback before error will be thrown.
```

Object type for options:
```
HandleErrorOptions {
  message?: string;
  throw?: boolean;
  toLog?: { path: PathLike; withStack?: boolean }; 
}
```

```TypeScript
logErrorSync(error: unknown, path: PathLike, stack?: boolean): void;

// Writes an error message and it's stack to the log file synchronously
```

```TypeScript
logError(error: unknown, path: PathLike, stack?: boolean): void;

// Writes an error message and it's stack to the log file asynchronously
```

#### File system utilities

```TypeScript
export function isExistsSync(path: PathLike, options?: CreateOptions): boolean;

// Checks is file or directory exists and creates it synchronously
```

```TypeScript
export function isExists(path: PathLike, options?: CreateOptions): boolean;

// Checks is file or directory exists and creates it asynchronously
```

Object type for options:
```
CreateOptions {
  create: boolean;
  recursive?: boolean;
  content?: string;
}
```

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

## Changelog

Project changes are writen in changelog, see the [CHANGELOG.md](CHANGELOG.md).

We use [SemVer](https://semver.org/) for versioning.
For the versions available, see the [tags](https://github.com/stbestichhh/stlib-utils/tags) on this repository.

## Authors

- [@stbestichhh](https://www.github.com/stbestichhh)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE)
