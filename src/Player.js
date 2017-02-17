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
      data: data,
      playing: false,
      t: 0,
    }
  }

  addNote(rowIdx, noteIdx) {
    const prevData = this.state.data[rowIdx].notes
    this.setState({data: [
      ...this.state.data.slice(0, rowIdx),
      { ...this.state.data[rowIdx], notes: [...prevData.slice(0, noteIdx), true, ...prevData.slice(noteIdx + 1)] },
      ...this.state.data.slice(rowIdx + 1),
    ]})
  }

  clearData(idx) {
    this.setState({data: [
      ...this.state.data.slice(0, idx),
      { ...this.state.data[idx], notes: this.state.data[idx].notes.fill(false) },
      ...this.state.data.slice(idx + 1),
    ]})
  }

  handleKeyDown(e) {
    switch (e.key) {
      case 'a':
        this.addNote(0, this.state.t)
        this.playAudio(0)
        break
      case 's':
        this.addNote(1, this.state.t)
        this.playAudio(1)
        break
      case 'd':
        this.addNote(2, this.state.t)
        this.playAudio(2)
        break
      case 'f':
        this.addNote(3, this.state.t)
        this.playAudio(3)
        break
      default:
        console.log(`Unhandled Keypress: ${e.key}`)
    }
  }

  playAudio(idx) {
    data[idx].audio.pause()
    data[idx].audio.currentTime = 0
    data[idx].audio && data[idx].audio.play()
  }

  playNotes(t) {
    this.state.data.forEach((d, idx) => {
      if (d.notes[t]) {
         this.playAudio(idx)
      }
    })
  }

  tick() {
    const tNext = (this.state.t + 1) % (NUM_BEATS * NUM_MEASURES)
    this.setState({t: tNext})
    this.playNotes(this.state.t)
  }

  togglePlaying() {
    if (this.state.playing) {
      this.timer && clearInterval(this.timer)
      document.removeEventListener("keydown", this.handleKeyDown.bind(this))
      this.setState({playing: false})
    } else {
      this.timer = setInterval(this.tick.bind(this), 220)
      document.addEventListener("keydown", this.handleKeyDown.bind(this))
      this.setState({playing: true})
      this.playNotes(this.state.t)
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
