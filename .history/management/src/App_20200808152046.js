import React, { Component } from 'react';
import './App.css';
import './index.css';
import SeoulMap from './SeoulMap.js';
import IknowButton from './IknowButton';
import Window from './Window';

class App extends Component {
  constructor(props){
    super(props);
      this.state = {
        show, setshow
      }
  }

  windowClose = () => setshow(true);

  render() {
    return (
      <div className="App">
        <IknowButton />
          <div className="map">
            <button onClick={() => setshow(true)} className=""> <Window shos={show}/> </button>
            <SeoulMap />
          </div>
      </div>
    );
  }
};

export default App;