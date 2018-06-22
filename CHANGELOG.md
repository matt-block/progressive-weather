# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## [1.6.1] - 2018-06-22
### Fixed
- User is now redirected to the main page when manually updating from Settings.

## [1.6.0] - 2018-06-21
### Added
- Weather data is now cached offline. This reduces the amount of network calls
and provides functionality when offline (if cache is not older than 15 minutes).

## [1.5.4] - 2018-06-20
### Changed
- Disables zoom.

## [1.5.3] - 2018-06-19
### Fixed
- iOS icon not appearing when adding the app to Home.

## [1.5.2] - 2018-06-18
### Changed
- Toolbar now is fixed at the top of the window.

## [1.5.1] - 2018-06-18
### Changed
- Settings rows are taller and always display a bottom border.

## [1.5.0] - 2018-06-18
### Added
- Help group in Settings page with bug report link.

## [1.4.2] - 2018-06-16
### Changed
- `App` now also handles user positioning.

### Removed
- `GeoHandler` was removed because it's only purpose is now handled by `App`.

## [1.4.1] - 2018-06-15
### Added
- Missing weather data provider mention in settings page.

## [1.4.0] - 2018-06-15
### Added
- Option to select temperature unit.

## [1.3.1] - 2018-06-14
### Fixed
- Toolbar does not depend on weather data being fetched and always renders.

## [1.3.0] - 2018-06-14
### Added
- Notifies the user when a new version is available.
- Users can manually update via _Settings > Version > Update now_.

## [1.2.1] - 2018-06-14
### Fixed
- The current temperature is now always displayed without decimals.

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

[1.6.1]: https://github.com/matt-block/progressive-weather/compare/v1.6.0...v1.6.1
[1.6.0]: https://github.com/matt-block/progressive-weather/compare/v1.5.4...v1.6.0
[1.5.4]: https://github.com/matt-block/progressive-weather/compare/v1.5.3...v1.5.4
[1.5.3]: https://github.com/matt-block/progressive-weather/compare/v1.5.2...v1.5.3
[1.5.2]: https://github.com/matt-block/progressive-weather/compare/v1.5.1...v1.5.2
[1.5.1]: https://github.com/matt-block/progressive-weather/compare/v1.5.0...v1.5.1
[1.5.0]: https://github.com/matt-block/progressive-weather/compare/v1.4.2...v1.5.0
[1.4.2]: https://github.com/matt-block/progressive-weather/compare/v1.4.1...v1.4.2
[1.4.1]: https://github.com/matt-block/progressive-weather/compare/v1.4.0...v1.4.1
[1.4.0]: https://github.com/matt-block/progressive-weather/compare/v1.3.1...v1.4.0
[1.3.1]: https://github.com/matt-block/progressive-weather/compare/v1.3.0...v1.3.1
[1.3.0]: https://github.com/matt-block/progressive-weather/compare/v1.2.1...v1.3.0
[1.2.1]: https://github.com/matt-block/progressive-weather/compare/v1.2.0...v1.2.1
[1.2.0]: https://github.com/matt-block/progressive-weather/compare/v1.1.1...v1.2.0
[1.1.1]: https://github.com/matt-block/progressive-weather/compare/v1.1.0...v1.1.1
[1.1.0]: https://github.com/matt-block/progressive-weather/compare/v1.0.1...v1.1.0
[1.0.1]: https://github.com/matt-block/progressive-weather/compare/v1.0.0...v1.0.1
[1.0.0]: https://github.com/matt-block/progressive-weather/compare/e0ae34c0d9e28cb00316093fba3c53d12c51bd55...v1.0.0
