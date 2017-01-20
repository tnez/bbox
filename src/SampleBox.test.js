import React from 'react'
import ReactDOM from 'react-dom'
import { shallow } from 'enzyme'
import SampleBox from './SampleBox'

const setup = (overrides = {}) => {
  const props = {
    active: overrides.active || false,
    clickHandler: overrides.clickHandler || jest.fn(),
    keylabel: overrides.keylabel || 'A',
    label: overrides.label || 'Kick',
  }
  const wrapper = shallow(<SampleBox {...props} />)

  return {
    props,
    wrapper,
  }
}

it('renders ', () => {
  const { props } = setup()
  const div = document.createElement('div')

  ReactDOM.render(<SampleBox {...props} />, div)
})

it('applies active class when active', () => {
  const { wrapper } = setup({active: true})
  expect(wrapper.hasClass('SampleBox-active')).toBe(true)
})

it('should use unmodified class when not active', () => {
  const { wrapper } = setup({active: false})
  expect(wrapper.hasClass('SampleBox')).toBe(true)
})

it('should render keylabel', () => {
  const { wrapper } = setup({keylabel: 'Z'})

  const expected = <div className="SampleBox--keylabel">Z</div>
  const actual = wrapper.find('.SampleBox--keylabel').node

  expect(actual).toEqual(expected)
})

it('should render label', () => {
const { wrapper } = setup({label: "Boom"})

  const expected = <div className="SampleBox--label">Boom</div>
  const actual = wrapper.find('.SampleBox--label').node

  expect(actual).toEqual(expected)
})

it('should call handler when clicked', () => {
  const mockHandler = jest.fn()
  const { wrapper } = setup({clickHandler: mockHandler})

  wrapper.simulate('click')
  expect(mockHandler).toBeCalled()
})
