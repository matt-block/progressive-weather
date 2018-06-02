/*
 * Progressive Weather
 * Copyright © 2018 Matei Bogdan Radu <matei.radu.92@gmail.com>
 * Licensed under MIT
 * (https://github.com/matt-block/progressive-weather/blob/master/LICENSE)
 */
import { API_KEY } from '../config'
import OpenWeatherMap from '../api/OpenWeatherMap'

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

export const addApiData = data => ({
  type: 'API_ADD_DATA',
  currentData: data
})

export const removeApiData = () => ({
  type: 'API_REMOVE_DATA'
})

export const startApiFetching = () => ({
  type: 'API_START_FETCHING'
})

export const stopApiFetching = () => ({
  type: 'API_STOP_FETCHING'
})