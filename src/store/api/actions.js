/*
 * Progressive Weather
 * Copyright © 2018 Matei Bogdan Radu <matei.radu.92@gmail.com>
 * Licensed under MIT
 * (https://github.com/matt-block/progressive-weather/blob/master/LICENSE)
 */

import moment from 'moment'
import { API_KEY } from '../../config'
import OpenWeatherMap from '../../api/OpenWeatherMap'

export const addApiData = data => ({
  type: 'API_ADD_DATA',
  currentData: data,
})

export const removeApiData = () => ({
  type: 'API_REMOVE_DATA',
})

export const addApiForecast = data => ({
  type: 'API_ADD_FORECAST',
  forecastData: data,
})

export const removeApiForecast = () => ({
  type: 'API_REMOVE_FORECAST',
})

export const startApiFetching = () => ({
  type: 'API_START_FETCHING',
})

export const stopApiFetching = () => ({
  type: 'API_STOP_FETCHING',
})

export const addApiError = error => ({
  type: 'API_ADD_ERROR',
  error,
})

export const removeApiError = () => ({
  type: 'API_REMOVE_ERROR',
})

/**
 * Gets the most frequent weather icon for a forecasted day.
 *
 * @param {Object[]} day Array of 3 hour data representing a forecast day.
 */
function getMostFrequentIcon(day) {
  const counts = {}
  let compare = 0
  let mostFrequent
  for (let i = 0, len = day.length; i < len; i += 1) {
    const currentIcon = day[i].weather[0].icon

    if (counts[currentIcon] === undefined) {
      counts[currentIcon] = 1
    } else {
      counts[currentIcon] += 1
    }

    if (counts[currentIcon] > compare) {
      compare = counts[currentIcon]
      mostFrequent = day[i].weather[0].icon
    }
  }

  return mostFrequent
}

export const fetchCurrentDataFor = (latitude, longitude) => async (dispatch, getState) => {
  dispatch(startApiFetching())

  try {
    const weatherService = new OpenWeatherMap(API_KEY, getState().app.unit)
    const rawData = await weatherService.getCurrentByCoordinates(latitude, longitude)

    const currentData = {
      locationName: rawData.name,
      temperature: rawData.main.temp,
      temperatureMin: rawData.main.temp_min,
      temperatureMax: rawData.main.temp_max,
      humidity: rawData.main.humidity,
      sunrise: moment.unix(rawData.sys.sunrise),
      sunset: moment.unix(rawData.sys.sunset),
      description: rawData.weather[0].main,
      icon: rawData.weather[0].icon,
      wind: rawData.wind.speed,
    }

    dispatch(addApiData(currentData))
  } catch (error) {
    dispatch(addApiError(error.message))
  }

  dispatch(stopApiFetching())
}

/**
 * Filters and groups raw forecast data into days.
 */
function generateDaysSets(rawData) {
  const daysSets = []

  for (let i = 0; i < 3; i += 1) {
    daysSets[i] = {}
    daysSets[i].sets = []
  }

  const today = moment().startOf('day')
  rawData.list.map((set) => {
    const setDate = moment.unix(set.dt).startOf('day')
    const differenceInDays = setDate.diff(today, 'days')

    if (differenceInDays >= 1 && differenceInDays <= 3) {
      daysSets[differenceInDays - 1].sets.push(set)
      daysSets[differenceInDays - 1].weekDayAsNumber = setDate.isoWeekday()
    }

    return set
  })

  return daysSets
}

export const fetchForecastDataFor = (latitude, longitude) => async (dispatch, getState) => {
  dispatch(startApiFetching())

  try {
    const weatherService = new OpenWeatherMap(API_KEY, getState().app.unit)
    const rawData = await weatherService.getForecasatByCoordinates(latitude, longitude)

    const allDaysSets = generateDaysSets(rawData)
    const forecastData = allDaysSets.map(day => ({
      min: day.sets.reduce((min, current) => (current.main.temp_min <= min ? current.main.temp_min : min), 9999),
      max: day.sets.reduce((max, current) => (current.main.temp_max >= max ? current.main.temp_max : max), -9999),
      icon: getMostFrequentIcon(day.sets),
      day: day.weekDayAsNumber,
    }))

    dispatch(addApiForecast(forecastData))
  } catch (error) {
    dispatch(addApiError(error.message))
  }

  dispatch(stopApiFetching())
}