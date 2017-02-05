import React from 'react'
import ReactDOM from 'react-dom'
import { shallow } from 'enzyme'
import PlayerRow from './PlayerRow'

const setup = (overrides = {}) => {
  const props = {
    clearHandler: overrides.clearHanlder || jest.fn(),
    data: overrides.data || {
      keylabel: 'A',
      label: 'Kick',
      notes: new Array(16).fill(0),
    },
  }
  const wrapper = shallow(<PlayerRow {...props} />)

  return {
    props,
    wrapper,
  }
}

it('should render', () => {
  const { props } = setup()
  const root = document.createElement('div')

  ReactDOM.render(<PlayerRow {...props} />, root)
})

describe('clear button', () => {
  it('should call handler when clicked', () => {
    const { props, wrapper} = setup()
    const fn = props.clearHandler
    wrapper.find('.PlayerRow--clear-btn').simulate('click')

    expect(fn).toHaveBeenCalled()
  })
})
