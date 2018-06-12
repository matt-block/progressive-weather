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
import { fetchLicenseText } from '../../store/actions'
import './LicensesPage.css'

function LicensesPage({ license, fetchLicense }) {
  fetchLicense()
  return (
    <Container>
      <ReactMarkdown source={license} className='markdown' />
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
  license: state.license,
})

const mapDispatchToProps = dispatch => ({
  fetchLicense() {
    return dispatch(fetchLicenseText())
  },
})
export default connect(mapStateToProps, mapDispatchToProps)(LicensesPage)