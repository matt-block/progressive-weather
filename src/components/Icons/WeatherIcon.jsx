/*
 * Progressive Weather
 * Copyright © 2018 Matei Bogdan Radu <matei.radu.92@gmail.com>
 * Licensed under MIT
 * (https://github.com/matt-block/progressive-weather/blob/master/LICENSE)
 */

import React from 'react'
import PropTypes from 'prop-types'
import 'weather-underground-icons/dist/wu-icons-style.css'
import './WeatherIcon.css'

/**
 * Displays a weather icon.
 *
 * @param {string} id Icon ID as provided by OpenWeatherMap
 */
function WeatherIcon({ id }) {
  return <i className={`wu wu-white ${iconKeyMap[id]} wu-custom`} />
}

WeatherIcon.propTypes = {
  id: PropTypes.string.isRequired,
}

/**
 * Map between OpenWeatherMap icon IDs and Weather Underground icons.
 *
 * @see https://github.com/manifestinteractive/weather-underground-icons#day-icon-key
 * @see https://openweathermap.org/weather-conditions
 */
const iconKeyMap = {
  '01d': 'wu-clear',
  '01n': 'wu-clear',
  '02d': 'wu-partlycloudy',
  '02n': 'wu-partlycloudy',
  '03n': 'wu-cloudy',
  '03d': 'wu-cloudy',
  '04d': 'wu-cloudy',
  '04n': 'wu-cloudy',
  '09d': 'wu-chancerain',
  '09n': 'wu-chancerain',
  '10d': 'wu-rain',
  '10n': 'wu-rain',
  '11d': 'wu-tstorms',
  '11n': 'wu-tstorms',
  '13d': 'wu-snow',
  '13n': 'wu-snow',
  '50d': 'wu-fog',
  '50n': 'wu-fog',
}

export default WeatherIcon