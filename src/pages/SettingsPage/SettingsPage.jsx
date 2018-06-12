/*
 * Progressive Weather
 * Copyright © 2018 Matei Bogdan Radu <matei.radu.92@gmail.com>
 * Licensed under MIT
 * (https://github.com/matt-block/progressive-weather/blob/master/LICENSE)
 */

import React from 'react'
import { Container } from '../../components/PageUtils'
import { SettingsRow, SettingsGroup, SettingsRowLink, SettingsRowInternalLink } from './Widgets'
import { APP_REPO_LINK, APP_VERSION } from '../../config'

function SettingsPage() {
  return (
    <Container>
      <SettingsGroup title='About'>
        <SettingsRow
          title='Version'
          subtitle={APP_VERSION}
        />
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

export default SettingsPage