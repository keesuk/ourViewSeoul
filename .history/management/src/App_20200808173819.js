import React, { Component } from 'react';
import './App.css';
import './index.css';
import SeoulMap from './SeoulMap.js';
import IknowButton from './IknowButton';
import Window from './Window';

class App extends Component {
  constructor(props) {
    super(props);
      this.state = {
        show: false,
        setShow: false,
      }
  }

  windowClose = () => {
    this.setShow(false);
  }; 

  render() {
    return (
      <div className="App">
        <IknowButton />
          <div className="map">
            <button onClick={() => this.setShow(true)} className=""> 
              <Window 
                show={this.show} 
                windowClose={this.windowClose}
              />
            </button>
            <SeoulMap />
          </div>
      </div>
    );
  }
};

export default App;