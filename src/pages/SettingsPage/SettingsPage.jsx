/*
 * Progressive Weather
 * Copyright © 2018 Matei Bogdan Radu <matei.radu.92@gmail.com>
 * Licensed under MIT
 * (https://github.com/matt-block/progressive-weather/blob/master/LICENSE)
 */

import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Container from '../../components/PageUtils'
import { SettingsRow, SettingsGroup, SettingsRowLink, SettingsRowInternalLink, UpdateRow, Select } from './Widgets'
import { APP_REPO_LINK, APP_VERSION, API_URL } from '../../config'
import { changeUnit } from '../../store/app/actions'

function SettingsPage({ notificationEnabled, unit, changeTempUnit }) {
  return (
    <Container>
      <SettingsGroup title='General'>
        <SettingsRow title='Temperature'>
          <Select
            value={unit}
            onChange={changeTempUnit}
          />
        </SettingsRow>
      </SettingsGroup>
      <SettingsGroup title='About'>
        <SettingsRow
          title='Version'
          subtitle={APP_VERSION}
        >
          {notificationEnabled ? <UpdateRow /> : null}
        </SettingsRow>
        <SettingsRowLink
          title='Source code'
          subtitle='Explore the source code on GitHub'
          url={APP_REPO_LINK}
        />
        <SettingsRowInternalLink
          title='Third-party licenses'
          url='/licenses'
        />
        <SettingsRowLink
          title='Data provider'
          subtitle='OpenWeatherMap'
          url={API_URL}
        />
      </SettingsGroup>
    </Container>
  )
}

SettingsPage.propTypes = {
  notificationEnabled: PropTypes.bool,
  unit: PropTypes.string.isRequired,
  changeTempUnit: PropTypes.func.isRequired,
}

SettingsPage.defaultProps = {
  notificationEnabled: false,
}

const mapStateToProps = state => ({
  notificationEnabled: state.app.notification,
  unit: state.app.unit,
})

const mapDispatchToProps = dispatch => ({
  changeTempUnit(event) {
    dispatch(changeUnit(event.target.value))
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(SettingsPage)