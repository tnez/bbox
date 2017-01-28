import React from 'react'
import ReactDOM from 'react-dom'
import { shallow } from 'enzyme'
import PlayerRow from './PlayerRow'

const setup = (overrides = {}) => {
  const props = {
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
