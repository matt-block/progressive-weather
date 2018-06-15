import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import NotificationDot from './NotificationDot'

Enzyme.configure({ adapter: new Adapter() })

describe('NotificationDot', () => {
  test('renders as inactive', () => {
    const div = shallow(<NotificationDot><div /></NotificationDot>)

    const inactiveClassApplied = div.find('.icon-notification__dot--inactive').length
    expect(inactiveClassApplied).toBeTruthy()
  })

  test('renders as active', () => {
    const div = shallow(<NotificationDot isActive><div /></NotificationDot>)

    const inactiveClassApplied = div.find('.icon-notification__dot--inactive').length
    expect(inactiveClassApplied).toBeFalsy()
  })
})