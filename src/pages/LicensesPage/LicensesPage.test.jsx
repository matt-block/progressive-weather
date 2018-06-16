import React from 'react'
import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { LicensesPageBase } from './LicensesPage'

Enzyme.configure({ adapter: new Adapter() })

describe('LicensesPage', () => {
  test('renders a spinner while loading', () => {
    const props = {
      license: undefined,
      fetchLicense: () => {},
      removeLicense: () => {},
    }

    const page = mount(<LicensesPageBase {...props} />)
    const spinner = page.find('.spinner').length
    const reactMarkdownComponent = page.find('.react-markdown-custom').lenght

    expect(spinner).toBeTruthy()
    expect(reactMarkdownComponent).toBeFalsy()

    page.unmount()
  })

  test('renders licenses text', () => {
    const props = {
      license: 'Nice legal text',
      fetchLicense: () => {},
      removeLicense: () => {},
    }

    const page = mount(<LicensesPageBase {...props} />)
    const spinner = page.find('.spinner').length
    const licensesText = page.text()

    expect(spinner).toBeFalsy()
    expect(licensesText).toBe('Nice legal text')

    page.unmount()
  })
})