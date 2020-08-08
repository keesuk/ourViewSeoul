import React, { Component, useState } from 'react';
import './App.css';
import './index.css';
import SeoulMap from './SeoulMap.js';
import IknowButton from './IknowButton';
import Window from './Window';

class App extends Component {
  state = {
    show: useState(false),
    setShow: useState(false),
  }

  windowClose = () => {
    this.setShow(true);
  }; 

  render() {
    return (
      <div className="App">
        <IknowButton />
          <div className="map">
            <button onClick={() => this.setShow(true)} className=""> <Window show={this.show} windowClose={this.windowClose}/> </button>
            <SeoulMap />
          </div>
      </div>
    );
  }
};

export default App;