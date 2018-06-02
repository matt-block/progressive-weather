/*
 * Progressive Weather
 * Copyright © 2018 Matei Bogdan Radu <matei.radu.92@gmail.com>
 * Licensed under MIT
 * (https://github.com/matt-block/progressive-weather/blob/master/LICENSE)
 */

import React, { Component } from 'react'
import { connect } from 'react-redux'
import nanoid from 'nanoid'
import { fetchForecastDataFor } from '../store/actions'
import { ForecastList, ForecastDay } from './Widgets'

class Forecast extends Component {
  constructor(props) {
    super(props)

    this.onGeolocationSuccessful = this.onGeolocationSuccessful.bind(this)
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(this.onGeolocationSuccessful)
  }

  onGeolocationSuccessful(position) {
    this.props.fetchForecast(position.coords.latitude, position.coords.longitude)
  }

  render() {
    if (this.props.forecastData && !this.props.isFetching) {
      const days = this.props.forecastData.map(day => <ForecastDay key={nanoid()} {...day} />)

      return (
        <ForecastList>
          {days}
        </ForecastList>
      )
    } else {
      return <div></div>
    }
  }
}

const mapStateToProps = (state) => ({
  forecastData: state.forecastData,
  isFetching: state.isFetching
})

const mapDispatchToProps = (dispatch) => ({
  fetchForecast(latitude, longitude) {
    return dispatch(fetchForecastDataFor(latitude, longitude))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Forecast)