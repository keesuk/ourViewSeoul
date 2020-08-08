import React, { Component } from 'react';
import './App.css';
import SeoulMap from './SeoulMap.js';

class App extends Component {
  render() {
    return (
      <SeoulMap>
        <div ref="myDiv"/>
      </SeoulMap>
    )
  }
}

export default App;