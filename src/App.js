/*
 * Progressive Weather
 * Copyright © 2018 Matei Bogdan Radu <matei.radu.92@gmail.com>
 * Licensed under MIT
 * (https://github.com/matt-block/progressive-weather/blob/master/LICENSE)
 */
import React from 'react'
import { Provider } from 'react-redux'
import { store } from './store'
import CurrentWeather from './CurrentWeather/CurrentWeather'

function App() {
  return (
    <Provider store={store}>
      <CurrentWeather />
    </Provider>
  )
}

export default App