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

describe('clearNotes', () => {

  it('clears data for a given row', () => {
    const { wrapper } = setup()
    // set first data row to all ones
    const [firstEntry, ...otherEntries] = wrapper.state().data
    wrapper.setState({
      data: [
        { ...firstEntry, notes: new Array(firstEntry.notes.length).fill(true) },
        ...otherEntries,
      ]
    })
    expect(wrapper.state().data[0].notes).toEqual(new Array(firstEntry.notes.length).fill(true))

    // clearData for row[0]
    wrapper.instance().clearData(0)
    expect(wrapper.state().data[0].notes).toEqual(new Array(firstEntry.notes.length).fill(false))
  })
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
