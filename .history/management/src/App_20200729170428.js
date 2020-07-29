import React, { Component } from 'react';
import './App.css';

import SeoulMap from './SeoulMap.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <svg width="1280" height="1280">
          <SeoulMap width={1280} height={1280} />
        </svg>
      </div>
    )
  }
}

export default App;