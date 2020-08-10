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
      }
  }

  windowClose = () => {
    this.setState({ show: false });
  }; 

  render() {
    return (
      <div className="App">
        <IknowButton />
          <div className="map">
            <button onClick={() => this.setState({ show: true })} className="station-btn"></button>
              <Window show={this.state.show} windowClose={this.windowClose}
              />
            <SeoulMap />
          </div>
      </div>
    );
  }
};

export default App;