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
        setShow: useState(false),
      }
      
      this.show = this.show.bind(this);
      this.setShow = this.setShow.bind(this);
  }

  windowClose() {
    setShow(true);
  } 
  render() {
    return (
      <div className="App">
        <IknowButton />
          <div className="map">
            <button onClick={() => setShow(true)} className=""> <Window show={show}/> </button>
            <SeoulMap />
          </div>
      </div>
    );
  }
};

export default App;