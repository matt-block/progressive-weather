/*
 * Progressive Weather
 * Copyright © 2018 Matei Bogdan Radu <matei.radu.92@gmail.com>
 * Licensed under MIT
 * (https://github.com/matt-block/progressive-weather/blob/master/LICENSE)
 */

import React from 'react'
import { Provider } from 'react-redux'
import { store } from './store'
import CurrentWeather from './CurrentWeather'
import Forecast from './Forecast'
import Toolbar from './Toolbar'
import './App.css'

function App() {
  return (
    <Provider store={store}>
      <React.Fragment>
        <Toolbar />
        <CurrentWeather />
        <Forecast />
      </React.Fragment>
    </Provider>
  )
}

export default App