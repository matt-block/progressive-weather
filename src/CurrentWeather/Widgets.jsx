/*
 * Progressive Weather
 * Copyright © 2018 Matei Bogdan Radu <matei.radu.92@gmail.com>
 * Licensed under MIT
 * (https://github.com/matt-block/progressive-weather/blob/master/LICENSE)
 */

import React from 'react'

/**
 * Widget that displays the current weather conditions.
 *
 * @param {Object} data Current weather data.
 * @param {string} data.location Name of the location.
 * @param {number} data.temp Temperature.
 * @param {number} data.humid Humidity, in percentage.
 * @param {string} data.description A brief description of the conditions.
 */
export function WeatherWidget(data) {
  return (
    <section className='current-weather'>
      <p>{data.location}</p>
      <p>{data.temp} °C</p>
      <p>{data.humid} %</p>
      <p>{data.description}</p>
    </section>
  )
}

/**
 * Widget to display during fetching operations on when there is no current
 * data to display.
 */
export function LoadingWidget() {
  return (
    <section className='current-weather'>
      <p>Loading...</p>
    </section>
  )
}