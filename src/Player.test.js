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

describe('tick', () => {
  it('increments state.t by 1', () => {
    const { wrapper } = setup()
    expect(wrapper.state().t).toBe(0)
    wrapper.instance().tick()

    expect(wrapper.state().t).toBe(1)
  })

  it('sets state.t to 0 when t is 15', () => {
    const { wrapper } = setup()
    wrapper.setState({t: 15})
    expect(wrapper.state().t).toBe(15)
    wrapper.instance().tick()

    expect(wrapper.state().t).toBe(0)
  })
})

describe('togglePlaying', () => {
  it('sets state.playing to false when previously true', () => {
    const { wrapper } = setup()
    expect(wrapper.state().playing).toBe(false)
    wrapper.instance().togglePlaying()

    expect(wrapper.state().playing).toBe(true)
  })

  it('sets state.playing to true when previously false', () => {
    const { wrapper } = setup()
    wrapper.setState({playing: true})
    expect(wrapper.state().playing).toBe(true)
    wrapper.instance().togglePlaying()

    expect(wrapper.state().playing).toBe(false)
  })
})
