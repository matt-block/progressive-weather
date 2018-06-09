/*
 * Progressive Weather
 * Copyright © 2018 Matei Bogdan Radu <matei.radu.92@gmail.com>
 * Licensed under MIT
 * (https://github.com/matt-block/progressive-weather/blob/master/LICENSE)
 */

import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import { store } from './store'
import GeoHandler from './components/GeoHandler'
import Toolbar from './components/Toolbar'
import MainPage from './pages/MainPage'
import './App.css'

function App() {
  return (
    <Provider store={store}>
      <React.Fragment>
        <GeoHandler />
        <Toolbar />
        <Router>
          <Switch>
            <Route exact path='/' component={MainPage} />
            <Redirect to='/' />
          </Switch>
        </Router>
      </React.Fragment>
    </Provider>
  )
}

export default App