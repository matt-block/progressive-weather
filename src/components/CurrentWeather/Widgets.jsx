/*
 * Progressive Weather
 * Copyright © 2018 Matei Bogdan Radu <matei.radu.92@gmail.com>
 * Licensed under MIT
 * (https://github.com/matt-block/progressive-weather/blob/master/LICENSE)
 */

import React from 'react'
import PropTypes from 'prop-types'
import Container from '../PageUtils'
import { WeatherIcon, WindIcon, HumidityIcon, SunsetIcon } from '../Icons'
import Spinner from '../Spinner'
import './Widgets.css'

/**
 * Widget that displays the current weather conditions.
 *
 * @param {Object} data Current weather data.
 * @param {string} data.location Name of the location.
 * @param {number} data.temp Current temperature.
 * @param {number} data.tempMax Maximum expected temperature for the day.
 * @param {number} data.tempMin Minimum expected temperature for the day.
 * @param {string} data.description A brief description of the conditions.
 * @param {string} data.icon Condition icon ID.
 */
export function WeatherWidget(data) {
  // TODO: investigate weird behaviour.
  if (data.$$typeof) { return null }

  return (
    <section className='current-weather-widget'>
      <div className='current-weather-widget__main-wrapper'>
        <div className='current-weather-widget__main-icon'>
          <WeatherIcon id={data.icon} />
        </div>
        <p className='current-weather-widget__main'>{data.temp.toFixed(0)}°</p>
        <div className='current-weather-widget__main-relatives'>
          <span>{data.tempMax.toFixed(0)}°</span>
          <span>{data.tempMin.toFixed(0)}°</span>
        </div>
      </div>
      <p className='current-weather-widget__description'>{data.description}</p>
    </section>
  )
}

/**
 * Widget that display secondary current weather information,
 * like humidity, wind and sunrise/sunset.
 *
 * @param {Object} data Secondary current weather data.
 * @param {number} data.humidity Current humidity in percentage.
 * @param {number} data.wind Current wind speed.
 * @param {Object} data.sunset Sunset `moment` instance.
 * @param {Object} data.sunrise Sunrise `moment` instance.
 */
export function SecondaryWidget(data) {
  return (
    <section className='secondary-current-weather-widget'>
      <div className='secondary-current-weather-widget__humidity'>
        <HumidityIcon />
        {data.humidity.toFixed(0)} %
      </div>
      <div className='secondary-current-weather-widget__wind'>
        <WindIcon />
        {data.wind.toFixed(0)} m/s
      </div>
      <div className='secondary-current-weather-widget__sunset'>
        <SunsetIcon />
        {data.sunrise.format('HH:mm')} | {data.sunset.format('HH:mm')}
      </div>
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
      <div className='current-weather-widget__spinner'>
        <Spinner />
      </div>
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

StylingWrapper.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.shape({
      type: LoadingWidget,
    }),
    PropTypes.shape({
      type: WeatherWidget,
    }),
  ]),
}

StylingWrapper.defaultProps = {
  children: undefined,
}