/*
 * Progressive Weather
 * Copyright © 2018 Matei Bogdan Radu <matei.radu.92@gmail.com>
 * Licensed under MIT
 * (https://github.com/matt-block/progressive-weather/blob/master/LICENSE)
 */

import React from 'react'
import { Container } from '../PageUtils'
import './Widgets.css'

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
    <section className='current-weather-widget'>
      <p className='current-weather-widget__location'>{data.location}</p>
      <p className='current-weather-widget__main'>{data.temp} °C</p>
      <p className='current-weather-widget__description'>{data.description}</p>
    </section>
  )
}

/**
 * Widget to display during fetching operations on when there is no current
 * data to display.
 */
export function LoadingWidget() {
  return (
    <section className='current-weather-widget'>
      <p className='current-weather-widget__main'>Loading...</p>
    </section>
  )
}

/**
 * Component that provides the intended prominence to the current weather.
 *
 * This component should be used as a parent of `LoadingWidget` and
 * `WeatherWidget`.
 */
export function StylingWrapper({ children }) {
  return (
    <div className='current-weather-widget__wrapper'>
      <Container>
        {children}
      </Container>
    </div>
  )
}