import licensesReducer from './reducer'
import { addLicensesText, removeLicensesText } from './actions'

describe('Licenses reducer', () => {
  test('returns the initial state', () => {
    const initialState = licensesReducer(undefined, {})

    expect(initialState).toEqual(null)
  })

  test('handles LICENSES_ADD', () => {
    const reducerState = licensesReducer(undefined, addLicensesText('License text.'))

    expect(reducerState).toEqual('License text.')
  })

  test('handles LICENSES_REMOVE', () => {
    const reducerState = licensesReducer(undefined, removeLicensesText())

    expect(reducerState).toEqual(null)
  })
})