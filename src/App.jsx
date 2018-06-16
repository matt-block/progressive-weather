/*
 * Progressive Weather
 * Copyright © 2018 Matei Bogdan Radu <matei.radu.92@gmail.com>
 * Licensed under MIT
 * (https://github.com/matt-block/progressive-weather/blob/master/LICENSE)
 */

import React from 'react'
import { Provider } from 'react-redux'
import { Switch, Route, Redirect } from 'react-router-dom'
import { ConnectedRouter } from 'connected-react-router'
import store from './store'
import history from './history'
import Toolbar from './components/Toolbar'
import MainPage from './pages/MainPage'
import SettingsPage from './pages/SettingsPage'
import LicensesPage from './pages/LicensesPage'
import { loadSettings } from './store/app/actions'
import { fetchCurrentDataFor, fetchForecastDataFor } from './store/api/actions'

function initialize() {
  store.dispatch(loadSettings())

  // TODO: onGeolocationUnsuccessful.
  navigator.geolocation.getCurrentPosition((position) => {
    store.dispatch(fetchCurrentDataFor(position.coords.latitude, position.coords.longitude))
    store.dispatch(fetchForecastDataFor(position.coords.latitude, position.coords.longitude))
  })
}

function App() {
  initialize()

  return (
    <Provider store={store}>
      <React.Fragment>
        <Toolbar />
        <ConnectedRouter history={history}>
          <Switch>
            <Route exact path='/' component={MainPage} />
            <Route path='/settings' component={SettingsPage} />
            <Route path='/licenses' component={LicensesPage} />
            <Redirect to='/' />
          </Switch>
        </ConnectedRouter>
      </React.Fragment>
    </Provider>
  )
}

export default App