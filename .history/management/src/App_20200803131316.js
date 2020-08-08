import React, { Component } from 'react';
import './App.css';
import SeoulMap from './SeoulMap.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <svg width="960" height="500">
          <SeoulMap width={960} height={500} />
        </svg>
      </div>
    )
  }
}

export default App;