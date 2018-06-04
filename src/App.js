/*
 * Progressive Weather
 * Copyright © 2018 Matei Bogdan Radu <matei.radu.92@gmail.com>
 * Licensed under MIT
 * (https://github.com/matt-block/progressive-weather/blob/master/LICENSE)
 */

import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'
import { store } from './store'
import CurrentWeather from './CurrentWeather'
import Forecast from './Forecast'
import Toolbar from './Toolbar'
import './App.css'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <React.Fragment>
          <Route path='/' component={Toolbar} />
          <Route path='/' component={CurrentWeather} />
          <Route path='/' component={Forecast} />
        </React.Fragment>
      </BrowserRouter>
    </Provider>
  )
}

export default App