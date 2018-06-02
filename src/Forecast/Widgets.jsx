/*
 * Progressive Weather
 * Copyright © 2018 Matei Bogdan Radu <matei.radu.92@gmail.com>
 * Licensed under MIT
 * (https://github.com/matt-block/progressive-weather/blob/master/LICENSE)
 */

import React from 'react'
import './Widgets.css'

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
 * @param {string} data.day Human readable week day.
 * @param {string} data.icon Condition icon ID.
 * @param {number} data.max Maximum predicted temperature.
 * @param {number} data.min Minimum predicted temperature.
 */
export function ForecastDay(data) {
  return (
    <li className='forecast-list__item'>
      <span className='forecast-list__item-day'>Tomorrow</span>
      <span className='forecast-list__item-icon'>icon</span>
      <div className='forecast-list__item-temperatures'>
        <span>{data.max.toFixed(0)}°</span> / <span>{data.min.toFixed(0)}°</span>
      </div>
    </li>
  )
}