/*
 * Progressive Weather
 * Copyright © 2018 Matei Bogdan Radu <matei.radu.92@gmail.com>
 * Licensed under MIT
 * (https://github.com/matt-block/progressive-weather/blob/master/LICENSE)
 */

import React from 'react'
import { connect } from 'react-redux'
import { Container } from '../PageUtils'
import { WeatherWidget, LoadingWidget, StylingWrapper, SecondaryWidget } from './Widgets'

function CurrentWeather({ currentData, isFetching }) {
  if (!currentData || isFetching) {
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
      </React.Fragment>
    )
  }
}

const mapStateToProps = (state) => ({
  currentData: state.currentData,
  isFetching: state.isFetching
})

export default connect(mapStateToProps)(CurrentWeather)