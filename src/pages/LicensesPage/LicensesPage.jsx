/*
 * Progressive Weather
 * Copyright © 2018 Matei Bogdan Radu <matei.radu.92@gmail.com>
 * Licensed under MIT
 * (https://github.com/matt-block/progressive-weather/blob/master/LICENSE)
 */

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import ReactMarkdown from 'react-markdown'
import Container from '../../components/PageUtils'
import Spinner from '../../components/Spinner'
import { fetchLicenseText, removeLicensesText } from '../../store/licenses/actions'
import './LicensesPage.css'

/**
 * Page responsable for displaying all third-party software licenses.
 */
class LicensesPage extends Component {
  componentWillUnmount() {
    this.props.removeLicense()
  }

  render() {
    if (!this.props.license) {
      this.props.fetchLicense()

      return (
        <Container>
          <div className='current-weather-widget__spinner'>
            <Spinner />
          </div>
        </Container>
      )
    }

    return (
      <Container>
        <ReactMarkdown
          source={this.props.license}
          className='react-markdown-custom'
        />
      </Container>
    )
  }
}

LicensesPage.propTypes = {
  license: PropTypes.string,
  fetchLicense: PropTypes.func.isRequired,
  removeLicense: PropTypes.func.isRequired,
}

LicensesPage.defaultProps = {
  license: undefined,
}

const mapStateToProps = state => ({
  license: state.licenses,
})

const mapDispatchToProps = dispatch => ({
  fetchLicense() {
    return dispatch(fetchLicenseText())
  },
  removeLicense() {
    return dispatch(removeLicensesText())
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(LicensesPage)