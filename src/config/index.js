/*
 * Progressive Weather
 * Copyright © 2018 Matei Bogdan Radu <matei.radu.92@gmail.com>
 * Licensed under MIT
 * (https://github.com/matt-block/progressive-weather/blob/master/LICENSE)
 */

/**
 * OpenWeatherMap API key.
 *
 * @see {@link https://openweathermap.org/appid}
 */
export const API_KEY = process.env.REACT_APP_OPENWEATHERMAP_KEY

/**
 * Homepage of the weather provider.
 */
export const API_URL = 'https://openweathermap.org/'

/**
 * Max age of cached data (in seconds).
 */
export const MAX_CACHE_AGE = 900

/**
 * Application version.
 *
 * The version adheres to semantic versioning.
 *
 * @see {@link https://semver.org/}
 */
export const APP_VERSION = '1.6.1'

/**
 * URL of the application repository.
 */
export const APP_REPO_LINK = 'https://github.com/matt-block/progressive-weather'

/**
 * URL for bug reports.
 */
export const APP_BUGREPORT_LINK = `${APP_REPO_LINK}/issues/new`