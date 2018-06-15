import React from 'react'
import ReactDOM from 'react-dom'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import NetworkError from './NetworkError'

Enzyme.configure({ adapter: new Adapter() })

describe('NetworkError', () => {
  test('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<NetworkError />, div)
    ReactDOM.unmountComponentAtNode(div)
  })

  test('renders with expected message', () => {
    const div = shallow(<NetworkError error='Failed to fetch' />)

    const displayedMessage = div.find('span').text()
    expect(displayedMessage).toEqual('You appear to be offline. Check your connection.')
  })
})