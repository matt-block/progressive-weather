/*
 * Progressive Weather
 * Copyright © 2018 Matei Bogdan Radu <matei.radu.92@gmail.com>
 * Licensed under MIT
 * (https://github.com/matt-block/progressive-weather/blob/master/LICENSE)
 */
import { API_ENDPOINT_BASE, API_KEY } from '../config'

export const fetchCurrentDataFor = (latitude, longitude) => async (dispatch) => {
  dispatch(startApiFetching())

  const options = { method: 'GET' }
  const data = await fetch(`${API_ENDPOINT_BASE}/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`, options)
  dispatch(addApiData(await data.json()))

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