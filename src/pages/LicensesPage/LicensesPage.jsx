/*
 * Progressive Weather
 * Copyright © 2018 Matei Bogdan Radu <matei.radu.92@gmail.com>
 * Licensed under MIT
 * (https://github.com/matt-block/progressive-weather/blob/master/LICENSE)
 */

import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import ReactMarkdown from 'react-markdown'
import { Container } from '../../components/PageUtils'
import fetchLicenseText from '../../store/licenses/actions'
import './LicensesPage.css'

/**
 * Page responsable for displaying all third-party software licenses.
 */
function LicensesPage({ license, fetchLicense }) {
  fetchLicense()

  return (
    <Container>
      <ReactMarkdown
        source={license}
        className='react-markdown-custom'
      />
    </Container>
  )
}

LicensesPage.propTypes = {
  license: PropTypes.string,
  fetchLicense: PropTypes.func.isRequired,
}

LicensesPage.defaultProps = {
  license: '',
}

const mapStateToProps = state => ({
  license: state.licenses,
})

const mapDispatchToProps = dispatch => ({
  fetchLicense() {
    return dispatch(fetchLicenseText())
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(LicensesPage)