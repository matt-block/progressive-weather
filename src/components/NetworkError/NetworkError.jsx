/*
 * Progressive Weather
 * Copyright © 2018 Matei Bogdan Radu <matei.radu.92@gmail.com>
 * Licensed under MIT
 * (https://github.com/matt-block/progressive-weather/blob/master/LICENSE)
 */

import React from 'react'
import PropTypes from 'prop-types'
import Container from '../PageUtils'
import { OfflineIcon } from '../Icons'
import './NetworkError.css'

function NetworkError({ error }) {
  const message = error === 'Failed to fetch' ? 'Cannot connect' : 'Something went wrong'

  return (
    <Container>
      <div className='network-error'>
        <div className='network-error__icon-wrapper'>
          <OfflineIcon />
        </div>
        <span>{message}</span>
      </div>
    </Container>
  )
}

NetworkError.propTypes = {
  error: PropTypes.string,
}

NetworkError.defaultProps = {
  error: '',
}

export default NetworkError