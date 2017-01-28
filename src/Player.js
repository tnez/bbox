import React, { Component } from 'react'
import data from './SampleBoxData'
import './Player.css'
// child components
import PlayerRow from './PlayerRow'

const NUM_BEATS = 4
const NUM_MEASURES = 4

class Player extends Component {
  constructor(props) {
    super(props)
    this.initializeData()
  }

  initializeData() {
    this.data = data.map(entry => {
      entry.notes = new Array(NUM_BEATS * NUM_MEASURES).fill(0)
      return entry
    })
  }

  render() {
    return(
      <div className='Player'>
        {this.data.map((d, idx) => <PlayerRow key={idx} data={d} />)}
        <button className="Player--play-btn">Start | Pause</button>
      </div>
    )
  }
}

export default Player
