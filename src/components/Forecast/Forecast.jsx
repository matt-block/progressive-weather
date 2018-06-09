/*
 * Progressive Weather
 * Copyright © 2018 Matei Bogdan Radu <matei.radu.92@gmail.com>
 * Licensed under MIT
 * (https://github.com/matt-block/progressive-weather/blob/master/LICENSE)
 */

import React from 'react'
import { connect } from 'react-redux'
import nanoid from 'nanoid'
import { Container } from '../PageUtils'
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
  } else {
    return <div></div>
  }
}

const mapStateToProps = (state) => ({
  forecastData: state.forecastData,
  isFetching: state.isFetching
})

export default connect(mapStateToProps)(Forecast)