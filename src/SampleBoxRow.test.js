import React from 'react'
import ReactDOM from 'react-dom'
import SampleBoxRow from './SampleBoxRow'

const setup = (overrides = {}) => {
  const props = {
    sampleBoxData: overrides.sampleBoxData || [],
  }

  return { props }
}

it('renders', () => {
  const { props } = setup()
  const div = document.createElement('div')

  ReactDOM.render(<SampleBoxRow {...props} />, div)
})

it('renders each child', () => {
  const sampleBoxData = [
    {
      keylabel: "A",
      label: "Eh"
    },
    {
      keylabel: "B",
      label: "Bee",
    }
  ]
  const { wrapper } = setup({sampleBoxData})

})
