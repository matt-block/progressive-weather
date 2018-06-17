import appReducer from './reducer'
import { setUnit, enableNotification, disableNotification } from './actions'

describe('App reducer', () => {
  test('returns the initial state', () => {
    const initialState = appReducer(undefined, {})

    expect(initialState).toEqual({
      notification: false,
      unit: 'metric',
    })
  })

  test('handles APP_SET_UNIT', () => {
    const reducerState = appReducer(undefined, setUnit('imperial'))

    expect(reducerState).toEqual({
      notification: false,
      unit: 'imperial',
    })
  })

  test('handles APP_ENABLE_NOTIFICATION', () => {
    const reducerState = appReducer(undefined, enableNotification())

    expect(reducerState).toEqual({
      notification: true,
      unit: 'metric',
    })
  })

  test('handles APP_DISABLE_NOTIFICATION', () => {
    const reducerState = appReducer(
      {
        notification: true,
        unit: 'metric',
      },
      disableNotification(),
    )

    expect(reducerState).toEqual({
      notification: false,
      unit: 'metric',
    })
  })
})