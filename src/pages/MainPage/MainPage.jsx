/*
 * Progressive Weather
 * Copyright © 2018 Matei Bogdan Radu <matei.radu.92@gmail.com>
 * Licensed under MIT
 * (https://github.com/matt-block/progressive-weather/blob/master/LICENSE)
 */

import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import CurrentWeather from '../../components/CurrentWeather'
import Forecast from '../../components/Forecast'
import NetworkError from '../../components/NetworkError'

/**
 * Main page of the application.
 *
 * This component will also be the fallback page for incorrect URLs.
 */
function MainPage({ error }) {
  if (error) { return <NetworkError error={error} /> }

  return (
    <Fragment>
      <CurrentWeather />
      <Forecast />
    </Fragment>
  )
}

MainPage.propTypes = {
  error: PropTypes.string,
}

MainPage.defaultProps = {
  error: '',
}

const mapStateToProps = state => ({
  error: state.api.error,
})

export default connect(mapStateToProps)(MainPage)