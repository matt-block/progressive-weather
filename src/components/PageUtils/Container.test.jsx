import React from 'react'
import ReactDOM from 'react-dom'
import Container from './Container'

describe('Container', () => {
  test('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Container><div /></Container>, div)
    ReactDOM.unmountComponentAtNode(div)
  })
})