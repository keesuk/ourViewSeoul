import React, { Component } from 'react';
import './App.css';
import './index.css';
import SeoulMap from './SeoulMap.js';
import IknowButton from './IknowButton';
import Window from './Window';

class App extends Component {
  render() {
    return (
      <div className="App">
        <IknowButton />
        <div className="map"><SeoulMap /><Window /></div>
      </div>
    );
  }
};

export default App;