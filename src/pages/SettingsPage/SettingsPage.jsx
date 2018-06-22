/*
 * Progressive Weather
 * Copyright © 2018 Matei Bogdan Radu <matei.radu.92@gmail.com>
 * Licensed under MIT
 * (https://github.com/matt-block/progressive-weather/blob/master/LICENSE)
 */

import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { push } from 'connected-react-router'
import Container from '../../components/PageUtils'
import {
  SettingsRow,
  SettingsGroup,
  SettingsRowLink,
  SettingsRowInternalLink,
  UpdateRow,
  Select,
} from './Widgets'
import {
  APP_REPO_LINK,
  APP_BUGREPORT_LINK,
  APP_VERSION,
  API_URL,
} from '../../config'
import { changeUnit } from '../../store/app/actions'
import { startApiFetching } from '../../store/api/actions'

export function SettingsPageBase(props) {
  return (
    <Container>
      <SettingsGroup title='General'>
        <SettingsRow title='Temperature'>
          <Select
            value={props.unit}
            onChange={props.changeTempUnit}
          />
        </SettingsRow>
      </SettingsGroup>
      <SettingsGroup title='Help'>
        <SettingsRowLink
          title='Having issues?'
          subtitle='Open an issue on GitHub'
          url={APP_BUGREPORT_LINK}
        />
      </SettingsGroup>
      <SettingsGroup title='About'>
        <SettingsRow
          title='Version'
          subtitle={APP_VERSION}
        >
          {props.notificationEnabled ? <UpdateRow update={props.updateRefresh} /> : null}
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

SettingsPageBase.propTypes = {
  notificationEnabled: PropTypes.bool,
  unit: PropTypes.string.isRequired,
  changeTempUnit: PropTypes.func.isRequired,
  updateRefresh: PropTypes.func,
}

SettingsPageBase.defaultProps = {
  notificationEnabled: false,
  updateRefresh: undefined,
}

const mapStateToProps = state => ({
  notificationEnabled: state.app.notification,
  unit: state.app.unit,
})

const mapDispatchToProps = dispatch => ({
  changeTempUnit(event) {
    dispatch(changeUnit(event.target.value))
  },
  updateRefresh() {
    dispatch(startApiFetching())
    dispatch(push('/'))
    window.location.reload()
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(SettingsPageBase)