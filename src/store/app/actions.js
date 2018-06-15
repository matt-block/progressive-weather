/*
 * Progressive Weather
 * Copyright © 2018 Matei Bogdan Radu <matei.radu.92@gmail.com>
 * Licensed under MIT
 * (https://github.com/matt-block/progressive-weather/blob/master/LICENSE)
 */

import { fetchCurrentDataFor, fetchForecastDataFor } from '../api/actions'

export const enableNotification = () => ({
  type: 'APP_NOTIFICATION_ON',
})

export const disableNotification = () => ({
  type: 'APP_NOTIFICATION_OFF',
})

export const setUnit = unit => ({
  type: 'APP_SET_UNIT',
  unit,
})

export const changeUnit = unit => (dispatch) => {
  window.localStorage.setItem('unit', unit)
  dispatch(setUnit(unit))
  navigator.geolocation.getCurrentPosition((position) => {
    dispatch(fetchCurrentDataFor(position.coords.latitude, position.coords.longitude))
    dispatch(fetchForecastDataFor(position.coords.latitude, position.coords.longitude))
  })
}

export const loadSettings = () => (dispatch) => {
  const unit = window.localStorage.getItem('unit')
  if (unit) { dispatch(setUnit(unit)) }
}