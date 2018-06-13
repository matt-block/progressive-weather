/*
 * Progressive Weather
 * Copyright © 2018 Matei Bogdan Radu <matei.radu.92@gmail.com>
 * Licensed under MIT
 * (https://github.com/matt-block/progressive-weather/blob/master/LICENSE)
 */

// eslint-disable-next-line
import Worker from 'worker-loader!../../utils/workers/fileToTextLoader.worker'
import licensesPath from '../../assets/third_party_licenses.md'

const addLicensesText = text => ({
  type: 'LICENSES_ADD',
  licenses: text,
})

export const removeLicensesText = () => ({
  type: 'LICENSES_REMOVE',
})

export const fetchLicenseText = () => async (dispatch) => {
  const worker = new Worker()
  worker.postMessage(licensesPath)

  worker.onmessage = (event) => {
    dispatch(addLicensesText(event.data))
  }
}