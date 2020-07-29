import React, { Component } from 'react';
import './App.css';

import SeoulMap from './SeoulMap.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <SeoulMap />
      </div>
    )
  }
}

export default App;