/*
 * Progressive Weather
 * Copyright © 2018 Matei Bogdan Radu <matei.radu.92@gmail.com>
 * Licensed under MIT
 * (https://github.com/matt-block/progressive-weather/blob/master/LICENSE)
 */

import { Component } from 'react'
import { connect } from 'react-redux'
import { fetchCurrentDataFor } from '../../store/actions'

/**
 * Component responsable for handling geolocation requests.
 *
 * This component does not emmit neither DOM nor other components.
 */
class GeoHandler extends Component {
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

  // TODO: onGeolocationUnsuccessful.

  render() { return null }
}

const mapDispatchToProps = (dispatch) => ({
  fetchData(latitude, longitude) {
    return dispatch(fetchCurrentDataFor(latitude, longitude))
  }
})

export default connect(undefined, mapDispatchToProps)(GeoHandler)