/*
 * Progressive Weather
 * Copyright © 2018 Matei Bogdan Radu <matei.radu.92@gmail.com>
 * Licensed under MIT
 * (https://github.com/matt-block/progressive-weather/blob/master/LICENSE)
 */

import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import nanoid from 'nanoid'
import Container from '../PageUtils'
import { ForecastList, ForecastDay } from './Widgets'

function Forecast({ forecastData, isFetching }) {
  if (forecastData && !isFetching) {
    const days = forecastData.map(day => <ForecastDay key={nanoid()} {...day} />)

    return (
      <Container>
        <ForecastList>
          {days}
        </ForecastList>
      </Container>
    )
  }

  return <div />
}

Forecast.propTypes = {
  forecastData: PropTypes.arrayOf(PropTypes.shape({
    day: PropTypes.number,
    icon: PropTypes.string,
    max: PropTypes.number,
    min: PropTypes.number,
  })),
  isFetching: PropTypes.bool.isRequired,
}

Forecast.defaultProps = {
  forecastData: undefined,
}

const mapStateToProps = state => ({
  forecastData: state.api.forecastData,
  isFetching: state.api.isFetching,
})

export default connect(mapStateToProps)(Forecast)