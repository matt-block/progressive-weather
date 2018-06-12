/*
 * Progressive Weather
 * Copyright © 2018 Matei Bogdan Radu <matei.radu.92@gmail.com>
 * Licensed under MIT
 * (https://github.com/matt-block/progressive-weather/blob/master/LICENSE)
 */

import licensesPath from '../../assets/third_party_licenses.md'

const addLicensesText = text => ({
  type: 'LICENSES_ADD',
  licenses: text,
})

const fetchLicenseText = () => async (dispatch) => {
  const text = await fetch(licensesPath).then(response => response.text())
  dispatch(addLicensesText(text))
}

export default fetchLicenseText