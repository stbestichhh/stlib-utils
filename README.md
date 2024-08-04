[![Node.js CI](https://github.com/stbestichhh/stlib-utils/actions/workflows/node.js.yml/badge.svg)](https://github.com/stbestichhh/stlib-utils/actions/workflows/node.js.yml)
[![NPM Version](https://img.shields.io/npm/v/@stlib/config)](https://www.npmjs.com/package/@stlib/config)
[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)
[![Open Source Love](https://badges.frapsoft.com/os/v1/open-source.svg?v=103)](https://github.com/ellerbrock/open-source-badges/)

# @stlib/config

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

**stlib/config** - is a library for creating configurations in your node.js applications.

## Getting started

### Installation

```shell
$ yarn add @stlib/config
```

> [!IMPORTANT]
> **Node.js 18.x+** version must be installed in your OS.

### Usage

Object type for config:
```TypeScript
ConfigType {
  [key: string]: string | number;
}
```

Options type for config:
```TypeScript
export interface ConfigOptionsType {
  force?: boolean;
  alter?: boolean;
}
```

```TypeScript
Config {
  constructor(path: PathLike, config: ConfigType, options?: ConfigOptionsType);

  // reads current config
  read(): ConfigType;
  static read(path: PathLike): Promise<ConfigType>;
  static readSync(path: PathLike): ConfigType;

  // Get specific value from config
  get(key: string): string | number;
  static get(key: string, path: PathLike): Promise<string | number>;
  static getSync(key: string, path: PathLike): string | number;

  // If use static methods of Config class, use this function to create config before other operations
  static create(path: PathLike): Promise<void>;
  static createSync(path: PathLike): void;

  // Update config
  write(config: ConfigType): Promise<void>;
  static write(path: PathLike, config: ConfigType): Promise<void>;
  static writeSync(path: PathLike, config: ConfigType): void;
}

```

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

## Changelog

Project changes are writen in changelog, see the [CHANGELOG.md](CHANGELOG.md).

We use [SemVer](https://semver.org/) for versioning.
For the versions available, see the [tags](https://github.com/stbestichhh/stlib-utils/tags) on this repository.
For the versions supported, see the [SECURITY.md](SECURITY.md).

## Authors

- [@stbestichhh](https://www.github.com/stbestichhh)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE)
