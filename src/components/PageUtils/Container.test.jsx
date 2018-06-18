import React from 'react'
import ReactDOM from 'react-dom'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Container from './Container'

Enzyme.configure({ adapter: new Adapter() })

describe('Container', () => {
  test('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Container><div /></Container>, div)
    ReactDOM.unmountComponentAtNode(div)
  })

  test('renders correctly for Toolbar', () => {
    const div = shallow(<Container toolbar><div /></Container>)

    const toolbarClass = div.find('.container--toolbar').length
    expect(toolbarClass).toBeTruthy()
    div.unmount()
  })
})