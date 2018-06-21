/*
 * Progressive Weather
 * Copyright © 2018 Matei Bogdan Radu <matei.radu.92@gmail.com>
 * Licensed under MIT
 * (https://github.com/matt-block/progressive-weather/blob/master/LICENSE)
 */

import moment from 'moment'
import { API_KEY, MAX_CACHE_AGE } from '../../config'
import OpenWeatherMap from '../../api/OpenWeatherMap'
import { kelvinToCelsius, kelvinToFahrenheit } from '../../utils/converters'
import { getCache, updateCache } from '../../utils/cache'

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

  let cache = getCache()
  let currentData

  if (
    !cache ||
    (cache && !cache.currentData) ||
    moment().diff(moment.unix(cache.timestamp), 'seconds') > MAX_CACHE_AGE
  ) {
    // There is no current weather data cached or
    // it is deemed obsolete.
    // Proceed with API call to fetch fresh data.
    try {
      const weatherService = new OpenWeatherMap(API_KEY)
      const rawData = await weatherService.getCurrentByCoordinates(latitude, longitude)

      currentData = {
        locationName: rawData.name,
        temperature: rawData.main.temp,
        temperatureMin: rawData.main.temp_min,
        temperatureMax: rawData.main.temp_max,
        humidity: rawData.main.humidity,
        sunrise: rawData.sys.sunrise,
        sunset: rawData.sys.sunset,
        description: rawData.weather[0].main,
        icon: rawData.weather[0].icon,
        wind: rawData.wind.speed,
      }

      // Cache new data.
      cache = getCache()
      updateCache({
        ...cache,
        timestamp: moment().unix(),
        currentData,
      })
    } catch (error) {
      // If there is an error fallback to cached data if it exists,
      // else proceed with storing the error message.
      if (cache && cache.currentData) {
        currentData = { ...cache.currentData }
      } else {
        dispatch(addApiError(error.message))
        dispatch(stopApiFetching())
        return
      }
    }
  } else {
    // There is cached and valid current weather data, skip API call.
    currentData = { ...cache.currentData }
  }

  if (getState().app.unit !== '') {
    // Convert Kelvin to current unit.
    const converter = getState().app.unit === 'metric' ? kelvinToCelsius : kelvinToFahrenheit
    currentData = {
      ...currentData,
      temperature: converter(currentData.temperature),
      temperatureMin: converter(currentData.temperatureMin),
      temperatureMax: converter(currentData.temperatureMax),
    }
  }

  // Convert unix timestamps to moment instances.
  currentData = {
    ...currentData,
    sunrise: moment.unix(currentData.sunrise),
    sunset: moment.unix(currentData.sunset),
  }

  dispatch(addApiData(currentData))
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

  let cache = getCache()
  let forecastData

  if (
    !cache ||
    (cache && !cache.forecastData) ||
    moment().diff(moment.unix(cache.timestamp), 'seconds') > MAX_CACHE_AGE
  ) {
    // There is no forecast data cached or it is deemed obsolete.
    // Proceed with API call to fetch fresh data.
    try {
      const weatherService = new OpenWeatherMap(API_KEY)
      const rawData = await weatherService.getForecasatByCoordinates(latitude, longitude)

      const allDaysSets = generateDaysSets(rawData)
      forecastData = allDaysSets.map(day => ({
        min: day.sets.reduce((min, current) => (current.main.temp_min <= min ? current.main.temp_min : min), 9999),
        max: day.sets.reduce((max, current) => (current.main.temp_max >= max ? current.main.temp_max : max), -9999),
        icon: getMostFrequentIcon(day.sets),
        day: day.weekDayAsNumber,
      }))

      // Cache new data.
      cache = getCache()
      updateCache({
        ...cache,
        timestamp: moment().unix(),
        forecastData,
      })
    } catch (error) {
      // If there is an error fallback to cached data if it exists,
      // else proceed with storing the error message.
      if (cache && cache.currentData) {
        forecastData = [...cache.forecastData]
      } else {
        dispatch(addApiError(error.message))
        dispatch(stopApiFetching())
        return
      }
    }
  } else {
    // There is cached and valid forecast data, skip API call.
    forecastData = [...cache.forecastData]
  }

  if (getState().app.unit !== '') {
    // Convert Kelvin to current unit.
    const converter = getState().app.unit === 'metric' ? kelvinToCelsius : kelvinToFahrenheit
    forecastData = forecastData.map(day => ({
      min: converter(day.min),
      max: converter(day.max),
      icon: day.icon,
      day: day.day,
    }))
  }

  dispatch(addApiForecast(forecastData))
  dispatch(stopApiFetching())
}