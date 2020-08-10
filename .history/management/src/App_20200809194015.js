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
        setshow: false,
      }
  }

  windowClose = () => {
    this.setState({ setshow: false });
  }; 

  render() {
    return (
      <div className="App">
        <IknowButton />
          <div className="map">
            <button onClick={() => this.setState({ show: true })} className="station-btn"> 
              <Window 
                show={this.state.show} 
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