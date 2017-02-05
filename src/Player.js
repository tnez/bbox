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
    this.state = {
      data: this.getInitialData(data),
      playing: false,
      t: 0,
    }
  }

  clearData(idx) {
    this.setState({data: [
      ...this.state.data.slice(0, idx),
      { ...this.state.data[idx], notes: this.state.data[idx].notes.fill(false) },
      ...this.state.data.slice(idx + 1),
    ]})
  }

  getInitialData(data) {
    return data.map(entry => {
      entry.notes = new Array(NUM_BEATS * NUM_MEASURES).fill(false)
      // TODO: remove this line
      entry.notes = entry.notes.map(() => Math.random() > 0.5)
      return entry
    })
  }

  tick() {
    const tNext = (this.state.t + 1) % (NUM_BEATS * NUM_MEASURES)
    this.setState({t: tNext})
  }

  togglePlaying() {
    if (this.state.playing) {
      this.timer && clearInterval(this.timer)
      this.setState({playing: false})
    } else {
      this.timer = setInterval(this.tick.bind(this), 220)
      this.setState({playing: true})
    }
  }

  render() {
    return(
      <div className='Player'>
        {this.state.data.map((d, idx) =>
          <PlayerRow key={idx} clearHandler={() => this.clearData(idx)}data={d} t={this.state.t}/>
         )}
        <button className="Player--play-btn" onClick={this.togglePlaying.bind(this)}>Start | Pause</button>
      </div>
    )
  }
}

export default Player
