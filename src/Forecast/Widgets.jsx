/*
 * Progressive Weather
 * Copyright © 2018 Matei Bogdan Radu <matei.radu.92@gmail.com>
 * Licensed under MIT
 * (https://github.com/matt-block/progressive-weather/blob/master/LICENSE)
 */

import React from 'react'
import './Widgets.css'
import { WeatherIcon } from '../Icons'

/**
 * Widget that displays a list with the forecast days.
 */
export function ForecastList({ children }) {
  return (
    <section className='forecast-widget'>
      <ul className='forecast-list'>
        {children}
      </ul>
    </section>
  )
}

/**
 * List item that displays minimal predicted weather data for a future day.
 *
 * @param {Object} data Forecast data for the day.
 * @param {number} data.day Week day.
 * @param {string} data.icon Condition icon ID.
 * @param {number} data.max Maximum predicted temperature.
 * @param {number} data.min Minimum predicted temperature.
 */
export function ForecastDay(data) {
  return (
    <li className='forecast-list__item'>
      <span className='forecast-list__item-day'>{weekDay[data.day]}</span>
      <div className='forecast-list__item-icon'>
        <WeatherIcon id={data.icon} />
      </div>
      <div className='forecast-list__item-temperatures'>
        <span>{data.max.toFixed(0)}°</span> / <span>{data.min.toFixed(0)}°</span>
      </div>
    </li>
  )
}

const weekDay = {
  1: 'Monday',
  2: 'Tuesday',
  3: 'Wednesday',
  4: 'Thursday',
  5: 'Friday',
  6: 'Saturday',
  7: 'Sunday',
}