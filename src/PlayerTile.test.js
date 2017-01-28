import React from 'react'
import ReactDOM from 'react-dom'
import { shallow } from 'enzyme'
import PlayerTile from './PlayerTile'

const setup = (overrides = {}) => {
  const props = {
    active: overrides.active || false,
    playing: overrides.active || false,
  }
  const wrapper = shallow(<PlayerTile {...props} />)

  return {
    props,
    wrapper,
  }
}

it('should render', () => {
  const { props } = setup()
  const root = document.createElement('div')

  ReactDOM.render(<PlayerTile {...props} />, root)
})

it('should have correct class when active', () => {
  const { wrapper } = setup({active: true})
  expect(wrapper.hasClass('PlayerTile--active'))
})

it('should have correct class when playing', () => {
  const { wrapper } = setup({playing: true})
  expect(wrapper.hasClass('PlayerTile--playing'))
})

it('should have correct class when active and playing', () => {
  const { wrapper } = setup({
    active: true,
    playing: true,
  })
  expect(wrapper.hasClass('PlayingTile--active-and-playing'))
})

it('should have correct class when neither active nor playing', () => {
  const { wrapper } = setup()
  expect(wrapper.hasClass('PlayingTile'))
})
