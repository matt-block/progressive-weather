/*
 * Progressive Weather
 * Copyright © 2018 Matei Bogdan Radu <matei.radu.92@gmail.com>
 * Licensed under MIT
 * (https://github.com/matt-block/progressive-weather/blob/master/LICENSE)
 */

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Container } from '../PageUtils'
import { WeatherWidget, LoadingWidget, StylingWrapper, SecondaryWidget } from './Widgets'
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
      return (
        <StylingWrapper>
          <LoadingWidget />
        </StylingWrapper>
      )
    } else {
      return (
        <React.Fragment>
          <StylingWrapper>
            <WeatherWidget
              temp={this.props.currentData.temperature}
              tempMin={this.props.currentData.temperatureMin}
              tempMax={this.props.currentData.temperatureMax}
              description={this.props.currentData.description}
              icon={this.props.currentData.icon}
            />
          </StylingWrapper>
          <Container>
            <SecondaryWidget
              wind={this.props.currentData.wind}
              humidity={this.props.currentData.humidity}
              sunrise={this.props.currentData.sunrise}
              sunset={this.props.currentData.sunset}
            />
          </Container>
        </React.Fragment>
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