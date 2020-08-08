import React, { Component, useState } from 'react';
import './App.css';
import './index.css';
import SeoulMap from './SeoulMap.js';
import IknowButton from './IknowButton';
import Window from './Window';

class App extends Component {
  constructor(props){
    super(props);
      this.state = {
        show: useState(false),
        setshow: useState(false),
      }
  }

  windowClose = () => setshow(true);

  render() {
    return (
      <div className="App">
        <IknowButton />
          <div className="map">
            <button onClick={() => setshow(true)} className=""> <Window show={show}/> </button>
            <SeoulMap />
          </div>
      </div>
    );
  }
};

export default App;