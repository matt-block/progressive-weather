/*
 * Progressive Weather
 * Copyright © 2018 Matei Bogdan Radu <matei.radu.92@gmail.com>
 * Licensed under MIT
 * (https://github.com/matt-block/progressive-weather/blob/master/LICENSE)
 */
import { API_KEY } from '../config'
import OpenWeatherMap from '../api/OpenWeatherMap'
import moment from 'moment'

export const fetchCurrentDataFor = (latitude, longitude) => async (dispatch) => {
  dispatch(startApiFetching())

  const weatherService = new OpenWeatherMap(API_KEY, 'metric')
  const rawData = await weatherService.getCurrentByCoordinates(latitude, longitude)

  const currentData = {}
  currentData.locationName = rawData.name
  currentData.temperature = rawData.main.temp
  currentData.humidity = rawData.main.humidity
  currentData.description = rawData.weather[0].main
  dispatch(addApiData(currentData))

  dispatch(stopApiFetching())
}

export const fetchForecastDataFor = (latitude, longitude) => async (dispatch) => {
  dispatch(startApiFetching())

  const weatherService = new OpenWeatherMap(API_KEY, 'metric')
  const rawData = await weatherService.getForecasatByCoordinates(latitude, longitude)

  let daysSets = []
  daysSets[0] = []
  daysSets[1] = []
  daysSets[2] = []

  const today = moment().startOf('day')
  rawData.list.map(set => {
    const setDate = moment.unix(set.dt).startOf('day')
    switch (setDate.diff(today, 'days')) {
      case 1:
        daysSets[0].push(set)
        return set
      case 2:
        daysSets[1].push(set)
        return set
      case 3:
        daysSets[2].push(set)
        return set
      default:
        return set
    }
  })

  const forecastData = daysSets.map((day, index) => ({
    min: day.reduce((min, current) => current.main.temp_min <= min ? current.main.temp_min : min, 9999),
    max: day.reduce((max, current) => current.main.temp_max >= max ? current.main.temp_max : max, -9999)
  }))

  dispatch(addApiForecast(forecastData))
  dispatch(stopApiFetching())
}

export const addApiData = data => ({
  type: 'API_ADD_DATA',
  currentData: data
})

export const removeApiData = () => ({
  type: 'API_REMOVE_DATA'
})

export const addApiForecast = data => ({
  type: 'API_ADD_FORECAST',
  forecastData: data
})

export const removeApiForecast = () => ({
  type: 'API_REMOVE_FORECAST'
})

export const startApiFetching = () => ({
  type: 'API_START_FETCHING'
})

export const stopApiFetching = () => ({
  type: 'API_STOP_FETCHING'
})