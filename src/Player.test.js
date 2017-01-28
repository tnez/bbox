import React from 'react'
import ReactDOM from 'react-dom'
import { shallow } from 'enzyme'
import Player from './Player'

const setup = (overrides = {}) => {
  const props = {}
  const wrapper = shallow(<Player {...props} />)

  return {
    props,
    wrapper,
  }
}

it('should render', () => {
  const { props } = setup()
  const root = document.createElement('div')

  ReactDOM.render(<Player {...props} />, root)
})
