# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## [1.2.0] - 2018-06-14
### Added
- Displays a message when the application is offline.

## [1.1.1] - 2018-06-13
### Fixed
- Incorrect placement of `worker-loader` in the Webpack production configuration.

## [1.1.0] - 2018-06-13
### Added
- Third-party licenses page (via _Settings > Third-party licenses_)
### Changed
- Ejected application from `create-react-app`
- Refactored `Toolbar` logic concerning buttons visibility
### Fixed
- `SettingsRow`, `SettingsRowLink` and `SettingsRowInternalLink` not displaying
correctly the row title if no subtitle is provided.

## [1.0.1] - 2018-06-11
### Changed
- All existing code was refactored to comply with the Airbnb React/JSX Style Guide.

## [1.0.0] - 2018-06-10
### Added
- Initial release.
  - Display current local weather main in two sections: main widget (temperature in Celsius, min, max, condition icon and description) and secondary widget (sunset/sunrise times, humidity and wind speed)
  - Display forecast for the next three days (min, max and condition icon)
  - Settings page with _about_ section

[1.2.0]: https://github.com/matt-block/progressive-weather/compare/v1.1.1...v1.2.0
[1.1.1]: https://github.com/matt-block/progressive-weather/compare/v1.1.0...v1.1.1
[1.1.0]: https://github.com/matt-block/progressive-weather/compare/v1.0.1...v1.1.0
[1.0.1]: https://github.com/matt-block/progressive-weather/compare/v1.0.0...v1.0.1
[1.0.0]: https://github.com/matt-block/progressive-weather/compare/e0ae34c0d9e28cb00316093fba3c53d12c51bd55...v1.0.0
