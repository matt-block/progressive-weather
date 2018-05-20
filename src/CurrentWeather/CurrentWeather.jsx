/*
 * Progressive Weather
 * Copyright © 2018 Matei Bogdan Radu <matei.radu.92@gmail.com>
 * Licensed under MIT
 * (https://github.com/matt-block/progressive-weather/blob/master/LICENSE)
 */

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { WeatherWidget, LoadingWidget } from './Widgets'
import { fetchCurrentDataFor } from '../store/actions'

class CurrentWeather extends Component {
  constructor(props) {
    super(props)

    this.onGeolocationSuccessful = this.onGeolocationSuccessful.bind(this)
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(this.onGeolocationSuccessful)
  }

  onGeolocationSuccessful(position) {
    this.props.fetchData(position.coords.latitude, position.coords.longitude)
  }

  render() {
    if (!this.props.currentData || this.props.isFetching) {
      return <LoadingWidget />
    } else {
      return (
        <WeatherWidget
          location={this.props.currentData.locationName}
          temp={this.props.currentData.temperature}
          humid={this.props.currentData.humidity}
          description={this.props.currentData.description}
        />
      )
    }
  }
}

const mapStateToProps = (state) => ({
  currentData: state.currentData,
  isFetching: state.isFetching
})

const mapDispatchToProps = (dispatch) => ({
  fetchData(latitude, longitude) {
    return dispatch(fetchCurrentDataFor(latitude, longitude))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(CurrentWeather)