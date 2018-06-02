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
  currentData.temperatureMin = rawData.main.temp_min
  currentData.temperatureMax = rawData.main.temp_max
  currentData.humidity = rawData.main.humidity
  currentData.sunrise = moment.unix(rawData.sys.sunrise)
  currentData.sunset = moment.unix(rawData.sys.sunset)
  currentData.description = rawData.weather[0].main
  currentData.icon = rawData.weather[0].icon
  currentData.wind = rawData.wind.speed
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

  const weekDayNumbers = []

  const today = moment().startOf('day')
  rawData.list.map(set => {
    const setDate = moment.unix(set.dt).startOf('day')
    switch (setDate.diff(today, 'days')) {
      case 1:
        daysSets[0].push(set)
        weekDayNumbers[0] = setDate.isoWeekday()
        return set
      case 2:
        daysSets[1].push(set)
        weekDayNumbers[1] = setDate.isoWeekday()
        return set
      case 3:
        daysSets[2].push(set)
        weekDayNumbers[2] = setDate.isoWeekday()
        return set
      default:
        return set
    }
  })

  const forecastData = daysSets.map((day, index) => ({
    min: day.reduce((min, current) => current.main.temp_min <= min ? current.main.temp_min : min, 9999),
    max: day.reduce((max, current) => current.main.temp_max >= max ? current.main.temp_max : max, -9999),
    icon: getMostFrequentIcon(day),
    day: weekDayNumbers[index]
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

/**
 * Gets the most frequent weather icon for a forecasted day.
 *
 * @param {Object[]} day Array of 3 hour data representing a forecast day.
 */
function getMostFrequentIcon(day) {
  let counts = {}
  let compare = 0
  let mostFrequent
  for (let i = 0, len = day.length; i < len; i++) {
    let currentIcon = day[i].weather[0].icon

    if (counts[currentIcon] === undefined) {
      counts[currentIcon] = 1
    } else {
      counts[currentIcon]++
    }

    if (counts[currentIcon] > compare) {
      compare = counts[currentIcon]
      mostFrequent = day[i].weather[0].icon
    }
  }

  return mostFrequent
}