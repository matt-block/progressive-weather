/*
 * Progressive Weather
 * Copyright © 2018 Matei Bogdan Radu <matei.radu.92@gmail.com>
 * Licensed under MIT
 * (https://github.com/matt-block/progressive-weather/blob/master/LICENSE)
 */

import React, { Fragment } from 'react'
import CurrentWeather from '../../components/CurrentWeather'
import Forecast from '../../components/Forecast'

/**
 * Main page of the application.
 *
 * This component will also be the fallback page for incorrect URLs.
 */
function MainPage() {
  return (
    <Fragment>
      <CurrentWeather />
      <Forecast />
    </Fragment>
  )
}

export default MainPage