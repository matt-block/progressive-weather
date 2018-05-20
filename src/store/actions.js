/*
 * Progressive Weather
 * Copyright © 2018 Matei Bogdan Radu <matei.radu.92@gmail.com>
 * Licensed under MIT
 * (https://github.com/matt-block/progressive-weather/blob/master/LICENSE)
 */
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