import React, { Component } from 'react';
import './CSS/App.css';
import './CSS/index.css';
import SeoulMap from './App/SeoulMap.js';
import Output from './App/Output.js';
import IknowButton from './App/IknowButton';


class App extends Component {
  state = {
    show : false,
  }

  outputOn = () => {
    this.setState({ show: true })
  }
  outputClose = () => {
      this.setState({ show: false })
  }

  render() {
    return (
      <div className="App">
        <div className="map">
          <IknowButton />
          <SeoulMap />
        </div>
          <Output show={this.state.show} outputClose={this.outputClose} />
      </div>
    );
  }
};

export default App;