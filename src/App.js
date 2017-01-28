import React, { Component } from 'react';
import 'normalize-css'
import './App.css';
import SampleBoxRow from './SampleBoxRow'
import Player from './Player'

class App extends Component {
  render() {
    return (
      <div className="App">
        <SampleBoxRow />
        <Player />
      </div>
    );
  }
}

export default App;
