/*
 * Progressive Weather
 * Copyright © 2018 Matei Bogdan Radu <matei.radu.92@gmail.com>
 * Licensed under MIT
 * (https://github.com/matt-block/progressive-weather/blob/master/LICENSE)
 */

import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import moment from 'moment'
import { Container } from '../PageUtils'
import { WeatherWidget, LoadingWidget, StylingWrapper, SecondaryWidget } from './Widgets'

function CurrentWeather({ currentData, isFetching }) {
  if (!currentData || isFetching) {
    return (
      <StylingWrapper>
        <LoadingWidget />
      </StylingWrapper>
    )
  }

  return (
    <Fragment>
      <StylingWrapper>
        <WeatherWidget
          temp={currentData.temperature}
          tempMin={currentData.temperatureMin}
          tempMax={currentData.temperatureMax}
          description={currentData.description}
          icon={currentData.icon}
        />
      </StylingWrapper>
      <Container>
        <SecondaryWidget
          wind={currentData.wind}
          humidity={currentData.humidity}
          sunrise={currentData.sunrise}
          sunset={currentData.sunset}
        />
      </Container>
    </Fragment>
  )
}

CurrentWeather.propTypes = {
  currentData: PropTypes.shape({
    locationName: PropTypes.string,
    temperature: PropTypes.number,
    temperatureMin: PropTypes.number,
    temperatureMax: PropTypes.number,
    humidity: PropTypes.number,
    sunrise: PropTypes.instanceOf(moment),
    sunset: PropTypes.instanceOf(moment),
    description: PropTypes.string,
    icon: PropTypes.string,
    wind: PropTypes.number,
  }),
  isFetching: PropTypes.bool.isRequired,
}

CurrentWeather.defaultProps = {
  currentData: undefined,
}

const mapStateToProps = state => ({
  currentData: state.api.currentData,
  isFetching: state.api.isFetching,
})

export default connect(mapStateToProps)(CurrentWeather)