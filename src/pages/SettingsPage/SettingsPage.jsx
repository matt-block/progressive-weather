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
import { SettingsRow, SettingsGroup, SettingsRowLink, SettingsRowInternalLink, UpdateRow } from './Widgets'
import { APP_REPO_LINK, APP_VERSION } from '../../config'

function SettingsPage({ notificationEnabled }) {
  return (
    <Container>
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
      </SettingsGroup>
    </Container>
  )
}

SettingsPage.propTypes = {
  notificationEnabled: PropTypes.bool,
}

SettingsPage.defaultProps = {
  notificationEnabled: false,
}

const mapStateToProps = state => ({
  notificationEnabled: state.app.notification,
})

export default connect(mapStateToProps)(SettingsPage)