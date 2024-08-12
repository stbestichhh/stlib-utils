# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## Patch 0.0.13
### Fixed:
* Provided build to package which was missing in 0.0.12

## Patch 0.0.12
### Removed:
* Config utility moved to the separate [package](https://www.npmjs.com/package/@stlib/config)
* Removed cancellable function utility

## Patch 0.0.11
### Added:
* New cancellable function

`04-06-2024`

## Patch 0.0.10
### Fixed:
* If no value provided for cli option, it will be boolean instead of ''.
* Fixed file creation. File was not creating if content option set to ''. Not it creates a file.

`03-06-2024`

## Patch 0.0.9
### Added:
* Alter config on creating new class option
* Overwrite config on creating new class option

### Fixed:
* Fixed creating config issue caused by async code

## Patch 0.0.8
### Changed:
* Removed unnecessary abstract function from AbstractError class

## Patch 0.0.7
### Added:
* AbstractError class which helps with creating your own errors in application

### Changed:
* Improved async error handling function logic
* Now sync error handling func return error and async return error and callback result

## Patch 0.0.6
### Fixed:
* Fixed config read function type

## Patch 0.0.5
### Added:
* Cli parser utility

## Patch 0.0.4
Consists of hot fixes to [patch 0.0.3](#patch-003)

## Patch 0.0.3
### Added:
* Config utility

`10-05-2024`

## Patch 0.0.2
### Added:
* Utility to check if directory or file exists and create them

### Changed:
* Changed error handler logic
* Updated types for error utility

`09-05-2024`

## Patch 0.0.1-r
### Added:
* Error utils: isError, handle error sync and async, log error sync and async

`08-05-2024`

## Patch 0.0.1
**Changes: [(...)](https://github.com/stbestichhh/stlib-utils/commits/master/?since=2024-05-08&until=2024-05-08)**

`06-05-2024`
